import React, { useState } from 'react';

import '../css/Form.css';

const Form = () => {
    const [regions, setRegions] = useState(["Africa", "America", "Asia", "Europe", "Oceanie"]);

    return (
        <form>
            <fieldset>
                <label htmlFor="">Search</label>
                <input type="text"/>
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
