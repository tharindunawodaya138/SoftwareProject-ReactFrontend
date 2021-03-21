<<<<<<< Updated upstream
=======
import React from 'react';


const Navbar = () => {
  return (
    <nav className="nav-wrapper green darken-3">
      <div className="container">
         {/* eslint-disable-next-line */}
        <a className="brand-logo">Govimithuro</a>
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li><a href='/Login'>Login</a></li>
          <li><a href='/Register'>Register</a></li>
          <li><a href='/Cart'>Cart</a></li>
          <li><a href='/About'>About</a></li>
          <li><a href='/Search'>Search</a></li>
          <li><a href='/MyProduct'>MyProduct</a></li>
          <li><a href='/Admin/AdminPanel'>AdminPanel</a></li>
          <li><a href='/Setting'>Setting</a></li>

        </ul>
      </div>
    </nav>
  )
}
>>>>>>> Stashed changes

import React, {Component} from 'react';
import {Link} from "react-router-dom";



class Navbar extends Component {

    render() {
        const isAuth = this.props.isAuth;
        //console.log("inside Navbar" + isAuth);
        const useRole = localStorage.getItem('role');
        const currentUser = localStorage.getItem('userFirstName');

        //console.log("current user is " + currentUser);

        if (isAuth === "Authorized") {

            console.log("the user role in the navebar is " + useRole);
            if (useRole === 'Buyer') {
                return (
                    <nav className="nav-wrapper green darken-3">
                        <div className="container">
                            {/* eslint-disable-next-line */}
                            <a className="brand-logo">Govimithuro</a>
                            <ul className="right">
                                <li><Link to={'/'}> Home</Link></li>
                                <li><Link to={'/NotLoggedIn'} onClick={() => this.ClearAll()}> Logout </Link></li>
                                <li><Link to={'/Cart'}> Cart</Link></li>
                                <li><Link to={'/About'}> About</Link></li>
                                <li><Link to={'/Search/Search'}> Search</Link></li>
                                <li><Link to={'/Setting'}> Setting</Link></li>
                                <li style={{color: "yellow"}}> {currentUser}</li>

                            </ul>
                        </div>
                    </nav>
                )
            }
            if (useRole === 'Seller') {
                return (
                    <nav className="nav-wrapper green darken-3">
                        <div className="container">
                            {/* eslint-disable-next-line */}
                            <a className="brand-logo">Govimithuro</a>
                            <ul className="right">
                                <li><Link to={'/'}> Home</Link></li>
                                <li><Link to={'/NotLoggedIn'} onClick={() => this.ClearAll()}> Logout </Link></li>
                                <li><Link to={'/About'}> About</Link></li>
                                <li><Link to={'/MyProducts/ProductList'}> My Products</Link></li>
                                <li><Link to={'/Setting'}> Setting</Link></li>
                                <li style={{color: "yellow"}}> {currentUser}</li>

                            </ul>
                        </div>
                    </nav>
                )
            }
            if (useRole === 'Administrator') {
                return (
                    <nav className="nav-wrapper green darken-3">
                        <div className="container">

                            <a className="brand-logo">Govimithuro</a>
                            <ul className="right">

                                <li><Link to={'/NotLoggedIn'} onClick={() => this.ClearAll()}> Logout </Link></li>
                                <li><Link to={'/About'}> About</Link></li>
                                <li><Link to={'/Admin/AdminPanel'}> AdminPanel</Link></li>
                                <li><Link to={'/Setting'}> Setting</Link></li>
                                <li style={{color: "orange"}}> Admin Name: {currentUser}</li>
                            </ul>
                        </div>
                    </nav>
                )
            }
        } else {
            return (
                <div>
                    <nav className="nav-wrapper green darken-3">
                        <div className="container">
                            {/* eslint-disable-next-line */}
                            <a className="brand-logo">Govimithuro</a>
                            <ul className="right">
                                <li><Link to={'/'}> Home</Link></li>
                                <li><Link to={'/Login'}> Login</Link></li>
                                <li><Link to={'/Register/Register'}> Register</Link></li>
                                <li><Link to={'/Cart'}> Cart</Link></li>
                                <li><Link to={'/About'}> About</Link></li>
                                <li><Link to={'/Search/Search'}> Search</Link></li>

                                {/*<li><a href='/MyProducts/ProductList'>My Products</a></li>*/}
                                {/*<li><a href='/Admin/AdminPanel'>AdminPanel</a></li>*/}
                                {/*<li><a href='/Setting'>Setting</a></li>*/}

                            </ul>
                        </div>
                    </nav>


                </div>


            )
        }
    }

// After logout  is clicked then the data in the local storage will be cleared
    ClearAll() {
        localStorage.setItem('token', null);
        localStorage.setItem('userFirstName', "not logged in");
        localStorage.setItem('userLastName', "not logged in");
        localStorage.setItem('userAddress', "not logged in");
        localStorage.setItem('userEmail', "not logged in");

    }
}
export default Navbar


