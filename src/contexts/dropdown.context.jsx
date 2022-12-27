import { createContext, useEffect, useState } from "react";

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
const clearItem = (cartItems, bookDatatoClear) => { 
    return cartItems.filter(item=>item._id !== bookDatatoClear._id)
}

export const DropdownContext = createContext({
    isOpen: null,
    setIsOpen: () => null,
    cartItems: [],
    setCartItems: () => null,
    addItemToCart: () => null,
    removeItemfromCart: () => null,
    clearCartItem: () => null,
    cartTotal:0,

});
export const DropdownContextProvider = ({ children }) => { 
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
 
    useEffect(() => { 
        const total = cartItems.reduce((total, item) => {
            return total + item.qty * item.price;
        }, 0);
        setCartTotal(total)
    },[cartItems])

    const addItemToCart = (bookData) => {
        setCartItems(addItem(cartItems,bookData))

    }

    const removeItemfromCart = (bookDataToREmove) => {
        setCartItems(removeItem(cartItems,bookDataToREmove))

    }
    const clearCartItem = (bookDatatoClear) => {
        setCartItems(clearItem(cartItems,bookDatatoClear))

    }




    const value = {isOpen, setIsOpen, cartItems,addItemToCart,removeItemfromCart, clearCartItem, cartTotal}
    return <DropdownContext.Provider value={value}>{children }</DropdownContext.Provider>
};