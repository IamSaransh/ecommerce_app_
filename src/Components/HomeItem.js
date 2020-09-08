import React from 'react'
import AppContext from './AppContext'
import 'bootstrap/dist/css/bootstrap.min.css'
class HomeItem extends React.Component{
    render(){
        let {product} = this.props
        return(
            <div></div>
       
           
                
        )
    }
}
HomeItem.contextType = AppContext
export default HomeItem