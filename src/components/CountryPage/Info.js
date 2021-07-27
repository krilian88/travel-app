import React from "react";
import getTemplate from "../Language/Templates";

const Info = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
  lang,
}) => {
  return (
    <>
      <div className="info-wrapper">
        <div className="info-flag">
          <img src={flag} alt={name} />
        </div>
        <div className="info-description">
          <div>
            <h2>{name}</h2>
            <h5>
              {getTemplate(lang, "nativeName")} <span>{nativeName}</span>
            </h5>
            <h5>
              {getTemplate(lang, "population")} <span>{population}</span>
            </h5>
            <h5>
              {getTemplate(lang, "region")} <span>{region}</span>
            </h5>
            <h5>
              {getTemplate(lang, "subregion")} <span>{subregion}</span>
            </h5>
            <h5>
              {getTemplate(lang, "capital")} <span>{capital}</span>
            </h5>
          </div>
          <div>
            <h5>
              {getTemplate(lang, "domain")} <span>{topLevelDomain}</span>
            </h5>
            <h5>
              {getTemplate(lang, "currencies")}{" "}
              <span>
                {currencies[0].name} ({currencies[0].code})
              </span>
            </h5>
            <h5>
              {getTemplate(lang, "languages")} <span>{languages[0].name}</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="borders">
        <h3>{getTemplate(lang, "borderCountries")} </h3>
        <div className="info-borders">
          {borders.map((border) => {
            return (
              <ul key={border}>
                <li>{border}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Info;
