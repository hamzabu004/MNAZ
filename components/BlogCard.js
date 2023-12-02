import Image from "next/image";
function BlogCard({ data }) {
  return (
    <div className="w-full max-w-[300px] rounded-[5px] shadow-2xl flex flex-col gap-[1rem] pb-[1.5rem] cursor-pointer">
      <div className="overflow-hidden">
        <Image
          src={data.image}
          width={300}
          height={200}
          alt=""
          className="w-full h-[200px] hover:scale-105 transition-all duration-500 rounded-t-[5px]"
        />
      </div>
      <div className="flex flex-col gap-[5px] px-[15px]">
        <span className="text-secondaryColor text-[18px] font-[500]">Blog</span>
        <h1 className="text-[22px] font-[500] leading-[25px]">{data.title}</h1>
        <p className="text-[16px] font-[400] leading-[20px]">{data.desc}</p>
      </div>
      <div className="flex gap-[1rem] items-center px-[15px]">
        <div className="">
          <Image
            src={data.userpic}
            width={40}
            height={40}
            alt=""
            className="w-[40] h-[40] rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[16px] font-[500]">{data.username}</h1>
          <p className="text-[15px] font-[400] mt-[-5px]">{data.date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
