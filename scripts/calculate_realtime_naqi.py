import json
import os
import sys
import argparse
import urllib.request

# Default coordinate centers
KNOWN_LOCATIONS = {
    "mumbai": (19.0760, 72.8777, "Mumbai, Maharashtra"),
    "hyderabad": (17.3850, 78.4867, "Hyderabad, Telangana"),
    "delhi": (28.6139, 77.2090, "New Delhi, Delhi NCR"),
    "bengaluru": (12.9716, 77.5946, "Bengaluru, Karnataka"),
    "chennai": (13.0827, 80.2707, "Chennai, Tamil Nadu"),
    "kolkata": (22.5726, 88.3639, "Kolkata, West Bengal"),
    "pune": (18.5204, 73.8567, "Pune, Maharashtra"),
}

DEFAULT_API_KEY = "04bbf64005764c6d5244b124ad5b98d6"

def get_api_key():
    env_key = os.environ.get("OPENWEATHER_API_KEY")
    if env_key:
        return env_key
    # Check .env.local
    try:
        env_path = os.path.join(os.path.dirname(__file__), "..", ".env.local")
        if os.path.exists(env_path):
            with open(env_path, "r", encoding="utf-8") as f:
                for line in f:
                    if line.strip().startswith("OPENWEATHER_API_KEY="):
                        return line.strip().split("=", 1)[1].strip()
    except Exception:
        pass
    return DEFAULT_API_KEY

def calculate_indian_sub_index(concentration, pollutant):
    """
    Calculates the Indian National AQI sub-index for a given pollutant concentration
    based on the Central Pollution Control Board (CPCB) official breakpoints.
    """
    breakpoints = {
        'pm2_5': [(0, 30, 0, 50), (31, 60, 51, 100), (61, 90, 101, 200), (91, 120, 201, 300), (121, 250, 301, 400), (251, 500, 401, 500)],
        'pm10':  [(0, 50, 0, 50), (51, 100, 51, 100), (101, 250, 101, 200), (251, 350, 201, 300), (351, 430, 301, 400), (431, 500, 401, 500)],
        'no2':   [(0, 40, 0, 50), (41, 80, 51, 100), (81, 180, 101, 200), (181, 280, 201, 300), (281, 400, 301, 400), (401, 500, 401, 500)],
        'o3':    [(0, 50, 0, 50), (51, 100, 51, 100), (101, 168, 101, 200), (169, 208, 201, 300), (209, 748, 301, 400), (749, 1000, 401, 500)],
        'so2':   [(0, 40, 0, 50), (41, 80, 51, 100), (81, 380, 101, 200), (381, 800, 201, 300), (801, 1600, 301, 400), (1601, 1600, 401, 500)],
        'co':    [(0, 1.0, 0, 50), (1.1, 2.0, 51, 100), (2.1, 10.0, 101, 200), (10.1, 17.0, 201, 300), (17.1, 34.0, 301, 400), (34.1, 34.0, 401, 500)]
    }

    if pollutant not in breakpoints or concentration is None:
        return 0

    # Adjust CO units from OpenWeather µg/m³ to Indian CPCB mg/m³
    if pollutant == 'co':
        concentration = concentration / 1000.0

    for (b_lo, b_hi, i_lo, i_hi) in breakpoints[pollutant]:
        if b_lo <= concentration <= b_hi:
            return ((i_hi - i_lo) / (b_hi - b_lo)) * (concentration - b_lo) + i_lo

    if concentration > breakpoints[pollutant][-1][1]:
        return 500
    return 0

def get_india_aqi_category(aqi_val):
    if aqi_val <= 50: return "Good"
    elif aqi_val <= 100: return "Satisfactory"
    elif aqi_val <= 200: return "Moderate"
    elif aqi_val <= 300: return "Poor"
    elif aqi_val <= 400: return "Very Poor"
    else: return "Severe"

def openweather_to_india_aqi(data):
    components = data['list'][0]['components']
    ow_aqi = data['list'][0]['main']['aqi']
    
    sub_indices = {}
    for pollutant in ['pm2_5', 'pm10', 'no2', 'o3', 'so2', 'co']:
        if pollutant in components:
            sub_indices[pollutant] = calculate_indian_sub_index(components[pollutant], pollutant)

    overall_aqi = round(max(sub_indices.values()))
    category = get_india_aqi_category(overall_aqi)
    dominant = max(sub_indices, key=sub_indices.get)

    return {
        "openweather_raw_aqi": ow_aqi,
        "overall_india_aqi": overall_aqi,
        "category": category,
        "dominant_pollutant": dominant.upper(),
        "sub_indices": {k.upper(): round(v, 1) for k, v in sub_indices.items()},
        "raw_components": components
    }

def fetch_live_data(lat, lon):
    api_key = get_api_key()
    url = f"https://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={api_key}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=10) as resp:
        raw_json = resp.read().decode('utf-8')
        return json.loads(raw_json)

def main():
    parser = argparse.ArgumentParser(description="Calculate Indian National AQI from Real-Time OpenWeather Telemetry")
    parser.add_argument("--city", type=str, default="mumbai", help="City name (mumbai, hyderabad, delhi, bengaluru, etc.)")
    parser.add_argument("--lat", type=float, help="Latitude")
    parser.add_argument("--lon", type=float, help="Longitude")
    args = parser.parse_args()

    if args.lat is not None and args.lon is not None:
        lat, lon = args.lat, args.lon
        name = f"Coordinates ({lat}, {lon})"
    else:
        city_key = args.city.lower()
        if city_key in KNOWN_LOCATIONS:
            lat, lon, name = KNOWN_LOCATIONS[city_key]
        else:
            lat, lon, name = KNOWN_LOCATIONS["mumbai"]

    print(f"Fetching real-time OpenWeather atmospheric telemetry for: {name} ({lat}, {lon})...")
    live_json = fetch_live_data(lat, lon)
    res = openweather_to_india_aqi(live_json)

    print("\n" + "=" * 54)
    print(f" REAL-TIME AIR QUALITY CALCULATION: {name}")
    print("=" * 54)
    print(f" OpenWeather Direct Index  : Level {res['openweather_raw_aqi']} / 5")
    print(f" Calculated Indian NAQI    : {res['overall_india_aqi']} ({res['category']})")
    print(f" Governing / Dominant      : {res['dominant_pollutant']}")
    print("-" * 54)
    print(" Individual Pollutant Sub-Indices (0–500 scale):")
    for pol, val in res['sub_indices'].items():
        print(f"   • {pol:<7}: {val:>5.1f}")
    print("-" * 54)
    print(" Raw OpenWeather Concentrations (µg/m³):")
    for pol, val in res['raw_components'].items():
        print(f"   • {pol:<7}: {val:>7.2f} µg/m³")
    print("=" * 54 + "\n")

if __name__ == "__main__":
    main()
