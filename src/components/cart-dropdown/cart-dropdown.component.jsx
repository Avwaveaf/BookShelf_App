import "./cart-dropdown.style.scss"
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
const CartDropdown = () => {
    const { isOpen } = useContext(DropdownContext)
    if (isOpen) { 
        return <div className="cart-dropdown-container">
        <div className="dropdown-item">
            helo    
        </div>
        <button type="">Checkout</button>
    </div>
    }
    return ""

};

export default CartDropdown