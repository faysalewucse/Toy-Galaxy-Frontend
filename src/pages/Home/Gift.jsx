import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

export default function Gift() {
  return (
    <div className="md:px-20 md:py-40 p-5 bg-blue-50">
      <div className="max-w-screen-2xl mx-auto shadow-lg rounded-3xl md:flex gap-5 items-center justify-between bg-white">
        <img
          className="md:w-1/2 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none object-cover"
          src={
            "https://i.ibb.co/PG0gq2K/side-view-truck-delivering-christmas-presents.jpg"
          }
          alt="car"
        />
        <div className="px-5 md:px-10 text-center md:text-left">
          <h1 className="font-bold text-2xl md:text-6xl text-primary">
            Unleash Kids Imagination with Exciting Wheels!
          </h1>
          <p className="my-10 text-justify">
            Discover a fantastic collection of toy car gifts that will spark joy
            and adventure in every child's playtime. From speed racers to
            off-road adventurers, our selection offers a thrilling range of toy
            cars designed to ignite young imaginations.
          </p>
          <PrimaryButton text={"Shop Now"} style={"md:w-1/3 rounded-xl"} />
        </div>
      </div>
    </div>
  );
}
