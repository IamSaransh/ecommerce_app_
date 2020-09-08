import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
class Footer extends React.Component{
    render(){
        return(
            <div className="saru">
            <footer className="bg-footer">
                <div className="container">
                    <div className="text-white py-1">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="">
                                    <h5> Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li >
                                            <Link className="text-white" to="/cart">My cart</Link>
                                        </li>
                                        <li>
                                            <Link className="text-white" to="/wishlist">Wishlist</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="ml-5">
                                    <h5> contact Us</h5>
                                    <p>
                                        <strong>Phone: :</strong>1234567890 <br/>
                                        <strong>fax</strong> dont have yet xD
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="float-right">
                                    <h5> Social links</h5>
                                    <div className="">
                                        <Link className="text-white mr-4" to="http://facebook.com/MusicalStringsProject">
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                        <Link className="text-white mr-4" to="http://twitter.com/MusicalStringsProject">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link className="text-white mr-4" to="http://youtube.com/channel/UC-ZsN5evqmSVo3_SJyQe9yA">
                                            <i className="fab fa-youtube"></i>
                                        </Link>
                                        <Link className="text-white mr-4" to="http://facebook.com/highproteinrecipe">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
            </div>
        )
    }
}
export default Footer;