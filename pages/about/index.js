import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";
function About() {
  return (
    <Fragment>
      <Head>
        <title>About Us | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== about background ========== */}
        <div className="aboutBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              ABOUT US
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] py-[2rem] justify-center items-center px-[10px]">
          <p className="text-[18px] font-[400] w-full md:w-[70%]">
            MNAZ provides an online exchange for California Brokers/Lenders and
            Trust Deed investors.{" "}
            <span className="font-[600]">
              Investors can research, pledge, buy and sell sponsored California
              Trust Deeds
            </span>
            , including fractional interests, while enjoying a simplified and
            efficient, real-time investing experience. This dynamic FinTech
            transactional social website enables registered investors to build a
            portfolio of California high yield current monthly income Trust
            Deeds and facilitates self-syndication and investing with “Your
            Trusted Network.”
          </p>
          <p className="text-[18px] font-[400] w-full md:w-[70%]">
            Your Trusted Network allows you to share your Trust Deed purchase
            with your investment associates and friends family. We foster a
            trusted, intimate community-oriented environment for investing.
            Registrants can essentially form a venture alliance to take
            advantage of the direct investment model of MNAZ and co-invest with
            their friends and colleagues.
          </p>
        </div>

        {/* ============== info =========== */}
        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              NETWORK FUNDING TRUST DEEDS
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              We're excited to bring peer-to-peer lending to trust deed
              investing. MNAZ solves the challenges that all trust deed
              investors face today - building and managing a dynamic trust deed
              portfolio. If you're a real estate developer looking for a new
              source of fast and reliable capital, or a qualified investor who
              wants to diversify your portfolio within a new cash flow based
              asset class, join your Trusted Network today at MNAZ.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/about1.jpg"
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
              src="/images/about2.jpg"
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
              Trust deed investors understand the significant benefits of a
              diversified high yielding portfolio of trust deed investments that
              provide monthly income. But, they're challenged by today's offline
              process resulting in stale offerings, inconsistent due-diligence,
              no centralized deal source, limited ability to select
              co-investors, no visibility into payoff timing, re-investment
              challenges, lack of liquidity, and multiple unconsolidated
              statements. Our mission is to solve these challenges by moving the
              process online, by providing information in real-time, and
              aggregating information in one place - MNAZ.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              OVER 15.00% AVERAGE RETURN!
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Since the founding of our exchange in 2019, our investors have
              averaged {">"} 15.00% interest, as a return on capital. In this
              same time frame, our investors have placed over $2 Million in
              loans that continue to earn an incredible current income yield.
              While past performance is not an indicator of future performance,
              we provide transparency into the total actual returns our
              investors achieve investing on the MNAZ exchange.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/about3.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        {/* =========== details ========== */}
        <div className="bg-blueColor py-[2rem] md:py-[4rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] text-primaryColor px-[10px]">
          <div className="">
            <h1 className="text-[24px] font-[500]">$5.81 Mil.</h1>
            <p className="text-[20px] font-[400]">Currently Published Deals</p>
          </div>
          <div className="">
            <h1 className="text-[24px] font-[500]">$119.06 Mil.</h1>
            <p className="text-[20px] font-[400]">Completed Deals</p>
          </div>
          <div className="">
            <h1 className="text-[24px] font-[500]">$195.4 Mil.</h1>
            <p className="text-[20px] font-[400]">Paid Off Deals</p>
          </div>
          <div className="">
            <h1 className="text-[24px] font-[500]">2.67 Thousand</h1>
            <p className="text-[20px] font-[400]">
              Number of Fractional Investments
            </p>
          </div>
        </div>

        <div className="bg-grayColor py-[3rem] flex justify-around flex-col sm:flex-row gap-[1rem] items-center px-[10px]">
          <div className="">
            <h1 className="text-[20px] font-[500]">
              We're here to help you Earn Money!
            </h1>
            <p className="text-[16px] font-[400]">
              Website Design by{" "}
              <Link
                href="https://marcelbagrin.com/"
                target="_blank"
                className="text-secondaryColor"
              >
                Marcel Bagrin.
              </Link>
            </p>
          </div>
          <Link href="/contact">
            <button className="btn">Contact Us</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
