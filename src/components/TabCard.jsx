import React from "react";
import { useNavigate } from "react-router-dom";

export default function TabCard({ car }) {
  const navigate = useNavigate();

  const { _id, picture, name, price, rating } = car;

  return (
    <div className="bg-white shadow-md flex flex-col justify-between rounded-md text-center">
      <img
        src={picture}
        alt={name}
        className="w-48 mx-auto h-48 object-cover rounded-md"
      />
      <div className="p-4">
        <h2 className="text-primary text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">Price: {price} BDT</p>
        <div className="text-primary mb-2">Rating: {rating}</div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => navigate(`/toy-details/${_id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
