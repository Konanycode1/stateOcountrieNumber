"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitPhoneNumber = void 0;
exports.getInfoByPhone = getInfoByPhone;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
// Résolution dynamique du chemin vers `data.json`
const dataPath = path_1.default.resolve(__dirname, 'utils/data.json');
const countryData = JSON.parse((0, fs_1.readFileSync)(dataPath, 'utf8'));
//  export function getInfoByPhone(phoneNumber: string): CountryInfo | null {
//     // Valider le format du numéro
//     if (!phoneNumber.startsWith('+')) {
//       throw new Error('Numéro invalide : doit commencer par "+"');
//     }
//     // Extraire l'indicatif
//     const cleanPhoneNumber = phoneNumber.replace(/\s+/g, ''); // Supprime les espaces
//     for (const country of countryData) {
//       if (cleanPhoneNumber.startsWith(`+${country.phonecode}`)) {
//         return {
//           country: {
//             id: country.id,
//             name: country.name,
//             iso3: country.iso3,
//             iso2: country.iso2,
//             numeric_code: country.numeric_code,
//             phonecode: country.phonecode,
//             capital: country.capital,
//             currency: country.currency,
//             currency_name: country.currency_name,
//             currency_symbol: country.currency_symbol,
//             tld: country.tld,
//             native: country.native,
//             region: country.region,
//             subregion: country.subregion,
//             nationality: country.nationality,
//             latitude: country.latitude,
//             longitude: country.longitude,
//             emoji: country.emoji,
//           },
//           states: country.states,
//           timezone: country.timezones,
//         };
//       }
//     }
//     return null; // Aucun pays trouvé
//   }
function getInfoByPhone(phoneNumber, keys) {
    if (!phoneNumber.startsWith("+")) {
        throw new Error('Numéro invalide : doit commencer par "+"');
    }
    const cleanPhoneNumber = phoneNumber.replace(/\s+/g, "");
    for (const country of countryData) {
        if (cleanPhoneNumber.startsWith(`+${country.phonecode}`)) {
            const fullInfo = {
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
            // 🔹 Aucun filtre → tout retourner
            if (!keys || keys.length === 0) {
                return fullInfo;
            }
            const result = {};
            for (const key of keys) {
                switch (key) {
                    case "country":
                        result.country = fullInfo.country;
                        break;
                    case "states":
                        result.states = fullInfo.states;
                        break;
                    case "timezone":
                        result.timezone = fullInfo.timezone;
                        break;
                    case "region":
                        result.region = fullInfo.country.region;
                        break;
                    case "subregion":
                        result.subregion = fullInfo.country.subregion;
                        break;
                    case "native":
                        result.native = fullInfo.country.native;
                    case "currency":
                        result.currency = fullInfo.country.currency;
                        break;
                    case "currency_name":
                        result.currency_name = fullInfo.country.currency_name;
                        break;
                    case "currency_symbol":
                        result.currency_symbol = fullInfo.country.currency_symbol;
                        break;
                    case "nationality":
                        result.nationality = fullInfo.country.nationality;
                        break;
                    case "longitude":
                        result.longitude = fullInfo.country.longitude;
                        break;
                    case "numeric_code":
                        result.numeric_code = fullInfo.country.numeric_code;
                        break;
                    case "capital":
                        result.capital = fullInfo.country.capital;
                        break;
                    case "phonecode":
                        result.phonecode = fullInfo.country.phonecode;
                        break;
                }
            }
            return result;
        }
    }
    return null;
}
/**
 * Function to split a phone number into country code and the rest of the number
 * @param phoneNumber - The full phone number including country code (e.g., +2210141822918)
 * @returns An object containing the country code and the rest of the number
 */
const splitPhoneNumber = (phoneNumber) => {
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
                number: restOfNumber,
                countryName: country.name,
            };
        }
    }
    // If no match is found
    return {
        countryCode: '',
        number: phoneNumber,
        countryName: null,
    };
};
exports.splitPhoneNumber = splitPhoneNumber;
// Exemple d'utilisation
// const phone = '+2250141822910';
// try {
//   const result = getInfoByPhone(phone, ["currency", "region"]);
// ;
//   // console.log(result);
//   if (result) {
//     console.log('Infos pays:', result);
//   } else {
//     console.log('Aucun pays trouvé pour ce numéro.');
//   }
// } catch (error) {
//   console.error('Erreur:', error);
// }
// try {
//   const result = splitPhoneNumber(phone);
//   console.log(result);
//   if (result) {
//     console.log('Infos:', result);
//   } else {
//     console.log('Aucun pays trouvé pour ce numéro.');
//   }
// } catch (error) {
//   console.error('Erreur:', error);
// }
