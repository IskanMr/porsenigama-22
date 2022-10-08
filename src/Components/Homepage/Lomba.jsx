import Slider from "react-slick";
import React from "react";
import BorderLomba from "../../assets/images/homepage/border-lomba.png";
import BorderLombaMobile from "../../assets/images/homepage/border-lomba-mobile.png";
import PatternLomba from "../../assets/images/homepage/pattern-lomba.png";
import PatternLombaMobile from "../../assets/images/homepage/pattern-lomba-mobile.png";
import TigaBintangLomba from "../../assets/images/homepage/3-bintang-lomba.png";
import ExplodeLombaKanan from "../../assets/images/homepage/explode-lomba-kanan.png";
import ExplodeLombaKiri from "../../assets/images/homepage/explode-lomba-kiri.png";
import ExplodeLombaKecil from "../../assets/images/homepage/explode-kecil-lomba.png";
import CabangSeni from "../../assets/images/homepage/seni-lomba.png"
import CabangOlahraga from "../../assets/images/homepage/olahraga-lomba.png"

const Lomba = () => {
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
      <div className="relative bg-blue pt-10 pb-24 md:pb-0 z-10">
        <img src={BorderLomba} className="mx-auto hidden md:block" alt="" />
        <img src={BorderLombaMobile} className="mx-auto md:hidden" alt="" />
        <p
          className="font-universalserif text-2xl md:text-2xl xl:text-4xl text-yellow absolute text-center"
          style={{
            left: "49.5%",
            transform: "translate(-50%, -170%)",
          }}
        >
          LOMBA
        </p>
        <div className="pt-10 rounded-3rem w-3/4 xl:w-1/2 gap-8 lg mx-auto z-10 hidden md:flex md:flex-row">
          <div className="h-full w-full pb-36 z-10">
            <img src={CabangSeni} className="mx-auto z-10" alt="" />
            {/* <p className="text-center">SENI</p> */}
          </div>
          <div className="h-full w-full pb-36 z-10">
          <img src={CabangOlahraga} className="mx-auto z-10" alt="" />
            {/* <p>OLAHRAGA</p> */}
          </div>
        </div>
        <div className="mx-auto items-center justify-center md:hidden">
          <Slider {...settings}>
            <div className="xl:px-20 xl:py-5 px-7 py-3">
              {/* <img src={PatternLombaMobile} className="mx-auto" alt="" /> */}
              <img src={CabangSeni} className="mx-auto cursor-pointer" alt="" />
            </div>
            <div className="xl:px-20 xl:py-5 px-7 py-3">
              <img src={CabangOlahraga} className="mx-auto cursor-pointer" alt="" />
            </div>
          </Slider>
        </div>
        <img
          src={TigaBintangLomba}
          className="absolute top-24 left-24 hidden md:block"
          alt=""
        />
        <img
          src={ExplodeLombaKanan}
          className="absolute right-24 top-12 hidden md:block"
          alt=""
        />
        <img
          src={ExplodeLombaKiri}
          className="absolute top-96 left-24 z-0 hidden md:block"
          alt=""
        />
        {/* <img
          src={ExplodeLombaKecil}
          className="absolute top-96 right-48 z-0 hidden md:block"
          alt=""
        /> */}
      </div>
    </>
  );
};

export default Lomba;
