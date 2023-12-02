import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";
import swal from "sweetalert";
import { useRouter } from "next/router";
import axios from "axios";

function SignIn() {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeForEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeForPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        typeof window !== "undefined"
          ? localStorage.setItem("token", data.token)
          : null;
        typeof window !== "undefined"
          ? localStorage.setItem("isTokenAvailable", true)
          : null;
        typeof window !== "undefined"
          ? localStorage.setItem("id", data.user._id)
          : null;
        typeof window !== "undefined"
          ? localStorage.setItem("role", data.user.role)
          : null;
        console.log(axios.defaults.headers);
        console.log(data.user);

        swal({
          title: "Success!",
          text: "User login successfully",
          icon: "success",
        }).then(() => {
          router.push("/");
        });
      } else {
        swal({
          title: "Error!",
          text: "Error while authenticating user",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Sign In | MNAZ</title>
      </Head>
      <div className="container py-[3rem] px-[10px]">
        <div className="w-full md:w-[80%] flex flex-col mx-auto">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[16px] font-[400]">Connect using</p>
            <div className="bg-secondaryColor flex gap-[1rem] items-center p-[12px] cursor-pointer">
              <FaFacebookF className="w-[25px] h-[25px] text-primaryColor" />
              <p className="text-[18px] font-[500] text-primaryColor">
                Facebook
              </p>
            </div>
            <div className="bg-secondaryColor flex gap-[1rem] items-center p-[12px] cursor-pointer">
              <BsGoogle className="w-[25px] h-[25px] text-primaryColor" />
              <p className="text-[18px] font-[500] text-primaryColor">Google</p>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] my-[2rem]">
            <p className="text-[16px] font-[400]">
              <b>Login</b>
            </p>
            <hr className="w-full h-[2px] bg-grayColor" />
          </div>
          <form action="" className="w-full grid grid-cols-1 gap-[1.5rem]">
            <input
              type="email"
              required
              placeholder="Please enter your email here"
              className="p-[13px] placeholder:text-secondaryColor border-[2px] outline-none border-grayColor focus:bg-gray-100"
              onChange={handleChangeForEmail}
            />

            <div className="w-full relative flex items-center">
              <input
                type={showPassword ? "password" : "text"}
                required
                placeholder="Password"
                className="w-full p-[13px] placeholder:text-secondaryColor border-[2px] outline-none border-grayColor focus:bg-gray-100"
                onChange={handleChangeForPassword}
              />
              <span
                className="cursor-pointer absolute right-0 px-[15px] border-l-[2px] border-l-grayColor"
                onClick={togglePassword}
              >
                {showPassword ? "Show" : "Hide"}
              </span>
            </div>

            <button className="btn uppercase" onClick={handleSignin}>
              login
            </button>
          </form>
          <div className="flex sm:justify-between items-center flex-col sm:flex-row">
            <Link
              href="/sign-up"
              className="text-[16px] font-[500] text-secondaryColor mt-[2rem]"
            >
              Don't have an account? Click here to Sign Up!
            </Link>
            <Link
              href="/signin"
              className="text-[16px] font-[500] text-secondaryColor mt-[2rem]"
            >
              Forgot Your Password?
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignIn;
