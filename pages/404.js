import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";
export default function PageNotFound() {
  return (
    <Fragment>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="container w-full h-[100vh] flex justify-center items-center flex-col">
        <div className="">
          <Image src="/images/404.gif" width={500} height={400} alt="" />
        </div>
        <h1 className="text-center text-[28px] font-[700] text-secondaryColor">
          OOPS! PAGE NOT FOUND
        </h1>
      </div>
    </Fragment>
  );
}
