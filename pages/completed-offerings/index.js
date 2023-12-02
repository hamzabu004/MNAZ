import PastOfferingCard from "@/components/PastOfferingCard";
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";

export default function CompletedOfferings() {

  const [offerings, setOfferings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/offering/all") 
      .then((response) => response.json())
      .then((data) => setOfferings(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []); 

  return (
    <Fragment>
      <Head>
        <title>Completed Offerings | MNAZ</title>
      </Head>
      <div className="container py-[3rem] md:py-[5rem] px-[10px]">
        <div className="flex flex-wrap gap-4 w-full justify-evenly">
          {offerings.map((offering) => (
            <PastOfferingCard key={offering.id} data={offering} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
