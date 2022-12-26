import "./cart-dropdown.style.scss"
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
    const navigate = useNavigate();
    const { isOpen,cartItems } = useContext(DropdownContext);
    const onCheckOutRedirect = () => { 
        if (cartItems.length) {

            navigate('/checkout');
        }
        else { 
            alert('you have nothing in your cart')
        }
    }
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
        <button onClick={onCheckOutRedirect}>Checkout</button>
    </div>
    }
    return ""

};

export default CartDropdown