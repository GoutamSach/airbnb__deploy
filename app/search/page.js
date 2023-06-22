"use client";
import { useSearchParams } from "next/navigation";
import Footer from "../components/Footers";
import Header from "../components/header";

import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Image from "next/image";

const searchRes = async () => {
  const resultss = await fetch("https://www.jsonkeeper.com/b/YVMX");
  const resultsss = await resultss.json();
  return resultsss;
};

async function Search() {
  // const results = await resultss.json();

  const searchParams = useSearchParams();
  const locations = searchParams.get("locations");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const noOfGuests = searchParams.get("noOfGuests");
  const formatStartDate = format(new Date(startDate), "dd MMMM");
  const formatEndDate = format(new Date(endDate), "dd MMMM");
  const days = `${formatStartDate} - ${formatEndDate}`;

  const resultsss = await searchRes();

  return (
    <div>
      <Header
        placeholder={`${locations}  | ${days} | ${noOfGuests} guest(s)`}
      />
      <main className="mx-3">
        <p className="text-xs md:text-sm mt-3">
          50+ Stays {days} for {noOfGuests} guest(s)
        </p>
        <h1 className="text-lg  md:text-2xl  font-bold mt-2 mb-5">
          Stays in {locations}
        </h1>
        <div className="mb-5 mr-3">
          <button className="text-xs  md:text-sm rounded-full px-3 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2  ">
            Free Cancellation
          </button>
          <button className="text-xs md:text-sm rounded-full px-2 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2   ">
            Type of place
          </button>
          <button className="text-xs md:text-sm rounded-full px-2 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2   ">
            Price
          </button>
          <button className="text-xs md:text-sm rounded-full px-2 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2   ">
            Dormitory
          </button>
          <button className="text-xs md:text-sm rounded-full px-2 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2  ">
            More filters
          </button>
        </div>
        <div className=" ">
          {resultsss?.map(
            ({
              img,
              key,
              location,
              title,
              description,
              star,
              price,
              total,
            }) => (
              <InfoCard
                key={total}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

// https://jsonkeeper.com/b/Z5I9
// for indian currency https://www.jsonkeeper.com/b/YVMX
// https://cors-anywhere.herokuapp.com/
