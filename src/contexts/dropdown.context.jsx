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
    addItemToCart:()=>null,
    getTotalPrice:()=>null
});
export const DropdownContextProvider = ({ children }) => { 
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

 

    const addItemToCart = (bookData) => {
        setCartItems(addItem(cartItems,bookData))

    }

    const getTotalPrice = () => {
        const total = [];
        cartItems.forEach((item) => total.push(item.price));
        const totalPrice = total.reduce((acc, curr) => acc + curr, 0);
        return totalPrice;
    
    }

    const value = {isOpen, setIsOpen, cartItems,addItemToCart,getTotalPrice}
    return <DropdownContext.Provider value={value}>{children }</DropdownContext.Provider>
};