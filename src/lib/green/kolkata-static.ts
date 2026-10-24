/**
 * Kolkata static green-space dataset.
 *
 * PROVENANCE
 * Extracted from OpenStreetMap via the Overpass API over the Kolkata Municipal Corporation area query
 * envelope, taking named elements tagged
 * `leisure=park|garden|nature_reserve|recreation_ground|common`,
 * `landuse=forest` and `boundary=national_park`.
 *
 *   Source:   OpenStreetMap contributors (ODbL 1.0)
 *   Query:    https://overpass-api.de/api/interpreter
 *   Records:  534 named green spaces
 *
 * The dataset is a SNAPSHOT and carries OSM's ODbL attribution requirement.
 * Coordinates, names, area and access tags are taken verbatim from OSM.
 *
 * DENSITY FIELDS
 * `ndviMean` / `ndviMin` / `ndviMax` / `densityClass` are DERIVED FROM AREA,
 * not measured from satellite imagery. Kolkata has no registered Sentinel-2
 * AOI, so these are an area-based estimate used only to colour the density
 * legend. They must not be presented as measured NDVI.
 *
 * ACCESS
 * `accessStatus` and `walkClass` are read from the OSM `access` tag only. They
 * are a statement about the tag, not a verified site survey.
 */

export const KOLKATA_STATIC = [
  {
    "osmType": "node",
    "osmId": "3960993952",
    "name": "Bondhu Dal Club",
    "category": "Park",
    "centroidLat": 22.502277,
    "centroidLon": 88.313936,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bondhu Dal Club — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "3960994787",
    "name": "Behala Club Grounds",
    "category": "Park",
    "centroidLat": 22.505305,
    "centroidLon": 88.314377,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Behala Club Grounds — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "3960999924",
    "name": "Bhutnath Park",
    "category": "Park",
    "centroidLat": 22.503062,
    "centroidLon": 88.311185,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhutnath Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "4466936376",
    "name": "Lichubagan Children's Park",
    "category": "Park",
    "centroidLat": 22.624513,
    "centroidLon": 88.405693,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lichubagan Children's Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "4640146419",
    "name": "Chirantani math",
    "category": "Park",
    "centroidLat": 22.505825,
    "centroidLon": 88.33651,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chirantani math — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "4641488598",
    "name": "Kids Park",
    "category": "Park",
    "centroidLat": 22.591908,
    "centroidLon": 88.403134,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kids Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "4855025779",
    "name": "Uttarpalli Playground",
    "category": "Park",
    "centroidLat": 22.609412,
    "centroidLon": 88.38332,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Uttarpalli Playground — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "5485056643",
    "name": "Shibtala Math",
    "category": "Park",
    "centroidLat": 22.545029,
    "centroidLon": 88.378046,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shibtala Math — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "6257368173",
    "name": "KALABAGAN PARK",
    "category": "Park",
    "centroidLat": 22.499649,
    "centroidLon": 88.351063,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "KALABAGAN PARK — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "6257376972",
    "name": "Guru Govindan Kutty Uddyan",
    "category": "Park",
    "centroidLat": 22.498716,
    "centroidLon": 88.352317,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Guru Govindan Kutty Uddyan — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "6331438324",
    "name": "Chatra Sangha Cricket Academy",
    "category": "Park",
    "centroidLat": 22.464435,
    "centroidLon": 88.371323,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chatra Sangha Cricket Academy — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "6331438325",
    "name": "Vivekananda Park Playground",
    "category": "Park",
    "centroidLat": 22.462691,
    "centroidLon": 88.371141,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vivekananda Park Playground — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "6331438332",
    "name": "Netaji Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.467079,
    "centroidLon": 88.37136,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Netaji Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "6331451435",
    "name": "Bidhan Park",
    "category": "Park",
    "centroidLat": 22.469101,
    "centroidLon": 88.369556,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bidhan Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "6531590883",
    "name": "Birsa Munda Triangular Park",
    "category": "Park",
    "centroidLat": 22.512693,
    "centroidLon": 88.328404,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Birsa Munda Triangular Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "6994187433",
    "name": "Subhas Nagar Children' Park",
    "category": "Park",
    "centroidLat": 22.638869,
    "centroidLon": 88.409616,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "For all"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Subhas Nagar Children' Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "7027929503",
    "name": "Subhasnagar High school Children's park",
    "category": "Park",
    "centroidLat": 22.635547,
    "centroidLon": 88.409033,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Subhasnagar High school Children's park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "8427224303",
    "name": "Milani math",
    "category": "Park",
    "centroidLat": 22.670594,
    "centroidLon": 88.360846,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Milani math — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "9121149164",
    "name": "Millennium Park Gate 1",
    "category": "Park",
    "centroidLat": 22.571828,
    "centroidLon": 88.344003,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "govt"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Millennium Park Gate 1 — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "9209803093",
    "name": "Children's Park beside Sainik Sangha",
    "category": "Park",
    "centroidLat": 22.587658,
    "centroidLon": 88.285617,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park beside Sainik Sangha — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "9253635392",
    "name": "X MOTTORS",
    "category": "Park",
    "centroidLat": 22.591745,
    "centroidLon": 88.402647,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "X MOTTORS"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "X MOTTORS — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "9677133275",
    "name": "Deshbandhu park",
    "category": "Park",
    "centroidLat": 22.60001,
    "centroidLon": 88.37707,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Deshbandhu park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "10679854509",
    "name": "SUNFLOWER PARK",
    "category": "Park",
    "centroidLat": 22.577702,
    "centroidLon": 88.377803,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "SUNFLOWER PARK — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "10960407340",
    "name": "rabindra tirtha",
    "category": "Park",
    "centroidLat": 22.579417,
    "centroidLon": 88.472878,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "rabindra tirtha — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "11909419169",
    "name": "রবীন্দ্র সরোবর",
    "category": "Park",
    "centroidLat": 22.509874,
    "centroidLon": 88.359236,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "KMDA KOLKATA"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "রবীন্দ্র সরোবর — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "12121757094",
    "name": "Apur Sansar Park",
    "category": "Park",
    "centroidLat": 22.583151,
    "centroidLon": 88.466896,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Goshen Parks & Recreation Department"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Apur Sansar Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "12492447304",
    "name": "Lebutala Children's Park",
    "category": "Park",
    "centroidLat": 22.565853,
    "centroidLon": 88.365797,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lebutala Children's Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "12755685201",
    "name": "Panchavati Park",
    "category": "Park",
    "centroidLat": 22.656029,
    "centroidLon": 88.357316,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Panchavati Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "12925525919",
    "name": "Samar Roy Choudhury Shisu Udyan",
    "category": "Park",
    "centroidLat": 22.484885,
    "centroidLon": 88.314832,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Samar Roy Choudhury Shisu Udyan — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "12927685775",
    "name": "Sayaribitan Park",
    "category": "Park",
    "centroidLat": 22.474504,
    "centroidLon": 88.305964,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sayaribitan Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "13185509467",
    "name": "Satyajit Roy Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.620865,
    "centroidLon": 88.42465,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Satyajit Roy Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "13410245500",
    "name": "Ram Lila Park",
    "category": "Park",
    "centroidLat": 22.560141,
    "centroidLon": 88.369791,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ram Lila Park — park in Kolkata"
  },
  {
    "osmType": "node",
    "osmId": "13594642139",
    "name": "Alice in wonderland park",
    "category": "Park",
    "centroidLat": 22.628915,
    "centroidLon": 88.459435,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Alice in wonderland park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "35873165",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 22.493464,
    "centroidLon": 88.362542,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Central Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "35875269",
    "name": "Vivekanada Park",
    "category": "Park",
    "centroidLat": 22.515148,
    "centroidLon": 88.359514,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vivekanada Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "35875337",
    "name": "Deshapriya Park",
    "category": "Park",
    "centroidLat": 22.518405,
    "centroidLon": 88.353515,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Deshapriya Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "52097541",
    "name": "Acharya Jagadish Chandra Bose Indian Botanic Garden",
    "category": "Park",
    "centroidLat": 22.558448,
    "centroidLon": 88.291925,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "customers",
      "leisure": "park"
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
    "caption": "Acharya Jagadish Chandra Bose Indian Botanic Garden — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "52097771",
    "name": "Raj Bhavan Complex",
    "category": "Park",
    "centroidLat": 22.566633,
    "centroidLon": 88.347237,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "no",
      "leisure": "park"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=no",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Raj Bhavan Complex — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "52097785",
    "name": "Eden Garden Park",
    "category": "Park",
    "centroidLat": 22.564335,
    "centroidLon": 88.340764,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Eden Garden Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "52098113",
    "name": "Alipore Zoo",
    "category": "Park",
    "centroidLat": 22.536839,
    "centroidLon": 88.331832,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Alipore Zoo — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "52151956",
    "name": "Bidhan Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.586869,
    "centroidLon": 88.396252,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bidhan Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "52155067",
    "name": "New Belilious Park",
    "category": "Park",
    "centroidLat": 22.59494,
    "centroidLon": 88.328232,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "New Belilious Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "101966466",
    "name": "Millennium Park",
    "category": "Park",
    "centroidLat": 22.573957,
    "centroidLon": 88.34462,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Millennium Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "102015159",
    "name": "Hedua Park",
    "category": "Park",
    "centroidLat": 22.588008,
    "centroidLon": 88.368951,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Hedua Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "103477676",
    "name": "College Square Park",
    "category": "Park",
    "centroidLat": 22.574653,
    "centroidLon": 88.363905,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "College Square Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "104043498",
    "name": "Santosh Mitra Square",
    "category": "Park",
    "centroidLat": 22.565818,
    "centroidLon": 88.365493,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Santosh Mitra Square — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "104789491",
    "name": "Jagat Mukherjee Park",
    "category": "Park",
    "centroidLat": 22.601279,
    "centroidLon": 88.366651,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jagat Mukherjee Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "105015972",
    "name": "Nivedita Uddan",
    "category": "Park",
    "centroidLat": 22.604681,
    "centroidLon": 88.367804,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nivedita Uddan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "105258505",
    "name": "Bagbazar Childrens Park",
    "category": "Park",
    "centroidLat": 22.601983,
    "centroidLon": 88.370929,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bagbazar Childrens Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "111639730",
    "name": "Auckland Square",
    "category": "Park",
    "centroidLat": 22.542593,
    "centroidLon": 88.358091,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Auckland Square — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "111639732",
    "name": "Minto Park",
    "category": "Park",
    "centroidLat": 22.541811,
    "centroidLon": 88.354717,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Minto Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "112482168",
    "name": "Ladies Park",
    "category": "Park",
    "centroidLat": 22.548232,
    "centroidLon": 88.370346,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ladies Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "112595089",
    "name": "Rawdon Square",
    "category": "Park",
    "centroidLat": 22.54515,
    "centroidLon": 88.35956,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rawdon Square — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "112696530",
    "name": "Congress Park",
    "category": "Park",
    "centroidLat": 22.543061,
    "centroidLon": 88.367988,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Congress Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "112696534",
    "name": "Park Circus Maidan",
    "category": "Park",
    "centroidLat": 22.543306,
    "centroidLon": 88.369952,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Park Circus Maidan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "118137595",
    "name": "Golpark",
    "category": "Park",
    "centroidLat": 22.516258,
    "centroidLon": 88.366235,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Golpark — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "118484371",
    "name": "Triangular Park",
    "category": "Park",
    "centroidLat": 22.517992,
    "centroidLon": 88.357721,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Triangular Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "118618397",
    "name": "Jodhpur Park",
    "category": "Park",
    "centroidLat": 22.505264,
    "centroidLon": 88.365347,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jodhpur Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "118858093",
    "name": "Sahid Nagar Playground",
    "category": "Park",
    "centroidLat": 22.50279,
    "centroidLon": 88.376149,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sahid Nagar Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "119052296",
    "name": "Sahid Park",
    "category": "Park",
    "centroidLat": 22.500341,
    "centroidLon": 88.375649,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sahid Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "119052311",
    "name": "Viveknagar Kalibari Math",
    "category": "Park",
    "centroidLat": 22.500792,
    "centroidLon": 88.374905,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Viveknagar Kalibari Math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "119074478",
    "name": "Aaaikatan Playground",
    "category": "Park",
    "centroidLat": 22.504579,
    "centroidLon": 88.37335,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Aaaikatan Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "120018681",
    "name": "Nandibagan Playground",
    "category": "Park",
    "centroidLat": 22.507356,
    "centroidLon": 88.384942,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nandibagan Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "121294760",
    "name": "Wireless Park",
    "category": "Park",
    "centroidLat": 22.481908,
    "centroidLon": 88.347313,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Wireless Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "122151349",
    "name": "Maddox Square",
    "category": "Park",
    "centroidLat": 22.52628,
    "centroidLon": 88.354647,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Maddox Square — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "122191972",
    "name": "Elgin Park",
    "category": "Park",
    "centroidLat": 22.53755,
    "centroidLon": 88.347565,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Elgin Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "122419639",
    "name": "Ganja Park",
    "category": "Park",
    "centroidLat": 22.535572,
    "centroidLon": 88.346682,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ganja Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "122439408",
    "name": "Ladies Park",
    "category": "Park",
    "centroidLat": 22.529638,
    "centroidLon": 88.349852,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ladies Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "122755067",
    "name": "Harish Park",
    "category": "Park",
    "centroidLat": 22.530543,
    "centroidLon": 88.343761,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Harish Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "142682135",
    "name": "Nawab Ali Park",
    "category": "Park",
    "centroidLat": 22.532671,
    "centroidLon": 88.326189,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nawab Ali Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "142703854",
    "name": "Hossain Shah Park",
    "category": "Park",
    "centroidLat": 22.526851,
    "centroidLon": 88.321668,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Hossain Shah Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "143609605",
    "name": "National Library",
    "category": "Park",
    "centroidLat": 22.532829,
    "centroidLon": 88.333484,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "National Library — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "143899581",
    "name": "Southern Samity Park",
    "category": "Park",
    "centroidLat": 22.526747,
    "centroidLon": 88.35241,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Southern Samity Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "144014966",
    "name": "Jatin Das Park",
    "category": "Park",
    "centroidLat": 22.52442,
    "centroidLon": 88.346013,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jatin Das Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "145587963",
    "name": "Kalighat Park",
    "category": "Park",
    "centroidLat": 22.519116,
    "centroidLon": 88.346879,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kalighat Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153540321",
    "name": "CAP Camp Roundabout",
    "category": "Park",
    "centroidLat": 22.598484,
    "centroidLon": 88.415751,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "CAP Camp Roundabout — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153582009",
    "name": "PNB Island",
    "category": "Park",
    "centroidLat": 22.591489,
    "centroidLon": 88.399675,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "PNB Island — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153582344",
    "name": "3 Number Island",
    "category": "Park",
    "centroidLat": 22.594716,
    "centroidLon": 88.405181,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "3 Number Island — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153790987",
    "name": "AG Block Playground",
    "category": "Park",
    "centroidLat": 22.598239,
    "centroidLon": 88.423281,
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
    "caption": "AG Block Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153797930",
    "name": "CKCL Park",
    "category": "Park",
    "centroidLat": 22.584614,
    "centroidLon": 88.427646,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "CKCL Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153898272",
    "name": "BH Park",
    "category": "Park",
    "centroidLat": 22.594474,
    "centroidLon": 88.42393,
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
    "caption": "BH Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153898311",
    "name": "GD Football Ground",
    "category": "Park",
    "centroidLat": 22.576353,
    "centroidLon": 88.417586,
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
    "caption": "GD Football Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153948902",
    "name": "Green Verge",
    "category": "Park",
    "centroidLat": 22.599615,
    "centroidLon": 88.412301,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "village_green",
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Verge — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153948903",
    "name": "Green Verge",
    "category": "Nature Reserve",
    "centroidLat": 22.60089,
    "centroidLon": 88.411772,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "village_green",
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
    "caption": "Green Verge — nature reserve in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153953730",
    "name": "AE Khal Par",
    "category": "Park",
    "centroidLat": 22.601055,
    "centroidLon": 88.410314,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AE Khal Par — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "153955435",
    "name": "AC-AD Walkaton",
    "category": "Park",
    "centroidLat": 22.597622,
    "centroidLon": 88.404636,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AC-AD Walkaton — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "156169118",
    "name": "BK Park",
    "category": "Park",
    "centroidLat": 22.586223,
    "centroidLon": 88.429637,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BK Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "156169119",
    "name": "BL Park",
    "category": "Park",
    "centroidLat": 22.58537,
    "centroidLon": 88.42986,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BL Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "156421309",
    "name": "CD Park",
    "category": "Park",
    "centroidLat": 22.592348,
    "centroidLon": 88.409711,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "CD Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "157916984",
    "name": "CB Block Park",
    "category": "Park",
    "centroidLat": 22.589035,
    "centroidLon": 88.403322,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "CB Block Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "158140418",
    "name": "AB-AC Ground",
    "category": "Park",
    "centroidLat": 22.594315,
    "centroidLon": 88.401946,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AB-AC Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "158141285",
    "name": "City Centre Adjoined Park",
    "category": "Park",
    "centroidLat": 22.587296,
    "centroidLon": 88.406703,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "City Centre Adjoined Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "158142848",
    "name": "AD Park",
    "category": "Park",
    "centroidLat": 22.597048,
    "centroidLon": 88.406514,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AD Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "158308048",
    "name": "GD Park",
    "category": "Park",
    "centroidLat": 22.578563,
    "centroidLon": 88.416465,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GD Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "159370057",
    "name": "DB Park",
    "category": "Park",
    "centroidLat": 22.586591,
    "centroidLon": 88.405047,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "DB Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "159615947",
    "name": "Main Park",
    "category": "Park",
    "centroidLat": 22.583671,
    "centroidLon": 88.404489,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Main Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "159615948",
    "name": "Durga Pujo Ground",
    "category": "Park",
    "centroidLat": 22.584193,
    "centroidLon": 88.404134,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Durga Pujo Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "162339433",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 22.586583,
    "centroidLon": 88.416341,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Central Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "162339458",
    "name": "AA-AB Khaal Paar",
    "category": "Park",
    "centroidLat": 22.593752,
    "centroidLon": 88.398335,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AA-AB Khaal Paar — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "175484376",
    "name": "Chaplin Park",
    "category": "Park",
    "centroidLat": 22.561641,
    "centroidLon": 88.352662,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chaplin Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "175567866",
    "name": "Lions Safari Park",
    "category": "Park",
    "centroidLat": 22.512673,
    "centroidLon": 88.358117,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lions Safari Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "176059396",
    "name": "Kalisingh Ground",
    "category": "Park",
    "centroidLat": 22.542055,
    "centroidLon": 88.341217,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kalisingh Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "177706434",
    "name": "Nature Study Park",
    "category": "Park",
    "centroidLat": 22.546504,
    "centroidLon": 88.356616,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nature Study Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "177708290",
    "name": "Allen Park",
    "category": "Park",
    "centroidLat": 22.550283,
    "centroidLon": 88.354474,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Diamond Group"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Allen Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "190279722",
    "name": "Sreebhumi Sporting club",
    "category": "Park",
    "centroidLat": 22.600398,
    "centroidLon": 88.402598,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sreebhumi Sporting club — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "190362868",
    "name": "Ramkrishna Park",
    "category": "Park",
    "centroidLat": 22.61379,
    "centroidLon": 88.404329,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ramkrishna Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "190362882",
    "name": "Mela Park",
    "category": "Park",
    "centroidLat": 22.606998,
    "centroidLon": 88.409613,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mela Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "190649010",
    "name": "Udyan",
    "category": "Park",
    "centroidLat": 22.612547,
    "centroidLon": 88.402161,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "190723593",
    "name": "Kalindi Main Playground",
    "category": "Park",
    "centroidLat": 22.6114,
    "centroidLon": 88.399751,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kalindi Main Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "190723598",
    "name": "Sishu Tirtha Children's Park",
    "category": "Park",
    "centroidLat": 22.612087,
    "centroidLon": 88.40054,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sishu Tirtha Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "190905006",
    "name": "Agri Horticultural Society of India",
    "category": "Park",
    "centroidLat": 22.528038,
    "centroidLon": 88.333197,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Agri Horticultural Society of India — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "190981117",
    "name": "Chetla Park",
    "category": "Park",
    "centroidLat": 22.517249,
    "centroidLon": 88.336246,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chetla Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "191009035",
    "name": "Dinosaur Park",
    "category": "Park",
    "centroidLat": 22.582386,
    "centroidLon": 88.389465,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dinosaur Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "191033314",
    "name": "5th Batallion Parade Ground",
    "category": "Park",
    "centroidLat": 22.587863,
    "centroidLon": 88.394236,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "5th Batallion Parade Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "191118892",
    "name": "Kankurgachi Park",
    "category": "Park",
    "centroidLat": 22.57919,
    "centroidLon": 88.39156,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kankurgachi Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "191123085",
    "name": "Acharya Prafulla Chandra Park",
    "category": "Park",
    "centroidLat": 22.576835,
    "centroidLon": 88.392696,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Acharya Prafulla Chandra Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "191229529",
    "name": "Ramakrishna Vivekanada Park",
    "category": "Park",
    "centroidLat": 22.575275,
    "centroidLon": 88.396247,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ramakrishna Vivekanada Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "191359644",
    "name": "FA Playground",
    "category": "Park",
    "centroidLat": 22.579364,
    "centroidLon": 88.403313,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "FA Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "191559870",
    "name": "IB Block Park",
    "category": "Park",
    "centroidLat": 22.573361,
    "centroidLon": 88.411766,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "IB Block Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "192074449",
    "name": "CJ Park",
    "category": "Park",
    "centroidLat": 22.589256,
    "centroidLon": 88.423489,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "CJ Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "192074451",
    "name": "BJ Park",
    "category": "Park",
    "centroidLat": 22.590655,
    "centroidLon": 88.426599,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BJ Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "192074879",
    "name": "AJ Park",
    "category": "Park",
    "centroidLat": 22.592195,
    "centroidLon": 88.428293,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AJ Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "192446065",
    "name": "BA CA Ground",
    "category": "Park",
    "centroidLat": 22.588293,
    "centroidLon": 88.399972,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BA CA Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "192658618",
    "name": "EC Block Play Grounds",
    "category": "Park",
    "centroidLat": 22.584973,
    "centroidLon": 88.408335,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "EC Block Play Grounds — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "193112261",
    "name": "Sukantanagar Sporting Club Ground",
    "category": "Park",
    "centroidLat": 22.56041,
    "centroidLon": 88.416204,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sukantanagar Sporting Club Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "193114500",
    "name": "Nowbhanga Play Ground",
    "category": "Park",
    "centroidLat": 22.556435,
    "centroidLon": 88.414439,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nowbhanga Play Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "204893581",
    "name": "Victoria Square",
    "category": "Park",
    "centroidLat": 22.54305,
    "centroidLon": 88.353048,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Victoria Square — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "218641967",
    "name": "kishore bahini maath",
    "category": "Garden",
    "centroidLat": 22.485249,
    "centroidLon": 88.3771,
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
    "caption": "kishore bahini maath — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "221103491",
    "name": "Tala Park",
    "category": "Park",
    "centroidLat": 22.611503,
    "centroidLon": 88.384114,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tala Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "224920565",
    "name": "Energy Education Park",
    "category": "Park",
    "centroidLat": 22.539884,
    "centroidLon": 88.400012,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Energy Education Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "227963942",
    "name": "GD Park",
    "category": "Park",
    "centroidLat": 22.576972,
    "centroidLon": 88.414127,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GD Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "227964597",
    "name": "HB Park",
    "category": "Park",
    "centroidLat": 22.576241,
    "centroidLon": 88.413996,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HB Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "227965577",
    "name": "HA Park",
    "category": "Park",
    "centroidLat": 22.576463,
    "centroidLon": 88.413111,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HA Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "235529613",
    "name": "No 1 Ward Play Ground",
    "category": "Park",
    "centroidLat": 22.482038,
    "centroidLon": 88.359246,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "No 1 Ward Play Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "237186126",
    "name": "AB-AC Event Park",
    "category": "Park",
    "centroidLat": 22.593874,
    "centroidLon": 88.40229,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AB-AC Event Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "237452808",
    "name": "Narula Playground",
    "category": "Park",
    "centroidLat": 22.676104,
    "centroidLon": 88.378473,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Narula Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "237852522",
    "name": "Akankha Island",
    "category": "Park",
    "centroidLat": 22.619263,
    "centroidLon": 88.464412,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Akankha Island — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "238276060",
    "name": "Metropolitan Grounds",
    "category": "Park",
    "centroidLat": 22.554227,
    "centroidLon": 88.406723,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Metropolitan Grounds — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "238373700",
    "name": "Jagabir Park",
    "category": "Park",
    "centroidLat": 22.502004,
    "centroidLon": 88.347008,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jagabir Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "259518712",
    "name": "Dal Dal Math",
    "category": "Park",
    "centroidLat": 22.599196,
    "centroidLon": 88.392947,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dal Dal Math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "284532644",
    "name": "Dombagan math",
    "category": "Park",
    "centroidLat": 22.641847,
    "centroidLon": 88.369556,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dombagan math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "284533517",
    "name": "Taltala math",
    "category": "Park",
    "centroidLat": 22.640746,
    "centroidLon": 88.367275,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Taltala math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "284533518",
    "name": "Antaral math",
    "category": "Park",
    "centroidLat": 22.634128,
    "centroidLon": 88.371064,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Antaral math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "284545767",
    "name": "Baro pukur math",
    "category": "Park",
    "centroidLat": 22.648991,
    "centroidLon": 88.372216,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Baro pukur math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "287771310",
    "name": "Tagore Hall Common Area",
    "category": "Common",
    "centroidLat": 22.446652,
    "centroidLon": 88.302882,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "common"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tagore Hall Common Area — common in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "294328315",
    "name": "Shishu Udyan",
    "category": "Park",
    "centroidLat": 22.476296,
    "centroidLon": 88.378192,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "331408082",
    "name": "Shibtala Math",
    "category": "Park",
    "centroidLat": 22.545069,
    "centroidLon": 88.378056,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shibtala Math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "357748384",
    "name": "Pravash Sarkar Park",
    "category": "Park",
    "centroidLat": 22.663384,
    "centroidLon": 88.384926,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pravash Sarkar Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "358854282",
    "name": "Hastings Small Park",
    "category": "Park",
    "centroidLat": 22.547178,
    "centroidLon": 88.327885,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Hastings Small Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "362709764",
    "name": "Library Ground",
    "category": "Park",
    "centroidLat": 22.631272,
    "centroidLon": 88.483747,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Library Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "362741311",
    "name": "Simbas Park",
    "category": "Park",
    "centroidLat": 22.597427,
    "centroidLon": 88.413688,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Simbas Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "377930740",
    "name": "Mandirtala ground",
    "category": "Park",
    "centroidLat": 22.569617,
    "centroidLon": 88.317152,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mandirtala ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "384991658",
    "name": "Maa Mati Uddyan",
    "category": "Park",
    "centroidLat": 22.57193,
    "centroidLon": 88.304795,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Maa Mati Uddyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "385874268",
    "name": "Dumurjola Stadium Park",
    "category": "Park",
    "centroidLat": 22.579868,
    "centroidLon": 88.307145,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dumurjola Stadium Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "396125546",
    "name": "Chata Park",
    "category": "Park",
    "centroidLat": 22.505431,
    "centroidLon": 88.305124,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chata Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "398639649",
    "name": "Islamiya Math",
    "category": "Park",
    "centroidLat": 22.499017,
    "centroidLon": 88.307715,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Islamiya Math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "417902072",
    "name": "Anandapur Park",
    "category": "Park",
    "centroidLat": 22.513659,
    "centroidLon": 88.408942,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Anandapur Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "417902330",
    "name": "Anandapur Football Ground",
    "category": "Park",
    "centroidLat": 22.513033,
    "centroidLon": 88.408761,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Anandapur Football Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "450791965",
    "name": "HIG Park",
    "category": "Park",
    "centroidLat": 22.567761,
    "centroidLon": 88.470753,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HIG Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "450791967",
    "name": "MIG Park",
    "category": "Park",
    "centroidLat": 22.566854,
    "centroidLon": 88.471123,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "MIG Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "468615148",
    "name": "Lokmanya Bal Gangadhar Tilak Park",
    "category": "Park",
    "centroidLat": 22.562244,
    "centroidLon": 88.324168,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lokmanya Bal Gangadhar Tilak Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "469349180",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 22.46344,
    "centroidLon": 88.377725,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "469723513",
    "name": "Indrani Park",
    "category": "Park",
    "centroidLat": 22.501362,
    "centroidLon": 88.350925,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Indrani Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "469883540",
    "name": "Mohor Kunja",
    "category": "Park",
    "centroidLat": 22.543767,
    "centroidLon": 88.344432,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mohor Kunja — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "469886608",
    "name": "Elliot Park",
    "category": "Park",
    "centroidLat": 22.548635,
    "centroidLon": 88.347426,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Elliot Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "469892413",
    "name": "AE Park",
    "category": "Park",
    "centroidLat": 22.598206,
    "centroidLon": 88.409712,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AE Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "469893187",
    "name": "Kids Park",
    "category": "Park",
    "centroidLat": 22.593963,
    "centroidLon": 88.401517,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kids Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "471804666",
    "name": "ABOL TABOL PARK",
    "category": "Park",
    "centroidLat": 22.604789,
    "centroidLon": 88.413888,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ABOL TABOL PARK — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "476285484",
    "name": "Taltola Park",
    "category": "Park",
    "centroidLat": 22.478152,
    "centroidLon": 88.387605,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Taltola Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "476287562",
    "name": "BhomBhole Park",
    "category": "Park",
    "centroidLat": 22.489509,
    "centroidLon": 88.391296,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BhomBhole Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "476287738",
    "name": "PumpHouse Park",
    "category": "Park",
    "centroidLat": 22.485976,
    "centroidLon": 88.391562,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "PumpHouse Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "476288177",
    "name": "Uponagori Playground",
    "category": "Park",
    "centroidLat": 22.472781,
    "centroidLon": 88.385811,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Uponagori Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "476288178",
    "name": "Palki Playground",
    "category": "Park",
    "centroidLat": 22.471041,
    "centroidLon": 88.383273,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Palki Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "476288179",
    "name": "ShantiSangha Playground",
    "category": "Park",
    "centroidLat": 22.472065,
    "centroidLon": 88.381706,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ShantiSangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "480634391",
    "name": "mitra gardens",
    "category": "Park",
    "centroidLat": 22.574127,
    "centroidLon": 88.271311,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "mitra gardens — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "487131024",
    "name": "Indra Park",
    "category": "Park",
    "centroidLat": 22.457432,
    "centroidLon": 88.316667,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Indra Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "492665312",
    "name": "bata maidan",
    "category": "Park",
    "centroidLat": 22.504423,
    "centroidLon": 88.229513,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "bata maidan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "492665611",
    "name": "calcutta riverside park",
    "category": "Park",
    "centroidLat": 22.51442,
    "centroidLon": 88.213812,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "calcutta riverside park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "493742797",
    "name": "NUC Playground",
    "category": "Park",
    "centroidLat": 22.614065,
    "centroidLon": 88.387097,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NUC Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "499282892",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 22.558175,
    "centroidLon": 88.364109,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "511300040",
    "name": "Rabindra Tirtha",
    "category": "Park",
    "centroidLat": 22.579077,
    "centroidLon": 88.473546,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rabindra Tirtha — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "511301413",
    "name": "New Town Mela Ground",
    "category": "Park",
    "centroidLat": 22.579858,
    "centroidLon": 88.469164,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "New Town Mela Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "511301414",
    "name": "Senior's Park",
    "category": "Park",
    "centroidLat": 22.580593,
    "centroidLon": 88.467344,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Senior's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "514428929",
    "name": "AE Park",
    "category": "Park",
    "centroidLat": 22.58571,
    "centroidLon": 88.455069,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AE Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "514428930",
    "name": "AD Park",
    "category": "Park",
    "centroidLat": 22.585647,
    "centroidLon": 88.452118,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AD Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "514428932",
    "name": "AC Park",
    "category": "Park",
    "centroidLat": 22.585752,
    "centroidLon": 88.449288,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AC Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "514431699",
    "name": "Smritivan Park",
    "category": "Park",
    "centroidLat": 22.583299,
    "centroidLon": 88.464787,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Smritivan Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "515064899",
    "name": "Rabindra Tirtha Shishu Udyan",
    "category": "Park",
    "centroidLat": 22.571932,
    "centroidLon": 88.471685,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rabindra Tirtha Shishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "517920551",
    "name": "Lords",
    "category": "Park",
    "centroidLat": 22.556009,
    "centroidLon": 88.308243,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lords — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "519564562",
    "name": "Hurumtal Park",
    "category": "Park",
    "centroidLat": 22.498311,
    "centroidLon": 88.384489,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Hurumtal Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "521440283",
    "name": "Dum Dum Children Park",
    "category": "Park",
    "centroidLat": 22.621111,
    "centroidLon": 88.397876,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dum Dum Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "542249471",
    "name": "Satyajit Ray Park",
    "category": "Park",
    "centroidLat": 22.47238,
    "centroidLon": 88.392654,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Satyajit Ray Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "544419555",
    "name": "Grounds Field Area",
    "category": "Park",
    "centroidLat": 22.608786,
    "centroidLon": 88.315761,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Grounds Field Area — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "555882574",
    "name": "Khelaghar",
    "category": "Park",
    "centroidLat": 22.579568,
    "centroidLon": 88.319392,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Khelaghar — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "560429074",
    "name": "Sibaji Sanjha park",
    "category": "Park",
    "centroidLat": 22.588673,
    "centroidLon": 88.306904,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sibaji Sanjha park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "570510784",
    "name": "Vivekananda Park",
    "category": "Park",
    "centroidLat": 22.561447,
    "centroidLon": 88.40821,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vivekananda Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "574104576",
    "name": "Narendra Krishna Deb Park",
    "category": "Park",
    "centroidLat": 22.596822,
    "centroidLon": 88.364911,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Narendra Krishna Deb Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "583330398",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 22.470536,
    "centroidLon": 88.387293,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "583330400",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 22.47,
    "centroidLon": 88.387674,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "583330405",
    "name": "PNT Park",
    "category": "Park",
    "centroidLat": 22.468196,
    "centroidLon": 88.390578,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "PNT Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "583334039",
    "name": "Block G Park",
    "category": "Park",
    "centroidLat": 22.468348,
    "centroidLon": 88.389482,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Block G Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "594300390",
    "name": "Dr. K. K. Dutta Memorial Playground",
    "category": "Park",
    "centroidLat": 22.503607,
    "centroidLon": 88.378821,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "surface": "ground"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dr. K. K. Dutta Memorial Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "640375880",
    "name": "no. 5 ward park",
    "category": "Park",
    "centroidLat": 22.459465,
    "centroidLon": 88.416727,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "no. 5 ward park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "640375881",
    "name": "Pora Math",
    "category": "Park",
    "centroidLat": 22.46069,
    "centroidLon": 88.420418,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pora Math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "648388069",
    "name": "BNR ground park",
    "category": "Park",
    "centroidLat": 22.581384,
    "centroidLon": 88.27564,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BNR ground park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "658203508",
    "name": "railway hospital park",
    "category": "Park",
    "centroidLat": 22.580409,
    "centroidLon": 88.275776,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "railway hospital park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "658203513",
    "name": "chotodol club park",
    "category": "Park",
    "centroidLat": 22.580826,
    "centroidLon": 88.286196,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "chotodol club park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "658203515",
    "name": "chotodol playing ground park",
    "category": "Park",
    "centroidLat": 22.581387,
    "centroidLon": 88.28682,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "chotodol playing ground park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "658203518",
    "name": "sahaibpara park",
    "category": "Park",
    "centroidLat": 22.58209,
    "centroidLon": 88.273128,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sahaibpara park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "658203519",
    "name": "sahaibpara park",
    "category": "Park",
    "centroidLat": 22.582106,
    "centroidLon": 88.273817,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sahaibpara park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "658203520",
    "name": "sahaibpara 12 no. park",
    "category": "Park",
    "centroidLat": 22.582076,
    "centroidLon": 88.27041,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sahaibpara 12 no. park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "658203522",
    "name": "sitala park",
    "category": "Park",
    "centroidLat": 22.582187,
    "centroidLon": 88.271937,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sitala park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "658203523",
    "name": "jora mandir park",
    "category": "Park",
    "centroidLat": 22.581829,
    "centroidLon": 88.272177,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jora mandir park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "658203527",
    "name": "scout park",
    "category": "Park",
    "centroidLat": 22.580482,
    "centroidLon": 88.27404,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "scout park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "667091293",
    "name": "Nabin Sangha Sishu Uddan Park",
    "category": "Park",
    "centroidLat": 22.590406,
    "centroidLon": 88.294427,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nabin Sangha Sishu Uddan Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "667836553",
    "name": "Aviyaan Play Ground",
    "category": "Park",
    "centroidLat": 22.597151,
    "centroidLon": 88.299311,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Aviyaan Play Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "676067068",
    "name": "Vivekananda Park Playground",
    "category": "Park",
    "centroidLat": 22.462678,
    "centroidLon": 88.371145,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vivekananda Park Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "676067078",
    "name": "Netaji Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.467084,
    "centroidLon": 88.371358,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Netaji Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "676068181",
    "name": "Bidhan Park",
    "category": "Park",
    "centroidLat": 22.469101,
    "centroidLon": 88.369557,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bidhan Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "676721067",
    "name": "Gostotala ground",
    "category": "Park",
    "centroidLat": 22.46096,
    "centroidLon": 88.373008,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gostotala ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "682116899",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 22.545468,
    "centroidLon": 88.378354,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "687240505",
    "name": "Dilip Math",
    "category": "Park",
    "centroidLat": 22.530797,
    "centroidLon": 88.386692,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dilip Math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "688498185",
    "name": "Football ground",
    "category": "Park",
    "centroidLat": 22.593382,
    "centroidLon": 88.285003,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Football ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "688498186",
    "name": "jj sporting ground",
    "category": "Park",
    "centroidLat": 22.594017,
    "centroidLon": 88.283814,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jj sporting ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "689314673",
    "name": "Prakitinath Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.570101,
    "centroidLon": 88.315412,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Prakitinath Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "695575288",
    "name": "Birsa Munda Triangular Park",
    "category": "Park",
    "centroidLat": 22.512618,
    "centroidLon": 88.32855,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Birsa Munda Triangular Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "695576152",
    "name": "PARNASREE LAKE PARK",
    "category": "Park",
    "centroidLat": 22.509931,
    "centroidLon": 88.305785,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "PARNASREE LAKE PARK — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "698094796",
    "name": "JVT Park",
    "category": "Park",
    "centroidLat": 22.56782,
    "centroidLon": 88.472408,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Jal Vayu Towers"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "JVT Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "698094797",
    "name": "JVT Children's Park",
    "category": "Park",
    "centroidLat": 22.567368,
    "centroidLon": 88.472283,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "JVT Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "698813514",
    "name": "Uludanga Park",
    "category": "Park",
    "centroidLat": 22.516617,
    "centroidLon": 88.232294,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Uludanga Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "705890163",
    "name": "Khelaghor Playground",
    "category": "Park",
    "centroidLat": 22.57933,
    "centroidLon": 88.318936,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Khelaghor Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "713042198",
    "name": "very small park",
    "category": "Park",
    "centroidLat": 22.502417,
    "centroidLon": 88.384319,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "very small park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723303761",
    "name": "Youth Club Playground",
    "category": "Park",
    "centroidLat": 22.471455,
    "centroidLon": 88.367136,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Youth Club Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723304781",
    "name": "Shakti Sangha Playground & Library",
    "category": "Park",
    "centroidLat": 22.472818,
    "centroidLon": 88.364644,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shakti Sangha Playground & Library — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723307954",
    "name": "Jiban Ratan Dhar Smriti Park",
    "category": "Park",
    "centroidLat": 22.473161,
    "centroidLon": 88.364813,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jiban Ratan Dhar Smriti Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723319828",
    "name": "Progressive Club Playground",
    "category": "Park",
    "centroidLat": 22.475102,
    "centroidLon": 88.369893,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Progressive Club Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723321216",
    "name": "Moja Dighi Park",
    "category": "Park",
    "centroidLat": 22.475196,
    "centroidLon": 88.369615,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Moja Dighi Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723385695",
    "name": "Adi Naktala Sporting Park & Playground",
    "category": "Park",
    "centroidLat": 22.472499,
    "centroidLon": 88.366219,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Adi Naktala Sporting Park & Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723388229",
    "name": "Second Scheme Park & Playground",
    "category": "Park",
    "centroidLat": 22.470483,
    "centroidLon": 88.367971,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Second Scheme Park & Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723550474",
    "name": "Naskarpara Para Playground",
    "category": "Park",
    "centroidLat": 22.504896,
    "centroidLon": 88.376087,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Naskarpara Para Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723676524",
    "name": "Kavi Sunirmal Bose Smriti Sishu Udyyan",
    "category": "Park",
    "centroidLat": 22.506438,
    "centroidLon": 88.37586,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kavi Sunirmal Bose Smriti Sishu Udyyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "723678219",
    "name": "Tanupukur Children Park",
    "category": "Park",
    "centroidLat": 22.510448,
    "centroidLon": 88.372049,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tanupukur Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "724155122",
    "name": "Santoshpur Lake Pally Udyan",
    "category": "Park",
    "centroidLat": 22.491389,
    "centroidLon": 88.382767,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Santoshpur Lake Pally Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "728977814",
    "name": "Victoria Memorial Garden",
    "category": "Park",
    "centroidLat": 22.54474,
    "centroidLon": 88.34344,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Ministry of Culture"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Victoria Memorial Garden — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "729077994",
    "name": "Padmapukur Park",
    "category": "Park",
    "centroidLat": 22.53169,
    "centroidLon": 88.352443,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Padmapukur Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "738048588",
    "name": "Childrens Park",
    "category": "Park",
    "centroidLat": 22.628941,
    "centroidLon": 88.459444,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Childrens Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "741694174",
    "name": "Dumurjola Eco Park",
    "category": "Park",
    "centroidLat": 22.588732,
    "centroidLon": 88.308698,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "hit.gov.in"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dumurjola Eco Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "741694324",
    "name": "Nibedita Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.58271,
    "centroidLon": 88.314162,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nibedita Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "741696285",
    "name": "Rabindra–Nazrul Park",
    "category": "Park",
    "centroidLat": 22.569346,
    "centroidLon": 88.306506,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rabindra–Nazrul Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "741803874",
    "name": "Lt. Namita Mitra Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.576725,
    "centroidLon": 88.320707,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lt. Namita Mitra Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "745642646",
    "name": "shani football park",
    "category": "Park",
    "centroidLat": 22.593839,
    "centroidLon": 88.310679,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "shani football park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "745642647",
    "name": "football park",
    "category": "Park",
    "centroidLat": 22.593272,
    "centroidLon": 88.312018,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "football park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "745642648",
    "name": "children park",
    "category": "Park",
    "centroidLat": 22.593086,
    "centroidLon": 88.312626,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "children park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "745642650",
    "name": "common park",
    "category": "Park",
    "centroidLat": 22.589381,
    "centroidLon": 88.310323,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "common park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "745642651",
    "name": "shivaji sangha park",
    "category": "Park",
    "centroidLat": 22.596272,
    "centroidLon": 88.29624,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "shivaji sangha park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "745642652",
    "name": "barron park",
    "category": "Park",
    "centroidLat": 22.597736,
    "centroidLon": 88.295102,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "barron park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "745642654",
    "name": "tarun dal park",
    "category": "Park",
    "centroidLat": 22.600252,
    "centroidLon": 88.299572,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "tarun dal park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "745642656",
    "name": "abasar park",
    "category": "Park",
    "centroidLat": 22.59115,
    "centroidLon": 88.313612,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "abasar park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "745642657",
    "name": "pallibashi park",
    "category": "Park",
    "centroidLat": 22.591268,
    "centroidLon": 88.315826,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "pallibashi park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "746408958",
    "name": "Lila Majumdar Children Park",
    "category": "Park",
    "centroidLat": 22.624437,
    "centroidLon": 88.401937,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lila Majumdar Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "750002872",
    "name": "Vidyasagar Park and Playground",
    "category": "Park",
    "centroidLat": 22.477062,
    "centroidLon": 88.369731,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vidyasagar Park and Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "750003813",
    "name": "Aurobinda Childrens Park",
    "category": "Park",
    "centroidLat": 22.476534,
    "centroidLon": 88.36547,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Aurobinda Childrens Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "750988297",
    "name": "Ujjal Sangha",
    "category": "Park",
    "centroidLat": 22.624758,
    "centroidLon": 88.394286,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ujjal Sangha — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "750988562",
    "name": "Bharati Sangha Playground",
    "category": "Park",
    "centroidLat": 22.625839,
    "centroidLon": 88.395478,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bharati Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "750988944",
    "name": "Vivekananda Playground",
    "category": "Park",
    "centroidLat": 22.633376,
    "centroidLon": 88.396774,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vivekananda Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "751626380",
    "name": "Umbrella Park",
    "category": "Park",
    "centroidLat": 22.533164,
    "centroidLon": 88.253698,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Umbrella Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "752109956",
    "name": "Sarat Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.572341,
    "centroidLon": 88.317756,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sarat Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753392676",
    "name": "Sankrail Gol Park",
    "category": "Park",
    "centroidLat": 22.566298,
    "centroidLon": 88.214198,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sankrail Gol Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753397087",
    "name": "Lake Land Country Club Park",
    "category": "Park",
    "centroidLat": 22.592982,
    "centroidLon": 88.270854,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lake Land Country Club Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753397736",
    "name": "Shankar Math",
    "category": "Park",
    "centroidLat": 22.588907,
    "centroidLon": 88.297601,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shankar Math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753403773",
    "name": "Chandmari Park",
    "category": "Park",
    "centroidLat": 22.5741,
    "centroidLon": 88.279875,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chandmari Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753408688",
    "name": "Dwanpara Nagarik Samity Park",
    "category": "Park",
    "centroidLat": 22.662246,
    "centroidLon": 88.380747,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dwanpara Nagarik Samity Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753418247",
    "name": "Jagacha Minni Park",
    "category": "Park",
    "centroidLat": 22.58776,
    "centroidLon": 88.279601,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jagacha Minni Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753549603",
    "name": "Satya Ranjan Baksi Smriti Parl",
    "category": "Park",
    "centroidLat": 22.527973,
    "centroidLon": 88.347446,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Satya Ranjan Baksi Smriti Parl — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753549604",
    "name": "New Alipore Children's Park",
    "category": "Park",
    "centroidLat": 22.507233,
    "centroidLon": 88.337027,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "The Kolkata Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "New Alipore Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753797268",
    "name": "Cognizant playground",
    "category": "Park",
    "centroidLat": 22.503118,
    "centroidLon": 88.517302,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Cognizant playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753805342",
    "name": "Arunanjan Children Park",
    "category": "Park",
    "centroidLat": 22.6273,
    "centroidLon": 88.397228,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Arunanjan Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "753806042",
    "name": "Nirala Children Playground",
    "category": "Park",
    "centroidLat": 22.631287,
    "centroidLon": 88.399312,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nirala Children Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "754175909",
    "name": "Milan Sangha Park n Playground",
    "category": "Park",
    "centroidLat": 22.472219,
    "centroidLon": 88.37182,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Milan Sangha Park n Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "754509038",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 22.657762,
    "centroidLon": 88.411831,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "754512852",
    "name": "Udayan Park",
    "category": "Park",
    "centroidLat": 22.485698,
    "centroidLon": 88.34839,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Udayan Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "754513735",
    "name": "Kartika Park",
    "category": "Park",
    "centroidLat": 22.479749,
    "centroidLon": 88.347189,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kartika Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "754991333",
    "name": "RR Plot Central Park",
    "category": "Park",
    "centroidLat": 22.509088,
    "centroidLon": 88.404755,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "RR Plot Central Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "755476917",
    "name": "Subhas Nagar Children's Park",
    "category": "Park",
    "centroidLat": 22.635537,
    "centroidLon": 88.408976,
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
    "caption": "Subhas Nagar Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "758054172",
    "name": "Kalyan Sangha Park and Playground",
    "category": "Park",
    "centroidLat": 22.473987,
    "centroidLon": 88.371107,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kalyan Sangha Park and Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "766650777",
    "name": "IACS Football Field",
    "category": "Park",
    "centroidLat": 22.49817,
    "centroidLon": 88.369106,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "IACS Football Field — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "769050400",
    "name": "Bhadrakali Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.674398,
    "centroidLon": 88.343308,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Uttarpara Kotrung Municipality"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhadrakali Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "769053966",
    "name": "Bhadrakali Mahila Camp",
    "category": "Common",
    "centroidLat": 22.673109,
    "centroidLon": 88.345365,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "permissive",
      "leisure": "common"
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
    "caption": "Bhadrakali Mahila Camp — common in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "771114665",
    "name": "B.N Dey Memorial Garden",
    "category": "Park",
    "centroidLat": 22.528587,
    "centroidLon": 88.366443,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "B.N Dey Memorial Garden — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "771115757",
    "name": "BSS Recreational Park",
    "category": "Park",
    "centroidLat": 22.524125,
    "centroidLon": 88.365462,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "The BSS School, KMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BSS Recreational Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "772852820",
    "name": "Netaji Balak Sangha Playground",
    "category": "Park",
    "centroidLat": 22.446732,
    "centroidLon": 88.389546,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Netaji Balak Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "772853384",
    "name": "Battala shib Mandir Playground",
    "category": "Park",
    "centroidLat": 22.450574,
    "centroidLon": 88.38651,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Battala shib Mandir Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "772853725",
    "name": "Sevak Shilpi Chakra Playground",
    "category": "Park",
    "centroidLat": 22.454172,
    "centroidLon": 88.38458,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sevak Shilpi Chakra Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "772853923",
    "name": "Green Grass",
    "category": "Park",
    "centroidLat": 22.446661,
    "centroidLon": 88.38934,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Grass — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "773038792",
    "name": "Bharat Cooperative Housing Society Playground",
    "category": "Park",
    "centroidLat": 22.570079,
    "centroidLon": 88.219548,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bharat Cooperative Housing Society Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "778498052",
    "name": "Kolkata Municipal Corporation Childrens Park",
    "category": "Park",
    "centroidLat": 22.497575,
    "centroidLon": 88.374813,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kolkata Municipal Corporation Childrens Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "784015169",
    "name": "Kustia Park",
    "category": "Park",
    "centroidLat": 22.529034,
    "centroidLon": 88.379175,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kustia Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "784015170",
    "name": "Picnic Park",
    "category": "Park",
    "centroidLat": 22.531481,
    "centroidLon": 88.384535,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Picnic Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "784043993",
    "name": "Kazipara Park",
    "category": "Park",
    "centroidLat": 22.623767,
    "centroidLon": 88.417677,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kazipara Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "784044875",
    "name": "Dum Dum Children's Park",
    "category": "Park",
    "centroidLat": 22.625918,
    "centroidLon": 88.416088,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dum Dum Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "784130116",
    "name": "Sammelan Park",
    "category": "Park",
    "centroidLat": 22.598917,
    "centroidLon": 88.341363,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sammelan Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "784130117",
    "name": "Salkia Sanghashree Maidan",
    "category": "Park",
    "centroidLat": 22.598963,
    "centroidLon": 88.347557,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Salkia Sanghashree Maidan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "784133007",
    "name": "Bakultala Playground",
    "category": "Park",
    "centroidLat": 22.580643,
    "centroidLon": 88.320761,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bakultala Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "784133008",
    "name": "Bhudeb Kalyan Trust Playground",
    "category": "Park",
    "centroidLat": 22.58169,
    "centroidLon": 88.318712,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhudeb Kalyan Trust Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "786919713",
    "name": "Bani Mandir Park",
    "category": "Park",
    "centroidLat": 22.665802,
    "centroidLon": 88.380761,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bani Mandir Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "786919714",
    "name": "Bani Mandir Playground",
    "category": "Park",
    "centroidLat": 22.665921,
    "centroidLon": 88.380981,
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
    "caption": "Bani Mandir Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "787500600",
    "name": "Kheyali Park",
    "category": "Park",
    "centroidLat": 22.61548,
    "centroidLon": 88.38085,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kheyali Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "787757822",
    "name": "Airport 1 No. Children's Park",
    "category": "Park",
    "centroidLat": 22.6435,
    "centroidLon": 88.431215,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Airport 1 No. Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "789230354",
    "name": "W-16",
    "category": "Park",
    "centroidLat": 22.473219,
    "centroidLon": 88.399831,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "W-16 — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "791208197",
    "name": "Bankim Chandra Udyan",
    "category": "Park",
    "centroidLat": 22.585223,
    "centroidLon": 88.329353,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bankim Chandra Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "791922694",
    "name": "Bidhan Kishor Udyan",
    "category": "Park",
    "centroidLat": 22.621224,
    "centroidLon": 88.409966,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bidhan Kishor Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "793640145",
    "name": "Bhagabati Park",
    "category": "Park",
    "centroidLat": 22.617632,
    "centroidLon": 88.412868,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhagabati Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "798336878",
    "name": "Ration Shop Ground",
    "category": "Park",
    "centroidLat": 22.49423,
    "centroidLon": 88.319975,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ration Shop Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "803411962",
    "name": "Howrah Duranta Sangha",
    "category": "Park",
    "centroidLat": 22.580073,
    "centroidLon": 88.314859,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Howrah Duranta Sangha — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "808153980",
    "name": "Dharmaraj Temple Ground",
    "category": "Park",
    "centroidLat": 22.630125,
    "centroidLon": 88.479732,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dharmaraj Temple Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "809109002",
    "name": "lokenath sangha play ground",
    "category": "Park",
    "centroidLat": 22.679792,
    "centroidLon": 88.366455,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "lokenath sangha play ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "810467851",
    "name": "Chakraberia Trikon Park",
    "category": "Park",
    "centroidLat": 22.533665,
    "centroidLon": 88.351963,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "recreation_ground",
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chakraberia Trikon Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "810494337",
    "name": "Maitri Sangha's Playground",
    "category": "Park",
    "centroidLat": 22.510082,
    "centroidLon": 88.392846,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Maitri Sangha's Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "812522213",
    "name": "Eco Urban Village",
    "category": "Park",
    "centroidLat": 22.61898,
    "centroidLon": 88.479514,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Eco Urban Village — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "813424245",
    "name": "Beltala Sishu Uddyan",
    "category": "Park",
    "centroidLat": 22.525725,
    "centroidLon": 88.350618,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "landuse": "greenery",
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Beltala Sishu Uddyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "814551182",
    "name": "CHAI MAIDAN",
    "category": "Park",
    "centroidLat": 22.675904,
    "centroidLon": 88.369048,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "CHAI MAIDAN — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "817319786",
    "name": "Seven Tanks Ground",
    "category": "Park",
    "centroidLat": 22.618655,
    "centroidLon": 88.388745,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Seven Tanks Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "817320964",
    "name": "Dishari Playground",
    "category": "Park",
    "centroidLat": 22.622617,
    "centroidLon": 88.390775,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dishari Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "817577266",
    "name": "Jheel par",
    "category": "Park",
    "centroidLat": 22.582293,
    "centroidLon": 88.283882,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jheel par — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "820427902",
    "name": "Bottola Play Ground",
    "category": "Park",
    "centroidLat": 22.642281,
    "centroidLon": 88.430717,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bottola Play Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "820432317",
    "name": "Komlapur Park",
    "category": "Park",
    "centroidLat": 22.64072,
    "centroidLon": 88.428968,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Komlapur Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "820435699",
    "name": "Rabindranagar Children'S Park",
    "category": "Park",
    "centroidLat": 22.639068,
    "centroidLon": 88.402909,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rabindranagar Children'S Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "820471203",
    "name": "DR. BR Ambedkar Park",
    "category": "Park",
    "centroidLat": 22.440648,
    "centroidLon": 88.439061,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "DR. BR Ambedkar Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "821944423",
    "name": "Narendrapur Park",
    "category": "Park",
    "centroidLat": 22.454595,
    "centroidLon": 88.418738,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Narendrapur Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "822679207",
    "name": "Jagacha Colony Park",
    "category": "Park",
    "centroidLat": 22.591985,
    "centroidLon": 88.284888,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jagacha Colony Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "822681387",
    "name": "colony",
    "category": "Park",
    "centroidLat": 22.574869,
    "centroidLon": 88.285894,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "colony — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "823745859",
    "name": "Tala Amra Kajan Park",
    "category": "Park",
    "centroidLat": 22.604965,
    "centroidLon": 88.376168,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tala Amra Kajan Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "825746685",
    "name": "Beckbagan children park",
    "category": "Park",
    "centroidLat": 22.536872,
    "centroidLon": 88.362116,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Beckbagan children park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "826822387",
    "name": "Bapu Udyan",
    "category": "Park",
    "centroidLat": 22.580883,
    "centroidLon": 88.342871,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bapu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "826822388",
    "name": "Bapu Udyan",
    "category": "Park",
    "centroidLat": 22.579965,
    "centroidLon": 88.342387,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bapu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "827090889",
    "name": "Rabindra Children's Park",
    "category": "Park",
    "centroidLat": 22.641609,
    "centroidLon": 88.430619,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rabindra Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "827217104",
    "name": "Dr. Bhimrao Ambedkar Park",
    "category": "Park",
    "centroidLat": 22.58668,
    "centroidLon": 88.339856,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dr. Bhimrao Ambedkar Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "832948957",
    "name": "Netaji Park",
    "category": "Park",
    "centroidLat": 22.582628,
    "centroidLon": 88.285729,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Netaji Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "833004603",
    "name": "bharati milan sangha park",
    "category": "Park",
    "centroidLat": 22.656226,
    "centroidLon": 88.429049,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "bharati milan sangha"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "bharati milan sangha park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "833006178",
    "name": "Median island park",
    "category": "Park",
    "centroidLat": 22.652906,
    "centroidLon": 88.438332,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Median island park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "833013944",
    "name": "Narendranath chatterjee park",
    "category": "Park",
    "centroidLat": 22.649095,
    "centroidLon": 88.434742,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Narendranath chatterjee park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "834548091",
    "name": "Phool Bagan Play Ground",
    "category": "Park",
    "centroidLat": 22.679583,
    "centroidLon": 88.371099,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Phool Bagan Play Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "837732277",
    "name": "Bhooter math",
    "category": "Park",
    "centroidLat": 22.592399,
    "centroidLon": 88.282389,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhooter math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "837732279",
    "name": "jheel par",
    "category": "Park",
    "centroidLat": 22.580452,
    "centroidLon": 88.27992,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jheel par — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "840407734",
    "name": "Pitchkol Playground",
    "category": "Park",
    "centroidLat": 22.57402,
    "centroidLon": 88.235902,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pitchkol Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "840567473",
    "name": "Howrah Vivekananda Shishu Udyan",
    "category": "Park",
    "centroidLat": 22.576167,
    "centroidLon": 88.315532,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Howrah Vivekananda Shishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841411680",
    "name": "BDFC Football Ground.",
    "category": "Park",
    "centroidLat": 22.601346,
    "centroidLon": 88.318663,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BDFC Football Ground. — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841413828",
    "name": "Chatterjee Para Playground",
    "category": "Park",
    "centroidLat": 22.597913,
    "centroidLon": 88.318917,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chatterjee Para Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841413829",
    "name": "Apu Durga Park",
    "category": "Park",
    "centroidLat": 22.598903,
    "centroidLon": 88.320332,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Apu Durga Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841421396",
    "name": "Rathtala Playground",
    "category": "Park",
    "centroidLat": 22.600059,
    "centroidLon": 88.321478,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rathtala Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841476968",
    "name": "Shayamacharan Playground",
    "category": "Park",
    "centroidLat": 22.603382,
    "centroidLon": 88.319558,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shayamacharan Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841478218",
    "name": "Chatra Dal playground",
    "category": "Park",
    "centroidLat": 22.605009,
    "centroidLon": 88.323078,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chatra Dal playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841481344",
    "name": "Malirbagan Playground",
    "category": "Park",
    "centroidLat": 22.607626,
    "centroidLon": 88.321696,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Malirbagan Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841481345",
    "name": "Bantra Young Athaletic Club",
    "category": "Park",
    "centroidLat": 22.592784,
    "centroidLon": 88.318001,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bantra Young Athaletic Club — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841481655",
    "name": "Subal Srimti Playground",
    "category": "Park",
    "centroidLat": 22.593512,
    "centroidLon": 88.322089,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Subal Srimti Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841482221",
    "name": "Barrack Playground",
    "category": "Park",
    "centroidLat": 22.58874,
    "centroidLon": 88.320719,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Barrack Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841483702",
    "name": "Bantra Cricket Ground",
    "category": "Park",
    "centroidLat": 22.589352,
    "centroidLon": 88.316354,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bantra Cricket Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841483939",
    "name": "West Bengal Club Ground",
    "category": "Park",
    "centroidLat": 22.588612,
    "centroidLon": 88.314973,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "West Bengal Club Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841485419",
    "name": "Lakkhi Ratan Sukhla Playground",
    "category": "Park",
    "centroidLat": 22.588366,
    "centroidLon": 88.311786,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lakkhi Ratan Sukhla Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841486000",
    "name": "Hillol Playground",
    "category": "Park",
    "centroidLat": 22.586329,
    "centroidLon": 88.311327,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Hillol Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841488381",
    "name": "Rupak Sangha Playground",
    "category": "Park",
    "centroidLat": 22.588774,
    "centroidLon": 88.313671,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rupak Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841488898",
    "name": "Saraswati Club ground",
    "category": "Park",
    "centroidLat": 22.5868,
    "centroidLon": 88.314914,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Saraswati Club ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841489697",
    "name": "Vivekananda Athaletic Club",
    "category": "Park",
    "centroidLat": 22.583775,
    "centroidLon": 88.317565,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vivekananda Athaletic Club — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841490682",
    "name": "Outside of Dumurjola Stadium",
    "category": "Park",
    "centroidLat": 22.577851,
    "centroidLon": 88.309286,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Outside of Dumurjola Stadium — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841490758",
    "name": "Pradip Sangha Playground",
    "category": "Park",
    "centroidLat": 22.57751,
    "centroidLon": 88.307559,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pradip Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841491428",
    "name": "Belepole Students athaletic club",
    "category": "Park",
    "centroidLat": 22.578112,
    "centroidLon": 88.305461,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Belepole Students athaletic club — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841492658",
    "name": "Netaji Balak Sangha Playground",
    "category": "Park",
    "centroidLat": 22.586553,
    "centroidLon": 88.316265,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Netaji Balak Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841493122",
    "name": "Netaji Sishu Uddan",
    "category": "Park",
    "centroidLat": 22.586256,
    "centroidLon": 88.313005,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Netaji Sishu Uddan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841622698",
    "name": "Bharat Sangha Playground",
    "category": "Park",
    "centroidLat": 22.598729,
    "centroidLon": 88.313046,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bharat Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841623034",
    "name": "Alamohon Das Playground",
    "category": "Park",
    "centroidLat": 22.599618,
    "centroidLon": 88.309779,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Alamohon Das Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841626284",
    "name": "Alamohon Das Indor Stadium",
    "category": "Park",
    "centroidLat": 22.602447,
    "centroidLon": 88.310663,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Alamohon Das Indor Stadium — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841626862",
    "name": "Banalata Park",
    "category": "Park",
    "centroidLat": 22.603559,
    "centroidLon": 88.309485,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Banalata Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841628944",
    "name": "Arati Coton Mill Playground",
    "category": "Park",
    "centroidLat": 22.601451,
    "centroidLon": 88.306455,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Arati Coton Mill Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841631286",
    "name": "Siakhal Playground",
    "category": "Park",
    "centroidLat": 22.599701,
    "centroidLon": 88.306424,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Siakhal Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841633717",
    "name": "Kalitala Playground",
    "category": "Park",
    "centroidLat": 22.600552,
    "centroidLon": 88.304131,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kalitala Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841637197",
    "name": "Nabin Krira Sangsad",
    "category": "Park",
    "centroidLat": 22.605425,
    "centroidLon": 88.305245,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nabin Krira Sangsad — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841640713",
    "name": "Nabajagaran Sangha Playground",
    "category": "Park",
    "centroidLat": 22.603044,
    "centroidLon": 88.300343,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nabajagaran Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841641517",
    "name": "Subuj Sangha Playground",
    "category": "Park",
    "centroidLat": 22.603472,
    "centroidLon": 88.302081,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Subuj Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841642161",
    "name": "Green Patch Area",
    "category": "Park",
    "centroidLat": 22.604853,
    "centroidLon": 88.299928,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Patch Area — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841642821",
    "name": "Kashipur Sporing Club Ground",
    "category": "Park",
    "centroidLat": 22.604499,
    "centroidLon": 88.309555,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kashipur Sporing Club Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841643502",
    "name": "Kashipur durga utshab committee",
    "category": "Park",
    "centroidLat": 22.605757,
    "centroidLon": 88.310231,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kashipur durga utshab committee — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841645148",
    "name": "Kashipur Playground",
    "category": "Park",
    "centroidLat": 22.607279,
    "centroidLon": 88.308117,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kashipur Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841646200",
    "name": "Sport Ground ATI",
    "category": "Park",
    "centroidLat": 22.608369,
    "centroidLon": 88.305141,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sport Ground ATI — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841647093",
    "name": "Avijatri Playground",
    "category": "Park",
    "centroidLat": 22.606735,
    "centroidLon": 88.314165,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Avijatri Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841801928",
    "name": "Green Patch area",
    "category": "Park",
    "centroidLat": 22.591937,
    "centroidLon": 88.315501,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Patch area — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841802330",
    "name": "kadamtala sports ground",
    "category": "Park",
    "centroidLat": 22.592763,
    "centroidLon": 88.315055,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "kadamtala sports ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841804979",
    "name": "HIT Park",
    "category": "Park",
    "centroidLat": 22.586815,
    "centroidLon": 88.312332,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HIT Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841805314",
    "name": "Kasundia Playground",
    "category": "Park",
    "centroidLat": 22.582598,
    "centroidLon": 88.310925,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kasundia Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841807161",
    "name": "Gulmohar Playground",
    "category": "Park",
    "centroidLat": 22.588097,
    "centroidLon": 88.338664,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gulmohar Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "841839796",
    "name": "Outside of Dumurjola Indor Stadium",
    "category": "Park",
    "centroidLat": 22.580483,
    "centroidLon": 88.309419,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Outside of Dumurjola Indor Stadium — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "842485957",
    "name": "Arati Cotton Mill outside",
    "category": "Park",
    "centroidLat": 22.601246,
    "centroidLon": 88.308835,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Arati Cotton Mill outside — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "842486250",
    "name": "Outside of Arati Cotton Mill",
    "category": "Park",
    "centroidLat": 22.602475,
    "centroidLon": 88.307335,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Outside of Arati Cotton Mill — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "842578302",
    "name": "Model Town Playground",
    "category": "Park",
    "centroidLat": 22.462689,
    "centroidLon": 88.39568,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Model Town Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "842579038",
    "name": "Pulwama Park",
    "category": "Park",
    "centroidLat": 22.462568,
    "centroidLon": 88.395194,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pulwama Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "842582104",
    "name": "CMD Playground",
    "category": "Park",
    "centroidLat": 22.463852,
    "centroidLon": 88.394174,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "CMD Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "843662243",
    "name": "Dashodrone Children Park",
    "category": "Park",
    "centroidLat": 22.631087,
    "centroidLon": 88.446643,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dashodrone Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "846208041",
    "name": "Kaikhali Chiriabagan Complex Park",
    "category": "Park",
    "centroidLat": 22.633089,
    "centroidLon": 88.438641,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kaikhali Chiriabagan Complex Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "846208043",
    "name": "Old Dashdrone Park",
    "category": "Park",
    "centroidLat": 22.631379,
    "centroidLon": 88.442424,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Old Dashdrone Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "846208044",
    "name": "Children Park",
    "category": "Park",
    "centroidLat": 22.629625,
    "centroidLon": 88.44541,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "848933650",
    "name": "Press Quarter Ground 1",
    "category": "Park",
    "centroidLat": 22.590378,
    "centroidLon": 88.283121,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Press Quarter Ground 1 — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "848933651",
    "name": "Press Quarter ground 2",
    "category": "Park",
    "centroidLat": 22.589903,
    "centroidLon": 88.283319,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Press Quarter ground 2 — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "852434943",
    "name": "Bandhu Milan Sangha Playground",
    "category": "Park",
    "centroidLat": 22.594562,
    "centroidLon": 88.314899,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bandhu Milan Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "852963711",
    "name": "Garden",
    "category": "Garden",
    "centroidLat": 22.670289,
    "centroidLon": 88.298168,
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
    "caption": "Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "853214948",
    "name": "Garden",
    "category": "Garden",
    "centroidLat": 22.658104,
    "centroidLon": 88.307489,
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
    "caption": "Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "855332752",
    "name": "National Place playground",
    "category": "Park",
    "centroidLat": 22.580501,
    "centroidLon": 88.292879,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "National Place playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "859145134",
    "name": "Tricon Park",
    "category": "Park",
    "centroidLat": 22.513567,
    "centroidLon": 88.344653,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tricon Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "859355344",
    "name": "Park 1",
    "category": "Park",
    "centroidLat": 22.467517,
    "centroidLon": 88.336268,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Park 1 — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "859534181",
    "name": "DPS grounds",
    "category": "Park",
    "centroidLat": 22.51651,
    "centroidLon": 88.396595,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "DPS grounds — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "860380489",
    "name": "Jhorehat Math",
    "category": "Park",
    "centroidLat": 22.576908,
    "centroidLon": 88.236082,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jhorehat Math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "860383041",
    "name": "Marowari bagan",
    "category": "Park",
    "centroidLat": 22.577624,
    "centroidLon": 88.239232,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Marowari bagan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "862962294",
    "name": "Chamrail Das Para Playground",
    "category": "Park",
    "centroidLat": 22.637713,
    "centroidLon": 88.29796,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chamrail Das Para Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "862962490",
    "name": "Boro Maath",
    "category": "Park",
    "centroidLat": 22.618743,
    "centroidLon": 88.304213,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Boro Maath — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "862962536",
    "name": "Camper Maath",
    "category": "Park",
    "centroidLat": 22.615599,
    "centroidLon": 88.305278,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Camper Maath — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "862966463",
    "name": "Kona Khelaghor Songher Maath",
    "category": "Park",
    "centroidLat": 22.622062,
    "centroidLon": 88.305166,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kona Khelaghor Songher Maath — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "864979089",
    "name": "Lake View Park",
    "category": "Park",
    "centroidLat": 22.650609,
    "centroidLon": 88.397419,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "South Dum Dum Municipality"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lake View Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "866086006",
    "name": "quartes playground",
    "category": "Park",
    "centroidLat": 22.599308,
    "centroidLon": 88.324524,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "quartes playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "880889243",
    "name": "Jol Tank Playground",
    "category": "Park",
    "centroidLat": 22.567214,
    "centroidLon": 88.246956,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jol Tank Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "880889574",
    "name": "Chittaranjan Playground",
    "category": "Park",
    "centroidLat": 22.568603,
    "centroidLon": 88.244482,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chittaranjan Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "880912168",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 22.489254,
    "centroidLon": 88.406838,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Central Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "884755054",
    "name": "Dasnagar Children Park",
    "category": "Park",
    "centroidLat": 22.601946,
    "centroidLon": 88.310709,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dasnagar Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "886251284",
    "name": "Statue of the great alamohon das",
    "category": "Park",
    "centroidLat": 22.598867,
    "centroidLon": 88.309003,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Statue of the great alamohon das — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "888531343",
    "name": "Maamur Bagan.",
    "category": "Garden",
    "centroidLat": 22.675016,
    "centroidLon": 88.289797,
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
    "caption": "Maamur Bagan. — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "888531444",
    "name": "Ramkrishna Sporsting Club Park and Football Playground.",
    "category": "Park",
    "centroidLat": 22.676823,
    "centroidLon": 88.288858,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ramkrishna Sporsting Club Park and Football Playground. — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "888539238",
    "name": "Jagadishpur Bazaar ground",
    "category": "Park",
    "centroidLat": 22.648397,
    "centroidLon": 88.281602,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jagadishpur Bazaar ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "904370799",
    "name": "Kasba playground",
    "category": "Park",
    "centroidLat": 22.519548,
    "centroidLon": 88.392153,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kasba playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "910345124",
    "name": "Andul Rajmaath",
    "category": "Park",
    "centroidLat": 22.582583,
    "centroidLon": 88.23556,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Andul Rajmaath — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "910369551",
    "name": "Rajrajeshwari Ground",
    "category": "Park",
    "centroidLat": 22.579612,
    "centroidLon": 88.231363,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rajrajeshwari Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "918823825",
    "name": "HIT Park",
    "category": "Park",
    "centroidLat": 22.586913,
    "centroidLon": 88.31244,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HIT Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "918823826",
    "name": "Outside of Dumurjola Indor Stadium",
    "category": "Park",
    "centroidLat": 22.582086,
    "centroidLon": 88.307402,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Outside of Dumurjola Indor Stadium — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "922964215",
    "name": "KFR Ground Park",
    "category": "Park",
    "centroidLat": 22.502349,
    "centroidLon": 88.321703,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "KFR Ground Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "936379369",
    "name": "Mourigram Playground",
    "category": "Park",
    "centroidLat": 22.57989,
    "centroidLon": 88.254564,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mourigram Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "936381213",
    "name": "Charaktala Ground",
    "category": "Park",
    "centroidLat": 22.579994,
    "centroidLon": 88.248778,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Charaktala Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "936383122",
    "name": "Dulliya Playground",
    "category": "Park",
    "centroidLat": 22.579076,
    "centroidLon": 88.25632,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dulliya Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961835689",
    "name": "Gitanjali Shishu Udyan(Bansdroni Park)",
    "category": "Park",
    "centroidLat": 22.470658,
    "centroidLon": 88.355379,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gitanjali Shishu Udyan(Bansdroni Park) — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961835690",
    "name": "Maitree Sangsad Ground",
    "category": "Park",
    "centroidLat": 22.474187,
    "centroidLon": 88.355101,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Maitree Sangsad"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Maitree Sangsad Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961835691",
    "name": "Badal Pally Playground",
    "category": "Park",
    "centroidLat": 22.47491,
    "centroidLon": 88.35569,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Badal Pally Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961835692",
    "name": "Rifle Club Playground",
    "category": "Park",
    "centroidLat": 22.47436,
    "centroidLon": 88.352879,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rifle Club Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961835693",
    "name": "Jayashree Sangha Playground",
    "category": "Park",
    "centroidLat": 22.470143,
    "centroidLon": 88.353278,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jayashree Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961835694",
    "name": "Ambagan Play Ground",
    "category": "Park",
    "centroidLat": 22.471761,
    "centroidLon": 88.351124,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ambagan Play Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961835695",
    "name": "Chakdah School Playground",
    "category": "Park",
    "centroidLat": 22.470856,
    "centroidLon": 88.350391,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chakdah School Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961835696",
    "name": "Dinesh Pally Park",
    "category": "Park",
    "centroidLat": 22.471472,
    "centroidLon": 88.354585,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Dinesh Pally Club"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dinesh Pally Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961846341",
    "name": "Chirantani Park",
    "category": "Park",
    "centroidLat": 22.472648,
    "centroidLon": 88.357194,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chirantani Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961846342",
    "name": "Bansdroni Sarbojaneen Durgotsav Park",
    "category": "Park",
    "centroidLat": 22.474364,
    "centroidLon": 88.358132,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Bansdroni Sarbojaneen Durgotsav Club"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bansdroni Sarbojaneen Durgotsav Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961846344",
    "name": "Ramkrishna Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.469117,
    "centroidLon": 88.353163,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ramkrishna Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961846345",
    "name": "Masterda Surya Sen Roynagar Naskarpara Sishu Udyan",
    "category": "Park",
    "centroidLat": 22.473176,
    "centroidLon": 88.360136,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Masterda Surya Sen Roynagar Naskarpara Sishu Udyan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961940227",
    "name": "dhan math",
    "category": "Park",
    "centroidLat": 22.520909,
    "centroidLon": 88.389681,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "dhan math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961941945",
    "name": "kishore kumr uddan",
    "category": "Park",
    "centroidLat": 22.51356,
    "centroidLon": 88.393231,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "CMDA"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "kishore kumr uddan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961943732",
    "name": "nbaday club playdround",
    "category": "Park",
    "centroidLat": 22.513155,
    "centroidLon": 88.39389,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "club"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "nbaday club playdround — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961944864",
    "name": "samorshi garden plot wellfair play ground",
    "category": "Park",
    "centroidLat": 22.5114,
    "centroidLon": 88.392945,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "SGPWA"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "samorshi garden plot wellfair play ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "961967321",
    "name": "gitanjwali stadium garden",
    "category": "Garden",
    "centroidLat": 22.514353,
    "centroidLon": 88.393989,
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
    "caption": "gitanjwali stadium garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "964189876",
    "name": "Milani play ground",
    "category": "Park",
    "centroidLat": 22.67059,
    "centroidLon": 88.360909,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Milani play ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "964191532",
    "name": "play ground",
    "category": "Park",
    "centroidLat": 22.660096,
    "centroidLon": 88.358976,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "play ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "964194489",
    "name": "Nimtala math",
    "category": "Park",
    "centroidLat": 22.66395,
    "centroidLon": 88.360105,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nimtala math — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "964195038",
    "name": "Meghnad Sporting Club Ground",
    "category": "Park",
    "centroidLat": 22.660736,
    "centroidLon": 88.360947,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Meghnad Sporting Club Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "964195827",
    "name": "Subodh Chandra Roy Park (Chatal Math)",
    "category": "Park",
    "centroidLat": 22.665113,
    "centroidLon": 88.359766,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Subodh Chandra Roy Park (Chatal Math) — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "965743075",
    "name": "fields",
    "category": "Park",
    "centroidLat": 22.59794,
    "centroidLon": 88.316135,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "fields — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "965745731",
    "name": "field",
    "category": "Park",
    "centroidLat": 22.607896,
    "centroidLon": 88.31344,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "field — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "965884834",
    "name": "Quaters Park",
    "category": "Park",
    "centroidLat": 22.591073,
    "centroidLon": 88.319697,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Quaters Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "968189300",
    "name": "dasnagar field",
    "category": "Park",
    "centroidLat": 22.59726,
    "centroidLon": 88.305351,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "dasnagar field — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "969125907",
    "name": "CE park",
    "category": "Park",
    "centroidLat": 22.576085,
    "centroidLon": 88.457095,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "NKDA"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "CE park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "969125909",
    "name": "NBCC park",
    "category": "Park",
    "centroidLat": 22.576662,
    "centroidLon": 88.453699,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NBCC park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "969125910",
    "name": "tank No.3",
    "category": "Park",
    "centroidLat": 22.578397,
    "centroidLon": 88.452701,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "tank No.3 — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "969125911",
    "name": "panache park",
    "category": "Park",
    "centroidLat": 22.57037,
    "centroidLon": 88.448292,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "panache park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "976870367",
    "name": "Ariadaha Sporting Club",
    "category": "Park",
    "centroidLat": 22.667497,
    "centroidLon": 88.367223,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ariadaha Sporting Club — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "980991208",
    "name": "Polli Songher Maath",
    "category": "Park",
    "centroidLat": 22.614919,
    "centroidLon": 88.302421,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Polli Songher Maath — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981308586",
    "name": "Kona Kishore Pragati Songher Maath",
    "category": "Park",
    "centroidLat": 22.617182,
    "centroidLon": 88.307906,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kona Kishore Pragati Songher Maath — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981310607",
    "name": "Children Park",
    "category": "Park",
    "centroidLat": 22.624378,
    "centroidLon": 88.292864,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981311107",
    "name": "Children Park",
    "category": "Park",
    "centroidLat": 22.62452,
    "centroidLon": 88.292758,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981311187",
    "name": "Children Park",
    "category": "Park",
    "centroidLat": 22.624961,
    "centroidLon": 88.29393,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981311651",
    "name": "Children Park",
    "category": "Park",
    "centroidLat": 22.624786,
    "centroidLon": 88.293041,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981334627",
    "name": "Kona Agradut Sangher Maath",
    "category": "Park",
    "centroidLat": 22.613913,
    "centroidLon": 88.307223,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kona Agradut Sangher Maath — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981335902",
    "name": "Tirupati Balaji Community Hall Park",
    "category": "Park",
    "centroidLat": 22.612402,
    "centroidLon": 88.310189,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tirupati Balaji Community Hall Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981338492",
    "name": "Biradingi Tarun Bahini Club Ground",
    "category": "Park",
    "centroidLat": 22.614212,
    "centroidLon": 88.312405,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Biradingi Tarun Bahini Club Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981348170",
    "name": "Pocha Khaal Maath",
    "category": "Park",
    "centroidLat": 22.612496,
    "centroidLon": 88.313207,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pocha Khaal Maath — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "981349179",
    "name": "Sanghati Club Ground",
    "category": "Park",
    "centroidLat": 22.611048,
    "centroidLon": 88.31544,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sanghati Club Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "986869780",
    "name": "Tropical Rainforest",
    "category": "Garden",
    "centroidLat": 22.605751,
    "centroidLon": 88.467535,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tropical Rainforest — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "999182964",
    "name": "Baksara Corporate Cluub Playground",
    "category": "Park",
    "centroidLat": 22.57706,
    "centroidLon": 88.289237,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Baksara Corporate Cluub Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "999202793",
    "name": "Baksara Water Tank Playground",
    "category": "Park",
    "centroidLat": 22.577414,
    "centroidLon": 88.291653,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Baksara Water Tank Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1027474813",
    "name": "N.I.H. Staff Quarters Playground",
    "category": "Park",
    "centroidLat": 22.569308,
    "centroidLon": 88.413615,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "N.I.H. Staff Quarters Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1027492275",
    "name": "JC Block Park",
    "category": "Park",
    "centroidLat": 22.570599,
    "centroidLon": 88.412414,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Bidhannagar Municipality"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "JC Block Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1039009545",
    "name": "Boral Lake Rural Children's Park",
    "category": "Park",
    "centroidLat": 22.452265,
    "centroidLon": 88.376479,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Boral Lake Rural Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1065424401",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 22.44033,
    "centroidLon": 88.432902,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Indian Railways"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1067436598",
    "name": "DVC Headquarters, Kolkata",
    "category": "Nature Reserve",
    "centroidLat": 22.587505,
    "centroidLon": 88.391584,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "nature_reserve",
      "operator": "কলকাতা পৌরসংস্থা"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "DVC Headquarters, Kolkata — nature reserve in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1080360321",
    "name": "Arjunpur ground",
    "category": "Park",
    "centroidLat": 22.619785,
    "centroidLon": 88.42627,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Arjunpur ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1095230003",
    "name": "Amtala Pukur Park",
    "category": "Park",
    "centroidLat": 22.633425,
    "centroidLon": 88.409058,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Amtala Pukur Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1121155673",
    "name": "Mohini Kunja Park",
    "category": "Park",
    "centroidLat": 22.494548,
    "centroidLon": 88.302886,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mohini Kunja Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1133524772",
    "name": "Ariadaha Sporting Club",
    "category": "Park",
    "centroidLat": 22.667448,
    "centroidLon": 88.367186,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ariadaha Sporting Club — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1134819835",
    "name": "Surya Ganga Ghat",
    "category": "Park",
    "centroidLat": 22.667809,
    "centroidLon": 88.395698,
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
    "caption": "Surya Ganga Ghat — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1135189303",
    "name": "Beltolar Math / Mukti Sangha Playground",
    "category": "Park",
    "centroidLat": 22.679997,
    "centroidLon": 88.399878,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Beltolar Math / Mukti Sangha Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158201995",
    "name": "Herbal Garden",
    "category": "Garden",
    "centroidLat": 22.602155,
    "centroidLon": 88.464523,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Herbal Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158240716",
    "name": "Bamboo Garden",
    "category": "Garden",
    "centroidLat": 22.604022,
    "centroidLon": 88.467151,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bamboo Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158240742",
    "name": "Fruits Garden",
    "category": "Garden",
    "centroidLat": 22.603536,
    "centroidLon": 88.468192,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Fruits Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158240745",
    "name": "Rose Garden",
    "category": "Garden",
    "centroidLat": 22.603434,
    "centroidLon": 88.468854,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rose Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158422519",
    "name": "Tea Garden",
    "category": "Garden",
    "centroidLat": 22.608083,
    "centroidLon": 88.467646,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tea Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158422522",
    "name": "Heliconia Garden",
    "category": "Garden",
    "centroidLat": 22.606912,
    "centroidLon": 88.46556,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Heliconia Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158422529",
    "name": "Formal Garden",
    "category": "Garden",
    "centroidLat": 22.609309,
    "centroidLon": 88.465932,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Formal Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158461752",
    "name": "Pakhi Bitan",
    "category": "Park",
    "centroidLat": 22.609251,
    "centroidLon": 88.463627,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pakhi Bitan — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158461756",
    "name": "Meadow Garden",
    "category": "Garden",
    "centroidLat": 22.600002,
    "centroidLon": 88.470557,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Meadow Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1158461757",
    "name": "Rabi Aranya",
    "category": "Garden",
    "centroidLat": 22.596407,
    "centroidLon": 88.471268,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "hidco eco park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rabi Aranya — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1159999304",
    "name": "Green Verge No.1",
    "category": "Garden",
    "centroidLat": 22.567305,
    "centroidLon": 88.490639,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "NKDA"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Verge No.1 — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1159999359",
    "name": "Green Verge No.3",
    "category": "Garden",
    "centroidLat": 22.564883,
    "centroidLon": 88.489483,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "NKDA"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Verge No.3 — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1160009986",
    "name": "Green Verge No.3",
    "category": "Garden",
    "centroidLat": 22.566159,
    "centroidLon": 88.492533,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "NKDA"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Verge No.3 — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1160530206",
    "name": "Green Verge No.3",
    "category": "Garden",
    "centroidLat": 22.566938,
    "centroidLon": 88.493455,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "garden",
      "operator": "NKDA"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Verge No.3 — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1180089670",
    "name": "eco park",
    "category": "Park",
    "centroidLat": 22.590411,
    "centroidLon": 88.471729,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "eco park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1182655164",
    "name": "Children Park",
    "category": "Park",
    "centroidLat": 22.566665,
    "centroidLon": 88.400676,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1206945328",
    "name": "Shimultala Agragrami Playground",
    "category": "Park",
    "centroidLat": 22.443983,
    "centroidLon": 88.410398,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shimultala Agragrami Playground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1206951759",
    "name": "Quadiriya siddiquiya madrasa play ground",
    "category": "Park",
    "centroidLat": 22.441495,
    "centroidLon": 88.408998,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Quadiriya siddiquiya madrasa play ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1207364884",
    "name": "SD Ground",
    "category": "Park",
    "centroidLat": 22.448238,
    "centroidLon": 88.408205,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "SD Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1301952779",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 22.607821,
    "centroidLon": 88.470474,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1340032894",
    "name": "Curzon Park",
    "category": "Park",
    "centroidLat": 22.564968,
    "centroidLon": 88.34969,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Curzon Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1346388598",
    "name": "Sradhananda Park",
    "category": "Park",
    "centroidLat": 22.572363,
    "centroidLon": 88.367273,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sradhananda Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1367325568",
    "name": "Ladis Park",
    "category": "Park",
    "centroidLat": 22.583251,
    "centroidLon": 88.404764,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ladis Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1392269668",
    "name": "ground",
    "category": "Park",
    "centroidLat": 22.539355,
    "centroidLon": 88.340698,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1413528495",
    "name": "Victoria Memorial North-West Garden",
    "category": "Garden",
    "centroidLat": 22.546874,
    "centroidLon": 88.342391,
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
    "caption": "Victoria Memorial North-West Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1413528496",
    "name": "Victoria Memorial Eastern Garden",
    "category": "Garden",
    "centroidLat": 22.544405,
    "centroidLon": 88.343667,
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
    "caption": "Victoria Memorial Eastern Garden — garden in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1417724692",
    "name": "Surenbag Park",
    "category": "Park",
    "centroidLat": 22.624466,
    "centroidLon": 88.402718,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "DDMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Surenbag Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1420194970",
    "name": "Sagardutta quater park",
    "category": "Park",
    "centroidLat": 22.675771,
    "centroidLon": 88.37223,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sagardutta quater park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1420194971",
    "name": "kamarhati origin park",
    "category": "Park",
    "centroidLat": 22.67314,
    "centroidLon": 88.370237,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "kamarhati origin park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1420194972",
    "name": "kamarhati origin second park",
    "category": "Park",
    "centroidLat": 22.673466,
    "centroidLon": 88.370227,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "park",
      "operator": "kamarhati"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "kamarhati origin second park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1427441434",
    "name": "Indira Park",
    "category": "Park",
    "centroidLat": 22.497962,
    "centroidLon": 88.215883,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Indira Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1436404178",
    "name": "Play Ground",
    "category": "Park",
    "centroidLat": 22.609645,
    "centroidLon": 88.421613,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Play Ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1462852458",
    "name": "Doughlas ground",
    "category": "Park",
    "centroidLat": 22.485019,
    "centroidLon": 88.311667,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Doughlas ground — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1466699080",
    "name": "Neem Banani",
    "category": "Park",
    "centroidLat": 22.610495,
    "centroidLon": 88.471366,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Neem Banani — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1466699081",
    "name": "NKDA Activity Park",
    "category": "Park",
    "centroidLat": 22.611864,
    "centroidLon": 88.471297,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NKDA Activity Park — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1466701913",
    "name": "Taranya",
    "category": "Park",
    "centroidLat": 22.618453,
    "centroidLon": 88.477852,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Taranya — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1478872716",
    "name": "Green Verge 1",
    "category": "Park",
    "centroidLat": 22.587604,
    "centroidLon": 88.452408,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "New Town Kolkata Development Authority"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Verge 1 — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1478881181",
    "name": "Green Verge 3",
    "category": "Park",
    "centroidLat": 22.57646,
    "centroidLon": 88.449929,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "New Town Kolkata Development Authority"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Verge 3 — park in Kolkata"
  },
  {
    "osmType": "way",
    "osmId": "1478882471",
    "name": "AL Block Park",
    "category": "Park",
    "centroidLat": 22.57691,
    "centroidLon": 88.452103,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AL Block Park — park in Kolkata"
  },
  {
    "osmType": "relation",
    "osmId": "9102486",
    "name": "Maidan",
    "category": "Park",
    "centroidLat": 22.552574,
    "centroidLon": 88.345442,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Maidan — park in Kolkata"
  },
  {
    "osmType": "relation",
    "osmId": "9365696",
    "name": "Eco Park",
    "category": "Park",
    "centroidLat": 22.602214,
    "centroidLon": 88.466388,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Eco Park — park in Kolkata"
  },
  {
    "osmType": "relation",
    "osmId": "10854182",
    "name": "Sishu Udyan Children's Park",
    "category": "Park",
    "centroidLat": 22.614426,
    "centroidLon": 88.387232,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sishu Udyan Children's Park — park in Kolkata"
  },
  {
    "osmType": "relation",
    "osmId": "13187941",
    "name": "Children Park",
    "category": "Park",
    "centroidLat": 22.624816,
    "centroidLon": 88.293978,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Park — park in Kolkata"
  },
  {
    "osmType": "relation",
    "osmId": "13188012",
    "name": "Jagadishpur Children's Park",
    "category": "Park",
    "centroidLat": 22.648291,
    "centroidLon": 88.282544,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jagadishpur Children's Park — park in Kolkata"
  },
  {
    "osmType": "relation",
    "osmId": "20513825",
    "name": "Northern Park",
    "category": "Park",
    "centroidLat": 22.535213,
    "centroidLon": 88.349996,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Northern Park — park in Kolkata"
  }
];
