import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Pagination } from "@nextui-org/react";

export default function AllToys() {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform the search based on the searchTerm value
    // Update the toy list accordingly
    const searchedCars = loadedToys.find(
      (toy) => toy.name.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    console.log(searchedCars);
    setToys([searchedCars]);
  };

  const handlePage = async (pageNumber) => {
    console.log(pageNumber);
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/toys?pageNumber=${pageNumber}`
    );
    const result = await response.json();
    setToys(result);
  };
  return (
    <div className="max-w-7xl mx-auto py-20 min-h-[50vh]">
      <h1 className="text-3xl font-bold mb-6">All Toys</h1>

      <form onSubmit={handleSearch} className="mb-6">
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

      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2">Seller</th>
            <th className="py-2">Toy Name</th>
            <th className="py-2">Sub-category</th>
            <th className="py-2">Price</th>
            <th className="py-2">Available Quantity</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr className="text-center" key={toy._id}>
              <td className="py-2">{toy.sellerName || "-"}</td>
              <td className="py-2">{toy.name}</td>
              <td className="py-2">{toy.subCategory}</td>
              <td className="py-2">{toy.price}</td>
              <td className="py-2">{toy.quantity}</td>
              <td className="py-2">
                <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-all duration-300">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5">
        <Pagination
          onChange={(page) => handlePage(page)}
          total={Math.ceil(toys.length / 20) + 1}
          initialPage={1}
        />
      </div>
    </div>
  );
}
