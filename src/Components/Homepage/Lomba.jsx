import Slider from "react-slick";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Lomba.css";
import { Link } from "react-router-dom";
import BorderLomba from "../../assets/images/homepage/border-lomba.png";
import BorderLombaMobile from "../../assets/images/homepage/border-lomba-mobile.png";
import TigaBintangLomba from "../../assets/images/homepage/3-bintang-lomba.png";
import ExplodeLombaKanan from "../../assets/images/homepage/explode-lomba-kanan.png";
import ExplodeLombaKiri from "../../assets/images/homepage/explode-lomba-kiri.png";
import ExplodeLombaKecil from "../../assets/images/homepage/explode-kecil-lomba.png";
import CabangSeni from "../../assets/images/homepage/seni-lomba.png";
import CabangOlahraga from "../../assets/images/homepage/olahraga-lomba.png";

const Lomba = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();
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
      <div className="relative bg-blue z-10">
        <img
          src={BorderLomba}
          className="mx-auto hidden md:block pt-10"
          alt=""
        />
        <img
          src={BorderLombaMobile}
          className="mx-auto md:hidden pt-16"
          alt=""
        />
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
          className="pt-8 pb-16 rounded-3rem w-3/4 xl:w-1/2 gap-24 lg mx-auto z-10 hidden md:flex md:flex-row"
          data-aos="zoom-in-up"
          data-aos-duration="2750"
        >
          <div className="h-full w-full z-10">
            <Link to="cabang">
              <img
                src={CabangSeni}
                className="mx-auto z-10 cursor-pointer shake-right"
                alt=""
              />
            </Link>
            {/* <p className="text-center">SENI</p> */}
          </div>
          <div className="h-full w-full z-10">
            <Link to="cabang">
              <img
                src={CabangOlahraga}
                className="mx-auto z-10 cursor-pointer shake-left"
                alt=""
              />
            </Link>
            {/* <p>OLAHRAGA</p> */}
          </div>
        </div>
        <div
          className="mx-auto items-center justify-center md:hidden pb-24"
          data-aos="zoom-in-up"
          data-aos-duration="2400"
        >
          <Slider {...settings}>
            <div className="xl:px-20 xl:py-5 px-7 py-10">
              {/* <img
                src={PatternLombaMobile}
                className="absolute mx-auto"
                alt=""
              /> */}
              <Link to="cabang">
                <img
                  src={CabangSeni}
                  className="mx-auto cursor-pointer transform translate-x-4"
                  alt=""
                />
              </Link>
            </div>
            <div className="xl:px-20 xl:py-5 px-7 py-10">
              {/* <img
                src={PatternLombaMobile}
                className="absolute mx-auto"
                alt=""
              /> */}
              <Link to="cabang">
                <img
                  src={CabangOlahraga}
                  className="mx-auto cursor-pointer transform -translate-x-2"
                  alt=""
                />
              </Link>
            </div>
          </Slider>
        </div>
        <img
          src={TigaBintangLomba}
          className="absolute top-20 left-8 xl:left-24 transform scale-50 lg:scale-75 xl:scale-90 hidden lg:block"
          alt=""
        />
        <img
          src={ExplodeLombaKanan}
          className="absolute right-1 top-12 transform scale-40 lg:scale-50 xl:scale-90 xl:right-32 hidden lg:block"
          alt=""
        />
        <img
          src={ExplodeLombaKiri}
          className="absolute -bottom-16 lg:-bottom-12 xl:left-20 xl:bottom-12 -left-5 z-0 transform scale-40 lg:scale-50 xl:scale-90 hidden lg:block"
          alt=""
        />
        <img
          src={ExplodeLombaKecil}
          className="absolute bottom-5 right-32 z-0 transform scale-90 hidden xl:block"
          alt=""
        />
      </div>
    </>
  );
};

export default Lomba;
