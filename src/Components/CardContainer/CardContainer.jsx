import { useEffect, useState } from "react";

const CardContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./donation.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="bg-white py-24">
      <div className="max-w-[1320px] mx-auto px-4">CardContainer</div>
    </div>
  );
};

export default CardContainer;
