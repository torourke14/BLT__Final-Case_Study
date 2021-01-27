import React, {useState} from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

const Header = (props) => {

    //have to see if user is sign in or out to choose which header to display
    let {user} = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">GitTix</Link>
            {user ? 
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/myorders"> My Orders </Link>
                    <Link className="nav-item nav-link active" to="selltickets"> Sell Tickets</Link>
                    <Link className="nav-item nav-link active" to="/"> Sign Out</Link>          
                </div> : 
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/signup"> Sign Up </Link>
                    <Link className="nav-item nav-link active" to="signin"> Sign In </Link>         
                </div>
            }
            
            
            
        </nav>
    );
};

export default Header;