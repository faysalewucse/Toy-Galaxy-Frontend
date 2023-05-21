import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import Gift from "./Gift";
import Contact from "./Contact";
import StickyNote from "./StickyNote";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";

export default function Home() {
  const sportsCar = useLoaderData();
  const [visible, setVisible] = useState(true);
  const { currentUser } = useAuth();
  // set title
  useTitle("HOME");
  return (
    <div className="relative">
      {currentUser && visible ? (
        <StickyNote currentUser={currentUser} setVisible={setVisible} />
      ) : null}
      <Banner />
      <Gallery />
      <ShopByCategory sportsCar={sportsCar} />
      <Gift />
      <Contact />
    </div>
  );
}
