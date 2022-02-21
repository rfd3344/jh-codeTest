import React, { Component } from 'react';
import "./navbar.css"

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="carlyHeader">
                <div className="headerWidth">
                    <img src="./images/Carlylogo.png" alt="carly logo" />
                    <span className="phoneNum"><img src="./images/phone.svg" alt="carly phone" />1300 000 000</span>
                </div>
            </div>
        );
    }
}
 
export default Navbar;