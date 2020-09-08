import React from 'react'
import Navbar from '../Components/Navbar'
import AppContext from '../AppContext'
import CartItem from './cartItem'

class Cart extends React.Component{
    render(){
let total = 0;
this.context.cart.forEach((item) => {
 total = total + (item.quantity * item.product.price)
})
        return( 
            <div>
                <Navbar/>
               <div className="container-fluid">
                   <div className="col-sm-7">
                        <div class="clearfix ">
                            <h3 className="card-title float-left mt-3">Cart</h3>
                            <button className="btn btn-danger float-right mt-3" onClick={this.context.clearCart}>Clear Cart</button>
                        </div>
                       <hr/>
                       <div className="card">
                            <h3>
                               <small> Total Amount: </small>
                               <span className="text-primary">Rs: {total}</span>
                            </h3>
                       </div>
                       <hr/>
                       {
                           this.context.cart.map((product,index) =>
                          <CartItem product ={product.product} qty= {product.qty_added} key={index}/>
                           )
                       }
                    </div>
                   <div className="col-sm-4  ">
                       
                   </div>
               </div>
            </div>
        )
    }
}
Cart.contextType = AppContext
export default Cart
