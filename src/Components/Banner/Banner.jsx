const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/yp4ZVNr/Rectangle-4281.png)] bg-no-repeat bg-cover bg-center">
      <div className="bg-[#FFFFFFF2] pt-60 pb-52">
        <h1 className="text-3xl md:text-5xl text-dark-1 text-center font-bold mb-10">
          I Grow By Helping People In Need
        </h1>
        <div className="max-w-sm md:max-w-[470px] text-center mx-auto ">
          <input
            className="w-3/4 p-4 text-dark-1 placeholder:text-[#0B0B0B66] bg-white outline-none border border-gray-300 rounded-l-lg"
            type="text"
            placeholder="Search here...."
          />
          <button className="w-1/4 text-white font-semibold py-4 rounded-r-lg bg-[#FF444A]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
