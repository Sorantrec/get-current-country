function getCurrentCountry() {
  const wcc = require("world-countries-capitals");
  const capital = getCurrentCapital();
  const country = wcc.getCountryDetailsByCapital(capital)[0].country;

  return country.replace(country.charAt(0), country.charAt(0).toUpperCase());
}

function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

function getCurrentCapital() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const capital = timezone.split("/")[1];

  return capital;
}

function getCurrentCountryInfo() {
  return {
    country: getCurrentCountry(),
    time: getCurrentTime(),
    capital: getCurrentCapital()
  };
}

module.exports = {
  getCurrentCountryInfo, getCurrentCountry, getCurrentTime, getCurrentCapital
}