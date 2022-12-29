import { useContext,  } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import "./checkout.styles.scss";
import GoogleIcon from "../../components/googleIcon/googleIcon.component";

const Checkout = () => { 
    const { cartItems,  addItemToCart, removeItemfromCart, clearCartItem, cartTotal } = useContext(DropdownContext);

    return <div className="checkout-page-container">
        <div className="checkout-item-container">
            <div className="checkout-item-header">
                <span className="image">Product Picture</span>
                <span className="title">Title</span>
                <span className="price">Price</span>
                <span className="blank"></span>
                <span className="qty">Quantity</span>
            </div>
            {cartItems.map(item => {
                return <div key={item._id} className="checkout-item">
                    <div className="checkout-item-img-container">
                        <img src={ item.thumbnailUrl} alt=""/>
                    </div>
                    <h3>{item.title}</h3>
                    <span>${item.price}</span>
                    <button onClick={() => removeItemfromCart(item)}><GoogleIcon className="button-icon" iconName="remove" style={{color:"white", cursor:"pointer"}}/></button>
                    <span>X{item.qty}</span>
                    <button onClick={()=>addItemToCart(item)}><GoogleIcon iconName="exposure_plus_1"  style={{color:"white", cursor:"pointer"}}/></button>
                    <button className="clear-button" onClick={()=>clearCartItem(item)}>clear</button>
                </div>
            })}
        </div>
        <div className="cart-total-container">
            Total: &nbsp;<span className="total-price">${`${cartTotal}` }</span>
        </div>
    </div>
};
export default Checkout