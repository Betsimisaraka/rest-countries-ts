import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'

const Card = () => {
    const { isLoading, countries } = useContext(GlobalContext);
    console.log(countries);
    
    return (
        <div>
            {isLoading && <h2>Is loading...</h2>}
            <ul>
                {!isLoading && (
                    countries.map(country => (
                        <li>
                            <img src={country.flag} alt="Country's flag"/>
                            <div>
                                <h2>{country.name}</h2>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Card
