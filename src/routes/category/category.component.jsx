import { useContext, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/loader.component";
import ShopCard from "../../components/shop-card/shop-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss"

const Category = () => { 
    const { category } = useParams();
    const { categoriesMap,isLoad } = useContext(CategoriesContext);
    const [specifiedCategory, setSpecifiedCategory] = useState(categoriesMap[category]);

    useEffect(() => {
        setSpecifiedCategory(categoriesMap[category]);
      
    }, [category, categoriesMap]);

    const breakpointsMasonry = {
        default: 6,
        1100: 4,
        700:1
      }
    
    if (isLoad) { 
        return <Loader/>
    }
    return <div>
        <h3>{category}</h3>
        <Masonry 
        breakpointCols={breakpointsMasonry}
        className="shop-masonry-grid"
        columnClassName="shop-grid_column"
          >
            
        { 
            specifiedCategory&&specifiedCategory.map(item => {
                return <ShopCard  {...item} key={item._id } />
            })
        }
        </Masonry>
    </div>
};

export default Category;