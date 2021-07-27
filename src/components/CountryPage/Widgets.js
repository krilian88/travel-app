import React, { useState, useEffect, useCallback } from "react";
import Currency from "./Currency";
import Time from "./Time";
import Weather from "./Weather";

const Widgets = ({ lat, lng, capital, localCurrency, lang }) => {
  const getToday = useCallback(() => {
    const date = new Date();
    return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
      date.getDate()
    )}`;
  }, []);

  function addZero(time) {
    if (time < 10) {
      time = "0" + time;
    }

    return time;
  }

  const [currency, setCurrency] = useState({});

  useEffect(() => {
    fetch(
      `http://api.exchangeratesapi.io/v1/${getToday()}?access_key=3f511a29738f379f4d11cf6557da5a0f&symbols=${localCurrency}`
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrency(result);
      });
  }, [localCurrency, getToday]);

  return (
    <div className="widgets">
      <div className="clock">
        <Time capital={capital} lang={lang} />
      </div>
      <Weather lat={lat} lng={lng} lang={lang} />
      {currency.rates && (
        <Currency
          localCurrency={localCurrency}
          currency={currency.rates}
          lang={lang}
        />
      )}
    </div>
  );
};

export default Widgets;
