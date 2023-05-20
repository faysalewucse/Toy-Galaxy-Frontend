import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Pagination } from "@nextui-org/react";
import ToysTable from "../components/ToysTable";
import useTitle from "../hooks/useTitle";

export default function AllToys() {
  useTitle("ALL TOYS");

  const { result, totalToys } = useLoaderData();
  const [toys, setToys] = useState(result);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedCars = result.find(
      (toy) => toy.name.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    setToys([searchedCars]);
  };

  const handlePage = async (pageNumber) => {
    console.log(pageNumber);
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/toys?pageNumber=${pageNumber}`
    );
    const { result } = await response.json();

    setToys(result);
  };

  return (
    <div className="max-w-7xl mx-auto py-20 min-h-[50vh]">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        All Toys
      </h1>

      <form
        onSubmit={handleSearch}
        className="mb-6 md:block flex justify-center"
      >
        <input
          type="text"
          placeholder="Search by Toy Name"
          className="px-4 py-2 border border-gray-300 rounded-md mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Search
        </button>
      </form>

      <ToysTable toys={toys} />

      <div className="mt-5">
        <Pagination
          onChange={(page) => handlePage(page)}
          total={Math.ceil(totalToys / 20)}
          initialPage={1}
        />
      </div>
    </div>
  );
}
