import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const DonationCard = ({ card }) => {
  const { id, card_img, card_bg, category_bg, color, category, title, price } =
    card;
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div style={card_bg} className="flex rounded-lg w-full">
      <img className="max-w-[35%] md:max-w-[40%]" src={card_img} alt="" />
      <div className="p-4 md:p-6 rounded-b-lg">
        <p
          style={category_bg}
          className="text-sm md:text-base py-1 px-2.5 rounded inline-block mb-2"
        >
          <span style={color}>{category}</span>
        </p>
        <h1 className="text-lg md:text-2xl font-semibold text-dark-1 mb-1">
          {title}
        </h1>
        <p style={color} className="font-semibold mb-5">
          {price}
        </p>
        <button
          onClick={handleDetails}
          style={{ backgroundColor: color.color }}
          className="text-white font-semibold text-sm md:text-lg px-3 md:px-4 py-1 md:py-2 rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  card: PropTypes.object,
};
export default DonationCard;
