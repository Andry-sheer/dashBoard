
import './ProductPreview.css';
import ProductPreviewLogo from '../../assets/pagesLogo.svg'
import CardPreview from './components/CardPreview/CardPreview';


const ProductPreview = () => {
  return (
    <div className='ProductPreviewPage'>
      <img className='ProductPreviewLogo' alt='ProductsLogo' src={ProductPreviewLogo} />
      <div className='ProductPreviewContainer'>
      <CardPreview />
      <CardPreview />
      <CardPreview />
      <CardPreview />
      <CardPreview />
      <CardPreview />
      </div>
    </div>
  )
}

export default ProductPreview;