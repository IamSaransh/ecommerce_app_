import React from 'react';
import logo from './logo.png'
import './index.css'
import AppContext from '../AppContext'
import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return(
            <div>
                 <nav className="navbar fixed-top  navbar-expand-lg" >
                     <div className="container-fluid ">
                         <div className="row row-in-navbar">
                             {/* navbar logo */}
                             <div className="col-sm-2">
                                 {/*navbar logo link to home page itse;f*/}
                                 <Link  to="/">
                                    <img className=" shadow-md navbar-brand-logo ml-2 " src={logo} alt="logo"/>
                                 </Link>
                             </div>
                             {/* search bar */}
                             <div className="col-sm-7">
                                    <div>
                                        <form className="form-inline d-flex justify-content-center lg-form form-lg active-cyan-2 mt-2">
                                            <input className="form-control form-control-sm mr-3 w-75 h-100" type="text" placeholder="Search" aria-label="Search" />
                                            <i className="fas fa-search" aria-hidden="true" />
                                        </form>
                                    </div>
                             {/* 3 line burger button */}
                             </div>
                             <div className="col-sm-3 float-right">
                                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcontent"
                                 aria-expanded="false">
                                     <i className="fas fa-bars header-icon"/>
                                 </button>
                                <div className="row float-right collapse navbar-collapse" id="navbarcontent">
                                    <div className="col-xs-4">


                                        <div className="dropdown">
                                            {/*link to form itself*/}
                                        <Link className="header-text" to="/" className="header-text" data-toggle="dropdown" data-offset="20,10" aria-haspopup="true" aria-expanded="false">
                                        <div className="d-inline-flex">
                                            <div className="icon-wrap">
                                                 <i className="header-icon fas fa-user"/>
                                            </div>
                                        <div className="text-wrap">
                                        <div className="nav-text">Sign In</div>
                                        <i className="fas fa-caret-down"/>
                                        </div>
                                        </div>
                                        </Link>
                                        <div className="dropdown-menu">
                                            <form className="px-4 py-3">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" placeholder="Email"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control" placeholder="Password"/>
                                                </div>
                                                <button type="button" className="btn btn-primary" >Sign In</button>
                                            </form>
                                            <hr/>
                                                <Link className="dropdown-item" to="/" >Dont have an account yet then sign up!! </Link>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-4">
                                        <Link to="/cart" className="header-text">
                                        <div className="d-inline-flex">
                                        <div className="icon-wrap">
                                                <i className="header-icon fas fa-shopping-cart"/>
                                            </div>
                                        <div className="text-wrap">
                                            <span className="small round badge badge-secondary">{this.context.cart.length}</span>
                                            <div className="nav-text">Cart</div>
                                        </div>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4">
                                        <Link to ="/wishlist" className="header-text">
                                        <div className="d-inline-flex">
                                        <div className="icon-wrap">
                                                <i className="header-icon fas fa-heart"/>
                                            </div>
                                            <div className="text-wrap">
                                            <span className="small round badge badge-secondary">1</span>
                                            <div className='nav-text'>Wishlist</div>
                                        </div>
                                        </div>
                                        </Link>
                                    </div> 
                                </div>
                             </div>
                         </div>
                          
                    </div>
                 </nav>
                      
            </div>
        )
    }
}
Navbar.contextType = AppContext
export default Navbar;