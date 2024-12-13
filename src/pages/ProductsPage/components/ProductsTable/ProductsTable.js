
import { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { deleteProduct, editProduct, fetchProducts, addProduct, fillForm, resetForm, } from "../../../../modules/actions/products";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ModalDelete from "../../../../components/ModalWindows/ModalDelete";
import styles from "../../../../styles/ProductsTable.module.css";
import ModalEdit from "../../../../components/ModalWindows/ModalEdit";
import Spinner from "../../../../components/Spinner/Spinner"
import Logo from "../../../../assets/pagesLogo.svg"

const BasicTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.products.productsData);
  const form = useSelector((state)=> state.products.form);
  const isLoading = useSelector((state)=> state.products.isLoading);
  const isError = useSelector((state)=> state.products.isError);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [selectDelete, setSelectDelete] = useState(null);

  const productToDelete = (product)=> {
    setSelectDelete(product);
    setIsOpenModalDelete(true)
  }

  useEffect(()=> {
    dispatch(fetchProducts());
  },[dispatch]);

  const openModal = (product = null) => {
    if (product) {
      setIsEdit(true);
      dispatch(fillForm(product));
    } else {
      setIsEdit(false);
      dispatch(resetForm());
    }

    setIsModalOpen(true);
  };

  const closeModalDelete =()=> {
    setIsOpenModalDelete(false)
  }



  const closeModal = ()=> {
    setIsModalOpen(false);
    dispatch(resetForm());
  };

  const handleSave = ()=> {
    if(isEdit){
      dispatch(editProduct());
    } else {
      dispatch(addProduct());
    }

    closeModal();
  };




    return (
      <>
      { isError ? (<div className={styles.error}>
        <div className={styles.container}>
          <img src={Logo} alt="logo"/>
            <p className={styles.title}>Somethings error... no Data</p>
          </div>
        </div>
      ) : (
        <div className={styles.BasicTable}>
          {isLoading ? (<div className={styles.spinner}><Spinner/></div>) : (
          <TableContainer style={{ borderRadius: "12px" }} component={Paper}>
            <Table
              sx={{
                minWidth: 400,
                "& .MuiTableCell-body": {
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  fontFamily: "Inter",
                }, "& .MuiTableCell-head": { borderBottom: 0 },
                "& .MuiTableRow-root:hover":{
                      backgroundColor: "#3cd78c"
                    },
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow sx={{ "& .MuiTableCell-head": {
                    borderBottom: "0px"
                  } }} style={{ background: "#0EC86F" }}>
                  <TableCell sx={{ fontWeight: "600"  }} align="center">
                    ID
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }} align="center">
                    Category
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }} align="center">
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }} align="center">
                    Quantity
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }} align="center">
                    Price(₴)
                  </TableCell>
                  <TableCell
                    align="center"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">{product.id}</TableCell>
                    <TableCell align="center">{product.category}</TableCell>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.quantity}</TableCell>
                    <TableCell align="center">{product.price}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton aria-label="edit"
                          onClick={()=> openModal(product)}
                        >
                          <BiSolidEdit className={styles.editButton} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete">
                        <IconButton aria-label="delete"
                          onClick={()=> productToDelete(product)}
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
          )}

          <ModalEdit 
            onOpen={isModalOpen} 
            onSave={handleSave} 
            form={form} 
            isEdit={isEdit} 
            onClose={closeModal} 
          />

          <ModalDelete 
            onOpen={isOpenModalDelete} 
            onClose={closeModalDelete}
            onDelete={(product)=> dispatch(deleteProduct(product.id))}
            product={selectDelete}
          />
      </div>)}
      </>
    );
};


export default BasicTable;
