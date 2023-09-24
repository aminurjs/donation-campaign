import PropType from "prop-types";
const Card = ({ card }) => {
  const { category_img, title, card_bg, color, category, category_bg } = card;
  console.log(card_bg, color);
  return (
    <div>
      <img className="w-full" src={category_img} alt="" />
      <div style={card_bg} className="p-4 rounded-lg">
        <p
          style={category_bg}
          className="py-1 px-2.5 rounded inline-block mb-2"
        >
          <span style={color}>{category}</span>
        </p>
        <h1 style={color} className="text-xl font-semibold">
          {title}
        </h1>
      </div>
    </div>
  );
};
Card.propTypes = { card: PropType.object };
export default Card;
