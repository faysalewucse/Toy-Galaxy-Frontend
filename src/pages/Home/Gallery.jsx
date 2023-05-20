import car1 from "../../assets/train.png";
import AOS from "aos";
import "aos/dist/aos.css";
import GalleryRow from "../../components/GalleryRow";

AOS.init();

export default function Gallery() {
  // to download the images
  const handleDownload = async (imageSrc, imageName) => {
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = imageName;
    link.click();

    URL.revokeObjectURL(url);
  };

  //   images
  const image1 =
    "https://i.ibb.co/Y3ZxM8h/black-car-with-red-yellow-stripes-red-hood.jpg";
  const image2 =
    "https://i.ibb.co/8b9fjcL/close-up-small-cars-model-road-traffic-conception.jpg";
  const image3 =
    "https://i.ibb.co/KhxyMtB/closeup-shot-small-toy-car-wooden-train-track.jpg";
  const image4 =
    "https://i.ibb.co/Ky9fkBt/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks.jpg";
  const image5 = "https://i.ibb.co/xSVnsRP/closeup-old-mini-police-car-toy.jpg";
  const image6 = "https://i.ibb.co/s3KsGK5/red-pickup-model-black-floor.jpg";

  return (
    <div className=" p-5 md:p-20 ">
      <h1 className="text-6xl text-primary font-bold mb-5 text-center">
        Gallery
      </h1>
      <p className="w-1/2 mx-auto text-center mt-5 mb-20">
        Discover a wide range of toy cars for endless fun and excitement. From
        sleek race cars to rugged off-roaders, our collection offers the best
        selection to satisfy every young automobile enthusiast.
      </p>
      <div className="max-w-7xl mx-auto md:pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div data-aos="fade-right" data-aos-duration="3000">
          <GalleryRow
            src={image1}
            downloadImage={() => handleDownload(image1, "Car Image 1")}
          />
        </div>
        <div data-aos="flip-right" data-aos-duration="3000">
          <GalleryRow
            src={image2}
            downloadImage={() => handleDownload(image2, "Car Image 2")}
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="3000">
          <GalleryRow
            src={image3}
            downloadImage={() => handleDownload(image3, "Car Image 3")}
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="2000">
          <GalleryRow
            src={image4}
            downloadImage={() => handleDownload(image4, "Car Image 4")}
          />
        </div>
        <div data-aos="flip-right" data-aos-duration="2000">
          <GalleryRow
            src={image5}
            downloadImage={() => handleDownload(image5, "Car Image 5")}
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <GalleryRow
            src={image6}
            downloadImage={() => handleDownload(image6, "Car Image 6")}
          />
        </div>
      </div>
    </div>
  );
}
