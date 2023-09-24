import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [cards, setCards] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("../donation.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const findData = cards?.find((card) => card.id == id);
  if (!findData) {
    return;
  }
  console.log(findData);

  return (
    <div className="max-w-[1320px] mx-auto mt-16 mb-28 px-4">
      <div className="relative mb-14">
        <img
          className="max-h-[700px] w-full rounded-lg"
          src={findData.cover}
          alt=""
        />
        <div className="absolute left-0 bottom-0 p-9 rounded-b-lg bg-[#0b0b0b80] w-full">
          <button
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
