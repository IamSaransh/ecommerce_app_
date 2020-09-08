import React from 'react'
import{Link} from 'react-router-dom'

class Sidebar extends React.Component{
    render(){
        return(
            <div>
                <div className="card p-5 hello ">
                    <h5 className="my-catagories"> -CATEGORIES</h5>
                    <ul className="list-ulstyled p-0 m-0">
                        <li>
                            <Link to="/guitar">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap header-icon">
                                        <i className="fas fa-guitar"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Guitar
                                    </div>

                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/drum">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap header-icon">
                                        <i className="fas fa-drum"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Drums
                                    </div>

                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/mic">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap header-icon">
                                    <i className="fas fa-microphone"></i>
                                    </div>
                                    <div className="text-wrap">
                                        microphone
                                    </div>

                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/record-vinyl">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap header-icon">
                                    <i class="fas fa-record-vinyl"></i>
                                    </div>
                                    <div className="text-wrap">
                                      Record-Vinyl
                                    </div>

                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/napster">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap header-icon">
                                    <i class="fab fa-napster"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Napster
                                    </div>

                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
  

export default Sidebar