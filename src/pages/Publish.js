import { useState } from "react";
import { Navigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import axios from "axios";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return token ? (
    <div
      className="publish"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="sales" onSubmit={handleSubmit}>
        <h2>Vends ton article !</h2>
        <label
          style={{
            backgroundColor: "white",
            color: "blue",
            width: "100vw",
          }}
          htmlFor="file"
        >
          Ajoute une image
        </label>
        <input
          id="file"
          style={{ display: "none", width: "100vw" }}
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        {picture && <img src={URL.createObjectURL(picture)} alt="product" />}
        <CustomInput title={"Titre"} state={title} setState={setTitle} />
        <CustomInput
          textArea
          title="Décris ton article"
          state={description}
          setState={setDescription}
        />
        <CustomInput title={"Marque"} state={brand} setState={setBrand} />
        <CustomInput title={"Taille"} state={size} setState={setSize} />
        <CustomInput title={"Couleur"} state={color} setState={setColor} />
        <CustomInput title={"Etat"} state={condition} setState={setCondition} />
        <CustomInput title={"Lieu"} state={city} setState={setCity} />
        <CustomInput title={"Prix"} state={price} setState={setPrice} />
        <input className="add" type="submit" value="Ajouter" />
      </form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
