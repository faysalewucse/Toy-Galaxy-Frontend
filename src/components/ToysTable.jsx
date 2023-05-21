import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { GrEdit, GrView } from "react-icons/gr";

export default function ToysTable({
  toys,
  ud,
  openModal,
  setToyData,
  openDeleteConfirmModal,
}) {
  const navigate = useNavigate();

  const updateHandler = (toy) => {
    setToyData(toy);
    openModal(true);
  };

  const deleteHandler = (toy) => {
    setToyData(toy);
    openDeleteConfirmModal(true);
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-2 hidden md:block">Seller</th>
          <th className="py-2">Toy Name</th>
          <th className="py-2 hidden md:block">Sub-category</th>
          <th className="py-2">Price(BDT)</th>
          <th className="py-2">Available Quantity</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {toys.map((toy) => (
          <tr className="text-center" key={toy._id}>
            <td className="py-2 hidden md:block">{toy.sellerName || "-"}</td>
            <td className="py-2 ">{toy.name}</td>
            <td className="py-2 hidden md:block">{toy.subCategory}</td>
            <td className="py-2 text-primary font-bold">{toy.price}</td>
            <td className="py-2">{toy.quantity}</td>
            <td className="py-2 flex gap-2 justify-center items-center">
              {!ud && (
                <button
                  onClick={() => navigate(`/toy-details/${toy._id}`)}
                  className="hidden md:block px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-all duration-300"
                >
                  View Details
                </button>
              )}
              <GrView className="md:hidden text-xl" />
              {ud && (
                <button
                  onClick={() => updateHandler(toy)}
                  className="hidden md:block px-4 py-2 border border-primary bg-secondary rounded-md hover:bg-yellow-400 transition-all duration-300"
                >
                  Update
                </button>
              )}
              {ud && <GrEdit className="md:hidden text-xl" />}
              {ud && (
                <button
                  onClick={() => deleteHandler(toy)}
                  className="hidden md:block px-4 py-2 border border-primary bg-red-400 rounded-md hover:bg-red-500 text-white transition-all duration-300"
                >
                  Delete
                </button>
              )}
              {ud && (
                <MdDelete
                  onClick={() => deleteHandler(toy)}
                  className="md:hidden text-3xl md:text-4xl text-red-400 hover:scale-110 cursor-pointer transition-all duration-300 hover:text-red-500"
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
