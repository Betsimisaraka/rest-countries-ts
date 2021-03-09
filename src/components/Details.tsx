import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { GlobalContext } from './GlobalState';

const Details = () => {
    const { countries } = useContext(GlobalContext);

    type ParamName = {
        name: string,
    }
    const { name } = useParams<ParamName>();
    
    const findCountry = countries.find(country => country.name === name);
    console.log(findCountry);
    
    return (
        <div>
            <img src={findCountry?.flag} alt="Country's flag"/>
            <div>
                <h2>{findCountry?.name}</h2>
                <div>
                    <p>Native Name: <span>{findCountry?.nativeName}</span></p>
                    <p>Population: <span>{findCountry?.population}</span></p>
                    <p>Region: <span>{findCountry?.region}</span></p>
                    <p>Sub Region: <span>{findCountry?.subregion}</span></p>
                    <p>Capital: <span>{findCountry?.capital}</span></p>
                </div>
                <div>
                    <p>Top Level Domain<span>{findCountry?.topLevelDomain}</span></p>
                    {/* <p>Currencies: <span>{findCountry?.currencies}</span></p> */}
                    {/* <p>Languages: {findCountry?.languages.map(laguage => <span>{laguage.name}</span>)}</p> */}
                </div>
            </div>
            <div>
                <p>Border Countries: </p>
            </div>
        </div>
    )
}

export default Details
