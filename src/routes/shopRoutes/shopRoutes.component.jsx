import { Route, Routes } from "react-router-dom";
import BookDetail from "../../components/book_detail/book_detail.component";
import Category from "../category/category.component";
import Shop from "../shop/shop.component";

const ShopRoutes = () => {
    return <Routes>
        <Route index element={ <Shop/>} />
        <Route path=":category" element={<Category />} />
        <Route path="detail/:id" element={ <BookDetail/>} />
    </Routes>
};
 
export default ShopRoutes