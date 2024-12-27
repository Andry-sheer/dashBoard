import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteProduct, editId } from "../../../../modules/actions/products";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ModalDelete from "../../../../components/ModalWindows/ModalDelete";
import styles from "../../../../styles/ProductsTable.module.css";
import ModalEdit from "../../../../components/ModalWindows/ModalEdit";

const BasicTable = ({ products, deleteProduct, editId }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectProductToDelete, setSelectProductToDelete] = useState("");
  const navigate = useNavigate();
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  // eslint-disable-next-line
  const [selectEdit, setSelectEdit] = useState(null);


  const handleCloseEdit = () => {
    setIsOpenModalEdit(false);
    setSelectEdit(null);
  };

  const handleOpenEdit = (product) => {
    setIsOpenModalEdit(true);
    editId(
      product.id, 
      product.category, 
      product.name, 
      product.quantity, 
      product.price, 
      product.descriptions, 
      product.images
    );
  };

  const handleOpenModals = (product) => {
    setIsOpenModal(true);
    setSelectProductToDelete(product);
  };

  const handleCloseModals = () => {
    setIsOpenModal(false);
    setSelectProductToDelete("");
  };

  const handleDelete = ()=> {
    deleteProduct(selectProductToDelete.id);
    handleCloseModals();
  };

  const sortProducts = [...products].sort((a, b)=> {
    return a.id - b.id;
  });

  const handleClickProduct = (id) => {
    navigate(`/product-preview/${id}`);
  };

  const style = {
    container: {
      borderRadius: "12px",
      background: "white",
    },

    table: {
      minWidth: 400,
      padding: 0,
      fontFamily: "Inter",
    },

    row: {
      background: "#0EC86F",
    },

    cellHead: {
      fontWeight: 600,
      textAlign: "center",
      borderBottom: 0
    },

    cell: {
      textAlign: "center",
    }
  }

    return (
        <>
          <TableContainer style={style.container}>
            <Table style={style.table} aria-label="simple table">
              <TableHead style={style.body}>
                <TableRow style={style.row}>
                  <TableCell style={style.cellHead}>ID</TableCell>
                  <TableCell style={style.cellHead}>Категорія</TableCell>
                  <TableCell style={style.cellHead}>Ім'я</TableCell>
                  <TableCell style={style.cellHead}>Кількість</TableCell>
                  <TableCell style={style.cellHead}>Ціна(₴)</TableCell>
                  <TableCell style={style.cellHead}></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {sortProducts.map((product) => (
                  <TableRow className={styles.tableRow} key={product.id}>
                    <TableCell className={styles.rows} style={style.cell}>{product.id}</TableCell>
                    <TableCell className={styles.rows} style={style.cell}>{product.category}</TableCell>
                    <TableCell 
                      className={styles.name} 
                      style={style.cell} 
                      onClick={() => handleClickProduct(product.id)}>{product.name}
                    </TableCell>
                    <TableCell className={styles.rows} style={style.cell}>{product.quantity}</TableCell>
                    <TableCell className={styles.rows} style={style.cell}>{product.price}</TableCell>
                    <TableCell className={styles.rows} style={style.cell}>
                      <Tooltip title="Edit">
                        <IconButton aria-label="edit"
                          onClick={()=> handleOpenEdit(product)}
                        >
                          <BiSolidEdit className={styles.editButton} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete">
                        <IconButton aria-label="delete"
                          onClick={()=> handleOpenModals(product)}
                        >
                          <MdDelete className={styles.deleteButton} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ModalEdit onOpen={isOpenModalEdit} onClose={handleCloseEdit} />
          <ModalDelete onOpen={isOpenModal} product={selectProductToDelete} onDelete={handleDelete} onClose={handleCloseModals} />
      </>
    );
};

const mapStateToProps = (state) => ({
  products: state.products.productsData,
  isLoadProducts: state.products.isLoadProducts,
  isLoading: state.products.isLoading
});

export default connect(mapStateToProps, { deleteProduct, editId } )(BasicTable);
