import path from 'path';
import { readFileSync } from 'fs';
import { CountryInfo } from './interface/interface.countrie';

// Résolution dynamique du chemin vers `data.json`
const dataPath = path.resolve(__dirname, 'utils/data.json');
const countryData = JSON.parse(readFileSync(dataPath, 'utf8'));

  

 export function getInfoByPhone(phoneNumber: string): CountryInfo | null {
    // Valider le format du numéro
    if (!phoneNumber.startsWith('+')) {
      throw new Error('Numéro invalide : doit commencer par "+"');
    }
  
    // Extraire l'indicatif
    const cleanPhoneNumber = phoneNumber.replace(/\s+/g, ''); // Supprime les espaces
    for (const country of countryData) {
      if (cleanPhoneNumber.startsWith(`+${country.phonecode}`)) {
        return {
          country: {
            id: country.id,
            name: country.name,
            iso3: country.iso3,
            iso2: country.iso2,
            numeric_code: country.numeric_code,
            phonecode: country.phonecode,
            capital: country.capital,
            currency: country.currency,
            currency_name: country.currency_name,
            currency_symbol: country.currency_symbol,
            tld: country.tld,
            native: country.native,
            region: country.region,
            subregion: country.subregion,
            nationality: country.nationality,
            latitude: country.latitude,
            longitude: country.longitude,
            emoji: country.emoji,
          },
          states: country.states,
          timezone: country.timezones,
        };
      }
    }
  
    return null; // Aucun pays trouvé
  }



/**
 * Function to split a phone number into country code and the rest of the number
 * @param phoneNumber - The full phone number including country code (e.g., +2210141822918)
 * @returns An object containing the country code and the rest of the number
 */
export const splitPhoneNumber = (phoneNumber: string): { countryCode: string; restOfNumber: string; countryName: string | null } => {
    if (!phoneNumber.startsWith('+')) {
        throw new Error("The phone number must start with '+'.");
    }

    // Remove the "+" and iterate over the country codes to find a match
    const cleanedNumber = phoneNumber.slice(1);
    for (const country of countryData) {
        const countryCode = country.phonecode;

        // Check if the number starts with the current country's phone code
        if (cleanedNumber.startsWith(countryCode)) {
            const restOfNumber = cleanedNumber.slice(countryCode.length);
            return {
                countryCode,
                restOfNumber,
                countryName: country.name,
            };
        }
    }

    // If no match is found
    return {
        countryCode: '',
        restOfNumber: phoneNumber,
        countryName: null,
    };
};

// Exemple d'utilisation
const phone = '+2250141822918';
// try {
//   const result = getInfoByPhone(phone);
//   console.log(result);
//   if (result) {
//     console.log('Informations trouvées :', result);
//   } else {
//     console.log('Aucun pays trouvé pour ce numéro.');
//   }
// } catch (error) {
//   console.error('Erreur:', error);
// }


try {
  const result = splitPhoneNumber(phone);
  console.log(result);
  if (result) {
    console.log('Informations trouvées :', result);
  } else {
    console.log('Aucun pays trouvé pour ce numéro.');
  }
} catch (error) {
  console.error('Erreur:', error);
}