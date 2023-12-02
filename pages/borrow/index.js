import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";

function Borrow() {
  return (
    <Fragment>
      <Head>
        <title>Apply for a Hard Money Loan in California | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== borrow background ========== */}
        <div className="borrowBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              BORROW
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-[2rem] w-full md:w-[60%] mx-auto gap-[8px] px-[10px]">
          <p className="text-[16px] font-[500] opacity-80 leading-[25px]">
            Should you need a 12-24 month bridge loan,{" "}
            <Link
              href="https://mortgagevintage.com/"
              target="_blank"
              className="text-blue-800"
            >
              click here
            </Link>
            to Request-a-Quote from MNAZ and you will be directed to a broker or
            lender that specializes in your hard money loan scenario.
          </p>
          <p className="text-[16px] font-[500] opacity-80 leading-[25px]">
            Programs MNAZ is a fast and professional direct broker/lender
            exchange platform for real estate investors and business purpose
            borrowers looking to capitalize on market opportunities.
          </p>
          <Link
            href="https://mortgagevintage.com/brokers/hard-money-loan-programs/"
            target="_blank"
            className="text-[16px] font-[500] opacity-80 leading-[25px] text-blue-800"
          >
            Click to View Current Hard Money Loan
          </Link>
        </div>

        <div className="flex flex-wrap gap-[1rem] justify-around items-center bg-grayColor py-[4rem] md:py-[6rem] px-[10px]">
          <h1 className="text-[20px] font-[500] text-center">
            We're here to help you Earn Money!
          </h1>
          <Link href="/how-it-works" target="_blank">
            <button className="btn">Ask how we do it</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Borrow;
