import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
function WhoCanInvest() {
  return (
    <Fragment>
      <Head>
        <title>Who can Invest in Trust Deeds in California | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== sell background ========== */}
        <div className="whoCanInvestBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              WHO CAN INVEST
            </div>
          </div>
        </div>

        {/*==========  ==========  */}
        <div className="flex justify-center items-center py-[2rem] md:py-[3rem] gap-[1rem] px-[10px]">
          <p className="w-full md:w-[70%] text-[18px] font-[400]">
            Currently, Qualified Investors can invest through the MNAZ
            marketplace. on On Multi-Lender Loans, Investors need to reside in
            California, or for entities, your principal place of business needs
            to be in California. On 25102f exempted loans, and whole loans,
            investors, can reside out of state. You don’t need to be an
            accredited investor however you do need to qualify based on a number
            of factors: net worth, income and capacity to understand the
            investment to ensure Trust Deeds are suitable for you. These
            qualification factors are provided on the California Bureau of Real
            Estate RE 870 Form.
          </p>
        </div>

        {/* ============== info =========== */}
        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              CAPACITY TO UNDERSTAND THE INVESTMENT
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Investors need to have the capacity to understand the fundamental
              aspects of the investment by reason of their educational,
              business, or financial experience. A Cal BRE RE 870 Form is used
              to determine Qualified Investors.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/who1.jpg"
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
              src="/images/who2.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              ABILITY TO BEAR THE ECONOMIC RISK
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Investors can bear the economic risk of the investment up to 100%
              loss of the capital invested.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              SUITABLE AND APPROPRIATE
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              The investment is suitable and appropriate for the investor, given
              the investors investment objective, portfolio structure and
              current financial situation.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/who3.jpg"
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
              src="/images/who4.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              FACTORS FOR DETERMINING SUITABLITY
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Information relevant for determining the suitability of the
              investment includes, at least, the age, investment objective,
              investment experience, income, net worth, financial situation of
              the investor and other investments currently held by the investor.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              QUALIFIED BASED ON INCOME OR NET WORTH
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Investors must meet the qualification that a single Trust Deed
              investment does not exceed (a) 10% of their net worth, exclusive
              of home, furnishings, and automobiles or (b) 10% of your adjusted
              gross income for federal income tax purposes for their last tax
              year or as estimated for the current year.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/who5.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="bg-blueColor py-[3rem] flex flex-col sm:flex-row gap-[1rem] justify-around items-center">
          <h1 className="text-[16px] font-[400] text-primaryColor">We're here to help you Earn Money!</h1>
          <Link href="/contact">
          <button className="btn uppercase">contact us</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default WhoCanInvest;
