export interface CountryInfo {
    country: {
      id: number;
      name: string;
      iso3: string;
      iso2: string;
      numeric_code: string;
      phonecode: string;
      capital: string;
      currency: string;
      currency_name: string;
      currency_symbol: string;
      tld: string;
      native: string;
      region: string;
      subregion: string;
      nationality: string;
      latitude: string;
      longitude: string;
      emoji: string;
    };
    states: any[];
    timezone: any[];
  }