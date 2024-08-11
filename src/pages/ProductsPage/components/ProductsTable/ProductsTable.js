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
          <p className='slotName'>ID{sortIcon}</p>
          <p className='slotName'>Category{sortIcon}</p>
          <p className='slotName'>Name{sortIcon}</p>
          <p className='slotName'>Quantity{sortIcon}</p>
          <p className='slotName'>Price($){sortIcon}</p>
          <p className='slotName'></p>
        </div>

        <div className='productTableField'>
          <div className='productTableSelect'> { this.state.products.map(product => <div className='productItem'  key={product.id}> 
            <div className='productItem'>{product.id}</div> <div className='productItem'>{product.category}</div> 
              <div className='productItem' >{product.name}</div>  <div className='productItem' >{product.quantity}</div> 
              <div className='productItem' >{product.price}</div>
                <div className='buttonContainerProductTable'>
                  <button className='buttonEdit'>{editIcon}</button>
                  <button className='buttonDelete'>{deleteIcon}</button></div> </div>)}
              </div>
          </div>
      </div>
    );
  }
}

export default ProductsTable;