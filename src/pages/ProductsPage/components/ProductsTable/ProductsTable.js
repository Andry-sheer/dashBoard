import './ProductsTable.css';
import { Component } from 'react';
import { BiSortAlt2 } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const sortIcon = <BiSortAlt2 className='sortIcon' size='20px'/>;
const editIcon = <FaEdit className='editIcon' size='20px'/>;
const deleteIcon = <MdDelete className='deleteIcon' size='20px' />

class ProductsTable extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentDidMount(){
    this.getProducts()
  }
  
  async getProducts() {
    const response = await fetch('https://66401c9ca7500fcf1a9d1857.mockapi.io/products');
    const productsData = await response.json();

    this.setState({ products: productsData })
    console.log(productsData);
  }

  render(){
    return ( 
      <div className='ProductsTableContainer'>
        <div className='productTableTitle'>
          <div className='slotName'>ID{sortIcon}</div>
          <div className='slotName'>Category{sortIcon}</div>
          <div className='slotName'>Name{sortIcon}</div>
          <div className='slotName'>Quantity{sortIcon}</div>
          <div className='slotName'>Price($){sortIcon}</div>
          <div className='slotName'></div>
        </div>

        <div className='productTable'>
          <div className='slotOne'>
            { this.state.products.map(product => <div style={{margin:'10px 0'}} key={product.id}>{product.id}</div>)}
          </div>

          <div className='slotTwo'>
            { this.state.products.map(product => <div style={{margin:'10px 0'}} key={product.id}>{product.category}</div>)}
          </div>

          <div className='slotThree'>
            { this.state.products.map(product => <div style={{margin:'10px 0'}} key={product.id}>{product.name}</div>)}
          </div>    
          
          <div className='slotFour'>
            { this.state.products.map(product => <div style={{margin:'10px 0'}} key={product.id}>{product.quantity}</div>)}
          </div>

          <div className='slotFive'>
            { this.state.products.map(product => <div style={{margin:'10px 0'}} key={product.id}>{product.price}</div>)}
          </div>

          <div className='slotSix'>
            { this.state.products.map(product => <div style={{margin:'8px 0'}} key={product.id}>
              <button className='buttonEdit'>{editIcon}</button>
              <button className='buttonDelete'>{deleteIcon}</button></div>)}
          </div>
            
        </div>

      </div>
    );
  }
}

export default ProductsTable;