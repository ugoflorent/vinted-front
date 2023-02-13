import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState();
  const [imageToDisplay, setImageToDisplay] = useState();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const formData = new FormData();

            formData.append("email", email);
            formData.append("username", username);
            formData.append("picture", picture);
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
              formData,
              {
                headers: {
                  authorization: "Bearer Voici mon token",
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log(response);
            setImageToDisplay(response.data);
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={username}
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        <input type="submit" />
      </form>
      {imageToDisplay && <img src={imageToDisplay.secure_url} alt="" />}
    </div>
  );
};

export default Publish;
