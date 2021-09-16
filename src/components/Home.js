import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onInput = this.onInput.bind(this);
        
    }
    
    state = {
        loading: true,
        products: null,
        cart: [],
        quantity: [],
    }
    async componentDidMount(){
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        let array = []
        data.forEach(product => {
            array.push(0)
        })
        
        this.setState({
            products: data,
            loading: false,
            quantity: array,
        })
        console.log(this.state);
    }

    onClick(event, index, product, quantity){
        //logic for if same item is added, add quantities together 

        if(quantity === 0){
            console.log("0 quantity entered item not added");
        }else{
            this.setState({
            cart:[...this.state.cart, [product, quantity]]
        },() => {
            let cart = [...this.state.cart]
            console.log(cart);
            cart.forEach((product, index)=> {
              console.log(product);
              console.log(index);
              this.props.cartCallback(this.state.cart)
              
            })
        })
        }
        
        


    }

    onInput(event, index){
        const values = [...this.state.quantity]
        values[index] = event.target.value
       this.setState({
           quantity: [...values]
       })




       
    }
  
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {this.state.loading && 
                <h2>Loading...</h2>}
                {!this.state.loading && 
                <div className='products'>
                     {this.state.products.map((product, index) => (
                    <div key={index} className='product'>
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.name} height='100' width='100'/>
                        <p>£: {product.price}</p>
                        <div>
                            <button onClick={event => this.onClick(event,index, product,this.state.quantity[index])}>Add to cart</button>
                            <input type='number' min='0' name='quantity' value={this.state.quantity[index]} onInput={event => this.onInput(event,index)}></input>
                        </div>
                    </div>
                    
                ))}
                   
                </div>}
                 
            </div>
        );
    }
}

export default Home;
