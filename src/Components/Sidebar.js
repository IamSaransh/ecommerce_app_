import React from 'react'
import{Link} from 'react-router-dom'
import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
class Sidebar extends React.Component{
    render(){
        return(
            <div>
                <div class="subnavbar">

                <Link style={{ textDecoration: 'none' }} to="/guitar">
                    <div className="d-inline-flex subnav-content">
                        <div className="icon-wrap header-icon">
                            <i className="fas fa-guitar"></i>
                        </div>
                        <div className="text-wrap text-hover">
                            Guitar
                        </div>

                    </div>
                </Link> 
                <Link style={{ textDecoration: 'none' }} to="/drum">
                    <div className="d-inline-flex subnav-content">
                        <div className="icon-wrap header-icon">
                            <i className="fas fa-drum"></i>
                        </div>
                        <div className="text-wrap text-hover">
                            Drums
                        </div>

                    </div>
                </Link>   
                <Link style={{ textDecoration: 'none' }} to="/mic">
                    <div className="d-inline-flex subnav-content">
                        <div className="icon-wrap header-icon">
                        <i className="fas fa-microphone"></i>
                        </div>
                        <div className="text-wrap text-hover">
                            microphone
                        </div>

                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/record-vinyl">
                    <div className="d-inline-flex subnav-content">
                        <div className="icon-wrap header-icon">
                        <i class="fas fa-record-vinyl"></i>
                        </div>
                        <div className="text-wrap text-hover">
                            Record-Vinyl
                        </div>

                    </div>
                </Link>  
                <Link style={{ textDecoration: 'none' }} to="/napster">
                    <div className="d-inline-flex subnav-content">
                        <div className="icon-wrap header-icon">
                        <i class="fab fa-napster"></i>
                        </div>
                        <div className="text-wrap">
                            Napster
                        </div>

                    </div>
                </Link> 
                </div>
            </div>
        )
    }
}
  

export default Sidebar