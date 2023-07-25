import React from "react";
import Back from "../components/Back";
import { useSelector } from "react-redux";
import { ObjectISO } from "../world";
const Details = () => {
  const data = useSelector((state) => state.detailsData);
  const currencies = data.currencies;
  const keysCurrencies = Object.values(currencies);

  let arrayCurrencies = [];
  const valuesCurrencies = keysCurrencies.map((e) => {
    arrayCurrencies.push(Object.values(e));
  });
  let trueArrayCurrencies2 = [];
  const trueArrayCurrencies = arrayCurrencies.map((e) => {
    trueArrayCurrencies2.push(e[0]);
  });
  const languages = data.languages;
  const keyslanguages = Object.values(languages);
  const nativeName = data.nativeName;
  const keysnativeName = Object.values(nativeName);
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });
  function getName(borders) {
    return borders.map((e) => {
      return <span>{regionNamesInEnglish.of(e.substr(0, 2))}</span>;
    });
  }

  return (
    <div className="details">
      <Back />
      <div className="details-content">
        <div className="img-details">
          <img src={data.flag} alt="" />
        </div>
        <div className="data-content">
          <h2>{data.name}</h2>
          <div className="description-content">
            <div className="description-content1">
              <p>
                <strong>Native Name: </strong>
                {keysnativeName[0].common}
              </p>
              <p>
                <strong>Population: </strong>
                {data.population.toLocaleString()}
              </p>
              <p>
                <strong>Region: </strong>
                {data.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {data.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {data.capital}
              </p>
            </div>
            <div className="description-content2">
              <p>
                <strong>Top Level Domain: </strong>
                {data.topLevelDomain[0]}
              </p>
              <p>
                <strong>Currencies: </strong>
                {trueArrayCurrencies2.join(", ")}
              </p>
              <p>
                <strong>Languages: </strong>
                {keyslanguages.join(", ")}
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p>
              <span className="borders-container">
                <strong>Border Countries: </strong>
                {data.borders
                  ? data.borders.map((e) => {
                      const name = ObjectISO[e];
                      return <span>{name}</span>;
                    })
                  : "No borders countries"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
