import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import axios from "axios";
import { useState } from "react";
import Images from "./Images";
import ContainerBox from "./ContainerBox";
import { useEffect } from "react";
const Banner = () => {
  let [currentSlide, setCurrentSlide] = useState(0);
  let [bannerData, setBannerData] = useState({});

  useEffect(() => {
    async function fatchData() {
      let res = await axios.get("https://jewelry-backend.vercel.app/bannar");
      setBannerData(res.data);
    }
    fatchData();
  }, []);
  console.log(bannerData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,

    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          padding: "20px ",
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === currentSlide
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0px",
              }
            : {
                width: "30px",
                borderRight: "3px white solid",
                padding: "10px 0px",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                padding: "20px ",
                position: "absolute",
                top: "50%",
                left: "0%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === currentSlide
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                    }
                  : {
                      width: "30px",
                      borderRight: "3px white solid",
                      color: "transparent",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#F5F7F9]">
        <ContainerBox>
          <div>
            <Slider {...settings}>
              {bannerData.bannar?.map((item) => (
                <div>
                  <Images className="w-full" imgsrc={item.item} />
                </div>
              ))}
            </Slider>
          </div>
        </ContainerBox>
      </div>
    </>
  );
};
export default Banner;
