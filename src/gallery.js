import "./styles.css";
import { useState } from "react";
import axios from "axios";

export default function Gallery() {
  const [img, setImg] = useState([]);
  const getImage = () => {
    let txt = document.querySelector("input").value;
    let sc =
      "https://api.unsplash.com/search/photos?query=" +
      txt +
      "&client_id=Q6o5nJfbt-o7Lu729i9xnrAwtmKhwAXxUgR1pC-88e8&orientation=landscape";
    axios.get(sc).then((response) => {
      console.log(sc);
      console.log(txt);
      console.log(response);
      console.log(response.data.results);
      setImg(response.data.results);
    });
  };

  return (
    <div className="container main">
      <h3>Image Search App</h3>
      <h1>What do you want?</h1>
      <input id="srch" type="" placeholder="Search an Image" />
      <i className="fas fa-search" onClick={getImage}></i>
      <div className="Gallery">
        <div className="row">
          {img.map((value, index) => {
            return (
              <div key={index} className="col-12 col-md-4">
                <img src={value.urls.small} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
