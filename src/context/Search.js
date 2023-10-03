import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({children})=>{
    const [values, setValues] = useState({
        keyword: "",
    });

    return <>
        <SearchContext.Provider value={[values, setValues]}>
            {children}
        </SearchContext.Provider>
    </>
};

// custome hook
const useSearch = ()=>useContext(SearchContext);

export {useSearch, SearchProvider};