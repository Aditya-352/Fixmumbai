/**
 * BMC S-M-L Greening Framework.
 *
 * Source: "GREENING MUMBAI — Citizen's Handbook for Greening Initiatives: From Balcony Gardens to Large Scale Plots"
 * Published by BMC & WRI India.
 *
 * Framework Definition:
 * S-M-L is a citizen-led greening framework defined by the SCALE OF SPACE and the ENTITY TAKING INITIATIVE.
 * It is NOT based on arbitrary square-metre thresholds and is STRICTLY SEPARATE from satellite NDVI density.
 *
 * - SMALL (Household / Building Level):
 *     Windows, Chajjas, grills and sills, Verandahs, Balconies, Private terraces.
 * - MEDIUM (Society / Neighbourhood Level):
 *     Society terraces, Corridors, Common open spaces, Pocket parking, Underused vacant pockets, Society open spaces, Compound walls.
 * - LARGE (Large-scale plots):
 *     Private open spaces, Vacant plots, Gardens, Institutional lands.
 */

export type BmcSmlScale = 'SMALL' | 'MEDIUM' | 'LARGE' | 'UNCLASSIFIED';

export interface BmcSmlDefinition {
  scale: BmcSmlScale;
  title: string;
  scope: string;
  initiativeEntity: string;
  typicalInterventions: string[];
  handbookCitation: string;
  badgeColour: string;
  borderColour: string;
  bgColour: string;
}

export const BMC_SML_DEFINITIONS: Record<BmcSmlScale, BmcSmlDefinition> = {
  SMALL: {
    scale: 'SMALL',
    title: 'Small Spaces (Household / Building Level)',
    scope: 'Individual residential units, windows, and private extensions',
    initiativeEntity: 'Individual resident / household / tenant',
    typicalInterventions: [
      'Window box planters & micro-gardens',
      'Chajjas, external grills and architectural sills',
      'Verandahs & entrance porticos',
      'Balconies & railing planters',
      'Private attached terraces',
      'Vertical herb & edible gardens',
    ],
    handbookCitation: 'Citizen’s Handbook: "What is greening in S-M-L spaces?" & "Small Spaces (Household Level)"',
    badgeColour: '#0ea5e9',
    borderColour: '#bae6fd',
    bgColour: '#f0f9ff',
  },
  MEDIUM: {
    scale: 'MEDIUM',
    title: 'Medium Spaces (Society / Neighbourhood Level)',
    scope: 'Cooperative housing societies, apartment compounds, and shared neighbourhood pockets',
    initiativeEntity: 'Housing Society Managing Committee, RWA, or local neighbourhood group',
    typicalInterventions: [
      'Society shared rooftop / common terrace gardens',
      'Internal corridors and atrium landscaping',
      'Compound wall vertical greening & ivy facades',
      'Pocket parking perimeter green buffers',
      'Underused vacant pockets within neighbourhood lanes',
      'Common open spaces & society boundary tree rings',
      'Community composting and kitchen garden beds',
    ],
    handbookCitation: 'Citizen’s Handbook: "Medium Spaces (Society & Neighbourhood Level)"',
    badgeColour: '#10b981',
    borderColour: '#a7f3d0',
    bgColour: '#ecfdf5',
  },
  LARGE: {
    scale: 'LARGE',
    title: 'Large Spaces (Plot & Institutional Level)',
    scope: 'Expansive plots, institutional campuses, private layouts, and public gardens',
    initiativeEntity: 'Institutions, corporate trusts, municipal ward partnerships, and large landholders',
    typicalInterventions: [
      'Private open spaces and corporate green campuses',
      'Vacant unbuilt plots undergoing urban afforestation',
      'Public recreation grounds and municipal gardens',
      'Institutional educational / medical land greening',
      'Miyawaki dense urban forests & biodiversity groves',
      'Stormwater bioswales and percolation landscapes',
    ],
    handbookCitation: 'Citizen’s Handbook: "Large Spaces (Large-scale plots & Institutional Lands)"',
    badgeColour: '#8b5cf6',
    borderColour: '#ddd6fe',
    bgColour: '#f5f3ff',
  },
  UNCLASSIFIED: {
    scale: 'UNCLASSIFIED',
    title: 'Needs S-M-L Verification',
    scope: 'Mapped space awaiting citizen / ward verified categorization',
    initiativeEntity: 'Awaiting field verification or citizen submission',
    typicalInterventions: ['Unverified green space footprint', 'Awaiting citizen submission evidence'],
    handbookCitation: 'Citizen’s Handbook: Classification guidelines pending verification',
    badgeColour: '#94a3b8',
    borderColour: '#e2e8f0',
    bgColour: '#f8fafc',
  },
};

export interface CitizenGreeningInitiative {
  id: string;
  title: string;
  scale: BmcSmlScale;
  subType: string;
  locality: string;
  ward: string;
  latitude: number;
  longitude: number;
  description: string;
  entityName: string;
  sourceDoc: string;
  verificationStatus: 'VERIFIED' | 'CITIZEN_SUBMITTED' | 'NEEDS_VERIFICATION';
  photos: string[];
  keyPlants: string[];
}

export const SAMPLE_CITIZEN_INITIATIVES: CitizenGreeningInitiative[] = [
  {
    id: 'sml-h-w-01',
    title: 'Pali Hill Balcony Pollinator Corridor',
    scale: 'SMALL',
    subType: 'Balconies & Window Sills',
    locality: 'Pali Hill, Bandra West',
    ward: 'H/W',
    latitude: 19.0628,
    longitude: 72.8285,
    description: 'Coordinated balcony container planting of indigenous flowering herbs to foster butterfly and bee pollination across building frontages.',
    entityName: 'Bandra Residents Greening Collective',
    sourceDoc: 'Citizen Handbook Chapter: Small Spaces — Balcony Gardens',
    verificationStatus: 'VERIFIED',
    photos: ['https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80'],
    keyPlants: ['Lantana', 'Tulsi', 'Pentas', 'Night Jasmine'],
  },
  {
    id: 'sml-f-n-02',
    title: 'Matunga Society Terrace Edible Kitchen Garden',
    scale: 'MEDIUM',
    subType: 'Society Shared Terrace',
    locality: 'Matunga Central',
    ward: 'F/N',
    latitude: 19.0264,
    longitude: 72.8552,
    description: 'Shared 350 sq. metre society terrace transformed into an organic vegetable garden with drip irrigation and community vermicomposting.',
    entityName: 'Shri Ganesh CHS Managing Committee',
    sourceDoc: 'Citizen Handbook Chapter: Medium Spaces — Society Terraces',
    verificationStatus: 'VERIFIED',
    photos: ['https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80'],
    keyPlants: ['Curry Leaf', 'Mint', 'Tomatoes', 'Lemongrass', 'Spinach'],
  },
  {
    id: 'sml-g-s-03',
    title: 'Worli Pocket Parking Green Perimeter & Wall Facade',
    scale: 'MEDIUM',
    subType: 'Compound Walls & Pocket Parking',
    locality: 'Worli Sea Face Lane',
    ward: 'G/S',
    latitude: 19.0062,
    longitude: 72.8164,
    description: 'Greening of concrete boundary compound walls with vertical trellises and creepers, reducing localized radiant street heat.',
    entityName: 'Worli Greens RWA',
    sourceDoc: 'Citizen Handbook Chapter: Medium Spaces — Compound Walls',
    verificationStatus: 'VERIFIED',
    photos: ['https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80'],
    keyPlants: ['Ficus Repens', 'Bougainvillea', 'Money Plant', 'Flame Vine'],
  },
  {
    id: 'sml-k-e-04',
    title: 'Andheri East Industrial Campus Miyawaki Grove',
    scale: 'LARGE',
    subType: 'Institutional Lands & Private Open Spaces',
    locality: 'MIDC Andheri East',
    ward: 'K/E',
    latitude: 19.1215,
    longitude: 72.8682,
    description: '1,200 sq. metre plot afforested with over 3,000 multi-tier native trees, creating an urban microclimate heat barrier.',
    entityName: 'MIDC Green Industrial Alliance & BMC Gardens Dept',
    sourceDoc: 'Citizen Handbook Chapter: Large Spaces — Institutional Lands',
    verificationStatus: 'VERIFIED',
    photos: ['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80'],
    keyPlants: ['Kadamba', 'Bakul', 'Tamhan', 'Mahua', 'Sitaphal'],
  },
];
