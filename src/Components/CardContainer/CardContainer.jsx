import { useEffect, useState } from "react";
import Card from "./Card";

const CardContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./donation.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="bg-white py-24">
      <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
