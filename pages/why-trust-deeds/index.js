import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
function WhyTrustDeeds() {
  return (
    <Fragment>
      <Head>
        <title>Why Invest in Trust Deed | MNAZ</title>
      </Head>
      <div className="container">
        {/* =========== sell background ========== */}
        <div className="TrustDeedBg">
          <div className="flex flex-col justify-center items-center text-center px-[10px] h-[30rem] md:h-[30rem]">
            <div className="bg-secondaryColor text-primaryColor text-[28px] font-[600] opacity-90 py-[12px] px-[20px]">
              WHY Trust Deeds
            </div>
          </div>
        </div>

        {/*==========  ==========  */}
        <div className="flex justify-center items-center py-[2rem] md:py-[3rem] gap-[1rem] px-[10px]">
          <p className="w-full md:w-[70%] text-[18px] font-[400]">
            Trust Deed investors are typically tired of Wall Street volatility
            and opaqueness. Our Trust Deed Investors desire a monthly cash flow
            and a high yield that is paid every month, not at the end of an
            investment period. Trust Deed investors like the non-correlated
            aspect of Trust Deeds and want to diversify their portfolio. These
            “fixed income” investors are seeking “smart passive income” and
            attractive current yields, of 8% – 12%, who appreciate knowing their
            principal is secured by real estate, and a Deed of Trust.
          </p>
        </div>

        {/* ============== info =========== */}
        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              LEGAL TITLE TRANSFERRED TO A TRUSTEE, AS SECURITY
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              A Trust Deed, also known as a Deed of Trust, is a deed wherein
              legal title in real property is transferred to a trustee, which
              holds it as security for a loan (debt) between a borrower
              (trustor) and a lender (beneficiary).
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/trust1.jpg"
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
              src="/images/trust2.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              RECORDED EVIDENCE OF AND SECURITY FOR DEBT
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              Trust Deeds are recorded in the county where the property is
              located as evidence of and security for the debt. The act of
              recording provides constructive notice to the public that the
              property has been encumbered. When the debt is fully paid the
              lender (beneficiary) is required by law to promptly direct the
              trustee to transfer the property back to the trustor by
              reconveyance, thus releasing the security for the debt.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              TRUST DEEDS VS. MORTGAGES
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              The basic difference between the mortgage as a security instrument
              and a Deed of Trust is that in a Deed of Trust there are three
              parties involved, the borrower, the lender, and a trustee, whereas
              in a mortgage document there are only two parties involved, the
              borrower and the lender
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/trust3.jpg"
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
              src="/images/trust4.jpg"
              width={300}
              height={200}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              FASTER FORECLOSURE WITH TRUST DEEDS
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              With Trust Deeds foreclosure is often faster and less expensive
              than with Mortgages if a borrower fails to repay or meet the terms
              of their loan. Faster foreclosure timelines lead to more certainty
              of recovering principal, interest and foreclosure expenses.
            </p>
          </div>
        </div>

        <div className="bg-grayColor grid grid-cols-1 lg:grid-cols-3 gap-[1rem] place-items-center">
          <div className="lg:col-span-2 items-center px-[5px] pb-[3rem] lg:pb-0 order-2 lg:order-1">
            <h1 className="text-[24px] font-[600] leading-[25px]">
              NON-JUDICIAL VS. JUDICIAL FORECLOSURE
            </h1>
            <p className="text-[16px] font-[500] opacity-70 leading-[22px] mt-[10px]">
              A nonjudicial foreclosure process is typically used in states that
              use deeds of Trust, including California. In a nonjudicial
              foreclosure, the lender can foreclose without going to court which
              shortens the foreclosure timeline, typically less the one year and
              as short as five months. Judicial foreclosures exist where the
              foreclosure must go through the state court system and are typical
              in states that have Mortgages as the security instrument. Judicial
              Foreclosures lead to longer foreclosure timelines which can be
              more than a year and up to three years in New Jersey. The
              following five states have exceptionally long foreclosure
              timelines: NJ, NY, FL, HI and IL, averaging from 830 days to 1,103
              days.
            </p>
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2 w-full">
            <Image
              src="/images/trust5.jpg"
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

export default WhyTrustDeeds;
