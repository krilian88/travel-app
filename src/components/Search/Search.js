import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import getTemplate from '../Language/Templates';

const Search = ({ handleSearchChange, location, lang, searchRef, scroll }) => {
    const searchInputValue = useRef('');

    const handleOnChange = (e) => {
        searchInputValue.current = e.target.value;
        handleSearchChange(e.target.value);
    };

    const onSearchButtonClick = () => {
        handleSearchChange(searchInputValue.current);
    };

    const keyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearchChange(searchInputValue.current);
        }
    };

    if (location.pathname.match('/countries')) {
        return null;
    }

    return (
        <div className='search-wrapper'>
            <input
                ref={searchRef}
                onFocus={scroll}
                className='search'
                onChange={handleOnChange}
                type='search'
                onKeyPress={keyPress}
                placeholder={getTemplate(lang, 'searchPlaceholder')}
            />
            <button
                type='submit'
                className='fas fa-search'
                onClick={onSearchButtonClick}
            ></button>
        </div>
    );
};

export default withRouter(Search);
