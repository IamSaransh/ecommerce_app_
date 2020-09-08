import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import AppContext from './AppContext'
import { getProducts } from './repo' 
import Cart from './Pages/cart'
import CartItem from './Pages/cartItem'

 

class Routes extends React.Component{
    constructor(){
        super()
        this.state = {
            products :[],
            
            cart : JSON.parse(localStorage.getItem('cart')) || [],
        addToCart : (product, qty) =>{
                let cart = this.state.cart;
                cart.push({
                    product: product,
                    quantity : qty,
                });
                this.setState({
                    cart: cart,
                })
                localStorage.setItem('cart', JSON.stringify(cart))
        },
        //create a new array named newCart and push all the items other than the removed item and set that as 
        // new array and save that in local storage and that is displayed on the cart page.
        // cart destroyed 
        //new cart is filled with new data and IS SET AS NEW STSTE
        removeFromCart: (id) => {
            let cart = this.state.cart, newCart =[];

            cart.map((cartItem) => {
                if(cartItem.product.id !== id)
                newCart.push(cartItem)
            });
            this.setState({
                cart: newCart
            })
            localStorage.setItem('cart', JSON.stringify(newCart))
        },

        clearCart: () => {
            localStorage.clear();
            this.setState({cart: []});
            if ({cart: []} === null) {
                
            }
            alert("cart has been cleared successfully")
        }


        }
    }
    
    
    componentDidMount(){
        getProducts().then((products) =>
        this.setState({products}) )
     }


    render(){
        return(
            <AppContext.Provider value ={this.state}>
                <Switch>
                    <Route exact path="/"  component={Home} ></Route>
                    <Route exact path="/cart"  component={Cart} ></Route>
                </Switch>
            </AppContext.Provider>
        )
    }
    
    
}

export default Routes