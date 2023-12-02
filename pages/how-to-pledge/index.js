import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";

function HowToPledge() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return (
    <Fragment>
      <Head>
        <title>How to Invest in a trust deed in California | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== HowToPledge background ========== */}
        <div className="howIoPledgeBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              HOW TO PLEDGE
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] py-[2rem] px-[10px]">
          <div className="flex flex-col gap-[1rem] items-center hover:bg-grayColor px-[1rem] py-[2rem] border-[2px] border-grayColor shadow-lg">
            <FaArrowRight className="w-[40px] h-[40px] text-secondaryColor" />
            <h1 className="text-[20px] font-[600] leading-[25px]">
              Search the best selection of California Trust Deeds.
            </h1>
            <p className="text-[16px] font-[400] leading-[20px]">
              Easily preview and search through the best selection of California
              Trust Deeds opportunities, all available on one site, MNAZ. It’s
              the easiest way to build and manage your California Trust Deed
              portfolio.
            </p>
          </div>
          <div className="flex flex-col gap-[1rem] items-center hover:bg-grayColor px-[1rem] py-[2rem] border-[2px] border-grayColor shadow-lg">
            <FaArrowRight className="w-[40px] h-[40px] text-secondaryColor" />
            <h1 className="text-[20px] font-[600] leading-[25px]">
              Find the Trust Deeds that match your criteria.
            </h1>
            <p className="text-[16px] font-[400] leading-[20px]">
              Filter the available Trust Deeds based on your own investment
              criteria, so you only review the deals that are suitable for you.
              Compare the best deals to select the ones you want to invest in.
            </p>
          </div>
          <div className="flex flex-col gap-[1rem] items-center hover:bg-grayColor px-[1rem] py-[2rem] border-[2px] border-grayColor shadow-lg">
            <FaArrowRight className="w-[40px] h-[40px] text-secondaryColor" />
            <h1 className="text-[20px] font-[600] leading-[25px]">
              Invest. Online, in Real-Time.
            </h1>
            <p className="text-[16px] font-[400] leading-[20px]">
              Once you’ve found the deals that are right for you, just pledge
              how much you want to invest, from a fractional interest to the
              whole amount. Results are updated online, in real-time, so you
              always know how much is available and who else has co-invested.
            </p>
          </div>
          <div className="flex flex-col gap-[1rem] items-center hover:bg-grayColor px-[1rem] py-[2rem] border-[2px] border-grayColor shadow-lg">
            <FaArrowRight className="w-[40px] h-[40px] text-secondaryColor" />
            <h1 className="text-[20px] font-[600] leading-[25px]">
              Review and Finalize Pledge
            </h1>
            <p className="text-[16px] font-[400] leading-[20px]">
              Once you make a pledge, you will be sent a DropBox link with the
              Due Diligence File. Within the first 4-6 hours of your pledge,
              please review the Property, Borrower and other Deal Information.
              If you decide you want to proceed, you don’t need to do anything.
              If you decide you want to De-Pledge, please click the “My
              Investment” on the Deal Page and then click “Cancel Pledge.”.
            </p>
          </div>
        </div>

        <div className="px-[10px] flex flex-col justify-center items-center py-[2rem]">
          <div className="flex flex-col items-center gap-[10px]">
            <h1 className="text-[20px] font-[500]">
              Here's what our clients, sponsors and founders say
            </h1>
            <Link href="/contact">
              <button className="btn uppercase">contact us</button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] py-[2rem]">
            <div className="flex flex-col gap-[1rem] items-center bg-blueColor text-primaryColor text-opacity-80 px-[1rem] py-[2rem] shadow-lg">
              <p className="text-[16px] font-[500] leading-[22px]">
                “We had tried another private money lender for this Beverly
                Hills 1st TD for 30 days and kept getting strung along. The
                Lender kept saying that they had the money, when they did not.
                My borrower was getting anxious and needed the money. I had to
                act quick and go to a Lender that I knew would perform. We had
                worked with Mortgage Vintage before but did not know that they
                could fund such a large loan as $5.6 Mil. Within a few days of
                our original call, Mortgage Vintage visited the property, met
                the borrower, secured a lender and funded the loan. Wow!”
              </p>
              <span className="text-[16px] font-[400]">
                S. ZodoMortgage Broker
              </span>
            </div>
            <div className="flex flex-col gap-[1rem] items-center bg-blueColor text-primaryColor text-opacity-80 px-[1rem] py-[2rem] shadow-lg">
              <p className="text-[16px] font-[500] leading-[22px]">
                “We needed a fast foreign national loan and we called Sandy at
                Mortgage Vintage. Sandy and his team quickly provided a quote
                and the underwriting items needed to close. Sandy worked with us
                while the buyer finalized the loan amount and down payment.
                Mortgage Vintage told us what they would do and then they did
                it. No games, no bait and switch, no changes at the last minute.
                I would highly recommend Mortgage Vintage for brokers looking
                for a hard money loan.”
              </p>
              <span className="text-[16px] font-[400]">
                David LeMortgage Broker
              </span>
            </div>
            <div className="flex flex-col gap-[1rem] items-center bg-blueColor text-primaryColor text-opacity-80 px-[1rem] py-[2rem] shadow-lg">
              <p className="text-[16px] font-[500] leading-[22px]">
                “We have worked with Mortgage Vintage, Inc. on a multiple of
                hard money loans over the past few years and I am always
                impressed with the fast, professional service we receive from
                Mortgage Vintage. Whether the loan is a Business Purpose 2nd , a
                Fix and Flip or a Fix and Rent Loan, Sandy always provides fast
                up front commitments and funds on a timely basis.”
              </p>
              <span className="text-[16px] font-[400]">
                S. KohnNational Equity Funding
              </span>
            </div>
            <div className="flex flex-col gap-[1rem] items-center bg-blueColor text-primaryColor text-opacity-80 px-[1rem] py-[2rem] shadow-lg">
              <p className="text-[16px] font-[500] leading-[22px]">
                “From the initial offering presentation to the final funding,
                this TD investment was handled very smooth by Mortgage Vintage.
                I appreciate the opportunity to be associated with a true
                professional like Sandy MacDougall. Trust Deed investments are a
                key portion of my financial portfolio. ”
              </p>
              <span className="text-[16px] font-[400]">
                Dan P.Mortgage Broker
              </span>
            </div>
          </div>
        </div>

        <div className="bg-blueColor py-[3rem] flex justify-center">
          {token != null ? null : (
            <Link href="sign-up">
              <button className="btn uppercase">Get Started</button>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default HowToPledge;
