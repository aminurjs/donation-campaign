import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import CardContainer from "../../Components/CardContainer/CardContainer";

const Home = () => {
  const [search, setSearch] = useState();
  const handleSearch = (searchInput) => {
    setSearch(searchInput);
  };
  return (
    <main>
      <section>
        <Banner handleSearch={handleSearch}></Banner>
      </section>
      <section>
        <CardContainer search={search}></CardContainer>
      </section>
    </main>
  );
};

export default Home;
