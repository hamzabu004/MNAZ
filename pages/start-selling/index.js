import { Fragment, useState } from "react";
import Head from "next/head";
import swal from "sweetalert";
import { useRouter } from "next/router";

function StartSelling() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChangeForFirstName = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };

  const handleChangeForEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleChangeForSubject = (event) => {
    setSubject(event.target.value);
    console.log(subject);
  };

  const handleChangeForMessage = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  const handleContactInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/contact/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token:
            typeof window !== "undefined"
              ? localStorage.getItem("token")
              : null,
        },
        body: JSON.stringify({
          firstName,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        swal({
          title: "Success!",
          text: " Information saved successfully",
          icon: "success",
        }).then(() => {
          router.back();
        });
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Authentication Error";
        swal({
          title: "Error!",
          text: errorMessage,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      swal({
        title: "Error!",
        text: "Internal Server Error",
        icon: "error",
      });
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Start Selling on CTD | MNAZ</title>
      </Head>
      <div className="container flex flex-col items-center justify-center py-[2rem]">
        <div className="flex flex-col gap-[1rem] w-full lg:w-[70%] px-[10px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[24px] font-[600]">START SELLING</h1>
            <p className="text-[18px] font-[500]">Send Us a Request</p>
          </div>
          <form action="" className="flex flex-col gap-[1rem]">
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[18px] font-[500]">
                First Name (required)
              </label>
              <input
                type="text"
                required
                className="bg-grayColor border-none p-[15px] rounded-[5px] outline-[1px] outline-secondaryColor"
                onChange={handleChangeForFirstName}
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[18px] font-[500]">
                Your Email (required)
              </label>
              <input
                type="email"
                required
                className="bg-grayColor border-none p-[15px] rounded-[5px] outline-[1px] outline-secondaryColor"
                onChange={handleChangeForEmail}
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[18px] font-[500]">
                Subject
              </label>
              <input
                type="text"
                className="bg-grayColor border-none p-[15px] rounded-[5px] outline-[1px] outline-secondaryColor"
                onChange={handleChangeForSubject}
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[18px] font-[500]">
                Your Message
              </label>
              <textarea
                rows={10}
                className="bg-grayColor border-none p-[15px] rounded-[5px] outline-[1px] outline-secondaryColor resize-none"
                onChange={handleChangeForMessage}
              />
            </div>
            <button className="btn" onClick={handleContactInfo}>
              SEND
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default StartSelling;
