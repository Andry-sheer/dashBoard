import "./ProductsTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { connect } from "react-redux";
import { useState } from "react";
import { deleteProduct } from "../../../../modules/actions/products";
import ModalDelete from "../../../../components/ModalWindows/ModalDelete";


const BasicTable = ({ products, deleteProduct }) => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectProductToDelete, setSelectProductToDelete] = useState(null);

  const handleOpenModals = (product) => {
    setIsOpenModal(true);
    setSelectProductToDelete(product);
  }

  const handleCloseModals = () => {
    setIsOpenModal(false);
    setSelectProductToDelete(null);
  }

  const handleDelete = ()=> {
        deleteProduct(selectProductToDelete.id);
        handleCloseModals()
    }

    return (
      <>
          <TableContainer style={{ borderRadius: "12px" }} component={Paper}>
            <Table
              sx={{
                minWidth: 400,
                "& .MuiTableCell-body": {
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  fontFamily: "Inter",
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
                    className="TableCellMobile"
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
                    <TableCell align="center" component="th" scope="row">
                      {product.id}
                    </TableCell>
                    <TableCell align="center">{product.category}</TableCell>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.quantity}</TableCell>
                    <TableCell align="center">{product.price}</TableCell>

                    <TableCell className="TableCellMobile" align="center">
                      <Tooltip title="Edit">
                        <IconButton aria-label="delete">
                          <BiSolidEdit className="editButton" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete">
                        <IconButton
                          onClick={()=> handleOpenModals(product)}
                          aria-label="delete"
                        >
                          <MdDelete className="deleteButton" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <ModalDelete onOpen={isOpenModal} onDelete={handleDelete} onClose={handleCloseModals} />
      </>
    );
};

const mapStateToProps = (state) => ({
  products: state.products.productsData,
  isLoadProducts: state.products.isLoadProducts,
});

export default connect(mapStateToProps, {deleteProduct} )(BasicTable);
