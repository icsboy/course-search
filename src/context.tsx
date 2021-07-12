import React, { createContext, useContext, useState } from "react";

interface ISearchTermContext {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const SearchTermContext = React.createContext<ISearchTermContext>({
    searchTerm: "",
    setSearchTerm: () => {}
})

function SearchTermContextProvider({children}: {children: React.ReactNode}) {
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    return (
        <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchTermContext.Provider>
    )
}
export default SearchTermContextProvider;

export const useSearchTerm = () => {
    const { searchTerm } = useContext(SearchTermContext);
    return searchTerm;
}



 