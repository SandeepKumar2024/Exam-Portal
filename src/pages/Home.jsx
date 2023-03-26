import React from "react";
import Navbar from "../components/navbar/Navbar";
import Slider from "infinite-react-carousel";
import "./home.css";
import Testimonials from "../components/testimonials/Testimonials";
import { testiCont } from "../data";

const Home = () => {
  const images = [
    {
      img: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1581092333203-42374bcf7d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <div className="home">
      <div className="slider">
        {/* <Slider
          className="slides"
          dots
          autoplay
          autoplaySpeed="7000"
          duration="80"
        >
          {images.map((image) => (
            <img src={image.img} alt="" />
          ))}
        </Slider> */}
        <div className="contentsSlides">
          <h1>TEST YOURSELF </h1>
          <h2>FREE MOCK TEST </h2>
        </div>
        <img
          src="http://unblast.com/wp-content/uploads/2020/03/Marketing-Campaign-Vector-Illustration-1.jpg"
          alt=""
        />
      </div>
      <Slider className="slideTesti" dots autoplay>
        {testiCont.map((content) => (
          <Testimonials content={content} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
