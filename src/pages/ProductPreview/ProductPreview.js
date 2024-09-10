
import './ProductPreview.css';
import logo from "../../assets/pagesLogo.svg";
import Button from "../../components/Button/Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import notebook from "../../assets/lenovo-laptop-y50-cover-6_01 1.png";
import iconCheck from "../../assets/PatchCheck.svg";
import { useParams } from 'react-router-dom';


const ProductPreview = ( ) => {

  const {productId} = useParams();

  return(
    <div className='productPreviewContainer'>
      <div className='productPreviewHeader'>
        <img className='productPreviewLogo' src={logo} alt='logo' />
      </div>

      <div className='productPreviewTitle'>
        <Button className='productPreviewButtonBack' icon={<IoMdArrowRoundBack size='50' />} />
        <p className='productPreviewDescriptionTitle'>Notebook Lenovo Y50-70 Aluminum Black {productId}</p>
      </div>

      <div className='productPreviewContainerInner'>
        <img className='productPreviewImage' src={notebook} alt='productImage' />
        <div className='productPreviewContent'>
          <p className='productPreviewStorage'><img className='productPreviewIconCheck' src={iconCheck} alt='iconCheck' /> Storage</p>
          <p className='productPreviewPrice'>25000$</p>
          <p className='productPreviewQuantity'>Quantity: 5</p>
        </div>
      </div>

      <p className='productPreviewDescriptionTitleInner'> Descriptions:
        <h1 className='productPreviewDescriptionTitleContent'> Notebook Lenovo Y50-70 Aluminum Black </h1>
      </p>
      
      <div className='productPreviewDescription'>
        <p className='productPreviewDescriptionOne'>
          <h2 className='productPreviewDescriptionTwo'> 15.6-дюймовий дисплей стандарту Full HD 
            </h2> Фільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 x 1080). </p>
        <p className='productPreviewDescriptionOne'>
          <h2 className='productPreviewDescriptionTwo'> Динаміки преміум-класу 
            </h2> Стереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики </p>
        <p className='productPreviewDescriptionOne'>
          <h2 className='productPreviewDescriptionTwo'> Dolby Advanced Audio 
            </h2> Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кришталево чіткий просторовий звук за допомогою вбудованих динаміків </p>
      </div>
    </div>
  );
}

export default ProductPreview;