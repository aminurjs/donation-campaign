import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [cards, setCards] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("../donation.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, [id]);
  const findData = cards?.find((card) => card.id === id);
  if (!findData) {
    return;
  }

  const handleSetIdLocal = () => {
    const cardsLocalJson = localStorage.getItem("cards");
    const cardsLocal = JSON.parse(cardsLocalJson);
    if (cardsLocal) {
      const findLocalCard = cardsLocal.find((card) => card.id === findData.id);
      if (findLocalCard) {
        return;
      }
      const localAllCards = [...cardsLocal, findData];
      const jsonId = JSON.stringify(localAllCards);
      localStorage.setItem("cards", jsonId);
      return;
    } else {
      const localNewCard = [findData];
      const jsonNewCard = JSON.stringify(localNewCard);
      localStorage.setItem("cards", jsonNewCard);
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto mt-16 mb-28 px-4">
      <div className="min-h-[300px] md:min-h-[400px] lg:min-h-[500px] relative mb-14">
        <img className=" w-full rounded-lg" src={findData.cover} alt="" />
        <div className="absolute left-0 bottom-0 p-9 rounded-b-lg bg-[#0b0b0b80] w-full">
          <button
            onClick={handleSetIdLocal}
            style={{ backgroundColor: findData.color.color }}
            className="text-white font-semibold text-xl px-7 py-4 rounded"
          >
            Donate {findData.price}
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-dark-1 mb-6">{findData.title}</h2>
      <p className="text-dark-2 text-lg leading-relaxed text-justify">
        {findData.description}
      </p>
    </div>
  );
};

export default Details;
