import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
function WhyMNAZ() {
  return (
    <Fragment>
      <Head>
        <title>MNAZ Online Investment Platform | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== sell background ========== */}
        <div className="whyMNAZBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              WHY MNAZ
            </div>
          </div>
        </div>

        {/*==========  ==========  */}
        <div className="flex justify-center items-center py-[2rem] md:py-[3rem] gap-[1rem] px-[10px]">
          <p className="w-full md:w-[70%] text-[18px] font-[400]">
            MNAZ.com is the leading marketplace for Trust Deed Investments and
            Investors. The marketplace offers the best selection of California
            Trust Deeds available. It provides investors the convenience of
            building and managing their trust deed portfolio, online, in
            real-time. Whether buying or selling, MNAZ is designed to simplify
            Trust Deed Investing for all investors. For borrowers, MNAZ offers a
            surety of funding not provided in traditional Trust Deed sale
            environments. Borrowers who use CTD can quickly see how far along
            their loan is to being fully funded.
          </p>
        </div>

        {/* ============== info =========== */}
        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              TRUST DEED INVESTMENTS MADE SIMPLE
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              There is incredible innovation occurring at the intersection of
              the financial services and technology. It's referred to as
              FinTech, where Silicon Valley meets Wall Street. It's powered by
              mobile technology, smartphones and cloud computing. It's fueled by
              the success of Facebook, Uber, Airbnb, LinkedIn, Twitter and many
              more. That innovation has led to entirely new disruptive business
              models, the latest of which include crowdfunding and peer-to-peer
              lending, leading to success for companies such as Kickstarter,
              LendingClub and Prosper. We're excited to offer this same
              innovation to our investor community through our MNAZ.com
              platform.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/why1.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-1 w-full">
            <Image
              src="/images/why2.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              WHAT TRUST DEED INVESTORS REALLY WANT
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Trust Deed Investors realize the significant benefits of a
              diversified high yielding portfolio of Trust Deed investments
              providing monthly income. But, they are challenged by today's
              offline process resulting in often stale offering status,
              inconsistent due-diligence, no centralized deal source, limited
              ability to select co-investors, no visibility into payoff timing,
              re-investment challenges, lack of liquidity, and multiple
              unconsolidated statements. Our goal is to solve those challenges
              by moving the process online - all accessible through MNAZ.
              Vetting of the investment and of the the other lenders
              participating can happen online in real-time and a registered user
              can build their own custom crowd.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              OVER 10.25% AVERAGE YIELD! 100% RETURN OF PRINCIPAL!
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Our investors have received 100% return of their principal and
              greater than 10% interest since inception. Past performance is not
              an indicator of future performance.
            </p>
            <ul className="flex flex-col gap-[5px]">
              <h2 className="text-[20px] font-[600]">
                Performance that Matters Since 2007:
              </h2>
              <li className="text-[16px] font-[400]">
                Over $191 Million in Funded Loans
              </li>
              <li className="text-[16px] font-[400]">Over 900 Loans Funded</li>
              <li className="text-[16px] font-[400]">
                Over $28 Million in Interest Payments to Lenders
              </li>
              <li className="text-[16px] font-[400]">$0 Loan Losses</li>
            </ul>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/why3.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-1 w-full">
            <Image
              src="/images/why4.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              TRANSPARENCY
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              We provide transparency into the total actual returns our
              investors achieve investing on the MNAZ platform.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              EXPERIENCED TEAM AND SPONSORS
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Our founder, Sandy MacDougall, has over 30 years of experience in
              real estate with experience encompassing real estate lending,
              brokerage, investing and technology. Our managing directors have a
              minimum of 10 years real estate lending experience each and have
              orchestrated hundreds of millions of dollars of real estate
              transactions in their careers. All founders are active investors
              in Trust Deeds, holding a significant percentage of their personal
              investment portfolios in Trust Deeds. The broker sponsors, who
              originate loans listed on MNAZ, all have a minimum of 10 years of
              experience and 5 years of operating history with their current
              companies, with the necessary regulatory licenses to originate
              California Trust Deeds.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/why5.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="bg-blueColor py-[3rem] flex flex-col sm:flex-row gap-[1rem] justify-around items-center">
          <h1 className="text-[16px] font-[400] text-primaryColor">
            We're here to help you Earn Money!
          </h1>
          <Link href="/contact">
            <button className="btn uppercase">contact us</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default WhyMNAZ;
