import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  BsFillSendFill,
  BsGraphUpArrow,
  BsQuestionCircleFill,
} from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";
import { HiDocumentDuplicate } from "react-icons/hi";
import { RiListSettingsLine } from "react-icons/ri";
function HowItWorks() {
  return (
    <Fragment>
      <Head>
        <title>Investing in Trust Deeds in California | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== HowItWorks background ========== */}
        <div className="howItWorkBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              HOW IT WORKS
            </div>
          </div>
        </div>

        {/*====================  */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center py-[2rem] md:py-[3rem] gap-[2rem] px-[10px]">
          <ul className="flex flex-col">
            <li className="text-[16px] font-[500] opacity-70 flex items-start">
              <span className="text-[30px] text-secondaryColor mr-[5px]">
                &bull;
              </span>
              You become the Lender when you invest in Trust Deeds. Let your
              capital work for you by earning high yielding monthly income.
              Trust Deed investing is simple. No gimmicks or complicated
              formulas. MNAZ connects the Lender to the Borrower through the
              Internet.
            </li>
            <li className="text-[16px] font-[500] opacity-70 flex items-start">
              <span className="text-[30px] text-secondaryColor mr-[5px]">
                &bull;
              </span>{" "}
              It is simple to get started. Register or Sign In, click on
              Available Offerings and then Review and Pledge on the available
              high-quality Trust Deeds. You can pledge for the whole loan if
              available or a fractional interest
            </li>
            <li className="text-[16px] font-[500] opacity-70 flex iitems-start">
              <span className="text-[30px] text-secondaryColor mr-[5px]">
                &bull;
              </span>{" "}
              If you are interested in Selling a California Trust Deed, you can
              do that too, visit our Sell page for more information about
              becoming a Sponsor.
            </li>
          </ul>
          <div className="flex flex-col gap-[1rem]">
            <div className="flex items-center gap-[10px]">
              <BsFillSendFill className="w-[30px] h-[30px] text-secondaryColor" />
              <Link
                href="/how-to-pledge"
                className="text-[16px] font-[500] text-secondaryColor"
              >
                How to Pledge
              </Link>
            </div>
            <div className="flex items-center gap-[10px]">
              <GiOpenBook className="w-[30px] h-[30px] text-secondaryColor" />
              <Link
                href="/what-you-should-know"
                className="text-[16px] font-[500] text-secondaryColor"
              >
                What You Should Know
              </Link>
            </div>
            <div className="flex items-center gap-[10px]">
              <TbUsersGroup className="w-[30px] h-[30px] text-secondaryColor" />
              <Link
                href="/who-can-invest"
                className="text-[16px] font-[500] text-secondaryColor"
              >
                Who Can Invest
              </Link>
            </div>
            <div className="flex items-center gap-[10px]">
              <HiDocumentDuplicate className="w-[30px] h-[30px] text-secondaryColor" />
              <Link
                href="/why-MNAZ"
                className="text-[16px] font-[500] text-secondaryColor"
              >
                Why MNAZ
              </Link>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsGraphUpArrow className="w-[30px] h-[30px] text-secondaryColor" />
              <Link
                href="/why-trust-deeds"
                className="text-[16px] font-[500] text-secondaryColor"
              >
                Why Trust Deeds
              </Link>
            </div>
            <div className="flex items-center gap-[10px]">
              <BsQuestionCircleFill className="w-[30px] h-[30px] text-secondaryColor" />
              <Link
                href="/frequently-asked-questions"
                className="text-[16px] font-[500] text-secondaryColor"
              >
                Frequently Asked Questions
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-[2rem]">
          <Image
            src="/images/workflow.jpg"
            width={500}
            height={700}
            alt=""
            className=""
          />
          <Link
            href="https://88k413.p3cdn1.secureserver.net/wp-content/uploads/2018/06/CrowdTrustDeed-Workflow-Diagram.pdf"
            target="_blank"
            className="text-[18px] font-[600] text-secondaryColor"
          >
            View/Download as PDF
          </Link>
        </div>

        {/* ============== info =========== */}
        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">SIGN UP →</h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Sign-up to become an investor/lender, it only take a couple of
              minutes to register. Each investor's information is reviewed prior
              to their account being approved. You will receive an email upon
              approval, usually within a few hours, and surely by the next
              business day.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/how1.jpg"
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
              src="/images/how2.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              PREVIEW TRUST DEED OPPORTUNITIES
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Preview the wide selection of Trust Deeds available in our
              marketplace. Select opportunities based on your investment
              interests, property type, location, loan amount, interest rate or
              other criteria to ensure the investment is suitable for you.
              Select from newly originated loans (Promissory Note and Trust
              Deed) funded directly from escrow or buy a "seasoned loan" that is
              already closed with a payment history.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              PLEDGE INTERESTS
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Pledge an investment amount, either for the whole loan amount or a
              fractional interest. When you pledge we will provide secure access
              to the loan file so you conduct your own due diligence, assessing
              the risk and suitability. You can increase, decrease or release
              your pledge within the first 48 hours of pledging. Additional
              requests to modify pledges after the 48 hours are taken on a case
              by case basis.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/how3.jpg"
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
              src="/images/how4.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              FRACTIONAL INTERESTS
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Fractional interests sizes vary and are available in units that
              are from 1/35th to 100% of the loan amount. Minimum investments
              are typically $25,000 or higher depending on the Trust Deed.
              Typically, Trust Deed investments are limited to a maximum of 10
              investors however on larger loan sizes we sometimes go up to 35
              investors.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">FUNDING</h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Once a loan is fully funded and ready to close, the investment
              status will change to funding now. At that time no changes to
              pledges will be allowed. All investors will be notified and lender
              documents will be provided for signing along with wire
              instructions for wiring funds into escrow.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/how5.jpg"
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
              src="/images/how6.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">CLOSING</h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Lenders that pledge on a Trust Deed will be notified via email
              that the loan has moved into the funding stage. During the funding
              stage, Lenders will receive 3 documents including: <br /> 1.
              Servicing Agreeement, <br /> 2. Lender Purchase Disclosure
              Statement, <br /> 3. Wire Instructions. Lenders should sign and
              send back #1 and #2 above and then follow the instructions on the
              email regarding wiring the funds to the Escrow for the
              transaction.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              YOUR CAPITAL IS NOW INVESTED, EARNING MONTHLY RETURNS
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Monthly principal and interest payments on the loans you have
              invested in are automatically deposited to your bank account via
              ACH. All loan servicing is managed by our loan servicer, the
              leading private money servicer in America, with over $6 Billion of
              loans in servicing and a 30 year operating history.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/how7.jpg"
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
              src="/images/how8.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              REINVEST! KEEP YOUR MONEY WORKING FOR YOU!
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              When the borrower is ready to pay off their loan, either at
              maturity or earlier, a payoff notice will be provided to you. A
              final interest payment will be made along with the remaining
              principal balance. Your capital is then ready to reinvest.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HowItWorks;
