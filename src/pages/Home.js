//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import OfferCard from "../components/OfferCard";

const Home = ({ search }) => {
  const [data, setData] = useState();
  const [isLoadind, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search]);

  return isLoadind ? (
    <p>loading...</p>
  ) : (
    <div
      // className="offer-card"
      style={{
        alignItems: "center",

        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.offers.map((offer) => {
        return <OfferCard offerInfos={offer} key={offer._id} />;
      })}
    </div>
  );
};

export default Home;
