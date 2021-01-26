import React, {useState} from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    //have to see if user is sign in or out to choose which header to display
    let user = true;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">GitTix</a>
            {user ? 
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#"> My Orders </a>
                    <a className="nav-item nav-link active" href="#"> Sell Tickets</a>
                    <a className="nav-item nav-link active" href="#"> Sign Out</a>          
                </div> : 
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#"> Sign Up </a>
                    <a className="nav-item nav-link active" href="#"> Sign In </a>         
                </div>
            }
            
            
            
        </nav>
    );
};

export default Header;