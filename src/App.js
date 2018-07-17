import React, { Component } from 'react';
import './App.css';
import Cards from './Components/Card';
// import { body, row } from './styles';

const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
  client_id: 'sNyBvpVhbk57x6k8FywBIZ53q03Ytqm8PooFbQDe4E',
  client_secret: 'D1wmsAtww4Cx9Zr6R3P1gHflBTHRR4CT1VLIW9A3rf'
})


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      products: []
    };
  }

  componentWillMount() {
    Moltin.Categories.With('products').All().then(products => {
      console.log(products)
      this.setState({
        loaded: true,
        products: products.included.products
      })
    })

  }
  
  render() {
    return (
    this.state.loaded ?
      <div className="App">
        <h1> Project E-Commerce </h1>
        <div className="d-flex flex-column">
            <Cards element={this.state.products[0]}/>
            <Cards element={this.state.products[1]}/>
            <Cards element={this.state.products[2]}/>
            <Cards element={this.state.products[3]}/>
            <Cards element={this.state.products[4]}/>
            <Cards element={this.state.products[5]}/>
        </div>
      </div>:
      <div> Loading Please Wait.....</div>
    );
  }
}

export default App;
