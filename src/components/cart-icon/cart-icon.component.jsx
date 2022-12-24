import GoogleIcon from "../googleIcon/googleIcon.component";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import "./cart-icon.style.scss"
const CartIcon = () => {
    const { isOpen, setIsOpen } = useContext(DropdownContext);
    const toggleHandler = () =>{
        setIsOpen(!isOpen)
    }
    return     <div className="nav-link-cart" onClick={toggleHandler}>
    <GoogleIcon	Icon iconName="shopping_bag" style={{fontSize:"40px"}}/>
    <span className="cart_count" onClick={toggleHandler}>0</span>
</div>
};
export default CartIcon