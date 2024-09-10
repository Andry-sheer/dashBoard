
import "./PreviewPage.css";
import logo from "../../assets/pagesLogo.svg";
import CardPreview from "./components/CardPreview/CardPreview";
import { useParams } from "react-router-dom";

const PreviewPage = () => {

  const { productId } = useParams();

  const products = [
    {
      category: "PC",
      name: "Lenovo Y50-70 Aluminum Black",
      quantity: 1,
      price: 5000,
      id: 1,
    },
    {
      category: "PC",
      name: "Lenovo Y50-70 Aluminum Black",
      quantity: 3,
      price: 15000,
      id: 2,
    },
    {
      category: "PC",
      name: "Lenovo Y50-70 Aluminum Black",
      quantity: 5,
      price: 25000,
      id: 3,
    },
  ];


  return (
    <div className="PreviewPage">
      <img
        className="PreviewLogo"
        alt="logo"
        src={logo}
      />
      <div className="PreviewContainer">
        
        {products.map((product) => (
          <CardPreview key={product.id} product={product}  />
        ))}
      </div>
    </div>
  );
};

export default PreviewPage;
