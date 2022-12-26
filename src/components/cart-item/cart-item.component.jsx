import './cart-item.styles.scss'

const CartItem = ({ data}) => { 
    const {title, qty,thumbnailUrl } = data;
    return <div className='cart-item-container'>
    <div className='cart-item-img-container'>
        
    <img src={thumbnailUrl } alt=""/>
        </div>
        <div className='cart-item-body-container'>
            
        <h1>{title}</h1>
            <span>X{qty }</span>
        </div>
    </div>
};
export default CartItem