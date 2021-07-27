import React from "react";
import getTemplate from "../Language/Templates";

const Currency = ({ localCurrency, currency, lang }) => {
  return (
    <div className="currency-container">
      <p>{getTemplate(lang, "exchange")} </p>
      <p>{`${localCurrency} ${getTemplate(lang, "EUR")} ${Number(
        Object.values(currency)
      ).toFixed(2)}`}</p>
    </div>
  );
};

export default Currency;
