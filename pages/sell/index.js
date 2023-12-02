import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
function Sell() {
  return (
    <Fragment>
      <Head>
        <title>Sell | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== sell background ========== */}
        <div className="sellBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              SELL TRUST DEEDS
            </div>
          </div>
        </div>

        {/*========== Benefits ==========  */}
        <div className="flex flex-col justify-center items-center py-[2rem] md:py-[3rem] gap-[1rem] px-[10px]">
          <h1 className="text-[24px] leading-7 font-[600] opacity-70 text-center">
            Benefits to Selling a Trust Deed through <br />
            MNAZ:
          </h1>
          <ul className="flex flex-col">
            <li className="text-[16px] font-[500] opacity-70 flex items-center">
              <span className="text-[30px] text-secondaryColor mr-[5px]">
                &bull;
              </span>{" "}
              Fast and Professional liquidity for your Trust Deed
            </li>
            <li className="text-[16px] font-[500] opacity-70 flex items-center">
              <span className="text-[30px] text-secondaryColor mr-[5px]">
                &bull;
              </span>{" "}
              Turn a Trust Deed that is paying a monthly income into a lump sum
            </li>
            <li className="text-[16px] font-[500] opacity-70 flex items-center">
              <span className="text-[30px] text-secondaryColor mr-[5px]">
                &bull;
              </span>{" "}
              Marketplace works for both performing and non-performing loans
            </li>
            <li className="text-[16px] font-[500] opacity-70 flex items-center">
              <span className="text-[30px] text-secondaryColor mr-[5px]">
                &bull;
              </span>{" "}
              Have your Trust Deed exposed to over 700 Trust Deed investors
            </li>
          </ul>
        </div>

        {/* ============== info =========== */}
        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              SELL AT PAR, A PREMIUM OR A DISCOUNT
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Any investor can sell their Trust Deeds on MNAZ with the ability
              to price their loan at par (the current note rate), or sell it at
              a premium or discount. Investors can elect to retain a servicing
              spread too, for regular monthly income.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/sell1.jpg"
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
              src="/images/sell2.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              LIST FOR 25 BPS
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              There is a 25 bps fee for listing a Trust Deed on MNAZ. A 25 bps
              fee is due upon closing, when the Trust Deed sells, and is paid
              directly from escrow.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              SAFE, SECURE, COMPLIANT TRANSACTIONS
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Closing and Escrow is managed by the Sponsor and a licensed escrow
              company to ensure safe, secure and compliant transactions.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/sell3.jpg"
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
              src="/images/sell4.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              CALIFORNIA RESIDENTS ONLY FOR FRACTIONAL INTEREST SALES
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Are you a California Resident and interested in earning additional
              current income by selling one or more of your California Trust
              Deeds or fractional interests? Residents from outside of
              California can sell their whole loans on MNAZ. Please contact us,
              we will guide you through the process.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              .25% (25 BASIS POINTS) MARKETPLACE FEE TO SELL, $500 MINIMUM
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              The total marketplace fee is .50% (50 bps) to the Sponsor
              (Seller). 25 bps to list and 25 bps to sell. The minimum fee for a
              seller is $500. The sale of a note, or fractional interest, of
              less then $100,000 will result in the minimum fee being assessed.
              Title, escrow and closing charges are not included in the
              marketplace fee.
            </p>
            <Link href="/start-selling">
              <button className="btn mt-[2rem]">Start Selling</button>
            </Link>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/sell3.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Sell;
