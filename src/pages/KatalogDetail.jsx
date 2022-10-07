import { useState, useEffect, useRef } from "react";
import { HtmlHead } from "../Components/HtmlHead";
import { supporterList } from "../resources/dataKatalog";
import { NotFound } from "./404";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/swiper.min.css";

import kertas from "../assets/images/katalog/kertasdetail.png";
import triangle from "../assets/images/katalog/triangledetail.png";
import triangleMerah from "../assets/images/katalog/trianglemerah.png";
import triangleMerah2 from "../assets/images/katalog/trianglemerah2.png";
import paperTitle from "../assets/images/katalog/papertitle.png";
import namaFakultas from "../assets/images/katalog/namaFakultas.png";

const KatalogDetail = (props) => {
  const id = props.match.params.id;
  const [match, setMatch] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(0);
  const [end, setEnd] = useState(false);
  const [begin, setBegin] = useState(true);
  const [Katalog, setKatalog] = useState({});
  const [KatalogDetail, setKatalogDetail] = useState({});
  const [titleBawah, setTitleBawah] = useState([]);

  const assetsKatalog = `${process.env.PUBLIC_URL}/images/Katalog`;

  useEffect(() => {
    const check = supporterList.find((item) => item.id === id);
    setLoading(false);
    if (!check) setMatch(false);
    else {
      setKatalog(check);
      setKatalogDetail(check.detail);
      setTitle(check.detail);
    }
  }, []);

  const setTitle = (data) => {
    Object.entries(data).map(([k, v]) => {
      if (v !== "") {
        setTitleBawah((prev) => [...prev, k]);
      }
    });
  };

  const content = useRef(null);

  if (loading) return <div className="bg-blue h-screen"></div>;

  if (match) {
    return (
      <>
        <HtmlHead title={`${id}`} decription="[insert page description]" />
        <section
          style={{
            marginTop: "-76px",
            height: titleBawah.length == 0 ? "125vh" : "100vh",
          }}
          className={`relative w-full ${
            titleBawah.length == 0 ? "bg-blue" : "bg-orange"
          } flex flex-col justify-center items-center`}
        >
          <div className="relative flex flex-col sm:flex-row text-center items-center justify-center w-full h-full">
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={`${assetsKatalog}/supporter/${Katalog.logo}`}
                alt=""
                className="mt-32 sm:mt-0 rounded-full sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96"
              />
            </div>
            <div className="-mt-20 sm:-mt-0 z-20 relative w-full  sm:w-1/2 h-full flex flex-col 2xl:-ml-28 items-center justify-center">
              <img src={namaFakultas} alt="" className="absolute" />
              <p
                className={`z-20  truncate text-xl sm:text-2xl xl:text-4xl text-yellow font-universalserif`}
              >
                {Katalog.title}
              </p>
              <img
                src={triangle}
                className={`absolute ${
                  titleBawah.length == 0 && "hidden"
                } bottom-24 sm:bottom-32 md:bottom-96 lg:bottom-56 w-16 lg:w-20 xl:w-24 animate-bounce cursor-pointer`}
                style={{
                  filter: "drop-shadow( 0px 10px 4px #00000050)",
                }}
                onClick={() => {
                  content.current.scrollIntoView({ behavior: "smooth" });
                }}
                alt=""
              />
            </div>
          </div>
          <img
            style={{
              filter:
                "drop-shadow( 0px -10px 4px #00000025) drop-shadow( 0px 10px 4px #00000025)",
            }}
            src={kertas}
            alt=""
            className={`w-full absolute ${
              titleBawah.length == 0 && "hidden"
            } -bottom-1/10 sm:-bottom-1/4 md:-bottom-1/8 lg:-bottom-1/4 xl:-bottom-1/4 2xl:-bottom-1/3`}
          />
        </section>
        <section
          ref={content}
          style={{ paddingBottom: "72px" }}
          className={`w-full flex flex-col justify-center items-center pt-40 2xl:pt-72 bg-yellow ${
            titleBawah.length == 0 && "hidden"
          }`}
        >
          {console.log(titleBawah.length)}
          <div className="-mt-16 md:-mt-0 relative w-48 h-12 mb-12 flex text-center items-center">
            <img
              style={{
                filter: "drop-shadow( 5px 5px 4px #00000050)",
              }}
              src={paperTitle}
              alt=""
              className="absolute z-0"
            />
            <h1 className="w-full z-10 font-montserrat font-bold text-xl md:text-3xl">
              {titleBawah[selected] == "article"
                ? "Artikel"
                : titleBawah[selected] == "video"
                ? "Video Profil"
                : titleBawah[selected] == "chant"
                ? "Chant"
                : "Infografis"}
            </h1>
          </div>
          <div className="flex items-center gap-4 w-full h-full px-3 sm:px-1/20 lg:px-1/10">
            <img
              src={triangleMerah2}
              className={`${begin ? "" : "cursor-pointer"} ${
                begin ? "" : "hover:scale-110"
              } duration-100 transform  w-8 h-8 md:w-14 md:h-14 xl:w-20 xl:h-20`}
              id="swiper-back"
              hidden={titleBawah.length === 1}
              style={begin ? { opacity: 0.5 } : { opacity: 1 }}
              alt="button-back"
            />
            <Swiper
              centeredSlides={true}
              navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
              modules={[Navigation]}
              onSlideChange={(swiper) => {
                setSelected(swiper.activeIndex);
                setBegin(swiper.isBeginning);
                setEnd(swiper.isEnd);
              }}
              style={{
                aspectRatio:
                  titleBawah[selected] == "infografis" ? "unset" : "16/9",
                height: titleBawah[selected] == "infografis" ? "100%" : "auto",
              }}
              className="w-full"
            >
              <SwiperSlide
                hidden={!titleBawah.some((data) => data === "article")}
                className="bg-red-500"
              >
                <iframe
                  style={{ aspectRatio: "16/9" }}
                  className="w-full"
                  src={KatalogDetail.chant}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
              <SwiperSlide
                hidden={!titleBawah.some((data) => data === "video")}
                className="bg-gray-500"
              >
                <iframe
                  style={{ aspectRatio: "16/9" }}
                  className="w-full"
                  src={KatalogDetail.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
              <SwiperSlide
                hidden={!titleBawah.some((data) => data === "chant")}
                className="bg-gray-500"
              >
                <iframe
                  style={{ aspectRatio: "16/9" }}
                  className="w-full"
                  src={KatalogDetail.chant}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
              <SwiperSlide
                hidden={!titleBawah.some((data) => data === "infografis")}
                className="flex justify-center items-center"
              >
                {console.log(!titleBawah.some((data) => data === "infografis"))}
                <img
                  src={`${assetsKatalog}/infografis/${KatalogDetail.infografis}`}
                  alt={" Infografis" + Katalog.title}
                  className="h-full"
                />
              </SwiperSlide>
            </Swiper>
            <img
              src={triangleMerah}
              className={`${end ? "" : "cursor-pointer"} ${
                end ? "" : "hover:scale-110"
              } duration-100 transform  w-8 h-8 md:w-14 md:h-14 xl:w-20 xl:h-20`}
              id="swiper-forward"
              hidden={titleBawah.length === 1}
              style={end ? { opacity: 0.5 } : { opacity: 1 }}
              alt="button-next"
            />
          </div>
        </section>
      </>
    );
  } else {
    return <NotFound />;
  }
};

export { KatalogDetail };
