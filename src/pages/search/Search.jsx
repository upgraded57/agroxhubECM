import { useLoaderData } from "react-router-dom";
import Navbar from "./../../components/navbar/Navbar";
import Footer from "./../../components/footer/Footer";
import Recent from "./../../components/recent/Recent";
import BeASeller from "./../../components/beaseller/BeASeller";
import Search from "./../../components/search/Search";

export default function SearchPage() {
  const q = useLoaderData();
  return (
    <>
      <Navbar />
      <Search />
      <div className="px-[4vw] max-w-screen-xl mx-auto mb-12">
        <h3 className="text-xl font-semibold">Your Search - {q}</h3>
      </div>
      <BeASeller />
      <Recent />
      <Footer />
    </>
  );
}
