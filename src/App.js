import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigation } from "./components/navigation/navigation.component";
import { Home } from "./routes/home/home.component";
import SignIn from "./components/sign-in/sign-in.component";

const Shop = () => { 
  return <div>
    im shop page
  </div>
}
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
        <Route path="books" element={<Shop />} />
        <Route path="sign-in" element={<SignIn/>} />
      </Route>
      <Route path="/*" element={ <ErrorPage/>} />
    </Routes>
  )
};