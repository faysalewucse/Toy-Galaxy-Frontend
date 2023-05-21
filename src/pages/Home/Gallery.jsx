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
  const image1 = "https://i.ibb.co/yNZPBy4/6099832.jpg";
  const image2 = "https://i.ibb.co/c1jvpTR/toy-red-car-with-pinecone-top.jpg";
  const image3 =
    "https://i.ibb.co/tqmD01B/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks.jpg";
  const image4 = "https://i.ibb.co/CKZWKsb/closeup-old-mini-police-car-toy.jpg";
  const image5 =
    "https://i.ibb.co/qWW0gP1/closeup-shot-small-toy-car-wooden-train-track.jpghttps://i.ibb.co/qWW0gP1/closeup-shot-small-toy-car-wooden-train-track.jpg";
  const image6 =
    "https://i.ibb.co/mhWt1YR/close-up-small-cars-model-road-traffic-conception.jpg";

  return (
    <div className="p-5 md:p-20 bg-gallery-bg bg-cover bg-no-repeat">
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
        <div data-aos="flip-left" data-aos-duration="2000">
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
