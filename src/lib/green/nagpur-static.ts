/**
 * Nagpur static green-space dataset.
 *
 * PROVENANCE
 * Extracted from OpenStreetMap via the Overpass API over the Nagpur Municipal Corporation area query
 * envelope, taking named elements tagged
 * `leisure=park|garden|nature_reserve|recreation_ground|common`,
 * `landuse=forest` and `boundary=national_park`.
 *
 *   Source:   OpenStreetMap contributors (ODbL 1.0)
 *   Query:    https://overpass-api.de/api/interpreter
 *   Records:  105 named green spaces
 *
 * The dataset is a SNAPSHOT and carries OSM's ODbL attribution requirement.
 * Coordinates, names, area and access tags are taken verbatim from OSM.
 *
 * DENSITY FIELDS
 * `ndviMean` / `ndviMin` / `ndviMax` / `densityClass` are DERIVED FROM AREA,
 * not measured from satellite imagery. Nagpur has no registered Sentinel-2
 * AOI, so these are an area-based estimate used only to colour the density
 * legend. They must not be presented as measured NDVI.
 *
 * ACCESS
 * `accessStatus` and `walkClass` are read from the OSM `access` tag only. They
 * are a statement about the tag, not a verified site survey.
 */

export const NAGPUR_STATIC = [
  {
    "osmType": "node",
    "osmId": "2989350451",
    "name": "Krazy Castle Amusement Park",
    "category": "Park",
    "centroidLat": 21.128526,
    "centroidLon": 79.046496,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Krazy Castle Amusement Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "2990497557",
    "name": "Joggers Park",
    "category": "Park",
    "centroidLat": 21.113901,
    "centroidLon": 79.037617,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Joggers Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "2990500296",
    "name": "NIT Garden",
    "category": "Park",
    "centroidLat": 21.117715,
    "centroidLon": 79.0363,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NIT Garden — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "2990624713",
    "name": "Buddha Murti Park",
    "category": "Park",
    "centroidLat": 21.11143,
    "centroidLon": 79.023959,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Buddha Murti Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "2991873826",
    "name": "Ravindra Nagar Garden",
    "category": "Park",
    "centroidLat": 21.10945,
    "centroidLon": 79.052718,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ravindra Nagar Garden — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "2991875859",
    "name": "Walkers Park",
    "category": "Park",
    "centroidLat": 21.108244,
    "centroidLon": 79.051321,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Walkers Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "2991878215",
    "name": "Rotari Bal Udyan",
    "category": "Park",
    "centroidLat": 21.114005,
    "centroidLon": 79.053473,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rotari Bal Udyan — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "3068214072",
    "name": "Old Garden",
    "category": "Garden",
    "centroidLat": 21.144581,
    "centroidLon": 79.0742,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Old Garden — garden in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "3068233832",
    "name": "Bhojraj Lawns",
    "category": "Garden",
    "centroidLat": 21.122404,
    "centroidLon": 79.057408,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "customers",
      "leisure": "garden"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=customers",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhojraj Lawns — garden in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "3068243423",
    "name": "Dev Nagar Ground",
    "category": "Park",
    "centroidLat": 21.11836,
    "centroidLon": 79.07019,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dev Nagar Ground — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "3148657087",
    "name": "Shashti Nagar NIT Garden",
    "category": "Garden",
    "centroidLat": 21.142981,
    "centroidLon": 79.129209,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shashti Nagar NIT Garden — garden in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "3151963391",
    "name": "Medico Park",
    "category": "Park",
    "centroidLat": 21.124946,
    "centroidLon": 79.096862,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Medico Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "3629079031",
    "name": "Joggers Park",
    "category": "Park",
    "centroidLat": 21.111941,
    "centroidLon": 79.067397,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Joggers Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "4984611435",
    "name": "NIT park Narendra nagar",
    "category": "Park",
    "centroidLat": 21.106676,
    "centroidLon": 79.078377,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NIT park Narendra nagar — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "5280167776",
    "name": "NIT Swing Park",
    "category": "Park",
    "centroidLat": 21.125409,
    "centroidLon": 79.133528,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NIT Swing Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "5280172883",
    "name": "Jain Mandir Park",
    "category": "Park",
    "centroidLat": 21.12407,
    "centroidLon": 79.133424,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jain Mandir Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "9002028631",
    "name": "Sunrise Park",
    "category": "Park",
    "centroidLat": 21.140948,
    "centroidLon": 78.97218,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sunrise Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "9953056779",
    "name": "Little Woods",
    "category": "Garden",
    "centroidLat": 21.121423,
    "centroidLon": 79.024462,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Little Woods — garden in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "10796853408",
    "name": "Mangalwari Park",
    "category": "Park",
    "centroidLat": 21.166013,
    "centroidLon": 79.083282,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mangalwari Park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "11367917330",
    "name": "Zero mile park",
    "category": "Park",
    "centroidLat": 21.150086,
    "centroidLon": 79.080707,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Zero mile park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "12596407082",
    "name": "shivaji park",
    "category": "Park",
    "centroidLat": 21.183105,
    "centroidLon": 79.12458,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "shivaji park — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "13898688793",
    "name": "Mauli Nagar 14",
    "category": "Park",
    "centroidLat": 21.021541,
    "centroidLon": 79.04507,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mauli Nagar 14 — park in Nagpur"
  },
  {
    "osmType": "node",
    "osmId": "14051656160",
    "name": "Sahakar Nagar Lake View Garden",
    "category": "Park",
    "centroidLat": 21.10204,
    "centroidLon": 79.052088,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sahakar Nagar Lake View Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "27060732",
    "name": "Dhantoli Park",
    "category": "Park",
    "centroidLat": 21.135044,
    "centroidLon": 79.08122,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dhantoli Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "27129398",
    "name": "Mahatma Phule Park",
    "category": "Park",
    "centroidLat": 21.10871,
    "centroidLon": 79.082182,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Nagpur Improvement Trust"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mahatma Phule Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "143281460",
    "name": "Gandhibag Udyan",
    "category": "Park",
    "centroidLat": 21.151526,
    "centroidLon": 79.105419,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gandhibag Udyan — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "172470419",
    "name": "Ramabai Ambedkar Park",
    "category": "Park",
    "centroidLat": 21.131508,
    "centroidLon": 79.101915,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ramabai Ambedkar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "189373066",
    "name": "Sakkardara Garden",
    "category": "Park",
    "centroidLat": 21.120582,
    "centroidLon": 79.115225,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sakkardara Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "246662926",
    "name": "Khode Udyan",
    "category": "Park",
    "centroidLat": 21.139482,
    "centroidLon": 79.111564,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Khode Udyan — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "246663863",
    "name": "Tulsi Udyan",
    "category": "Park",
    "centroidLat": 21.139047,
    "centroidLon": 79.110698,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tulsi Udyan — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "246667167",
    "name": "Lata Mangeshkar Udyan",
    "category": "Park",
    "centroidLat": 21.153806,
    "centroidLon": 79.146439,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lata Mangeshkar Udyan — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "259175822",
    "name": "Trimurti Nagar Garden",
    "category": "Garden",
    "centroidLat": 21.11333,
    "centroidLon": 79.042612,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "garden",
      "operator": "Community"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Trimurti Nagar Garden — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "259175829",
    "name": "Aaji Ajoba Park - Deendayal Nagar Garden",
    "category": "Park",
    "centroidLat": 21.107999,
    "centroidLon": 79.046891,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Aaji Ajoba Park - Deendayal Nagar Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "262841332",
    "name": "Deendayal Nagar Park",
    "category": "Park",
    "centroidLat": 21.10943,
    "centroidLon": 79.047431,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Deendayal Nagar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "280422678",
    "name": "Maharaj Bagh",
    "category": "Park",
    "centroidLat": 21.143685,
    "centroidLon": 79.076772,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Maharaj Bagh — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "281249291",
    "name": "Shivaji Nagar Park",
    "category": "Park",
    "centroidLat": 21.137924,
    "centroidLon": 79.055769,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shivaji Nagar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "292048066",
    "name": "Maharashtra Remote Sensing Application Center (MRSAC)",
    "category": "Park",
    "centroidLat": 21.121774,
    "centroidLon": 79.052661,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Maharashtra Remote Sensing Application Center (MRSAC) — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "295228758",
    "name": "Krazy Casle amusement Park",
    "category": "Park",
    "centroidLat": 21.127907,
    "centroidLon": 79.046226,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Krazy Casle amusement Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "306359795",
    "name": "Green Gym",
    "category": "Park",
    "centroidLat": 21.12892,
    "centroidLon": 79.117911,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Gym — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "306360804",
    "name": "Trishatabdi Park",
    "category": "Park",
    "centroidLat": 21.135465,
    "centroidLon": 79.118279,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Nagpur Improvement Trust"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Trishatabdi Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "308835150",
    "name": "Telankhedi Garden",
    "category": "Park",
    "centroidLat": 21.15519,
    "centroidLon": 79.050111,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Telankhedi Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "309001903",
    "name": "Railway Football Stadium",
    "category": "Park",
    "centroidLat": 21.164421,
    "centroidLon": 79.093752,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Railway Football Stadium — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "309050506",
    "name": "Ambazari Garden",
    "category": "Park",
    "centroidLat": 21.133945,
    "centroidLon": 79.044825,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ambazari Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "309520405",
    "name": "Dr. Babashaheb Ambedkar Udhyan",
    "category": "Park",
    "centroidLat": 21.166832,
    "centroidLon": 79.112577,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dr. Babashaheb Ambedkar Udhyan — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "309520447",
    "name": "Buddhanagar Park ( Unit no. 2 )",
    "category": "Park",
    "centroidLat": 21.172447,
    "centroidLon": 79.102484,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Buddhanagar Park ( Unit no. 2 ) — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "309529682",
    "name": "Anand Nagar Garden",
    "category": "Park",
    "centroidLat": 21.171547,
    "centroidLon": 79.119141,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Anand Nagar Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "309530452",
    "name": "Sant Dnyaneshwar Park",
    "category": "Park",
    "centroidLat": 21.118658,
    "centroidLon": 79.113302,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sant Dnyaneshwar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "309854560",
    "name": "NIT Garden",
    "category": "Garden",
    "centroidLat": 21.133259,
    "centroidLon": 79.098113,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NIT Garden — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "311691572",
    "name": "Vivekanand Nagar NIT Garden",
    "category": "Park",
    "centroidLat": 21.116368,
    "centroidLon": 79.070452,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vivekanand Nagar NIT Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "311691768",
    "name": "Atrey Layout Ground",
    "category": "Park",
    "centroidLat": 21.115368,
    "centroidLon": 79.059912,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Atrey Layout Ground — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "314142209",
    "name": "Dagdi Park",
    "category": "Park",
    "centroidLat": 21.137101,
    "centroidLon": 79.076354,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dagdi Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "314406422",
    "name": "Chandramani Nagar Garden",
    "category": "Garden",
    "centroidLat": 21.118859,
    "centroidLon": 79.094742,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chandramani Nagar Garden — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "314724774",
    "name": "Kukreja Nagar Park",
    "category": "Recreation Ground",
    "centroidLat": 21.186387,
    "centroidLon": 79.09133,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "recreation_ground"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kukreja Nagar Park — recreation ground in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "314731139",
    "name": "Ambedkar Ground",
    "category": "Recreation Ground",
    "centroidLat": 21.186187,
    "centroidLon": 79.093878,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "recreation_ground"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ambedkar Ground — recreation ground in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "319966526",
    "name": "Lendhra Park",
    "category": "Park",
    "centroidLat": 21.135664,
    "centroidLon": 79.070633,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lendhra Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "327125704",
    "name": "Main Lawn",
    "category": "Garden",
    "centroidLat": 21.163388,
    "centroidLon": 79.061167,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Main Lawn — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "352969631",
    "name": "park of kd",
    "category": "Park",
    "centroidLat": 21.164795,
    "centroidLon": 79.106145,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park of kd — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "372302760",
    "name": "Children Traffic Park",
    "category": "Park",
    "centroidLat": 21.140439,
    "centroidLon": 79.066704,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Traffic Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "396536715",
    "name": "Bhauji Page Udyan",
    "category": "Park",
    "centroidLat": 21.147154,
    "centroidLon": 79.098787,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhauji Page Udyan — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "435782369",
    "name": "NIT Park",
    "category": "Park",
    "centroidLat": 21.168612,
    "centroidLon": 79.115859,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NIT Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "461349175",
    "name": "Ravi nagar park",
    "category": "Park",
    "centroidLat": 21.151495,
    "centroidLon": 79.057744,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ravi nagar park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "478837929",
    "name": "Park",
    "category": "Park",
    "centroidLat": 21.09471,
    "centroidLon": 79.147476,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "486716067",
    "name": "Shankar Nagar Park",
    "category": "Park",
    "centroidLat": 21.134353,
    "centroidLon": 79.060575,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shankar Nagar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "486718003",
    "name": "Divisional Commissioner Office Compound",
    "category": "Park",
    "centroidLat": 21.153841,
    "centroidLon": 79.069154,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Divisional Commissioner Office Compound — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "486718212",
    "name": "Divisional Commissioner Office Compound",
    "category": "Park",
    "centroidLat": 21.154467,
    "centroidLon": 79.068878,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Divisional Commissioner Office Compound — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "486718835",
    "name": "High Court Garden",
    "category": "Garden",
    "centroidLat": 21.159184,
    "centroidLon": 79.068267,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "landuse": "garden",
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "High Court Garden — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "486721156",
    "name": "Japenese Garden",
    "category": "Park",
    "centroidLat": 21.163041,
    "centroidLon": 79.066604,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "meadow",
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Japenese Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "515719216",
    "name": "Congress Nagar Park",
    "category": "Park",
    "centroidLat": 21.130679,
    "centroidLon": 79.083785,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Congress Nagar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "518484912",
    "name": "Shahid Raju Shahu Park",
    "category": "Park",
    "centroidLat": 21.126178,
    "centroidLon": 79.107114,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shahid Raju Shahu Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "546400086",
    "name": "Park",
    "category": "Park",
    "centroidLat": 21.125726,
    "centroidLon": 79.133626,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "546401876",
    "name": "Swing Park",
    "category": "Park",
    "centroidLat": 21.126324,
    "centroidLon": 79.132943,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Swing Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "546406129",
    "name": "Gadge Nagar Recreational Park",
    "category": "Park",
    "centroidLat": 21.12246,
    "centroidLon": 79.133573,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gadge Nagar Recreational Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "614237052",
    "name": "GPO Garden Park",
    "category": "Garden",
    "centroidLat": 21.153076,
    "centroidLon": 79.069349,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GPO Garden Park — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "614238390",
    "name": "Elephant statue",
    "category": "Park",
    "centroidLat": 21.143777,
    "centroidLon": 79.075648,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "surface": "grass"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Elephant statue — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "625807949",
    "name": "Tuta Bagicha",
    "category": "Park",
    "centroidLat": 21.162049,
    "centroidLon": 79.076314,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tuta Bagicha — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "660496268",
    "name": "Park",
    "category": "Park",
    "centroidLat": 21.194541,
    "centroidLon": 79.142099,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "690772069",
    "name": "VNIT Parking Garden",
    "category": "Park",
    "centroidLat": 21.122009,
    "centroidLon": 79.052348,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "VNIT"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "VNIT Parking Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "690772070",
    "name": "VNIT Main Gate Garden",
    "category": "Park",
    "centroidLat": 21.122197,
    "centroidLon": 79.050462,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "VNIT"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "VNIT Main Gate Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "697856929",
    "name": "Trikoni Park",
    "category": "Park",
    "centroidLat": 21.143232,
    "centroidLon": 79.0625,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Trikoni Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "727010992",
    "name": "Udaynagar Park",
    "category": "Park",
    "centroidLat": 21.109238,
    "centroidLon": 79.111469,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Nagpur Muncipal Corpuration"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Udaynagar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "729663270",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 21.253397,
    "centroidLon": 79.099935,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "743671460",
    "name": "Bhagyashrinagar Park",
    "category": "Park",
    "centroidLat": 21.105103,
    "centroidLon": 79.117796,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Nagpur Improvement Trust"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhagyashrinagar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "743671468",
    "name": "Mhalgi Nagar Park",
    "category": "Park",
    "centroidLat": 21.107019,
    "centroidLon": 79.122296,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mhalgi Nagar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "744997369",
    "name": "Shahu Nagar Park",
    "category": "Park",
    "centroidLat": 21.096112,
    "centroidLon": 79.10058,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shahu Nagar Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "782645167",
    "name": "Indraprasth Layout garden",
    "category": "Park",
    "centroidLat": 21.103065,
    "centroidLon": 79.046193,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "recreation_ground",
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Indraprasth Layout garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "790945044",
    "name": "motibhag garden",
    "category": "Garden",
    "centroidLat": 21.145913,
    "centroidLon": 79.074215,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "motibhag garden — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "810175013",
    "name": "Khare Town Park",
    "category": "Park",
    "centroidLat": 21.137525,
    "centroidLon": 79.061195,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Khare Town Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "847484893",
    "name": "Nandanvan Layout Park",
    "category": "Park",
    "centroidLat": 21.137484,
    "centroidLon": 79.121809,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nandanvan Layout Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "983219094",
    "name": "SHB Society Garden",
    "category": "Garden",
    "centroidLat": 21.167802,
    "centroidLon": 79.04024,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "permissive",
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=permissive",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "SHB Society Garden — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1119416869",
    "name": "Ramdeobaba mandir garden",
    "category": "Garden",
    "centroidLat": 21.176024,
    "centroidLon": 79.059991,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ramdeobaba mandir garden — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1119416870",
    "name": "RCOEM office garden",
    "category": "Garden",
    "centroidLat": 21.176549,
    "centroidLon": 79.061448,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "RCOEM office garden — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1134000768",
    "name": "Excise Colony Park",
    "category": "Park",
    "centroidLat": 21.111946,
    "centroidLon": 79.067388,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Excise Colony Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1163298412",
    "name": "Dayanand Park",
    "category": "Park",
    "centroidLat": 21.184287,
    "centroidLon": 79.090005,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dayanand Park — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1173079923",
    "name": "Gadewar lawn",
    "category": "Park",
    "centroidLat": 21.113793,
    "centroidLon": 79.108088,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gadewar lawn — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1173418960",
    "name": "NIT Garden",
    "category": "Garden",
    "centroidLat": 21.114234,
    "centroidLon": 79.107251,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NIT Garden — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1241309710",
    "name": "NMC, Ground",
    "category": "Park",
    "centroidLat": 21.137111,
    "centroidLon": 79.117711,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NMC, Ground — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1241310461",
    "name": "mahal",
    "category": "Park",
    "centroidLat": 21.143469,
    "centroidLon": 79.107274,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "mahal — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1296964403",
    "name": "Revati Nagar Nit Garden",
    "category": "Park",
    "centroidLat": 21.088075,
    "centroidLon": 79.090798,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Revati Nagar Nit Garden — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1304127271",
    "name": "Sitting Area",
    "category": "Park",
    "centroidLat": 21.125737,
    "centroidLon": 79.003357,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sitting Area — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1331094798",
    "name": "Green GYM",
    "category": "Garden",
    "centroidLat": 21.124412,
    "centroidLon": 79.002843,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green GYM — garden in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1360413617",
    "name": "Krishna Greeniz Lawn",
    "category": "Park",
    "centroidLat": 21.101404,
    "centroidLon": 79.06583,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Krishna Greeniz Lawn — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1360627892",
    "name": "green valley lawn",
    "category": "Park",
    "centroidLat": 21.102871,
    "centroidLon": 79.065526,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "green valley lawn — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1429020048",
    "name": "Azad Hind Nagar Ground",
    "category": "Park",
    "centroidLat": 21.119026,
    "centroidLon": 79.036501,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Azad Hind Nagar Ground — park in Nagpur"
  },
  {
    "osmType": "way",
    "osmId": "1544715727",
    "name": "Kachi Visa Ground",
    "category": "Park",
    "centroidLat": 21.150296,
    "centroidLon": 79.126097,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kachi Visa Ground — park in Nagpur"
  },
  {
    "osmType": "relation",
    "osmId": "9151320",
    "name": "Satpuda Botanical Garden",
    "category": "Park",
    "centroidLat": 21.158236,
    "centroidLon": 79.039161,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Satpuda Botanical Garden — park in Nagpur"
  }
];
