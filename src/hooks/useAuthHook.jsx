import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useAuthHook = () => {
  const navigate = useNavigate();
  const { registerUser, loggedInUser } = useContext(MyStore);
  const { register, handleSubmit, reset } = useForm();
  const [loginError, setLoginError] = useState("");

  const registerFormSubmit = (data) => {
    const response = registerUser(data);
    if (!response.success) {
      toast.error(response.message);
    } else {
      toast.success("user register  successful!");

      navigate("/");
      reset();
    }
  };
  const registerError = () => {
    toast.error("Fill all fields");
  };

  let loginFormSubmit = (data) => {
    const response = loggedInUser(data.email, data.password);
    if (!response.success) {
      setLoginError(response.message);

      return;
    }
    setLoginError("");
    toast.success(response.message);

    navigate("/");
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    registerFormSubmit,
    registerError,
    loginFormSubmit,
    loginError,

  };
};
