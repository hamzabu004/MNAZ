import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header({ hasToken, handleLogout }) {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const router = useRouter();
  const [isToken, setIsToken] = useState(hasToken);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const isTokenAvailable =
      typeof window !== "undefined"
        ? localStorage.getItem("isTokenAvailable")
        : null;
    if (isTokenAvailable) {
      setIsToken(isTokenAvailable);
    } else {
      setIsToken(false);
    }
  });

  return (
    <header className="container sticky top-0 z-[999999]" ref={headerRef}>
      <div className="bg-white text-[18px] py-[15px] px-5 shadow-lg">
        <div className="flex justify-between items-center gap-[10px]">
          {/* ========== logo ============ */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                width={170}
                height={100}
                alt="logo"
                className="w-[150px] h-[40px]"
              />
            </Link>
          </div>

          {/* ========== menu ========== */}
          <div
            className="navigation text-black font-[500]"
            ref={menuRef}
            onClick={toggleMenu}
          >
            <ul className="menu relative flex gap-[20px] text-[16px] font-[600] opacity-80">
              <ImCross className="text-black block absolute top-5 left-5 md:hidden" />
              {token && (
                <Link href="/available-offerings">
                  <li
                    className={
                      router.pathname === "/available-offerings"
                        ? "active"
                        : "hover:text-secondaryColor"
                    }
                  >
                    AVAILABLE OFFERINGS
                  </li>
                </Link>
              )}
              <div className="group relative">
                <Link href="/completed-offerings">
                  <li
                    className={
                      router.pathname === "/completed-offerings" ||
                      router.pathname === "/paid-offerings"
                        ? "active"
                        : "hover:text-secondaryColor"
                    }
                  >
                    PAST OFFERINGS
                  </li>
                </Link>
                <ul className="absolute top-[1.5rem] z-10 bg-primaryColor w-[250px] h-auto p-[2rem] shadow-lg hidden group-hover:flex flex-col gap-[10px]">
                  <Link href="/completed-offerings">
                    <li
                      className={
                        router.pathname === "/completed-offerings"
                          ? "active"
                          : "hover:text-secondaryColor"
                      }
                    >
                      Completed Offerings
                    </li>
                  </Link>
                  <Link href="/paid-offerings">
                    <li
                      className={
                        router.pathname === "/paid-offerings"
                          ? "active"
                          : "hover:text-secondaryColor"
                      }
                    >
                      Paid Off Offerings
                    </li>
                  </Link>
                </ul>
              </div>
              <Link href="/sell">
                <li
                  className={
                    router.pathname === "/sell"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  SELL
                </li>
              </Link>
              <Link href="/borrow">
                <li
                  className={
                    router.pathname === "/borrow"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  BORROW
                </li>
              </Link>
              <div className="group relative">
                <Link href="/how-it-works">
                  <li
                    className={
                      router.pathname === "/how-it-works" ||
                      router.pathname === "/how-to-pledge" ||
                      router.pathname === "/what-you-should-know" ||
                      router.pathname === "/who-can-invest" ||
                      router.pathname === "/why-MNAZ" ||
                      router.pathname === "/why-trust-deeds" ||
                      router.pathname === "/frequently-asked-questions"
                        ? "active"
                        : "hover:text-secondaryColor"
                    }
                  >
                    EDUCATION
                  </li>
                </Link>
                <ul className="absolute top-[1.5rem] z-10 bg-primaryColor w-[250px] h-auto p-[2rem] shadow-lg hidden group-hover:flex flex-col gap-[10px]">
                  <Link href="/how-it-works">
                    <li
                      className={
                        router.pathname === "/how-it-works"
                          ? "active"
                          : "hover:text-secondaryColor"
                      }
                    >
                      How it Works
                    </li>
                  </Link>
                  <Link href="/how-to-pledge">
                    <li
                      className={
                        router.pathname === "/how-to-pledge"
                          ? "active"
                          : "hover:text-secondaryColor"
                      }
                    >
                      How to Pledge
                    </li>
                  </Link>
                  <Link href="/what-you-should-know">
                    <li
                      className={
                        router.pathname === "/what-you-should-know"
                          ? "active"
                          : "hover:text-secondaryColor"
                      }
                    >
                      What You Should Know
                    </li>
                  </Link>
                  <Link href="/who-can-invest">
                    <li
                      className={
                        router.pathname === "/who-can-invest"
                          ? "active"
                          : "hover:text-secondaryColor"
                      }
                    >
                      Who Can Invest
                    </li>
                  </Link>
                  <Link href="/why-MNAZ">
                    <li
                      className={
                        router.pathname === "/why-MNAZ"
                          ? "active"
                          : "hover:text-secondaryColor"
                      }
                    >
                      Why MNAZ
                    </li>
                  </Link>
                  <Link href="/why-trust-deeds">
                    <li
                      className={
                        router.pathname === "/why-trust-deeds"
                          ? "active"
                          : "hover:text-secondaryColor"
                      }
                    >
                      Why Trust Deeds
                    </li>
                  </Link>
                  <Link href="/frequently-asked-questions">
                    <li
                      className={
                        router.pathname === "/frequently-asked-questions"
                          ? "active"
                          : "hover:text-secondaryColor"
                      }
                    >
                      Frequently Asked Questions
                    </li>
                  </Link>
                </ul>
              </div>
              <Link href="/blog">
                <li
                  className={
                    router.pathname === "/blog"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  BLOG
                </li>
              </Link>
              <Link href="/about">
                <li
                  className={
                    router.pathname === "/about"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  ABOUT
                </li>
              </Link>
              <Link href="/contact">
                <li
                  className={
                    router.pathname === "/contact"
                      ? "active"
                      : "hover:text-secondaryColor"
                  }
                >
                  CONTACT US
                </li>
              </Link>
              {token && (
                <Link href="/profile">
                  <li
                    className={
                      router.pathname === "/profile"
                        ? "active"
                        : "hover:text-secondaryColor"
                    }
                  >
                    MY ACCOUNT
                  </li>
                </Link>
              )}
            </ul>
          </div>

          {/* =========== right header =========== */}
          <div className="flex items-center gap-[10px] sm:gap-[30px]">
            {isToken ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link href="/signin">
                <button className="border-[3px] border-secondaryColor px-[15px] py-[7px] font-[500] text-[15px]">
                  Log In
                </button>
              </Link>
            )}

            <span className="hamburger" onClick={toggleMenu}>
              <BiMenu className="w-8 h-8 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
