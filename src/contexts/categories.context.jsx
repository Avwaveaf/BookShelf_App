import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocument } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
    isLoad:true,
});

export const CategoriesContextProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const [isLoad, setIsLoad] = useState(true);
    useEffect(() => { 
        const getCategoriesMap = async() => { 
            const categoriesMap = await getCollectionAndDocument()
            setCategoriesMap(categoriesMap);
            setIsLoad(!isLoad)
        }
        getCategoriesMap()
      
    },[])
    const value = {categoriesMap, setCategoriesMap, isLoad}
    return <CategoriesContext.Provider value={value}>{ children}</CategoriesContext.Provider>
}