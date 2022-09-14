## General info

This package can help you to get info about current country, capital and time

## Technologies

Project using the external package to get all the countries (world-countries-capitals)

- JavaScript

## Setup

To use this package you need to install it in you project:

```
$ npm install get-current-country-info OR npm i get-current-country-info
```

## Usage

Import the functions you need into your project:

```
$ import { getCurrentCountryInfo, getCurrentCountry, getCurrentTime, getCurrentCapital } from 'get-current-country-info';
```

#### Example getCurrentCountryInfo() to get info:

```
$ import { getCurrentCountryInfo} from 'get-current-country-info'

$ getCurrentCountryInfo() // {country: "Sweden", time: "7:57:16 PM", capital: "Stockholm"}
```

#### Example getCurrentCountry() to get info:

```
$ import { getCurrentCountry} from 'get-current-country-info'

$ getCurrentCountry() // Sweden
```

#### Example getCurrentTime() to get info:

```
$ import { getCurrentTime} from 'get-current-country-info'

$ getCurrentTime() // 7:57:16 PM
```

#### Example getCurrentCapital() to get info:

```
$ import { getCurrentCapital} from 'get-current-country-info'

$ getCurrentCapital() // Stockholm
```
