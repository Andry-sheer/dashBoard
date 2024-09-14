
import "./PreviewPage.css";
import logo from "../../assets/pagesLogo.svg";
import CardPreview from "./components/CardPreview/CardPreview";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { IoChevronBack } from "react-icons/io5";
import notebook from "../../assets/lenovo-laptop-y50-cover-6_01 1.png";
import nvidia from "../../assets/nvidia.png";
import samsung from "../../assets/samsung.avif";
// import ProductPreview from "../ProductPreview/ProductPreview";


const PreviewPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const products = [
    {
      category: "PC",
      name: "Lenovo Y50-70 Aluminum Black",
      quantity: 1,
      price: 30000,
      id: 1,
      img: { notebook },
      titleOne: "15.6-дюймовий дисплей стандарту Full HD",
      descriptionOne:
        "Фільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 x 1080).",
      titleTwo: "Динаміки преміум-класу",
      descriptionTwo:
        "Стереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики.",
      titleThree: "Dolby Advanced Audio",
      descriptionThree:
        "Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кришталево чіткий просторовий звук за допомогою вбудованих динаміків.",
    },

    {
      category: "Monitor",
      name: "Samsung Odyssey NEO G7",
      quantity: 3,
      price: 29999,
      id: 2,
      img: { samsung },
      titleOne: "Дисплей Samsung Odyssey NEO G7 з технологією Quantum Matrix",
      descriptionOne:
        "розмиває межі реального та віртуального. Частота оновлення екрану 144 Гц і час відгуку 1 мс забезпечують новий ігровий досвід та дають перевагу в будь-якому геймплеї.",
      titleTwo: "здатність UHD та технологія DisplayHDR 600",
      descriptionTwo:
        "гарантують виняткову чіткість та деталізацію зображення, а технологія",
      titleThree: "AMD FreeSync Premium Pro",
      descriptionThree: "відповідає за супер-плавний ігровий процес.",
    },

    {
      category: "Video Card",
      name: "Nvidia Quadro RTX 4000",
      quantity: 5,
      price: 45000,
      id: 3,
      img: { nvidia },
      titleOne: "Пориньте у світ безмежних можливостей",
      descriptionOne:
        "з графічним прискорювачем Nvidia Quadro RTX 4000 . Цей вражаючий продукт сучасної технології відкриває двері до високопродуктивного та масштабованого графічного рендерингу та обробки даних.",
      titleTwo: "Поєднуючи в собі потужність та ефективність",
      descriptionTwo:
        "Nvidia Quadro RTX 4000 пропонує захоплюючий рівень продуктивності для професіоналів у галузі візуалізації, дизайну та архітектури",
      titleThree:
        "За допомогою Nvidia Quadro RTX 4000  ви зможете легко створювати:",
      descriptionThree:
        "приголомшливі тривимірні моделі, обробляти складні візуалізації та редагувати високоякісні відео з неперевершеною точністю та швидкістю.",
    },
  ];




  const handleClickCard = (id) => {
    navigate(`/product-preview/${id}`);
  }

  const handleClickBack = () => {
    navigate("/product-page");
  }

  return (

    <div className="PreviewPage">
      <img
        className="PreviewLogo"
        alt="logo"
        src={logo}
      />

      <Button type="button" textButton="Product page" onClick={handleClickBack} className="backButtonProductPage" icon={<IoChevronBack size='40' color="black" />} />

      <div className="PreviewContainer">
        {products.map((product) => (
          <CardPreview key={product.id} product={product} onClick={()=> handleClickCard(product.id)} />
          ))}
      </div>
    </div>
  );
};

export default PreviewPage;
