"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfoByPhone = getInfoByPhone;
const fs_1 = require("fs");
const rawData = (0, fs_1.readFileSync)('./src/utils/data.json', 'utf-8');
const countryData = JSON.parse(rawData);
function getInfoByPhone(phoneNumber) {
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
// Exemple d'utilisation
// const phone = '+2250141822918';
// try {
//   const result = getInfoByPhone(phone);
//   if (result) {
//     console.log('Informations trouvées :', result);
//   } else {
//     console.log('Aucun pays trouvé pour ce numéro.');
//   }
// } catch (error) {
//   console.error('Erreur:', error);
// }
