import PastOfferingCard from "@/components/PastOfferingCard";
import { useState,useEffect, Fragment } from "react";
import Head from "next/head";


export default function PaidOfferings() {
  const [pastOfferings, setPastOfferings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/paidOffering/all") 
      .then((response) => response.json())
      .then((data) => setPastOfferings(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []); 


  return (
    <Fragment>
      <Head>
        <title>Paid Offerings | MNAZ</title>
      </Head>
      <div className="container py-[3rem] md:py-[5rem] px-[10px]">
        <div className="flex flex-wrap gap-4 w-full justify-evenly">
          {pastOfferings.map((paidData,index) => (
            <PastOfferingCard key={index+10} data={paidData} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
