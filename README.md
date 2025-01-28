# country-phone-info

`country-phone-info` is a TypeScript package that allows you to retrieve country information based on the international phone code. It extracts detailed information about the country (name, ISO code, capital, currency, etc.) using only the phone number prefix.

## Installation

You can install this package using [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/).

### With pnpm
```bash
pnpm add country-phone-info

```typescript
// Example phone number with country code
const phone = '+355692030123';

// Get country information from the phone number
const info = getInfoByPhone(phone);

if (info) {
  console.log('Country Name:', info.country.name);
  console.log('ISO Code:', info.country.iso3);
  console.log('Capital:', info.country.capital);
  console.log('Currency:', info.country.currency_name);
  console.log('Location:', info.country.latitude, info.country.longitude);
} else {
  console.log('No information found for this number.');
}


### Example: Split Phone Number into Country Code and the Rest of the Number

This function allows you to split a full phone number into the country code, the rest of the number, and the corresponding country name.

#### Import the Function
Make sure to import the `splitPhoneNumber` function from your package or module:

```typescript
import { splitPhoneNumber } from 'country-phone-info';

const phoneNumber = '+2210141822918';

try {
    const { countryCode, restOfNumber, countryName } = splitPhoneNumber(phoneNumber);
    console.log(`Country Code: ${countryCode}`); // Output: Country Code: 221
    console.log(`Rest of the Number: ${restOfNumber}`); // Output: Rest of the Number: 0141822918
    console.log(`Country Name: ${countryName}`); // Output: Country Name: Senegal
} catch (error) {
    console.error(error.message);
}
