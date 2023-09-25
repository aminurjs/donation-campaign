import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [filterCards, setFilterCards] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    const localItemsJson = localStorage.getItem("cards");
    const localItems = JSON.parse(localItemsJson);
    setFilterCards(localItems);
  }, []);
  return (
    <div className="max-w-[1320px] mx-auto mt-48 mb-28 px-4">
      {filterCards ? (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {filterCards.length > 4 && !seeAll
              ? filterCards
                  .slice(0, 4)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))
              : filterCards.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))}
          </div>{" "}
          <div
            className={`text-center ${
              seeAll || filterCards.length <= 4 ? "hidden" : ""
            }`}
          >
            <button
              onClick={() => setSeeAll(true)}
              className="rounded-lg bg-[#009444] px-7 py-3.5 text-white font-semibold"
            >
              See All
            </button>
          </div>
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
