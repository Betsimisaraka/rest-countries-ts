import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalContext } from './GlobalState';
import "../css/Details.css";

const Details = () => {
    const { countries } = useContext(GlobalContext);

    type ParamName = {
        name: string,
    }
    type Border = {
        ciod: string,
    }
    const { name } = useParams<ParamName>();
    
    const findCountry = countries.find(country => country.name === name);

    // const findBorder = countries.find(border => border.cioc === findCountry?.borders);
    // console.log(findBorder);
    
    return (
        <div className="detail_container">
            <Link to="/">
                <button>⬅ Back</button>
            </Link>
            <div className="details_content">
                <img src={findCountry?.flag} alt="Country's flag"/>
                <div>
                    <h2>{findCountry?.name}</h2>
                    <div className="details_moreinfo">
                        <div>
                            <p>Native Name: <span>{findCountry?.nativeName}</span></p>
                            <p>Population: <span>{findCountry?.population}</span></p>
                            <p>Region: <span>{findCountry?.region}</span></p>
                            <p>Sub Region: <span>{findCountry?.subregion}</span></p>
                            <p>Capital: <span>{findCountry?.capital}</span></p>
                        </div>
                        <div>
                            <p>Top Level Domain<span>{findCountry?.topLevelDomain}</span></p>
                            <p>Currencies: {findCountry?.currencies.map(currency => (<span>{currency.name}</span>))}</p>
                            <p>Languages: {findCountry?.languages.map(laguage => <span>{laguage.name} </span>)}</p>
                        </div>
                    </div>
                    <div>
                        <p>Border Countries: {findCountry?.borders.map(border => (
                            <button>{border}</button>))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
