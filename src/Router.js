import React, {useState, Component} from 'react';
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart'

class Router extends Component{
    constructor(props){
        super(props);


        this.state = {
            cart: '', 
        }
        this.getCart = this.getCart.bind(this)
    }
    


    getCart(cartCallback){
        this.setState({
            cart: cartCallback,
        })
    }
    render(){
        return (
        <div className='router'>
            <BrowserRouter>
                <Link className='home-link' to='/'>Home</Link>
                <Link to='/cart'>Shopping Cart</Link>
                
                <Switch>
                    <Route exact path='/' render={() => <Home cartCallback ={this.getCart}/>}/>
                    <Route exact path='/cart' render={(props) => <ShoppingCart {...props}
                    cart={this.state.cart} />}/>
                    
                </Switch>
            </BrowserRouter>
        </div>
    );
    }
    
}
    
    


export default Router;
