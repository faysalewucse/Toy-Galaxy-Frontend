import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";

export default function Home() {
  const sportsCar = useLoaderData();

  // set title
  useTitle("HOME");
  return (
    <div>
      <Banner />
      <Gallery />
      <ShopByCategory sportsCar={sportsCar} />
    </div>
  );
}
