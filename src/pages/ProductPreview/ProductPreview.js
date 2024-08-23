
import './ProductPreview.css';
import ProductPreviewLogo from '../../assets/pagesLogo.svg'
import CardPreview from './components/CardPreview/CardPreview';


const ProductPreview = () => {

  let Id = 1;

  const products = [
  {
    category: "PC",
    name: "Lenovo Y50-70 Aluminum Black",
    quantity: 1,
    price: 5000,
    id:[Id++],
  },
  {
    category: "PC",
    name: "Lenovo Y50-70 Aluminum Black",
    quantity: 3,
    price: 15000,
    id:[Id++],
  },
  {
    category: "PC",
    name: "Lenovo Y50-70 Aluminum Black",
    quantity: 5,
    price: 25000,
    id:[Id++],
  },
];


console.log(products);

  return (
    
    <div className='ProductPreviewPage'>
      <img className='ProductPreviewLogo' alt='ProductsLogo' src={ProductPreviewLogo} />
      <div className='ProductPreviewContainer'>
      {products.map(product => <CardPreview key={product.id} product={product} />)}

      </div>
    </div>
  )
}

export default ProductPreview;