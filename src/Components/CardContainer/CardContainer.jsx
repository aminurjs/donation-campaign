import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardContainer = ({ search }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./donation.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  let cardContainer = cards;
  if (search) {
    const searchCards = cards.filter((card) =>
      card.category.toLowerCase().includes(search.toLowerCase())
    );
    cardContainer = searchCards;
  }
  console.log(cardContainer);
  return (
    <div className="bg-white py-24">
      {cardContainer.length > 0 ? (
        <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardContainer.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      ) : (
        <h2 className="text-dark-1 text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-[80%] mx-auto leading-normal">
          Sorry, we could not find any matches for your search
        </h2>
      )}
    </div>
  );
};

CardContainer.propTypes = {
  search: PropTypes.string,
};

export default CardContainer;
