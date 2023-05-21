import React from "react";
import { useLoaderData } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

export default function ToyDetails() {
  const {
    picture,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = useLoaderData();

  ScrollToTop();
  return (
    <div className="container mx-auto p-5 md:p-20">
      <h1 className="font-bold text-primary text-4xl text-center mb-20">
        <u>Toy Information</u>
      </h1>
      <div className="max-w-7xl mx-auto bg-white shadow-blue-900 shadow-2xl rounded-lg overflow-hidden md:flex items-center md:p-5">
        <img
          src={picture}
          alt={name}
          className="md:w-1/2 md:h-96 object-cover"
        />
        <div className="py-4 px-6">
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <p className="text-gray-600 mb-2">Seller: {sellerName}</p>
          <p className="text-gray-600 mb-2">Seller Email: {sellerEmail}</p>
          <p className="text-gray-600 mb-2">Price: {price}Tk</p>
          <p className="text-gray-600 mb-2">Rating: {rating}</p>
          <p className="text-gray-600 mb-2">Available Quantity: {quantity}</p>
          <h1 className="font-bold text-lg mt-5">Description</h1>
          <p className="text-gray-600 mb-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
