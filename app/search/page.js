import Footer from "../components/Footers";
import Header from "../components/header";

function Search() {
  return (
    <div>
      <Header />
      <main className="ml-3">
        <p className="text-xs md:text-sm mt-3">bla bla</p>
        <h1 className="text-lg  md:text-xl  font-bold mt-2 mb-5">
          hey here is your booking
        </h1>
        <div className="mb-5 mr-3">
          <button className="text-xs rounded-full px-3 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2  ">
            Free Cancellation
          </button>
          <button className="text-xs rounded-full px-2 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2   ">
            Type of place
          </button>
          <button className="text-xs rounded-full px-2 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2   ">
            Price
          </button>
          <button className="text-xs rounded-full px-2 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2   ">
            Dormitory
          </button>
          <button className="text-xs rounded-full px-2 py-2 border-gray-300 border hover:shadow-md  active:bg-slate-100 mr-2 mb-2  ">
            More filters
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
