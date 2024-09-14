import "./ProductPreview.css";
import logo from "../../assets/pagesLogo.svg";
import Button from "../../components/Button/Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import iconCheck from "../../assets/PatchCheck.svg";
import { useNavigate, useParams } from "react-router-dom";
import notebook from "../../assets/lenovo-laptop-y50-cover-6_01 1.png";
import nvidia from "../../assets/nvidia.png";
import samsung from "../../assets/samsung.avif";

const ProductPreview = () => {
  const { id } = useParams();

  const navigateBack = useNavigate();

  const handleButtonBack = () => {
    navigateBack("/preview-page");
  };

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

  const product = products.find((productID) => productID.id === Number(id));

  let img;

  if (product.name === "Lenovo Y50-70 Aluminum Black") {
    img = (
      <img
        className="productPreviewImage"
        src={product.img.notebook}
        alt="cardImage"
      />
    );
  }

  if (product.name === "Samsung Odyssey NEO G7") {
    img = (
      <img
        className="productPreviewImage"
        src={product.img.samsung}
        alt="cardImage"
      />
    );
  }

  if (product.name === "Nvidia Quadro RTX 4000") {
    img = (
      <img
        className="productPreviewImage"
        src={product.img.nvidia}
        alt="cardImage"
      />
    );
  }

  return (
    <div className="productPreviewContainer">
      <div className="productPreviewHeader">
        <img className="productPreviewLogo" src={logo} alt="logo" />
      </div>

      <div className="productPreviewTitle">
        <Button
          onClick={handleButtonBack}
          className="productPreviewButtonBack"
          icon={<IoMdArrowRoundBack size="50" />}
        />
        <p className="productPreviewDescriptionTitle">{product.name}</p>
      </div>

      <div className="productPreviewContainerInner">
        <div>{img}</div>
        <div className="productPreviewContent">
          <p className="productPreviewStorage">
            <img
              className="productPreviewIconCheck"
              src={iconCheck}
              alt="iconCheck"
            />{" "}
            Storage
          </p>
          <p className="productPreviewPrice">{product.price}₴</p>
          <p className="productPreviewQuantity">Quantity: {product.quantity}</p>
        </div>
      </div>

      <div className="productPreviewDescriptionTitleInner">
        Опис:
        <h1 className="productPreviewDescriptionTitleContent">
          {product.name}
        </h1>
      </div>

      <div className="productPreviewDescription">
        <div className="productPreviewDescriptionOne">
          <h2 className="productPreviewDescriptionTwo"> {product.titleOne}</h2>
          {product.descriptionOne}
        </div>
        <div className="productPreviewDescriptionOne">
          <h2 className="productPreviewDescriptionTwo"> {product.titleTwo}</h2>
          {product.descriptionTwo}
        </div>
        <div className="productPreviewDescriptionOne">
          <h2 className="productPreviewDescriptionTwo">
            {product.titleThree}
          </h2>
          {product.descriptionThree}
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
