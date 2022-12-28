import { useContext , Fragment} from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import Masonry from 'react-masonry-css';
import './shop.styles.scss'
import ShopCard from '../../components/shop-card/shop-card.component';
import Loader from '../../components/Loader/loader.component';
import { useNavigate } from 'react-router-dom';
const breakpointsMasonry = {
    default: 6,
    1100: 4,
    700:1
  }
const Shop = () => {
  const navigate = useNavigate();
  const { categoriesMap, isLoad } = useContext(CategoriesContext);
  const categoryNavigateHandler = (title) => {
      navigate(`/books/${title}`)
  }
  if (isLoad) { 
    return <Loader/>
  }
  return (
    <Fragment>
    { 
      Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <h2 className='category-title' onClick={() => categoryNavigateHandler(title)}>{title} <span>{`( ${categoriesMap[title].length} ) `}</span> </h2>
          <div className='shop_container'>
          <Masonry 
          breakpointCols={breakpointsMasonry}
          className="shop-masonry-grid"
          columnClassName="shop-grid_column"
            >
              
              {categoriesMap[title].map((book, index) => {
                if (index <= 3) { 
                  return <ShopCard key={book._id} {...book} data={book } />
                }
              })}

          </Masonry>
          </div>
        </Fragment>
      )
      )
    }
    </Fragment>
  )


}
  
export default Shop;
