import React, { Component } from 'react';
import './App.css';
import Cards from './Components/Card';

const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
  client_id: 'sNyBvpVhbk57x6k8FywBIZ53q03Ytqm8PooFbQDe4E',
  client_secret: 'D1wmsAtww4Cx9Zr6R3P1gHflBTHRR4CT1VLIW9A3rf'
})

const reference = '15476'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      products: [],
      cart: [],
      items: 0
    };
  }
  cart = Moltin.Cart(reference).Items().then(
    (item)=> {
      console.log('this is cart.......', item)
      this.setState({
        items: item.data.length
      })
    }
  );

  fetchcart = () => {
    Moltin.Cart().Items().then((items)=>(this.setState({
      cart: items,
      items: items.data.length
    },()=>{console.log('loaded......',this.state.items)}
  )));
  }

  addToCart = (id, quantity) => Moltin.Cart().AddProduct(id, quantity).then((item)=>{
    alert(`Added item to your cart`);
    console.log(item);
    console.log(this.cart);
  }).then(this.fetchcart);

  removeFromCart = (id, quantity) => Moltin.Cart(reference).RemoveItem(id, quantity).then(this.fetchcart);

  componentDidMount() {
    Moltin.Categories.With('products').All().then(products => {
      this.setState({
        loaded: true,
        products: products.included.products,
        response: products,
        count: [0,1,2,3,4,5]
      })
    }).then(this.cart)
  }
  getImageUrl = (image_id) => {
    Moltin.Products.With(image_id).All()
  }
  
  render() {
    return (
    this.state.loaded ?
      <div className="App">
        <h1> Project E-Commerce </h1>
        <div className={`d-flex flex-row ${App}`}>
          <div style={{height:50,width:50, display:'flex'}}>
            <img src={require('./Assets/cart.svg')} alt={'loading...'}/>
            <div className="lblCartCount"><h1>{this.state.items}</h1></div>
          </div>
          {this.state.count.map((index)=>
          <Cards
            element={this.state.products[index]}
            image_url={this.getImageUrl(this.state.products[index].relationships.main_image.data.id)}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          />
          )}
          
        </div>
      </div>:
      <div> Loading Please Wait.....</div>
    );
  }
}

export default App;
