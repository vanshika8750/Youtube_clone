import React ,{createContext,useState,useEffect} from 'react';

import {fetchDataFromApi} from '../utils/api';

export const Context=createContext();

export const AppContext=(props)=>{

    const [loading,setLoading]=useState(false);
    const [searchResults,setSearchResults]=useState(false);
    const [selectCategory,setSelectedCategory]=useState("New");
    const [mobileMenu,setMobileMenu]=useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategory)
    },[selectCategory])

    const fetchSelectedCategoryData=(query)=>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        })
    }

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategory,
            setSelectedCategory,
            mobileMenu,
            setMobileMenu,
        }}>

            {props.children}
        </Context.Provider>
    )

}