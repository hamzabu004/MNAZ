import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="container bg-[#101010] text-primaryColor py-[40px] px-[10px] md:px-[20px]">
      <div className="flex flex-wrap items-start justify-evenly gap-[20px]">
        <div className="flex flex-col gap-[5px] justify-center items-center">
          <h1 className="text-[20px] font-[700]">Address</h1>
          <p className="text-[16px] font-[400] opacity-80">
            2801 B Street #193, San Diego CA 92102.
          </p>
        </div>
        <div className="flex flex-col gap-[5px] justify-center items-center">
          <h1 className="text-[20px] font-[700]">Contact Us</h1>
          <span className="text-[16px] font-[400] opacity-80">
            <Link href="/">619-732-6616</Link> – Tap to call
          </span>
          <span className="text-[16px] font-[400] opacity-80">
            <Link href="/">info@MNAZ.com</Link> – Tap to message
          </span>
        </div>
        <div className="flex flex-col gap-[5px] justify-center items-center">
          <h1 className="text-[20px] font-[700]">Follow Us</h1>
          <div className="flex gap-[10px]">
            <Link
              href="https://www.facebook.com/crowdtrustdeed"
              target="_blank"
            >
              <FaFacebookSquare className="w-[32px] h-[35px] text-secondaryColor cursor-pointer" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/crowdtrustdeed/"
              target="_blank"
            >
              <FaLinkedin className="w-[32px] h-[35px] text-secondaryColor cursor-pointer" />
            </Link>
            <Link href="https://twitter.com/CrowdTrustDeed" target="_blank">
              <FaTwitterSquare className="w-[32px] h-[35px] text-secondaryColor cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[2rem]">
        <p className="text-[16px] font-[400] opacity-80 text-center">
          {date} © MNAZ. All rights reserved. Powered by MNAZ.
        </p>
      </div>
    </footer>
  );
}
