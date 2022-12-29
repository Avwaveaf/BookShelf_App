import GoogleIcon from "../googleIcon/googleIcon.component";
import { useContext, useRef } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import  useOnClickOutside  from 'use-onclickoutside';
import "./cart-icon.style.scss"
const CartIcon = () => {
    const { isOpen, setIsOpen, cartItems } = useContext(DropdownContext);
    const containerRef = useRef(null);
    const toggleHandler = () =>{
        setIsOpen(!isOpen)
    }
    useOnClickOutside(containerRef, ()=>setIsOpen(false))
    return     <div ref={containerRef} className="nav-link-cart" onClick={toggleHandler}>
    <GoogleIcon	Icon iconName="shopping_bag" style={{fontSize:"40px"}}/>
        <span className="cart_count" onClick={toggleHandler}>{ cartItems.length}</span>
</div>
};
export default CartIcon