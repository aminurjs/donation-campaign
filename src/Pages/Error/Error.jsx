import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4">
      <div className="h-[60vh] overflow-hidden">
        <img
          className="max-w-[500px] mx-auto"
          src="https://i.ibb.co/3dwMj24/error404.jpg"
          alt=""
        />
      </div>
      <Link to={-1} className="text-center block">
        <button className="text-xl rounded-lg bg-[#009444] px-10 py-4 text-white font-semibold">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default Error;
