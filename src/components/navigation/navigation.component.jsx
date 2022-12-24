import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.style.scss"
export const Navigation = () => { 
    return (<Fragment>
        <div className="navigation-container">
            <Link to="/" className="nav-link-logo">            
            <div className="logo">    
                Logo
            </div>
            </Link>
            <div className="navlink-container">
                <Link to="/books" className="nav-link">
                    Books
                </Link>
                <Link to="/sign-in" className="nav-link">
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>)
}; 