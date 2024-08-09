
import './ProductsPage.css';
import ProductsTable from './components/ProductsTable/ProductsTable';
import ProductsPageLogo from '../../assets/productsPageLogo.svg';
import Button from './components/Button/Button';



const ProductsPage = () => {
  return (
    <div className='ProductsPage'>
      <img className='ProductsLogo' alt='ProductsLogo' src={ProductsPageLogo} />
      <Button iconPreview iconAdd />
      <h1 className='productTitle'>Products</h1>
      <ProductsTable />
    </div>
  )
};

export default ProductsPage;