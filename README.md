
# Country Phone Info

A small TypeScript utility to **detect a country from an international phone number** (E.164 format like `+225...`) and return **country details** (currency, region, timezone, states, etc.), with an optional key filter.
It also provides a helper to **split a phone number** into `{ countryCode, number, countryName }`.

## Features

- ✅ Find country info from a phone number (`+XXX...`)
- ✅ Return full info or only selected fields (filter by keys)
- ✅ Split a phone number into:
  - country calling code
  - local number part
  - country name
- ✅ Works with a JSON dataset (`data.json`) shipped in the package

---

## Installation

```bash

npm i country-phone-info
# or
yarn add country-phone-info
# or
pnpm add country-phone-info
```


## CountryInfoKey

You can request one or many keys from the list below:

* country
* states
* timezone
* region
* subregion
* native
* currency
* currency_name
* currency_symbol
* nationality
* longitude
* latitude
* numeric_code
* capital
* phonecode

## how to use
```bash
# =========================
# Bash example (README)
# =========================
# This section shows how to use the package from a terminal.
# Requirements: Node.js >= 18

# 1) Create a small test file (ESM)

## Example output

```

Here’s what you should see when running the example with:

```ts
import { getInfoByPhone, splitPhoneNumber } from "country-phone-info";

const phone = "+2250141822910";

// 1) Full info
const fullInfo = getInfoByPhone(phone);
console.log("\nFULL INFO:");
console.log(fullInfo);

// 2) Partial info (filtered keys)
const partialInfo = getInfoByPhone(phone, ["currency", "region"]);
console.log("\nInfos pays:", partialInfo);

// 3) Split phone number
const split = splitPhoneNumber(phone);
console.log("\nInfos contact:", split);

```

```JSON

## All response 

FULL INFO:
{
  country: {
    id: 56,
    name: "Cote D'Ivoire (Ivory Coast)",
    iso3: "CIV",
    iso2: "CI",
    numeric_code: "384",
    phonecode: "225",
    capital: "Yamoussoukro",
    currency: "XOF",
    currency_name: "West African CFA franc",
    currency_symbol: "CFA",
    tld: ".ci",
    native: "Côte d'Ivoire",
    region: "Africa",
    subregion: "Western Africa",
    nationality: "Ivorian",
    latitude: "8.00000000",
    longitude: "-5.00000000",
    emoji: "🇨🇮"
  },
  states: [...],
  timezone: [...]
}

Infos pays: { currency: 'XOF', region: 'Africa' }

Infos contact: {
  countryCode: '225',
  number: '0141822910',
  countryName: "Cote D'Ivoire (Ivory Coast)"
}
```


## MIT License

Copyright (c) 2026 Abraham Konan Kouamé (Konanycode1)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Author

**Abraham Konan Kouamé**  
- Email: abrahamkonany@gmail.com  
- GitHub: Konanycode1

