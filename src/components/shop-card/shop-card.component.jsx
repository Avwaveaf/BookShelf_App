import { useNavigate } from "react-router-dom";
const ShopCard = ({ _id, title, longDescription, thumbnailUrl }) => {
    const navigate = useNavigate();
    const limit = String(longDescription).length /10;
    const desc = String(longDescription).slice(0, limit) + "...";
    const price = Math.floor((Math.random() * 30) + 10);
    const redirectHandler = () => {
        navigate(`/books/${_id}`)
     }
    return <div className="books_item" onClick={redirectHandler}>
        <img src={thumbnailUrl} alt="" />
        <div className="shop-card-price">
        <i>${price }</i>
        </div>
        <div className="books_item_body">
        <h3>{title}</h3>
        <p>{longDescription?desc:"-" }</p>
        </div>
        <button type="">add to cart</button>
    </div>
};

export default ShopCard