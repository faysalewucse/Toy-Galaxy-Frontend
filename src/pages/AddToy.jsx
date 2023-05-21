import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

export default function AddToy() {
  useTitle("ADD TOY");

  // current user
  const { currentUser } = useAuth();

  // input fields variables initialized
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState(currentUser.displayName);
  const [sellerEmail, setSellerEmail] = useState(currentUser.email);
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const toyData = {
      picture,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price: parseInt(price),
      rating: parseFloat(rating),
      quantity: parseInt(quantity),
      description,
    };

    fetch(`${import.meta.env.VITE_BASE_API_URL}/addtoy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((response) => {
        Swal.fire("Great!", "You Added A Toy Successfully!", "success");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-10 md:p-20">
      <h1 className="font-bold text-4xl mb-10 text-primary">Add New Toy</h1>
      <form onSubmit={handleSubmit}>
        <div className="md:grid grid-cols-2 gap-5">
          <div className="mb-4">
            <label htmlFor="picture" className="block font-medium mb-1">
              Picture URL
            </label>
            <input
              type="text"
              id="picture"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="sellerName" className="block font-medium mb-1">
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={sellerName}
              onChange={(e) => setSellerName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="sellerEmail" className="block font-medium mb-1">
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={sellerEmail}
              onChange={(e) => setSellerEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subCategory" className="block font-medium mb-1">
              Sub-category
            </label>
            <select
              type="text"
              id="subCategory"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="Sports Car">Sports Car</option>
              <option value="Police Car">Police Car</option>
              <option value="Fire Truck">Fire Truck</option>
              <option value="Regular Car">Regular Car</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block font-medium mb-1">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block font-medium mb-1">
              Available Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="description" className="block font-medium mb-1">
              Detail Description
            </label>
            <textarea
              id="description"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-blue-900 text-white w-full py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}
