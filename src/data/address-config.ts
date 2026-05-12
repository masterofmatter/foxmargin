/**
 * Per-country address-field config for the Business Profile modal and the
 * document generators (invoice, receipt, quote, purchase order).
 *
 * regionLabel / postalLabel = null means that country has no concept of a
 * state/region or postal code — the field is hidden when the country is
 * selected (e.g. Singapore has no states; Hong Kong has no postal codes).
 *
 * Single source of truth. The component serializes this into a top-level
 * `var ADDR_CONFIG` global so document-page scripts can read it directly
 * via `typeof ADDR_CONFIG !== 'undefined' ? ADDR_CONFIG[code] : null`.
 */
export interface AddrConfigEntry {
  regionLabel: string | null;
  regionPh: string;
  postalLabel: string | null;
  postalPh: string;
}

export const ADDR_DEFAULT: AddrConfigEntry = {
  regionLabel: 'State / Region',
  regionPh: '',
  postalLabel: 'Postal Code',
  postalPh: '',
};

export const ADDR_CONFIG: Record<string, AddrConfigEntry> = {
  US: { regionLabel: 'State',          regionPh: 'TX',            postalLabel: 'ZIP Code',       postalPh: '10001'       },
  CA: { regionLabel: 'Province',       regionPh: 'ON',            postalLabel: 'Postal Code',    postalPh: 'M5V 2T6'     },
  GB: { regionLabel: 'County',         regionPh: 'Surrey',        postalLabel: 'Postcode',       postalPh: 'SW1A 1AA'    },
  AU: { regionLabel: 'State',          regionPh: 'NSW',           postalLabel: 'Postcode',       postalPh: '2000'        },
  NZ: { regionLabel: 'Region',         regionPh: 'Auckland',      postalLabel: 'Postcode',       postalPh: '1010'        },
  IE: { regionLabel: 'County',         regionPh: 'Dublin',        postalLabel: 'Eircode',        postalPh: 'D01 F5P2'    },
  IN: { regionLabel: 'State',          regionPh: 'Maharashtra',   postalLabel: 'PIN Code',       postalPh: '400001'      },
  SG: { regionLabel: null,             regionPh: '',              postalLabel: 'Postal Code',    postalPh: '018989'      },
  HK: { regionLabel: 'District',       regionPh: 'Kowloon',       postalLabel: null,             postalPh: ''            },
  ZA: { regionLabel: 'Province',       regionPh: 'Gauteng',       postalLabel: 'Postal Code',    postalPh: '2000'        },
  NG: { regionLabel: 'State',          regionPh: 'Lagos',         postalLabel: 'Postal Code',    postalPh: '100001'      },
  DE: { regionLabel: 'State',          regionPh: 'Bayern',        postalLabel: 'Postleitzahl',   postalPh: '80331'       },
  AT: { regionLabel: 'State',          regionPh: 'Wien',          postalLabel: 'Postleitzahl',   postalPh: '1010'        },
  CH: { regionLabel: 'Canton',         regionPh: 'Zürich',        postalLabel: 'PLZ',            postalPh: '8001'        },
  FR: { regionLabel: 'Department',     regionPh: '75',            postalLabel: 'Code postal',    postalPh: '75001'       },
  NL: { regionLabel: 'Province',       regionPh: 'Noord-Holland', postalLabel: 'Postcode',       postalPh: '1011 AB'     },
  BE: { regionLabel: 'Province',       regionPh: 'Antwerp',       postalLabel: 'Postcode',       postalPh: '2000'        },
  ES: { regionLabel: 'Province',       regionPh: 'Madrid',        postalLabel: 'Código Postal',  postalPh: '28001'       },
  PT: { regionLabel: 'District',       regionPh: 'Lisboa',        postalLabel: 'Código Postal',  postalPh: '1000-001'    },
  IT: { regionLabel: 'Province',       regionPh: 'RM',            postalLabel: 'CAP',            postalPh: '00100'       },
  SE: { regionLabel: 'County',         regionPh: 'Stockholm',     postalLabel: 'Postnummer',     postalPh: '111 20'      },
  NO: { regionLabel: 'County',         regionPh: 'Oslo',          postalLabel: 'Postnummer',     postalPh: '0150'        },
  DK: { regionLabel: 'Region',         regionPh: 'Midtjylland',   postalLabel: 'Postnummer',     postalPh: '1050'        },
  FI: { regionLabel: 'Region',         regionPh: 'Uusimaa',       postalLabel: 'Postinumero',    postalPh: '00100'       },
  PL: { regionLabel: 'Voivodeship',    regionPh: 'Masovian',      postalLabel: 'Kod pocztowy',   postalPh: '00-001'      },
  RO: { regionLabel: 'County',         regionPh: 'Ilfov',         postalLabel: 'Cod poștal',     postalPh: '010011'      },
  CZ: { regionLabel: 'Region',         regionPh: 'Prague',        postalLabel: 'PSČ',            postalPh: '110 00'      },
  SK: { regionLabel: 'Region',         regionPh: 'Bratislava',    postalLabel: 'PSČ',            postalPh: '811 01'      },
  HU: { regionLabel: 'County',         regionPh: 'Pest',          postalLabel: 'Irányítószám',   postalPh: '1011'        },
  GR: { regionLabel: 'Region',         regionPh: 'Attica',        postalLabel: 'Postal Code',    postalPh: '105 57'      },
  BR: { regionLabel: 'State',          regionPh: 'SP',            postalLabel: 'CEP',            postalPh: '01310-100'   },
  MX: { regionLabel: 'State',          regionPh: 'CDMX',          postalLabel: 'Código Postal',  postalPh: '06600'       },
  AR: { regionLabel: 'Province',       regionPh: 'Buenos Aires',  postalLabel: 'Código Postal',  postalPh: 'C1000'       },
  CL: { regionLabel: 'Region',         regionPh: 'Metropolitana', postalLabel: 'Código Postal',  postalPh: '8320000'     },
  CO: { regionLabel: 'Department',     regionPh: 'Cundinamarca',  postalLabel: 'Código Postal',  postalPh: '110111'      },
  JP: { regionLabel: 'Prefecture',     regionPh: 'Tokyo',         postalLabel: 'Postal Code',    postalPh: '100-0001'    },
  CN: { regionLabel: 'Province',       regionPh: 'Guangdong',     postalLabel: 'Postal Code',    postalPh: '510000'      },
  KR: { regionLabel: 'Province',       regionPh: 'Seoul',         postalLabel: 'Postal Code',    postalPh: '03000'       },
  TW: { regionLabel: 'County/City',    regionPh: 'Taipei',        postalLabel: 'Postal Code',    postalPh: '100'         },
  MY: { regionLabel: 'State',          regionPh: 'Selangor',      postalLabel: 'Postcode',       postalPh: '50450'       },
  ID: { regionLabel: 'Province',       regionPh: 'DKI Jakarta',   postalLabel: 'Kode Pos',       postalPh: '10110'       },
  TH: { regionLabel: 'Province',       regionPh: 'Bangkok',       postalLabel: 'Postal Code',    postalPh: '10100'       },
  PH: { regionLabel: 'Province',       regionPh: 'Metro Manila',  postalLabel: 'ZIP Code',       postalPh: '1000'        },
  PK: { regionLabel: 'Province',       regionPh: 'Punjab',        postalLabel: 'Postal Code',    postalPh: '54000'       },
  BD: { regionLabel: 'Division',       regionPh: 'Dhaka',         postalLabel: 'Postal Code',    postalPh: '1000'        },
  LK: { regionLabel: 'Province',       regionPh: 'Western',       postalLabel: 'Postal Code',    postalPh: '00100'       },
  VN: { regionLabel: 'Province',       regionPh: 'Hanoi',         postalLabel: 'Postal Code',    postalPh: '100000'      },
  AE: { regionLabel: 'Emirate',        regionPh: 'Dubai',         postalLabel: null,             postalPh: ''            },
  SA: { regionLabel: 'Region',         regionPh: 'Riyadh',        postalLabel: 'Postal Code',    postalPh: '11564'       },
  QA: { regionLabel: 'Municipality',   regionPh: 'Ad Dawhah',     postalLabel: null,             postalPh: ''            },
  KW: { regionLabel: 'Governorate',    regionPh: 'Al Asimah',     postalLabel: 'Postal Code',    postalPh: '13001'       },
  BH: { regionLabel: 'Governorate',    regionPh: 'Capital',       postalLabel: 'Postal Code',    postalPh: '317'         },
  OM: { regionLabel: 'Governorate',    regionPh: 'Muscat',        postalLabel: 'Postal Code',    postalPh: '100'         },
  IL: { regionLabel: 'District',       regionPh: 'Tel Aviv',      postalLabel: 'Postal Code',    postalPh: '6100000'     },
  TR: { regionLabel: 'Province',       regionPh: 'İstanbul',      postalLabel: 'Posta Kodu',     postalPh: '34000'       },
  EG: { regionLabel: 'Governorate',    regionPh: 'Cairo',         postalLabel: 'Postal Code',    postalPh: '11511'       },
  MA: { regionLabel: 'Region',         regionPh: 'Casablanca',    postalLabel: 'Code Postal',    postalPh: '20000'       },
  KE: { regionLabel: 'County',         regionPh: 'Nairobi',       postalLabel: 'Postal Code',    postalPh: '00100'       },
  GH: { regionLabel: 'Region',         regionPh: 'Greater Accra', postalLabel: null,             postalPh: ''            },
};
