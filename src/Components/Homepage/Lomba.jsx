import Slider from "react-slick";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Lomba.css";
import BorderLomba from "../../assets/images/homepage/border-lomba.png";
import BorderLombaMobile from "../../assets/images/homepage/border-lomba-mobile.png";
import TigaBintangLomba from "../../assets/images/homepage/3-bintang-lomba.png";
import ExplodeLombaKanan from "../../assets/images/homepage/explode-lomba-kanan.png";
import ExplodeLombaKiri from "../../assets/images/homepage/explode-lomba-kiri.png";
import ExplodeLombaKecil from "../../assets/images/homepage/explode-kecil-lomba.png";
import CabangSeni from "../../assets/images/homepage/seni-lomba.png";
import CabangOlahraga from "../../assets/images/homepage/olahraga-lomba.png";

const Lomba = () => {
  AOS.init({
    offset: window.innerHeight * 1.4,
  });
  AOS.refresh();
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="relative bg-blue pt-10 pb-24 md:pb-12 z-10">
        <img src={BorderLomba} className="mx-auto hidden md:block" alt="" />
        <img src={BorderLombaMobile} className="mx-auto md:hidden" alt="" />
        <p
          className="font-universalserif text-2xl md:text-2xl xl:text-4xl text-yellow absolute text-center md:hidden"
          style={{
            left: "49.5%",
            transform: "translate(-50%, -170%)",
          }}
        >
          LOMBA
        </p>
        <p
          className="font-universalserif text-2xl md:text-3xl xl:text-4xl text-yellow absolute text-center hidden md:block"
          style={{
            left: "49.5%",
            transform: "translate(-50%, -200%)",
          }}
        >
          LOMBA
        </p>
        <div
          className="pt-12 rounded-3rem w-3/4 xl:w-1/2 gap-24 lg mx-auto z-10 hidden md:flex md:flex-row"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="h-full w-full z-10">
            <img
              src={CabangSeni}
              className="mx-auto z-10 cursor-pointer shake"
              alt=""
            />
            {/* <p className="text-center">SENI</p> */}
          </div>
          <div className="h-full w-full z-10">
            <img
              src={CabangOlahraga}
              className="mx-auto z-10 cursor-pointer shake"
              alt=""
            />
            {/* <p>OLAHRAGA</p> */}
          </div>
        </div>
        <div
          className="mx-auto items-center justify-center md:hidden"
          data-aos="fade-down"
          data-aos-duration="1600"
        >
          <Slider {...settings}>
            <div className="xl:px-20 xl:py-5 px-7 py-10">
              {/* <img
                src={PatternLombaMobile}
                className="absolute mx-auto"
                alt=""
              /> */}
              <img src={CabangSeni} className="mx-auto cursor-pointer" alt="" />
            </div>
            <div className="xl:px-20 xl:py-5 px-7 py-10">
              {/* <img
                src={PatternLombaMobile}
                className="absolute mx-auto"
                alt=""
              /> */}
              <img
                src={CabangOlahraga}
                className="mx-auto cursor-pointer"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <img
          src={TigaBintangLomba}
          className="absolute top-24 left-24 hidden xl:block"
          alt=""
        />
        <img
          src={ExplodeLombaKanan}
          className="absolute right-24 top-12 hidden xl:block"
          alt=""
        />
        <img
          src={ExplodeLombaKiri}
          className="absolute top-72 left-24 z-0 hidden xl:block transform scale-75"
          alt=""
        />
        <img
          src={ExplodeLombaKecil}
          className="absolute top-80 right-48 z-0 hidden xl:block transform scale-90"
          alt=""
        />
      </div>
    </>
  );
};

export default Lomba;
