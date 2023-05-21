import React from "react";
import { useNavigate } from "react-router-dom";

export default function TabCard({ car }) {
  const navigate = useNavigate();

  const { _id, picture, name, price, rating } = car;

  return (
    <div className="border border-white shadow-md flex flex-col justify-between rounded-2xl text-center">
      <img
        src={picture}
        alt={name}
        className="h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4 text-white">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <div className="flex items-center justify-center gap-3 font-semibold">
          <p className="my-2">Price: {price} BDT</p>
          <p className="my-2">Rating: {rating}</p>
        </div>
        <button
          className="bg-blue-500 w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl"
          onClick={() => navigate(`/toy-details/${_id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
