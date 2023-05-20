import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallery from "./Gallery";

export default function Home() {
  // set title
  useTitle("HOME");
  return (
    <div>
      <Banner />
      <Gallery />
    </div>
  );
}
