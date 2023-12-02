import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("isTokenAvailable")
        : null;
    console.log("Token", token);
    if (token) {
      setHasToken(true);
    }
  }, []);

  const handleLogout = () => {
    typeof window !== "undefined" ? localStorage.removeItem("token") : null;
    typeof window !== "undefined"
      ? localStorage.removeItem("isTokenAvailable")
      : null;
    typeof window !== "undefined" ? localStorage.removeItem("id") : null;
    typeof window !== "undefined" ? localStorage.removeItem("role") : null;
    setHasToken(false);
    router.push("/signin");
  };
  return (
    <Fragment>
      <Header hasToken={hasToken} handleLogout={handleLogout} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
