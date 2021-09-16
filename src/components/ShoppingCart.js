import React, { Component } from 'react';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: this.props.cart,
            items: [],
            total: null,

        }
        this.onClick = this.onClick.bind(this)
    }
    componentDidMount(){
        let items = [...this.state.cart]
        let title;
        let array = []
        let totalPriceOfItem;
        let qty;
        let price;
        let total = 0;

        items.forEach(item => {  
            title = item[0].title
            price = item[0].price
            totalPriceOfItem = item[0].price * parseInt(item[1])
            qty = item[1]
            total += totalPriceOfItem
            array.push({title, totalPriceOfItem,qty,price })
        })
       

        this.setState({
            items: array,
            total: total,
        })
       

        
    }
    onClick(event, index){
       
    
        if(event.target.innerText === '+'){
            console.log('+ clicked ');
            let items = [...this.state.items]
            let quantity = parseFloat(items[index].qty)
            quantity++;
            items[index].qty = quantity
            let totalPriceOfItem = items[index].qty * parseFloat(items[index].price)
            items[index].totalPriceOfItem = totalPriceOfItem
            console.log(items);
            let total = 0;
            items.forEach(item => {
                total += item.totalPriceOfItem
            })
            this.setState({
                items: items,
                total: total,
            })
        }else if(event.target.innerText === '-'){
            console.log('- clicked');
            let items = [...this.state.items]
            let quantity = parseFloat(items[index].qty)
          
            quantity--;
            
            items[index].qty = quantity

            
            let totalPriceOfItem = items[index].qty * parseFloat(items[index].price)
            items[index].totalPriceOfItem = totalPriceOfItem
            console.log(items);
            let total = 0;
            
            items.forEach(item => {
                total += item.totalPriceOfItem
            })
            this.setState({
                items: items,
                total: total,
            })
           
        }
    }
    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                {this.state.items.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p> £: {item.price}</p>
                        <div>
                            <p>Quantity: {item.qty}</p>
                            <button onClick={event => this.onClick(event, index)}>+</button>
                            <button onClick={event => this.onClick(event, index)}>-</button>
                        </div>
                        
                        <p>Total: £{item.totalPriceOfItem}</p>
                    </div>
                
                ))}
                <div>
                    <h2>Your total is £: {this.state.total}</h2>
                    <button>Checkout</button>
                </div>
                
            </div>
        );
    }
}

export default ShoppingCart;
