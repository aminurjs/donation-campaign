import PropTypes from "prop-types";

const Banner = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(e.target.search.value);
  };

  return (
    <div className="bg-[url(https://i.ibb.co/yp4ZVNr/Rectangle-4281.png)] bg-no-repeat bg-cover bg-bottom">
      <div className="bg-[#FFFFFFEB] pt-60 pb-52">
        <h1 className="text-3xl md:text-5xl text-dark-1 text-center font-bold mb-10">
          I Grow By Helping People In Need
        </h1>
        <div className="max-w-sm md:max-w-[470px] text-center mx-auto ">
          <form onSubmit={handleSubmit}>
            <input
              className="w-3/4 p-4 text-dark-1 placeholder:text-[#0B0B0B66] bg-white outline-none border border-gray-300 rounded-l-lg"
              type="text"
              name="search"
              placeholder="Search here...."
            />
            <input
              className="w-1/4 text-white font-semibold py-4 rounded-r-lg bg-[#FF444A] cursor-pointer"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  handleSearch: PropTypes.func,
};

export default Banner;
