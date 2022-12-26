import { useContext } from 'react';
import { BooksContext } from '../../contexts/books.context';
import Masonry from 'react-masonry-css';
import './shop.styles.scss'
import ShopCard from '../../components/shop-card/shop-card.component';
const breakpointsMasonry = {
    default: 6,
    1100: 4,
    700:1
  }
const Shop = () => { 
    const { books} = useContext(BooksContext)

    return <div className='shop_container'>
    <Masonry 
    breakpointCols={breakpointsMasonry}
    className="shop-masonry-grid"
    columnClassName="shop-grid_column"
    >
    {books.map((book) => {
        return <ShopCard key={book._id} {...book} data={book } />
     })}
    </Masonry>

    </div>
}
  
export default Shop;