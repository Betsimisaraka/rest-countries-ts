import React, { ChangeEvent, createContext, useEffect, useReducer } from 'react';

type Language = {
    name: string
}

type Currencies = {
    name: string
}

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
        currencies: Currencies[],
        languages: Language[],
        translations: object,
        flag: string,
        regionalBlocs: object[],
        cioc: string
};

type State = {
    isLoading: boolean;
    countries: CountriesType[];
    dispatch: React.Dispatch<any>;
}

const initialState: State = {
    isLoading: true,
    countries: [],
    dispatch: () => null
}

type Action = 
    | {type: "FETCH_DATA", results: CountriesType[]}
    | { type: "SEARCH_COUNTRY", payload: CountriesType[]}



export const GlobalContext = createContext(initialState);


function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case "FETCH_DATA":
            return {...state, isLoading: false, countries: action.results};
        case "SEARCH_COUNTRY":
            return {...state, countries: action.payload};
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
    }, []);

    // function searchCountry() {
    //     const filterCountry = countries.filter(country => country.name.toLowerCase().includes(value.toLowerCase()));
    // }

    return (
        <GlobalContext.Provider value={{ 
            isLoading: state.isLoading,
            countries: state.countries,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
