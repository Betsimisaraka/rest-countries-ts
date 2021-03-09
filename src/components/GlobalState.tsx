import React, { createContext, useEffect, useReducer } from 'react';

type CountriesType = {
        name: string,
        topLevelDomain: string[],
        alpha2Code: string,
        alpha3Code: string,
        callingCodes: string[],
        capital: string,
        altSpellings: string[],
        region: string,
        subregion: string,
        population: number,
        latlng: number[],
        demonym: string,
        area: number,
        gini: number,
        timezones: string[],
        borders: string[],
        nativeName: string,
        numericCode: string,
        currencies: object[],
        languages: object[],
        translations: object,
        flag: string,
        regionalBlocs: object[],
        cioc: string
};

type State = {
    isLoading: boolean,
    countries: CountriesType[],
}

const initialState: State = {
    isLoading: true,
    countries: [],
}

type Action = 
    | {type: "FETCH_DATA", results: CountriesType[]}



export const GlobalContext = createContext(initialState);


function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case "FETCH_DATA":
            return {isLoading: false, countries: action.results};
        default:
            return state;
    }
}

const GlobalState: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
       
    async function fetchData() {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const result = await res.json();
        console.log(result);
        dispatch({ type: "FETCH_DATA", results: result });
    }
    
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <GlobalContext.Provider value={{ 
            isLoading: state.isLoading,
            countries: state.countries
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
