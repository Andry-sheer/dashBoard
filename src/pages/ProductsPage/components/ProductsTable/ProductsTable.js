
import "./ProductsTable.css";
import BasicSpinner from "../../../../components/Spinner/Spinner";

const ProductsTable = ({ icons, isLoading, isError, products }) => {
  if (isError) {
    return (
      <div className="errorContainer">
        <p className="errorText">Oops! sorry we have a problem...</p>
        <p className="errorText">Server: unavailable</p>
      </div>
    );
  } else {
    return (
      <div className="ProductContainerMain">
        {isLoading ? (
          <BasicSpinner/>
        ) : (
          <div className="ProductsTableContainer">
            <div className="productTableTitle">
              <p className="slotName">ID{icons.sortIcon}</p>
              <p className="slotName">Category{icons.sortIcon}</p>
              <p className="slotName">Name{icons.sortIcon}</p>
              <p className="slotName">Quantity{icons.sortIcon}</p>
              <p className="slotName">Price($){icons.sortIcon}</p>
              <p className="slotName"></p>
            </div>
          </div>
        )}

        {products.map((product) => (
          <div className="productTableField" key={product.id}>
            <div className="productTableSelect">
              <div className="productItem">
                <div className="productItem">{product.id}</div>
                <div className="productItem">{product.category}</div>
                <div className="productItem">{product.name}</div>
                <div className="productItem">{product.quantity}</div>
                <div className="productItem">{product.price}</div>
                <div className="buttonContainerProductTable">
                  <button className="buttonEdit">{icons.editIcon}</button>
                  <button className="buttonDelete">{icons.deleteIcon}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default ProductsTable;
