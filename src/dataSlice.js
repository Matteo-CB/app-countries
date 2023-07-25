import { createSlice } from "@reduxjs/toolkit";

async function fetchAPI() {
  let countries = [];
  
  await fetch("https://restcountries.com/v3.1/all")
    .then((e) => e.json())
    .then((e) => {
      e.map((res, index) => {
        countries.push({
          id: index,
          flag: res.flags.svg,
          name: res.name.common,
          nativeName: res.name.nativeName,
          population: res.population,
          region: res.region,
          subregion: res.subregion,
          capital: res.capital,
          topLevelDomain: res.tld,
          currencies: res.currencies,
          languages: res.languages,
          borders: res.borders,
        });
      });
    });
  return countries;
}
const dataCountries = await fetchAPI();
const dataSlice = createSlice({
  name: "data",
  initialState: dataCountries,
});

export default dataSlice.reducer;
