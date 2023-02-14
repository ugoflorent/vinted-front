import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoadind, setIsloading] = useState(true);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoadind ? (
    <p>Loading....</p>
  ) : (
    <div>
      <img src={data.product_image.secure_url} alt="product" />
      <p>{data.product_price} €</p>
      {data.product_details.map((detail, index) => {
        const key = Object.keys(detail)[0];
        return (
          <div key={index}>
            <span>{key} : </span>
            <span>{detail[key]}</span>
          </div>
        );
      })}
      <p>{data.product_name}</p>
      <p>{data.product_description}</p>
      <p>{data.owner.account.username}</p>
      <Link to="/payment">
        <button>Acheter</button>
      </Link>
    </div>
  );
};

export default Offer;
