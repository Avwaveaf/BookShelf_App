import "./cart-dropdown.style.scss"
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = () => {
    const { isOpen,cartItems } = useContext(DropdownContext)
    if (isOpen) { 

        return <div className="cart-dropdown-container">
            <h3>Your Cart ({cartItems.length })</h3>
            <div className="dropdown-item">
                { 
                    cartItems.length ? cartItems.map(item => {
                        return <CartItem key={item._id} data= {item}/>;
                    }) : <span>No books selected</span>
                }
    
        </div>
        <button type="">Checkout</button>
    </div>
    }
    return ""

};

export default CartDropdown