const languageTemplate = {
  en: {
    heroTitle: "DISCOVER EUROPE",
    subtitle: "WHAT ARE YOU WAITING FOR?",
    heroBtnLeft: "GET STARTED",
    heroBtnRight: "WATCH TRAILER",
    countriesTitle: "Explore country",
    capital: "Capital: ",
    removeBtn: "Remove",
    backBtn: "Back",
    nativeName: "Native Name:",
    population: "Population:",
    region: "Region:",
    subregion: "Sub Region:",
    domain: "Top Level Domain:",
    currencies: "Currencies:",
    languages: "Languages:",
    borderCountries: "Border Countries:",
    localTime: "Local Time",
    forecast: "Forecast",
    exchange: "Exchange Rate",
    EUR: " to EUR",
    lng: "Longitude",
    lat: "Latitude",
    zoom: "Zoom",
    searchPlaceholder: "Search country",
  },
  ru: {
    heroTitle: "ОТКРОЙТЕ ЕВРОПУ",
    subtitle: "ЧЕГО ВЫ ЖДЕТЕ?",
    heroBtnLeft: "ПОЕХАЛИ",
    heroBtnRight: "СМОТРЕТЬ ТРЕЙЛЕР",
    countriesTitle: "Откройте страну",
    capital: "Столица: ",
    backBtn: "Назад",
    nativeName: "Оригинальное название:",
    population: "Население:",
    region: "Регион:",
    subregion: "Субрегион:",
    domain: "Домен верхнего уровня:",
    currencies: "Валюты:",
    languages: "Языки:",
    borderCountries: "Приграничные страны:",
    removeBtn: "Удалить",
    localTime: "Местное Время",
    forecast: "Прогноз",
    exchange: "Курсы Валют",
    EUR: "к Евро",
    lng: "Долгота",
    lat: "Широта",
    zoom: "Масштаб",
    searchPlaceholder: "Поиск страны",
  },
};

const getTemplate = (language, word) => languageTemplate[language][word];

export default getTemplate;
