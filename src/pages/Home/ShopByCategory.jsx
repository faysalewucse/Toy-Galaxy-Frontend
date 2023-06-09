import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "../../components/TabCard";

export default function ShopByCategory({ sportsCar }) {
  const [cars, setCars] = useState(sportsCar);
  const categoryCount = 4;

  const handleTabPanel = async (index) => {
    const category =
      index == 0
        ? "Sports Car"
        : index == 1
        ? "Police Car"
        : index == 2
        ? "Fire Truck"
        : "Regular Car";

    await fetch(`${import.meta.env.VITE_BASE_API_URL}/toys/${category}`)
      .then((response) => response.json())
      .then((data) => setCars(data));
  };

  return (
    <div className="bg-primary px-2 py-10 md:p-20 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-6xl font-bold mb-5">
          Shop By Category
        </h1>
        <p className="text-center mb-20 w-3/4 mx-auto">
          Browse through our wide selection of products organized into various
          categories, including electronics, home decor, fashion, toys, and much
          more.
        </p>
        <Tabs onSelect={(index) => handleTabPanel(index)}>
          <TabList>
            <Tab>Sports Car</Tab>
            <Tab>Police Car</Tab>
            <Tab>Fire Truck</Tab>
            <Tab>Regular Car</Tab>
          </TabList>
          {[...Array(categoryCount).keys()].map((index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                {cars.map((car, index) => (
                  <TabCard key={index} car={car} />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
