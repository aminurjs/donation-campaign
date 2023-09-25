import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [filterCards, setFilterCards] = useState([]);

  useEffect(() => {
    const localItemsJson = localStorage.getItem("cards");
    const localItems = JSON.parse(localItemsJson);
    console.log(localItems);

    setFilterCards(localItems);
  }, []);
  console.log(filterCards);
  return (
    <div className="max-w-[1320px] mx-auto mt-24 mb-28 px-4">
      {filterCards ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {filterCards.map((card) => (
            <DonationCard key={card.id} card={card}></DonationCard>
          ))}
        </div>
      ) : (
        <h2 className="h-[40vh] text-dark-1 text-5xl font-bold flex justify-center items-center">
          No Data Available
        </h2>
      )}
    </div>
  );
};

export default Donation;
