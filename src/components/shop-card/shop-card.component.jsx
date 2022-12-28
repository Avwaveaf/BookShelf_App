import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import { UserContext } from "../../contexts/user.context";
const ShopCard = ({ _id, title, longDescription, thumbnailUrl, data }) => {
    const { addItemToCart} = useContext(DropdownContext);
    const {currentUser} = useContext(UserContext)
    const navigate = useNavigate();
    const limit = String(longDescription).length /10;
    const desc = String(longDescription).slice(0, limit) + "...";
    const price = Math.floor((Math.random() * 30) + 10);
    const redirectHandler = () => {
        navigate(`/books/detail/${_id}`)
     }
    const addToCartHandler = () => {
        if (currentUser) {
            addItemToCart({
                ...data,
                qty: 1,
                price: price
            });
        } else { 
            navigate('/sign-in')
        }
     }
    return <div className="books_item" >
        <img loading="lazy" src={thumbnailUrl} alt="" onClick={redirectHandler} />
        <div className="shop-card-price">
        <i>${price }</i>
        </div>
        <div className="books_item_body" onClick={redirectHandler}>
        <h3>{title}</h3>
        <p>{longDescription?desc:"-" }</p>
        </div>
        <button style={{ cursor: "pointer" }} onClick={ addToCartHandler}>add to cart</button>
    </div>
};

export default ShopCard