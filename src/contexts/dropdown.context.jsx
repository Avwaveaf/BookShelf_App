import { createContext, useState } from "react";

const addItem = (cartItems, bookData) => {
    const existingCartItem = cartItems.find((item) => item._id === bookData._id);
    if (existingCartItem) { 
        return cartItems.map((item) => item._id === bookData._id ? {...item, qty:item.qty+1}:item)
    }
    return [...cartItems, {...bookData}]
 }

export const DropdownContext = createContext({
    isOpen: null,
    setIsOpen: () => null,
    cartItems:[],
    setCartItems: () =>null,
    addItemToCart:()=>null
});
export const DropdownContextProvider = ({ children }) => { 
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

 

    const addItemToCart = (bookData) => {
        setCartItems(addItem(cartItems,bookData))

    }

    const value = {isOpen, setIsOpen, cartItems,addItemToCart}
    return <DropdownContext.Provider value={value}>{children }</DropdownContext.Provider>
};