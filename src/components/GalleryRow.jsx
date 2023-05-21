import { HiOutlineDownload } from "react-icons/hi";

export default function GalleryRow({ src, downloadImage }) {
  return (
    <div className="bg-blue-900 p-2 rounded shadow-2xl">
      <img className="relative rounded" src={src} alt="car_image" />
      <HiOutlineDownload
        onClick={downloadImage}
        className="absolute text-2xl right-5 bottom-5 cursor-pointer hover:text-white"
      />
    </div>
  );
}
