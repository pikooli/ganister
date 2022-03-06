import React, { useEffect, useContext } from "react";
import AuthContext from "src/lib/AuthContext";
import cookie from "src/lib/cookie";
import NavBar from "src/components/Navbar";

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    const user = cookie.get("user");
    if (user && auth && !auth.user) {
      auth.setUser(user);
    }
  }, [auth]);

  return (
    <div className="text-gray-300">
      <NavBar />
      <div className="mx-3 mt-3 lg:mx-auto py-3 divide-y md:max-w-4xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
