import { useContext,  } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

const Checkout = () => { 
    const { cartItems,  addItemToCart, removeItemfromCart } = useContext(DropdownContext);

    return <div>
        <div>
            {cartItems.map(item => {
                return <div key={item._id}>
                    <div>
                        <img src={ item.thumbnailUrl} alt=""/>
                    </div>
                    <h3>{item.title}</h3>
                    <span>${item.price}</span>
                    <button onClick={()=>addItemToCart(item)}>Increment</button>
                    <span>X{item.qty}</span>
                    <button onClick={()=>removeItemfromCart(item)}>Decrement</button>
                    
                </div>
             })}
        </div>
        <div>
            
        </div>
    </div>
};
export default Checkout