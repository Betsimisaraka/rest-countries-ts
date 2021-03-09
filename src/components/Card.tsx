import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState';
import '../css/Card.css';
import { Link } from 'react-router-dom';

const Card = () => {
    const { isLoading, countries } = useContext(GlobalContext);
    
    return (
        <div className="card_container">
            {isLoading && <h2>Is loading...</h2>}
                <ul className="cart_lists">
                    {!isLoading && (
                        countries.map(country => (
                            <Link to={`/details/${country.name}`}>
                                <li className="card_lists__items">
                                    <img src={country.flag} alt="Country's flag"/>
                                    <div className="card_content">
                                        <h2>{country.name}</h2>
                                        <p>Population: <span>{country.population}</span></p>
                                        <p>Region: <span>{country.region}</span></p>
                                        <p>Capital: <span>{country.capital}</span></p>
                                    </div>
                                </li>
                            </Link>
                        ))
                    )}
                </ul>
        </div>
    )
}

export default Card
