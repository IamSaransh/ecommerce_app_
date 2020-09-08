import React from 'react'
import AppContext from '../AppContext'
import 'bootstrap/dist/css/bootstrap.min.css'

class CartItem extends React.Component{
    render(){
        let {product} = this.props
        return(
            <div className="card mb-3">
                <div className="card-body">
                    <img  class="img-thumbnail float-left mr-4" alt="" src={product.imageUrl} style={{width:'25%'}}/> 
                    <h4 className=" card-title">{product.name}</h4>
                    <h5 className=" card-text"><small>Price: Rs </small><small>{product.price}</small></h5>
                    <span className="card-text"><small>Quantity added: </small><small>{product.qty}</small></span>
                    <button className="btn btn-sm btn-warning float-right" onClick={() => {this.context.removeFromCart(product.id)}}>Remove from cart</button>
                </div>
                
            </div>
        )
    }
}
CartItem.contextType = AppContext
export default CartItem