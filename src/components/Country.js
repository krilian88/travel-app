import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from './Button';
import './Country.css';
import Gallery from './CountryPage/Gallery/Gallery';
import Info from './CountryPage/Info';
import Map from './CountryPage/Map';
import Video from './CountryPage/Video/Video';
import Widgets from './CountryPage/Widgets';
import Loader from './Loader/Loader';
import getTemplate from './Language/Templates';

const Country = ({ lang }) => {
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const { name } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`https://restcountries.com/v2/name/${name}`)
            .then((res) => res.json())
            .then((result) => {
                setCountry(result);
                setLoading(false);
            });
    }, [name]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {country.map((countryInfo) => {
                        const {
                            numericCode,
                            alpha3Code,
                            name,
                            currencies,
                            capital,
                            latlng: [lat, lng],
                        } = countryInfo;
                        return (
                            <div key={numericCode} className='country'>
                                <Button
                                    to='/'
                                    className='btns'
                                    buttonStyle='btn--outline'
                                    buttonSize='btn--medium'
                                >
                                    <i className='fas fa-arrow-left'></i>{' '}
                                    {getTemplate(lang, 'backBtn')}
                                </Button>
                                <div className='country-description'>
                                    <Widgets
                                        lat={lat}
                                        lng={lng}
                                        localCurrency={currencies[0].code}
                                        capital={capital}
                                        lang={lang}
                                    />
                                    <Info {...countryInfo} lang={lang} />
                                </div>
                                <Gallery countryName={name} lang={lang} />
                                <Video countryName={name} />
                                <Map
                                    lat={lat}
                                    lng={lng}
                                    code={alpha3Code}
                                    lang={lang}
                                />
                            </div>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default Country;
