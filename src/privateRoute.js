
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = '/' }) => {
  if (!localStorage.getItem("jwt")) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}

export default PrivateRoute;