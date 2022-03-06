import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "src/utils/constant";

import cookie from "src/lib/cookie";
import AuthContext from "src/lib/AuthContext";
import SignIn from "src/pages/home/forms/Signin";
import * as request from "src/lib/request";

type Props = {};

const Home: React.FC<Props> = () => {
  const [error, setError] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const { action } = e.currentTarget;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    if (!email || !password) {
      return setError("Please give a email and password");
    }
    request.post(action, { email, password }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          const user = {
            email: data.properties.email,
            firstName: data.properties.firstName,
            lastName: data.properties.lastName,
            name: data.properties.name,
            pict: data.properties.pict,
            token: data.properties.token,
            tokenExpiration: data.properties.tokenExpiration,
          };
          cookie.set("user", user);
          auth.setUser(user);
          navigate("/list");
        });
      } else {
        setError("Bad credential");
      }
    });
  };

  const onChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    setError("");
  };

  return (
    <div>
      <SignIn
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
        setError={setError}
        action={`${URL}/users/signin`}
      />
    </div>
  );
};

export default Home;
