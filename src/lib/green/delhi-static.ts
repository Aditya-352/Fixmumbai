/**
 * Delhi static green-space dataset.
 *
 * PROVENANCE
 * Extracted from OpenStreetMap via the Overpass API over the Delhi
 * (National Capital Territory) query envelope, taking named elements tagged
 * `leisure=park|garden|nature_reserve|recreation_ground`, `landuse=forest`
 * and `boundary=national_park`.
 *
 *   Source:   OpenStreetMap contributors (ODbL 1.0)
 *   Query:    https://overpass-api.de/api/interpreter
 *   Records:  1143 named green spaces
 *
 * The dataset is a SNAPSHOT and carries OSM's ODbL attribution requirement.
 * Coordinates, names, area and access tags are taken verbatim from OSM.
 *
 * DENSITY FIELDS
 * `ndviMean` / `ndviMin` / `ndviMax` / `densityClass` are DERIVED FROM AREA,
 * not measured from satellite imagery. Delhi has no registered Sentinel-2 AOI,
 * so these are an area-based estimate used only to colour the density legend.
 * They must not be presented as measured NDVI.
 *
 * ACCESS
 * `accessStatus` and `walkClass` are read from the OSM `access` tag only. They
 * are a statement about the tag, not a verified site survey.
 */

export const DELHI_STATIC = [
  {
    "osmType": "node",
    "osmId": "271336428",
    "name": "Kotak Mahindra Bank",
    "category": "Park",
    "centroidLat": 28.480863,
    "centroidLon": 77.084888,
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
    "caption": "Kotak Mahindra Bank;india — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "1402114314",
    "name": "Picnic Hut",
    "category": "Park",
    "centroidLat": 28.688928,
    "centroidLon": 77.176385,
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
    "caption": "Picnic Hut — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "1669051216",
    "name": "Vivekanand Park (Sindi Park)",
    "category": "Park",
    "centroidLat": 28.639752,
    "centroidLon": 77.186657,
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
    "caption": "Vivekanand Park (Sindi Park) — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "1827695741",
    "name": "Bada Gol Chakkar (Bawana Industrial Area, Delhi)",
    "category": "Park",
    "centroidLat": 28.789992,
    "centroidLon": 77.053458,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DSIIDC, Bawana"
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
    "caption": "Bada Gol Chakkar (Bawana Industrial Area, Delhi) — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2410792739",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.636131,
    "centroidLon": 77.301303,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2445916249",
    "name": "Channa Ram Bansal Memorial Park",
    "category": "Park",
    "centroidLat": 28.672203,
    "centroidLon": 77.13126,
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
    "caption": "Channa Ram Bansal Memorial Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2445917010",
    "name": "Traffic Training Park",
    "category": "Park",
    "centroidLat": 28.672132,
    "centroidLon": 77.138571,
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
    "caption": "Traffic Training Park;East Punjabi Bagh — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2445930246",
    "name": "JaiDev Park",
    "category": "Park",
    "centroidLat": 28.670993,
    "centroidLon": 77.150555,
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
    "caption": "JaiDev Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2445985787",
    "name": "DTC Park",
    "category": "Park",
    "centroidLat": 28.651086,
    "centroidLon": 77.157443,
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
    "caption": "DTC Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2445990606",
    "name": "G Block Park",
    "category": "Park",
    "centroidLat": 28.651981,
    "centroidLon": 77.160807,
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
    "caption": "G Block Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2445991304",
    "name": "Rock Garden",
    "category": "Park",
    "centroidLat": 28.650098,
    "centroidLon": 77.168457,
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
    "caption": "Rock Garden — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2445994140",
    "name": "Jogger's Park",
    "category": "Park",
    "centroidLat": 28.645781,
    "centroidLon": 77.172764,
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
    "caption": "Jogger's Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2445994438",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.645399,
    "centroidLon": 77.173542,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2446003132",
    "name": "R Block Park",
    "category": "Park",
    "centroidLat": 28.636252,
    "centroidLon": 77.178901,
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
    "caption": "R Block Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2446006349",
    "name": "Haathi Park",
    "category": "Park",
    "centroidLat": 28.637142,
    "centroidLon": 77.179845,
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
    "caption": "Haathi Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2446007242",
    "name": "Sita Park",
    "category": "Park",
    "centroidLat": 28.633808,
    "centroidLon": 77.179432,
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
    "caption": "Sita Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "2810725903",
    "name": "Picnic Hut",
    "category": "Park",
    "centroidLat": 28.68966,
    "centroidLon": 77.181591,
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
    "caption": "Picnic Hut — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "4568130142",
    "name": "D Block, Sector 36 Park",
    "category": "Park",
    "centroidLat": 28.571245,
    "centroidLon": 77.347444,
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
    "caption": "D Block, Sector 36 Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "4609570955",
    "name": "Gautam Budh park",
    "category": "Park",
    "centroidLat": 28.579952,
    "centroidLon": 77.303301,
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
    "caption": "Gautam Budh park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "4631114600",
    "name": "Mansarovar Park,Sector 15,Noida",
    "category": "Park",
    "centroidLat": 28.581108,
    "centroidLon": 77.303136,
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
    "caption": "Mansarovar Park,Sector 15,Noida — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "4641461285",
    "name": "Railway Park",
    "category": "Park",
    "centroidLat": 28.638151,
    "centroidLon": 77.299956,
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
    "caption": "Railway Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "4976470412",
    "name": "Kids Rail Track",
    "category": "Park",
    "centroidLat": 28.736621,
    "centroidLon": 76.889515,
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
    "caption": "Kids Rail Track — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "4984196226",
    "name": "Gazebo by the Lake",
    "category": "Garden",
    "centroidLat": 28.672766,
    "centroidLon": 77.198138,
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
    "caption": "Gazebo by the Lake — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "5068243449",
    "name": "Narian manzil Mini garden",
    "category": "Garden",
    "centroidLat": 28.629741,
    "centroidLon": 77.224119,
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
    "caption": "Narian manzil Mini garden — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "5162813540",
    "name": "C Park",
    "category": "Park",
    "centroidLat": 28.58537,
    "centroidLon": 77.307609,
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
    "caption": "C Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "5534332645",
    "name": "D Block Park",
    "category": "Garden",
    "centroidLat": 28.667105,
    "centroidLon": 77.33216,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "D Block Park — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "5624723854",
    "name": "Infocity Park",
    "category": "Park",
    "centroidLat": 28.43029,
    "centroidLon": 77.015331,
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
    "caption": "Infocity Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "5729791380",
    "name": "JANKI DEVI PARK",
    "category": "Park",
    "centroidLat": 28.765477,
    "centroidLon": 77.265232,
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
    "caption": "JANKI DEVI PARK — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "5767395158",
    "name": "Ajay Vatika",
    "category": "Garden",
    "centroidLat": 28.546682,
    "centroidLon": 77.136114,
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
    "caption": "Ajay Vatika — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "6264304091",
    "name": "triangle park",
    "category": "Garden",
    "centroidLat": 28.667071,
    "centroidLon": 77.319271,
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
    "caption": "triangle park — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "6421050157",
    "name": "Park in J Block Lajpat Nagar 3 with children's swings",
    "category": "Garden",
    "centroidLat": 28.565823,
    "centroidLon": 77.241235,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "garden",
      "operator": "MCD"
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
    "caption": "Park in J Block Lajpat Nagar 3 with children's swings — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "6466465769",
    "name": "Public Park in I Block Lajpat Nagar 3",
    "category": "Garden",
    "centroidLat": 28.566782,
    "centroidLon": 77.242018,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "garden",
      "operator": "MCD"
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
    "caption": "Public Park in I Block Lajpat Nagar 3 — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "6746646497",
    "name": "Chaupal Park",
    "category": "Park",
    "centroidLat": 28.531486,
    "centroidLon": 77.205323,
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
    "caption": "Chaupal Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "7375919744",
    "name": "Shaheed Swapnil vatika",
    "category": "Park",
    "centroidLat": 28.645508,
    "centroidLon": 77.343761,
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
    "caption": "Shaheed Swapnil vatika — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "7829458290",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.453767,
    "centroidLon": 77.017282,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "open for every one"
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "7829458291",
    "name": "Children park",
    "category": "Park",
    "centroidLat": 28.453291,
    "centroidLon": 77.017516,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "it's open for every one lots of people like to came here for hangout"
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
    "caption": "Children park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "7829480979",
    "name": "Atal Vatika Park",
    "category": "Park",
    "centroidLat": 28.453328,
    "centroidLon": 77.01954,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "public place"
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
    "caption": "Atal Vatika Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "7872536380",
    "name": "park",
    "category": "Park",
    "centroidLat": 28.523237,
    "centroidLon": 77.234708,
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
    "caption": "park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "8897382870",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 28.690031,
    "centroidLon": 77.345001,
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
    "caption": "Children's Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "8989461713",
    "name": "Charkhi Wala Park",
    "category": "Park",
    "centroidLat": 28.675499,
    "centroidLon": 77.18564,
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
    "caption": "Charkhi Wala Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "9349927450",
    "name": "Shiv Park",
    "category": "Park",
    "centroidLat": 28.824519,
    "centroidLon": 77.174073,
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
    "caption": "Shiv Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "9966666182",
    "name": "gurjjar samrat mihir bhoj park ,2",
    "category": "Park",
    "centroidLat": 28.498786,
    "centroidLon": 77.310028,
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
    "caption": "gurjjar samrat mihir bhoj park ,2 — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "9966699001",
    "name": "local park",
    "category": "Park",
    "centroidLat": 28.498837,
    "centroidLon": 77.318691,
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
    "caption": "local park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "9966704520",
    "name": "gurjjar samrat mihir bhoj park",
    "category": "Park",
    "centroidLat": 28.498953,
    "centroidLon": 77.309345,
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
    "caption": "gurjjar samrat mihir bhoj park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "9966704521",
    "name": "gurjjar samrat mihir bhoj park",
    "category": "Park",
    "centroidLat": 28.499485,
    "centroidLon": 77.309211,
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
    "caption": "gurjjar samrat mihir bhoj park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "9978822131",
    "name": "Bali Nagar Senior Citizen Park",
    "category": "Park",
    "centroidLat": 28.652633,
    "centroidLon": 77.128395,
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
    "caption": "Bali Nagar Senior Citizen Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "9978824659",
    "name": "Rajesh Verma Ji Park , Chhota Cp",
    "category": "Park",
    "centroidLat": 28.653704,
    "centroidLon": 77.127273,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Government of Delhi"
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
    "caption": "Rajesh Verma Ji Park , Chhota Cp — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "9978842440",
    "name": "Bali Nagar Children's Park",
    "category": "Park",
    "centroidLat": 28.652398,
    "centroidLon": 77.127686,
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
    "caption": "Bali Nagar Children's Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "10027880539",
    "name": "Ramesh Park",
    "category": "Park",
    "centroidLat": 28.635291,
    "centroidLon": 77.270571,
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
    "caption": "Ramesh Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "10027880559",
    "name": "Chota Vishwa Karma Park",
    "category": "Park",
    "centroidLat": 28.638439,
    "centroidLon": 77.270289,
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
    "caption": "Chota Vishwa Karma Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "10901628617",
    "name": "Chaudhary Hirdhay Ram Smriti Park",
    "category": "Park",
    "centroidLat": 28.742065,
    "centroidLon": 77.132377,
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
    "caption": "Chaudhary Hirdhay Ram Smriti Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "10915435773",
    "name": "Canine Elite",
    "category": "Park",
    "centroidLat": 28.438526,
    "centroidLon": 77.189389,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Sonya Kochhar"
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
    "caption": "Canine Elite — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11208068116",
    "name": "Ambedkar Park",
    "category": "Park",
    "centroidLat": 28.494706,
    "centroidLon": 77.32526,
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
    "caption": "Ambedkar Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11235332746",
    "name": "Department Lawn",
    "category": "Garden",
    "centroidLat": 28.561404,
    "centroidLon": 77.281483,
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
    "caption": "Department Lawn — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11264482804",
    "name": "Deer park",
    "category": "Park",
    "centroidLat": 28.56063,
    "centroidLon": 77.200494,
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
    "caption": "Deer park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11274649160",
    "name": "Gulistan-i- galib",
    "category": "Garden",
    "centroidLat": 28.560358,
    "centroidLon": 77.282763,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "students",
      "leisure": "garden"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=students",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gulistan-i- galib — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11274654304",
    "name": "Mughal garden",
    "category": "Garden",
    "centroidLat": 28.562467,
    "centroidLon": 77.284319,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "students",
      "leisure": "garden"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=students",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mughal garden — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11687895257",
    "name": "BADMINTON COURT",
    "category": "Park",
    "centroidLat": 28.57082,
    "centroidLon": 77.16508,
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
    "caption": "BADMINTON COURT — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11690453150",
    "name": "Gokalpuri park",
    "category": "Park",
    "centroidLat": 28.695351,
    "centroidLon": 77.291348,
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
    "caption": "Gokalpuri park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11696768816",
    "name": "M block park",
    "category": "Park",
    "centroidLat": 28.582824,
    "centroidLon": 77.342045,
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
    "caption": "M block park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11696768842",
    "name": "L Block Park",
    "category": "Park",
    "centroidLat": 28.584861,
    "centroidLon": 77.34012,
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
    "caption": "L Block Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11696860092",
    "name": "Durga Pooja Ground",
    "category": "Park",
    "centroidLat": 28.58254,
    "centroidLon": 77.340564,
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
    "caption": "Durga Pooja Ground — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11696883274",
    "name": "J-Block Park",
    "category": "Park",
    "centroidLat": 28.584095,
    "centroidLon": 77.338586,
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
    "caption": "J-Block Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11697191666",
    "name": "Sector 21 park",
    "category": "Park",
    "centroidLat": 28.587153,
    "centroidLon": 77.335494,
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
    "caption": "Sector 21 park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11697400926",
    "name": "sector 26 park",
    "category": "Park",
    "centroidLat": 28.581899,
    "centroidLon": 77.336081,
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
    "caption": "sector 26 park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11697668180",
    "name": "Public park",
    "category": "Park",
    "centroidLat": 28.600239,
    "centroidLon": 77.056284,
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
    "caption": "Public park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11697714435",
    "name": "Driving Park",
    "category": "Park",
    "centroidLat": 28.605709,
    "centroidLon": 77.052611,
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
    "caption": "Driving Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11697752295",
    "name": "Sector 4 park",
    "category": "Park",
    "centroidLat": 28.603504,
    "centroidLon": 77.04915,
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
    "caption": "Sector 4 park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11697772379",
    "name": "Jogger's park",
    "category": "Park",
    "centroidLat": 28.603058,
    "centroidLon": 77.053621,
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
    "caption": "Jogger's park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11697913400",
    "name": "Ambedkar park chungi",
    "category": "Park",
    "centroidLat": 28.496171,
    "centroidLon": 77.285061,
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
    "caption": "Ambedkar park chungi — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11698733947",
    "name": "DDA Orchard Park",
    "category": "Park",
    "centroidLat": 28.72911,
    "centroidLon": 77.139658,
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
    "caption": "DDA Orchard Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "11910561582",
    "name": "e block park",
    "category": "Park",
    "centroidLat": 28.53652,
    "centroidLon": 77.254589,
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
    "caption": "e block park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "12183551783",
    "name": "D-8 Park",
    "category": "Park",
    "centroidLat": 28.529252,
    "centroidLon": 77.14401,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "D-8 Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "12205008401",
    "name": "Shiv Nagar Park",
    "category": "Park",
    "centroidLat": 28.653451,
    "centroidLon": 77.189218,
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
    "caption": "Shiv Nagar Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "12211618701",
    "name": "Trikona Park",
    "category": "Park",
    "centroidLat": 28.647782,
    "centroidLon": 77.182321,
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
    "caption": "Trikona Park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "12229128501",
    "name": "Sanjay Van gate (near IIFT)",
    "category": "Park",
    "centroidLat": 28.536969,
    "centroidLon": 77.181889,
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
    "caption": "Sanjay Van gate (near IIFT) — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "12593949523",
    "name": "Sports Ground",
    "category": "Park",
    "centroidLat": 28.614105,
    "centroidLon": 77.33587,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Ryan International School"
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
    "caption": "Sports Ground — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "12593949527",
    "name": "Garden",
    "category": "Garden",
    "centroidLat": 28.613845,
    "centroidLon": 77.336898,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "Ryan International School"
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
    "caption": "Garden — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "12943213101",
    "name": "Local park",
    "category": "Park",
    "centroidLat": 28.539912,
    "centroidLon": 77.236348,
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
    "caption": "Local park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "13027947794",
    "name": "cb block park",
    "category": "Park",
    "centroidLat": 28.620019,
    "centroidLon": 77.135082,
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
    "caption": "cb  block park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "13130071727",
    "name": "B-block central park",
    "category": "Park",
    "centroidLat": 28.693355,
    "centroidLon": 77.330125,
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
    "caption": "B-block central park — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "13131409225",
    "name": "sheesh mahal",
    "category": "Park",
    "centroidLat": 28.714905,
    "centroidLon": 77.151003,
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
    "caption": "sheesh mahal — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "13146465016",
    "name": "DDA Green Area",
    "category": "Garden",
    "centroidLat": 28.841773,
    "centroidLon": 77.128119,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "DDA Green Area — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "13531777500",
    "name": "Margosa Lawn",
    "category": "Garden",
    "centroidLat": 28.590217,
    "centroidLon": 77.224098,
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
    "caption": "Margosa Lawn — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "13531820501",
    "name": "Silk Cotton Lawn",
    "category": "Garden",
    "centroidLat": 28.590278,
    "centroidLon": 77.224522,
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
    "caption": "Silk Cotton Lawn — garden in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "13568864576",
    "name": "Chota Gol Chakkar (Bawana Industrial Area, Delhi",
    "category": "Park",
    "centroidLat": 28.793258,
    "centroidLon": 77.048356,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DSIIDC, Bawana"
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
    "caption": "Chota Gol Chakkar (Bawana Industrial Area, Delhi — park in Delhi"
  },
  {
    "osmType": "node",
    "osmId": "13569891601",
    "name": "Mirabai Park",
    "category": "Park",
    "centroidLat": 28.690614,
    "centroidLon": 77.199165,
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
    "caption": "Mirabai Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "24501701",
    "name": "Leisure Valley Park",
    "category": "Park",
    "centroidLat": 28.469197,
    "centroidLon": 77.066087,
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
    "caption": "Leisure Valley Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "24525917",
    "name": "Sultanpur National Park",
    "category": "Nature Reserve",
    "centroidLat": 28.460497,
    "centroidLon": 76.890231,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "boundary": "national_park",
      "leisure": "nature_reserve"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=private",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sultanpur National Park — nature reserve in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "24636597",
    "name": "HUDA Garden",
    "category": "Park",
    "centroidLat": 28.474783,
    "centroidLon": 77.053271,
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
    "caption": "HUDA Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "28208892",
    "name": "Okhla Bird Sanctuary",
    "category": "Nature Reserve",
    "centroidLat": 28.558491,
    "centroidLon": 77.307616,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "boundary": "protected_area",
      "leisure": "nature_reserve",
      "operator": "Forest Department Government of Uttar Pradesh"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=private",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Okhla Bird Sanctuary — nature reserve in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "34940769",
    "name": "Sector 45 Community park",
    "category": "Park",
    "centroidLat": 28.442319,
    "centroidLon": 77.067409,
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
    "caption": "Sector 45 Community park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "35463239",
    "name": "Tau Devi Lal Park",
    "category": "Park",
    "centroidLat": 28.502106,
    "centroidLon": 77.056828,
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
    "caption": "Tau Devi Lal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "38170389",
    "name": "Vasant Vatika",
    "category": "Park",
    "centroidLat": 28.534354,
    "centroidLon": 77.146301,
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
    "caption": "Vasant Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "39347973",
    "name": "Talab Park",
    "category": "Park",
    "centroidLat": 28.419757,
    "centroidLon": 77.315788,
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
    "caption": "Talab Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "42340191",
    "name": "B Block Community Park",
    "category": "Park",
    "centroidLat": 28.553793,
    "centroidLon": 77.175765,
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
    "caption": "B Block Community Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "42340193",
    "name": "BC-BD Block Community Park",
    "category": "Park",
    "centroidLat": 28.553179,
    "centroidLon": 77.175181,
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
    "caption": "BC-BD Block Community Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "42340196",
    "name": "BA-BB Block Community Park",
    "category": "Park",
    "centroidLat": 28.554285,
    "centroidLon": 77.176491,
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
    "caption": "BA-BB Block Community Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "43325260",
    "name": "Jamun Wala Park",
    "category": "Park",
    "centroidLat": 28.530191,
    "centroidLon": 77.217122,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Select Citywalk"
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
    "caption": "Jamun Wala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "44352051",
    "name": "National Police Memorial Complex",
    "category": "Park",
    "centroidLat": 28.603356,
    "centroidLon": 77.193907,
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
    "caption": "National Police Memorial Complex — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "45769378",
    "name": "Sector 46 Central Park",
    "category": "Park",
    "centroidLat": 28.434397,
    "centroidLon": 77.060729,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "RWA"
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
    "caption": "Sector 46 Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "58719250",
    "name": "India Gate Park",
    "category": "Park",
    "centroidLat": 28.611762,
    "centroidLon": 77.229189,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "grass",
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
    "caption": "India Gate Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "61370308",
    "name": "Tau Devi Lal Bio-Diversity and Botonical Garden",
    "category": "Park",
    "centroidLat": 28.432744,
    "centroidLon": 77.093112,
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
    "caption": "Tau Devi Lal Bio-Diversity and Botonical Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "69584771",
    "name": "Shaheed Smarak Smriti Park",
    "category": "Park",
    "centroidLat": 28.567334,
    "centroidLon": 77.337545,
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
    "caption": "Shaheed Smarak Smriti Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "69995784",
    "name": "J block Park",
    "category": "Park",
    "centroidLat": 28.583995,
    "centroidLon": 77.338571,
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
    "caption": "J block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "70520990",
    "name": "Shani Bazar Park",
    "category": "Park",
    "centroidLat": 28.579394,
    "centroidLon": 77.325409,
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
    "caption": "Shani Bazar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "70520999",
    "name": "indo gulf park",
    "category": "Park",
    "centroidLat": 28.577258,
    "centroidLon": 77.326948,
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
    "caption": "indo gulf park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "71215868",
    "name": "Priyadarshani Park",
    "category": "Park",
    "centroidLat": 28.596555,
    "centroidLon": 77.338866,
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
    "caption": "Priyadarshani Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "71219785",
    "name": "L-block small park",
    "category": "Park",
    "centroidLat": 28.59789,
    "centroidLon": 77.336098,
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
    "caption": "L-block small park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "71219846",
    "name": "L-Block Park",
    "category": "Park",
    "centroidLat": 28.596978,
    "centroidLon": 77.334816,
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
    "caption": "L-Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "74121758",
    "name": "Krishna Vatika Park",
    "category": "Park",
    "centroidLat": 28.647862,
    "centroidLon": 77.336114,
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
    "caption": "Krishna Vatika Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "76849321",
    "name": "Inayati masjid",
    "category": "Park",
    "centroidLat": 28.61597,
    "centroidLon": 77.299297,
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
    "caption": "Inayati masjid — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "76963813",
    "name": "Indira Gandhi Mahila Park",
    "category": "Park",
    "centroidLat": 28.611849,
    "centroidLon": 77.309279,
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
    "caption": "Indira Gandhi Mahila Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "77339781",
    "name": "Amir Khusro Park",
    "category": "Park",
    "centroidLat": 28.594862,
    "centroidLon": 77.241786,
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
    "caption": "Amir Khusro Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "77967766",
    "name": "CH Lekharam Park",
    "category": "Park",
    "centroidLat": 28.691192,
    "centroidLon": 77.171175,
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
    "caption": "CH Lekharam Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78154704",
    "name": "Janak Vatika",
    "category": "Park",
    "centroidLat": 28.67955,
    "centroidLon": 77.176976,
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
    "caption": "Janak Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78154942",
    "name": "Ashoka Garden",
    "category": "Park",
    "centroidLat": 28.684321,
    "centroidLon": 77.178936,
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
    "caption": "Ashoka Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78164702",
    "name": "Shakti Apartments Park",
    "category": "Park",
    "centroidLat": 28.684113,
    "centroidLon": 77.187585,
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
    "caption": "Shakti Apartments Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78164714",
    "name": "Radhe Lal Park",
    "category": "Park",
    "centroidLat": 28.688774,
    "centroidLon": 77.184529,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Residents welfare association"
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
    "caption": "Radhe Lal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78445727",
    "name": "Subhash Park",
    "category": "Park",
    "centroidLat": 28.708114,
    "centroidLon": 77.158222,
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
    "caption": "Subhash Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78445871",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 28.709905,
    "centroidLon": 77.159721,
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
    "caption": "Children's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78473710",
    "name": "Shalimar Bagh",
    "category": "Park",
    "centroidLat": 28.718193,
    "centroidLon": 77.150268,
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
    "caption": "Shalimar Bagh — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78484399",
    "name": "Swarn Jayanti Park",
    "category": "Park",
    "centroidLat": 28.723053,
    "centroidLon": 77.118855,
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
    "caption": "Swarn Jayanti Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78484471",
    "name": "Colonel Prem Sahgal Park",
    "category": "Park",
    "centroidLat": 28.723838,
    "centroidLon": 77.110187,
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
    "caption": "Colonel Prem Sahgal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78542458",
    "name": "Shaheed Bhagat Singh Park",
    "category": "Park",
    "centroidLat": 28.733842,
    "centroidLon": 77.109881,
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
    "caption": "Shaheed Bhagat Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78555896",
    "name": "F Block Pocket 2 Park",
    "category": "Park",
    "centroidLat": 28.732613,
    "centroidLon": 77.107946,
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
    "caption": "F Block Pocket 2 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78580465",
    "name": "District Park",
    "category": "Park",
    "centroidLat": 28.737966,
    "centroidLon": 77.127293,
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
    "caption": "District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78595523",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.713502,
    "centroidLon": 77.136043,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78595584",
    "name": "District Park",
    "category": "Park",
    "centroidLat": 28.709404,
    "centroidLon": 77.127734,
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
    "caption": "District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78595622",
    "name": "Katyani Maa Park",
    "category": "Park",
    "centroidLat": 28.715956,
    "centroidLon": 77.133344,
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
    "caption": "Katyani Maa Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78601493",
    "name": "Rani Laxmi Bai Park",
    "category": "Park",
    "centroidLat": 28.731869,
    "centroidLon": 77.128624,
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
    "caption": "Rani Laxmi Bai Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78755830",
    "name": "Municipal Park",
    "category": "Park",
    "centroidLat": 28.714714,
    "centroidLon": 77.17363,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Delhi"
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
    "caption": "Municipal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78755840",
    "name": "Subhash Park",
    "category": "Park",
    "centroidLat": 28.718576,
    "centroidLon": 77.174804,
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
    "caption": "Subhash Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78785446",
    "name": "Aadikavi Maharshi Valmiki Udyan",
    "category": "Park",
    "centroidLat": 28.727995,
    "centroidLon": 77.177896,
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
    "caption": "Aadikavi Maharshi Valmiki Udyan — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78786443",
    "name": "Baba Ramdev Park",
    "category": "Park",
    "centroidLat": 28.732284,
    "centroidLon": 77.17244,
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
    "caption": "Baba Ramdev Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78786508",
    "name": "Mahendra Park",
    "category": "Park",
    "centroidLat": 28.721678,
    "centroidLon": 77.166898,
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
    "caption": "Mahendra Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "78881725",
    "name": "Maharaja Agersen Park",
    "category": "Park",
    "centroidLat": 28.727455,
    "centroidLon": 77.087176,
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
    "caption": "Maharaja Agersen Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80429793",
    "name": "Hindi Park",
    "category": "Park",
    "centroidLat": 28.642979,
    "centroidLon": 77.241882,
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
    "caption": "Hindi Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80429795",
    "name": "Atal Bihari Vajpayee Sadbhavna Park",
    "category": "Park",
    "centroidLat": 28.642918,
    "centroidLon": 77.246103,
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
    "caption": "Atal Bihari Vajpayee Sadbhavna Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80429893",
    "name": "Raj Ghat",
    "category": "Park",
    "centroidLat": 28.644738,
    "centroidLon": 77.249768,
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
    "caption": "Raj Ghat — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80439675",
    "name": "Indraprastha Park",
    "category": "Park",
    "centroidLat": 28.600994,
    "centroidLon": 77.253893,
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
    "caption": "Indraprastha Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80442502",
    "name": "Lodhi Gardens",
    "category": "Park",
    "centroidLat": 28.593481,
    "centroidLon": 77.219562,
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
    "caption": "Lodhi Gardens — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80511825",
    "name": "Asaf Ali Park",
    "category": "Park",
    "centroidLat": 28.550427,
    "centroidLon": 77.246304,
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
    "caption": "Asaf Ali Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80511826",
    "name": "Hansraj Sethi Park",
    "category": "Park",
    "centroidLat": 28.546906,
    "centroidLon": 77.261265,
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
    "caption": "Hansraj Sethi Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80513375",
    "name": "N Block Park",
    "category": "Park",
    "centroidLat": 28.558962,
    "centroidLon": 77.234459,
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
    "caption": "N Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80513403",
    "name": "D.D.A. Park Panchsheel",
    "category": "Park",
    "centroidLat": 28.548801,
    "centroidLon": 77.223446,
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
    "caption": "D.D.A. Park Panchsheel — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80678169",
    "name": "Buddha Jayanti Park",
    "category": "Park",
    "centroidLat": 28.615669,
    "centroidLon": 77.177407,
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
    "caption": "Buddha Jayanti Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80936826",
    "name": "Ajmal Khan Park",
    "category": "Park",
    "centroidLat": 28.653457,
    "centroidLon": 77.197031,
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
    "caption": "Ajmal Khan Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80940704",
    "name": "Kaccha Bagh",
    "category": "Park",
    "centroidLat": 28.65748,
    "centroidLon": 77.229696,
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
    "caption": "Kaccha Bagh — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80940709",
    "name": "Company Bagh",
    "category": "Park",
    "centroidLat": 28.658797,
    "centroidLon": 77.227634,
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
    "caption": "Company Bagh — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "80950088",
    "name": "Safdarjung's Tomb",
    "category": "Park",
    "centroidLat": 28.589576,
    "centroidLon": 77.2108,
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
    "caption": "Safdarjung's Tomb — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "81352211",
    "name": "India Africa Friendship Rose Garden",
    "category": "Park",
    "centroidLat": 28.587934,
    "centroidLon": 77.184954,
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
    "caption": "India Africa Friendship Rose Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "81352246",
    "name": "Singapore Park",
    "category": "Park",
    "centroidLat": 28.588399,
    "centroidLon": 77.180323,
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
    "caption": "Singapore Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "89583607",
    "name": "Mehrauli Archaeological Park",
    "category": "Park",
    "centroidLat": 28.521203,
    "centroidLon": 77.18588,
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
    "caption": "Mehrauli Archaeological Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "89808628",
    "name": "Rock Garden",
    "category": "Park",
    "centroidLat": 28.531221,
    "centroidLon": 77.24611,
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
    "caption": "Rock Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "89814375",
    "name": "S Block Park",
    "category": "Park",
    "centroidLat": 28.53156,
    "centroidLon": 77.241979,
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
    "caption": "S Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "89955796",
    "name": "Mela ground",
    "category": "Park",
    "centroidLat": 28.537477,
    "centroidLon": 77.252111,
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
    "caption": "Mela ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "89955822",
    "name": "Durga Puja Ground",
    "category": "Park",
    "centroidLat": 28.540102,
    "centroidLon": 77.244974,
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
    "caption": "Durga Puja Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "116648146",
    "name": "E block Basket Ball park",
    "category": "Park",
    "centroidLat": 28.550694,
    "centroidLon": 77.241502,
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
    "caption": "E block Basket Ball park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "127647573",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.662896,
    "centroidLon": 77.284542,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "128057732",
    "name": "Ramlila Maidan",
    "category": "Park",
    "centroidLat": 28.666753,
    "centroidLon": 77.286454,
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
    "caption": "Ramlila Maidan — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "132084114",
    "name": "Char Bagh Najaf Khan Tomb",
    "category": "Park",
    "centroidLat": 28.580866,
    "centroidLon": 77.213536,
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
    "caption": "Char Bagh Najaf Khan Tomb — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "134049024",
    "name": "M(u) block Park",
    "category": "Recreation Ground",
    "centroidLat": 28.707935,
    "centroidLon": 77.143004,
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
    "caption": "M(u) block Park — recreation ground in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "150881456",
    "name": "Sector 4 Public Park",
    "category": "Park",
    "centroidLat": 28.603446,
    "centroidLon": 77.049087,
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
    "caption": "Sector 4 Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "151572182",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.601775,
    "centroidLon": 77.045981,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "154196972",
    "name": "Green Circle",
    "category": "Garden",
    "centroidLat": 28.676322,
    "centroidLon": 77.112517,
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
    "caption": "Green Circle — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "154324500",
    "name": "Maharishi Dayanand Saraswati Park",
    "category": "Park",
    "centroidLat": 28.630949,
    "centroidLon": 77.077972,
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
    "caption": "Maharishi Dayanand Saraswati Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "154329213",
    "name": "Vikaspuri M Blocck District Park",
    "category": "Park",
    "centroidLat": 28.634973,
    "centroidLon": 77.074313,
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
    "caption": "Vikaspuri M Blocck District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "154708935",
    "name": "GULMOHAR PARK",
    "category": "Park",
    "centroidLat": 28.554884,
    "centroidLon": 77.210725,
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
    "caption": "GULMOHAR PARK — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "155441683",
    "name": "Shalimar Garden",
    "category": "Park",
    "centroidLat": 28.707842,
    "centroidLon": 77.189626,
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
    "caption": "Shalimar Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "155442085",
    "name": "D-Park",
    "category": "Park",
    "centroidLat": 28.709175,
    "centroidLon": 77.18469,
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
    "caption": "D-Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "155444144",
    "name": "Shri Sanatan Dharm Mandir Park",
    "category": "Park",
    "centroidLat": 28.70834,
    "centroidLon": 77.190971,
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
    "caption": "Shri Sanatan Dharm Mandir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "158036606",
    "name": "Sindhi Park",
    "category": "Park",
    "centroidLat": 28.64006,
    "centroidLon": 77.186975,
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
    "caption": "Sindhi Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "158122667",
    "name": "Nehru Park",
    "category": "Park",
    "centroidLat": 28.666013,
    "centroidLon": 77.323521,
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
    "caption": "Nehru Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "162249479",
    "name": "G Block Park",
    "category": "Park",
    "centroidLat": 28.520546,
    "centroidLon": 77.209362,
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
    "caption": "G Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "164675825",
    "name": "Rajiv Chowk Central Park",
    "category": "Park",
    "centroidLat": 28.63281,
    "centroidLon": 77.219708,
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
    "caption": "Rajiv Chowk Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "167335643",
    "name": "Neighborhood Park",
    "category": "Park",
    "centroidLat": 28.678209,
    "centroidLon": 77.085373,
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
    "caption": "Neighborhood Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "167422029",
    "name": "Peera garhi Shiv Mandir Park",
    "category": "Park",
    "centroidLat": 28.676565,
    "centroidLon": 77.088102,
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
    "caption": "Peera garhi Shiv Mandir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "171496284",
    "name": "Jheel Park",
    "category": "Park",
    "centroidLat": 28.696277,
    "centroidLon": 77.108656,
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
    "caption": "Jheel Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "171510637",
    "name": "Chotu Ram Park",
    "category": "Park",
    "centroidLat": 28.71288,
    "centroidLon": 77.109628,
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
    "caption": "Chotu Ram Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "171551666",
    "name": "District Park",
    "category": "Park",
    "centroidLat": 28.694539,
    "centroidLon": 77.144696,
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
    "caption": "District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "171605370",
    "name": "Jheel Park",
    "category": "Park",
    "centroidLat": 28.691558,
    "centroidLon": 77.132987,
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
    "caption": "Jheel Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "172343212",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.444499,
    "centroidLon": 77.313199,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "172383398",
    "name": "Sector 16 HUDA Park",
    "category": "Park",
    "centroidLat": 28.408615,
    "centroidLon": 77.319187,
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
    "caption": "Sector 16 HUDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "174872907",
    "name": "Kallar",
    "category": "Forest",
    "centroidLat": 28.562188,
    "centroidLon": 76.891423,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "forest"
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
    "caption": "Kallar — forest in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "175804107",
    "name": "Bahubali Park",
    "category": "Park",
    "centroidLat": 28.655981,
    "centroidLon": 77.305357,
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
    "caption": "Bahubali Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "188106889",
    "name": "Noida Botanical Garden",
    "category": "Park",
    "centroidLat": 28.562348,
    "centroidLon": 77.329123,
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
    "caption": "Noida Botanical Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "188594254",
    "name": "Apna park",
    "category": "Park",
    "centroidLat": 28.450066,
    "centroidLon": 77.316271,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Faridabad"
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
    "caption": "Apna park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "188594258",
    "name": "Vivekananda Park",
    "category": "Park",
    "centroidLat": 28.449614,
    "centroidLon": 77.312904,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Faridabad"
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
    "caption": "Vivekananda Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "188617256",
    "name": "NTPC Eco Park",
    "category": "Park",
    "centroidLat": 28.519911,
    "centroidLon": 77.319401,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "NTPC"
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
    "caption": "NTPC Eco Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "189108365",
    "name": "Ticona Park",
    "category": "Park",
    "centroidLat": 28.506343,
    "centroidLon": 77.049646,
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
    "caption": "Ticona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "189430943",
    "name": "Kargil Colony Park",
    "category": "Park",
    "centroidLat": 28.589948,
    "centroidLon": 77.041133,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Kargil Colony Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "189447678",
    "name": "Bharat Vandana park",
    "category": "Park",
    "centroidLat": 28.571184,
    "centroidLon": 77.059077,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "Bharat Vandana park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "189448083",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.584331,
    "centroidLon": 77.061914,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "189448085",
    "name": "Park no 3, Sector 9 Dwarka",
    "category": "Park",
    "centroidLat": 28.57978,
    "centroidLon": 77.068973,
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
    "caption": "Park no 3, Sector 9 Dwarka — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "200422858",
    "name": "Mitraon Jungle",
    "category": "Forest",
    "centroidLat": 28.614966,
    "centroidLon": 76.940646,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "forest"
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
    "caption": "Mitraon Jungle — forest in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "202256177",
    "name": "Appatment Park",
    "category": "Park",
    "centroidLat": 28.604526,
    "centroidLon": 77.049325,
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
    "caption": "Appatment Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "202256415",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.603252,
    "centroidLon": 77.045369,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "202256416",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.603665,
    "centroidLon": 77.046057,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "202947339",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.601404,
    "centroidLon": 77.044781,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "203590038",
    "name": "S.D.M.C. Park",
    "category": "Park",
    "centroidLat": 28.563782,
    "centroidLon": 77.052594,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "S.D.M.C. Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "203590039",
    "name": "Sector - 23 Narrow Park",
    "category": "Park",
    "centroidLat": 28.561724,
    "centroidLon": 77.055752,
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
    "caption": "Sector - 23 Narrow Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "203590040",
    "name": "D.D.A. Park - 4, Sector - 23",
    "category": "Park",
    "centroidLat": 28.561857,
    "centroidLon": 77.054364,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority (D.D.A.)"
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
    "caption": "D.D.A. Park - 4, Sector - 23 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "209296533",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.597949,
    "centroidLon": 77.046725,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "209297829",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.601882,
    "centroidLon": 77.055478,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "209297844",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.601719,
    "centroidLon": 77.05699,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "209297847",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.600174,
    "centroidLon": 77.05658,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "209302783",
    "name": "Herbal Park",
    "category": "Park",
    "centroidLat": 28.595172,
    "centroidLon": 77.063476,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Herbal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "209304273",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.593346,
    "centroidLon": 77.060421,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "209304277",
    "name": "Shaheed Major Sanjay Lohchub Park",
    "category": "Park",
    "centroidLat": 28.590693,
    "centroidLon": 77.060994,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Shaheed Major Sanjay Lohchub Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "210682551",
    "name": "District Park",
    "category": "Park",
    "centroidLat": 28.575665,
    "centroidLon": 77.054225,
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
    "caption": "District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "221155540",
    "name": "District Public Park",
    "category": "Park",
    "centroidLat": 28.615518,
    "centroidLon": 77.026428,
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
    "caption": "District Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "221182451",
    "name": "Janakpur B Block District Park",
    "category": "Park",
    "centroidLat": 28.623052,
    "centroidLon": 77.090274,
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
    "caption": "Janakpur B Block District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "221183214",
    "name": "Rose Park",
    "category": "Park",
    "centroidLat": 28.619909,
    "centroidLon": 77.087462,
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
    "caption": "Rose Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "225903544",
    "name": "Udham Singh Park",
    "category": "Park",
    "centroidLat": 28.629763,
    "centroidLon": 77.114606,
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
    "caption": "Udham Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "226566300",
    "name": "SPG COMPLEX",
    "category": "Park",
    "centroidLat": 28.566444,
    "centroidLon": 77.06986,
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
    "caption": "SPG COMPLEX — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "228137190",
    "name": "Jheel Park",
    "category": "Park",
    "centroidLat": 28.588934,
    "centroidLon": 77.161318,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Jheel Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "231369851",
    "name": "Chawla Park",
    "category": "Park",
    "centroidLat": 28.647757,
    "centroidLon": 77.175331,
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
    "caption": "Chawla Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "231414759",
    "name": "Prasad Nagar Park",
    "category": "Park",
    "centroidLat": 28.647085,
    "centroidLon": 77.178641,
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
    "caption": "Prasad Nagar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "232499607",
    "name": "Central park",
    "category": "Park",
    "centroidLat": 28.561194,
    "centroidLon": 77.061893,
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
    "caption": "Central park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "235625787",
    "name": "District Park Sarita Vihar",
    "category": "Park",
    "centroidLat": 28.527623,
    "centroidLon": 77.292081,
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
    "caption": "District Park Sarita Vihar — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "237984877",
    "name": "K block park",
    "category": "Park",
    "centroidLat": 28.522436,
    "centroidLon": 77.211365,
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
    "caption": "K block park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "239637985",
    "name": "Thakur Vatika",
    "category": "Park",
    "centroidLat": 28.52173,
    "centroidLon": 77.213624,
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
    "caption": "Thakur Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "243370197",
    "name": "Fountain Park",
    "category": "Park",
    "centroidLat": 28.670265,
    "centroidLon": 77.15055,
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
    "caption": "Fountain Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "245779980",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.627645,
    "centroidLon": 76.956376,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "254130943",
    "name": "NIL Block Park",
    "category": "Park",
    "centroidLat": 28.533542,
    "centroidLon": 77.210444,
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
    "caption": "NIL Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "254130944",
    "name": "NIL Block Park",
    "category": "Park",
    "centroidLat": 28.534425,
    "centroidLon": 77.210959,
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
    "caption": "NIL Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "258341942",
    "name": "Amrit Udyan",
    "category": "Garden",
    "centroidLat": 28.614444,
    "centroidLon": 77.197901,
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
    "caption": "Amrit Udyan — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "258880202",
    "name": "Nagar Van Park",
    "category": "Park",
    "centroidLat": 28.600099,
    "centroidLon": 77.100889,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Government"
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
    "caption": "Nagar Van Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "259169046",
    "name": "Guru Nanak Dev Park",
    "category": "Park",
    "centroidLat": 28.645803,
    "centroidLon": 77.191464,
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
    "caption": "Guru Nanak Dev Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "260508111",
    "name": "Sanjay Park",
    "category": "Park",
    "centroidLat": 28.630965,
    "centroidLon": 77.281171,
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
    "caption": "Sanjay Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "262090090",
    "name": "Priyadarshani Indira Gandhi Park",
    "category": "Park",
    "centroidLat": 28.528169,
    "centroidLon": 77.255462,
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
    "caption": "Priyadarshani Indira Gandhi Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "262517131",
    "name": "Paschim Vihar District Park",
    "category": "Park",
    "centroidLat": 28.671931,
    "centroidLon": 77.095614,
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
    "caption": "Paschim Vihar District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "262565114",
    "name": "Shankar Garden",
    "category": "Park",
    "centroidLat": 28.631252,
    "centroidLon": 77.069752,
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
    "caption": "Shankar Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "262646816",
    "name": "Guitar Park",
    "category": "Park",
    "centroidLat": 28.673305,
    "centroidLon": 77.083931,
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
    "caption": "Guitar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "262657592",
    "name": "Janmashtami Park",
    "category": "Park",
    "centroidLat": 28.662501,
    "centroidLon": 77.092898,
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
    "caption": "Janmashtami Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "262662777",
    "name": "District Park",
    "category": "Park",
    "centroidLat": 28.665795,
    "centroidLon": 77.098556,
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
    "caption": "District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "262807181",
    "name": "Maharaja Ranjit Singh Park",
    "category": "Park",
    "centroidLat": 28.561383,
    "centroidLon": 77.214147,
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
    "caption": "Maharaja Ranjit Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "262923544",
    "name": "Dhingra Park",
    "category": "Park",
    "centroidLat": 28.670781,
    "centroidLon": 77.141931,
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
    "caption": "Dhingra Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "263160024",
    "name": "Nihal Vihar Park",
    "category": "Park",
    "centroidLat": 28.659265,
    "centroidLon": 77.072761,
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
    "caption": "Nihal Vihar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "263958485",
    "name": "Malabar Garden",
    "category": "Park",
    "centroidLat": 28.637074,
    "centroidLon": 77.127192,
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
    "caption": "Malabar Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "264904087",
    "name": "Dilli Chalo Park",
    "category": "Park",
    "centroidLat": 28.65451,
    "centroidLon": 77.242651,
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
    "caption": "Dilli Chalo Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "264999016",
    "name": "Central Park CA and CD Block",
    "category": "Park",
    "centroidLat": 28.626238,
    "centroidLon": 77.105277,
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
    "caption": "Central Park CA and CD Block — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "265007636",
    "name": "Bhagwan Shri Parshuram Park",
    "category": "Park",
    "centroidLat": 28.624013,
    "centroidLon": 77.109886,
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
    "caption": "Bhagwan Shri Parshuram Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "265007638",
    "name": "Doctor Sushila Nayyar Park",
    "category": "Park",
    "centroidLat": 28.627029,
    "centroidLon": 77.12064,
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
    "caption": "Doctor Sushila Nayyar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "265007650",
    "name": "80 SFS Park",
    "category": "Park",
    "centroidLat": 28.623631,
    "centroidLon": 77.117749,
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
    "caption": "80 SFS Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "265008228",
    "name": "Salvage Park",
    "category": "Park",
    "centroidLat": 28.615036,
    "centroidLon": 77.109976,
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
    "caption": "Salvage Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "265149999",
    "name": "Shivaji Marg Park Part 1",
    "category": "Park",
    "centroidLat": 28.663805,
    "centroidLon": 77.152,
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
    "caption": "Shivaji Marg Park Part 1 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "265150545",
    "name": "Shivaji Marg Park Part 2",
    "category": "Park",
    "centroidLat": 28.667331,
    "centroidLon": 77.155449,
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
    "caption": "Shivaji Marg Park Part 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266003984",
    "name": "Baccha Park",
    "category": "Park",
    "centroidLat": 28.687087,
    "centroidLon": 77.349096,
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
    "caption": "Baccha Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266003992",
    "name": "Dr. APJ Abdul Kalam Park",
    "category": "Park",
    "centroidLat": 28.686926,
    "centroidLon": 77.348787,
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
    "caption": "Dr. APJ Abdul Kalam Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266003999",
    "name": "Ekta Park",
    "category": "Park",
    "centroidLat": 28.688282,
    "centroidLon": 77.345968,
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
    "caption": "Ekta Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266004000",
    "name": "shanti park",
    "category": "Park",
    "centroidLat": 28.688745,
    "centroidLon": 77.348138,
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
    "caption": "shanti park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266004002",
    "name": "mahila jagriti park",
    "category": "Park",
    "centroidLat": 28.689705,
    "centroidLon": 77.349811,
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
    "caption": "mahila jagriti park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266004003",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 28.690062,
    "centroidLon": 77.345127,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Shalimar Assosciation"
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
    "caption": "Children's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266004004",
    "name": "ram vatika",
    "category": "Park",
    "centroidLat": 28.691289,
    "centroidLon": 77.346598,
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
    "caption": "ram vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266074789",
    "name": "Jasola District Park",
    "category": "Park",
    "centroidLat": 28.540458,
    "centroidLon": 77.285944,
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
    "caption": "Jasola District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266074807",
    "name": "Netaji Subhash Sports Complex",
    "category": "Park",
    "centroidLat": 28.53904,
    "centroidLon": 77.290722,
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
    "caption": "Netaji Subhash Sports Complex — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "266768779",
    "name": "Purdah Bagh",
    "category": "Park",
    "centroidLat": 28.649231,
    "centroidLon": 77.240711,
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
    "caption": "Purdah Bagh — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "275403147",
    "name": "Shaheed Bhagat Singh Park",
    "category": "Park",
    "centroidLat": 28.531506,
    "centroidLon": 77.21191,
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
    "caption": "Shaheed Bhagat Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "275460693",
    "name": "Rose Garden",
    "category": "Garden",
    "centroidLat": 28.594566,
    "centroidLon": 77.221856,
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
    "caption": "Rose Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "276002131",
    "name": "Shri Maa Anandmayee Ashram Park",
    "category": "Park",
    "centroidLat": 28.543308,
    "centroidLon": 77.272846,
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
    "caption": "Shri Maa Anandmayee Ashram Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "276480531",
    "name": "Vaishnavi DDA Park & Nursery",
    "category": "Park",
    "centroidLat": 28.698716,
    "centroidLon": 77.175769,
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
    "caption": "Vaishnavi DDA Park & Nursery — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277860546",
    "name": "Dr. Ram Manohar Lohia Park",
    "category": "Park",
    "centroidLat": 28.682935,
    "centroidLon": 77.349132,
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
    "caption": "Dr. Ram Manohar Lohia Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277860559",
    "name": "vijay park",
    "category": "Park",
    "centroidLat": 28.690434,
    "centroidLon": 77.337934,
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
    "caption": "vijay park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277860563",
    "name": "गुलमोहर पार्क",
    "category": "Park",
    "centroidLat": 28.691481,
    "centroidLon": 77.342985,
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
    "caption": "गुलमोहर पार्क — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277860564",
    "name": "रोज़ पार्क",
    "category": "Park",
    "centroidLat": 28.691849,
    "centroidLon": 77.340559,
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
    "caption": "रोज़ पार्क — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277860565",
    "name": "दयानंद पार्क",
    "category": "Park",
    "centroidLat": 28.69148,
    "centroidLon": 77.341684,
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
    "caption": "दयानंद पार्क — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887006",
    "name": "Keshav Vatika",
    "category": "Park",
    "centroidLat": 28.661926,
    "centroidLon": 77.323048,
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
    "caption": "Keshav Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887007",
    "name": "B Block Park Ramprastha Colony",
    "category": "Park",
    "centroidLat": 28.658516,
    "centroidLon": 77.323653,
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
    "caption": "B Block Park Ramprastha Colony — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887010",
    "name": "Sahyog Park",
    "category": "Park",
    "centroidLat": 28.660996,
    "centroidLon": 77.326893,
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
    "caption": "Sahyog Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887011",
    "name": "Dhruv park",
    "category": "Park",
    "centroidLat": 28.66847,
    "centroidLon": 77.327269,
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
    "caption": "Dhruv park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887013",
    "name": "Rampuri A-Block park",
    "category": "Park",
    "centroidLat": 28.670275,
    "centroidLon": 77.329323,
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
    "caption": "Rampuri A-Block park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887014",
    "name": "Rampuri B-Block Park",
    "category": "Park",
    "centroidLat": 28.672301,
    "centroidLon": 77.328247,
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
    "caption": "Rampuri B-Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887017",
    "name": "Ram Park",
    "category": "Park",
    "centroidLat": 28.665111,
    "centroidLon": 77.330974,
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
    "caption": "Ram Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887019",
    "name": "Mahavir Park",
    "category": "Park",
    "centroidLat": 28.668089,
    "centroidLon": 77.318708,
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
    "caption": "Mahavir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887021",
    "name": "Ramprastha A Block Park",
    "category": "Park",
    "centroidLat": 28.658306,
    "centroidLon": 77.320897,
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
    "caption": "Ramprastha A Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887025",
    "name": "Dayanand Park",
    "category": "Park",
    "centroidLat": 28.661491,
    "centroidLon": 77.321404,
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
    "caption": "Dayanand Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887026",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.66723,
    "centroidLon": 77.322441,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "277887674",
    "name": "Sanny Pooja Park",
    "category": "Park",
    "centroidLat": 28.669359,
    "centroidLon": 77.333254,
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
    "caption": "Sanny Pooja Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "278178774",
    "name": "Hathoda Park",
    "category": "Park",
    "centroidLat": 28.6867,
    "centroidLon": 77.157022,
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
    "caption": "Hathoda Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279548725",
    "name": "Park Sector 7",
    "category": "Park",
    "centroidLat": 28.590698,
    "centroidLon": 77.074014,
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
    "caption": "Park Sector 7 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279548728",
    "name": "Chaudhary Ramkaran Solanki(Pradhan Palam 360) Memorial Park",
    "category": "Park",
    "centroidLat": 28.592163,
    "centroidLon": 77.072866,
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
    "caption": "Chaudhary Ramkaran Solanki(Pradhan Palam 360) Memorial Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279554565",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.582263,
    "centroidLon": 77.058591,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279560616",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.587284,
    "centroidLon": 77.062641,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279569849",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.590383,
    "centroidLon": 77.066691,
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279569851",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.58916,
    "centroidLon": 77.064356,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279573045",
    "name": "Plaza-Park",
    "category": "Park",
    "centroidLat": 28.597773,
    "centroidLon": 77.068431,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Plaza-Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279573046",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.592091,
    "centroidLon": 77.063033,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279964396",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.59689,
    "centroidLon": 77.068392,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "279990645",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.595814,
    "centroidLon": 77.071167,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "283124994",
    "name": "playfield",
    "category": "Park",
    "centroidLat": 28.533382,
    "centroidLon": 77.290028,
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
    "caption": "playfield — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "283125010",
    "name": "Model Park",
    "category": "Park",
    "centroidLat": 28.533418,
    "centroidLon": 77.292208,
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
    "caption": "Model Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "283125012",
    "name": "Fountain Park",
    "category": "Park",
    "centroidLat": 28.534341,
    "centroidLon": 77.287561,
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
    "caption": "Fountain Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "283125014",
    "name": "Durga Park",
    "category": "Park",
    "centroidLat": 28.531817,
    "centroidLon": 77.291001,
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
    "caption": "Durga Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "283125026",
    "name": "Pocket C Sarita Vihar Park",
    "category": "Park",
    "centroidLat": 28.530506,
    "centroidLon": 77.290562,
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
    "caption": "Pocket C Sarita Vihar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "283732270",
    "name": "Smriti Van",
    "category": "Park",
    "centroidLat": 28.606723,
    "centroidLon": 77.338521,
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
    "caption": "Smriti Van — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "283907130",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.599519,
    "centroidLon": 77.312905,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "283919120",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.601122,
    "centroidLon": 77.321317,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "284820492",
    "name": "Sangam Vihar DDA Park",
    "category": "Park",
    "centroidLat": 28.510635,
    "centroidLon": 77.244466,
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
    "caption": "Sangam Vihar DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "287080566",
    "name": "Ambedkar Park",
    "category": "Park",
    "centroidLat": 28.649076,
    "centroidLon": 77.303713,
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
    "caption": "Ambedkar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "287238610",
    "name": "RBI Park",
    "category": "Park",
    "centroidLat": 28.577488,
    "centroidLon": 77.192292,
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
    "caption": "RBI Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "288638352",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.687714,
    "centroidLon": 77.154982,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "288675631",
    "name": "C8 Fountain Park",
    "category": "Park",
    "centroidLat": 28.690608,
    "centroidLon": 77.158558,
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
    "caption": "C8 Fountain Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "289747211",
    "name": "Deen Dayal Upadhyay Park",
    "category": "Park",
    "centroidLat": 28.633672,
    "centroidLon": 77.231405,
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
    "caption": "Deen Dayal Upadhyay Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "289747212",
    "name": "Deen Dayal Upadhyay Park",
    "category": "Park",
    "centroidLat": 28.635027,
    "centroidLon": 77.229703,
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
    "caption": "Deen Dayal Upadhyay Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "290559810",
    "name": "Roshanara Bagh",
    "category": "Park",
    "centroidLat": 28.673636,
    "centroidLon": 77.199289,
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
    "caption": "Roshanara Bagh — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "290620874",
    "name": "Coronation Park",
    "category": "Park",
    "centroidLat": 28.722474,
    "centroidLon": 77.197114,
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
    "caption": "Coronation Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "290645151",
    "name": "Nirankari Santokh Sarovar",
    "category": "Park",
    "centroidLat": 28.725589,
    "centroidLon": 77.199672,
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
    "caption": "Nirankari Santokh Sarovar — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "291408835",
    "name": "District Park, Gulabi Bagh",
    "category": "Park",
    "centroidLat": 28.677066,
    "centroidLon": 77.185252,
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
    "caption": "District Park, Gulabi Bagh — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "291408836",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.675486,
    "centroidLon": 77.173118,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "291551229",
    "name": "District park",
    "category": "Park",
    "centroidLat": 28.640076,
    "centroidLon": 77.110852,
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
    "caption": "District park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "291553429",
    "name": "Chiragh Dilli Nursery",
    "category": "Nature Reserve",
    "centroidLat": 28.540752,
    "centroidLon": 77.229703,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "nature_reserve"
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
    "caption": "Chiragh Dilli Nursery — nature reserve in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "291554263",
    "name": "Andolan Park",
    "category": "Park",
    "centroidLat": 28.540921,
    "centroidLon": 77.221784,
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
    "caption": "Andolan Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "291554264",
    "name": "Triveni DDA Park",
    "category": "Park",
    "centroidLat": 28.539063,
    "centroidLon": 77.224178,
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
    "caption": "Triveni DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "292988259",
    "name": "Moola Mal Bhatia Park",
    "category": "Park",
    "centroidLat": 28.63904,
    "centroidLon": 77.188643,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Moola Mal Bhatia Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "293341382",
    "name": "DDA \"Plus\" Park",
    "category": "Park",
    "centroidLat": 28.596028,
    "centroidLon": 77.297099,
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
    "caption": "DDA \"Plus\" Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "293506266",
    "name": "Ramlila Ground",
    "category": "Park",
    "centroidLat": 28.671734,
    "centroidLon": 77.296354,
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
    "caption": "Ramlila Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "293506274",
    "name": "Indira Park",
    "category": "Park",
    "centroidLat": 28.67028,
    "centroidLon": 77.298284,
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
    "caption": "Indira Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "295462240",
    "name": "Science Park",
    "category": "Park",
    "centroidLat": 28.538836,
    "centroidLon": 77.193347,
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
    "caption": "Science Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "295462241",
    "name": "Herbal Garden",
    "category": "Garden",
    "centroidLat": 28.538602,
    "centroidLon": 77.193739,
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
    "caption": "Herbal Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "295818858",
    "name": "MCD Park",
    "category": "Park",
    "centroidLat": 28.56603,
    "centroidLon": 77.188691,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Delhi"
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
    "caption": "MCD Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "296222968",
    "name": "Ashoka Park",
    "category": "Park",
    "centroidLat": 28.569119,
    "centroidLon": 77.276744,
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
    "caption": "Ashoka Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "297353904",
    "name": "Triangle Park",
    "category": "Park",
    "centroidLat": 28.44434,
    "centroidLon": 77.063586,
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
    "caption": "Triangle Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "297353910",
    "name": "Triangle Children Park",
    "category": "Park",
    "centroidLat": 28.444327,
    "centroidLon": 77.064168,
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
    "caption": "Triangle Children Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "297693704",
    "name": "Central Park, Sector B, Pocket 7, Vasant Kunj",
    "category": "Park",
    "centroidLat": 28.526546,
    "centroidLon": 77.15667,
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
    "caption": "Central Park, Sector B, Pocket 7, Vasant Kunj — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "297693706",
    "name": "Children's Park, Sector B, Pocket 7",
    "category": "Park",
    "centroidLat": 28.526456,
    "centroidLon": 77.15756,
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
    "caption": "Children's Park, Sector B, Pocket 7 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "300246339",
    "name": "Balaji Mandir Park",
    "category": "Park",
    "centroidLat": 28.730762,
    "centroidLon": 77.107542,
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
    "caption": "Balaji Mandir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "300256966",
    "name": "Pratibha School Vatika",
    "category": "Garden",
    "centroidLat": 28.73198,
    "centroidLon": 77.113078,
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
    "caption": "Pratibha School Vatika — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "300257525",
    "name": "Sector - 11, Green Belt",
    "category": "Park",
    "centroidLat": 28.729181,
    "centroidLon": 77.111168,
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
    "caption": "Sector - 11, Green Belt — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "300257623",
    "name": "Sector - 11, Green Belt",
    "category": "Park",
    "centroidLat": 28.734402,
    "centroidLon": 77.106606,
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
    "caption": "Sector - 11, Green Belt — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "300258129",
    "name": "Sector-11, Green Belt",
    "category": "Park",
    "centroidLat": 28.736068,
    "centroidLon": 77.108075,
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
    "caption": "Sector-11, Green Belt — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "300258406",
    "name": "Sector-11, Green Belt",
    "category": "Park",
    "centroidLat": 28.737341,
    "centroidLon": 77.109156,
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
    "caption": "Sector-11, Green Belt — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "302531236",
    "name": "Bhonga Park",
    "category": "Park",
    "centroidLat": 28.624431,
    "centroidLon": 77.277113,
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
    "caption": "Bhonga Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "302531257",
    "name": "Ramleela Ground",
    "category": "Park",
    "centroidLat": 28.625391,
    "centroidLon": 77.27629,
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
    "caption": "Ramleela Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "302531756",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.625733,
    "centroidLon": 77.281198,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "302532282",
    "name": "Madhuban Park",
    "category": "Park",
    "centroidLat": 28.631511,
    "centroidLon": 77.28668,
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
    "caption": "Madhuban Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "302532430",
    "name": "D Park MCD Park",
    "category": "Park",
    "centroidLat": 28.61847,
    "centroidLon": 77.284283,
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
    "caption": "D Park MCD Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "302533488",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.627743,
    "centroidLon": 77.275427,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "302534627",
    "name": "Lalita Park",
    "category": "Park",
    "centroidLat": 28.632161,
    "centroidLon": 77.271481,
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
    "caption": "Lalita Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "320343167",
    "name": "Char Wala Park",
    "category": "Park",
    "centroidLat": 28.647049,
    "centroidLon": 77.159092,
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
    "caption": "Char Wala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "320348676",
    "name": "Sushila Mohan Park",
    "category": "Park",
    "centroidLat": 28.659217,
    "centroidLon": 77.225461,
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
    "caption": "Sushila Mohan Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "320353003",
    "name": "Hayat Bakhsh",
    "category": "Garden",
    "centroidLat": 28.657755,
    "centroidLon": 77.24294,
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
    "caption": "Hayat Bakhsh — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "333324254",
    "name": "Netaji Subhash Park",
    "category": "Park",
    "centroidLat": 28.535749,
    "centroidLon": 77.253428,
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
    "caption": "Netaji Subhash Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "335305068",
    "name": "Jhoola Ground",
    "category": "Park",
    "centroidLat": 28.605443,
    "centroidLon": 77.237921,
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
    "caption": "Jhoola Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "340400594",
    "name": "D 6 Park",
    "category": "Park",
    "centroidLat": 28.526086,
    "centroidLon": 77.146792,
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
    "caption": "D 6 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "341461380",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.529881,
    "centroidLon": 77.248993,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "341469004",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.525803,
    "centroidLon": 77.250078,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "341469005",
    "name": "L Shape Park",
    "category": "Park",
    "centroidLat": 28.525724,
    "centroidLon": 77.250885,
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
    "caption": "L Shape Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "342553059",
    "name": "L-Shaped Park",
    "category": "Park",
    "centroidLat": 28.625925,
    "centroidLon": 77.071227,
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
    "caption": "L-Shaped Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "345665863",
    "name": "Pocket A2 colony small park 2",
    "category": "Park",
    "centroidLat": 28.610893,
    "centroidLon": 77.335928,
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
    "caption": "Pocket A2 colony small park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "345665975",
    "name": "Pocket A2 small park 2",
    "category": "Park",
    "centroidLat": 28.610521,
    "centroidLon": 77.336754,
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
    "caption": "Pocket A2 small park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "348991854",
    "name": "IGDTUW Playground",
    "category": "Park",
    "centroidLat": 28.664586,
    "centroidLon": 77.232766,
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
    "caption": "IGDTUW Playground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "352793186",
    "name": "Mandir Park",
    "category": "Park",
    "centroidLat": 28.57909,
    "centroidLon": 77.327448,
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
    "caption": "Mandir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "357288762",
    "name": "Sita Mata Park",
    "category": "Park",
    "centroidLat": 28.633897,
    "centroidLon": 77.179572,
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
    "caption": "Sita Mata Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "358701096",
    "name": "Bio-Tech Lawns",
    "category": "Park",
    "centroidLat": 28.545166,
    "centroidLon": 77.193585,
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
    "caption": "Bio-Tech Lawns — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "359798456",
    "name": "Herb Garden",
    "category": "Garden",
    "centroidLat": 28.61618,
    "centroidLon": 77.196821,
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
    "caption": "Herb Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "359798458",
    "name": "Rose Garden",
    "category": "Garden",
    "centroidLat": 28.614571,
    "centroidLon": 77.195255,
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
    "caption": "Rose Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "359949892",
    "name": "Sardar patel park",
    "category": "Park",
    "centroidLat": 28.458843,
    "centroidLon": 77.295495,
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
    "caption": "Sardar patel park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "363368225",
    "name": "Pathar Wala Park",
    "category": "Park",
    "centroidLat": 28.641085,
    "centroidLon": 77.102284,
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
    "caption": "Pathar Wala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "366949041",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.686575,
    "centroidLon": 77.325171,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "370543234",
    "name": "Qutab Park",
    "category": "Park",
    "centroidLat": 28.526019,
    "centroidLon": 77.187537,
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
    "caption": "Qutab Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "370543235",
    "name": "Tara Vala Park",
    "category": "Park",
    "centroidLat": 28.525757,
    "centroidLon": 77.189067,
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
    "caption": "Tara Vala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "370737760",
    "name": "Prime Chowk",
    "category": "Park",
    "centroidLat": 28.609065,
    "centroidLon": 77.208658,
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
    "caption": "Prime Chowk — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "370947966",
    "name": "Pandara Road Colony Park",
    "category": "Park",
    "centroidLat": 28.60479,
    "centroidLon": 77.228889,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "NDMC"
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
    "caption": "Pandara Road Colony Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "371900315",
    "name": "District Park IP Extension Park",
    "category": "Park",
    "centroidLat": 28.627026,
    "centroidLon": 77.310902,
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
    "caption": "District Park IP Extension Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "377430871",
    "name": "Saket Park",
    "category": "Park",
    "centroidLat": 28.523844,
    "centroidLon": 77.205919,
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
    "caption": "Saket Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "402325794",
    "name": "Rose Garden",
    "category": "Park",
    "centroidLat": 28.575662,
    "centroidLon": 77.306548,
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
    "caption": "Rose Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "402329963",
    "name": "Aravali Biodiversity Park",
    "category": "Nature Reserve",
    "centroidLat": 28.550738,
    "centroidLon": 77.152888,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "nature_reserve"
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
    "caption": "Aravali Biodiversity Park — nature reserve in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "408838131",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.582157,
    "centroidLon": 77.07328,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "414178866",
    "name": "Candor Badminton Court And Park",
    "category": "Park",
    "centroidLat": 28.510611,
    "centroidLon": 77.07216,
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
    "caption": "Candor Badminton Court And Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "414336477",
    "name": "The Garden of Five Senses",
    "category": "Park",
    "centroidLat": 28.513786,
    "centroidLon": 77.198802,
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
    "caption": "The Garden of Five Senses — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "414771607",
    "name": "Park 3",
    "category": "Park",
    "centroidLat": 28.594074,
    "centroidLon": 77.067622,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Park 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "414777308",
    "name": "Nehru Park",
    "category": "Park",
    "centroidLat": 28.63383,
    "centroidLon": 77.181522,
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
    "caption": "Nehru Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "415208849",
    "name": "Walking Track and Park",
    "category": "Park",
    "centroidLat": 28.517036,
    "centroidLon": 77.162245,
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
    "caption": "Walking Track and Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "421824882",
    "name": "Apna Park",
    "category": "Park",
    "centroidLat": 28.714277,
    "centroidLon": 77.215445,
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
    "caption": "Apna Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "423115180",
    "name": "N Block Central Park",
    "category": "Park",
    "centroidLat": 28.426336,
    "centroidLon": 77.061921,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "RWA"
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
    "caption": "N Block Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "423734335",
    "name": "Silver Jubilee Park",
    "category": "Park",
    "centroidLat": 28.457595,
    "centroidLon": 77.048351,
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
    "caption": "Silver Jubilee Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "424232709",
    "name": "Panchshila Park",
    "category": "Park",
    "centroidLat": 28.542079,
    "centroidLon": 77.214916,
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
    "caption": "Panchshila Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "427196482",
    "name": "Vishnu Garden",
    "category": "Park",
    "centroidLat": 28.636446,
    "centroidLon": 77.175533,
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
    "caption": "Vishnu Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "428176874",
    "name": "Mahavir Vatika",
    "category": "Park",
    "centroidLat": 28.663691,
    "centroidLon": 77.088685,
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
    "caption": "Mahavir Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "432827727",
    "name": "D1 Janakpuri Park",
    "category": "Park",
    "centroidLat": 28.611732,
    "centroidLon": 77.105225,
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
    "caption": "D1 Janakpuri Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "437448251",
    "name": "Jhandewalan Extension Park",
    "category": "Park",
    "centroidLat": 28.645556,
    "centroidLon": 77.202201,
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
    "caption": "Jhandewalan Extension Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "451100582",
    "name": "Main park",
    "category": "Park",
    "centroidLat": 28.600803,
    "centroidLon": 77.032708,
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
    "caption": "Main park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "454514563",
    "name": "Kangroo Park",
    "category": "Park",
    "centroidLat": 28.553707,
    "centroidLon": 77.268046,
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
    "caption": "Kangroo Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "458345917",
    "name": "Begumpur Park",
    "category": "Park",
    "centroidLat": 28.538577,
    "centroidLon": 77.209439,
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
    "caption": "Begumpur Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "461078306",
    "name": "Aravali Biodiversity Park",
    "category": "Nature Reserve",
    "centroidLat": 28.494688,
    "centroidLon": 77.118248,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "nature_reserve"
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
    "caption": "Aravali Biodiversity Park — nature reserve in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "461565336",
    "name": "Tughlakabad Recreational Complex",
    "category": "Park",
    "centroidLat": 28.509313,
    "centroidLon": 77.268037,
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
    "caption": "Tughlakabad Recreational Complex — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "464253915",
    "name": "Lok Nayak Jaya Prakash Narayan Memorial Park",
    "category": "Park",
    "centroidLat": 28.635885,
    "centroidLon": 77.242287,
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
    "caption": "Lok Nayak Jaya Prakash Narayan Memorial Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "469220927",
    "name": "Club 26 Park",
    "category": "Park",
    "centroidLat": 28.578788,
    "centroidLon": 77.334113,
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
    "caption": "Club 26 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "469326987",
    "name": "Hauz Khas Apartments park",
    "category": "Park",
    "centroidLat": 28.553975,
    "centroidLon": 77.206998,
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
    "caption": "Hauz Khas Apartments park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "469327594",
    "name": "Hauz Khas Market park",
    "category": "Park",
    "centroidLat": 28.551524,
    "centroidLon": 77.207646,
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
    "caption": "Hauz Khas Market park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "469510328",
    "name": "Fulwari Park",
    "category": "Park",
    "centroidLat": 28.705444,
    "centroidLon": 77.170712,
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
    "caption": "Fulwari Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "469749399",
    "name": "Sector 11 Park",
    "category": "Park",
    "centroidLat": 28.592801,
    "centroidLon": 77.050073,
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
    "caption": "Sector 11 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "469754269",
    "name": "Park And Open Gym",
    "category": "Park",
    "centroidLat": 28.592793,
    "centroidLon": 77.047954,
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
    "caption": "Park And Open Gym — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "470210367",
    "name": "Nanak Park",
    "category": "Park",
    "centroidLat": 28.706679,
    "centroidLon": 77.171016,
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
    "caption": "Nanak Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "470210368",
    "name": "Chatri Wala Park",
    "category": "Park",
    "centroidLat": 28.706667,
    "centroidLon": 77.171755,
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
    "caption": "Chatri Wala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "470211702",
    "name": "Jhule Wala Park",
    "category": "Park",
    "centroidLat": 28.70672,
    "centroidLon": 77.172509,
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
    "caption": "Jhule Wala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "470211705",
    "name": "Train Park",
    "category": "Park",
    "centroidLat": 28.707193,
    "centroidLon": 77.1729,
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
    "caption": "Train Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "470225063",
    "name": "Shamshi park",
    "category": "Park",
    "centroidLat": 28.513932,
    "centroidLon": 77.177956,
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
    "caption": "Shamshi park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "470226662",
    "name": "Picnic hut Ground",
    "category": "Park",
    "centroidLat": 28.511875,
    "centroidLon": 77.181804,
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
    "caption": "Picnic hut Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471501657",
    "name": "Malibu Town Tower 3-4 Park",
    "category": "Park",
    "centroidLat": 28.423084,
    "centroidLon": 77.039931,
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
    "caption": "Malibu Town Tower 3-4 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471501661",
    "name": "Imperia Towers Park",
    "category": "Park",
    "centroidLat": 28.422999,
    "centroidLon": 77.041489,
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
    "caption": "Imperia Towers Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471502959",
    "name": "Malibu Town Parks",
    "category": "Park",
    "centroidLat": 28.420966,
    "centroidLon": 77.042565,
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
    "caption": "Malibu Town Parks — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471504572",
    "name": "GGSIPU Grounds",
    "category": "Park",
    "centroidLat": 28.594067,
    "centroidLon": 77.017999,
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
    "caption": "GGSIPU Grounds — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471698541",
    "name": "Banjar Park",
    "category": "Park",
    "centroidLat": 28.63059,
    "centroidLon": 77.287803,
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
    "caption": "Banjar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471698542",
    "name": "Madhuban Park 2",
    "category": "Park",
    "centroidLat": 28.632342,
    "centroidLon": 77.288552,
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
    "caption": "Madhuban Park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471698544",
    "name": "Jhoole wala park",
    "category": "Park",
    "centroidLat": 28.631181,
    "centroidLon": 77.288154,
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
    "caption": "Jhoole wala park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471698545",
    "name": "C-Block Park, Preet Vihar",
    "category": "Park",
    "centroidLat": 28.636079,
    "centroidLon": 77.291192,
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
    "caption": "C-Block Park, Preet Vihar — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471702108",
    "name": "Sanatam Dharam Mandir park",
    "category": "Park",
    "centroidLat": 28.63302,
    "centroidLon": 77.286476,
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
    "caption": "Sanatam Dharam Mandir park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471779333",
    "name": "Madhuban Park 3",
    "category": "Park",
    "centroidLat": 28.631629,
    "centroidLon": 77.289571,
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
    "caption": "Madhuban Park 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471781815",
    "name": "Mahavir Swami Park",
    "category": "Park",
    "centroidLat": 28.640071,
    "centroidLon": 77.296885,
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
    "caption": "Mahavir Swami Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471782134",
    "name": "Mother Teresa School Park",
    "category": "Park",
    "centroidLat": 28.63722,
    "centroidLon": 77.291401,
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
    "caption": "Mother Teresa School Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "471782757",
    "name": "Nirman Vihar Park",
    "category": "Park",
    "centroidLat": 28.634609,
    "centroidLon": 77.287478,
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
    "caption": "Nirman Vihar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "472154890",
    "name": "Sukun Park",
    "category": "Park",
    "centroidLat": 28.569833,
    "centroidLon": 77.230845,
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
    "caption": "Sukun Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "473613235",
    "name": "green valley park",
    "category": "Park",
    "centroidLat": 28.636467,
    "centroidLon": 77.342219,
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
    "caption": "green valley park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "473613240",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.629797,
    "centroidLon": 77.311253,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "473613272",
    "name": "Shivaji Park",
    "category": "Park",
    "centroidLat": 28.636742,
    "centroidLon": 77.349906,
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
    "caption": "Shivaji Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "473647188",
    "name": "Ratan Wala Park",
    "category": "Park",
    "centroidLat": 28.699372,
    "centroidLon": 77.193809,
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
    "caption": "Ratan Wala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "473648307",
    "name": "3rd of February Park",
    "category": "Park",
    "centroidLat": 28.685352,
    "centroidLon": 77.186884,
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
    "caption": "3rd of February Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479651141",
    "name": "Preet Vihar A block Park 1",
    "category": "Park",
    "centroidLat": 28.632274,
    "centroidLon": 77.290392,
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
    "caption": "Preet Vihar A block Park 1 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479651142",
    "name": "Preet Vihar Park 2",
    "category": "Park",
    "centroidLat": 28.633204,
    "centroidLon": 77.290456,
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
    "caption": "Preet Vihar Park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479651143",
    "name": "Preet Vihar A block Park 3",
    "category": "Park",
    "centroidLat": 28.633017,
    "centroidLon": 77.291392,
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
    "caption": "Preet Vihar A block Park 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479651144",
    "name": "Preet Vihar B block Park",
    "category": "Park",
    "centroidLat": 28.635613,
    "centroidLon": 77.293103,
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
    "caption": "Preet Vihar B block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479651147",
    "name": "Park in D Block preet vihar",
    "category": "Park",
    "centroidLat": 28.637187,
    "centroidLon": 77.295125,
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
    "caption": "Park in D Block preet vihar — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479651148",
    "name": "Park 2 D block",
    "category": "Park",
    "centroidLat": 28.63807,
    "centroidLon": 77.295858,
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
    "caption": "Park 2 D block — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479651149",
    "name": "Park 3 D block",
    "category": "Park",
    "centroidLat": 28.63751,
    "centroidLon": 77.295526,
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
    "caption": "Park 3 D block — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479651154",
    "name": "Swasthya Vihar Park",
    "category": "Park",
    "centroidLat": 28.639612,
    "centroidLon": 77.290363,
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
    "caption": "Swasthya Vihar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479651155",
    "name": "Swasth Vihar Park 2",
    "category": "Park",
    "centroidLat": 28.641563,
    "centroidLon": 77.288732,
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
    "caption": "Swasth Vihar Park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "479658972",
    "name": "Aastha Kunj",
    "category": "Park",
    "centroidLat": 28.554737,
    "centroidLon": 77.255708,
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
    "caption": "Aastha Kunj — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "480075079",
    "name": "Naveen Shahdara Park",
    "category": "Park",
    "centroidLat": 28.681256,
    "centroidLon": 77.278459,
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
    "caption": "Naveen Shahdara Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "480076948",
    "name": "Jheel Park",
    "category": "Park",
    "centroidLat": 28.67511,
    "centroidLon": 77.277722,
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
    "caption": "Jheel Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "482822215",
    "name": "RK Convent Park",
    "category": "Park",
    "centroidLat": 28.491258,
    "centroidLon": 77.094787,
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
    "caption": "RK Convent Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "485053607",
    "name": "Palika Park",
    "category": "Park",
    "centroidLat": 28.630705,
    "centroidLon": 77.218839,
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
    "caption": "Palika Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "485540372",
    "name": "Lake Park",
    "category": "Park",
    "centroidLat": 28.579893,
    "centroidLon": 77.207648,
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
    "caption": "Lake Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "486702889",
    "name": "Commonwealth Games Park",
    "category": "Park",
    "centroidLat": 28.580276,
    "centroidLon": 77.190763,
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
    "caption": "Commonwealth Games Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "486838852",
    "name": "C-Block Park",
    "category": "Park",
    "centroidLat": 28.57009,
    "centroidLon": 77.340776,
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
    "caption": "C-Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "486838853",
    "name": "RWA Park",
    "category": "Park",
    "centroidLat": 28.573698,
    "centroidLon": 77.340452,
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
    "caption": "RWA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "487618222",
    "name": "Green Park",
    "category": "Park",
    "centroidLat": 28.72738,
    "centroidLon": 77.336834,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "plantation",
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
    "caption": "Green Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "487618223",
    "name": "Entrance Park",
    "category": "Park",
    "centroidLat": 28.726467,
    "centroidLon": 77.337141,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "greenfield",
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
    "caption": "Entrance Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "487653609",
    "name": "Side Park",
    "category": "Park",
    "centroidLat": 28.726216,
    "centroidLon": 77.337867,
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
    "caption": "Side Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "487678059",
    "name": "Arya Model Garden",
    "category": "Garden",
    "centroidLat": 28.712553,
    "centroidLon": 77.220069,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "plantation",
      "leisure": "garden",
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
    "caption": "Arya Model Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "487678060",
    "name": "A Block Park",
    "category": "Park",
    "centroidLat": 28.71208,
    "centroidLon": 77.220687,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "grass",
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
    "caption": "A Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "487680014",
    "name": "B Block Park",
    "category": "Park",
    "centroidLat": 28.711254,
    "centroidLon": 77.21987,
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
    "caption": "B Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "487680015",
    "name": "Small Park, B Block",
    "category": "Park",
    "centroidLat": 28.710752,
    "centroidLon": 77.220559,
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
    "caption": "Small Park, B Block — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "487680016",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.710879,
    "centroidLon": 77.221366,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "490407162",
    "name": "Herbal Garden",
    "category": "Park",
    "centroidLat": 28.508974,
    "centroidLon": 77.088791,
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
    "caption": "Herbal Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "492728960",
    "name": "Huda Park",
    "category": "Park",
    "centroidLat": 28.428824,
    "centroidLon": 77.095719,
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
    "caption": "Huda Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "492742442",
    "name": "Dussehra Ground",
    "category": "Park",
    "centroidLat": 28.465346,
    "centroidLon": 77.014942,
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
    "caption": "Dussehra Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "492742443",
    "name": "Jitender Bahl Municipal Park",
    "category": "Park",
    "centroidLat": 28.465627,
    "centroidLon": 77.017143,
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
    "caption": "Jitender Bahl Municipal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "494442282",
    "name": "Goldcroft Society Park",
    "category": "Park",
    "centroidLat": 28.594435,
    "centroidLon": 77.049364,
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
    "caption": "Goldcroft Society Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "496493970",
    "name": "HCL open park",
    "category": "Park",
    "centroidLat": 28.536739,
    "centroidLon": 77.344119,
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
    "caption": "HCL open park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "500403267",
    "name": "Bank Enclave Playground",
    "category": "Park",
    "centroidLat": 28.641865,
    "centroidLon": 77.271651,
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
    "caption": "Bank Enclave Playground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "500403674",
    "name": "Bank Enclave Park",
    "category": "Park",
    "centroidLat": 28.640638,
    "centroidLon": 77.272557,
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
    "caption": "Bank Enclave Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "503980550",
    "name": "Ramlila Park",
    "category": "Park",
    "centroidLat": 28.617603,
    "centroidLon": 77.285921,
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
    "caption": "Ramlila Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "503980552",
    "name": "J-Park",
    "category": "Park",
    "centroidLat": 28.618449,
    "centroidLon": 77.281856,
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
    "caption": "J-Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "504043105",
    "name": "Sanjay Lake Park",
    "category": "Park",
    "centroidLat": 28.616834,
    "centroidLon": 77.299589,
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
    "caption": "Sanjay Lake Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "507155032",
    "name": "Kailash Colony Park",
    "category": "Park",
    "centroidLat": 28.55337,
    "centroidLon": 77.241626,
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
    "caption": "Kailash Colony Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "508323477",
    "name": "Tau Devi Lal Park",
    "category": "Park",
    "centroidLat": 28.699072,
    "centroidLon": 76.915306,
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
    "caption": "Tau Devi Lal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "508942098",
    "name": "Radient School Play Ground",
    "category": "Park",
    "centroidLat": 28.73672,
    "centroidLon": 76.889703,
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
    "caption": "Radient School Play Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "511713122",
    "name": "central park",
    "category": "Park",
    "centroidLat": 28.587546,
    "centroidLon": 77.304572,
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
    "caption": "central park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "528389978",
    "name": "gaur green avenue park",
    "category": "Park",
    "centroidLat": 28.63458,
    "centroidLon": 77.341916,
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
    "caption": "gaur green avenue park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "528700911",
    "name": "Yamuna Biodiversity Park",
    "category": "Nature Reserve",
    "centroidLat": 28.739474,
    "centroidLon": 77.214118,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "nature_reserve"
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
    "caption": "Yamuna Biodiversity Park — nature reserve in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "532890557",
    "name": "Enviroment Park",
    "category": "Park",
    "centroidLat": 28.576343,
    "centroidLon": 77.092145,
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
    "caption": "Enviroment Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "532898622",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 28.575043,
    "centroidLon": 77.096467,
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
    "caption": "Children's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "533569844",
    "name": "Ajay Ahuja Park",
    "category": "Park",
    "centroidLat": 28.585705,
    "centroidLon": 77.230859,
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
    "caption": "Ajay Ahuja Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "533888361",
    "name": "GDA Park",
    "category": "Park",
    "centroidLat": 28.633077,
    "centroidLon": 77.343485,
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
    "caption": "GDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "537705564",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.636221,
    "centroidLon": 77.301061,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "537705786",
    "name": "Railway Park",
    "category": "Park",
    "centroidLat": 28.638126,
    "centroidLon": 77.299981,
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
    "caption": "Railway Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "542448515",
    "name": "R-block park",
    "category": "Park",
    "centroidLat": 28.546941,
    "centroidLon": 77.242307,
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
    "caption": "R-block park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "544127170",
    "name": "Radha Krishna Park",
    "category": "Park",
    "centroidLat": 28.455616,
    "centroidLon": 77.048753,
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
    "caption": "Radha Krishna Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "544368137",
    "name": "Master Block Park",
    "category": "Park",
    "centroidLat": 28.632046,
    "centroidLon": 77.285106,
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
    "caption": "Master Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "544454194",
    "name": "Family Park",
    "category": "Park",
    "centroidLat": 28.561478,
    "centroidLon": 77.241451,
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
    "caption": "Family Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "544708860",
    "name": "Rock Garden",
    "category": "Park",
    "centroidLat": 28.649231,
    "centroidLon": 77.169242,
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
    "caption": "Rock Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "545417424",
    "name": "RPS Sheikh Sarai Park",
    "category": "Park",
    "centroidLat": 28.537712,
    "centroidLon": 77.220341,
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
    "caption": "RPS Sheikh Sarai Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "545417429",
    "name": "SFS Category 1 Flats Park",
    "category": "Park",
    "centroidLat": 28.538502,
    "centroidLon": 77.217622,
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
    "caption": "SFS Category 1 Flats Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "546276393",
    "name": "Central Park Playground",
    "category": "Park",
    "centroidLat": 28.587578,
    "centroidLon": 77.30426,
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
    "caption": "Central Park Playground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "546519112",
    "name": "Royal Presidency Park",
    "category": "Park",
    "centroidLat": 28.442041,
    "centroidLon": 77.063822,
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
    "caption": "Royal Presidency Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "546519114",
    "name": "Sports Complex, Sector 45",
    "category": "Park",
    "centroidLat": 28.441305,
    "centroidLon": 77.065642,
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
    "caption": "Sports Complex, Sector 45 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "546520217",
    "name": "Park behind St. Angel's school",
    "category": "Park",
    "centroidLat": 28.441173,
    "centroidLon": 77.069431,
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
    "caption": "Park behind St. Angel's school — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "547679447",
    "name": "C-6 Vasant Kunj Park",
    "category": "Park",
    "centroidLat": 28.537048,
    "centroidLon": 77.14672,
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
    "caption": "C-6 Vasant Kunj Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "547679448",
    "name": "Central Park C-6",
    "category": "Park",
    "centroidLat": 28.536742,
    "centroidLon": 77.145407,
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
    "caption": "Central Park C-6 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "547679449",
    "name": "Back Park C-6",
    "category": "Park",
    "centroidLat": 28.536231,
    "centroidLon": 77.146288,
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
    "caption": "Back Park C-6 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "553845693",
    "name": "Talkatora Gardens",
    "category": "Park",
    "centroidLat": 28.623894,
    "centroidLon": 77.194274,
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
    "caption": "Talkatora Gardens — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "555438038",
    "name": "Rock Garden",
    "category": "Park",
    "centroidLat": 28.569572,
    "centroidLon": 77.167361,
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
    "caption": "Rock Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "556039267",
    "name": "Rohini East Community Park",
    "category": "Park",
    "centroidLat": 28.706755,
    "centroidLon": 77.125422,
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
    "caption": "Rohini East Community Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "557700825",
    "name": "Sector 52 Park",
    "category": "Park",
    "centroidLat": 28.435584,
    "centroidLon": 77.088811,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Sector 52 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "558832166",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.645955,
    "centroidLon": 77.195532,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "559719729",
    "name": "Rose Garden",
    "category": "Nature Reserve",
    "centroidLat": 28.550449,
    "centroidLon": 77.194337,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "nature_reserve"
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
    "caption": "Rose Garden — nature reserve in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "564338784",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.589342,
    "centroidLon": 77.34176,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "570745079",
    "name": "Veer Savarkar Park",
    "category": "Park",
    "centroidLat": 28.584122,
    "centroidLon": 77.223277,
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
    "caption": "Veer Savarkar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "577258312",
    "name": "D Block Park",
    "category": "Park",
    "centroidLat": 28.670469,
    "centroidLon": 77.336805,
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
    "caption": "D Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "581309919",
    "name": "Karanvir Towers Park",
    "category": "Park",
    "centroidLat": 28.435252,
    "centroidLon": 77.08955,
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
    "caption": "Karanvir Towers Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "581313140",
    "name": "Golden Crest park and green area",
    "category": "Park",
    "centroidLat": 28.435716,
    "centroidLon": 77.089468,
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
    "caption": "Golden Crest park and green area — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "581313412",
    "name": "Butterfly Park Gurgaon",
    "category": "Park",
    "centroidLat": 28.436452,
    "centroidLon": 77.091994,
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
    "caption": "Butterfly Park Gurgaon — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "583556646",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.521318,
    "centroidLon": 77.203759,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "584472903",
    "name": "Mata Shanti Sevani Park",
    "category": "Park",
    "centroidLat": 28.536623,
    "centroidLon": 77.211658,
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
    "caption": "Mata Shanti Sevani Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "585585500",
    "name": "Mayurdhwaj Centre Park",
    "category": "Park",
    "centroidLat": 28.632509,
    "centroidLon": 77.302601,
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
    "caption": "Mayurdhwaj Centre Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "585585501",
    "name": "Fountain Park",
    "category": "Park",
    "centroidLat": 28.631984,
    "centroidLon": 77.302829,
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
    "caption": "Fountain Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "585585502",
    "name": "Mandir Park",
    "category": "Park",
    "centroidLat": 28.632328,
    "centroidLon": 77.303456,
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
    "caption": "Mandir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "585589000",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.633155,
    "centroidLon": 77.301945,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "589014180",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.494448,
    "centroidLon": 77.098501,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "Pink Town House",
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "592315617",
    "name": "Palm Drive Gardens",
    "category": "Park",
    "centroidLat": 28.401639,
    "centroidLon": 77.052585,
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
    "caption": "Palm Drive Gardens — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "603612986",
    "name": "JANKI DEVI PARK",
    "category": "Park",
    "centroidLat": 28.765469,
    "centroidLon": 77.265231,
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
    "caption": "JANKI DEVI PARK — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "606467312",
    "name": "D10 PARK",
    "category": "Park",
    "centroidLat": 28.70928,
    "centroidLon": 77.121512,
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
    "caption": "D10 PARK — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "607223067",
    "name": "Buddha Circle",
    "category": "Garden",
    "centroidLat": 28.415772,
    "centroidLon": 77.060314,
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
    "caption": "Buddha Circle — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "610486624",
    "name": "Rajendra Park",
    "category": "Park",
    "centroidLat": 28.640731,
    "centroidLon": 77.177227,
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
    "caption": "Rajendra Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "615614840",
    "name": "Secctor 23 Maarket Park",
    "category": "Park",
    "centroidLat": 28.510838,
    "centroidLon": 77.050714,
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
    "caption": "Secctor 23 Maarket Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "615615431",
    "name": "Community Park S2302",
    "category": "Park",
    "centroidLat": 28.512207,
    "centroidLon": 77.056577,
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
    "caption": "Community Park S2302 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "619847480",
    "name": "Badminton park",
    "category": "Park",
    "centroidLat": 28.561638,
    "centroidLon": 77.189436,
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
    "caption": "Badminton park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "619849573",
    "name": "Ram park",
    "category": "Park",
    "centroidLat": 28.561764,
    "centroidLon": 77.190364,
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
    "caption": "Ram park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "623402192",
    "name": "RK Khanna Tennis Park",
    "category": "Park",
    "centroidLat": 28.558449,
    "centroidLon": 77.187895,
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
    "caption": "RK Khanna Tennis Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "625513669",
    "name": "Common Park",
    "category": "Park",
    "centroidLat": 28.442621,
    "centroidLon": 77.065423,
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
    "caption": "Common Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "625693509",
    "name": "Shri Guru Tegh Bahadur Park",
    "category": "Garden",
    "centroidLat": 28.502041,
    "centroidLon": 77.18321,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Shri Guru Tegh Bahadur Park — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "626619157",
    "name": "Azad Park",
    "category": "Park",
    "centroidLat": 28.700499,
    "centroidLon": 77.206177,
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
    "caption": "Azad Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "628961520",
    "name": "Vice Chancellor's Lawn",
    "category": "Park",
    "centroidLat": 28.689634,
    "centroidLon": 77.212266,
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
    "caption": "Vice Chancellor's Lawn — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "629413037",
    "name": "Nile's Central Park",
    "category": "Park",
    "centroidLat": 28.410182,
    "centroidLon": 77.050296,
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
    "caption": "Nile's Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "631913270",
    "name": "Satpula Lake Park DSA",
    "category": "Park",
    "centroidLat": 28.533483,
    "centroidLon": 77.222533,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Division Southern Area"
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
    "caption": "Satpula Lake Park DSA — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "632796567",
    "name": "Central Park Peera Garhi",
    "category": "Park",
    "centroidLat": 28.676591,
    "centroidLon": 77.089613,
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
    "caption": "Central Park Peera Garhi — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "632857886",
    "name": "Qila Rai Pithora",
    "category": "Park",
    "centroidLat": 28.519434,
    "centroidLon": 77.194724,
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
    "caption": "Qila Rai Pithora — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "633000292",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 28.523238,
    "centroidLon": 77.197814,
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
    "caption": "Children's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "633000296",
    "name": "Rai Pithora Cultural Complex",
    "category": "Park",
    "centroidLat": 28.527666,
    "centroidLon": 77.202498,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Ministry of Tourism;Ministry of Culture"
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
    "caption": "Rai Pithora Cultural Complex — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "633941333",
    "name": "Jagriti Park",
    "category": "Park",
    "centroidLat": 28.626865,
    "centroidLon": 77.306808,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Jagriti Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "634162024",
    "name": "Gulistan-e-Ghalib",
    "category": "Garden",
    "centroidLat": 28.561427,
    "centroidLon": 77.28092,
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
    "caption": "Gulistan-e-Ghalib — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "637962999",
    "name": "azad park",
    "category": "Park",
    "centroidLat": 28.667672,
    "centroidLon": 77.192881,
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
    "caption": "azad park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "637963022",
    "name": "Mahavir Park",
    "category": "Park",
    "centroidLat": 28.668897,
    "centroidLon": 77.185212,
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
    "caption": "Mahavir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "637963025",
    "name": "green space",
    "category": "Park",
    "centroidLat": 28.666656,
    "centroidLon": 77.191913,
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
    "caption": "green space — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "637964008",
    "name": "central park",
    "category": "Park",
    "centroidLat": 28.671266,
    "centroidLon": 77.18985,
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
    "caption": "central park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "637964009",
    "name": "shri ram park",
    "category": "Park",
    "centroidLat": 28.673292,
    "centroidLon": 77.191196,
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
    "caption": "shri ram park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "637964010",
    "name": "shri krishna park",
    "category": "Park",
    "centroidLat": 28.672566,
    "centroidLon": 77.193044,
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
    "caption": "shri krishna park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "644875852",
    "name": "Community Park",
    "category": "Park",
    "centroidLat": 28.626411,
    "centroidLon": 77.061106,
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
    "caption": "Community Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "645626916",
    "name": "Jhulewala Park",
    "category": "Park",
    "centroidLat": 28.590115,
    "centroidLon": 77.248943,
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
    "caption": "Jhulewala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "646941864",
    "name": "D10 Park",
    "category": "Park",
    "centroidLat": 28.709664,
    "centroidLon": 77.121854,
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
    "caption": "D10 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "651388658",
    "name": "White Wood Central Park",
    "category": "Park",
    "centroidLat": 28.426467,
    "centroidLon": 77.049407,
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
    "caption": "White Wood Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "651655601",
    "name": "District Park Nanakpura",
    "category": "Park",
    "centroidLat": 28.583832,
    "centroidLon": 77.170804,
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
    "caption": "District Park Nanakpura — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "651977789",
    "name": "Lala Lajpat Rai Memorial Park",
    "category": "Park",
    "centroidLat": 28.56992,
    "centroidLon": 77.248471,
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
    "caption": "Lala Lajpat Rai Memorial Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "651977790",
    "name": "Shri Shrinivas Gupta Park",
    "category": "Park",
    "centroidLat": 28.56906,
    "centroidLon": 77.247461,
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
    "caption": "Shri Shrinivas Gupta Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "653702731",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.629977,
    "centroidLon": 77.287542,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "653705098",
    "name": "Park behind V3S Mall",
    "category": "Park",
    "centroidLat": 28.638287,
    "centroidLon": 77.286293,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Delhi"
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
    "caption": "Park behind V3S Mall — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594773",
    "name": "panchvati park",
    "category": "Park",
    "centroidLat": 28.689069,
    "centroidLon": 77.270551,
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
    "caption": "panchvati park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594774",
    "name": "green field",
    "category": "Park",
    "centroidLat": 28.689737,
    "centroidLon": 77.278205,
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
    "caption": "green field — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594775",
    "name": "arjun park",
    "category": "Park",
    "centroidLat": 28.691208,
    "centroidLon": 77.272782,
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
    "caption": "arjun park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594776",
    "name": "radha krishna park",
    "category": "Park",
    "centroidLat": 28.692574,
    "centroidLon": 77.271859,
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
    "caption": "radha krishna park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594777",
    "name": "ram park",
    "category": "Park",
    "centroidLat": 28.69037,
    "centroidLon": 77.270363,
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
    "caption": "ram park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594778",
    "name": "chowki wala park",
    "category": "Park",
    "centroidLat": 28.697465,
    "centroidLon": 77.273012,
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
    "caption": "chowki wala park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594779",
    "name": "shaheed bhagat singh park",
    "category": "Park",
    "centroidLat": 28.698749,
    "centroidLon": 77.273146,
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
    "caption": "shaheed bhagat singh park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594780",
    "name": "dda park",
    "category": "Park",
    "centroidLat": 28.697833,
    "centroidLon": 77.268945,
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
    "caption": "dda park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594782",
    "name": "shyam park",
    "category": "Park",
    "centroidLat": 28.698815,
    "centroidLon": 77.268466,
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
    "caption": "shyam park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594783",
    "name": "jungle jalebi park",
    "category": "Park",
    "centroidLat": 28.697546,
    "centroidLon": 77.276062,
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
    "caption": "jungle jalebi park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594784",
    "name": "hanuman vatika",
    "category": "Park",
    "centroidLat": 28.698247,
    "centroidLon": 77.278919,
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
    "caption": "hanuman vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594785",
    "name": "mahila park",
    "category": "Park",
    "centroidLat": 28.69941,
    "centroidLon": 77.278545,
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
    "caption": "mahila park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655594786",
    "name": "maharana pratap park",
    "category": "Park",
    "centroidLat": 28.70152,
    "centroidLon": 77.277852,
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
    "caption": "maharana pratap park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602858",
    "name": "agarsen park",
    "category": "Park",
    "centroidLat": 28.701002,
    "centroidLon": 77.268939,
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
    "caption": "agarsen park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602859",
    "name": "B-4 park",
    "category": "Park",
    "centroidLat": 28.699998,
    "centroidLon": 77.26656,
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
    "caption": "B-4 park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602860",
    "name": "quarter park",
    "category": "Park",
    "centroidLat": 28.700549,
    "centroidLon": 77.264278,
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
    "caption": "quarter park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602861",
    "name": "DDA park",
    "category": "Park",
    "centroidLat": 28.699484,
    "centroidLon": 77.265221,
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
    "caption": "DDA park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602863",
    "name": "durga park",
    "category": "Park",
    "centroidLat": 28.700902,
    "centroidLon": 77.26546,
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
    "caption": "durga park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602865",
    "name": "public park",
    "category": "Park",
    "centroidLat": 28.699115,
    "centroidLon": 77.277514,
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
    "caption": "public park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602867",
    "name": "public park",
    "category": "Park",
    "centroidLat": 28.699931,
    "centroidLon": 77.27789,
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
    "caption": "public park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602870",
    "name": "park",
    "category": "Park",
    "centroidLat": 28.698402,
    "centroidLon": 77.277728,
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
    "caption": "park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602873",
    "name": "DDA park",
    "category": "Park",
    "centroidLat": 28.699257,
    "centroidLon": 77.290941,
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
    "caption": "DDA park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655602875",
    "name": "DDA park",
    "category": "Park",
    "centroidLat": 28.700772,
    "centroidLon": 77.284442,
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
    "caption": "DDA park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655605880",
    "name": "dda pak",
    "category": "Park",
    "centroidLat": 28.682438,
    "centroidLon": 77.273907,
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
    "caption": "dda pak — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655605881",
    "name": "ram park",
    "category": "Park",
    "centroidLat": 28.681779,
    "centroidLon": 77.279184,
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
    "caption": "ram park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655605882",
    "name": "Mahaveer Park",
    "category": "Park",
    "centroidLat": 28.682658,
    "centroidLon": 77.279249,
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
    "caption": "Mahaveer Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655605883",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.683944,
    "centroidLon": 77.278596,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655856326",
    "name": "public garden",
    "category": "Park",
    "centroidLat": 28.689688,
    "centroidLon": 77.271379,
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
    "caption": "public garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655856327",
    "name": "DDA park",
    "category": "Park",
    "centroidLat": 28.692509,
    "centroidLon": 77.267611,
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
    "caption": "DDA park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655856331",
    "name": "public park",
    "category": "Park",
    "centroidLat": 28.699618,
    "centroidLon": 77.273716,
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
    "caption": "public park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655856337",
    "name": "green belt",
    "category": "Park",
    "centroidLat": 28.702099,
    "centroidLon": 77.277908,
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
    "caption": "green belt — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655856338",
    "name": "green belt",
    "category": "Park",
    "centroidLat": 28.702779,
    "centroidLon": 77.269445,
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
    "caption": "green belt — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "655859166",
    "name": "sahab singh park",
    "category": "Park",
    "centroidLat": 28.697047,
    "centroidLon": 77.274736,
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
    "caption": "sahab singh park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "656792169",
    "name": "Nadiya Park",
    "category": "Park",
    "centroidLat": 28.68069,
    "centroidLon": 77.260695,
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
    "caption": "Nadiya Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "656792171",
    "name": "DDA park",
    "category": "Park",
    "centroidLat": 28.676402,
    "centroidLon": 77.260916,
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
    "caption": "DDA park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "656794237",
    "name": "Parsuram Park",
    "category": "Park",
    "centroidLat": 28.678257,
    "centroidLon": 77.282017,
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
    "caption": "Parsuram Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "660438496",
    "name": "Chirag Delhi Park",
    "category": "Park",
    "centroidLat": 28.538334,
    "centroidLon": 77.231172,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Chirag Delhi Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "660683718",
    "name": "tikona park",
    "category": "Park",
    "centroidLat": 28.699059,
    "centroidLon": 77.267275,
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
    "caption": "tikona park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "660683721",
    "name": "rajesh pilot park",
    "category": "Park",
    "centroidLat": 28.698761,
    "centroidLon": 77.282719,
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
    "caption": "rajesh pilot park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "660683730",
    "name": "Chitragupt Park",
    "category": "Park",
    "centroidLat": 28.700632,
    "centroidLon": 77.283299,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation"
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
    "caption": "Chitragupt Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "661138687",
    "name": "BRICS Friendship Rose Garden",
    "category": "Park",
    "centroidLat": 28.587308,
    "centroidLon": 77.186405,
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
    "caption": "BRICS Friendship Rose Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "662185754",
    "name": "Senior Citizen's Park",
    "category": "Park",
    "centroidLat": 28.601408,
    "centroidLon": 77.085164,
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
    "caption": "Senior Citizen's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "662185755",
    "name": "Buddha Jayanti Park",
    "category": "Park",
    "centroidLat": 28.601038,
    "centroidLon": 77.086585,
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
    "caption": "Buddha Jayanti Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "662185760",
    "name": "Shahid Bhagat Singh Park",
    "category": "Park",
    "centroidLat": 28.595599,
    "centroidLon": 77.0905,
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
    "caption": "Shahid Bhagat Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "662185761",
    "name": "Shahid Bhagat Singh Park",
    "category": "Park",
    "centroidLat": 28.594651,
    "centroidLon": 77.089096,
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
    "caption": "Shahid Bhagat Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "662311116",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.626407,
    "centroidLon": 77.304078,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "665150686",
    "name": "Ambedkar Park",
    "category": "Park",
    "centroidLat": 28.641083,
    "centroidLon": 77.175193,
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
    "caption": "Ambedkar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "665150687",
    "name": "Pusa Harit Kranti Park",
    "category": "Park",
    "centroidLat": 28.641223,
    "centroidLon": 77.174311,
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
    "caption": "Pusa Harit Kranti Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "665856874",
    "name": "Children Park",
    "category": "Park",
    "centroidLat": 28.66732,
    "centroidLon": 77.314246,
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
    "caption": "Children Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "665858202",
    "name": "C-Block Main Park",
    "category": "Park",
    "centroidLat": 28.669445,
    "centroidLon": 77.31631,
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
    "caption": "C-Block Main Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "666241562",
    "name": "d-shape park",
    "category": "Park",
    "centroidLat": 28.669304,
    "centroidLon": 77.315113,
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
    "caption": "d-shape park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "666241564",
    "name": "Ashutosh park",
    "category": "Park",
    "centroidLat": 28.6699,
    "centroidLon": 77.317345,
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
    "caption": "Ashutosh park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "666241566",
    "name": "jhilmil deer park",
    "category": "Park",
    "centroidLat": 28.668765,
    "centroidLon": 77.313421,
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
    "caption": "jhilmil deer park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668744462",
    "name": "Major Som Nath Sharma Memorial Park",
    "category": "Park",
    "centroidLat": 28.572259,
    "centroidLon": 77.174346,
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
    "caption": "Major Som Nath Sharma Memorial Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944931",
    "name": "Savarkar Park",
    "category": "Park",
    "centroidLat": 28.670013,
    "centroidLon": 77.316694,
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
    "caption": "Savarkar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944937",
    "name": "vertical park",
    "category": "Park",
    "centroidLat": 28.668523,
    "centroidLon": 77.315729,
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
    "caption": "vertical park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944941",
    "name": "2 trianglepark",
    "category": "Park",
    "centroidLat": 28.667205,
    "centroidLon": 77.319888,
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
    "caption": "2 trianglepark;hanuman vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944943",
    "name": "laxman park",
    "category": "Park",
    "centroidLat": 28.666149,
    "centroidLon": 77.319935,
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
    "caption": "laxman park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944944",
    "name": "shiv vatika",
    "category": "Park",
    "centroidLat": 28.665864,
    "centroidLon": 77.317428,
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
    "caption": "shiv vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944947",
    "name": "bharat park",
    "category": "Park",
    "centroidLat": 28.669541,
    "centroidLon": 77.321212,
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
    "caption": "bharat park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944948",
    "name": "hind park",
    "category": "Park",
    "centroidLat": 28.670917,
    "centroidLon": 77.320125,
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
    "caption": "hind park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944949",
    "name": "shree ram park",
    "category": "Park",
    "centroidLat": 28.670461,
    "centroidLon": 77.321264,
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
    "caption": "shree ram park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944952",
    "name": "sarswati park",
    "category": "Park",
    "centroidLat": 28.66522,
    "centroidLon": 77.319621,
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
    "caption": "sarswati park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "668944953",
    "name": "ashok vatika",
    "category": "Park",
    "centroidLat": 28.672228,
    "centroidLon": 77.317853,
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
    "caption": "ashok vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "669476767",
    "name": "Green Strip Sarvapriya Vihar",
    "category": "Park",
    "centroidLat": 28.54244,
    "centroidLon": 77.20853,
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
    "caption": "Green Strip Sarvapriya Vihar — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "671764567",
    "name": "Train Park",
    "category": "Park",
    "centroidLat": 28.707561,
    "centroidLon": 77.172566,
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
    "caption": "Train Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "672397102",
    "name": "M Block Park",
    "category": "Garden",
    "centroidLat": 28.490436,
    "centroidLon": 77.085491,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "garden",
      "operator": "DLF City"
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
    "caption": "M Block Park — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "674163242",
    "name": "Milkha Singh Park",
    "category": "Park",
    "centroidLat": 28.46493,
    "centroidLon": 77.299892,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greenfields RWA"
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
    "caption": "Milkha Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "675369087",
    "name": "Vijay Mandal Park",
    "category": "Park",
    "centroidLat": 28.53337,
    "centroidLon": 77.205667,
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
    "caption": "Vijay Mandal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "675418564",
    "name": "West Jyoti Colony Park",
    "category": "Park",
    "centroidLat": 28.691469,
    "centroidLon": 77.290157,
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
    "caption": "West Jyoti Colony Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "675421539",
    "name": "Prem Chopra Park",
    "category": "Park",
    "centroidLat": 28.683883,
    "centroidLon": 77.288138,
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
    "caption": "Prem Chopra Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "675422001",
    "name": "Shivaji Park",
    "category": "Park",
    "centroidLat": 28.682307,
    "centroidLon": 77.28644,
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
    "caption": "Shivaji Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "676190190",
    "name": "Palm Trees Park in L Block Lajoat Nagar 3",
    "category": "Park",
    "centroidLat": 28.566161,
    "centroidLon": 77.243384,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Delhi"
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
    "caption": "Palm Trees Park in L Block Lajoat Nagar 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "676725248",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.679218,
    "centroidLon": 77.291822,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "676726112",
    "name": "Ram Park",
    "category": "Park",
    "centroidLat": 28.692299,
    "centroidLon": 77.293162,
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
    "caption": "Ram Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "677803651",
    "name": "Lt Puneet Nath Datt Park",
    "category": "Park",
    "centroidLat": 28.57472,
    "centroidLon": 77.237102,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "RWA Defence Colony"
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
    "caption": "Lt Puneet Nath Datt Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "678333511",
    "name": "Loni Gol Chakar Park",
    "category": "Park",
    "centroidLat": 28.702012,
    "centroidLon": 77.290762,
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
    "caption": "Loni  Gol Chakar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "679238907",
    "name": "Ram Sarovar",
    "category": "Park",
    "centroidLat": 28.799644,
    "centroidLon": 77.136104,
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
    "caption": "Ram Sarovar — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "681333344",
    "name": "Kamla Nehru Park",
    "category": "Park",
    "centroidLat": 28.679393,
    "centroidLon": 77.287395,
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
    "caption": "Kamla Nehru Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "681333345",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.697411,
    "centroidLon": 77.29285,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "682996482",
    "name": "Extension Park",
    "category": "Park",
    "centroidLat": 28.666344,
    "centroidLon": 77.119997,
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
    "caption": "Extension Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "682997226",
    "name": "Mandir Park",
    "category": "Park",
    "centroidLat": 28.665959,
    "centroidLon": 77.121041,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "http://www.mcdonline.gov.in"
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
    "caption": "Mandir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "683766469",
    "name": "Haji Abbas Park",
    "category": "Park",
    "centroidLat": 28.528309,
    "centroidLon": 77.20908,
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
    "caption": "Haji Abbas Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "683976620",
    "name": "shri ram vatika",
    "category": "Park",
    "centroidLat": 28.700229,
    "centroidLon": 77.268528,
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
    "caption": "shri ram vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "683976623",
    "name": "madhav park",
    "category": "Park",
    "centroidLat": 28.699803,
    "centroidLon": 77.268579,
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
    "caption": "madhav park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "684362956",
    "name": "MCD PARK",
    "category": "Park",
    "centroidLat": 28.683553,
    "centroidLon": 77.278579,
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
    "caption": "MCD PARK — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "684362958",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.68087,
    "centroidLon": 77.293484,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "684362963",
    "name": "Sri Ram Park",
    "category": "Park",
    "centroidLat": 28.679793,
    "centroidLon": 77.294727,
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
    "caption": "Sri Ram Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "684362965",
    "name": "Mansarovar Park",
    "category": "Park",
    "centroidLat": 28.677717,
    "centroidLon": 77.298487,
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
    "caption": "Mansarovar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "684737741",
    "name": "Fountain Park",
    "category": "Park",
    "centroidLat": 28.682934,
    "centroidLon": 77.281112,
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
    "caption": "Fountain Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "685406624",
    "name": "Ramlila Maidan",
    "category": "Park",
    "centroidLat": 28.691951,
    "centroidLon": 77.289213,
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
    "caption": "Ramlila Maidan — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "685642586",
    "name": "Publi Park in J Block Lajpat Nagar 3",
    "category": "Park",
    "centroidLat": 28.566055,
    "centroidLon": 77.242297,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Delhi"
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
    "caption": "Publi Park in J Block Lajpat Nagar 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "685855130",
    "name": "Park No 2",
    "category": "Park",
    "centroidLat": 28.645737,
    "centroidLon": 77.166133,
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
    "caption": "Park No 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "685855760",
    "name": "Park No 1",
    "category": "Park",
    "centroidLat": 28.646367,
    "centroidLon": 77.165076,
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
    "caption": "Park No 1 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "685855823",
    "name": "Park No 3",
    "category": "Park",
    "centroidLat": 28.645145,
    "centroidLon": 77.167177,
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
    "caption": "Park No 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "685856755",
    "name": "Park No 4",
    "category": "Park",
    "centroidLat": 28.646688,
    "centroidLon": 77.164511,
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
    "caption": "Park No 4 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "685857771",
    "name": "park No 6",
    "category": "Park",
    "centroidLat": 28.645547,
    "centroidLon": 77.165024,
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
    "caption": "park No 6 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "686008492",
    "name": "Chaudhary Harbansh Singh Park",
    "category": "Park",
    "centroidLat": 28.64894,
    "centroidLon": 77.158296,
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
    "caption": "Chaudhary Harbansh Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "686008493",
    "name": "People Park",
    "category": "Park",
    "centroidLat": 28.649403,
    "centroidLon": 77.159313,
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
    "caption": "People Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "686919750",
    "name": "Mata Shanti Sevani Park",
    "category": "Garden",
    "centroidLat": 28.536661,
    "centroidLon": 77.211697,
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
    "caption": "Mata Shanti Sevani Park — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "687803955",
    "name": "Khajoor Wala Park",
    "category": "Park",
    "centroidLat": 28.686882,
    "centroidLon": 77.304255,
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
    "caption": "Khajoor Wala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "688609118",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.502503,
    "centroidLon": 77.302753,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "689295726",
    "name": "S Block Park",
    "category": "Park",
    "centroidLat": 28.486473,
    "centroidLon": 77.103628,
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
    "caption": "S Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "689315129",
    "name": "Public Park in I Block Lajpat Nagar 3",
    "category": "Park",
    "centroidLat": 28.566954,
    "centroidLon": 77.242118,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MCD"
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
    "caption": "Public Park in I Block Lajpat Nagar 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "690916372",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.640184,
    "centroidLon": 77.274759,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "691049133",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.675652,
    "centroidLon": 77.285065,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "691049148",
    "name": "Chhatri Wala Park",
    "category": "Park",
    "centroidLat": 28.677001,
    "centroidLon": 77.283375,
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
    "caption": "Chhatri Wala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "691050189",
    "name": "EDMC Park",
    "category": "Park",
    "centroidLat": 28.67152,
    "centroidLon": 77.266057,
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
    "caption": "EDMC Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "691457563",
    "name": "Shivpuri Park",
    "category": "Park",
    "centroidLat": 28.650482,
    "centroidLon": 77.277788,
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
    "caption": "Shivpuri Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "691621240",
    "name": "Bhama Shah Park",
    "category": "Park",
    "centroidLat": 28.523529,
    "centroidLon": 77.235937,
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
    "caption": "Bhama Shah Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "691981711",
    "name": "Gagan Vihar Garden",
    "category": "Park",
    "centroidLat": 28.644823,
    "centroidLon": 77.291632,
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
    "caption": "Gagan Vihar Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "692238589",
    "name": "Pushpanjali Tikona Park",
    "category": "Park",
    "centroidLat": 28.654852,
    "centroidLon": 77.308125,
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
    "caption": "Pushpanjali Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "692238591",
    "name": "Shyam Enclave Park",
    "category": "Park",
    "centroidLat": 28.654291,
    "centroidLon": 77.305284,
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
    "caption": "Shyam Enclave Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "692373020",
    "name": "DDA park",
    "category": "Park",
    "centroidLat": 28.696401,
    "centroidLon": 77.292368,
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
    "caption": "DDA park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "692838409",
    "name": "Rose Garden",
    "category": "Park",
    "centroidLat": 28.414852,
    "centroidLon": 77.09206,
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
    "caption": "Rose Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "692838411",
    "name": "Flower Park",
    "category": "Park",
    "centroidLat": 28.414286,
    "centroidLon": 77.092237,
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
    "caption": "Flower Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "693694361",
    "name": "I-Pocket Park no.1",
    "category": "Park",
    "centroidLat": 28.679703,
    "centroidLon": 77.321827,
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
    "caption": "I-Pocket Park no.1 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "693694362",
    "name": "I-Pocket Park No.2",
    "category": "Park",
    "centroidLat": 28.680481,
    "centroidLon": 77.321323,
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
    "caption": "I-Pocket Park No.2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "693909450",
    "name": "Nursery Park",
    "category": "Park",
    "centroidLat": 28.691327,
    "centroidLon": 77.311325,
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
    "caption": "Nursery Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "697101341",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 28.610957,
    "centroidLon": 77.230959,
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
    "caption": "Children's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "698241523",
    "name": "Millenium Ground",
    "category": "Park",
    "centroidLat": 28.510619,
    "centroidLon": 77.305557,
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
    "caption": "Millenium Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "698251999",
    "name": "Raja Ram Tundelkar Ji Park",
    "category": "Park",
    "centroidLat": 28.53748,
    "centroidLon": 77.277909,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Raja Ram Tundelkar Ji Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "699175182",
    "name": "Chandrashekhar Azad Park",
    "category": "Park",
    "centroidLat": 28.681633,
    "centroidLon": 77.291631,
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
    "caption": "Chandrashekhar Azad Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "699365581",
    "name": "Kya Maya Park",
    "category": "Park",
    "centroidLat": 28.50651,
    "centroidLon": 77.269428,
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
    "caption": "Kya Maya Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "699370938",
    "name": "Jamia Hamdard Herbal Garden",
    "category": "Garden",
    "centroidLat": 28.513273,
    "centroidLon": 77.247609,
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
    "caption": "Jamia Hamdard Herbal Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "699377829",
    "name": "Gumbad Park",
    "category": "Park",
    "centroidLat": 28.523346,
    "centroidLon": 77.192054,
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
    "caption": "Gumbad Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "699609065",
    "name": "VIP Park",
    "category": "Park",
    "centroidLat": 28.618309,
    "centroidLon": 77.238259,
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
    "caption": "VIP Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "700260806",
    "name": "Tulip Garden",
    "category": "Garden",
    "centroidLat": 28.588266,
    "centroidLon": 77.186013,
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
    "caption": "Tulip Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "700293873",
    "name": "Mandi House Gol Chakkar Park",
    "category": "Park",
    "centroidLat": 28.625695,
    "centroidLon": 77.231946,
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
    "caption": "Mandi House Gol Chakkar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "700293882",
    "name": "Bengali Market Park",
    "category": "Park",
    "centroidLat": 28.630965,
    "centroidLon": 77.230109,
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
    "caption": "Bengali Market Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "700305761",
    "name": "RWA Central Park",
    "category": "Park",
    "centroidLat": 28.6291,
    "centroidLon": 77.203549,
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
    "caption": "RWA Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "700310538",
    "name": "BK Ganjoo Memorial Park",
    "category": "Park",
    "centroidLat": 28.631358,
    "centroidLon": 77.201652,
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
    "caption": "BK Ganjoo Memorial Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "700787128",
    "name": "Pipal Park",
    "category": "Park",
    "centroidLat": 28.571115,
    "centroidLon": 77.229763,
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
    "caption": "Pipal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "700789010",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.57299,
    "centroidLon": 77.263673,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "701087031",
    "name": "District Park",
    "category": "Park",
    "centroidLat": 28.688218,
    "centroidLon": 77.32215,
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
    "caption": "District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "701087032",
    "name": "ELEPHANT PARK",
    "category": "Park",
    "centroidLat": 28.689141,
    "centroidLon": 77.325489,
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
    "caption": "ELEPHANT PARK — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "702118112",
    "name": "Ashoka Park",
    "category": "Park",
    "centroidLat": 28.471077,
    "centroidLon": 77.308367,
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
    "caption": "Ashoka Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "702118799",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.485036,
    "centroidLon": 77.310188,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "702118800",
    "name": "Shanti Park",
    "category": "Park",
    "centroidLat": 28.48354,
    "centroidLon": 77.308581,
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
    "caption": "Shanti Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "702118801",
    "name": "Shiv Vatika",
    "category": "Park",
    "centroidLat": 28.482688,
    "centroidLon": 77.309051,
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
    "caption": "Shiv Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "704129790",
    "name": "Vishwakarma Park",
    "category": "Park",
    "centroidLat": 28.639306,
    "centroidLon": 77.271106,
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
    "caption": "Vishwakarma Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "704131535",
    "name": "Bhagat Singh Park",
    "category": "Park",
    "centroidLat": 28.646906,
    "centroidLon": 77.275289,
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
    "caption": "Bhagat Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "704826445",
    "name": "Saidulajaib Samudayik Park",
    "category": "Park",
    "centroidLat": 28.514406,
    "centroidLon": 77.199939,
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
    "caption": "Saidulajaib Samudayik Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "705238566",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.647628,
    "centroidLon": 77.304181,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "706122277",
    "name": "Sardar Patel Park",
    "category": "Park",
    "centroidLat": 28.655906,
    "centroidLon": 77.296216,
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
    "caption": "Sardar Patel Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "706422923",
    "name": "B Block Surajmal Vihar Park",
    "category": "Park",
    "centroidLat": 28.661497,
    "centroidLon": 77.306885,
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
    "caption": "B Block Surajmal Vihar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "706422926",
    "name": "Maharaja Surajmal Park",
    "category": "Park",
    "centroidLat": 28.663934,
    "centroidLon": 77.301969,
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
    "caption": "Maharaja Surajmal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "707532310",
    "name": "Peepal Park",
    "category": "Park",
    "centroidLat": 28.565751,
    "centroidLon": 77.222075,
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
    "caption": "Peepal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "707532653",
    "name": "police colony park",
    "category": "Park",
    "centroidLat": 28.563691,
    "centroidLon": 77.223153,
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
    "caption": "police colony park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "707596728",
    "name": "Lala Murlidhar Kawad Park",
    "category": "Park",
    "centroidLat": 28.669651,
    "centroidLon": 77.263576,
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
    "caption": "Lala Murlidhar Kawad Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "707860003",
    "name": "Ankur Park",
    "category": "Park",
    "centroidLat": 28.697465,
    "centroidLon": 77.20577,
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
    "caption": "Ankur Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "712427335",
    "name": "children park",
    "category": "Park",
    "centroidLat": 28.564256,
    "centroidLon": 77.221686,
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
    "caption": "children park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "712427900",
    "name": "R-Block park",
    "category": "Park",
    "centroidLat": 28.563725,
    "centroidLon": 77.22117,
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
    "caption": "R-Block park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "712428150",
    "name": "park near mother dairy",
    "category": "Park",
    "centroidLat": 28.565142,
    "centroidLon": 77.222901,
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
    "caption": "park near mother dairy — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "712428203",
    "name": "trikona park",
    "category": "Park",
    "centroidLat": 28.562868,
    "centroidLon": 77.221093,
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
    "caption": "trikona park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "712524973",
    "name": "Poker Park",
    "category": "Park",
    "centroidLat": 28.606039,
    "centroidLon": 77.295897,
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
    "caption": "Poker Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "714495782",
    "name": "Thyagaraj Park",
    "category": "Park",
    "centroidLat": 28.577823,
    "centroidLon": 77.215253,
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
    "caption": "Thyagaraj Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "714722267",
    "name": "Mahila Park",
    "category": "Park",
    "centroidLat": 28.615792,
    "centroidLon": 77.027959,
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
    "caption": "Mahila Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "720894879",
    "name": "Mata Maharani Park",
    "category": "Park",
    "centroidLat": 28.647818,
    "centroidLon": 77.15878,
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
    "caption": "Mata Maharani Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "722443709",
    "name": "Shri Satpal Harjai Park",
    "category": "Park",
    "centroidLat": 28.569311,
    "centroidLon": 77.240227,
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
    "caption": "Shri Satpal Harjai Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "722443721",
    "name": "South Delhi Municipal Corporation Children Park",
    "category": "Park",
    "centroidLat": 28.568451,
    "centroidLon": 77.244585,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "private",
      "leisure": "park",
      "operator": "Municipal Corporation of Delhi"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=private",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "South Delhi Municipal Corporation Children Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "724090897",
    "name": "Ansal Plaza Park",
    "category": "Park",
    "centroidLat": 28.562141,
    "centroidLon": 77.226217,
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
    "caption": "Ansal Plaza Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "729191976",
    "name": "L Block Ground",
    "category": "Park",
    "centroidLat": 28.595049,
    "centroidLon": 77.079171,
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
    "caption": "L Block Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "729487043",
    "name": "Maa Yogmaya Park",
    "category": "Park",
    "centroidLat": 28.522019,
    "centroidLon": 77.182726,
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
    "caption": "Maa Yogmaya Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "731905016",
    "name": "Munirka Village Park",
    "category": "Park",
    "centroidLat": 28.558578,
    "centroidLon": 77.172174,
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
    "caption": "Munirka Village Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "734289306",
    "name": "Mini Park",
    "category": "Park",
    "centroidLat": 28.751527,
    "centroidLon": 77.113578,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DTU"
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
    "caption": "Mini Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "737851812",
    "name": "police colony park",
    "category": "Park",
    "centroidLat": 28.563367,
    "centroidLon": 77.222903,
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
    "caption": "police colony park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "737853713",
    "name": "Sadiq Nagar Park",
    "category": "Park",
    "centroidLat": 28.55712,
    "centroidLon": 77.227047,
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
    "caption": "Sadiq Nagar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "740037060",
    "name": "Ghoga Forest",
    "category": "Forest",
    "centroidLat": 28.825965,
    "centroidLon": 77.059832,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "forest"
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
    "caption": "Ghoga Forest — forest in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "742628572",
    "name": "samadhan hub park",
    "category": "Park",
    "centroidLat": 28.455242,
    "centroidLon": 77.089228,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MCG"
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
    "caption": "samadhan hub park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "748812233",
    "name": "RWA Park",
    "category": "Park",
    "centroidLat": 28.488986,
    "centroidLon": 77.094649,
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
    "caption": "RWA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "750346056",
    "name": "NTPC Park",
    "category": "Park",
    "centroidLat": 28.508804,
    "centroidLon": 77.332186,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Vriksh Raksha Manch"
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
    "caption": "NTPC Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "750391059",
    "name": "Devi Lal Park",
    "category": "Park",
    "centroidLat": 28.697624,
    "centroidLon": 76.917933,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "HUDA"
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
    "caption": "Devi Lal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "750511401",
    "name": "Peer Baba Park",
    "category": "Park",
    "centroidLat": 28.509608,
    "centroidLon": 77.328321,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Peer Baba Makhan Shah Sthal"
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
    "caption": "Peer Baba Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "750519809",
    "name": "Shaheed Bhagat Singh Park",
    "category": "Park",
    "centroidLat": 28.509931,
    "centroidLon": 77.320244,
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
    "caption": "Shaheed Bhagat Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "750538901",
    "name": "Chhath Ghat",
    "category": "Park",
    "centroidLat": 28.510461,
    "centroidLon": 77.321103,
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
    "caption": "Chhath Ghat — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "750538902",
    "name": "Arpan Vihar Park",
    "category": "Park",
    "centroidLat": 28.506382,
    "centroidLon": 77.332825,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "RWA ARPAN VIHAR"
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
    "caption": "Arpan Vihar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "750880705",
    "name": "Yogmaya Park",
    "category": "Park",
    "centroidLat": 28.498986,
    "centroidLon": 77.282164,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Yogmaya Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "750880707",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.504748,
    "centroidLon": 77.282113,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Devloppment Authority"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "751275343",
    "name": "Doctor Shyama Prasad Mukherjee Park",
    "category": "Park",
    "centroidLat": 28.704267,
    "centroidLon": 77.192032,
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
    "caption": "Doctor Shyama Prasad Mukherjee Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "751688981",
    "name": "Paprawat Gaon Park",
    "category": "Park",
    "centroidLat": 28.580987,
    "centroidLon": 76.983568,
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
    "caption": "Paprawat Gaon Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "752624280",
    "name": "Hanuman Mandir Park",
    "category": "Park",
    "centroidLat": 28.509602,
    "centroidLon": 77.340064,
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
    "caption": "Hanuman Mandir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "752624281",
    "name": "Vishwakarma Park",
    "category": "Park",
    "centroidLat": 28.509706,
    "centroidLon": 77.340217,
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
    "caption": "Vishwakarma Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "752624282",
    "name": "Dargah Gareeb Yaar Park",
    "category": "Park",
    "centroidLat": 28.512244,
    "centroidLon": 77.339461,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Dargah Gareeb Yaar"
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
    "caption": "Dargah Gareeb Yaar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "754018088",
    "name": "LIG Park",
    "category": "Park",
    "centroidLat": 28.49795,
    "centroidLon": 77.290577,
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
    "caption": "LIG Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "754228642",
    "name": "MCD Children park",
    "category": "Park",
    "centroidLat": 28.684097,
    "centroidLon": 77.280697,
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
    "caption": "MCD Children park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "754941764",
    "name": "Warizabad Ecorestoration Park",
    "category": "Park",
    "centroidLat": 28.455329,
    "centroidLon": 77.089208,
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
    "caption": "Warizabad Ecorestoration Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "754941765",
    "name": "Warizabad Ecorestoration Park",
    "category": "Park",
    "centroidLat": 28.454074,
    "centroidLon": 77.089153,
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
    "caption": "Warizabad Ecorestoration Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "756068504",
    "name": "BB east park",
    "category": "Park",
    "centroidLat": 28.719191,
    "centroidLon": 77.161069,
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
    "caption": "BB east park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "757780202",
    "name": "Park in I block Lajpat Nagar 3",
    "category": "Park",
    "centroidLat": 28.566904,
    "centroidLon": 77.241366,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MCD"
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
    "caption": "Park in I block Lajpat Nagar 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "757781801",
    "name": "MCD park",
    "category": "Park",
    "centroidLat": 28.566821,
    "centroidLon": 77.240326,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Delhi"
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
    "caption": "MCD park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "757785915",
    "name": "Trees Park",
    "category": "Park",
    "centroidLat": 28.566912,
    "centroidLon": 77.239031,
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
    "caption": "Trees Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "758361781",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.492162,
    "centroidLon": 77.298444,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "758376519",
    "name": "Babu Lal Chowk",
    "category": "Park",
    "centroidLat": 28.555571,
    "centroidLon": 77.17153,
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
    "caption": "Babu Lal Chowk — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "758379945",
    "name": "Chaupal Chowk",
    "category": "Park",
    "centroidLat": 28.545428,
    "centroidLon": 77.129567,
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
    "caption": "Chaupal Chowk — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "761311234",
    "name": "Keshav Park",
    "category": "Park",
    "centroidLat": 28.576888,
    "centroidLon": 77.19557,
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
    "caption": "Keshav Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "761486222",
    "name": "Shaheed Sukhdev Singh Park",
    "category": "Park",
    "centroidLat": 28.53078,
    "centroidLon": 77.212057,
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
    "caption": "Shaheed Sukhdev Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "761486223",
    "name": "Rajguru Park",
    "category": "Park",
    "centroidLat": 28.530704,
    "centroidLon": 77.211287,
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
    "caption": "Rajguru Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "761674565",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 28.553069,
    "centroidLon": 77.245362,
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
    "caption": "Children's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "761709949",
    "name": "Town Park",
    "category": "Park",
    "centroidLat": 28.440289,
    "centroidLon": 77.316519,
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
    "caption": "Town Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "763033096",
    "name": "AIIMS Quadrangle",
    "category": "Park",
    "centroidLat": 28.566378,
    "centroidLon": 77.213721,
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
    "caption": "AIIMS Quadrangle — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "765443309",
    "name": "Gandhi Park",
    "category": "Park",
    "centroidLat": 28.529386,
    "centroidLon": 77.214156,
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
    "caption": "Gandhi Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772645997",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.55857,
    "centroidLon": 77.253663,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772645998",
    "name": "b block park",
    "category": "Park",
    "centroidLat": 28.560534,
    "centroidLon": 77.255166,
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
    "caption": "b block park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772645999",
    "name": "c block park 2",
    "category": "Park",
    "centroidLat": 28.561162,
    "centroidLon": 77.257677,
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
    "caption": "c block park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772646000",
    "name": "c block park 1",
    "category": "Park",
    "centroidLat": 28.560426,
    "centroidLon": 77.258232,
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
    "caption": "c block park 1 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772646002",
    "name": "chakki wala park",
    "category": "Park",
    "centroidLat": 28.56109,
    "centroidLon": 77.259016,
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
    "caption": "chakki wala park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772646004",
    "name": "ghodan park",
    "category": "Park",
    "centroidLat": 28.558937,
    "centroidLon": 77.258611,
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
    "caption": "ghodan park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772646005",
    "name": "c block park 3",
    "category": "Park",
    "centroidLat": 28.559469,
    "centroidLon": 77.257644,
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
    "caption": "c block park 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772646006",
    "name": "Ashokan Edict",
    "category": "Park",
    "centroidLat": 28.558443,
    "centroidLon": 77.25655,
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
    "caption": "Ashokan Edict — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772646008",
    "name": "DDA Park 2",
    "category": "Park",
    "centroidLat": 28.558628,
    "centroidLon": 77.252665,
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
    "caption": "DDA Park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772646009",
    "name": "Sant nagar park",
    "category": "Park",
    "centroidLat": 28.555253,
    "centroidLon": 77.250137,
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
    "caption": "Sant nagar park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772646011",
    "name": "D Block Park",
    "category": "Park",
    "centroidLat": 28.557047,
    "centroidLon": 77.247303,
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
    "caption": "D Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "772646012",
    "name": "eok park",
    "category": "Park",
    "centroidLat": 28.559365,
    "centroidLon": 77.253618,
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
    "caption": "eok park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "775789715",
    "name": "b block park 2",
    "category": "Park",
    "centroidLat": 28.561171,
    "centroidLon": 77.255826,
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
    "caption": "b block park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "775789717",
    "name": "a block park",
    "category": "Park",
    "centroidLat": 28.561104,
    "centroidLon": 77.252582,
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
    "caption": "a block park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "775789718",
    "name": "a block park 2",
    "category": "Park",
    "centroidLat": 28.561241,
    "centroidLon": 77.253223,
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
    "caption": "a block park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "782592556",
    "name": "Central Nursery Park",
    "category": "Park",
    "centroidLat": 28.594399,
    "centroidLon": 77.057456,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "Central Nursery Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "782592557",
    "name": "District Park",
    "category": "Park",
    "centroidLat": 28.596235,
    "centroidLon": 77.055095,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "783852275",
    "name": "Sapna Park",
    "category": "Park",
    "centroidLat": 28.559558,
    "centroidLon": 77.245302,
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
    "caption": "Sapna Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "783852276",
    "name": "A block Park",
    "category": "Park",
    "centroidLat": 28.550988,
    "centroidLon": 77.24476,
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
    "caption": "A block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "785104402",
    "name": "Kala Park",
    "category": "Park",
    "centroidLat": 28.520926,
    "centroidLon": 77.278774,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Kala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "785105027",
    "name": "NTPC Park",
    "category": "Park",
    "centroidLat": 28.507811,
    "centroidLon": 77.332192,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Vriksh Raksha Manch Jaitpur"
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
    "caption": "NTPC Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "789636962",
    "name": "Shri Chander Singh Pradhan Memorial Park",
    "category": "Park",
    "centroidLat": 28.61876,
    "centroidLon": 77.029488,
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
    "caption": "Shri Chander Singh Pradhan Memorial Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "789640051",
    "name": "Kakrola More Park",
    "category": "Park",
    "centroidLat": 28.615217,
    "centroidLon": 77.029264,
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
    "caption": "Kakrola More Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "790002600",
    "name": "Vasant Kunj Sec A Children Park",
    "category": "Park",
    "centroidLat": 28.512141,
    "centroidLon": 77.168412,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority (D.D.A.)"
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
    "caption": "Vasant Kunj Sec A Children Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "791637878",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.696935,
    "centroidLon": 77.228176,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "802158793",
    "name": "mahavir park",
    "category": "Park",
    "centroidLat": 28.6844,
    "centroidLon": 77.344131,
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
    "caption": "mahavir park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814095084",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.626974,
    "centroidLon": 77.104854,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814132782",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.631731,
    "centroidLon": 77.088749,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814132784",
    "name": "Central Park B1",
    "category": "Park",
    "centroidLat": 28.629071,
    "centroidLon": 77.08975,
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
    "caption": "Central Park B1 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814132785",
    "name": "B3A Park",
    "category": "Park",
    "centroidLat": 28.626476,
    "centroidLon": 77.089997,
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
    "caption": "B3A Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814132786",
    "name": "B1B Park",
    "category": "Park",
    "centroidLat": 28.626386,
    "centroidLon": 77.087155,
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
    "caption": "B1B Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814132787",
    "name": "B1C Park",
    "category": "Park",
    "centroidLat": 28.62591,
    "centroidLon": 77.086674,
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
    "caption": "B1C Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814141213",
    "name": "CD Block Park",
    "category": "Park",
    "centroidLat": 28.625155,
    "centroidLon": 77.105266,
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
    "caption": "CD Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814141214",
    "name": "CD Block Inner Park",
    "category": "Park",
    "centroidLat": 28.625601,
    "centroidLon": 77.105234,
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
    "caption": "CD Block Inner Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814141215",
    "name": "CB Block Park",
    "category": "Park",
    "centroidLat": 28.626974,
    "centroidLon": 77.10711,
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
    "caption": "CB Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "814141216",
    "name": "CB Block Park",
    "category": "Park",
    "centroidLat": 28.626948,
    "centroidLon": 77.10797,
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
    "caption": "CB Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "815141797",
    "name": "Community park",
    "category": "Park",
    "centroidLat": 28.575128,
    "centroidLon": 77.171242,
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
    "caption": "Community park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "815676275",
    "name": "Yamun Park, DJB Wazirabad",
    "category": "Park",
    "centroidLat": 28.713475,
    "centroidLon": 77.228903,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Added missing park to open street map"
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
    "caption": "Yamun Park, DJB Wazirabad — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "815676536",
    "name": "Park no 2",
    "category": "Park",
    "centroidLat": 28.714306,
    "centroidLon": 77.229104,
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
    "caption": "Park no 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "815676569",
    "name": "Small park",
    "category": "Park",
    "centroidLat": 28.714409,
    "centroidLon": 77.229601,
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
    "caption": "Small park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "815677767",
    "name": "Park No 3, Wazirabad",
    "category": "Park",
    "centroidLat": 28.713998,
    "centroidLon": 77.229939,
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
    "caption": "Park No 3, Wazirabad — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "815678058",
    "name": "Park at Wazirabad",
    "category": "Park",
    "centroidLat": 28.713026,
    "centroidLon": 77.229216,
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
    "caption": "Park at Wazirabad — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "816798918",
    "name": "Pocket A park",
    "category": "Park",
    "centroidLat": 28.682314,
    "centroidLon": 77.31369,
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
    "caption": "Pocket A park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "817249286",
    "name": "Hastal Phase || District Park",
    "category": "Park",
    "centroidLat": 28.628982,
    "centroidLon": 77.064645,
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
    "caption": "Hastal Phase || District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "817263347",
    "name": "Herbal Garden",
    "category": "Park",
    "centroidLat": 28.667629,
    "centroidLon": 77.134451,
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
    "caption": "Herbal Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "817528616",
    "name": "Park NA-NE Block",
    "category": "Park",
    "centroidLat": 28.65639,
    "centroidLon": 77.103268,
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
    "caption": "Park NA-NE Block — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "817528620",
    "name": "RGA FLAT POCKET-A DDA PARK RAGHUBIR NAGAR",
    "category": "Park",
    "centroidLat": 28.656254,
    "centroidLon": 77.107066,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "RGA FLAT POCKET-A DDA PARK RAGHUBIR NAGAR — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "817528622",
    "name": "RBI Enclave District Park",
    "category": "Park",
    "centroidLat": 28.666486,
    "centroidLon": 77.096091,
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
    "caption": "RBI Enclave District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "817534195",
    "name": "Block 7 Park",
    "category": "Park",
    "centroidLat": 28.640694,
    "centroidLon": 77.102507,
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
    "caption": "Block 7 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "817534199",
    "name": "Keshopur District Park",
    "category": "Park",
    "centroidLat": 28.647202,
    "centroidLon": 77.082154,
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
    "caption": "Keshopur District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "817534200",
    "name": "Bodella District Park",
    "category": "Park",
    "centroidLat": 28.650407,
    "centroidLon": 77.075413,
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
    "caption": "Bodella District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "817913102",
    "name": "Park Z-Type",
    "category": "Park",
    "centroidLat": 28.699564,
    "centroidLon": 77.219147,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MCD"
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
    "caption": "Park  Z-Type — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818062048",
    "name": "Jahanpanah City Forest",
    "category": "Forest",
    "centroidLat": 28.527536,
    "centroidLon": 77.243942,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "forest"
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
    "caption": "Jahanpanah City Forest — forest in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818062064",
    "name": "G Block Park",
    "category": "Park",
    "centroidLat": 28.534363,
    "centroidLon": 77.252017,
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
    "caption": "G Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818074719",
    "name": "Malviya Nagar Park",
    "category": "Park",
    "centroidLat": 28.536421,
    "centroidLon": 77.215369,
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
    "caption": "Malviya Nagar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818074720",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.535987,
    "centroidLon": 77.21609,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818074727",
    "name": "Shivalik DDA Park",
    "category": "Park",
    "centroidLat": 28.536176,
    "centroidLon": 77.20565,
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
    "caption": "Shivalik DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818074729",
    "name": "Sarvodaya Enclave Park",
    "category": "Park",
    "centroidLat": 28.53533,
    "centroidLon": 77.201621,
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
    "caption": "Sarvodaya Enclave Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818074730",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.537565,
    "centroidLon": 77.201743,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818074737",
    "name": "Butterfly Park",
    "category": "Park",
    "centroidLat": 28.521236,
    "centroidLon": 77.198693,
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
    "caption": "Butterfly Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818318800",
    "name": "Birla Mill District Park",
    "category": "Park",
    "centroidLat": 28.677422,
    "centroidLon": 77.198163,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Public Park"
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
    "caption": "Birla Mill District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818318810",
    "name": "Legha Park",
    "category": "Park",
    "centroidLat": 28.686062,
    "centroidLon": 77.201797,
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
    "caption": "Legha Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818709476",
    "name": "Rose Garden",
    "category": "Park",
    "centroidLat": 28.52215,
    "centroidLon": 77.188505,
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
    "caption": "Rose Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818723409",
    "name": "A Block SFS Flats",
    "category": "Park",
    "centroidLat": 28.524382,
    "centroidLon": 77.203087,
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
    "caption": "A Block SFS Flats — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818723426",
    "name": "Hanuman Park",
    "category": "Park",
    "centroidLat": 28.536856,
    "centroidLon": 77.231065,
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
    "caption": "Hanuman Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818723430",
    "name": "Justice Park",
    "category": "Park",
    "centroidLat": 28.566491,
    "centroidLon": 77.237882,
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
    "caption": "Justice Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818723431",
    "name": "Sri Ramsharanam Park",
    "category": "Park",
    "centroidLat": 28.56719,
    "centroidLon": 77.236998,
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
    "caption": "Sri Ramsharanam Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818968322",
    "name": "Chhati Mayia Ground",
    "category": "Park",
    "centroidLat": 28.471276,
    "centroidLon": 77.12961,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Governments"
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
    "caption": "Chhati Mayia Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818969083",
    "name": "Baba Mangaldas Park",
    "category": "Park",
    "centroidLat": 28.471746,
    "centroidLon": 77.129246,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Government"
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
    "caption": "Baba Mangaldas Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818970759",
    "name": "Aya Nagar Central Park",
    "category": "Park",
    "centroidLat": 28.47124,
    "centroidLon": 77.128875,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Government"
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
    "caption": "Aya Nagar Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818971505",
    "name": "Kids playing park",
    "category": "Park",
    "centroidLat": 28.470824,
    "centroidLon": 77.12847,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Government"
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
    "caption": "Kids playing park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818972303",
    "name": "Shiv mandir and park",
    "category": "Park",
    "centroidLat": 28.471422,
    "centroidLon": 77.129848,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Government"
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
    "caption": "Shiv mandir and park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818981309",
    "name": "Lalit garden",
    "category": "Park",
    "centroidLat": 28.471491,
    "centroidLon": 77.131673,
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
    "caption": "Lalit garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818981609",
    "name": "Local park",
    "category": "Park",
    "centroidLat": 28.4708,
    "centroidLon": 77.131657,
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
    "caption": "Local park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "818982446",
    "name": "J.M.D Garden",
    "category": "Park",
    "centroidLat": 28.472218,
    "centroidLon": 77.134574,
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
    "caption": "J.M.D Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "819046412",
    "name": "Community Park, RK Puram Sector-1",
    "category": "Park",
    "centroidLat": 28.560912,
    "centroidLon": 77.181852,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MCD"
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
    "caption": "Community Park, RK Puram Sector-1 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "819046430",
    "name": "Durga Puja park",
    "category": "Park",
    "centroidLat": 28.574759,
    "centroidLon": 77.23197,
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
    "caption": "Durga Puja park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "819419202",
    "name": "Ganga Park",
    "category": "Park",
    "centroidLat": 28.556102,
    "centroidLon": 77.242666,
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
    "caption": "Ganga Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "819419205",
    "name": "Saraswati Park",
    "category": "Park",
    "centroidLat": 28.557907,
    "centroidLon": 77.24374,
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
    "caption": "Saraswati Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "819419208",
    "name": "Triveni Park",
    "category": "Park",
    "centroidLat": 28.557465,
    "centroidLon": 77.241317,
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
    "caption": "Triveni Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "819419209",
    "name": "Yamuna Park",
    "category": "Park",
    "centroidLat": 28.557419,
    "centroidLon": 77.242645,
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
    "caption": "Yamuna Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "820303291",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 28.510545,
    "centroidLon": 77.164531,
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
    "caption": "Children's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "820303295",
    "name": "Community Centre Park",
    "category": "Park",
    "centroidLat": 28.51016,
    "centroidLon": 77.166907,
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
    "caption": "Community Centre Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "822230242",
    "name": "Golf Course",
    "category": "Park",
    "centroidLat": 28.639064,
    "centroidLon": 77.000142,
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
    "caption": "Golf Course — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "822230243",
    "name": "Football/ Cricket ground",
    "category": "Park",
    "centroidLat": 28.637602,
    "centroidLon": 77.000585,
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
    "caption": "Football/ Cricket ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "822230244",
    "name": "Golf course",
    "category": "Park",
    "centroidLat": 28.638716,
    "centroidLon": 76.999405,
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
    "caption": "Golf course — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "822230246",
    "name": "Basketball court",
    "category": "Park",
    "centroidLat": 28.638112,
    "centroidLon": 77.001793,
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
    "caption": "Basketball court — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "827127826",
    "name": "Mother Teresa Park",
    "category": "Park",
    "centroidLat": 28.641117,
    "centroidLon": 77.273466,
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
    "caption": "Mother Teresa Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "829033456",
    "name": "Triangle park",
    "category": "Park",
    "centroidLat": 28.588946,
    "centroidLon": 77.316372,
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
    "caption": "Triangle park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "829057771",
    "name": "Mhila Park",
    "category": "Park",
    "centroidLat": 28.58974,
    "centroidLon": 77.317774,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "public park"
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
    "caption": "Mhila Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "832486417",
    "name": "SADBHAVNA PARK",
    "category": "Park",
    "centroidLat": 28.559974,
    "centroidLon": 77.210583,
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
    "caption": "SADBHAVNA PARK — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "845698510",
    "name": "I Block Park, Chittaranjan Park",
    "category": "Park",
    "centroidLat": 28.538116,
    "centroidLon": 77.25,
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
    "caption": "I Block Park, Chittaranjan Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "845710895",
    "name": "Chota Park A",
    "category": "Park",
    "centroidLat": 28.634667,
    "centroidLon": 77.071593,
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
    "caption": "Chota Park A — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "845718406",
    "name": "Chota Park B",
    "category": "Park",
    "centroidLat": 28.634269,
    "centroidLon": 77.071448,
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
    "caption": "Chota Park B — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "845719696",
    "name": "Multi Gym Park",
    "category": "Park",
    "centroidLat": 28.634183,
    "centroidLon": 77.072761,
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
    "caption": "Multi Gym Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "846064273",
    "name": "Durga Vatika",
    "category": "Park",
    "centroidLat": 28.634449,
    "centroidLon": 77.069812,
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
    "caption": "Durga Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "851773077",
    "name": "Kohli Vatika",
    "category": "Park",
    "centroidLat": 28.658422,
    "centroidLon": 77.190396,
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
    "caption": "Kohli Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "859039289",
    "name": "Saraswati vihar DIstrict Park",
    "category": "Park",
    "centroidLat": 28.697583,
    "centroidLon": 77.122542,
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
    "caption": "Saraswati vihar DIstrict Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "863490413",
    "name": "Durga Mandir Park",
    "category": "Park",
    "centroidLat": 28.682101,
    "centroidLon": 77.329339,
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
    "caption": "Durga Mandir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "863490414",
    "name": "Baake Bihari Park",
    "category": "Park",
    "centroidLat": 28.681909,
    "centroidLon": 77.32837,
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
    "caption": "Baake Bihari Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "870335665",
    "name": "Manas Appartments-Kala Vihar DDA Park",
    "category": "Park",
    "centroidLat": 28.598757,
    "centroidLon": 77.293795,
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
    "caption": "Manas Appartments-Kala Vihar DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "870335666",
    "name": "Parwana Apartments Park",
    "category": "Park",
    "centroidLat": 28.599671,
    "centroidLon": 77.292726,
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
    "caption": "Parwana Apartments Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "873021766",
    "name": "Anand Lok DDA Park",
    "category": "Park",
    "centroidLat": 28.606382,
    "centroidLon": 77.290675,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Anand Lok DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "873021769",
    "name": "Hindustan Times Apartments",
    "category": "Park",
    "centroidLat": 28.6066,
    "centroidLon": 77.290156,
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
    "caption": "Hindustan Times Apartments — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "902789793",
    "name": "B-3, Community Park",
    "category": "Park",
    "centroidLat": 28.524012,
    "centroidLon": 77.165196,
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
    "caption": "B-3, Community Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "910889839",
    "name": "B-4 Jogging Track and Park",
    "category": "Park",
    "centroidLat": 28.523558,
    "centroidLon": 77.165761,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "B-4 RWA"
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
    "caption": "B-4 Jogging Track and Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "910890073",
    "name": "Small Park/ Cricket Strip",
    "category": "Park",
    "centroidLat": 28.523414,
    "centroidLon": 77.164696,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "B-3 RWA"
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
    "caption": "Small Park/ Cricket Strip — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "921366084",
    "name": "Doctor Sushila Nayyar Park",
    "category": "Park",
    "centroidLat": 28.624114,
    "centroidLon": 77.122044,
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
    "caption": "Doctor Sushila Nayyar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "924895165",
    "name": "Fateh Nagar Public Park",
    "category": "Park",
    "centroidLat": 28.632857,
    "centroidLon": 77.102379,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Muncipality of Delhi"
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
    "caption": "Fateh Nagar Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "925625627",
    "name": "Block -40, R.W.A. Park",
    "category": "Park",
    "centroidLat": 28.676406,
    "centroidLon": 77.19937,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Resident's Welfare Association (R.W.A.) of Singh Sabha"
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
    "caption": "Block -40, R.W.A. Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "925955182",
    "name": "Children's (Chaudhary) park",
    "category": "Park",
    "centroidLat": 28.514443,
    "centroidLon": 77.16831,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Children's (Chaudhary) park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "926335536",
    "name": "Mandir Park",
    "category": "Park",
    "centroidLat": 28.513687,
    "centroidLon": 77.168931,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Mandir Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "926341622",
    "name": "Meeting Point Park",
    "category": "Park",
    "centroidLat": 28.514107,
    "centroidLon": 77.16751,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Meeting Point Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "926341624",
    "name": "R.W.A Park",
    "category": "Park",
    "centroidLat": 28.513251,
    "centroidLon": 77.16775,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Resident's Welfare Association (R.W.A.) of Sector A, Pocket B & C, Vasant Kunj"
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
    "caption": "R.W.A Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "926382758",
    "name": "Tara Shastri Chowk Park",
    "category": "Park",
    "centroidLat": 28.677293,
    "centroidLon": 77.196393,
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
    "caption": "Tara Shastri Chowk Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "926764963",
    "name": "Society Park",
    "category": "Park",
    "centroidLat": 28.563094,
    "centroidLon": 77.054517,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Corporative Group Housing Society (C.G.H.S.)"
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
    "caption": "Society Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "933891452",
    "name": "Gazebo Park",
    "category": "Park",
    "centroidLat": 28.512843,
    "centroidLon": 77.167739,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Gazebo Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "945692715",
    "name": "Picnic Park",
    "category": "Park",
    "centroidLat": 28.514204,
    "centroidLon": 77.166615,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Picnic Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "952472027",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.597074,
    "centroidLon": 77.046486,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "952518423",
    "name": "Bindapur Park",
    "category": "Park",
    "centroidLat": 28.609479,
    "centroidLon": 77.067016,
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
    "caption": "Bindapur Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "956488922",
    "name": "Ramleela Ground",
    "category": "Park",
    "centroidLat": 28.634728,
    "centroidLon": 77.117505,
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
    "caption": "Ramleela Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "956505987",
    "name": "Chatri wala park",
    "category": "Park",
    "centroidLat": 28.636893,
    "centroidLon": 77.10885,
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
    "caption": "Chatri wala park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "956505988",
    "name": "Shah Park",
    "category": "Park",
    "centroidLat": 28.635556,
    "centroidLon": 77.10987,
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
    "caption": "Shah Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "956505989",
    "name": "Maitri Park",
    "category": "Park",
    "centroidLat": 28.634425,
    "centroidLon": 77.109916,
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
    "caption": "Maitri Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "956505990",
    "name": "Hari Nagar Park",
    "category": "Park",
    "centroidLat": 28.633809,
    "centroidLon": 77.110122,
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
    "caption": "Hari Nagar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "961029737",
    "name": "Onix Park",
    "category": "Park",
    "centroidLat": 28.515273,
    "centroidLon": 77.167044,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Onix Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "961612374",
    "name": "Champa Park",
    "category": "Park",
    "centroidLat": 28.512931,
    "centroidLon": 77.166116,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Champa Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "961849428",
    "name": "Hasty Park",
    "category": "Park",
    "centroidLat": 28.515305,
    "centroidLon": 77.168851,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Hasty Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "961852670",
    "name": "Sadbhavna Park",
    "category": "Park",
    "centroidLat": 28.691324,
    "centroidLon": 77.347857,
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
    "caption": "Sadbhavna Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "961855802",
    "name": "Smriti Van",
    "category": "Park",
    "centroidLat": 28.516494,
    "centroidLon": 77.17029,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Smriti Van — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "961860257",
    "name": "Machhli Park , Mehrauli , Ward No 8",
    "category": "Park",
    "centroidLat": 28.517844,
    "centroidLon": 77.171512,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Machhli Park , Mehrauli , Ward No 8 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "961902633",
    "name": "Lord Satish Cricket Park",
    "category": "Park",
    "centroidLat": 28.562762,
    "centroidLon": 77.056239,
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
    "caption": "Lord Satish Cricket Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "961949534",
    "name": "Forest Area",
    "category": "Park",
    "centroidLat": 28.513519,
    "centroidLon": 77.172528,
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
    "caption": "Forest Area — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "962002881",
    "name": "Mango Orchard D.D.A. Park",
    "category": "Park",
    "centroidLat": 28.511993,
    "centroidLon": 77.174353,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority (D.D.A.)"
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
    "caption": "Mango Orchard D.D.A. Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "962041599",
    "name": "District Park",
    "category": "Park",
    "centroidLat": 28.561258,
    "centroidLon": 77.053727,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority (D.D.A.)"
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
    "caption": "District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "962220055",
    "name": "Dwarka Park",
    "category": "Park",
    "centroidLat": 28.595577,
    "centroidLon": 77.072895,
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
    "caption": "Dwarka Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "967271996",
    "name": "Devi Ahilyabai Holker Park",
    "category": "Park",
    "centroidLat": 28.622544,
    "centroidLon": 77.29627,
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
    "caption": "Devi Ahilyabai Holker Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970800859",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.688332,
    "centroidLon": 77.183345,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Residents welfare association"
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970800863",
    "name": "Private Park",
    "category": "Park",
    "centroidLat": 28.689193,
    "centroidLon": 77.184117,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Private people"
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
    "caption": "Private Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970800864",
    "name": "Private Park",
    "category": "Park",
    "centroidLat": 28.689324,
    "centroidLon": 77.185057,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Private"
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
    "caption": "Private Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970800868",
    "name": "Basic Park",
    "category": "Park",
    "centroidLat": 28.687244,
    "centroidLon": 77.185571,
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
    "caption": "Basic Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970800872",
    "name": "Temple Grounds",
    "category": "Park",
    "centroidLat": 28.687959,
    "centroidLon": 77.18526,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Temple RWA"
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
    "caption": "Temple Grounds — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970800873",
    "name": "Basic Park",
    "category": "Park",
    "centroidLat": 28.687443,
    "centroidLon": 77.185174,
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
    "caption": "Basic Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970804280",
    "name": "Vegetation Park",
    "category": "Park",
    "centroidLat": 28.686945,
    "centroidLon": 77.186712,
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
    "caption": "Vegetation Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970834703",
    "name": "Ramlila Ground Ashok Vihar",
    "category": "Park",
    "centroidLat": 28.685099,
    "centroidLon": 77.170631,
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
    "caption": "Ramlila Ground Ashok Vihar — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970867250",
    "name": "Badminton Park",
    "category": "Park",
    "centroidLat": 28.680137,
    "centroidLon": 77.175603,
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
    "caption": "Badminton Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970867251",
    "name": "Chhatri Wala Park",
    "category": "Park",
    "centroidLat": 28.681184,
    "centroidLon": 77.176325,
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
    "caption": "Chhatri Wala Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970867252",
    "name": "Teacher's Park",
    "category": "Park",
    "centroidLat": 28.678973,
    "centroidLon": 77.175371,
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
    "caption": "Teacher's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970867254",
    "name": "Small Park",
    "category": "Park",
    "centroidLat": 28.683491,
    "centroidLon": 77.1768,
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
    "caption": "Small Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970872138",
    "name": "SFS Park",
    "category": "Park",
    "centroidLat": 28.684079,
    "centroidLon": 77.172951,
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
    "caption": "SFS Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970872139",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.685004,
    "centroidLon": 77.172993,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970876931",
    "name": "Nangia Park",
    "category": "Park",
    "centroidLat": 28.679399,
    "centroidLon": 77.194745,
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
    "caption": "Nangia Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970876932",
    "name": "Aarush Garg Park",
    "category": "Park",
    "centroidLat": 28.67722,
    "centroidLon": 77.189506,
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
    "caption": "Aarush Garg Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970876934",
    "name": "Uma Park",
    "category": "Park",
    "centroidLat": 28.680188,
    "centroidLon": 77.187651,
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
    "caption": "Uma Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "970883370",
    "name": "Nice Park",
    "category": "Park",
    "centroidLat": 28.690602,
    "centroidLon": 77.169567,
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
    "caption": "Nice Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "982039384",
    "name": "Gulab Park",
    "category": "Park",
    "centroidLat": 28.455194,
    "centroidLon": 77.08152,
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
    "caption": "Gulab Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "982729135",
    "name": "Childrens Park",
    "category": "Park",
    "centroidLat": 28.524317,
    "centroidLon": 77.148878,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "RWA"
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
    "caption": "Childrens Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "982729145",
    "name": "Yamuna - Common garden",
    "category": "Garden",
    "centroidLat": 28.523829,
    "centroidLon": 77.149615,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "garden",
      "operator": "RWA"
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
    "caption": "Yamuna - Common garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "987103052",
    "name": "Modi Vatika (Park)",
    "category": "Park",
    "centroidLat": 28.564471,
    "centroidLon": 77.259366,
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
    "caption": "Modi Vatika (Park) — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "991702386",
    "name": "Maharaja Agrasen Park",
    "category": "Park",
    "centroidLat": 28.667869,
    "centroidLon": 77.225939,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "North Delhi Municipal Council"
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
    "caption": "Maharaja Agrasen Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "997968123",
    "name": "Shaheed Ashfaq Ullah Fitness Park",
    "category": "Park",
    "centroidLat": 28.609383,
    "centroidLon": 77.039641,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "NSUT"
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
    "caption": "Shaheed Ashfaq Ullah Fitness Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1015230200",
    "name": "T-Park",
    "category": "Park",
    "centroidLat": 28.606932,
    "centroidLon": 77.292518,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "T-Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1016215350",
    "name": "Vasant Vihar District Park",
    "category": "Park",
    "centroidLat": 28.557628,
    "centroidLon": 77.166293,
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
    "caption": "Vasant Vihar District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1037265987",
    "name": "Doctor Rajendra Prasad Park",
    "category": "Park",
    "centroidLat": 28.622459,
    "centroidLon": 77.295463,
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
    "caption": "Doctor Rajendra Prasad Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1038152735",
    "name": "Tikona Park Okhla",
    "category": "Park",
    "centroidLat": 28.558736,
    "centroidLon": 77.285582,
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
    "caption": "Tikona Park Okhla — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1042625416",
    "name": "Kid's Park",
    "category": "Park",
    "centroidLat": 28.498977,
    "centroidLon": 77.095213,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "National Media Centre"
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
    "caption": "Kid's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1054400338",
    "name": "New Pragatisheel Park",
    "category": "Park",
    "centroidLat": 28.600921,
    "centroidLon": 77.32083,
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
    "caption": "New Pragatisheel Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1074415658",
    "name": "park",
    "category": "Park",
    "centroidLat": 28.544727,
    "centroidLon": 77.270208,
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
    "caption": "park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1074445605",
    "name": "Research and Development Block Park",
    "category": "Park",
    "centroidLat": 28.544237,
    "centroidLon": 77.271518,
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
    "caption": "Research and Development Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1074445606",
    "name": "park academic block",
    "category": "Park",
    "centroidLat": 28.544673,
    "centroidLon": 77.272044,
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
    "caption": "park academic block — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1076312325",
    "name": "Major Vinod Rana Park",
    "category": "Park",
    "centroidLat": 28.511394,
    "centroidLon": 77.026865,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "GMDA"
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
    "caption": "Major Vinod Rana Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1076434964",
    "name": "Central Greens",
    "category": "Park",
    "centroidLat": 28.512898,
    "centroidLon": 77.026718,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Mahindra Aura"
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
    "caption": "Central Greens — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1076435578",
    "name": "Netaji Subhash Chandra Bose Park",
    "category": "Park",
    "centroidLat": 28.51308,
    "centroidLon": 77.025508,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Mahindra Aura"
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
    "caption": "Netaji Subhash Chandra Bose Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1085817383",
    "name": "DDA Park, Mayur Vihar",
    "category": "Park",
    "centroidLat": 28.603751,
    "centroidLon": 77.296145,
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
    "caption": "DDA Park, Mayur Vihar — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1086779451",
    "name": "local park",
    "category": "Park",
    "centroidLat": 28.498955,
    "centroidLon": 77.318641,
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
    "caption": "local park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1086784892",
    "name": "molarband village park",
    "category": "Park",
    "centroidLat": 28.501383,
    "centroidLon": 77.314182,
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
    "caption": "molarband village park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1086791650",
    "name": "local park",
    "category": "Park",
    "centroidLat": 28.498959,
    "centroidLon": 77.318647,
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
    "caption": "local park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1086828385",
    "name": "Kharbanda Triangular Park",
    "category": "Park",
    "centroidLat": 28.567281,
    "centroidLon": 77.23776,
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
    "caption": "Kharbanda Triangular Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1086828398",
    "name": "Arjuna Park",
    "category": "Park",
    "centroidLat": 28.566264,
    "centroidLon": 77.236775,
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
    "caption": "Arjuna Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1086868987",
    "name": "Chhawri park",
    "category": "Park",
    "centroidLat": 28.499528,
    "centroidLon": 77.316544,
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
    "caption": "Chhawri park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1086869231",
    "name": "Park 2",
    "category": "Park",
    "centroidLat": 28.499671,
    "centroidLon": 77.318135,
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
    "caption": "Park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1092907236",
    "name": "Municipal Park",
    "category": "Park",
    "centroidLat": 28.715696,
    "centroidLon": 77.175106,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Delhi"
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
    "caption": "Municipal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1092907237",
    "name": "Municipal Park",
    "category": "Park",
    "centroidLat": 28.715436,
    "centroidLon": 77.17533,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Corporation of Delhi"
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
    "caption": "Municipal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1111954278",
    "name": "Police park",
    "category": "Park",
    "centroidLat": 28.541775,
    "centroidLon": 77.296697,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "yes"
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
    "caption": "Police park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1111954279",
    "name": "Childrens park",
    "category": "Park",
    "centroidLat": 28.545041,
    "centroidLon": 77.294835,
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
    "caption": "Childrens park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1127484002",
    "name": "Sunder Nursery",
    "category": "Park",
    "centroidLat": 28.596853,
    "centroidLon": 77.24743,
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
    "caption": "Sunder Nursery — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1136942137",
    "name": "Front Lawn",
    "category": "Park",
    "centroidLat": 28.62591,
    "centroidLon": 77.236417,
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
    "caption": "Front Lawn — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1137796417",
    "name": "Baba Sahib Bhimrav Ambedkar Park",
    "category": "Park",
    "centroidLat": 28.729962,
    "centroidLon": 77.171405,
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
    "caption": "Baba Sahib Bhimrav Ambedkar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1138292913",
    "name": "Director's Flower Garden",
    "category": "Garden",
    "centroidLat": 28.62641,
    "centroidLon": 77.237283,
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
    "caption": "Director's Flower Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1149112332",
    "name": "Sanjay Park",
    "category": "Park",
    "centroidLat": 28.725097,
    "centroidLon": 77.165059,
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
    "caption": "Sanjay Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1149815829",
    "name": "Cultural park",
    "category": "Park",
    "centroidLat": 28.544671,
    "centroidLon": 77.24352,
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
    "caption": "Cultural park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1149850156",
    "name": "Alipur City Forest",
    "category": "Forest",
    "centroidLat": 28.7925,
    "centroidLon": 77.130282,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "forest"
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
    "caption": "Alipur City Forest — forest in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1150673333",
    "name": "Green Land/Area at Bhalaswa",
    "category": "Park",
    "centroidLat": 28.733965,
    "centroidLon": 77.161078,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Green Land/Area at Bhalaswa — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1153433159",
    "name": "Maharshi Valmiki Park",
    "category": "Park",
    "centroidLat": 28.727827,
    "centroidLon": 77.174348,
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
    "caption": "Maharshi Valmiki Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1153433175",
    "name": "Akhada",
    "category": "Park",
    "centroidLat": 28.728592,
    "centroidLon": 77.176188,
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
    "caption": "Akhada — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1154010129",
    "name": "Baba Saheb Bhim Rav Ambedkar Udyan",
    "category": "Park",
    "centroidLat": 28.727546,
    "centroidLon": 77.178232,
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
    "caption": "Baba Saheb Bhim Rav Ambedkar Udyan — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1154031204",
    "name": "Sant Ravidas Udyan",
    "category": "Park",
    "centroidLat": 28.727105,
    "centroidLon": 77.178566,
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
    "caption": "Sant Ravidas Udyan — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1154412433",
    "name": "APJ Abdul Kalam Udyan",
    "category": "Park",
    "centroidLat": 28.727117,
    "centroidLon": 77.177512,
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
    "caption": "APJ Abdul Kalam Udyan — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1158661734",
    "name": "Shaheed Bhagat Singh Park",
    "category": "Park",
    "centroidLat": 28.740832,
    "centroidLon": 77.165263,
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
    "caption": "Shaheed Bhagat Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1161756184",
    "name": "Shri Guru Nanak Vatika",
    "category": "Park",
    "centroidLat": 28.667477,
    "centroidLon": 77.21005,
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
    "caption": "Shri Guru Nanak Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1161990768",
    "name": "Moolchand Pradhan Park",
    "category": "Park",
    "centroidLat": 28.71276,
    "centroidLon": 77.177623,
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
    "caption": "Moolchand Pradhan Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1164904266",
    "name": "Tilpath Valley Biodiversity Park",
    "category": "Nature Reserve",
    "centroidLat": 28.48829,
    "centroidLon": 77.213354,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "nature_reserve"
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
    "caption": "Tilpath Valley Biodiversity Park — nature reserve in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1171502793",
    "name": "Maharaja Agrasen Park",
    "category": "Park",
    "centroidLat": 28.714514,
    "centroidLon": 77.179831,
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
    "caption": "Maharaja Agrasen Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1171502810",
    "name": "Bhagwan Parashuram Park",
    "category": "Park",
    "centroidLat": 28.715416,
    "centroidLon": 77.179413,
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
    "caption": "Bhagwan Parashuram Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1171536855",
    "name": "Xeriscape",
    "category": "Park",
    "centroidLat": 28.62274,
    "centroidLon": 77.289065,
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
    "caption": "Xeriscape — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1172679517",
    "name": "HANUMAN VATIKA",
    "category": "Park",
    "centroidLat": 28.681462,
    "centroidLon": 77.316148,
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
    "caption": "HANUMAN VATIKA — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1172679518",
    "name": "Deer park",
    "category": "Park",
    "centroidLat": 28.684093,
    "centroidLon": 77.321218,
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
    "caption": "Deer park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1173263047",
    "name": "Dahiya Badshah Park",
    "category": "Park",
    "centroidLat": 28.740339,
    "centroidLon": 77.132059,
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
    "caption": "Dahiya Badshah Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1173587411",
    "name": "RK Puram Sector-4 Park",
    "category": "Park",
    "centroidLat": 28.562059,
    "centroidLon": 77.17917,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MCD"
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
    "caption": "RK Puram Sector-4 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1173591532",
    "name": "Maharaja Surajmal Park",
    "category": "Park",
    "centroidLat": 28.558249,
    "centroidLon": 77.171797,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "park",
      "operator": "Delhi Municipal Corporation"
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
    "caption": "Maharaja Surajmal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1173591533",
    "name": "Central Park, RK Puram Sector-5",
    "category": "Park",
    "centroidLat": 28.561476,
    "centroidLon": 77.175527,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MCD"
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
    "caption": "Central Park, RK Puram Sector-5 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1175625276",
    "name": "Shaheed Vatika",
    "category": "Garden",
    "centroidLat": 28.608614,
    "centroidLon": 77.035866,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "NSUT"
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
    "caption": "Shaheed Vatika — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1177187329",
    "name": "Lane 1/2 Park",
    "category": "Park",
    "centroidLat": 28.604701,
    "centroidLon": 77.295754,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "Lane 1/2 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1177187330",
    "name": "Central Park Pocket 4",
    "category": "Park",
    "centroidLat": 28.60364,
    "centroidLon": 77.294076,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "RWA Pocket-4"
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
    "caption": "Central Park Pocket 4 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1178601198",
    "name": "Butterfly Park",
    "category": "Park",
    "centroidLat": 28.493312,
    "centroidLon": 77.266746,
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
    "caption": "Butterfly Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1179900332",
    "name": "Aravalli Forest center",
    "category": "Park",
    "centroidLat": 28.494497,
    "centroidLon": 77.266667,
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
    "caption": "Aravalli Forest center — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1184581347",
    "name": "Shaheed Udham Singh park",
    "category": "Park",
    "centroidLat": 28.586299,
    "centroidLon": 77.249226,
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
    "caption": "Shaheed Udham Singh park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1184940953",
    "name": "Baansera",
    "category": "Park",
    "centroidLat": 28.591523,
    "centroidLon": 77.260703,
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
    "caption": "Baansera — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1190763938",
    "name": "Zodiac Park",
    "category": "Park",
    "centroidLat": 28.565932,
    "centroidLon": 77.240209,
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
    "caption": "Zodiac Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1195171946",
    "name": "Park Number 5",
    "category": "Park",
    "centroidLat": 28.427461,
    "centroidLon": 77.065402,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Municipal Coorporation Gurugram"
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
    "caption": "Park Number 5 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1210865040",
    "name": "Kotha Park",
    "category": "Park",
    "centroidLat": 28.660821,
    "centroidLon": 77.094536,
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
    "caption": "Kotha Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1210865046",
    "name": "PARK",
    "category": "Park",
    "centroidLat": 28.660787,
    "centroidLon": 77.093069,
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
    "caption": "PARK — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1212113254",
    "name": "Common park",
    "category": "Park",
    "centroidLat": 28.580241,
    "centroidLon": 77.051759,
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
    "caption": "Common park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1219956715",
    "name": "Tikona park, okhla",
    "category": "Park",
    "centroidLat": 28.562223,
    "centroidLon": 77.28795,
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
    "caption": "Tikona park, okhla — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1220968209",
    "name": "Manav Rachna Playground cum C Block Main Park",
    "category": "Park",
    "centroidLat": 28.422494,
    "centroidLon": 77.06121,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "C Block RWA"
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
    "caption": "Manav Rachna Playground cum C Block Main Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1224672242",
    "name": "Gulmohar Marg Park",
    "category": "Park",
    "centroidLat": 28.481051,
    "centroidLon": 77.073737,
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
    "caption": "Gulmohar Marg Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1225898512",
    "name": "Shri Keemti Lal Ji Park",
    "category": "Park",
    "centroidLat": 28.568938,
    "centroidLon": 77.242193,
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
    "caption": "Shri Keemti Lal Ji Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1225898513",
    "name": "Delhi Development Authority Green Area",
    "category": "Park",
    "centroidLat": 28.569948,
    "centroidLon": 77.239754,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Delhi Development Authority Green Area — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1228564221",
    "name": "Shiv Murti Park",
    "category": "Park",
    "centroidLat": 28.713763,
    "centroidLon": 77.21194,
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
    "caption": "Shiv Murti Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1232285506",
    "name": "Rose Garden",
    "category": "Park",
    "centroidLat": 28.544946,
    "centroidLon": 77.195472,
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
    "caption": "Rose Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1232377497",
    "name": "Trikona park",
    "category": "Park",
    "centroidLat": 28.646499,
    "centroidLon": 77.28877,
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
    "caption": "Trikona park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1238152531",
    "name": "Nehru Park",
    "category": "Park",
    "centroidLat": 28.591321,
    "centroidLon": 77.192701,
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
    "caption": "Nehru Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1254530443",
    "name": "Shaheed Bhagat Singh Park",
    "category": "Park",
    "centroidLat": 28.580701,
    "centroidLon": 77.242931,
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
    "caption": "Shaheed Bhagat Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1256777668",
    "name": "eco park",
    "category": "Park",
    "centroidLat": 28.517727,
    "centroidLon": 77.318626,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "ntpc"
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
    "caption": "eco park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1257160903",
    "name": "badminton court",
    "category": "Park",
    "centroidLat": 28.562645,
    "centroidLon": 77.043152,
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
    "caption": "badminton court — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1257160908",
    "name": "BADMINTON COURT",
    "category": "Park",
    "centroidLat": 28.689538,
    "centroidLon": 77.324912,
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
    "caption": "BADMINTON COURT — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1257178105",
    "name": "DDA park",
    "category": "Park",
    "centroidLat": 28.546787,
    "centroidLon": 77.261202,
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
    "caption": "DDA park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1257188599",
    "name": "Vijay Singh Park",
    "category": "Park",
    "centroidLat": 28.513317,
    "centroidLon": 77.120937,
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
    "caption": "Vijay Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1257368791",
    "name": "sarita vihar park",
    "category": "Park",
    "centroidLat": 28.527815,
    "centroidLon": 77.291091,
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
    "caption": "sarita vihar park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1257541692",
    "name": "District Park, Sector 23",
    "category": "Park",
    "centroidLat": 28.567005,
    "centroidLon": 77.051677,
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
    "caption": "District Park, Sector 23 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258141492",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 28.469547,
    "centroidLon": 77.30834,
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
    "caption": "Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258141681",
    "name": "Green Park",
    "category": "Park",
    "centroidLat": 28.468785,
    "centroidLon": 77.308507,
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
    "caption": "Green Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258157390",
    "name": "M-Block Park",
    "category": "Park",
    "centroidLat": 28.583012,
    "centroidLon": 77.341858,
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
    "caption": "M-Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258158696",
    "name": "Durga Pooja Ground",
    "category": "Park",
    "centroidLat": 28.582551,
    "centroidLon": 77.340547,
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
    "caption": "Durga Pooja Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258165658",
    "name": "JVCC Grounds",
    "category": "Park",
    "centroidLat": 28.585214,
    "centroidLon": 77.336587,
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
    "caption": "JVCC Grounds — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258188868",
    "name": "dda park 3",
    "category": "Park",
    "centroidLat": 28.497782,
    "centroidLon": 77.282257,
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
    "caption": "dda park 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258200550",
    "name": "jungle park",
    "category": "Park",
    "centroidLat": 28.49655,
    "centroidLon": 77.289305,
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
    "caption": "jungle park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258211515",
    "name": "Ram Leela ground",
    "category": "Park",
    "centroidLat": 28.592254,
    "centroidLon": 77.340705,
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
    "caption": "Ram Leela ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258316066",
    "name": "NDPL",
    "category": "Park",
    "centroidLat": 28.727252,
    "centroidLon": 77.164377,
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
    "caption": "NDPL — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258384792",
    "name": "Park",
    "category": "Park",
    "centroidLat": 28.601331,
    "centroidLon": 77.048924,
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
    "caption": "Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1258386612",
    "name": "Garden",
    "category": "Garden",
    "centroidLat": 28.600229,
    "centroidLon": 77.048735,
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
    "caption": "Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1259775415",
    "name": "Surya Upasana Park",
    "category": "Park",
    "centroidLat": 28.608744,
    "centroidLon": 77.081328,
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
    "caption": "Surya Upasana Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1260741044",
    "name": "Main Triangular Park",
    "category": "Park",
    "centroidLat": 28.422569,
    "centroidLon": 77.064316,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "J Block MayField Gardens"
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
    "caption": "Main Triangular Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1260743940",
    "name": "Joggers Park",
    "category": "Park",
    "centroidLat": 28.42331,
    "centroidLon": 77.06297,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "RWA"
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
    "caption": "Joggers Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1260750144",
    "name": "Temple Park",
    "category": "Park",
    "centroidLat": 28.426468,
    "centroidLon": 77.060624,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Temple"
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
    "caption": "Temple Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1260759155",
    "name": "Housing Board Park N Block",
    "category": "Park",
    "centroidLat": 28.426482,
    "centroidLon": 77.063093,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Housing Board"
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
    "caption": "Housing Board Park N Block — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1263760037",
    "name": "Ramleela Maidan",
    "category": "Park",
    "centroidLat": 28.592367,
    "centroidLon": 77.119532,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Ramleela Maidan — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1264899833",
    "name": "H Block Park",
    "category": "Park",
    "centroidLat": 28.582046,
    "centroidLon": 77.242036,
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
    "caption": "H Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1265084174",
    "name": "Chetak Park",
    "category": "Park",
    "centroidLat": 28.642694,
    "centroidLon": 77.189266,
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
    "caption": "Chetak Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1265808933",
    "name": "Delhi Development Authority Green Area",
    "category": "Park",
    "centroidLat": 28.57174,
    "centroidLon": 77.240939,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Delhi Development Authority Green Area — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1266549579",
    "name": "DDA Park Vinobapuri",
    "category": "Park",
    "centroidLat": 28.566032,
    "centroidLon": 77.248725,
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
    "caption": "DDA Park Vinobapuri — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1266549584",
    "name": "Babu Park",
    "category": "Park",
    "centroidLat": 28.568762,
    "centroidLon": 77.244036,
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
    "caption": "Babu Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1270584506",
    "name": "DDA park",
    "category": "Park",
    "centroidLat": 28.609157,
    "centroidLon": 77.288894,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "park",
      "operator": "East Delhi Municipal Corporation"
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
    "caption": "DDA park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1270585071",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.607923,
    "centroidLon": 77.289185,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "East Delhi Municipal Corporation"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1270585601",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.610234,
    "centroidLon": 77.288031,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "East Delhi municipal Corporation"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1270586081",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.610149,
    "centroidLon": 77.287276,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "East Delhi Municipal Corporation"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1270586364",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.608349,
    "centroidLon": 77.288263,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "East Delhi Municipal Corporation"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1270587334",
    "name": "Gyandeep lawn",
    "category": "Garden",
    "centroidLat": 28.610717,
    "centroidLon": 77.287172,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "private",
      "leisure": "garden",
      "operator": "Gyandeep Co-op Society"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=private",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gyandeep lawn — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1270655643",
    "name": "Shri Shaktiraj Park",
    "category": "Park",
    "centroidLat": 28.569278,
    "centroidLon": 77.241269,
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
    "caption": "Shri Shaktiraj Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1273617441",
    "name": "Bharat Darshan Park",
    "category": "Park",
    "centroidLat": 28.666177,
    "centroidLon": 77.134874,
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
    "caption": "Bharat Darshan Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1274070899",
    "name": "Dargah Peer Banwasi Park",
    "category": "Park",
    "centroidLat": 28.638857,
    "centroidLon": 77.206986,
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
    "caption": "Dargah Peer Banwasi Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1274531606",
    "name": "Kamla Nehru Park",
    "category": "Park",
    "centroidLat": 28.668858,
    "centroidLon": 77.208686,
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
    "caption": "Kamla Nehru Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1275259742",
    "name": "Sadar Bazar Park",
    "category": "Park",
    "centroidLat": 28.594857,
    "centroidLon": 77.120787,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Sadar Bazar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1278183032",
    "name": "Delhi Cantonment Children Park 3",
    "category": "Park",
    "centroidLat": 28.595305,
    "centroidLon": 77.123491,
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
    "caption": "Delhi Cantonment Children Park 3 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1278970646",
    "name": "Herbal Vatika",
    "category": "Garden",
    "centroidLat": 28.597861,
    "centroidLon": 77.14167,
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
    "caption": "Herbal Vatika — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1278970648",
    "name": "Srinagesh Garden",
    "category": "Park",
    "centroidLat": 28.597658,
    "centroidLon": 77.140912,
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
    "caption": "Srinagesh Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1279460301",
    "name": "Pandit Ramkeval Mishra Park",
    "category": "Park",
    "centroidLat": 28.629557,
    "centroidLon": 77.215211,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MCD"
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
    "caption": "Pandit Ramkeval Mishra Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1283297045",
    "name": "Delhi Cantonment Children Park 1",
    "category": "Park",
    "centroidLat": 28.593391,
    "centroidLon": 77.125603,
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
    "caption": "Delhi Cantonment Children Park 1 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1286191651",
    "name": "Chanan Singh Park",
    "category": "Park",
    "centroidLat": 28.607017,
    "centroidLon": 77.129542,
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
    "caption": "Chanan Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1286304939",
    "name": "श्री चंद्र सिंह प्रधान पार्क",
    "category": "Park",
    "centroidLat": 28.618072,
    "centroidLon": 77.028883,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "श्री चंद्र सिंह प्रधान पार्क — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1286874147",
    "name": "India - ASEAN Friendship Park",
    "category": "Garden",
    "centroidLat": 28.594509,
    "centroidLon": 77.211551,
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
    "caption": "India - ASEAN Friendship Park — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1288640323",
    "name": "Cantonment Board Children Park",
    "category": "Park",
    "centroidLat": 28.596215,
    "centroidLon": 77.119576,
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
    "caption": "Cantonment Board Children Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1292560578",
    "name": "Central Park, Sector 4",
    "category": "Park",
    "centroidLat": 28.647382,
    "centroidLon": 77.34265,
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
    "caption": "Central Park, Sector 4 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1295552481",
    "name": "Neighbourhood Park",
    "category": "Park",
    "centroidLat": 28.608951,
    "centroidLon": 77.107493,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Neighbourhood Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1297694017",
    "name": "Smriti Vatika",
    "category": "Park",
    "centroidLat": 28.586492,
    "centroidLon": 77.173603,
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
    "caption": "Smriti Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1298090393",
    "name": "Crown Central Park",
    "category": "Park",
    "centroidLat": 28.719632,
    "centroidLon": 77.11039,
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
    "caption": "Crown Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1304974276",
    "name": "Eco Park",
    "category": "Park",
    "centroidLat": 28.547677,
    "centroidLon": 77.234308,
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
    "caption": "Eco Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1306338902",
    "name": "Sainik Farm Forest",
    "category": "Forest",
    "centroidLat": 28.506341,
    "centroidLon": 77.203511,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "forest"
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
    "caption": "Sainik Farm Forest — forest in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1307479760",
    "name": "Pocket E Park",
    "category": "Park",
    "centroidLat": 28.617292,
    "centroidLon": 77.294855,
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
    "caption": "Pocket E Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1315991292",
    "name": "Pocket E Park",
    "category": "Park",
    "centroidLat": 28.616801,
    "centroidLon": 77.294572,
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
    "caption": "Pocket E Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1317316786",
    "name": "New Delhi Municipal Corporation Park",
    "category": "Park",
    "centroidLat": 28.627179,
    "centroidLon": 77.215922,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Oil And Natural Gas Corporation"
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
    "caption": "New Delhi Municipal Corporation Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1319249606",
    "name": "Bindra Park",
    "category": "Park",
    "centroidLat": 28.642353,
    "centroidLon": 77.125197,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Bindra Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1319250619",
    "name": "Patel Park",
    "category": "Park",
    "centroidLat": 28.640502,
    "centroidLon": 77.120866,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Patel Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1319250926",
    "name": "G-H-J block Park",
    "category": "Park",
    "centroidLat": 28.642771,
    "centroidLon": 77.12139,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "G-H-J block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1319251170",
    "name": "Janta Market Park",
    "category": "Park",
    "centroidLat": 28.639777,
    "centroidLon": 77.123229,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Delhi Municipal Corporation"
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
    "caption": "Janta Market Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1319418247",
    "name": "Indo-Korean Friendship Park",
    "category": "Park",
    "centroidLat": 28.601605,
    "centroidLon": 77.133039,
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
    "caption": "Indo-Korean Friendship Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1320954787",
    "name": "Shiv Vatika",
    "category": "Park",
    "centroidLat": 28.665343,
    "centroidLon": 77.208727,
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
    "caption": "Shiv Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1325612946",
    "name": "Doctor Indra Chandra Shastri Vatika",
    "category": "Park",
    "centroidLat": 28.684865,
    "centroidLon": 77.203251,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Ease My Trip Foundation"
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
    "caption": "Doctor Indra Chandra Shastri Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1327847440",
    "name": "Mughal Garden",
    "category": "Garden",
    "centroidLat": 28.526051,
    "centroidLon": 77.186502,
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
    "caption": "Mughal Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1340863310",
    "name": "Bhagwan Mahavir Vanasthali Park",
    "category": "Park",
    "centroidLat": 28.603492,
    "centroidLon": 77.17795,
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
    "caption": "Bhagwan Mahavir Vanasthali Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1342579602",
    "name": "Water Body Park Ramphal Chowk",
    "category": "Park",
    "centroidLat": 28.586173,
    "centroidLon": 77.072654,
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
    "caption": "Water Body Park Ramphal Chowk — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1346820513",
    "name": "Flight Lieutenant Sunit Mohanty Park",
    "category": "Park",
    "centroidLat": 28.586043,
    "centroidLon": 77.066581,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MCD"
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
    "caption": "Flight Lieutenant Sunit Mohanty Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1348652222",
    "name": "Ambedkar Park",
    "category": "Park",
    "centroidLat": 28.564356,
    "centroidLon": 77.188258,
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
    "caption": "Ambedkar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1350182598",
    "name": "Sukhmani Park",
    "category": "Park",
    "centroidLat": 28.701587,
    "centroidLon": 77.20807,
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
    "caption": "Sukhmani Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1350182694",
    "name": "Japji Park",
    "category": "Park",
    "centroidLat": 28.701587,
    "centroidLon": 77.207381,
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
    "caption": "Japji Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1350194854",
    "name": "Rehras Park",
    "category": "Park",
    "centroidLat": 28.702574,
    "centroidLon": 77.207852,
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
    "caption": "Rehras Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1356601712",
    "name": "Playground",
    "category": "Park",
    "centroidLat": 28.590571,
    "centroidLon": 77.068202,
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
    "caption": "Playground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1360690292",
    "name": "chandrashekhar park",
    "category": "Park",
    "centroidLat": 28.687193,
    "centroidLon": 77.34366,
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
    "caption": "chandrashekhar park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1364002356",
    "name": "Triveni Park",
    "category": "Park",
    "centroidLat": 28.607305,
    "centroidLon": 77.121438,
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
    "caption": "Triveni Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1366077821",
    "name": "Swasthya Vihar Neighbourhood Park",
    "category": "Park",
    "centroidLat": 28.640348,
    "centroidLon": 77.287206,
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
    "caption": "Swasthya Vihar Neighbourhood Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1368371151",
    "name": "Silver Oak Lawn",
    "category": "Garden",
    "centroidLat": 28.588492,
    "centroidLon": 77.225752,
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
    "caption": "Silver Oak Lawn — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1368438754",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.594796,
    "centroidLon": 77.295206,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDA"
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1370300961",
    "name": "Hanuman Chowk Park",
    "category": "Park",
    "centroidLat": 28.570825,
    "centroidLon": 77.017677,
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
    "caption": "Hanuman Chowk Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1374681750",
    "name": "Jawahar Gulab Vatika",
    "category": "Garden",
    "centroidLat": 28.689743,
    "centroidLon": 77.213665,
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
    "caption": "Jawahar Gulab Vatika — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1376095473",
    "name": "Kilkaari Park",
    "category": "Park",
    "centroidLat": 28.601114,
    "centroidLon": 77.11444,
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
    "caption": "Kilkaari Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1376095477",
    "name": "Natkhat Park",
    "category": "Park",
    "centroidLat": 28.602385,
    "centroidLon": 77.111918,
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
    "caption": "Natkhat Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1378475314",
    "name": "holy park karala",
    "category": "Park",
    "centroidLat": 28.73779,
    "centroidLon": 77.03524,
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
    "caption": "holy park karala — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1379295147",
    "name": "Chhatrapati Shivaji Park",
    "category": "Park",
    "centroidLat": 28.657812,
    "centroidLon": 77.126805,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Delhi Development Authority"
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
    "caption": "Chhatrapati Shivaji Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1380217978",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.579324,
    "centroidLon": 77.176461,
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1380340904",
    "name": "Yoga Park",
    "category": "Park",
    "centroidLat": 28.544375,
    "centroidLon": 77.241856,
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
    "caption": "Yoga Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1380340910",
    "name": "Vista Park",
    "category": "Park",
    "centroidLat": 28.545128,
    "centroidLon": 77.241989,
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
    "caption": "Vista Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1381609927",
    "name": "Chowdhury Ramji Lal Chawri Vatika",
    "category": "Garden",
    "centroidLat": 28.662535,
    "centroidLon": 77.205244,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Chowdhury Ramji Lal Chawri Vatika — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1382098173",
    "name": "Herbal Park",
    "category": "Park",
    "centroidLat": 28.634225,
    "centroidLon": 77.291809,
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
    "caption": "Herbal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1382098176",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.623163,
    "centroidLon": 77.292175,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1382552737",
    "name": "Raman Munjal Park",
    "category": "Park",
    "centroidLat": 28.553106,
    "centroidLon": 77.229778,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "A and B Block Welfare Society"
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
    "caption": "Raman Munjal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1382699643",
    "name": "Kaveri Park",
    "category": "Park",
    "centroidLat": 28.556952,
    "centroidLon": 77.241295,
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
    "caption": "Kaveri Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1382699646",
    "name": "Krishna Park",
    "category": "Park",
    "centroidLat": 28.558255,
    "centroidLon": 77.240584,
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
    "caption": "Krishna Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1382699651",
    "name": "Narmada Park",
    "category": "Park",
    "centroidLat": 28.556268,
    "centroidLon": 77.243342,
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
    "caption": "Narmada Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1384678306",
    "name": "Chaudhary Brahma Prakash Park",
    "category": "Park",
    "centroidLat": 28.573635,
    "centroidLon": 77.073272,
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
    "caption": "Chaudhary Brahma Prakash Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1385061182",
    "name": "Saket District Park",
    "category": "Park",
    "centroidLat": 28.527154,
    "centroidLon": 77.209563,
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
    "caption": "Saket District Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1385730774",
    "name": "Kusuma School of Biological Sciences Garden",
    "category": "Garden",
    "centroidLat": 28.545753,
    "centroidLon": 77.194068,
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
    "caption": "Kusuma School of Biological Sciences Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1387571121",
    "name": "Mahila Park",
    "category": "Park",
    "centroidLat": 28.61035,
    "centroidLon": 77.108024,
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
    "caption": "Mahila Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1387719418",
    "name": "Park 2",
    "category": "Park",
    "centroidLat": 28.425304,
    "centroidLon": 77.06605,
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
    "caption": "Park 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1391511503",
    "name": "Rose Garden",
    "category": "Garden",
    "centroidLat": 28.590881,
    "centroidLon": 77.192219,
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
    "caption": "Rose Garden — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1391838389",
    "name": "Indian Air Force Legacy Park",
    "category": "Park",
    "centroidLat": 28.574146,
    "centroidLon": 77.119728,
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
    "caption": "Indian Air Force Legacy Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1393068561",
    "name": "Baba Bagh Wala Mini Stadium",
    "category": "Park",
    "centroidLat": 28.623074,
    "centroidLon": 77.137259,
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
    "caption": "Baba Bagh Wala Mini Stadium — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1393554759",
    "name": "Red Square",
    "category": "Park",
    "centroidLat": 28.545165,
    "centroidLon": 77.191393,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "IIT Delhi"
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
    "caption": "Red Square — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1394032050",
    "name": "Maharaja Ranjit Singh Park",
    "category": "Park",
    "centroidLat": 28.579474,
    "centroidLon": 77.239793,
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
    "caption": "Maharaja Ranjit Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1394090429",
    "name": "Dada Bahiya Ground",
    "category": "Park",
    "centroidLat": 28.833823,
    "centroidLon": 77.008059,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Dada Bahiya Ground — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1394163108",
    "name": "Ambedkar Park",
    "category": "Park",
    "centroidLat": 28.613294,
    "centroidLon": 77.086811,
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
    "caption": "Ambedkar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1408410110",
    "name": "Rani Jhansi Mahila Park",
    "category": "Park",
    "centroidLat": 28.622884,
    "centroidLon": 77.137917,
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
    "caption": "Rani Jhansi Mahila Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1408410111",
    "name": "C Block Park",
    "category": "Park",
    "centroidLat": 28.62279,
    "centroidLon": 77.142687,
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
    "caption": "C Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1408410112",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.624725,
    "centroidLon": 77.140819,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1408776567",
    "name": "F Block Park",
    "category": "Park",
    "centroidLat": 28.416556,
    "centroidLon": 77.05482,
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
    "caption": "F Block Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1408777029",
    "name": "F Block Open Gym",
    "category": "Park",
    "centroidLat": 28.415787,
    "centroidLon": 77.05492,
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
    "caption": "F Block Open Gym — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1412223894",
    "name": "Palm Court Park",
    "category": "Park",
    "centroidLat": 28.645362,
    "centroidLon": 77.338064,
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
    "caption": "Palm Court Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1412223895",
    "name": "Mother Dairy Park",
    "category": "Park",
    "centroidLat": 28.645829,
    "centroidLon": 77.340273,
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
    "caption": "Mother Dairy Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1412985559",
    "name": "Santushti Park",
    "category": "Park",
    "centroidLat": 28.646846,
    "centroidLon": 77.341272,
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
    "caption": "Santushti Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1414425801",
    "name": "Podium Park",
    "category": "Park",
    "centroidLat": 28.648598,
    "centroidLon": 77.337339,
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
    "caption": "Podium Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1416040579",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 28.59506,
    "centroidLon": 77.015124,
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
    "caption": "Children's Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1420660223",
    "name": "Shri Ved Prakash Jindal Park",
    "category": "Park",
    "centroidLat": 28.662756,
    "centroidLon": 77.129268,
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
    "caption": "Shri Ved Prakash Jindal Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1422826986",
    "name": "Upvan Park",
    "category": "Park",
    "centroidLat": 28.454801,
    "centroidLon": 77.091574,
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
    "caption": "Upvan Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1423096188",
    "name": "Kamla Nehru Park",
    "category": "Park",
    "centroidLat": 28.643641,
    "centroidLon": 77.225765,
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
    "caption": "Kamla Nehru Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1424419692",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 28.654173,
    "centroidLon": 77.294141,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Public Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1424773294",
    "name": "G-Block Harkesh Nagar Park",
    "category": "Park",
    "centroidLat": 28.545312,
    "centroidLon": 77.277203,
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
    "caption": "G-Block Harkesh Nagar Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1424825478",
    "name": "Vaikunth Vatika",
    "category": "Park",
    "centroidLat": 28.537465,
    "centroidLon": 77.21638,
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
    "caption": "Vaikunth Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1426441321",
    "name": "Children's park",
    "category": "Park",
    "centroidLat": 28.613065,
    "centroidLon": 77.090589,
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
    "caption": "Children's park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1426586667",
    "name": "Arun Jaitley Park",
    "category": "Park",
    "centroidLat": 28.55334,
    "centroidLon": 77.227242,
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
    "caption": "Arun Jaitley Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1426586690",
    "name": "D.D.A. Park Shahpur Jat",
    "category": "Park",
    "centroidLat": 28.545661,
    "centroidLon": 77.215722,
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
    "caption": "D.D.A. Park Shahpur Jat — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1428188167",
    "name": "B-block central park",
    "category": "Park",
    "centroidLat": 28.693358,
    "centroidLon": 77.330125,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "public"
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
    "caption": "B-block central park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1429088144",
    "name": "DDA Park Sector 20",
    "category": "Park",
    "centroidLat": 28.573817,
    "centroidLon": 77.063211,
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
    "caption": "DDA Park Sector 20 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1429088146",
    "name": "Sector 9 Park",
    "category": "Park",
    "centroidLat": 28.576199,
    "centroidLon": 77.062725,
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
    "caption": "Sector 9 Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1429088147",
    "name": "Ground & Park Sector 19B",
    "category": "Park",
    "centroidLat": 28.572424,
    "centroidLon": 77.049653,
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
    "caption": "Ground & Park Sector 19B — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1429088149",
    "name": "Park Sector 19 Dwarka",
    "category": "Park",
    "centroidLat": 28.572238,
    "centroidLon": 77.043181,
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
    "caption": "Park Sector 19 Dwarka — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1429088150",
    "name": "Park Sector 19",
    "category": "Park",
    "centroidLat": 28.571799,
    "centroidLon": 77.044595,
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
    "caption": "Park Sector 19 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1429088151",
    "name": "Park Sector 19",
    "category": "Park",
    "centroidLat": 28.573503,
    "centroidLon": 77.043509,
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
    "caption": "Park Sector 19 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1429088156",
    "name": "Park at Sector 19",
    "category": "Park",
    "centroidLat": 28.569714,
    "centroidLon": 77.045783,
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
    "caption": "Park at Sector 19 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1429088160",
    "name": "Football Park",
    "category": "Park",
    "centroidLat": 28.57358,
    "centroidLon": 77.053619,
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
    "caption": "Football Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1430223038",
    "name": "RWA Park",
    "category": "Park",
    "centroidLat": 28.602642,
    "centroidLon": 77.293646,
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
    "caption": "RWA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1451897060",
    "name": "DDA Park",
    "category": "Park",
    "centroidLat": 28.57548,
    "centroidLon": 77.049516,
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
    "caption": "DDA Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1457059470",
    "name": "SFS, Central Park",
    "category": "Park",
    "centroidLat": 28.606348,
    "centroidLon": 77.337486,
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
    "caption": "SFS, Central Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1467327114",
    "name": "Kailash Lawns",
    "category": "Garden",
    "centroidLat": 28.54479,
    "centroidLon": 77.196288,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "IIT Delhi"
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
    "caption": "Kailash Lawns — garden in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1476569814",
    "name": "Shri Ram Leela Park",
    "category": "Park",
    "centroidLat": 28.707966,
    "centroidLon": 77.191478,
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
    "caption": "Shri Ram Leela Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1482443303",
    "name": "Chaudhary Surendra Singh Park",
    "category": "Park",
    "centroidLat": 28.700084,
    "centroidLon": 77.220904,
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
    "caption": "Chaudhary Surendra Singh Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1482455190",
    "name": "Sangat Garden",
    "category": "Park",
    "centroidLat": 28.496852,
    "centroidLon": 77.319333,
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
    "caption": "Sangat Garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1482456077",
    "name": "Sambandh Vatika",
    "category": "Park",
    "centroidLat": 28.499288,
    "centroidLon": 77.317275,
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
    "caption": "Sambandh Vatika — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1482527516",
    "name": "Timarpur Lake",
    "category": "Park",
    "centroidLat": 28.71267,
    "centroidLon": 77.223422,
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
    "caption": "Timarpur Lake — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1486480802",
    "name": "Mayur garden",
    "category": "Park",
    "centroidLat": 28.452804,
    "centroidLon": 77.089281,
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
    "caption": "Mayur garden — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1486744368",
    "name": "Tikona Park",
    "category": "Park",
    "centroidLat": 28.635828,
    "centroidLon": 77.283354,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Tikona Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1486746020",
    "name": "Patel Park",
    "category": "Park",
    "centroidLat": 28.635372,
    "centroidLon": 77.281205,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "Patel Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1490066649",
    "name": "Guru Tegh Bahadur Park",
    "category": "Park",
    "centroidLat": 28.644205,
    "centroidLon": 77.137368,
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
    "caption": "Guru Tegh Bahadur Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1490475914",
    "name": "Sardar Jassa Singh Ramgarhia Park",
    "category": "Park",
    "centroidLat": 28.631866,
    "centroidLon": 77.122648,
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
    "caption": "Sardar Jassa Singh Ramgarhia Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1491394004",
    "name": "Deerwood Park",
    "category": "Park",
    "centroidLat": 28.41499,
    "centroidLon": 77.063341,
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
    "caption": "Deerwood Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1491394560",
    "name": "DeerWood Park - 2",
    "category": "Park",
    "centroidLat": 28.413889,
    "centroidLon": 77.062275,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
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
    "caption": "DeerWood Park - 2 — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1494117348",
    "name": "Charti Lal Goel Heritage Park",
    "category": "Park",
    "centroidLat": 28.652662,
    "centroidLon": 77.236004,
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
    "caption": "Charti Lal Goel Heritage Park — park in Delhi"
  },
  {
    "osmType": "way",
    "osmId": "1498977868",
    "name": "Bharat Ratna Dr. Bhimrao Ramji Ambedkar Park",
    "category": "Park",
    "centroidLat": 28.580543,
    "centroidLon": 77.264969,
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
    "caption": "Bharat Ratna Dr. Bhimrao Ramji Ambedkar Park — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "2090251",
    "name": "Central Ridge Reserve Forest",
    "category": "Nature Reserve",
    "centroidLat": 28.619573,
    "centroidLon": 77.18049,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "boundary": "administrative",
      "leisure": "nature_reserve"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=private",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Central Ridge Reserve Forest — nature reserve in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "3728047",
    "name": "Jahanpanah City Forest",
    "category": "Forest",
    "centroidLat": 28.527536,
    "centroidLon": 77.243942,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "boundary": "administrative",
      "landuse": "forest"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=private",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jahanpanah City Forest — forest in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "3760983",
    "name": "Sanjay Van",
    "category": "Forest",
    "centroidLat": 28.532361,
    "centroidLon": 77.179356,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "boundary": "administrative",
      "landuse": "forest"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=private",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sanjay Van — forest in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "3775188",
    "name": "City Forest",
    "category": "Forest",
    "centroidLat": 28.515434,
    "centroidLon": 77.211111,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "boundary": "administrative",
      "landuse": "forest"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=private",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "City Forest — forest in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "6013399",
    "name": "Deer Park",
    "category": "Park",
    "centroidLat": 28.556701,
    "centroidLon": 77.194326,
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
    "caption": "Deer Park — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "6314365",
    "name": "play ground",
    "category": "Park",
    "centroidLat": 28.586496,
    "centroidLon": 77.162898,
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
    "caption": "play ground — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "8249578",
    "name": "Sports Park",
    "category": "Park",
    "centroidLat": 28.705203,
    "centroidLon": 77.125051,
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
    "caption": "Sports Park — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "8860116",
    "name": "Hauz Khas Forest",
    "category": "Forest",
    "centroidLat": 28.547455,
    "centroidLon": 77.23538,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "forest",
      "operator": "Delhi Development Authority Park"
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
    "caption": "Hauz Khas Forest — forest in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "9730409",
    "name": "Shanti Park",
    "category": "Park",
    "centroidLat": 28.592745,
    "centroidLon": 77.188339,
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
    "caption": "Shanti Park — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "15900965",
    "name": "Nescii Lawn",
    "category": "Park",
    "centroidLat": 28.609629,
    "centroidLon": 77.035807,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "NSUT"
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
    "caption": "Nescii Lawn — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "16496830",
    "name": "Shree Atal Park",
    "category": "Park",
    "centroidLat": 28.553903,
    "centroidLon": 77.234788,
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
    "caption": "Shree Atal Park — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "19179655",
    "name": "San Martin Park",
    "category": "Park",
    "centroidLat": 28.590473,
    "centroidLon": 77.175092,
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
    "caption": "San Martin Park — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "19427735",
    "name": "Centennial Arboretum",
    "category": "Garden",
    "centroidLat": 28.690332,
    "centroidLon": 77.213542,
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
    "caption": "Centennial Arboretum — garden in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "19667909",
    "name": "Chakkarpur Wazirabad Bundh",
    "category": "Park",
    "centroidLat": 28.451852,
    "centroidLon": 77.091228,
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
    "caption": "Chakkarpur Wazirabad Bundh — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "19797903",
    "name": "Aravali Creek",
    "category": "Park",
    "centroidLat": 28.462987,
    "centroidLon": 77.098836,
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
    "caption": "Aravali Creek — park in Delhi"
  },
  {
    "osmType": "relation",
    "osmId": "20247822",
    "name": "Rose Garden",
    "category": "Park",
    "centroidLat": 28.458702,
    "centroidLon": 76.996277,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "private",
      "leisure": "park",
      "operator": "Govt. College, Sector-9"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=private",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rose Garden — park in Delhi"
  }
];
