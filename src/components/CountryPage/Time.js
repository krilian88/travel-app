import React, { useEffect, useState, useCallback } from 'react';
import cityTimezones from 'city-timezones';
import getTemplate from '../Language/Templates';

const Time = ({ capital, lang }) => {
    const [time, setTime] = useState('');
    const cityLookup = cityTimezones.lookupViaCity(capital);
    const tick = useCallback(() => {
        const date = new Date();
        const options = {
            timeZone: cityLookup[0]?.timezone,
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
        };
        setTime(date.toLocaleString(lang, options));
    }, [cityLookup, lang]);

    useEffect(() => {
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, [capital, tick]);

    return (
        <div className='time'>
            <h3>{getTemplate(lang, 'localTime')}</h3>
            <span>{time}</span>
        </div>
    );
};

export default Time;
