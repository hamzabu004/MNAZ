import OfferingCard from "@/components/OfferingCard";
import { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import AddOffering from "@/components/AddOffering";

export default function AvailableOfferings() {
  const [offerings, setOfferings] = useState([]);
  const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;


  useEffect(() => {
    fetch("http://localhost:3001/offering/all")
      .then((response) => response.json())
      .then((data) => setOfferings(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);
  return (
    <Fragment>
      <Head>
        <title>
          1st and 2nd Trust Deed Investments available in California today |
          MNAZ
        </title>
      </Head>
      <div className="container">
        {role !== 'Visitor' && 
          <AddOffering />
        }
        <div className="flex flex-wrap gap-4 w-full justify-evenly py-[3rem] md:py-[5rem] px-[10px]">
          {offerings.map((offering) => (
            <OfferingCard key={offering.id} data={offering} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
