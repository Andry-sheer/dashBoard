
import { Component } from 'react';
import './ProductsPage.css';
import ProductsTable from './components/ProductsTable/ProductsTable';
import ProductsPageLogo from '../../assets/productsPageLogo.svg';
import Button from './components/Button/Button';



class ProductsPage extends Component {

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
      const response = await fetch('https://66401c9ca7500fcf1a9d1857.mockapi.io/products');

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    
    const productsData = await response.json();
    
    this.setState({ products: productsData, })
    this.setState({ isLoading: false });
    console.log(productsData);
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
    <div className='ProductsPage'>
      <img className='ProductsLogo' alt='ProductsLogo' src={ProductsPageLogo} />
      <Button iconPreview iconAdd />
      <h1 className='productTitle'>Products</h1>
      <ProductsTable products={products} isLoading={isLoading} isError={isError} />
    </div>
    );
  }
}

export default ProductsPage;