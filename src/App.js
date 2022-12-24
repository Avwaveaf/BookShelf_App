import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigation } from "./components/navigation/navigation.component";
import { Home } from "./routes/home/home.component";
import SignIn from "./components/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";
import BookDetail from "./components/book_detail/book_detail.component";

const ErrorPage = () => {
  return <div>
    error 404 page not found
  </div>
 }

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="books" element={<Shop />}/>
        
        <Route path="books/:id" element={ <BookDetail/>} />
        
        <Route path="sign-in" element={<SignIn/>} />
      </Route>
      <Route path="/*" element={ <ErrorPage/>} />
    </Routes>
  )
};