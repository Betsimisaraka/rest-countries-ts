import React, { useContext, useEffect, useState } from 'react';

import '../css/Form.css';
import { GlobalContext } from './GlobalState';

const Form = () => {
    const { searchCountry, countryName, regions, regionName, filterRegion } = useContext(GlobalContext);

    return (
        <form>
            <fieldset>
                <label htmlFor="">Search</label>
                <input type="text" value={countryName} onChange={searchCountry} placeholder="Search for a country..."/>
            </fieldset>
            <fieldset>
                <label htmlFor="region">Filter by Region</label>
                <select name="region" id="region" value={regionName} onChange={filterRegion}>
                    {regions.map(region => (
                        <option value={region}>{region}</option>
                    ))}
                </select>
            </fieldset>
        </form>
    )
}

export default Form
