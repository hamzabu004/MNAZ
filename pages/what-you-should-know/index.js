import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
function WhatYouShouldKnow() {
  return (
    <Fragment>
      <Head>
        <title>What you should know about Trust Deeds Investments | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== WhatYouShouldKnow background ========== */}
        <div className="whatShouldKnowBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              WHAT YOU SHOULD KNOW
            </div>
          </div>
        </div>

        <div className="py-[2rem] md:py-[4rem] w-full md:w-[80%] flex flex-col items-center mx-auto px-[10px]">
          <p className="text-[18px] font-[500]">
            The California Bureau of Real Estate published an overview of what
            you should know about Trust Deed Investments. We recommend you read
            it. In addition, you should conduct your own research on trust deed
            investing prior to investing, including discussing the matter with
            your own advisors, a real estate attorney, your accountant, other
            qualified professionals and other investors.
          </p>
          <Link
            href="https://www.dre.ca.gov/files/pdf/re35.pdf"
            className="text-[16px] font-[500] text-secondaryColor"
            target="_blank"
          >
            Trust Deed Investments – What You Should Know!
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-around items-center gap-[2rem] py-[3rem] bg-blueColor px-[10px]">
          <h1 className="text-[20px] font-[500] text-primaryColor">
            We are here to help you
          </h1>
          <Link href="/contact">
            <button className="btn uppercase">contact us</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default WhatYouShouldKnow;
