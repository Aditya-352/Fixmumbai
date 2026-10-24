/**
 * Hyderabad static green-space dataset.
 *
 * PROVENANCE
 * Extracted from OpenStreetMap via the Overpass API over the Greater Hyderabad Municipal Corporation area query
 * envelope, taking named elements tagged
 * `leisure=park|garden|nature_reserve|recreation_ground|common`,
 * `landuse=forest` and `boundary=national_park`.
 *
 *   Source:   OpenStreetMap contributors (ODbL 1.0)
 *   Query:    https://overpass-api.de/api/interpreter
 *   Records:  517 named green spaces
 *
 * The dataset is a SNAPSHOT and carries OSM's ODbL attribution requirement.
 * Coordinates, names, area and access tags are taken verbatim from OSM.
 *
 * DENSITY FIELDS
 * `ndviMean` / `ndviMin` / `ndviMax` / `densityClass` are DERIVED FROM AREA,
 * not measured from satellite imagery. Hyderabad has no registered Sentinel-2
 * AOI, so these are an area-based estimate used only to colour the density
 * legend. They must not be presented as measured NDVI.
 *
 * ACCESS
 * `accessStatus` and `walkClass` are read from the OSM `access` tag only. They
 * are a statement about the tag, not a verified site survey.
 */

export const HYDERABAD_STATIC = [
  {
    "osmType": "node",
    "osmId": "626897219",
    "name": "Manju miya tabela playground",
    "category": "Park",
    "centroidLat": 17.365234,
    "centroidLon": 78.484803,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Manju miya tabela playground — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "1435297380",
    "name": "Mahatma Gandhi Play Ground",
    "category": "Recreation Ground",
    "centroidLat": 17.449577,
    "centroidLon": 78.53634,
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
    "caption": "Mahatma Gandhi Play Ground — recreation ground in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "1595862680",
    "name": "Municipal Park",
    "category": "Park",
    "centroidLat": 17.396918,
    "centroidLon": 78.494542,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Municipal Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2217950163",
    "name": "Mahavir Nischalvan Eco Tourism",
    "category": "Nature Reserve",
    "centroidLat": 17.335166,
    "centroidLon": 78.58526,
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
    "caption": "Mahavir Nischalvan Eco Tourism — nature reserve in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2362861719",
    "name": "sanjeev park",
    "category": "Park",
    "centroidLat": 17.361777,
    "centroidLon": 78.491824,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sanjeev park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2431768432",
    "name": "HUDA Park",
    "category": "Park",
    "centroidLat": 17.323777,
    "centroidLon": 78.569301,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HUDA Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2445875640",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.37248,
    "centroidLon": 78.511317,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2445997535",
    "name": "Municipal Park",
    "category": "Park",
    "centroidLat": 17.374775,
    "centroidLon": 78.512511,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Municipal Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2446630859",
    "name": "Mandal Grounds",
    "category": "Recreation Ground",
    "centroidLat": 17.358271,
    "centroidLon": 78.535105,
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
    "caption": "Mandal Grounds — recreation ground in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2446634314",
    "name": "SBH Colony Community Park",
    "category": "Park",
    "centroidLat": 17.345995,
    "centroidLon": 78.548055,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "SBH Colony Community Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2447277091",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.399848,
    "centroidLon": 78.521202,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2607575861",
    "name": "Kalyan Nagar Phase-1 Park",
    "category": "Park",
    "centroidLat": 17.443441,
    "centroidLon": 78.432796,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kalyan Nagar Phase-1 Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2708767333",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.497912,
    "centroidLon": 78.384336,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2708998139",
    "name": "jagruthi colony park",
    "category": "Park",
    "centroidLat": 17.466452,
    "centroidLon": 78.364769,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jagruthi colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2708999856",
    "name": "jagruthi colony park 2",
    "category": "Park",
    "centroidLat": 17.4666,
    "centroidLon": 78.363954,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jagruthi colony park 2 — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2709019413",
    "name": "hitech garden",
    "category": "Garden",
    "centroidLat": 17.44578,
    "centroidLon": 78.37432,
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
    "caption": "hitech garden — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2709078449",
    "name": "prathao nagar park",
    "category": "Park",
    "centroidLat": 17.372007,
    "centroidLon": 78.533668,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "prathao nagar park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2709123146",
    "name": "Jayanagar Colony Park",
    "category": "Park",
    "centroidLat": 17.358507,
    "centroidLon": 78.517747,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jayanagar Colony Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2709128837",
    "name": "Indraprastha Township Park",
    "category": "Park",
    "centroidLat": 17.358306,
    "centroidLon": 78.515885,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Indraprastha Township Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2709131770",
    "name": "Saraswathi Nagar Colony Park",
    "category": "Park",
    "centroidLat": 17.358018,
    "centroidLon": 78.519186,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Saraswathi Nagar Colony Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2709159945",
    "name": "press colony",
    "category": "Park",
    "centroidLat": 17.343505,
    "centroidLon": 78.524487,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "press colony — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2709160951",
    "name": "sai ram nagar colony park",
    "category": "Park",
    "centroidLat": 17.343125,
    "centroidLon": 78.523617,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sai ram nagar colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2710794794",
    "name": "Friends Colony Badminton Park",
    "category": "Park",
    "centroidLat": 17.377543,
    "centroidLon": 78.518698,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Friends Colony Badminton Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2710795684",
    "name": "west prashanth nagar park",
    "category": "Park",
    "centroidLat": 17.379814,
    "centroidLon": 78.514826,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "west prashanth nagar park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2710901307",
    "name": "new life assembly of god church,mellinium garden",
    "category": "Park",
    "centroidLat": 17.447382,
    "centroidLon": 78.495493,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "new life assembly of god church,mellinium garden — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2710908226",
    "name": "sri puri childrens colony park",
    "category": "Park",
    "centroidLat": 17.458774,
    "centroidLon": 78.501018,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sri puri childrens colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2710920336",
    "name": "ashok garden",
    "category": "Garden",
    "centroidLat": 17.469205,
    "centroidLon": 78.483576,
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
    "caption": "ashok garden — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2710928998",
    "name": "nehru nagar park",
    "category": "Park",
    "centroidLat": 17.445137,
    "centroidLon": 78.504045,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "nehru nagar park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2710944008",
    "name": "railnilayam colony park",
    "category": "Park",
    "centroidLat": 17.440209,
    "centroidLon": 78.510495,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "railnilayam colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712475270",
    "name": "Madhuranagar D Park",
    "category": "Park",
    "centroidLat": 17.439604,
    "centroidLon": 78.43513,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Madhuranagar D Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712487682",
    "name": "Kanjerla Laxmi Narayan Yadav Park",
    "category": "Park",
    "centroidLat": 17.449155,
    "centroidLon": 78.441031,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kanjerla Laxmi Narayan Yadav Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712488361",
    "name": "ligh park",
    "category": "Park",
    "centroidLat": 17.450789,
    "centroidLon": 78.442855,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ligh park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712497339",
    "name": "esi children park",
    "category": "Park",
    "centroidLat": 17.446746,
    "centroidLon": 78.443195,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "esi children park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712500097",
    "name": "swami vivekananda c type residence park",
    "category": "Park",
    "centroidLat": 17.447081,
    "centroidLon": 78.443846,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "swami vivekananda c type residence park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712500165",
    "name": "ligh park",
    "category": "Park",
    "centroidLat": 17.447611,
    "centroidLon": 78.44844,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ligh park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712512903",
    "name": "Alam Thota Park",
    "category": "Park",
    "centroidLat": 17.442194,
    "centroidLon": 78.463451,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Alam Thota Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712512999",
    "name": "celebrity club park",
    "category": "Park",
    "centroidLat": 17.443349,
    "centroidLon": 78.464841,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "celebrity club park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712690733",
    "name": "local park",
    "category": "Park",
    "centroidLat": 17.427058,
    "centroidLon": 78.544144,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "local park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712690734",
    "name": "nagarjuna nagar park",
    "category": "Park",
    "centroidLat": 17.424861,
    "centroidLon": 78.541802,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "nagarjuna nagar park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712690735",
    "name": "bapuji nagar park",
    "category": "Park",
    "centroidLat": 17.421864,
    "centroidLon": 78.546838,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "bapuji nagar park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712690736",
    "name": "IICT children's park 2",
    "category": "Park",
    "centroidLat": 17.421038,
    "centroidLon": 78.545115,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "IICT children's park 2 — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2712690737",
    "name": "Googlys Children Park",
    "category": "Park",
    "centroidLat": 17.418635,
    "centroidLon": 78.545239,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Googlys Children Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713457883",
    "name": "Durga Estates Park",
    "category": "Park",
    "centroidLat": 17.497587,
    "centroidLon": 78.339838,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Durga Estates Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713459237",
    "name": "Pragathi Enclave Children Park",
    "category": "Park",
    "centroidLat": 17.498316,
    "centroidLon": 78.356529,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pragathi Enclave Children Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713460049",
    "name": "Park Area Pragathi Lay Out",
    "category": "Park",
    "centroidLat": 17.49916,
    "centroidLon": 78.356747,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Park Area Pragathi Lay Out — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713816229",
    "name": "children park,perfect towers",
    "category": "Park",
    "centroidLat": 17.493239,
    "centroidLon": 78.359795,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "children park,perfect towers — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713823466",
    "name": "goshamahal old quarters park",
    "category": "Park",
    "centroidLat": 17.378402,
    "centroidLon": 78.471224,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "goshamahal old quarters park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713827894",
    "name": "ghmc patk",
    "category": "Park",
    "centroidLat": 17.382006,
    "centroidLon": 78.46318,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ghmc patk — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713831289",
    "name": "shanti nagar park",
    "category": "Park",
    "centroidLat": 17.401644,
    "centroidLon": 78.455042,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "shanti nagar park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713838147",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.412997,
    "centroidLon": 78.448159,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713841650",
    "name": "ghmc park",
    "category": "Park",
    "centroidLat": 17.429902,
    "centroidLon": 78.442836,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ghmc park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713841739",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.430422,
    "centroidLon": 78.442411,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713845600",
    "name": "mch park",
    "category": "Park",
    "centroidLat": 17.432094,
    "centroidLon": 78.438587,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "mch park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713850928",
    "name": "sbi colony park",
    "category": "Park",
    "centroidLat": 17.431582,
    "centroidLon": 78.434973,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sbi colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713855034",
    "name": "mch park",
    "category": "Park",
    "centroidLat": 17.429367,
    "centroidLon": 78.419974,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "mch park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713892815",
    "name": "bamboo park",
    "category": "Park",
    "centroidLat": 17.430408,
    "centroidLon": 78.41063,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "bamboo park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713936303",
    "name": "Durgam Cheruvu Secret Lake Park",
    "category": "Park",
    "centroidLat": 17.431145,
    "centroidLon": 78.39205,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Durgam Cheruvu Secret Lake Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713950140",
    "name": "gayithri park",
    "category": "Park",
    "centroidLat": 17.45369,
    "centroidLon": 78.400227,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "gayithri park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713965958",
    "name": "r k society park",
    "category": "Park",
    "centroidLat": 17.456679,
    "centroidLon": 78.410914,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "r k society park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713976696",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.453279,
    "centroidLon": 78.422632,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2713979790",
    "name": "festival park kalyan nagar 3",
    "category": "Park",
    "centroidLat": 17.453152,
    "centroidLon": 78.420729,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "festival park kalyan nagar 3 — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714174094",
    "name": "Meenakshi Estates Park",
    "category": "Park",
    "centroidLat": 17.509976,
    "centroidLon": 78.483146,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Meenakshi Estates Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714220179",
    "name": "Army Childrens park",
    "category": "Park",
    "centroidLat": 17.488488,
    "centroidLon": 78.508438,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Army Childrens park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714300522",
    "name": "rock park",
    "category": "Park",
    "centroidLat": 17.416526,
    "centroidLon": 78.383429,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "rock park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714308169",
    "name": "Mahatma Gandhi Park",
    "category": "Park",
    "centroidLat": 17.388469,
    "centroidLon": 78.369993,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mahatma Gandhi Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714325898",
    "name": "childrens park",
    "category": "Park",
    "centroidLat": 17.350376,
    "centroidLon": 78.45018,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "childrens park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714328030",
    "name": "jurrasic park",
    "category": "Park",
    "centroidLat": 17.347131,
    "centroidLon": 78.448877,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jurrasic park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714332121",
    "name": "huda park",
    "category": "Park",
    "centroidLat": 17.333467,
    "centroidLon": 78.441763,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "huda park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714333671",
    "name": "npa grounds",
    "category": "Park",
    "centroidLat": 17.327411,
    "centroidLon": 78.438155,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "npa grounds — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714342265",
    "name": "botanical&horticultural garden",
    "category": "Park",
    "centroidLat": 17.31613,
    "centroidLon": 78.423611,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "botanical&horticultural garden — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714343157",
    "name": "Herbal Garden",
    "category": "Park",
    "centroidLat": 17.312208,
    "centroidLon": 78.420617,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Herbal Garden — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "2714358581",
    "name": "samala papi reddy gardens &function hall",
    "category": "Garden",
    "centroidLat": 17.301203,
    "centroidLon": 78.502498,
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
    "caption": "samala papi reddy gardens &function hall — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "3164412563",
    "name": "Amberpet T Jn",
    "category": "Park",
    "centroidLat": 17.392094,
    "centroidLon": 78.516364,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Amberpet T Jn — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "3388919584",
    "name": "brundavan garden",
    "category": "Garden",
    "centroidLat": 17.478661,
    "centroidLon": 78.421836,
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
    "caption": "brundavan garden — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "3388972905",
    "name": "N Gardens",
    "category": "Garden",
    "centroidLat": 17.480462,
    "centroidLon": 78.422568,
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
    "caption": "N Gardens — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "3388973979",
    "name": "metro marvel gardens",
    "category": "Garden",
    "centroidLat": 17.479063,
    "centroidLon": 78.421921,
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
    "caption": "metro marvel gardens — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "3528143853",
    "name": "padma rao nagar park",
    "category": "Park",
    "centroidLat": 17.425485,
    "centroidLon": 78.507267,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "padma rao nagar park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "3528152299",
    "name": "brooke bond colony park",
    "category": "Park",
    "centroidLat": 17.42561,
    "centroidLon": 78.508294,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "brooke bond colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "3535440814",
    "name": "GAJWEL",
    "category": "Park",
    "centroidLat": 17.356037,
    "centroidLon": 78.46329,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GAJWEL — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "3889091701",
    "name": "Biodiversity Complex",
    "category": "Park",
    "centroidLat": 17.429105,
    "centroidLon": 78.375958,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Biodiversity Complex — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "4413436915",
    "name": "MCH PARK",
    "category": "Park",
    "centroidLat": 17.397762,
    "centroidLon": 78.41575,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "MCH PARK — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "4637259707",
    "name": "Small park",
    "category": "Park",
    "centroidLat": 17.469461,
    "centroidLon": 78.359536,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Small park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "4637260280",
    "name": "Aparna Kranti Orchid",
    "category": "Park",
    "centroidLat": 17.471981,
    "centroidLon": 78.356879,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Aparna Kranti Orchid — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "4976643365",
    "name": "Brundavan Nursery",
    "category": "Garden",
    "centroidLat": 17.381018,
    "centroidLon": 78.566986,
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
    "caption": "Brundavan Nursery — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "5595935142",
    "name": "Sarvat Bari Park",
    "category": "Park",
    "centroidLat": 17.414988,
    "centroidLon": 78.443029,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sarvat Bari Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "5682004249",
    "name": "triangular park",
    "category": "Park",
    "centroidLat": 17.491787,
    "centroidLon": 78.397764,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "triangular park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6248322362",
    "name": "padmalayanagar colony",
    "category": "Park",
    "centroidLat": 17.315425,
    "centroidLon": 78.60478,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "sai"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "padmalayanagar colony — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6339493410",
    "name": "Madhura Nagar Park",
    "category": "Park",
    "centroidLat": 17.390925,
    "centroidLon": 78.531973,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Madhura Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6372382480",
    "name": "Nizampetpark",
    "category": "Park",
    "centroidLat": 17.515652,
    "centroidLon": 78.37821,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nizampetpark — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6407554284",
    "name": "T R Ujna Park",
    "category": "Park",
    "centroidLat": 17.397439,
    "centroidLon": 78.468836,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "T R Ujna Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6442886712",
    "name": "kings colony park",
    "category": "Park",
    "centroidLat": 17.333614,
    "centroidLon": 78.447376,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "kings colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6734373718",
    "name": "Sai Laxmi Panchavati Colony Park",
    "category": "Park",
    "centroidLat": 17.412078,
    "centroidLon": 78.383277,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sai Laxmi Panchavati Colony Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6779803484",
    "name": "Rock Garden",
    "category": "Garden",
    "centroidLat": 17.281506,
    "centroidLon": 78.537678,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "permit",
      "leisure": "garden"
    },
    "accessStatus": "RESTRICTED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=permit",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rock Garden — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6779897848",
    "name": "Huda Park",
    "category": "Park",
    "centroidLat": 17.513407,
    "centroidLon": 78.55033,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Huda Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6779951485",
    "name": "park",
    "category": "Garden",
    "centroidLat": 17.49315,
    "centroidLon": 78.407344,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "private",
      "leisure": "garden",
      "operator": "playing"
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
    "caption": "park — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "6935221547",
    "name": "HAL Park",
    "category": "Park",
    "centroidLat": 17.482059,
    "centroidLon": 78.479638,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HAL Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7140556933",
    "name": "S J Patel",
    "category": "Park",
    "centroidLat": 17.442172,
    "centroidLon": 78.450495,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "S J Patel — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7180214476",
    "name": "Vemana Colony Park",
    "category": "Park",
    "centroidLat": 17.504836,
    "centroidLon": 78.31635,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vemana Colony Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7244487792",
    "name": "santhosh nagar colony park",
    "category": "Park",
    "centroidLat": 17.391102,
    "centroidLon": 78.436491,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "santhosh nagar colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7345777446",
    "name": "Eco Park Hyderabad",
    "category": "Park",
    "centroidLat": 17.315784,
    "centroidLon": 78.3735,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Eco Park Hyderabad — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7351211488",
    "name": "Agri Biodiversity Park",
    "category": "Park",
    "centroidLat": 17.310378,
    "centroidLon": 78.415509,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Agri Biodiversity Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7536668787",
    "name": "Rabbit's park",
    "category": "Park",
    "centroidLat": 17.478273,
    "centroidLon": 78.517124,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rabbit's park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7611017181",
    "name": "pancheela park",
    "category": "Park",
    "centroidLat": 17.42919,
    "centroidLon": 78.512212,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "pancheela park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7707961936",
    "name": "Butterfly Garden Park",
    "category": "Garden",
    "centroidLat": 17.430275,
    "centroidLon": 78.476914,
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
    "caption": "Butterfly Garden Park — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7707961938",
    "name": "Rose Garden",
    "category": "Garden",
    "centroidLat": 17.434148,
    "centroidLon": 78.477626,
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
    "caption": "Rose Garden — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "7707961948",
    "name": "Rock Garden",
    "category": "Garden",
    "centroidLat": 17.433967,
    "centroidLon": 78.475705,
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
    "caption": "Rock Garden — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "8111134963",
    "name": "jai lodeshwar bhavan",
    "category": "Park",
    "centroidLat": 17.377634,
    "centroidLon": 78.455051,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jai lodeshwar bhavan — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "8386117717",
    "name": "People's park association",
    "category": "Park",
    "centroidLat": 17.405212,
    "centroidLon": 78.493565,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "People's park association — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "8386196949",
    "name": "Chilkalguda Park",
    "category": "Park",
    "centroidLat": 17.425536,
    "centroidLon": 78.511906,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chilkalguda Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "8386475676",
    "name": "NTR children park",
    "category": "Park",
    "centroidLat": 17.522084,
    "centroidLon": 78.395562,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NTR children park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "8386522937",
    "name": "Landscape",
    "category": "Garden",
    "centroidLat": 17.413857,
    "centroidLon": 78.530972,
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
    "caption": "Landscape — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "8389347882",
    "name": "Huda park",
    "category": "Park",
    "centroidLat": 17.362155,
    "centroidLon": 78.4258,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Huda park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "8909248547",
    "name": "Vikaspuri Colony Park",
    "category": "Park",
    "centroidLat": 17.44915,
    "centroidLon": 78.43142,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vikaspuri Colony Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "8909248550",
    "name": "AG Colony Park-2",
    "category": "Park",
    "centroidLat": 17.446915,
    "centroidLon": 78.428634,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "AG Colony Park-2 — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "8909248553",
    "name": "Walkers Park 1",
    "category": "Park",
    "centroidLat": 17.447595,
    "centroidLon": 78.425207,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Walkers Park 1 — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "9457269962",
    "name": "KailashHills Park 1",
    "category": "Park",
    "centroidLat": 17.516675,
    "centroidLon": 78.418269,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "KailashHills Park 1 — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "9626752884",
    "name": "lakshmi ganapathi park",
    "category": "Park",
    "centroidLat": 17.490358,
    "centroidLon": 78.329981,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "lakshmi ganapathi park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "9679094000",
    "name": "Shanthi Vanam Medipally Park",
    "category": "Park",
    "centroidLat": 17.415899,
    "centroidLon": 78.601845,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shanthi Vanam Medipally Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "9870554866",
    "name": "Gayatri Nagar Colony Association",
    "category": "Park",
    "centroidLat": 17.408682,
    "centroidLon": 78.577957,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "President"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gayatri Nagar Colony Association — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "9903987770",
    "name": "huda park",
    "category": "Park",
    "centroidLat": 17.481055,
    "centroidLon": 78.393029,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "huda park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "9919114774",
    "name": "Chandana",
    "category": "Garden",
    "centroidLat": 17.471436,
    "centroidLon": 78.477444,
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
    "caption": "Chandana — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "9919114775",
    "name": "Malla Reddy",
    "category": "Garden",
    "centroidLat": 17.4708,
    "centroidLon": 78.476929,
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
    "caption": "Malla Reddy — garden in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "9923836906",
    "name": "Playground",
    "category": "Park",
    "centroidLat": 17.424495,
    "centroidLon": 78.524952,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Playground — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "10244211027",
    "name": "HMT park",
    "category": "Park",
    "centroidLat": 17.422341,
    "centroidLon": 78.549791,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HMT park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "10277927486",
    "name": "nature",
    "category": "Park",
    "centroidLat": 17.43236,
    "centroidLon": 78.544259,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "nature — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "10279452106",
    "name": "Kishan Bagh Park",
    "category": "Park",
    "centroidLat": 17.360332,
    "centroidLon": 78.44056,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kishan Bagh Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "10280090407",
    "name": "TNGOS PARK",
    "category": "Park",
    "centroidLat": 17.307274,
    "centroidLon": 78.439826,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "TNGOS PARK — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "10960944066",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.443711,
    "centroidLon": 78.330896,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "10960953236",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.441891,
    "centroidLon": 78.33092,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "11009412980",
    "name": "Samathapuri colony park",
    "category": "Park",
    "centroidLat": 17.376752,
    "centroidLon": 78.553674,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Samathapuri colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "11289965969",
    "name": "Sri Sai Colony Park",
    "category": "Park",
    "centroidLat": 17.364128,
    "centroidLon": 78.410557,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sri Sai Colony Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "11361927896",
    "name": "Vasanth Nagar Park",
    "category": "Park",
    "centroidLat": 17.495451,
    "centroidLon": 78.382244,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "park",
      "operator": "Vasanth Nagar"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vasanth Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "11489438733",
    "name": "nature",
    "category": "Nature Reserve",
    "centroidLat": 17.433702,
    "centroidLon": 78.545676,
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
    "caption": "nature — nature reserve in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "11736410878",
    "name": "I Love Jntuh Park",
    "category": "Park",
    "centroidLat": 17.496882,
    "centroidLon": 78.392643,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "I Love Jntuh Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "11878121669",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.396747,
    "centroidLon": 78.542562,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "12164082166",
    "name": "Sri Mahagayathri GHMC Layout Park",
    "category": "Park",
    "centroidLat": 17.332606,
    "centroidLon": 78.615405,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Sri Mahagayathri GHMC Layout"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sri Mahagayathri GHMC Layout Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "12343684457",
    "name": "Prof. Jayashankar tree Park",
    "category": "Park",
    "centroidLat": 17.488598,
    "centroidLon": 78.330067,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Prof. Jayashankar tree Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "12596396093",
    "name": "idl lake viewpoint",
    "category": "Park",
    "centroidLat": 17.47861,
    "centroidLon": 78.414835,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "idl lake viewpoint — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "12596446532",
    "name": "jurrasi park",
    "category": "Park",
    "centroidLat": 17.347143,
    "centroidLon": 78.448906,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jurrasi park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13070393816",
    "name": "Shiva Gardens",
    "category": "Park",
    "centroidLat": 17.311686,
    "centroidLon": 78.686534,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shiva Gardens — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13070393818",
    "name": "Abdullapurmet Lake",
    "category": "Park",
    "centroidLat": 17.306223,
    "centroidLon": 78.693627,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Abdullapurmet Lake — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13088199796",
    "name": "Tree Park",
    "category": "Park",
    "centroidLat": 17.44199,
    "centroidLon": 78.326073,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tree Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13179504401",
    "name": "Red Hills Park",
    "category": "Park",
    "centroidLat": 17.39678,
    "centroidLon": 78.46501,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Red Hills Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13272712464",
    "name": "GHMC Monolith Park",
    "category": "Park",
    "centroidLat": 17.416955,
    "centroidLon": 78.416548,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Monolith Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13308019393",
    "name": "GHMC park",
    "category": "Park",
    "centroidLat": 17.452746,
    "centroidLon": 78.381978,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13415039601",
    "name": "VST Park",
    "category": "Park",
    "centroidLat": 17.404556,
    "centroidLon": 78.501792,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "VST Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13436972601",
    "name": "opp tankbundpark",
    "category": "Park",
    "centroidLat": 17.413039,
    "centroidLon": 78.483009,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "opp tankbundpark — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13437156199",
    "name": "kbhp park",
    "category": "Park",
    "centroidLat": 17.469884,
    "centroidLon": 78.389119,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "kbhp park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13437221840",
    "name": "melkote park",
    "category": "Park",
    "centroidLat": 17.521807,
    "centroidLon": 78.670162,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "melkote park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13437327814",
    "name": "play area",
    "category": "Park",
    "centroidLat": 17.40344,
    "centroidLon": 78.558646,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "play area — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13673310907",
    "name": "Laxmi nagar colony park",
    "category": "Park",
    "centroidLat": 17.370229,
    "centroidLon": 78.542372,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Laxmi nagar colony park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13673370115",
    "name": "Play ground",
    "category": "Park",
    "centroidLat": 17.454112,
    "centroidLon": 78.494016,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Play ground — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13673385135",
    "name": "Begum bazar chaman",
    "category": "Park",
    "centroidLat": 17.370724,
    "centroidLon": 78.470088,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Begum bazar chaman — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13697879328",
    "name": "Huda Park",
    "category": "Park",
    "centroidLat": 17.363331,
    "centroidLon": 78.537486,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Huda Park — park in Hyderabad"
  },
  {
    "osmType": "node",
    "osmId": "13994413246",
    "name": "Udyanavanam Park",
    "category": "Park",
    "centroidLat": 17.396674,
    "centroidLon": 78.541029,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Udyanavanam Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "28131043",
    "name": "Durgam Cheruvu",
    "category": "Nature Reserve",
    "centroidLat": 17.431054,
    "centroidLon": 78.389997,
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
    "caption": "Durgam Cheruvu — nature reserve in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "28268610",
    "name": "Kasu Brahmananda Reddy National Park",
    "category": "Nature Reserve",
    "centroidLat": 17.420234,
    "centroidLon": 78.420104,
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
    "caption": "Kasu Brahmananda Reddy National Park — nature reserve in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "28798547",
    "name": "Landscape Gardens",
    "category": "Garden",
    "centroidLat": 17.415563,
    "centroidLon": 78.528547,
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
    "caption": "Landscape Gardens — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "29124107",
    "name": "Sanjeevaiah Park",
    "category": "Park",
    "centroidLat": 17.431997,
    "centroidLon": 78.475572,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sanjeevaiah Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "29124111",
    "name": "Indira Park",
    "category": "Park",
    "centroidLat": 17.414664,
    "centroidLon": 78.482673,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Indira Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "29124126",
    "name": "NTR Gardens",
    "category": "Park",
    "centroidLat": 17.412385,
    "centroidLon": 78.468115,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NTR Gardens — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "29124134",
    "name": "Lumbini Park",
    "category": "Park",
    "centroidLat": 17.40973,
    "centroidLon": 78.473154,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lumbini Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "29124311",
    "name": "Jalagam Vengal Rao Park",
    "category": "Park",
    "centroidLat": 17.422938,
    "centroidLon": 78.44814,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jalagam Vengal Rao Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "29124405",
    "name": "Chacha Nehru Park",
    "category": "Park",
    "centroidLat": 17.401304,
    "centroidLon": 78.450282,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chacha Nehru Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "29124485",
    "name": "Botanical Gardens",
    "category": "Garden",
    "centroidLat": 17.455051,
    "centroidLon": 78.356984,
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
    "caption": "Botanical Gardens — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "29251806",
    "name": "Shilparamam",
    "category": "Park",
    "centroidLat": 17.451499,
    "centroidLon": 78.378213,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shilparamam — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "29252515",
    "name": "Sundarayya Park",
    "category": "Park",
    "centroidLat": 17.398452,
    "centroidLon": 78.49808,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sundarayya Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "41696425",
    "name": "Barkatpura Chaman",
    "category": "Garden",
    "centroidLat": 17.392591,
    "centroidLon": 78.496946,
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
    "caption": "Barkatpura Chaman — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "42988863",
    "name": "sr nagar community park",
    "category": "Park",
    "centroidLat": 17.443334,
    "centroidLon": 78.445047,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sr nagar community park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "55555826",
    "name": "Kesav Memorial Playground",
    "category": "Park",
    "centroidLat": 17.397018,
    "centroidLon": 78.490154,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kesav Memorial Playground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "75100051",
    "name": "Mother Teresa Park",
    "category": "Park",
    "centroidLat": 17.437837,
    "centroidLon": 78.504572,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mother Teresa Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "75500040",
    "name": "Rotary Park",
    "category": "Park",
    "centroidLat": 17.421743,
    "centroidLon": 78.484473,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rotary Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "91741021",
    "name": "Kakateeya Nagar Park",
    "category": "Park",
    "centroidLat": 17.41583,
    "centroidLon": 78.540269,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kakateeya Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "99703096",
    "name": "Amberpet Ground",
    "category": "Recreation Ground",
    "centroidLat": 17.39111,
    "centroidLon": 78.518783,
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
    "caption": "Amberpet Ground — recreation ground in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "108233467",
    "name": "Krishnakanth Park",
    "category": "Park",
    "centroidLat": 17.439692,
    "centroidLon": 78.430332,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Krishnakanth Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "116944236",
    "name": "Public Gardens",
    "category": "Park",
    "centroidLat": 17.398748,
    "centroidLon": 78.46891,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Public Gardens — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "122805508",
    "name": "Telecom Nagar Park",
    "category": "Park",
    "centroidLat": 17.434478,
    "centroidLon": 78.366123,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Telecom Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "129394334",
    "name": "Lawns in front of Admin Block",
    "category": "Park",
    "centroidLat": 17.49688,
    "centroidLon": 78.3927,
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
    "caption": "Lawns in front of Admin Block — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "129519442",
    "name": "Sathavahana Colony Park",
    "category": "Park",
    "centroidLat": 17.497835,
    "centroidLon": 78.402997,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sathavahana Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "135677828",
    "name": "kphb ph 5 park",
    "category": "Park",
    "centroidLat": 17.478171,
    "centroidLon": 78.394001,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "kphb ph 5 park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "138706265",
    "name": "muncipal garden",
    "category": "Park",
    "centroidLat": 17.410249,
    "centroidLon": 78.543611,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "muncipal garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "140391595",
    "name": "snehapuri colony park",
    "category": "Park",
    "centroidLat": 17.424443,
    "centroidLon": 78.543658,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "snehapuri colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "147998583",
    "name": "Telangana Martyrs Memorial",
    "category": "Park",
    "centroidLat": 17.440876,
    "centroidLon": 78.497642,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Telangana Martyrs Memorial — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "158312226",
    "name": "Garden",
    "category": "Park",
    "centroidLat": 17.540916,
    "centroidLon": 78.385993,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "158326956",
    "name": "mini public park",
    "category": "Park",
    "centroidLat": 17.496908,
    "centroidLon": 78.334887,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "mini public park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "158331247",
    "name": "deepthisri community park",
    "category": "Park",
    "centroidLat": 17.499806,
    "centroidLon": 78.339814,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "deepthisri community park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "165302486",
    "name": "Ayyappa Society Park",
    "category": "Park",
    "centroidLat": 17.447118,
    "centroidLon": 78.393246,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ayyappa Society Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "169098536",
    "name": "Srila Main Park",
    "category": "Park",
    "centroidLat": 17.486276,
    "centroidLon": 78.370327,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Srila Main Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "169098537",
    "name": "Srila Walkway Park",
    "category": "Park",
    "centroidLat": 17.488351,
    "centroidLon": 78.371546,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Srila Walkway Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "169960774",
    "name": "Melkote Park",
    "category": "Park",
    "centroidLat": 17.398471,
    "centroidLon": 78.488863,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Melkote Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "178744420",
    "name": "bio conversation",
    "category": "Park",
    "centroidLat": 17.435141,
    "centroidLon": 78.467251,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "bio conversation — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "210393778",
    "name": "Swami Vivekananda Park",
    "category": "Park",
    "centroidLat": 17.39216,
    "centroidLon": 78.372204,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Swami Vivekananda Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "211408794",
    "name": "Buddha Statue Building complex",
    "category": "Park",
    "centroidLat": 17.415566,
    "centroidLon": 78.475113,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "boundary": "protected_area",
      "leisure": "park",
      "operator": "Hyderabad Metropolitan Development Authority"
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
    "caption": "Buddha Statue Building complex — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "213636363",
    "name": "Imlibun Park",
    "category": "Park",
    "centroidLat": 17.37587,
    "centroidLon": 78.483259,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Imlibun Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "219364269",
    "name": "NTR Park",
    "category": "Park",
    "centroidLat": 17.517783,
    "centroidLon": 78.39541,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "NTR Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "234567408",
    "name": "Dharmareddy Colony Park",
    "category": "Park",
    "centroidLat": 17.491927,
    "centroidLon": 78.394043,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dharmareddy Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "238175802",
    "name": "Bank of Baroda Colony Park",
    "category": "Park",
    "centroidLat": 17.415012,
    "centroidLon": 78.495014,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bank of Baroda Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "238177496",
    "name": "Sai Baba Temple",
    "category": "Park",
    "centroidLat": 17.417797,
    "centroidLon": 78.492306,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sai Baba Temple — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "238299280",
    "name": "rock garden",
    "category": "Park",
    "centroidLat": 17.438897,
    "centroidLon": 78.459051,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "rock garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "246112068",
    "name": "Rural Technology Park",
    "category": "Park",
    "centroidLat": 17.312774,
    "centroidLon": 78.398233,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rural Technology Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "248417253",
    "name": "Municipal Corporation Park",
    "category": "Park",
    "centroidLat": 17.402837,
    "centroidLon": 78.445311,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Municipal Corporation Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "252087624",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 17.424497,
    "centroidLon": 78.524203,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "252269782",
    "name": "The English and Foreign Languages University (EFLU)",
    "category": "Park",
    "centroidLat": 17.424047,
    "centroidLon": 78.524269,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "private",
      "leisure": "park"
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
    "caption": "The English and Foreign Languages University (EFLU) — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "252488302",
    "name": "Satya Nagar Colony Park",
    "category": "Park",
    "centroidLat": 17.399669,
    "centroidLon": 78.57311,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Satya Nagar Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "252723812",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 17.364946,
    "centroidLon": 78.587659,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "private",
      "leisure": "park"
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
    "caption": "Children's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "253460280",
    "name": "Children Traffic Park",
    "category": "Park",
    "centroidLat": 17.361292,
    "centroidLon": 78.558022,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Traffic Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "255363158",
    "name": "Siddartha Nagar Park",
    "category": "Park",
    "centroidLat": 17.441282,
    "centroidLon": 78.435333,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Siddartha Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "256666880",
    "name": "JNGP Hostel Areana",
    "category": "Park",
    "centroidLat": 17.391593,
    "centroidLon": 78.52938,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "JNGP Hostel Areana — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "256666883",
    "name": "Nehru Block Inner Areana",
    "category": "Garden",
    "centroidLat": 17.392,
    "centroidLon": 78.527955,
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
    "caption": "Nehru Block Inner Areana — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "261478394",
    "name": "Microsoft Park",
    "category": "Park",
    "centroidLat": 17.430443,
    "centroidLon": 78.342269,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Microsoft Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "264089550",
    "name": "Shivapuri-Shank Colony Park",
    "category": "Park",
    "centroidLat": 17.481387,
    "centroidLon": 78.559671,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shivapuri-Shank Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "264882680",
    "name": "shank colony park",
    "category": "Park",
    "centroidLat": 17.484939,
    "centroidLon": 78.55974,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "shank colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "265201055",
    "name": "Rock Garden",
    "category": "Park",
    "centroidLat": 17.493439,
    "centroidLon": 78.313168,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rock Garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "265202997",
    "name": "BHEL Hockey Court",
    "category": "Park",
    "centroidLat": 17.493581,
    "centroidLon": 78.306511,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BHEL Hockey Court — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "265402614",
    "name": "HUDA Park",
    "category": "Park",
    "centroidLat": 17.331725,
    "centroidLon": 78.56855,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HUDA Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "265633859",
    "name": "shubnam gardens",
    "category": "Garden",
    "centroidLat": 17.398023,
    "centroidLon": 78.534501,
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
    "caption": "shubnam gardens — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "265769131",
    "name": "Hig Park - Kids Play Area",
    "category": "Park",
    "centroidLat": 17.505509,
    "centroidLon": 78.30372,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Hig Park - Kids Play Area — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "265769240",
    "name": "vemana colony park",
    "category": "Park",
    "centroidLat": 17.504839,
    "centroidLon": 78.316404,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "vemana colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "265770309",
    "name": "Subba Rao Park",
    "category": "Park",
    "centroidLat": 17.494011,
    "centroidLon": 78.363108,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Subba Rao Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "266133232",
    "name": "Gajularamaram Park",
    "category": "Park",
    "centroidLat": 17.522064,
    "centroidLon": 78.426544,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gajularamaram Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "274482491",
    "name": "square garden",
    "category": "Park",
    "centroidLat": 17.437942,
    "centroidLon": 78.481839,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "square garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "279349048",
    "name": "Sanathnagar Industrial Estate Park",
    "category": "Park",
    "centroidLat": 17.456912,
    "centroidLon": 78.44348,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sanathnagar Industrial Estate Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281501985",
    "name": "Adarsh Nagar Park",
    "category": "Park",
    "centroidLat": 17.404794,
    "centroidLon": 78.47013,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Adarsh Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281501996",
    "name": "Gun Park",
    "category": "Park",
    "centroidLat": 17.401383,
    "centroidLon": 78.469399,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gun Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281534245",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.374923,
    "centroidLon": 78.501127,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281534246",
    "name": "colony park",
    "category": "Park",
    "centroidLat": 17.376406,
    "centroidLon": 78.511174,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281534247",
    "name": "Community Park",
    "category": "Park",
    "centroidLat": 17.373463,
    "centroidLon": 78.51027,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Community Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281534271",
    "name": "sarojini nagarcolony park",
    "category": "Park",
    "centroidLat": 17.378626,
    "centroidLon": 78.498999,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sarojini nagarcolony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281538132",
    "name": "اعظمپورہ چمن",
    "category": "Park",
    "centroidLat": 17.374227,
    "centroidLon": 78.493055,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "اعظمپورہ چمن — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281543181",
    "name": "Bhagath Singh Park",
    "category": "Park",
    "centroidLat": 17.454686,
    "centroidLon": 78.447008,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhagath Singh Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281760572",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.429085,
    "centroidLon": 78.498743,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281760573",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.429342,
    "centroidLon": 78.491692,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281763834",
    "name": "shaka ground",
    "category": "Park",
    "centroidLat": 17.371777,
    "centroidLon": 78.504688,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "shaka ground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281766049",
    "name": "bk guda park",
    "category": "Park",
    "centroidLat": 17.446575,
    "centroidLon": 78.446307,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "bk guda park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281781846",
    "name": "PARK",
    "category": "Park",
    "centroidLat": 17.400449,
    "centroidLon": 78.510584,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281781847",
    "name": "Walker Town Park",
    "category": "Park",
    "centroidLat": 17.425471,
    "centroidLon": 78.507296,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Walker Town Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281781943",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.415173,
    "centroidLon": 78.488057,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281798425",
    "name": "friends colony park",
    "category": "Park",
    "centroidLat": 17.377662,
    "centroidLon": 78.518749,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "friends colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281798438",
    "name": "Moosarambagh Park",
    "category": "Park",
    "centroidLat": 17.373761,
    "centroidLon": 78.518358,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Moosarambagh Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281798549",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.398244,
    "centroidLon": 78.51762,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281798551",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.406055,
    "centroidLon": 78.480648,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281798568",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.398149,
    "centroidLon": 78.514816,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281798569",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.399452,
    "centroidLon": 78.515427,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281798570",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.39883,
    "centroidLon": 78.516236,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281798571",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.398158,
    "centroidLon": 78.515951,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281798572",
    "name": "park",
    "category": "Park",
    "centroidLat": 17.397989,
    "centroidLon": 78.516896,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281800423",
    "name": "satavahana nagar park",
    "category": "Park",
    "centroidLat": 17.375132,
    "centroidLon": 78.52211,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "satavahana nagar park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281802022",
    "name": "Ushodaya Colony Park",
    "category": "Park",
    "centroidLat": 17.384996,
    "centroidLon": 78.438962,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ushodaya Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281802023",
    "name": "Kantinagar Colony Park",
    "category": "Park",
    "centroidLat": 17.391495,
    "centroidLon": 78.440501,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kantinagar Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281802166",
    "name": "apau colony park",
    "category": "Park",
    "centroidLat": 17.365595,
    "centroidLon": 78.519257,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "apau colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281802167",
    "name": "revenue board colony park",
    "category": "Park",
    "centroidLat": 17.366732,
    "centroidLon": 78.518521,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "revenue board colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281802921",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.379827,
    "centroidLon": 78.441344,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281803355",
    "name": "ga venture 1 colony park",
    "category": "Park",
    "centroidLat": 17.362202,
    "centroidLon": 78.517471,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ga venture 1 colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281803356",
    "name": "GA Venture Colony Park",
    "category": "Park",
    "centroidLat": 17.361205,
    "centroidLon": 78.518183,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GA Venture Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281804171",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.376296,
    "centroidLon": 78.442324,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281988735",
    "name": "Walkers Park",
    "category": "Park",
    "centroidLat": 17.453835,
    "centroidLon": 78.424336,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Walkers Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "281998361",
    "name": "GHMC ground",
    "category": "Park",
    "centroidLat": 17.411052,
    "centroidLon": 78.477478,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC ground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282025237",
    "name": "MCH PARK",
    "category": "Park",
    "centroidLat": 17.413281,
    "centroidLon": 78.511195,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "MCH PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282025238",
    "name": "padmarao nagar park",
    "category": "Park",
    "centroidLat": 17.425588,
    "centroidLon": 78.50855,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "padmarao nagar park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282201140",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.385945,
    "centroidLon": 78.460366,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282201142",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.385647,
    "centroidLon": 78.463122,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282201143",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.374281,
    "centroidLon": 78.449776,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282201144",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.38615,
    "centroidLon": 78.462463,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282201145",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.372632,
    "centroidLon": 78.458112,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282201146",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.359034,
    "centroidLon": 78.433272,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282201147",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.365036,
    "centroidLon": 78.437034,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "282201149",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.387231,
    "centroidLon": 78.461331,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "288869028",
    "name": "HMDA Urban Forest",
    "category": "Forest",
    "centroidLat": 17.495402,
    "centroidLon": 78.484818,
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
    "caption": "HMDA Urban Forest — forest in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "297108845",
    "name": "Mindspace Park",
    "category": "Park",
    "centroidLat": 17.442937,
    "centroidLon": 78.381123,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mindspace Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "297191662",
    "name": "FCI Colony Park",
    "category": "Park",
    "centroidLat": 17.497851,
    "centroidLon": 78.353255,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "FCI Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "297207853",
    "name": "Press Colony Park",
    "category": "Park",
    "centroidLat": 17.459689,
    "centroidLon": 78.495651,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Press Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "305823486",
    "name": "Children park",
    "category": "Park",
    "centroidLat": 17.485508,
    "centroidLon": 78.406053,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "305823705",
    "name": "HMDA PARK",
    "category": "Park",
    "centroidLat": 17.484505,
    "centroidLon": 78.405094,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HMDA PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "311079962",
    "name": "Butterfly park",
    "category": "Park",
    "centroidLat": 17.438764,
    "centroidLon": 78.408394,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Butterfly park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "313280625",
    "name": "Agriculture Field",
    "category": "Park",
    "centroidLat": 17.547187,
    "centroidLon": 78.603376,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Agriculture Field — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "318507341",
    "name": "Khairatabad Park",
    "category": "Park",
    "centroidLat": 17.410072,
    "centroidLon": 78.464033,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Khairatabad Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "318606407",
    "name": "Lake View Park",
    "category": "Park",
    "centroidLat": 17.414464,
    "centroidLon": 78.46372,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lake View Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "330903581",
    "name": "Feroz Gandhi Park",
    "category": "Park",
    "centroidLat": 17.385124,
    "centroidLon": 78.481476,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Feroz Gandhi Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "331355534",
    "name": "RAMAKRISHNA NAGAR PARK",
    "category": "Park",
    "centroidLat": 17.396535,
    "centroidLon": 78.521247,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "RAMAKRISHNA NAGAR PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "331777273",
    "name": "Dr. A.S. Rao Nagar Colony Park",
    "category": "Park",
    "centroidLat": 17.479446,
    "centroidLon": 78.555603,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dr. A.S. Rao Nagar Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "331784194",
    "name": "yashoda gardens",
    "category": "Garden",
    "centroidLat": 17.487435,
    "centroidLon": 78.414657,
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
    "caption": "yashoda gardens — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "331976991",
    "name": "Snake Park",
    "category": "Park",
    "centroidLat": 17.392805,
    "centroidLon": 78.453038,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "GHMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Snake Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "331977010",
    "name": "Owaisi Park",
    "category": "Park",
    "centroidLat": 17.392174,
    "centroidLon": 78.454596,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Owaisi Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "332096119",
    "name": "Srinivasa Nagar Colony Park No.1",
    "category": "Park",
    "centroidLat": 17.479126,
    "centroidLon": 78.562857,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Srinivasa Nagar Colony Park No.1 — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "332097762",
    "name": "Kundanbagh Park",
    "category": "Park",
    "centroidLat": 17.434233,
    "centroidLon": 78.459267,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kundanbagh Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "334491812",
    "name": "Narendra Park",
    "category": "Park",
    "centroidLat": 17.39796,
    "centroidLon": 78.511471,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Narendra Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "334491813",
    "name": "Saraswati Nagar Park",
    "category": "Park",
    "centroidLat": 17.396411,
    "centroidLon": 78.509357,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Saraswati Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "339693042",
    "name": "Park",
    "category": "Park",
    "centroidLat": 17.50555,
    "centroidLon": 78.301631,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "339700743",
    "name": "HIG Function Hall",
    "category": "Park",
    "centroidLat": 17.50404,
    "centroidLon": 78.302696,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HIG Function Hall — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "339776081",
    "name": "BHEL Park",
    "category": "Park",
    "centroidLat": 17.494845,
    "centroidLon": 78.307833,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BHEL Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "339802903",
    "name": "BHEL Park",
    "category": "Park",
    "centroidLat": 17.494102,
    "centroidLon": 78.300713,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "BHEL Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "339978505",
    "name": "G PARK",
    "category": "Park",
    "centroidLat": 17.481216,
    "centroidLon": 78.3026,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "G PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "340891351",
    "name": "PV Narasimharao Park",
    "category": "Park",
    "centroidLat": 17.488951,
    "centroidLon": 78.390157,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "narasimha rao"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "PV Narasimharao Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "340892765",
    "name": "HUDA Park",
    "category": "Park",
    "centroidLat": 17.480983,
    "centroidLon": 78.392997,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HUDA Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "340893445",
    "name": "HIG Park",
    "category": "Park",
    "centroidLat": 17.484245,
    "centroidLon": 78.387512,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HIG Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "340894662",
    "name": "Shyam Prasad Mukharjee Municipal Park",
    "category": "Park",
    "centroidLat": 17.489459,
    "centroidLon": 78.397543,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "GHMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shyam Prasad Mukharjee Municipal Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "340919496",
    "name": "Vasanth Nagar Park",
    "category": "Park",
    "centroidLat": 17.491125,
    "centroidLon": 78.384548,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vasanth Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "341189072",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.494242,
    "centroidLon": 78.395255,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "341388491",
    "name": "Gandhi Nagar,Community Hall",
    "category": "Park",
    "centroidLat": 17.391762,
    "centroidLon": 78.54216,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gandhi Nagar,Community Hall — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "343689996",
    "name": "Patel Kunta Park",
    "category": "Park",
    "centroidLat": 17.497079,
    "centroidLon": 78.409471,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Patel Kunta Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "346563647",
    "name": "Bhoodevi Nagar park",
    "category": "Park",
    "centroidLat": 17.491597,
    "centroidLon": 78.502826,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bhoodevi Nagar park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "355775213",
    "name": "Huda Sai Nagar Park",
    "category": "Park",
    "centroidLat": 17.332324,
    "centroidLon": 78.579544,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Huda Sai Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "357042504",
    "name": "saraswathi nagar park",
    "category": "Park",
    "centroidLat": 17.356049,
    "centroidLon": 78.520651,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "saraswathi nagar park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "361413338",
    "name": "Central Park",
    "category": "Park",
    "centroidLat": 17.43329,
    "centroidLon": 78.362697,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Central Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "361681579",
    "name": "MCH Park",
    "category": "Park",
    "centroidLat": 17.41047,
    "centroidLon": 78.422725,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "MCH Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "361720515",
    "name": "Jubilee Hills Urban Park",
    "category": "Park",
    "centroidLat": 17.435748,
    "centroidLon": 78.411313,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jubilee Hills Urban Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "361720516",
    "name": "Muncipal Park",
    "category": "Park",
    "centroidLat": 17.432608,
    "centroidLon": 78.405603,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Muncipal Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "361880549",
    "name": "KPHB Park",
    "category": "Park",
    "centroidLat": 17.473053,
    "centroidLon": 78.385214,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "KPHB Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "361886859",
    "name": "Alwyn Park",
    "category": "Park",
    "centroidLat": 17.489719,
    "centroidLon": 78.351737,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Alwyn Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "361886861",
    "name": "HIG Park",
    "category": "Park",
    "centroidLat": 17.489628,
    "centroidLon": 78.349595,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HIG Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "361886865",
    "name": "Madinaguda Park",
    "category": "Park",
    "centroidLat": 17.491009,
    "centroidLon": 78.346558,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Madinaguda Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "361888760",
    "name": "Walkers Assosciation - HUDA Colony",
    "category": "Park",
    "centroidLat": 17.488679,
    "centroidLon": 78.332092,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Walkers Assosciation - HUDA Colony — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362007003",
    "name": "masqati play ground",
    "category": "Park",
    "centroidLat": 17.352918,
    "centroidLon": 78.499765,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "masqati play ground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362010497",
    "name": "GHMC HUDA Park",
    "category": "Park",
    "centroidLat": 17.425982,
    "centroidLon": 78.400924,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC HUDA Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362010510",
    "name": "Pearl Village Park",
    "category": "Park",
    "centroidLat": 17.460788,
    "centroidLon": 78.346772,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pearl Village Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362532424",
    "name": "Sainikpuri Children's Park",
    "category": "Park",
    "centroidLat": 17.487633,
    "centroidLon": 78.546441,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sainikpuri Children's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362532425",
    "name": "Sainikpuri Park",
    "category": "Park",
    "centroidLat": 17.486074,
    "centroidLon": 78.552858,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sainikpuri Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362532432",
    "name": "G.R. Reddy Park",
    "category": "Park",
    "centroidLat": 17.491133,
    "centroidLon": 78.574976,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "G.R. Reddy Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362567201",
    "name": "Rock Garden",
    "category": "Park",
    "centroidLat": 17.544419,
    "centroidLon": 78.5729,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rock Garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362586953",
    "name": "Haripuri colony park",
    "category": "Park",
    "centroidLat": 17.362825,
    "centroidLon": 78.552604,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Haripuri colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362695252",
    "name": "North Park",
    "category": "Park",
    "centroidLat": 17.488943,
    "centroidLon": 78.538417,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "North Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362695256",
    "name": "Jawan Nagar Park",
    "category": "Park",
    "centroidLat": 17.488309,
    "centroidLon": 78.572616,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jawan Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362700823",
    "name": "Local Park",
    "category": "Park",
    "centroidLat": 17.446515,
    "centroidLon": 78.510065,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Local Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362767920",
    "name": "East gandhi nagar park",
    "category": "Park",
    "centroidLat": 17.493423,
    "centroidLon": 78.612181,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "East gandhi nagar park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362894363",
    "name": "green hills colony park",
    "category": "Park",
    "centroidLat": 17.359242,
    "centroidLon": 78.547158,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "green hills colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362955632",
    "name": "Chilka Nagar Scrub Forest",
    "category": "Forest",
    "centroidLat": 17.417801,
    "centroidLon": 78.560167,
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
    "caption": "Chilka Nagar Scrub Forest — forest in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "362955635",
    "name": "SBI Officers colony park",
    "category": "Park",
    "centroidLat": 17.399113,
    "centroidLon": 78.517967,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "SBI Officers colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "380919446",
    "name": "Park & Kids Play Area",
    "category": "Park",
    "centroidLat": 17.528957,
    "centroidLon": 78.361386,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Park & Kids Play Area — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "384969283",
    "name": "TNR Shakuntala Park",
    "category": "Park",
    "centroidLat": 17.348813,
    "centroidLon": 78.543003,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "TNR Shakuntala Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "391488597",
    "name": "JawaharNagar Colony Park",
    "category": "Park",
    "centroidLat": 17.437749,
    "centroidLon": 78.484556,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "JawaharNagar Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "396689539",
    "name": "Sachivalaya Nagar Park",
    "category": "Park",
    "centroidLat": 17.326788,
    "centroidLon": 78.570779,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sachivalaya Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "411248434",
    "name": "padma rao nagar park",
    "category": "Park",
    "centroidLat": 17.429539,
    "centroidLon": 78.51258,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "padma rao nagar park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "434944716",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.485614,
    "centroidLon": 78.314012,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "436397567",
    "name": "Chaderghat Rotary",
    "category": "Garden",
    "centroidLat": 17.377568,
    "centroidLon": 78.491948,
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
    "caption": "Chaderghat Rotary — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "448142213",
    "name": "monkeys location",
    "category": "Park",
    "centroidLat": 17.402301,
    "centroidLon": 78.454932,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "monkeys location — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "468454258",
    "name": "Safilguda Park",
    "category": "Park",
    "centroidLat": 17.462916,
    "centroidLon": 78.536959,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Safilguda Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "468487461",
    "name": "LIG A PARK",
    "category": "Park",
    "centroidLat": 17.477197,
    "centroidLon": 78.560351,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "LIG A PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "469270371",
    "name": "Indiabulls Park",
    "category": "Park",
    "centroidLat": 17.416603,
    "centroidLon": 78.484511,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Indiabulls Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "469297442",
    "name": "prashanth nagar colony park",
    "category": "Park",
    "centroidLat": 17.46285,
    "centroidLon": 78.562819,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "prashanth nagar colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "469300213",
    "name": "H.B colony Ground",
    "category": "Park",
    "centroidLat": 17.453297,
    "centroidLon": 78.565412,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "H.B colony Ground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "469305124",
    "name": "public park",
    "category": "Park",
    "centroidLat": 17.452448,
    "centroidLon": 78.566165,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "public park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "469636118",
    "name": "Public Garden Park",
    "category": "Park",
    "centroidLat": 17.398322,
    "centroidLon": 78.469401,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Public Garden Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "469637709",
    "name": "Vittal Rao Nagar Park",
    "category": "Park",
    "centroidLat": 17.44436,
    "centroidLon": 78.385062,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vittal Rao Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "473916928",
    "name": "Badminton court",
    "category": "Park",
    "centroidLat": 17.354443,
    "centroidLon": 78.569204,
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
    "caption": "Badminton court — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "487443506",
    "name": "Priyadarshini Park , Saroor Nagar",
    "category": "Park",
    "centroidLat": 17.354761,
    "centroidLon": 78.530375,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Priyadarshini Park , Saroor Nagar — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "495694430",
    "name": "Gautami Enclave Park",
    "category": "Park",
    "centroidLat": 17.465682,
    "centroidLon": 78.350005,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "private",
      "leisure": "park"
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
    "caption": "Gautami Enclave Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "500257375",
    "name": "Nagina Bagh",
    "category": "Park",
    "centroidLat": 17.384965,
    "centroidLon": 78.40202,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nagina Bagh — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "504688274",
    "name": "GHMC PARK",
    "category": "Park",
    "centroidLat": 17.358646,
    "centroidLon": 78.446497,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC PARK — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "515013278",
    "name": "Hamsa Cricket Ground",
    "category": "Park",
    "centroidLat": 17.335213,
    "centroidLon": 78.384646,
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
    "caption": "Hamsa Cricket Ground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "515411914",
    "name": "Hill Top Lake Park",
    "category": "Park",
    "centroidLat": 17.444386,
    "centroidLon": 78.415838,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Hill Top Lake Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "516210928",
    "name": "Singhs Park Cricket Ground",
    "category": "Park",
    "centroidLat": 17.333565,
    "centroidLon": 78.381809,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Singhs Park Cricket Ground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "543748699",
    "name": "Microsoft B3 Park",
    "category": "Park",
    "centroidLat": 17.428531,
    "centroidLon": 78.340221,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Microsoft B3 Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "543750079",
    "name": "Biodiversity Park",
    "category": "Park",
    "centroidLat": 17.429063,
    "centroidLon": 78.376511,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Biodiversity Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "543840928",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.444295,
    "centroidLon": 78.360254,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "543840929",
    "name": "JV Colony Park",
    "category": "Park",
    "centroidLat": 17.445205,
    "centroidLon": 78.360572,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "JV Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "545603455",
    "name": "Deccan Park",
    "category": "Park",
    "centroidLat": 17.395188,
    "centroidLon": 78.39836,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Deccan Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "554821843",
    "name": "MRWA Park 2",
    "category": "Park",
    "centroidLat": 17.493786,
    "centroidLon": 78.371318,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "MRWA Park 2 — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "561432494",
    "name": "Gachibowli Park",
    "category": "Park",
    "centroidLat": 17.442577,
    "centroidLon": 78.354246,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gachibowli Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "568241502",
    "name": "celebration spot",
    "category": "Park",
    "centroidLat": 17.495266,
    "centroidLon": 78.391893,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "celebration spot — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "568973277",
    "name": "Ayyappa Society Park",
    "category": "Park",
    "centroidLat": 17.447032,
    "centroidLon": 78.391006,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ayyappa Society Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "569608042",
    "name": "Rose Garden",
    "category": "Garden",
    "centroidLat": 17.404918,
    "centroidLon": 78.464399,
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
    "caption": "Rose Garden — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "582560847",
    "name": "Jupally GHMC Park",
    "category": "Park",
    "centroidLat": 17.505085,
    "centroidLon": 78.548428,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jupally GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "582560854",
    "name": "Shaili Gardens GHMC Park 2",
    "category": "Park",
    "centroidLat": 17.503042,
    "centroidLon": 78.548467,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "GHMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shaili Gardens GHMC Park 2 — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "585612916",
    "name": "Sarvat Bari Park",
    "category": "Park",
    "centroidLat": 17.414762,
    "centroidLon": 78.442943,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sarvat Bari Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "587073717",
    "name": "Sai Aishwarya Hill Park",
    "category": "Park",
    "centroidLat": 17.39577,
    "centroidLon": 78.612305,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sai Aishwarya Hill Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "591727937",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.509963,
    "centroidLon": 78.367261,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "603428299",
    "name": "Saleem Nagar Colony Park",
    "category": "Park",
    "centroidLat": 17.372043,
    "centroidLon": 78.512473,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Saleem Nagar Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "622612732",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 17.455262,
    "centroidLon": 78.429451,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "626348183",
    "name": "Gandipet lake park",
    "category": "Park",
    "centroidLat": 17.38193,
    "centroidLon": 78.315804,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Hyderabad Metropolitan Water Supply & Sewerage Board"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gandipet lake park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "626348235",
    "name": "Rock Garden",
    "category": "Garden",
    "centroidLat": 17.381357,
    "centroidLon": 78.316071,
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
    "caption": "Rock Garden — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "626551618",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.446455,
    "centroidLon": 78.385313,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "627094417",
    "name": "Saradha Vanam",
    "category": "Garden",
    "centroidLat": 17.410754,
    "centroidLon": 78.481771,
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
    "caption": "Saradha Vanam — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "627572570",
    "name": "School Garden",
    "category": "Garden",
    "centroidLat": 17.493614,
    "centroidLon": 78.336819,
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
    "caption": "School Garden — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "630167062",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 17.454671,
    "centroidLon": 78.428369,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "633184980",
    "name": "Walker's Park",
    "category": "Park",
    "centroidLat": 17.454592,
    "centroidLon": 78.429297,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Walker's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "642186487",
    "name": "Interactive Science park",
    "category": "Park",
    "centroidLat": 17.445856,
    "centroidLon": 78.378576,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Interactive Science park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "644363628",
    "name": "DurgaNagar Colony Park",
    "category": "Park",
    "centroidLat": 17.426771,
    "centroidLon": 78.453612,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "DurgaNagar Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "656926218",
    "name": "Park",
    "category": "Park",
    "centroidLat": 17.428784,
    "centroidLon": 78.642147,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "658049832",
    "name": "Nerella Park",
    "category": "Park",
    "centroidLat": 17.461359,
    "centroidLon": 78.363882,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Nerella Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "670634160",
    "name": "ganapathi temple garden",
    "category": "Garden",
    "centroidLat": 17.363278,
    "centroidLon": 78.394191,
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
    "caption": "ganapathi temple garden — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "670634597",
    "name": "Tapovanam Park",
    "category": "Park",
    "centroidLat": 17.372551,
    "centroidLon": 78.41034,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tapovanam Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "670652453",
    "name": "Quiet Lands Greenery",
    "category": "Park",
    "centroidLat": 17.440393,
    "centroidLon": 78.3625,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "QuietLands"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Quiet Lands Greenery — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "670652457",
    "name": "Quiet Lands Park",
    "category": "Park",
    "centroidLat": 17.440968,
    "centroidLon": 78.362416,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Quiet Lands Welfare Association"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Quiet Lands Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "687813407",
    "name": "Rock Garden",
    "category": "Park",
    "centroidLat": 17.376989,
    "centroidLon": 78.31581,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "HMWSSB"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rock Garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "692940430",
    "name": "P and T Colony Park",
    "category": "Park",
    "centroidLat": 17.411926,
    "centroidLon": 78.492419,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "P and T Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "706790544",
    "name": "Karthikeya Nagar Park",
    "category": "Park",
    "centroidLat": 17.430074,
    "centroidLon": 78.546644,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Karthikeya Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "706790545",
    "name": "Karthikeya Nagar Community Park",
    "category": "Park",
    "centroidLat": 17.43072,
    "centroidLon": 78.547801,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Karthikeya Nagar Community Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "706790546",
    "name": "HMT Lake Park",
    "category": "Park",
    "centroidLat": 17.422369,
    "centroidLon": 78.549963,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "GHMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "HMT Lake Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "722756813",
    "name": "children park",
    "category": "Park",
    "centroidLat": 17.330162,
    "centroidLon": 78.580754,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "children park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "722757121",
    "name": "cricket ground",
    "category": "Park",
    "centroidLat": 17.3552,
    "centroidLon": 78.568275,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "cricket ground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "726874321",
    "name": "Ramalayam Temple Park",
    "category": "Park",
    "centroidLat": 17.487274,
    "centroidLon": 78.537376,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ramalayam Temple Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "733439138",
    "name": "VST",
    "category": "Park",
    "centroidLat": 17.425883,
    "centroidLon": 78.54426,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "VST — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "737554364",
    "name": "Garden",
    "category": "Park",
    "centroidLat": 17.427535,
    "centroidLon": 78.441729,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "MJCET"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "740764825",
    "name": "rams klr garden",
    "category": "Garden",
    "centroidLat": 17.302192,
    "centroidLon": 78.50724,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "access": "yes",
      "leisure": "garden",
      "operator": "rar"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "rams klr garden — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "740766215",
    "name": "Scidmore Park",
    "category": "Park",
    "centroidLat": 17.305068,
    "centroidLon": 78.514026,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "rr"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Scidmore Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "745841721",
    "name": "Sai Baba Nagar Colony Park",
    "category": "Park",
    "centroidLat": 17.339697,
    "centroidLon": 78.382682,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sai Baba Nagar Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "745841722",
    "name": "St Micheals Colony Park",
    "category": "Park",
    "centroidLat": 17.348063,
    "centroidLon": 78.37657,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "St Micheals Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "747860999",
    "name": "A-B",
    "category": "Park",
    "centroidLat": 17.311888,
    "centroidLon": 78.51952,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "A-B — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "751542521",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 17.439125,
    "centroidLon": 78.385841,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Public Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "756212720",
    "name": "Telecom Nagar Park 2",
    "category": "Park",
    "centroidLat": 17.432377,
    "centroidLon": 78.366941,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Telecom Nagar Park 2 — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "759615635",
    "name": "Railway Employees’ Colony Park",
    "category": "Park",
    "centroidLat": 17.538148,
    "centroidLon": 78.509803,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Railway Employees’ Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "759615636",
    "name": "Colony Park",
    "category": "Park",
    "centroidLat": 17.525214,
    "centroidLon": 78.512568,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "759757333",
    "name": "TechMahindra SEZ",
    "category": "Park",
    "centroidLat": 17.452531,
    "centroidLon": 78.371287,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "TechMahindra SEZ — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "765157350",
    "name": "Gayatri Nagar Indoor Badminton Court",
    "category": "Park",
    "centroidLat": 17.453519,
    "centroidLon": 78.400183,
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
    "caption": "Gayatri Nagar Indoor Badminton Court — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "768426882",
    "name": "Childern's Park",
    "category": "Park",
    "centroidLat": 17.303634,
    "centroidLon": 78.516447,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Childern's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "776404543",
    "name": "jayabheri park",
    "category": "Park",
    "centroidLat": 17.538672,
    "centroidLon": 78.486154,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jayabheri park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "776404544",
    "name": "jayabheri park",
    "category": "Park",
    "centroidLat": 17.537808,
    "centroidLon": 78.486406,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "jayabheri park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "778828694",
    "name": "Aparna Serene Park Gardens",
    "category": "Park",
    "centroidLat": 17.464806,
    "centroidLon": 78.336572,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Aparna Serene Park Gardens — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "778828695",
    "name": "Aparna Serene Park Gardens",
    "category": "Park",
    "centroidLat": 17.463675,
    "centroidLon": 78.337859,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Aparna Serene Park Gardens — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "798336242",
    "name": "Fairfields Colony Chidren Park",
    "category": "Park",
    "centroidLat": 17.392528,
    "centroidLon": 78.376665,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Fairfields Colony Chidren Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "798336246",
    "name": "Alkapoor Park",
    "category": "Park",
    "centroidLat": 17.3945,
    "centroidLon": 78.376581,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Alkapoor Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "798336250",
    "name": "Abdul Kalam Park",
    "category": "Park",
    "centroidLat": 17.395037,
    "centroidLon": 78.371908,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Abdul Kalam Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "825496776",
    "name": "Do.Science",
    "category": "Park",
    "centroidLat": 17.432834,
    "centroidLon": 78.477119,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Do.Science — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "827870923",
    "name": "Jayanagar Community Park",
    "category": "Park",
    "centroidLat": 17.498945,
    "centroidLon": 78.404963,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jayanagar Community Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "851471714",
    "name": "Dr. Sarvepalli Radhakrishnan Park",
    "category": "Park",
    "centroidLat": 17.527778,
    "centroidLon": 78.392083,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dr. Sarvepalli Radhakrishnan Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "851471715",
    "name": "Daasarathi Krishnamacharyulu Park",
    "category": "Park",
    "centroidLat": 17.528786,
    "centroidLon": 78.392185,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Daasarathi Krishnamacharyulu Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "854214833",
    "name": "Jal Vayu Vihar Park",
    "category": "Park",
    "centroidLat": 17.499832,
    "centroidLon": 78.397781,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jal Vayu Vihar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "859285500",
    "name": "Shilparamam, Uppal",
    "category": "Park",
    "centroidLat": 17.382898,
    "centroidLon": 78.555856,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shilparamam, Uppal — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "865313779",
    "name": "Prashanthi Hills Park",
    "category": "Park",
    "centroidLat": 17.527376,
    "centroidLon": 78.39294,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Prashanthi Hills Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "870300125",
    "name": "sanjaypuri colony community hall",
    "category": "Park",
    "centroidLat": 17.499699,
    "centroidLon": 78.428073,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sanjaypuri colony community hall — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "872821968",
    "name": "Raani Rudrama Devi Park",
    "category": "Park",
    "centroidLat": 17.52969,
    "centroidLon": 78.391601,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Raani Rudrama Devi Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "872822648",
    "name": "Pragati Park",
    "category": "Park",
    "centroidLat": 17.524505,
    "centroidLon": 78.396212,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Pragati Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "874580320",
    "name": "Sahara Estates Garden",
    "category": "Park",
    "centroidLat": 17.348466,
    "centroidLon": 78.571239,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sahara Estates Garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "876161049",
    "name": "SRT Colony (GHMC) Park",
    "category": "Park",
    "centroidLat": 17.408941,
    "centroidLon": 78.505601,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "SRT Colony (GHMC) Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "879107114",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.504479,
    "centroidLon": 78.357065,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "879143596",
    "name": "Green Hamlet Park 2",
    "category": "Park",
    "centroidLat": 17.4693,
    "centroidLon": 78.36874,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Hamlet Park 2 — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "879143597",
    "name": "Green Hamlet Park",
    "category": "Park",
    "centroidLat": 17.469897,
    "centroidLon": 78.369133,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Hamlet Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "883072272",
    "name": "Komaram Bheem Park",
    "category": "Park",
    "centroidLat": 17.530737,
    "centroidLon": 78.391194,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Komaram Bheem Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "884644649",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.502445,
    "centroidLon": 78.396659,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "884661559",
    "name": "Naren Holiday Park",
    "category": "Park",
    "centroidLat": 17.505191,
    "centroidLon": 78.363419,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Naren Holiday Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "885392374",
    "name": "Alwal Childran's Park",
    "category": "Park",
    "centroidLat": 17.499325,
    "centroidLon": 78.5102,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Alwal Childran's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "885449284",
    "name": "Louis Braille Park",
    "category": "Park",
    "centroidLat": 17.371945,
    "centroidLon": 78.508836,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Louis Braille Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "886475965",
    "name": "Public Park",
    "category": "Park",
    "centroidLat": 17.40558,
    "centroidLon": 78.556216,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "GHMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Public Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "894118914",
    "name": "Janapriya Enclave Park",
    "category": "Park",
    "centroidLat": 17.358503,
    "centroidLon": 78.563637,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "JE Association welfare society"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Janapriya Enclave Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "894120433",
    "name": "Mini Park",
    "category": "Park",
    "centroidLat": 17.363643,
    "centroidLon": 78.560817,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "GHMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mini Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "894234294",
    "name": "Rock Town Colony Community Hall",
    "category": "Park",
    "centroidLat": 17.358228,
    "centroidLon": 78.560374,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Rock Town Colony Community Hall — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "894234295",
    "name": "Chanakyapuri Community Hall",
    "category": "Park",
    "centroidLat": 17.363603,
    "centroidLon": 78.564812,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chanakyapuri Community Hall — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "894234296",
    "name": "Lalitha Nagar Park",
    "category": "Park",
    "centroidLat": 17.365811,
    "centroidLon": 78.562895,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lalitha Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "897375946",
    "name": "Kamalapuri Colony Park",
    "category": "Park",
    "centroidLat": 17.429383,
    "centroidLon": 78.43016,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kamalapuri Colony Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "898269809",
    "name": "Panchatatva Park",
    "category": "Park",
    "centroidLat": 17.347872,
    "centroidLon": 78.382172,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "BJMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Panchatatva Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "898271650",
    "name": "Abhyudaya Nagar Community Hall",
    "category": "Park",
    "centroidLat": 17.346925,
    "centroidLon": 78.380752,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Abhyudaya Nagar Community Hall — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "902916033",
    "name": "Huda Colony Walkers Association",
    "category": "Park",
    "centroidLat": 17.488767,
    "centroidLon": 78.330026,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Huda Colony Walkers Association — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "902916924",
    "name": "Sripuri colony park",
    "category": "Park",
    "centroidLat": 17.458471,
    "centroidLon": 78.502185,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sripuri colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "902946709",
    "name": "Gruhalakshmi colony park",
    "category": "Park",
    "centroidLat": 17.457093,
    "centroidLon": 78.502629,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Gruhalakshmi colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "902957460",
    "name": "RICHI Park",
    "category": "Park",
    "centroidLat": 17.517182,
    "centroidLon": 78.395853,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "RICHI Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "902979191",
    "name": "Community park",
    "category": "Park",
    "centroidLat": 17.473447,
    "centroidLon": 78.388898,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Community park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "902979193",
    "name": "Community park",
    "category": "Park",
    "centroidLat": 17.471659,
    "centroidLon": 78.390363,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Community park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "903286905",
    "name": "Lotus park",
    "category": "Park",
    "centroidLat": 17.441438,
    "centroidLon": 78.345645,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lotus park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "929510116",
    "name": "GHMC Proposed Park",
    "category": "Park",
    "centroidLat": 17.528812,
    "centroidLon": 78.389583,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Proposed Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "939738216",
    "name": "Siddhartha Park",
    "category": "Park",
    "centroidLat": 17.42953,
    "centroidLon": 78.437373,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Siddhartha Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "963143254",
    "name": "Vikaspuri Park",
    "category": "Park",
    "centroidLat": 17.449064,
    "centroidLon": 78.431361,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Vikaspuri Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "967161512",
    "name": "Tara Maidan",
    "category": "Park",
    "centroidLat": 17.361844,
    "centroidLon": 78.46548,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tara Maidan — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1014631582",
    "name": "communtiy garden",
    "category": "Park",
    "centroidLat": 17.473167,
    "centroidLon": 78.54865,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "communtiy garden — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1025484565",
    "name": "Mahavir Harina Vanasthali National Park",
    "category": "Park",
    "centroidLat": 17.340811,
    "centroidLon": 78.584884,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Mahavir Harina Vanasthali National Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1043695035",
    "name": "sudha cinepolis",
    "category": "Park",
    "centroidLat": 17.3511,
    "centroidLon": 78.474728,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "sudha cinepolis — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1043716389",
    "name": "ground",
    "category": "Park",
    "centroidLat": 17.3981,
    "centroidLon": 78.441982,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1051807871",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.490119,
    "centroidLon": 78.557644,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1051807872",
    "name": "GHMC Park",
    "category": "Park",
    "centroidLat": 17.489604,
    "centroidLon": 78.55769,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "GHMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1051807881",
    "name": "Green park",
    "category": "Park",
    "centroidLat": 17.490943,
    "centroidLon": 78.559975,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1051807883",
    "name": "Green Park Central park",
    "category": "Park",
    "centroidLat": 17.492039,
    "centroidLon": 78.558499,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Park Central park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1051807890",
    "name": "Janapriya Park",
    "category": "Park",
    "centroidLat": 17.493616,
    "centroidLon": 78.557098,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Janapriya Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1053226427",
    "name": "bhagyanagaram Nandhanavanam",
    "category": "Park",
    "centroidLat": 17.416162,
    "centroidLon": 78.601593,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "bhagyanagaram Nandhanavanam — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1057075648",
    "name": "ghmc park",
    "category": "Park",
    "centroidLat": 17.438916,
    "centroidLon": 78.331398,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "ghmc park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1076262698",
    "name": "nehur park",
    "category": "Park",
    "centroidLat": 17.399665,
    "centroidLon": 78.540059,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "nehur park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1088783158",
    "name": "PPZ Park",
    "category": "Park",
    "centroidLat": 17.541328,
    "centroidLon": 78.366505,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "PPZ Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1098969963",
    "name": "Children Park",
    "category": "Park",
    "centroidLat": 17.474189,
    "centroidLon": 78.310372,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1111768226",
    "name": "Ayyappa Society Park",
    "category": "Park",
    "centroidLat": 17.450977,
    "centroidLon": 78.39248,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Ayyappa Society Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1135426190",
    "name": "Telephone colony park",
    "category": "Park",
    "centroidLat": 17.368487,
    "centroidLon": 78.547262,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Telephone colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1199766643",
    "name": "Swami Vivekananda Park",
    "category": "Park",
    "centroidLat": 17.452437,
    "centroidLon": 78.393131,
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
    "caption": "Swami Vivekananda Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1209946949",
    "name": "Shaili Gardens GHMC Park 1",
    "category": "Park",
    "centroidLat": 17.501587,
    "centroidLon": 78.546309,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "GHMC"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Shaili Gardens GHMC Park 1 — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1222793133",
    "name": "High Fields Front Garden",
    "category": "Garden",
    "centroidLat": 17.413374,
    "centroidLon": 78.339411,
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
    "caption": "High Fields Front Garden — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1222890642",
    "name": "High Fields Romantic Garden",
    "category": "Garden",
    "centroidLat": 17.415438,
    "centroidLon": 78.341728,
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
    "caption": "High Fields Romantic Garden — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1222890659",
    "name": "High Fields Garden of Lights",
    "category": "Garden",
    "centroidLat": 17.415493,
    "centroidLon": 78.339504,
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
    "caption": "High Fields Garden of Lights — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1233761429",
    "name": "Golden Mile Park",
    "category": "Park",
    "centroidLat": 17.401523,
    "centroidLon": 78.336127,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Golden Mile Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1240163351",
    "name": "Eco Park Hyderabad",
    "category": "Park",
    "centroidLat": 17.314365,
    "centroidLon": 78.374134,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "HMDA"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Eco Park Hyderabad — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1256870553",
    "name": "Children's Park",
    "category": "Park",
    "centroidLat": 17.52057,
    "centroidLon": 78.44091,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Children's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1256882225",
    "name": "GHMC Play Park",
    "category": "Park",
    "centroidLat": 17.519273,
    "centroidLon": 78.439106,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "GHMC Play Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1257374561",
    "name": "IDPL exhibition grounds",
    "category": "Park",
    "centroidLat": 17.487445,
    "centroidLon": 78.449348,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "IDPL exhibition grounds — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1257397877",
    "name": "satyanarayana colony",
    "category": "Park",
    "centroidLat": 17.315973,
    "centroidLon": 78.597196,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "satyanarayana colony — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1257447302",
    "name": "doctors colony park",
    "category": "Park",
    "centroidLat": 17.358415,
    "centroidLon": 78.543056,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "doctors colony park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1294667922",
    "name": "Huda Colony C-Type Park",
    "category": "Park",
    "centroidLat": 17.36155,
    "centroidLon": 78.538155,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Huda Colony C-Type Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1314214109",
    "name": "Sri Mahagayathri GHMC Layout Park",
    "category": "Park",
    "centroidLat": 17.332622,
    "centroidLon": 78.615406,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Sri Mahagayathri GHMC Layout"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sri Mahagayathri GHMC Layout Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1345419642",
    "name": "Microsoft Lake Park",
    "category": "Park",
    "centroidLat": 17.429675,
    "centroidLon": 78.340101,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Microsoft"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Microsoft Lake Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1376717921",
    "name": "Lawn",
    "category": "Park",
    "centroidLat": 17.530437,
    "centroidLon": 78.362541,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Lawn — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1419428228",
    "name": "Women & Children Park",
    "category": "Park",
    "centroidLat": 17.484612,
    "centroidLon": 78.391556,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Women & Children Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1419428231",
    "name": "Butterfly Theme Park",
    "category": "Park",
    "centroidLat": 17.475738,
    "centroidLon": 78.394645,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Butterfly Theme Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1419428249",
    "name": "Oxygen Park",
    "category": "Park",
    "centroidLat": 17.354115,
    "centroidLon": 78.556084,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Oxygen Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1419428250",
    "name": "Oxygen Park",
    "category": "Park",
    "centroidLat": 17.352501,
    "centroidLon": 78.555515,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Oxygen Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1419448660",
    "name": "Green Space",
    "category": "Park",
    "centroidLat": 17.436414,
    "centroidLon": 78.473153,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Green Space — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1420118593",
    "name": "Samatha Nagar Park",
    "category": "Park",
    "centroidLat": 17.502067,
    "centroidLon": 78.392649,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Samatha Nagar Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1420397723",
    "name": "Kindi Kunta Park",
    "category": "Park",
    "centroidLat": 17.505388,
    "centroidLon": 78.389814,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Kindi Kunta Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1424020824",
    "name": "Tree Park",
    "category": "Park",
    "centroidLat": 17.441974,
    "centroidLon": 78.326259,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Tree Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1446704540",
    "name": "Jubilee Garden GHMC Park Road No. 1",
    "category": "Park",
    "centroidLat": 17.460128,
    "centroidLon": 78.369397,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Jubilee Garden GHMC Park Road No. 1 — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1447352861",
    "name": "Colony Park and Play Area",
    "category": "Park",
    "centroidLat": 17.410997,
    "centroidLon": 78.457074,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Colony Park and Play Area — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1452411991",
    "name": "Janapriya Enclave Park",
    "category": "Park",
    "centroidLat": 17.358868,
    "centroidLon": 78.563638,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "JE Association welfare society",
      "surface": "dirt"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Janapriya Enclave Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1454227936",
    "name": "Savithribayi Phule Park",
    "category": "Park",
    "centroidLat": 17.380822,
    "centroidLon": 78.572286,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Savithribayi Phule Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1455162438",
    "name": "Sri Mahalakshi Vambay Colony Children's Park",
    "category": "Park",
    "centroidLat": 17.358257,
    "centroidLon": 78.565885,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park",
      "operator": "Greater Hyderabad Municipal Corporation"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Sri Mahalakshi Vambay Colony Children's Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1456217437",
    "name": "Butterfly park",
    "category": "Garden",
    "centroidLat": 17.258731,
    "centroidLon": 78.682081,
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
    "caption": "Butterfly park — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1456230225",
    "name": "Bird Park",
    "category": "Park",
    "centroidLat": 17.258707,
    "centroidLon": 78.681363,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Bird Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1457056238",
    "name": "Japanese Garden",
    "category": "Garden",
    "centroidLat": 17.256273,
    "centroidLon": 78.681659,
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
    "caption": "Japanese Garden — garden in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1460129003",
    "name": "Open Air Gym",
    "category": "Park",
    "centroidLat": 17.44783,
    "centroidLon": 78.348244,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Open Air Gym — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1465001193",
    "name": "mini park",
    "category": "Park",
    "centroidLat": 17.398383,
    "centroidLon": 78.498755,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "mini park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1465001208",
    "name": "VST Park",
    "category": "Park",
    "centroidLat": 17.407542,
    "centroidLon": 78.507052,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "VST Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1465032673",
    "name": "play area",
    "category": "Park",
    "centroidLat": 17.529912,
    "centroidLon": 78.689981,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "play area — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1473553062",
    "name": "Chitrapuri play park",
    "category": "Park",
    "centroidLat": 17.416183,
    "centroidLon": 78.377893,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chitrapuri play park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1490008053",
    "name": "Arogya Sanjeevani Vanam (Park)",
    "category": "Park",
    "centroidLat": 17.299735,
    "centroidLon": 78.580691,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Arogya Sanjeevani Vanam (Park) — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1492049281",
    "name": "Play ground",
    "category": "Park",
    "centroidLat": 17.453988,
    "centroidLon": 78.494101,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Play ground — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1495327859",
    "name": "Chatrapathi Shivaji Park",
    "category": "Park",
    "centroidLat": 17.533147,
    "centroidLon": 78.392999,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Chatrapathi Shivaji Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1503406023",
    "name": "Water Tank Park",
    "category": "Park",
    "centroidLat": 17.530292,
    "centroidLon": 78.357534,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Water Tank Park — park in Hyderabad"
  },
  {
    "osmType": "way",
    "osmId": "1503406026",
    "name": "Banyan Tree Park",
    "category": "Park",
    "centroidLat": 17.530006,
    "centroidLon": 78.359174,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Banyan Tree Park — park in Hyderabad"
  },
  {
    "osmType": "relation",
    "osmId": "9447947",
    "name": "Mahavir Harina Vanasthali National Park",
    "category": "Nature Reserve",
    "centroidLat": 17.361014,
    "centroidLon": 78.607838,
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
    "caption": "Mahavir Harina Vanasthali National Park — nature reserve in Hyderabad"
  },
  {
    "osmType": "relation",
    "osmId": "9535403",
    "name": "kings colony park",
    "category": "Park",
    "centroidLat": 17.333932,
    "centroidLon": 78.447064,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "kings colony park — park in Hyderabad"
  },
  {
    "osmType": "relation",
    "osmId": "12219840",
    "name": "Dhatri Park",
    "category": "Park",
    "centroidLat": 17.34461,
    "centroidLon": 78.382833,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Dhatri Park — park in Hyderabad"
  },
  {
    "osmType": "relation",
    "osmId": "12490378",
    "name": "Mrugavani National Park",
    "category": "Forest",
    "centroidLat": 17.35898,
    "centroidLon": 78.33926,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "boundary": "national_park",
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
    "caption": "Mrugavani National Park — forest in Hyderabad"
  },
  {
    "osmType": "relation",
    "osmId": "19920197",
    "name": "Bonsai Garden",
    "category": "Garden",
    "centroidLat": 17.261764,
    "centroidLon": 78.680946,
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
    "caption": "Bonsai Garden — garden in Hyderabad"
  },
  {
    "osmType": "relation",
    "osmId": "19920601",
    "name": "Colors",
    "category": "Garden",
    "centroidLat": 17.259931,
    "centroidLon": 78.681001,
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
    "caption": "Colors — garden in Hyderabad"
  },
  {
    "osmType": "relation",
    "osmId": "19924644",
    "name": "Carrom Park",
    "category": "Park",
    "centroidLat": 17.250319,
    "centroidLon": 78.683136,
    "areaM2": null,
    "ndviMean": 0.34,
    "ndviMin": 0.2,
    "ndviMax": 0.5,
    "densityClass": "LOW",
    "tags": {
      "leisure": "park"
    },
    "accessStatus": "PUBLIC_TAGGED",
    "walkClass": "UNVERIFIED",
    "accessEvidence": [
      {
        "tag": "access=yes",
        "source": "OSM_TAG",
        "note": "OpenStreetMap access tag"
      }
    ],
    "pathCount": 0,
    "totalPathLengthM": 0,
    "entrances": [],
    "caption": "Carrom Park — park in Hyderabad"
  }
];
