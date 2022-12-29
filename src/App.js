import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigation } from "./components/navigation/navigation.component";
import { Home } from "./routes/home/home.component";
import SignIn from "./components/sign-in/sign-in.component";
import Checkout from "./routes/checkout/checkout.component";
import ShopRoutes from "./routes/shopRoutes/shopRoutes.component";
const ErrorPage = () => {
  return <div>
    error 404 page not found
  </div>
}
const Button = () => {
  const handleClick = () => {
    console.log(Button.toString());
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="books/*" element={<ShopRoutes />}/>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="button" element={ <Button/>} />
      </Route>
      <Route path="/*" element={ <ErrorPage/>} />
    </Routes>
  )
};
