import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import "./navigation.style.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import Logo from "../Logo/logo.component";
export const Navigation = () => { 
    const { currentUser } = useContext(UserContext);

    return (<Fragment>
        <div className="navigation-container">
            <Link to="/" className="nav-link-logo">            
            <div className="logo">    
                <Logo/>
            </div>
            </Link>
            <div className="navlink-container">
                <Link to="/books" className="nav-link">
                    Books
                </Link>
                { 
                    currentUser ? (
                        <Fragment>
                        
                            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                            <CartIcon/>
                        </Fragment>
                    ):(
         
                        
                        <Link to="/sign-in" className="nav-link">
                        Sign In
                                </Link>
                
        
                        ) 
                }
       

            </div>
        </div>
        <CartDropdown/>
        <Outlet/>
    </Fragment>)
}; 