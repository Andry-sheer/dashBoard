
import { Component } from 'react';
import './App.css';
import ProductsPage from './ProductsPage/ProductsPage';
import { API_URL } from '../constants';
import Profile from './ProductsPage/components/Profile/Profile';
// import Login from './Login/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
      isLoading: true, 
      isError: false,
    }
  }

  componentDidMount(){
    setTimeout(()=> ( this.getProducts()), 2000) 
  }
  
  async getProducts() {
    try {
      const response = await fetch( API_URL + 'products' );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    
    const productsData = await response.json();
    this.setState({ products: productsData, })
    this.setState({ isLoading: false });
  }

  catch (error) {
    this.setState({
      isError: true,
      isLoading: false,
    });
  }
}

  render() {
    const { isLoading, isError, products } = this.state;

    return (
    <div className="App">
      <Profile product={products[0]}/>
      {/* <Login /> */}
      <ProductsPage products={products} isLoading={isLoading} isError={isError} />
    </div>
    )

  }
}

export default App;
