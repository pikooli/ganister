import { useLocation, Navigate } from "react-router-dom";
import cookie from "./cookie";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const user = cookie.get("user");
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
