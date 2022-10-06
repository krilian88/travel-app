import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from './components/Countries';
import Country from './components/Country';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');
    const [lang, setLang] = useState('en');

    const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop - 80);

    const heroRef = useRef();
    const countriesRef = useRef();
    const searchRef = useRef();

    const currentLanguage = localStorage.getItem('selectedLanguage');

    if (!localStorage.getItem('selectedLanguage')) {
        setLang('en');
        localStorage.setItem('selectedLanguage', lang);
    }

    const handleLanguageChange = (event) => {
        setLang(event.target.value);
        localStorage.setItem('selectedLanguage', event.target.value);
    };

    useEffect(() => {
        fetch('https://restcountries.com/v2/region/europe')
            .then((res) => res.json())
            .then((result) => {
                setCountries(result);
            });
    }, []);

    const removeCountry = (numericCode) => {
        const newCountry = countries.filter(
            (country) => country.numericCode !== numericCode
        );
        setCountries(newCountry);
    };

    const handleSearchChange = (value) => {
        setFilter(value);
    };

    return (
        <>
            <Router>
                <Header
                    handleSearchChange={handleSearchChange}
                    pathname={'/countries'}
                    lang={currentLanguage}
                    handleLanguageChange={handleLanguageChange}
                    reference={searchRef}
                    scroll={() => scrollToDiv(countriesRef)}
                />
                <Route exact path='/'>
                    <HeroSection
                        lang={currentLanguage}
                        heroRef={heroRef}
                        scroll={() => scrollToDiv(countriesRef)}
                    />
                    <Countries
                        countries={countries}
                        removeCountry={removeCountry}
                        filter={filter}
                        lang={currentLanguage}
                        countriesRef={countriesRef}
                        setFilter={setFilter}
                    />
                </Route>
                <Route
                    path='/countries/:name'
                    children={<Country lang={currentLanguage} />}
                />
                <Footer />
            </Router>
        </>
    );
}

export default App;
