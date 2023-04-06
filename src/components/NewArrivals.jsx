import React from "react";
import ContainerBox from "./ContainerBox";
import Titel from "./Titel";
import Product from "./Product";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import Slider from "react-slick";
const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: "110px",
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <>
      <ContainerBox>
        <div className="relative mt-8 lg:mt-32">
          <Titel titel="New Arrivals" />
          <button onClick={() => slider?.current?.slickNext()}>
            <BsArrowRightCircle className=" absolute top-[220%] right-0 z-10 h-[64px] w-[64px] rounded-full bg-[#979797] text-sm text-white  " />
          </button>
          <button onClick={() => slider?.current?.slickPrev()}>
            <BsArrowLeftCircle className=" absolute top-[220%] left-[-2%] z-20 h-[64px] w-[64px] rounded-full bg-[#979797] text-sm  text-white " />
          </button>
        </div>
        <Slider ref={slider} {...settings}>
          <div className="max-w-[370px]  ">
            <Product imgsrc="assets/Image (1).png" batch={true} />
          </div>
          <div className="max-w-[370px] ">
            <Product imgsrc="assets/Image (2).png" />
          </div>
          <div className="max-w-[370px] ">
            <Product imgsrc="assets/31_grande 1.png" batch={true} />
          </div>
          <div className="max-w-[370px] ">
            <Product imgsrc="assets/product1.png" />
          </div>
          <div className="max-w-[370px] ">
            <Product imgsrc="assets/Image (2).png" />
          </div>
        </Slider>
      </ContainerBox>
    </>
  );
};

export default NewArrivals;
