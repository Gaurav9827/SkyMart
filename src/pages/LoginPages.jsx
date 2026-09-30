import React, { useContext, useState } from "react";
import { Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/AuthContext";
import { toast } from "react-toastify";

const LoginPages = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  let { loggedInUser } = useContext(MyStore);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    const response = loggedInUser(data.email, data.password);
    if (!response.success) {
      setLoginError(response.message);
      
      return;
    }
    setLoginError("");
    toast.success(response.message);
    
    navigate("/");
  
  };

  return (
    <div className="bg-black min-h-screen flex flex-col lg:flex-row lg:divide-x lg:divide-zinc-800">
      {/* Left Section - Desktop Only */}
      <div className="hidden lg:flex w-1/2 px-10 py-8">
        <div className="flex flex-col justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#c9df02] flex items-center justify-center">
              <Zap className="w-5 h-5 text-black fill-black" />
            </div>

            <h1 className="text-2xl font-semibold">
              <span className="text-white">Sky</span>
              <span className="text-[#B7DF02]">Mart</span>
            </h1>
          </div>

          {/* Hero Text */}
          <div className="flex flex-col gap-6">
            <p className="text-[#B7DF02] font-semibold tracking-wider">
              WELCOME BACK
            </p>

            <h1 className="flex flex-col text-6xl font-bold leading-tight">
              <span className="text-white">Shop the future.</span>
              <span className="text-[#B7DF02]">Today.</span>
            </h1>

            <p className="text-gray-500 text-lg">
              Thousands of products, lightning-fast delivery,
              <br />
              and prices that make your wallet happy.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-4 flex-wrap">
            <div className="w-[170px] h-[100px] border border-zinc-700 rounded-3xl flex flex-col items-center justify-center">
              <p className="text-[#B7DF02] font-bold text-2xl">20K+</p>
              <p className="text-gray-500">Products</p>
            </div>

            <div className="w-[170px] h-[100px] border border-zinc-700 rounded-3xl flex flex-col items-center justify-center">
              <p className="text-[#B7DF02] font-bold text-2xl">50K+</p>
              <p className="text-gray-500">Users</p>
            </div>

            <div className="w-[170px] h-[100px] border border-zinc-700 rounded-3xl flex flex-col items-center justify-center">
              <p className="text-[#B7DF02] font-bold text-2xl">4.9★</p>
              <p className="text-gray-500">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center gap-3 mb-10">
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
            Sign in
          </h1>

          <p className="text-gray-500 mb-8">
            Enter your credentials to continue
          </p>

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="flex flex-col gap-5"
          >
            {loginError &&(
              <div className="mt-10 mb-7 rounded-2xl border border-red-500/50 bg-red-500/10 px-5 py-4 text-red-400">{loginError}</div>
            )}
            <input
              {...register("email")}
              type="email"
              placeholder="Email address"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#B7DF02]"
            />

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#B7DF02]"
            />

            <button
              type="submit"
              className="w-full bg-[#B7DF02] text-black font-bold text-lg py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
              Sign in →
            </button>
          </form>

          <p className="text-center text-gray-500 mt-8">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#B7DF02] font-semibold cursor-pointer"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
