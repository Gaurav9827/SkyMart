import React, { createContext, useState } from "react";

export const MyStore = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("LoginUser")) || null,
  );

  const registerUser = (newUser) => {
    const user = JSON.parse(localStorage.getItem("RegisterUser")) || [];

    const allreadyExist = user.find((user) => {
      return user.email === newUser.email;
    });
    if (allreadyExist) {
      return {
        success: false,
        message: "User already exist ",
      };
    }

    const updateUser = [...user, newUser];
    localStorage.setItem("RegisterUser", JSON.stringify(updateUser));

    setUser(newUser);

    localStorage.setItem("LoginUser", JSON.stringify(newUser));

    return {
      success: true,
      message: "user Created Succesfully ",
    };
  };

  const loggedInUser = (email, password) => {
    const user = JSON.parse(localStorage.getItem("RegisterUser")) || [];

    const alreadyLoginUser = user.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!alreadyLoginUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }
    setUser(alreadyLoginUser);
    localStorage.setItem("LoginUser", JSON.stringify(alreadyLoginUser));
    return {
      success: true,
      message: "usser logged in succesfully ",
    };
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("LoginUser");
  };

  return (
    <MyStore.Provider
      value={{
        registerUser,
        loggedInUser,
        user,
        setUser,
        logoutUser,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export default AuthContext;
