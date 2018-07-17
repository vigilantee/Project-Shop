import React, { Component } from 'react';
import './App.css';
import Cards from './Components/Card';
// import { body, row } from './styles';

const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
  client_id: 'sNyBvpVhbk57x6k8FywBIZ53q03Ytqm8PooFbQDe4E',
  client_secret: 'D1wmsAtww4Cx9Zr6R3P1gHflBTHRR4CT1VLIW9A3rf'
})

const cart = Moltin.Cart().Items().then((item)=>console.log('this is cart.......', item));

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      products: [],
      cart: []
    };
  }
  fetchcart = () => {
    Moltin.Cart().Items().then((items)=>(this.setState({cart: items})));
  }
  addToCart = (id, quantity) => Moltin.Cart().AddProduct(id, quantity).then((item)=>{
    alert(`Added ${item.name} to your cart`)
  });

  componentDidMount() {
    Moltin.Categories.With('products').All().then(products => {
      this.setState({
        loaded: true,
        products: products.included.products,
        response: products,
        count: [0,1,2,3,4,5]
      })
    }).then(this.fetchCart)
  }
  getImageUrl = (image_id) => {
    Moltin.Products.With(image_id).All().then(resp=> console.log('image is .............',resp));
  }
  
  render() {
    console.log(cart)
    return (
    this.state.loaded ?
      <div className="App">
        <h1> Project E-Commerce </h1>
        <div className="d-flex flex-column">
          {this.state.count.map((index)=>
          <Cards element={this.state.products[index]} image_url={this.getImageUrl(this.state.products[index].relationships.main_image.data.id)} addToCart={this.addToCart}/>
          )}
        </div>
      </div>:
      <div> Loading Please Wait.....</div>
    );
  }
}

export default App;
