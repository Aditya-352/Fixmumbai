import type { AqiCategory, PollutantId } from './types';

export interface HealthAdvisory {
  label: string;
  icon: string;
  advice: string[];
}

export const HEALTH_ADVISORIES: Record<PollutantId, Record<AqiCategory, HealthAdvisory>> = {
  'PM2.5': {
    'Good': {
      label: 'Good - Basic Awareness',
      icon: '✅',
      advice: [
        'Air quality is satisfactory. Normal outdoor activities are safe.',
        'Keep windows open to allow fresh air circulation.',
      ],
    },
    'Satisfactory': {
      label: 'Satisfactory - Minor Care',
      icon: '✅',
      advice: [
        'Unusually sensitive people should consider reducing prolonged or heavy exertion.',
        'Keep windows open for ventilation.',
      ],
    },
    'Moderate': {
      label: 'Moderate - Focus on Reduction',
      icon: '⚠️',
      advice: [
        'Avoid prolonged outdoor physical exertion (jogging, sports) during peak traffic hours in Mumbai.',
        "Switch off 'recirculation' mode in cars and air conditioners; use fresh air settings.",
        'Keep windows closed at home, especially during early mornings/evenings.',
      ],
    },
    'Poor': {
      label: 'Poor - Reduce Exposure',
      icon: '🚨',
      advice: [
        'Avoid all outdoor exercise. Use N95 masks if going outside.',
        'Run air purifiers indoors if available.',
        'Vulnerable groups (children, elderly, asthma patients) should stay indoors.',
      ],
    },
    'Very Poor': {
      label: 'Very Poor - Strict Avoidance',
      icon: '🚨',
      advice: [
        'Stay indoors as much as possible. Keep windows completely sealed.',
        'Use N95 or P100 masks strictly when stepping out.',
        'Avoid any strenuous activity to reduce breathing rate.',
      ],
    },
    'Severe': {
      label: 'Severe - Health Emergency',
      icon: '❗',
      advice: [
        'Stop all outdoor physical activities. Remain indoors in clean air.',
        'Run air purifiers on max settings. Do not burn anything indoors.',
        'Seek immediate medical attention if experiencing breathing difficulty or palpitations.',
      ],
    }
  },
  'PM10': {
    'Good': {
      label: 'Good - Normal Activity',
      icon: '✅',
      advice: [
        'Dust levels are low. Safe for all outdoor activities.',
      ],
    },
    'Satisfactory': {
      label: 'Satisfactory - Minor Dust',
      icon: '✅',
      advice: [
        'Sensitive individuals might experience minor breathing discomfort.',
      ],
    },
    'Moderate': {
      label: 'Elevated - Immediate Action',
      icon: '🚨',
      advice: [
        'Localized Dust Control: Require dust curtains or suppression on construction sites.',
        'Reduce outdoor exposure for elderly, children, and persons with pre-existing heart/lung disease.',
        'Use a qualified face mask (e.g., N95) when near dust sources or in high-traffic zones.',
        'Report visible dust pollution to local authorities via app.',
      ],
    },
    'Poor': {
      label: 'Poor - High Dust Levels',
      icon: '🚨',
      advice: [
        'Avoid sweeping dry floors; use wet mopping instead.',
        'Keep windows closed to prevent dust ingress.',
        'Wear N95 masks in dusty areas or near construction zones.',
      ],
    },
    'Very Poor': {
      label: 'Very Poor - Severe Dust',
      icon: '🚨',
      advice: [
        'Strictly avoid construction sites or unpaved roads.',
        'Keep all doors and windows tightly closed.',
      ],
    },
    'Severe': {
      label: 'Severe - Hazardous',
      icon: '❗',
      advice: [
        'Avoid any outdoor exposure. High risk of respiratory impact.',
      ],
    }
  },
  'CO': {
    'Good': {
      label: 'Good - Basic Care',
      icon: '✅',
      advice: [
        'Maintain car emissions with regular pollution checks (PUC certification).',
        'Never idle car or autorickshaw engines in enclosed or poorly ventilated residential spaces.',
        'Maintain your gas stoves; avoid using chulhas indoors without ventilation.',
      ],
    },
    'Satisfactory': {
      label: 'Satisfactory - Watch Out',
      icon: '✅',
      advice: [
        'Keep indoor spaces ventilated when cooking.',
      ],
    },
    'Moderate': {
      label: 'Moderate - Ensure Ventilation',
      icon: '⚠️',
      advice: [
        'Avoid heavy traffic areas where CO pools.',
        'Ensure exhaust fans are working in kitchens and basements.',
      ],
    },
    'Poor': {
      label: 'Poor - Minimize Exposure',
      icon: '🚨',
      advice: [
        'People with heart disease should reduce strenuous physical activity.',
        'Avoid enclosed parking garages for extended periods.',
      ],
    },
    'Very Poor': {
      label: 'Very Poor - Health Risk',
      icon: '🚨',
      advice: [
        'Significant risk to heart patients. Stay indoors.',
      ],
    },
    'Severe': {
      label: 'Severe - Toxic Levels',
      icon: '❗',
      advice: [
        'Evacuate heavily polluted enclosed areas immediately.',
      ],
    }
  },
  'SO2': {
    'Good': {
      label: 'Good - Basic Care',
      icon: '✅',
      advice: [
        'If living near industrial areas, pay attention to odor; close windows during smell events.',
        'Be mindful that high SO2 often correlates with other vehicular and industrial emissions.',
        'Limit time outdoors in direct vicinity of older diesel vehicle fleets.',
      ],
    },
    'Satisfactory': {
      label: 'Satisfactory - Low Risk',
      icon: '✅',
      advice: [
        'Asthmatics should keep rescue inhalers handy just in case.',
      ],
    },
    'Moderate': {
      label: 'Moderate - Monitor Breathing',
      icon: '⚠️',
      advice: [
        'Asthmatics should reduce heavy outdoor exertion.',
        'Avoid areas near active industrial zones or heavy diesel traffic.',
      ],
    },
    'Poor': {
      label: 'Poor - Limit Outdoors',
      icon: '🚨',
      advice: [
        'People with asthma or lung diseases should avoid all outdoor exertion.',
      ],
    },
    'Very Poor': {
      label: 'Very Poor - High Risk',
      icon: '🚨',
      advice: [
        'Stay indoors. Keep windows closed if you live near industrial belts.',
      ],
    },
    'Severe': {
      label: 'Severe - Emergency',
      icon: '❗',
      advice: [
        'High risk of respiratory distress. Asthmatics must stay indoors with air conditioning/purification.',
      ],
    }
  },
  'NO2': {
    'Good': {
      label: 'Good - Long-term focus',
      icon: '✅',
      advice: [
        'Choose routes with less vehicular traffic when walking or cycling.',
        'Ensure proper ventilation during indoor cooking or when using diesel generators.',
        'Encourage the use of public transport and electric vehicles to reduce future levels.',
      ],
    },
    'Satisfactory': {
      label: 'Satisfactory - Minor Irritation',
      icon: '✅',
      advice: [
        'May cause minor airway irritation for highly sensitive individuals.',
      ],
    },
    'Moderate': {
      label: 'Moderate - Traffic Alert',
      icon: '⚠️',
      advice: [
        'Avoid exercising near busy roads or intersections.',
        'Individuals with asthma should limit outdoor exertion.',
      ],
    },
    'Poor': {
      label: 'Poor - Limit Traffic Exposure',
      icon: '🚨',
      advice: [
        'Keep windows facing busy streets closed.',
        'Asthmatics should stay indoors as much as possible.',
      ],
    },
    'Very Poor': {
      label: 'Very Poor - High Irritation',
      icon: '🚨',
      advice: [
        'Significant airway inflammation risk. Avoid outdoor activity.',
      ],
    },
    'Severe': {
      label: 'Severe - Critical',
      icon: '❗',
      advice: [
        'Everyone should remain indoors. Extreme risk of respiratory symptoms.',
      ],
    }
  },
  'OZONE': {
    'Good': {
      label: 'Good - Focus on Peak Hours',
      icon: '✅',
      advice: [
        'Limit strenuous outdoor activities during sunny afternoon hours (e.g., 2 PM to 5 PM).',
        'Seek shade or indoor activities for vulnerable groups during peak ozone formation times.',
        'Be aware that ozone can trigger asthma even at low levels; keep rescue inhalers accessible.',
      ],
    },
    'Satisfactory': {
      label: 'Satisfactory - Watch Sun',
      icon: '✅',
      advice: [
        'Avoid prolonged outdoor activity in the direct afternoon sun.',
      ],
    },
    'Moderate': {
      label: 'Moderate - Reduce Exertion',
      icon: '⚠️',
      advice: [
        'Sensitive groups (children, asthmatics, elderly) should limit afternoon outdoor time.',
      ],
    },
    'Poor': {
      label: 'Poor - Stay Indoors PM',
      icon: '🚨',
      advice: [
        'Avoid all outdoor activities between 12 PM and 6 PM.',
      ],
    },
    'Very Poor': {
      label: 'Very Poor - High Risk',
      icon: '🚨',
      advice: [
        'Ozone levels are dangerously high. Stay indoors in air-conditioned environments.',
      ],
    },
    'Severe': {
      label: 'Severe - Extreme Risk',
      icon: '❗',
      advice: [
        'Critical air quality. Do not step out during daylight hours if possible.',
      ],
    }
  },
  'NH3': {
    'Good': {
      label: 'Good - Normal',
      icon: '✅',
      advice: [
        'Ammonia levels are low. Normal activities are safe.',
      ],
    },
    'Satisfactory': {
      label: 'Satisfactory - Minor Odor',
      icon: '✅',
      advice: [
        'Slight odor may be noticeable. No major health risks.',
      ],
    },
    'Moderate': {
      label: 'Moderate - Irritation Risk',
      icon: '⚠️',
      advice: [
        'May cause eye or throat irritation for sensitive individuals.',
        'Avoid areas near agricultural runoff or specific industrial zones.',
      ],
    },
    'Poor': {
      label: 'Poor - Elevated',
      icon: '🚨',
      advice: [
        'Close windows to avoid strong odors and eye irritation.',
      ],
    },
    'Very Poor': {
      label: 'Very Poor - High Irritation',
      icon: '🚨',
      advice: [
        'Significant risk of respiratory and eye irritation. Stay indoors.',
      ],
    },
    'Severe': {
      label: 'Severe - Toxic',
      icon: '❗',
      advice: [
        'Immediate risk of severe burns/irritation to respiratory tract. Evacuate affected areas.',
      ],
    }
  },
};
