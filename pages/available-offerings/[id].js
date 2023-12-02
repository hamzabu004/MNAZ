import Image from "next/image";
import { useState } from "react";
import { FiTarget } from "react-icons/fi";
import { BiTime, BiSolidMessageRounded } from "react-icons/bi";
import { FaSignal, FaMoneyBillAlt } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { Fragment } from "react";
import Head from "next/head";
import swal from "sweetalert";

function OfferingDetail({ offering }) {
  const [follow, setFollow] = useState(false);
  const [questions, setQuestions] = useState("");
  const role =
    typeof window !== "undefined" ? localStorage.getItem("role") : null;

  const handleFollow = async (e) => {
    e.preventDefault();
    try {
      const id =
        typeof window !== "undefined" ? localStorage.getItem("id") : null;
      const response = await fetch(
        "http://localhost:3001/userOffering/following",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token:
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null,
          },
          body: JSON.stringify({
            userId: id,
            offeringId: offering._id,
            following: follow,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        swal({
          title: "Success!",
          text: "Suucessfuly update information",
          icon: "success",
        }).then(() => {
          setFollow(!follow);
        });
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Failed to save Investor Question Information";
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

  const handleChangeForQuestion = (event) => {
    setQuestions(event.target.value);
  };

  const handleQuestionInfo = async (e) => {
    e.preventDefault();
    try {
      const id =
        typeof window !== "undefined" ? localStorage.getItem("id") : null;
      const response = await fetch(
        "http://localhost:3001/userOffering/question/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token:
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null,
          },
          body: JSON.stringify({
            userId: id,
            offeringId: offering._id,
            questions: questions,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        swal({
          title: "Success!",
          text: "Suucessfuly saved Investor Questions",
          icon: "success",
        }).then(() => {
          setQuestions("");
        });
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Failed to save Investor Question Information";
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
        <title>{offering.info}</title>
      </Head>
      <div className="container py-[2rem] px-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2rem]">
          <div className="md:col-span-3 flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[5px]">
              <h1 className="text-[28px] font-[500] leading-[30px] text-[#4792b0] ">
                {offering.info}
              </h1>
              <p className="text-[16px] font-[500] leading-[18px] opacity-70">
                {offering.address}
              </p>
            </div>
            <div className="">
              <Image
                src={offering.image}
                width={500}
                height={400}
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className="border-2 border-gray-300">
              <div className="bg-grayColor border-b-2 border-gray-300 py-[5px] text-[18px] font-[500] px-[10px]">
                Overview
              </div>
              <div className="py-[1rem] px-[10px]">
                <h1 className="text-[18px] font-[700] opacity-80">
                  {offering.estimatedFundingDate} Update:
                </h1>
                <ul className="flex flex-col gap-[5px]">
                  {offering.overviewList.map((list) => (
                    <li className="text-[16px] font-[600] opacity-80">
                      - {list}
                    </li>
                  ))}
                </ul>
                <p className="text-[16px] font-[400] text-justify mt-[10px] opacity-70">
                  {offering.overviewDesc}
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-300">
              <div className="bg-grayColor border-b-2 border-gray-300 py-[5px] text-[18px] font-[500] px-[10px]">
                Management
              </div>
              <div className="py-[1rem] px-[10px]">
                <p className="text-[16px] font-[400] text-justify mt-[10px] opacity-70">
                  {offering.managementDesc}
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-300">
              <div className="bg-grayColor border-b-2 border-gray-300 py-[5px] text-[18px] font-[500] px-[10px]">
                Financial
              </div>
              <div className="py-[1rem] px-[10px]">
                <p className="text-[16px] font-[400] text-justify mt-[10px] opacity-70">
                  {offering.financialDesc}
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-300">
              <div className="bg-grayColor border-b-2 border-gray-300 py-[5px] text-[18px] font-[500] px-[10px]">
                Property Highlights
              </div>
              <div className="py-[1rem] px-[10px]">
                <p className="text-[16px] font-[400] text-justify mt-[10px] opacity-70">
                  {offering.PropertyHighlightsDesc}
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-300">
              <div className="bg-grayColor border-b-2 border-gray-300 py-[5px] text-[18px] font-[500] px-[10px]">
                Photos
              </div>
              <div className="py-[1rem] px-[10px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] place-items-center">
                {offering.photos.map((photo) => (
                  <Image
                    src={photo}
                    width={300}
                    height={250}
                    alt=""
                    className="w-[250px] h-[150px] hover:shadow-2xl"
                  />
                ))}
              </div>
            </div>
            {role == "Investor" && (
              <div className="flex flex-col gap-[1rem] px-[10px]">
                <h1 className="text-[20px] font-[600] opacity-70 flex items-center gap-[5px]">
                  <BiSolidMessageRounded className="text-secondaryColor" />
                  Investor Questions
                </h1>
                <form action="">
                  <textarea
                    name=""
                    id=""
                    rows="10"
                    placeholder="Write your question here..."
                    className="border-2 border-grayColor outline-none resize-none w-full p-[1rem] focus:bg-gray-100"
                    onChange={handleChangeForQuestion}
                  ></textarea>
                  <button className="btn" onClick={handleQuestionInfo}>
                    Send
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="md:col-span-1 w-full flex flex-col items-center gap-[1rem]">
            <div className="flex flex-col gap-[10px] w-full md:w-[90%] py-[2rem] bg-primaryColor z-10 sticky top-[3rem]">
              <h2 className="text-[18px] font-[500] opacity-70 text-right">
                Pledged {offering.pledged}%
              </h2>
              <div className="w-full h-[1rem] py-[3px] bg-grayColor flex px-[5px]">
                <div
                  className="h-full bg-secondaryColor"
                  style={{ width: `${offering.pledged}%` }}
                ></div>
              </div>
              {role !== "Visitor" && (
                <>
                  {offering.pledged === 100 ? null : (
                    <button className="btn w-full rounded-[0px] hover:shadow-xl">
                      Pledge Today
                    </button>
                  )}
                  <button
                    className="border-[2px] border-grayColor p-[5px] w-full hover:bg-grayColor"
                    onClick={handleFollow}
                  >
                    {follow
                      ? "un-follow this offering"
                      : "Follow this offering"}
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-col gap-[5px] w-full md:w-[90%]">
              <div className="text-[16px] font-[400] opacity-70 flex justify-between bg-grayColor p-[5px] border-b-2 border-gray-500">
                <span className="flex items-center gap-[5px]">
                  <FiTarget />
                  Loan amount ($)
                </span>
                <span>${offering.fundingGoal}</span>
              </div>
              <div className="text-[16px] font-[400] opacity-70 flex justify-between p-[5px] border-b-2 border-gray-500">
                <span className="flex items-center gap-[5px] leading-[18px]">
                  <BiTime />
                  Estimated Closing Date
                </span>
                <span className="leading-[18px]">
                  {offering.estimatedFundingDate}
                </span>
              </div>
              <div className="text-[16px] font-[400] opacity-70 flex justify-between bg-grayColor p-[5px] border-b-2 border-gray-500">
                <span className="flex items-center gap-[5px]">
                  <FaSignal />
                  Investor Yield
                </span>
                <span>{offering.investorYield}%</span>
              </div>
              <div className="text-[16px] font-[400] opacity-70 flex justify-between p-[5px] border-b-2 border-gray-500">
                <span className="flex items-center gap-[5px] leading-[18px]">
                  <FaMoneyBillAlt />
                  Min. Investment
                </span>
                <span className="leading-[18px]">
                  ${offering.minInvestment}
                </span>
              </div>
              <div className="text-[16px] font-[400] opacity-70 flex justify-between bg-grayColor p-[5px] border-b-2 border-gray-500">
                <span className="flex items-center gap-[5px]">
                  IRA Eligible
                </span>
                <span>{offering.eligible}</span>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] w-full md:w-[90%]">
              <h1 className="text-[22px] font-[600] text-secondaryColor border-b-2 border-secondaryColor pb-[5px]">
                Investors
              </h1>
              {offering.investors.map((investor, index) => (
                <div className="flex justify-between" key={index}>
                  <span className="text-[18px] font-[600] opacity-70">
                    {investor.investorName}
                  </span>
                  <span className="text-[18px] font-[600] opacity-70">
                    {investor.amount}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[5px] w-full md:w-[90%]">
              <h2 className="flex gap-[5px] text-[20px] font-[500] items-center opacity-70 mb-[1.5rem]">
                <GrNotification />
                Contact Sponsors
              </h2>
              <div className="flex gap-[10px]">
                <Image
                  src="/images/user.jpg"
                  width={40}
                  height={40}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="">
                  <h1 className="text-[18px] font-[500] leading-[25px]">
                    Sandy MacDougall CTD
                  </h1>
                  <span className="text-[16px] font-[400] leading-[18px] flex items-start gap-[5px]">
                    <AiOutlineMail className="w-[20px] h-[20px] text-secondaryColor" />
                    Send Message Email Sandy
                  </span>
                  <span className="text-[16px] font-[400] leading-[18px] flex items-start gap-[5px]">
                    <BsTelephoneFill className="w-[20px] h-[20px] text-secondaryColor" />
                    (949) 632-6145
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default OfferingDetail;

export async function getServerSideProps({ params }) {
  const offeringId = params.id;

  try {
    const res = await fetch(`http://localhost:3001/offering/${offeringId}`);
    const offering = await res.json();

    return {
      props: {
        offering,
      },
    };
  } catch (error) {
    console.error("Error getting offering by ID:", error);
    return {
      notFound: true,
    };
  }
}
