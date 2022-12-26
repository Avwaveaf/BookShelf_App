import { useContext, useEffect, useState } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

const Checkout = () => { 
    const { cartItems, getTotalPrice } = useContext(DropdownContext);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => { 
        setTotalPrice(getTotalPrice);
    },[])
    return <div>
        <div>
            {cartItems.map(item => {
                return <div key={item._id}>
                    <div>
                        <img src={ item.thumbnailUrl} alt=""/>
                    </div>
                    <h3>{item.title}</h3>
                    <span>${ item.price}</span>
                    <span>X{ item.qty}</span>
                </div>
             })}
        </div>
        <div>
            <span>total :{totalPrice }</span>
            
        </div>
    </div>
};
export default Checkout