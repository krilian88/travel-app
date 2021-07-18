import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Countries.css";
import getTemplate from "./Language/Templates";

const Countries = ({
  countries,
  removeCountry,
  filter,
  lang,
  countriesRef,
}) => {
  return (
    <>
      <section className="countries-wrapper" ref={countriesRef}>
        <h1 className="countries-header">
          {getTemplate(lang, "countriesTitle")}
        </h1>
        <div className="grid">
          {countries.map((country) => {
            const filtered =
              country.name.toLowerCase().includes(filter) ||
              country.capital.toLowerCase().includes(filter);
            const { numericCode, name, capital, flag } = country;
            if (filtered) {
              return (
                <Link
                  key={numericCode}
                  className="card"
                  to={`/countries/${name}`}
                >
                  <div className="card-wrapper">
                    <div className="img-wrapper">
                      <img src={flag} alt={name} />
                    </div>
                    <div className="details">
                      <h3>{name}</h3>
                      <h4>
                        {getTemplate(lang, "capital")}
                        <span>{capital}</span>
                      </h4>
                      <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--medium"
                        onClick={() => removeCountry(numericCode)}
                      >
                        {getTemplate(lang, "removeBtn")}
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            }
            return false;
          })}
        </div>
      </section>
    </>
  );
};

export default Countries;
