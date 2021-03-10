import React, { useContext, useState } from 'react';

import '../css/Form.css';
import { GlobalContext } from './GlobalState';

const Form = () => {
    const [regions, setRegions] = useState(["Africa", "America", "Asia", "Europe", "Oceanie"]);
    const { dispatch, countries } = useContext(GlobalContext);
    const [ value, setValue ] = useState('');

    type Event = {
        target: HTMLInputElement
    }

    function searchCountry(e: Event) {
        setValue(e.target.value);
        const filter = countries.filter(country => country.name.toLowerCase().includes(value.toLowerCase()));
        dispatch({ type: "SEARCH_COUNTRY", payload: filter })
    }


    return (
        <form>
            <fieldset>
                <label htmlFor="">Search</label>
                <input type="text" value={value} onChange={searchCountry}/>
            </fieldset>
            <fieldset>
                <label htmlFor="region">Filter by Region</label>
                <select name="region" id="region">
                    {regions.map(region => (
                        <option value={region}>{region}</option>
                    ))}
                </select>
            </fieldset>
        </form>
    )
}

export default Form
