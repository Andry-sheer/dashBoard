
import './ProductPreview.css';
import ProductPreviewLogo from '../../assets/pagesLogo.svg'
import Card from './components/Card/Card';


const ProductPreview = () => {
  return (
    <div className='ProductPreviewPage'>
      <img className='ProductPreviewLogo' alt='ProductsLogo' src={ProductPreviewLogo} />
      <div className='ProductPreviewContainer'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  )
}

export default ProductPreview;