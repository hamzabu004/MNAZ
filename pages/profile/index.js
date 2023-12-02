import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Swal from "sweetalert2";

function Profile() {
  const [userDetails, setUserDetails] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");
  const [showExistingPassword, setShowExistingPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showNewConfirmPassword, setShowNewConfirmPassword] = useState(true);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/get/detail",
        {
          accountId:
            typeof window !== "undefined" ? localStorage.getItem("id") : null,
        },
        {
          headers: {
            token:
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null,
          },
        }
      );

      if (response.data) {
        setUserDetails(response.data);
      } else {
        console.log("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleChangeForFirstName = (event) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      firstName: event.target.value,
    }));
  };

  const handleChangeForLastName = (event) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      lastName: event.target.value,
    }));
  };

  const handleChangeForEmail = (event) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      email: event.target.value,
    }));
  };

  const handleChangeForPhoneNumber = (event) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      phoneNumber: event.target.value,
    }));
  };

  const handleChangeForRole = (event) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      role: event.target.value,
    }));
  };

  const handleChangeForExistingPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeForNewPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeForNewConfirmedPassword = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const toggleExistingPassword = () => {
    setShowExistingPassword(!showExistingPassword);
  };

  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleNewConfirmPassword = () => {
    setShowNewConfirmPassword(!showNewConfirmPassword);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/user/edit/detail",
        {
          accountId:
            typeof window !== "undefined" ? localStorage.getItem("id") : null,
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          email: userDetails.email,
          phoneNumber: userDetails.phoneNumber,
          password: password,
          role: userDetails.role,
        },
        {
          headers: {
            token:
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null,
          },
        }
      );

      if (response.data && response.data.user) {
        setUserDetails(response.data.user);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User details updated successfully!",
        });
      } else {
        console.log("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error updating user details:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "An unexpected error occurred.",
      });
    }
  };

  return (
    <Fragment>
      <Head>
        <title>My account | MNAZ</title>
      </Head>
      <div className="container py-[3rem] px-[10px]">
        <div className="w-full md:w-[80%] flex flex-col mx-auto">
          <h1 className="text-[22px] font-[600] mb-[1rem]">My Profile</h1>
          <form
            action=""
            className="w-full grid grid-cols-1 gap-[1.5rem]"
            onSubmit={handleSave}
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
              <div className="flex flex-col gap-[5px]">
                <label className="text-[18px] font-[500] opacity-70">
                  First Name
                </label>
                <input
                  type="text"
                  value={userDetails.firstName}
                  className="p-[13px] border-[2px] outline-none border-grayColor focus:bg-gray-100"
                  onChange={handleChangeForFirstName}
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="text-[18px] font-[500] opacity-70">
                  Last Name
                </label>
                <input
                  type="text"
                  value={userDetails.lastName}
                  className="p-[13px] border-[2px] outline-none border-grayColor focus:bg-gray-100"
                  onChange={handleChangeForLastName}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[5px]">
              <label className="text-[18px] font-[500] opacity-70">Email</label>
              <input
                type="email"
                value={userDetails.email}
                className="p-[13px] border-[2px] outline-none border-grayColor focus:bg-gray-100"
                onChange={handleChangeForEmail}
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label className="text-[18px] font-[500] opacity-70">
                Phone Number
              </label>
              <input
                type="tel"
                value={userDetails.phoneNumber}
                className="p-[13px] border-[2px] outline-none border-grayColor focus:bg-gray-100"
                onChange={handleChangeForPhoneNumber}
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label className="text-[18px] font-[500] opacity-70">Role</label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="role-user">Role</InputLabel>
                  <Select
                    labelId="role-user"
                    id="user-role"
                    value={userDetails.role}
                    label="role"
                    onChange={handleChangeForRole}
                  >
                    <MenuItem value={"Visitor"}>Visitor</MenuItem>
                    <MenuItem value={"Lender"}>Lender</MenuItem>
                    <MenuItem value={"Broker"}>Broker</MenuItem>
                    <MenuItem value={"Investor"}>Investor</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <h1 className="my-[1rem] text-[20px] font-[500]">
              Set New Password
            </h1>
            <div className="w-full relative flex items-center">
              <input
                type={showExistingPassword ? "password" : "text"}
                placeholder="Please enter your existing password"
                className="w-full p-[13px] border-[2px] outline-none border-grayColor focus:bg-gray-100"
                onChange={handleChangeForExistingPassword}
              />
              <span
                className="cursor-pointer absolute right-0 px-[15px] border-l-[2px] border-l-grayColor"
                onClick={toggleExistingPassword}
              >
                {showExistingPassword ? "Show" : "Hide"}
              </span>
            </div>
            <div className="w-full relative flex items-center">
              <input
                type={showNewPassword ? "password" : "text"}
                placeholder="Please enter your new password"
                className="w-full p-[13px] border-[2px] outline-none border-grayColor focus:bg-gray-100"
                onChange={handleChangeForNewPassword}
              />
              <span
                className="cursor-pointer absolute right-0 px-[15px] border-l-[2px] border-l-grayColor"
                onClick={toggleNewPassword}
              >
                {showNewPassword ? "Show" : "Hide"}
              </span>
            </div>
            <div className="w-full relative flex items-center">
              <input
                type={showNewConfirmPassword ? "password" : "text"}
                placeholder="Confirm new Password"
                className="w-full p-[13px] border-[2px] outline-none border-grayColor focus:bg-gray-100"
                onChange={handleChangeForNewConfirmedPassword}
              />
              <span
                className="cursor-pointer absolute right-0 px-[15px] border-l-[2px] border-l-grayColor"
                onClick={toggleNewConfirmPassword}
              >
                {showNewConfirmPassword ? "Show" : "Hide"}
              </span>
            </div>
            <button className="btn uppercase">Save</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
