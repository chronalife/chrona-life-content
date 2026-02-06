export type CountryConfig = {
  /** ISO 3166-1 alpha-2 code in lowercase */
  id: string;
  /** Display name */
  name: string;
  /** Optional background image for UI cards */
  image?: {
    url: string;
    credit: string;
  };
  /** Common major cities for birthplace selection */
  cities: string[];
  /** Sources used to validate names/cities (per country) */
  sources: string[];
};

/**
 * Shareable config: keep additions small, well-sourced, and easy to review.
 * - Use ISO-2 `id`
 * - Add 3–6 well-known cities
 * - Include at least one source URL (official or reputable)
 */
export const countries: CountryConfig[] = [
  {
    id: 'us',
    name: 'United States',
    image: {
      url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
    sources: ['https://www.census.gov'],
  },
  {
    id: 'ca',
    name: 'Canada',
    image: {
      url: 'https://source.unsplash.com/1200x900/?canada,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Ottawa'],
    sources: ['https://www.statcan.gc.ca'],
  },
  {
    id: 'mx',
    name: 'Mexico',
    image: {
      url: 'https://source.unsplash.com/1200x900/?mexico,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana'],
    sources: ['https://www.inegi.org.mx'],
  },
  {
    id: 'br',
    name: 'Brazil',
    image: {
      url: 'https://source.unsplash.com/1200x900/?brazil,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Sao Paulo', 'Rio de Janeiro', 'Brasilia', 'Salvador', 'Fortaleza'],
    sources: ['https://www.ibge.gov.br'],
  },
  {
    id: 'ar',
    name: 'Argentina',
    image: {
      url: 'https://source.unsplash.com/1200x900/?argentina,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Buenos Aires', 'Cordoba', 'Rosario', 'Mendoza', 'La Plata'],
    sources: ['https://www.indec.gob.ar'],
  },
  {
    id: 'gb',
    name: 'United Kingdom',
    image: {
      url: 'https://source.unsplash.com/1200x900/?united-kingdom,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool'],
    sources: ['https://www.ons.gov.uk'],
  },
  {
    id: 'fr',
    name: 'France',
    image: {
      url: 'https://source.unsplash.com/1200x900/?france,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'],
    sources: ['https://www.insee.fr'],
  },
  {
    id: 'de',
    name: 'Germany',
    image: {
      url: 'https://source.unsplash.com/1200x900/?germany,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt'],
    sources: ['https://www.destatis.de'],
  },
  {
    id: 'es',
    name: 'Spain',
    image: {
      url: 'https://source.unsplash.com/1200x900/?spain,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza'],
    sources: ['https://www.ine.es'],
  },
  {
    id: 'it',
    name: 'Italy',
    image: {
      url: 'https://source.unsplash.com/1200x900/?italy,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo'],
    sources: ['https://www.istat.it'],
  },
  {
    id: 'nl',
    name: 'Netherlands',
    image: {
      url: 'https://source.unsplash.com/1200x900/?netherlands,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven'],
    sources: ['https://www.cbs.nl'],
  },
  {
    id: 'se',
    name: 'Sweden',
    image: {
      url: 'https://source.unsplash.com/1200x900/?sweden,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Stockholm', 'Gothenburg', 'Malmo', 'Uppsala', 'Vasteras'],
    sources: ['https://www.scb.se'],
  },
  {
    id: 'no',
    name: 'Norway',
    image: {
      url: 'https://source.unsplash.com/1200x900/?norway,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen'],
    sources: ['https://www.ssb.no'],
  },
  {
    id: 'pl',
    name: 'Poland',
    image: {
      url: 'https://source.unsplash.com/1200x900/?poland,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Warsaw', 'Krakow', 'Lodz', 'Wroclaw', 'Poznan'],
    sources: ['https://stat.gov.pl'],
  },
  {
    id: 'tr',
    name: 'Turkey',
    image: {
      url: 'https://source.unsplash.com/1200x900/?turkey,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya'],
    sources: ['https://data.tuik.gov.tr'],
  },
  {
    id: 'eg',
    name: 'Egypt',
    image: {
      url: 'https://source.unsplash.com/1200x900/?egypt,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Cairo', 'Alexandria', 'Giza', 'Shubra El-Kheima', 'Port Said'],
    sources: ['https://www.capmas.gov.eg'],
  },
  {
    id: 'za',
    name: 'South Africa',
    image: {
      url: 'https://source.unsplash.com/1200x900/?south-africa,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'],
    sources: ['https://www.statssa.gov.za'],
  },
  {
    id: 'ng',
    name: 'Nigeria',
    image: {
      url: 'https://source.unsplash.com/1200x900/?nigeria,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Lagos', 'Abuja', 'Kano', 'Ibadan', 'Port Harcourt'],
    sources: ['https://nigerianstat.gov.ng'],
  },
  {
    id: 'ke',
    name: 'Kenya',
    image: {
      url: 'https://source.unsplash.com/1200x900/?kenya,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'],
    sources: ['https://www.knbs.or.ke'],
  },
  {
    id: 'in',
    name: 'India',
    image: {
      url: 'https://source.unsplash.com/1200x900/?india,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai'],
    sources: ['https://www.censusindia.gov.in'],
  },
  {
    id: 'pk',
    name: 'Pakistan',
    image: {
      url: 'https://source.unsplash.com/1200x900/?pakistan,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan'],
    sources: ['https://www.pbs.gov.pk'],
  },
  {
    id: 'cn',
    name: 'China',
    image: {
      url: 'https://source.unsplash.com/1200x900/?china,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Chengdu'],
    sources: ['https://www.stats.gov.cn'],
  },
  {
    id: 'jp',
    name: 'Japan',
    image: {
      url: 'https://source.unsplash.com/1200x900/?japan,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo'],
    sources: ['https://www.stat.go.jp'],
  },
  {
    id: 'kr',
    name: 'South Korea',
    image: {
      url: 'https://source.unsplash.com/1200x900/?south-korea,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'],
    sources: ['https://kostat.go.kr'],
  },
  {
    id: 'au',
    name: 'Australia',
    image: {
      url: 'https://source.unsplash.com/1200x900/?australia,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    sources: ['https://www.abs.gov.au'],
  },
  {
    id: 'nz',
    name: 'New Zealand',
    image: {
      url: 'https://source.unsplash.com/1200x900/?new-zealand,city',
      credit: 'Unsplash (dynamic)',
    },
    cities: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga'],
    sources: ['https://www.stats.govt.nz'],
  },
];

export const defaultCountryId = 'us';

export function getCountryById(countryId: string): CountryConfig | undefined {
  return countries.find((country) => country.id === countryId);
}

export function getCountryName(countryId: string): string {
  return getCountryById(countryId)?.name || 'United States';
}
