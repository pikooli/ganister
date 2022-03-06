import React, { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cookie from "src/lib/cookie";
import AuthContext from "src/lib/AuthContext";

export default function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const user = cookie.get("user");
    if (user && auth && !auth.user) {
      auth.setUser(user);
    }
  }, [auth]);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    cookie.remove("user");
    auth.setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center ">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block h-8 w-auto"
                src="https://www.ganister.eu/images/G_50.png"
                alt="Workflow"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {path !== "/" && (
              <button
                type="button"
                className="bg-gray-900 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white font-bold"
                onClick={onClick}
              >
                LogOut
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
