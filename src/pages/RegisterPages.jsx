import React, { useContext } from "react";
import { Zap } from "lucide-react";
import { data, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/AuthContext";
import { toast } from "react-toastify";

const RegisterPages = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(MyStore);
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();

  const formSubmit = (data) => {
    const response = registerUser(data);
    if (!response.success) {
      toast.error(response.message);
    } else {
      toast.success("user register  successful!");

      navigate("/");
    }
  };
  const onError = () => {
    toast.error("Fill all fields");
  };

  return (
    <div className="w-full bg-black min-h-screen flex flex-col items-center justify-center p-4">
      {/* Mobile Logo */}
      <div className=" flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-lg bg-[#B7DF02] flex items-center justify-center">
          <Zap className="w-5 h-5 text-black fill-black" />
        </div>

        <h1 className="text-3xl font-semibold">
          <span className="text-white">Sky</span>
          <span className="text-[#B7DF02]">Mart</span>
        </h1>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md border border-zinc-800 rounded-3xl bg-[#090909] p-6 sm:p-8 lg:p-10 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Create account
        </h1>

        <p className="text-gray-500 mb-8">Join SkyMart and start shopping</p>

        <form
          onSubmit={handleSubmit(formSubmit, onError)}
          className="flex flex-col gap-5"
        >
          <input
            {...register("name", {
              required: true,
            })}
            type="name"
            placeholder="Full Name"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#B7DF02]"
          />
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            placeholder="Email Adreess"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#B7DF02]"
          />

          <input
            {...register("password", {
              required: true,
            })}
            type="password"
            placeholder="Password (Min 6 chars)"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#B7DF02]"
          />

          <button
            type="submit"
            className="w-full bg-[#B7DF02] text-black font-bold text-lg py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300"
          >
            Create Account →
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#B7DF02] font-semibold cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPages;
