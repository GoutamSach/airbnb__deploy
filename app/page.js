import Banner from "./components/Banner";
import LargeCard from "./components/LargeCard";
import MediumCard from "./components/MediumCard";
import SmallCard from "./components/SmallCard";
import Footer from "./components/Footers";

import Header from "./components/header";

export default async function Home() {
  const res1 = await fetch("https://www.jsonkeeper.com/b/IJK5");
  const res2 = await fetch("https://www.jsonkeeper.com/b/OJBH");
  const data1 = await res1.json();
  const data11 = data1;
  const data2 = await res2.json();
  const data22 = data2;

  return (
    <>
      <Header />
      <Banner />

      {/* SmallCardSection */}
      <div className="  max-w-7xl mx-auto mt-5  pb-5  ">
        <h2 className=" ml-5 text-2xl font-bold">Explore Nearby</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
          {data11?.map((item) => (
            <SmallCard
              key={item.key}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </div>
      {/* MediumCardSection */}
      <section className="  max-w-7xl mx-auto mt-5   pb-5  ">
        <h2 className=" text-2xl font-bold ml-5">Live Anywhere</h2>
        <div className="  relative flex flex-row space-x-3 overflow-scroll scrollbar-hide pl-5">
          {data22?.map((item) => (
            <MediumCard img={item.img} key={item.id} title={item.title} />
          ))}
        </div>
      </section>
      <div className="max-w-7xl mx-auto pl-5 pr-5 lg:pr-10 ">
        <LargeCard
          title={"The Greatest Outdoors"}
          description={"Wishlists curated by Airbnb."}
          buttonText={"Get Inspired"}
        />
      </div>
      <div className=" ">
        <Footer />
      </div>
    </>
  );
}
