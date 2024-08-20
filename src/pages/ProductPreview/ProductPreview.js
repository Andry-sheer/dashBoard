
import './ProductPreview.css';
import ProductPreviewLogo from '../../assets/pagesLogo.svg'
import CardPreview from './components/CardPreview/CardPreview';


const ProductPreview = () => {

  let Id = 1;
  let Index = 0;

  const products = [{

    category: "PC",
    name: "Lenovo Y50-70 Aluminum Black",
    quantity: 5,
    price: 25000,
    id:[Id++],
    index:[Index++]
  },
  {
    category: "PC",
    name: "Lenovo Y50-70 Aluminum Black",
    quantity: 10,
    price: 50000,
    id:[Id++],
    index:[Index++]
},
{
  category: "PC",
  name: "Lenovo Y50-70 Aluminum Black",
  quantity: 15,
  price: 75000,
  id:[Id++],
  index:[Index++]
},
{
category: "PC",
  name: "Lenovo Y50-70 Aluminum Black",
  quantity: 20,
  price: 100000,
  id:[Id++],
  index:[Index++]
}];


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