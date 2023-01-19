import React from "react";
import "./Main.css";

export default function Main() {
  let imgArray = [
    {
      img: "https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__480.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089__480.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956__480.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317__480.jpg"
    }
  ];
  let paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
  voluptates labore repudiandae a eum quia itaque consectetur
  eaque iure est! Ea, adipisci. Lorem ipsum dolor sit amet
  consectetur, adipisicing elit. Aliquam, mollitia recusandae.`;
  return (
    <div>
      <main>
        <div className="section-1">
          <img
            src="https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg"
            alt=""
          />
        </div>
        <div className="section-2">
          {imgArray.map((el) => (
            <div className="card">
              <img src={el.img} alt="" />
              <p>{paragraph}</p>
              <a href="#">more..</a>
            </div>
          ))}
        </div>
        <div className="section-3">
          <div class="left-col">
            {imgArray.map((el) => (
              <img src={el.img} alt="" />
            ))}
          </div>
          <div className="right-col">
            <h3>Welcome to the side</h3>
            <p>
              <span></span>
              {paragraph}
              {paragraph}
            </p>
            <a href="#">more..</a>
          </div>
        </div>
      </main>
    </div>
  );
}
