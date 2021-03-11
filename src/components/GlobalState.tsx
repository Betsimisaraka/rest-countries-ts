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
    countryName: string;
    regionName: string;
    regions: string[],
    searchCountry: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const initialState: State = {
    isLoading: true,
    countries: [],
    regions: ["Africa", "America", "Asia", "Europe", "Oceanie"],
    countryName: '',
    regionName: '',
    searchCountry: () => {},
    filterRegion: () => {},
    dispatch: () => {}
}

type Action = 
    | {type: "FETCH_DATA", results: CountriesType[]}
    | { type: "SEARCH_COUNTRY", payload: string }
    | { type: "FILTER_REGION", payload: string }



export const GlobalContext = createContext(initialState);


function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case "FETCH_DATA":
            return {...state, isLoading: false, countries: action.results};
        case "SEARCH_COUNTRY":
            return {...state, countryName: action.payload};
        case "FILTER_REGION":
            return {...state, regionName: action.payload}
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

  
    return (
        <GlobalContext.Provider value={{ 
            isLoading: state.isLoading,
            countries: state.countries,
            countryName: state.countryName,
            regions: state.regions,
            regionName: state.regionName,
            searchCountry: (e) => dispatch({ type: "SEARCH_COUNTRY", payload: e.target.value }),
            filterRegion: (e) => dispatch({ type: "FILTER_REGION", payload: e.target.value }),
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
