import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
function PastOfferingCard({ data }) {
  const router = useRouter();
  const url = router.pathname;
  return (
    <div className="flex flex-col gap-[2rem] w-full max-w-[350px] border-[2px] border-grayColor rounded-[5px] py-[15px] px-[20px]">
      <Image
        src={data.image}
        width={500}
        height={400}
        alt=""
        className="w-full h-[200px] rounded-[5px]"
      />
      {data.paidOff && (
        <div className="btn bg-grayColor text-black font-[600] text-center text-opacity-60 rounded-[5px] cursor-pointer">
          PAID OFF {data.paidOff}
        </div>
      )}
      <p className="text-[#4792b0] leading-[20px] text-[16px] font-[500]">
        {data.info}
      </p>
      <span className="text-[16px] font-[500] opacity-60">{data.address}</span>
      <div className="">
        <div className="w-full grid grid-cols-3 border-[1.5px] border-grayColor border-opacity-50">
          <div className="w-full col-span-2 p-[12px] font-[600] opacity-70">
            Deal Type
          </div>
          <div className="col-span-1 border-l-[1.5px] border-grayColor border-opacity-50 p-[12px] opacity-70">
            {data.dealType}
          </div>
        </div>
        <div className="w-full grid grid-cols-3 border-[1.5px] border-t-0 border-grayColor border-opacity-50">
          <div className="w-full col-span-2 p-[12px] font-[600] opacity-70">
            Investor Yield
          </div>
          <div className="col-span-1 border-l-[1.5px] border-grayColor border-opacity-50 p-[12px] opacity-70">
            {data.investorYield}%
          </div>
        </div>
        <div className="w-full grid grid-cols-3 border-[1.5px] border-t-0 border-grayColor border-opacity-50">
          <div className="w-full col-span-2 p-[12px] font-[600] opacity-70">
            Funding Goal
          </div>
          <div className="col-span-1 border-l-[1.5px] border-grayColor border-opacity-50 p-[12px] opacity-70">
            ${data.fundingGoal}
          </div>
        </div>
        <div className="w-full grid grid-cols-3 border-[1.5px] border-t-0 border-grayColor border-opacity-50">
          <div className="w-full col-span-2 p-[12px] font-[600] opacity-70">
            Estimated Funding Date
          </div>
          <div className="col-span-1 border-l-[1.5px] border-grayColor border-opacity-50 p-[12px] opacity-70">
            {data.estimatedFundingDate}
          </div>
        </div>
        <div className="w-full grid grid-cols-3 border-[1.5px] border-t-0 border-grayColor border-opacity-50">
          <div className="w-full col-span-2 p-[12px] font-[600] opacity-70">
            County
          </div>
          <div className="col-span-1 border-l-[1.5px] border-grayColor border-opacity-50 p-[12px] opacity-70">
            {data.county}
          </div>
        </div>
        <div className="w-full grid grid-cols-3 border-[1.5px] border-t-0 border-grayColor border-opacity-50">
          <div className="w-full col-span-2 p-[12px] font-[600] opacity-70">
            City
          </div>
          <div className="col-span-1 border-l-[1.5px] border-grayColor border-opacity-50 p-[12px] opacity-70">
            {data.city}
          </div>
        </div>
        <div className="w-full grid grid-cols-3 border-[1.5px] border-t-0 border-grayColor border-opacity-50">
          <div className="w-full col-span-2 p-[12px] font-[600] opacity-70">
            Lien position
          </div>
          <div className="col-span-1 border-l-[1.5px] border-grayColor border-opacity-50 p-[12px] opacity-70">
            {data.lienPosition}
          </div>
        </div>
        <div className="w-full grid grid-cols-3 border-[1.5px] border-t-0 border-grayColor border-opacity-50">
          <div className="w-full col-span-2 p-[12px] font-[600] opacity-70">
            Property type
          </div>
          <div className="col-span-1 border-l-[1.5px] border-grayColor border-opacity-50 p-[12px] opacity-70">
            {data.propertyType}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[1rem]">
          {data.funded && (
            <h2 className="text-[18px] font-[500] opacity-50">
              Funded <span>{data.funded}%</span>
            </h2>
          )}
          <h2 className="text-[18px] font-[500] opacity-50">
            Pledged <span>{data.pledged}%</span>
          </h2>
        </div>
        <div className="bg-grayColor w-full h-[12px] flex items-center px-[5px] rounded-[2px]">
          <div
            style={{ width: `${data.pledged}%` }}
            className="bg-secondaryColor h-[60%] rounded-[2px]"
          ></div>
        </div>

        <div className="flex justify-between gap-[10px] mt-[1rem]">
          <Link href={`/${url}/${data.id}`}>
            <button className="btn rounded-[5px] bg-blueColor">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PastOfferingCard;
