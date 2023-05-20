import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Loading } from "@nextui-org/react";

export default function ({ children }) {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center">
  //       <Loading size="xl" />
  //     </div>
  //   );
  // }

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}
