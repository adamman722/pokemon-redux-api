import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PTeamCard from "../team cards/PTeamCard";
import { useSelector, useDispatch } from "react-redux";

function SlickAutoPlay(props) {
  const homePageTrainers = useSelector((state) => state.homePageTrainer.value);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900000,
    autoplaySpeed: 200,
    cssEase: "linear",
  };
  console.log(homePageTrainers);

  const slickTrainers = homePageTrainers.map((trainer) => {
    return (
      <div>
        <PTeamCard data={trainer} />
      </div>
    );
  });
  return (
    <div>
      <Slider {...settings}>{slickTrainers}</Slider>
    </div>
  );
}

export default SlickAutoPlay;
