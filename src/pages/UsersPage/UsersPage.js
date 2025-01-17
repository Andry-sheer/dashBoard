
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchUsers, setUser } from "../../modules/actions/login";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { styles } from "./components/CustomStyles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import defaultImg from "../../assets/profile.png";

const UsersPage = ({ users, fetchUsers }) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser({ ...savedUser, status: true });
    }
  
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      storedUsers.forEach((storedUser) => {
        if (storedUser.id === savedUser?.id) {
          storedUser.status = true;
        }
      });
  
      localStorage.setItem("users", JSON.stringify(storedUsers));
    }
    
    // eslint-disable-next-line
  }, []);

  const sortUsers = [...users].sort((a, b) => {
    return a.id - b.id;
  });

  const handleClickUser = (id)=> {
    navigate(`/profiles/${id}`);
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>users</h1>


        <div style={styles.usersTable}>
          <TableContainer style={styles.tableContainer}>
            <Table style={styles.table} aria-label="simple table">
              <TableHead style={styles.tableHead}>
                <TableRow style={styles.tableHeadRows}>
                  <TableCell style={styles.tableHeadCell}>ID</TableCell>
                  <TableCell style={styles.tableHeadCell}>Name</TableCell>
                  <TableCell style={styles.tableHeadCell}>Email</TableCell>
                  <TableCell style={styles.tableHeadCell}>Role</TableCell>
                  <TableCell style={styles.tableHeadCell}>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {sortUsers.map((user) => (
                  <TableRow style={styles.tableBodyRows} key={user.id}>
                    <TableCell style={styles.bodyRows}>{user.id}</TableCell>
                    <TableCell 
                      style={styles.name}
                      onClick={()=> handleClickUser(user.id)}>
                        <div style={styles.images}>
                          <img style={styles.image} src={user.image ? user.image : defaultImg} alt="user img" />
                          <span style={user.status ? styles.statusOn : styles.statusOff}></span>
                        </div>

                        {user.name}
                      </TableCell>
                    <TableCell style={styles.bodyRows}>{user.email}</TableCell>
                    <TableCell style={styles.bodyRows}>{user.role}</TableCell>
                    <TableCell style={styles.bodyRows}>
                      <Tooltip title="Edit">
                        <IconButton aria-label="edit"
                          onClick={()=> ("")}
                        >
                          <BiSolidEdit style={styles.editButton} />
                        </IconButton>
                      </Tooltip>

                    {user.role === "Administrator" ?
                      <Tooltip title="Delete">
                        <IconButton aria-label="delete"
                          onClick={()=> ("")}
                          disabled={user.role !== "Administrator"}
                        >
                          <MdDelete style={styles.deleteButton} />
                        </IconButton>
                      </Tooltip> : null }
                    </TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>


      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.login.users,
});

export default connect(mapStateToProps, { fetchUsers, setUser })(UsersPage);