import { createContext, useState } from "react";

const addItem = (cartItems, bookData) => {
    const existingCartItem = cartItems.find((item) => item._id === bookData._id);
    if (existingCartItem) { 
        return cartItems.map((item) => item._id === bookData._id ? {...item, qty:item.qty+1}:item)
    }
    return [...cartItems, {...bookData}]
}
const removeItem = (cartItems, bookDataToRemove) => { 
    const existingCartItem = cartItems.find(item => item._id === bookDataToRemove._id);
    if (existingCartItem.qty ===1) {
        return cartItems.filter(item => item._id !== bookDataToRemove._id)
    }
    return cartItems.map(item => item._id === bookDataToRemove._id ? {...item, qty:item.qty-1}:item)
}

export const DropdownContext = createContext({
    isOpen: null,
    setIsOpen: () => null,
    cartItems: [],
    setCartItems: () => null,
    addItemToCart: () => null,
    getTotalPrice: () => null,
    removeItemfromCart: () => null
});
export const DropdownContextProvider = ({ children }) => { 
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

 

    const addItemToCart = (bookData) => {
        setCartItems(addItem(cartItems,bookData))

    }

    const removeItemfromCart = (bookDataToREmove) => {
        setCartItems(removeItem(cartItems,bookDataToREmove))

    }



    const value = {isOpen, setIsOpen, cartItems,addItemToCart,removeItemfromCart}
    return <DropdownContext.Provider value={value}>{children }</DropdownContext.Provider>
};