
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


export default function GuestLayout() {
    const auth = useAuth() ;

    if (auth.token) {
        return <Navigate to="/" />;
    }

  return (
<>


    <div >
      <Outlet />
    </div>

</>
  )
}
