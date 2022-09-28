import { useState, useEffect, useRef } from "react";
import { db } from "../resources/db";
import { HtmlHead } from "../Components/HtmlHead";
import { supporterList } from "../resources/dataKatalog";
import { NotFound } from "./404";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
import "swiper/swiper.min.css";

import kertas from "../assets/images/katalog/kertasdetail.png";
import triangle from "../assets/images/katalog/triangledetail.png";
import triangleMerah from "../assets/images/katalog/trianglemerah.png";
import triangleMerah2 from "../assets/images/katalog/trianglemerah2.png";
import paperTitle from "../assets/images/katalog/papertitle.png";
import namaFakultas from "../assets/images/katalog/namaFakultas.png";
import vektor from "../assets/images/katalog/vektor.png";
import vektor2 from "../assets/images/katalog/vektor2.png";

const assetsKatalog = `${process.env.PUBLIC_URL}/images/Katalog`;
const assetsCabang = `${process.env.PUBLIC_URL}/images/Cabang`;

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

  const assetsCabang = `${process.env.PUBLIC_URL}/images/Cabang`;
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

  useEffect(() => {
    console.log(selected);
    console.log(titleBawah);
  }, [selected, titleBawah]);

  const content = useRef(null);

  if (loading) return <div></div>;

  if (match) {
    return (
      <>
        <HtmlHead title={`${id}`} decription="[insert page description]" />
        <section
          style={{ marginTop: "-76px" }}
          className="relative w-full h-screen bg-orange flex flex-col justify-center items-center"
        >
          {/* <img
            src={vektor}
            alt=""
            style={{
              filter: "drop-shadow( 0px 10px 4px #00000050)",
            }}
            className="absolute left-24 bottom-72 w-24"
          />
          <img
            src={vektor2}
            alt=""
            className="absolute right-24 top-24  w-56"
          /> */}
          <div className="relative flex text-center items-center justify-center text-5xl text-yellow font-universalserif w-full h-full">
            <div className="w-1/2 flex justify-center items-center">
              <img
                src={`${assetsKatalog}/supporter/${Katalog.logo}`}
                alt=""
                className="rounded-full w-96 h-96"
              />
            </div>
            <div className="z-20 relative w-1/2 h-full flex flex-col -ml-28 items-center justify-center">
              <img src={namaFakultas} alt="" className="absolute" />
              <p className="z-20">{Katalog.title}</p>
              {/* <div className="bg-nama-fakultas z-20 w-full h-full">
                {Katalog.title}
              </div> */}
              <img
                src={triangle}
                className="absolute bottom-56 w-24 animate-bounce cursor-pointer"
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
            className="w-full absolute -bottom-1/4 2xl:-bottom-1/3"
          />
        </section>
        <section
          ref={content}
          style={{ paddingBottom: "72px" }}
          className="w-full flex flex-col justify-center items-center pt-40 2xl:pt-72 bg-yellow"
        >
          <div className="relative w-48 h-12 mb-12 flex text-center items-center">
            <img
              style={{
                filter: "drop-shadow( 5px 5px 4px #00000050)",
              }}
              src={paperTitle}
              alt=""
              className="absolute z-0"
            />
            <h1 className="w-full z-10 font-montserrat font-bold text-3xl">
              {titleBawah[selected] == "article"
                ? "Artikel"
                : titleBawah[selected] == "video"
                ? "Video Profil"
                : titleBawah[selected] == "chant"
                ? "Chant"
                : "Infografis"}
            </h1>
          </div>
          <div
            style={{ paddingRight: "15%", paddingLeft: "15%" }}
            className="flex items-center gap-4 w-full h-full"
          >
            <img
              src={triangleMerah2}
              className={`${begin ? "" : "cursor-pointer"} w-24 h-24`}
              id="swiper-back"
              // style={{ opacity: begin ? 0.5 : 1, rotate: "180deg" }}
              style={begin ? { opacity: 0.5 } : { opacity: 1 }}
              // onClick={() => swiper.slideTo(selected + 1)}
            />
            <Swiper
              centeredSlides={true}
              navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
              modules={[Navigation]}
              onSlideChange={(swiper) => {
                console.log(swiper);
                setSelected(swiper.activeIndex);
                setBegin(swiper.isBeginning);
                setEnd(swiper.isEnd);
              }}
              style={{ aspectRatio: "16/9" }}
              className="w-full"
            >
              {/* {Object.entries(KatalogDetail).map(([k, v]) => console.log(k, v))} */}
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
                <div className="relative text-xs xl:text-sm 2xl:text-base flex justify-center items-center"></div>
              </SwiperSlide>
              <SwiperSlide
                hidden={!titleBawah.some((data) => data === "video")}
              >
                <iframe
                  width="560"
                  height="315"
                  src={KatalogDetail.chant}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="relative text-xs xl:text-sm 2xl:text-base flex justify-center items-center"></div>
              </SwiperSlide>
              <SwiperSlide
                hidden={!titleBawah.some((data) => data === "chant")}
              >
                <iframe
                  width="560"
                  height="315"
                  src={KatalogDetail.chant}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="relative text-xs xl:text-sm 2xl:text-base flex justify-center items-center"></div>
              </SwiperSlide>
              <SwiperSlide
                hidden={!titleBawah.some((data) => data === "infografis")}
              >
                <iframe
                  width="560"
                  height="315"
                  src={KatalogDetail.chant}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="relative text-xs xl:text-sm 2xl:text-base flex justify-center items-center"></div>
              </SwiperSlide>
            </Swiper>
            <img
              src={triangleMerah}
              className={`${end ? "" : "cursor-pointer"} w-24 h-24`}
              id="swiper-forward"
              style={end ? { opacity: 0.5 } : { opacity: 1 }}
              // onClick={() => swiper.slidePrev()}
            />
          </div>
        </section>
      </>
    );
  } else if (false) {
    // return (
    //   <div className="bg-purple">
    //     {/* Start of Header */}
    //     <div className="lg:mb-72 lg:h-screen relative">
    //       <img
    //         className="lg:-mt-20 pointer-events-none"
    //         src={`${assetsKatalog}/bg.png`}
    //         alt=""
    //       />
    //       {window.innerWidth > 1024 ? (
    //         <button
    //           className={`absolute left-1/2 bottom-8`}
    //           style={{ maxWidth: "5%" }}
    //           onClick={() =>
    //             content.current.scrollIntoView({ behavior: "smooth" })
    //           }
    //         >
    //           <img src={`${assetsCabang}/arrow-bottom.png`} alt="" />
    //         </button>
    //       ) : (
    //         <></>
    //       )}
    //     </div>
    //     {/* End of Header */}
    //     {/* Logo  */}
    //     <div
    //       className="relative flex flex-col items-center justify-center"
    //       ref={content}
    //     >
    //       <img
    //         className=" pointer-events-none relative w-60"
    //         src={`${assetsKatalog}/supporter/${Katalog.logo}`}
    //         alt=""
    //       />
    //       <p className="text-center md:my-4 font-sansPro text-white font-bold text-md md:text-5xl">
    //         {" "}
    //         {Katalog.title}{" "}
    //       </p>
    //       <div>
    //         <img
    //           src={`${assetsKatalog}/yellow-rectangle.png`}
    //           alt="ornament kanan"
    //           className="hidden md:block absolute top-40 right-0"
    //           style={{ width: "2%" }}
    //         />
    //       </div>
    //     </div>
    //     {/* End of logo  */}
    //     {/* Button */}
    //     <div className="grid grid-cols-1 mx-4 md:mx-20 text-center ">
    //       <div
    //         className={
    //           Katalog.article === ""
    //             ? "hidden"
    //             : toggleState === 1
    //             ? active
    //             : inactive
    //         }
    //         onClick={() => toggleTab(1)}
    //       >
    //         Artikel
    //       </div>
    //       <div
    //         className={
    //           toggleState === 1
    //             ? "mt-8 text-white text-sm md:text-2xl font-bold  "
    //             : "hidden"
    //         }
    //       >
    //         {Katalog.article}
    //       </div>
    //     </div>
    //     <div className="cursor-pointer mt-8  grid grid-cols-2 md:grid-cols-3 mx-4 md:mx-20 gap-x-4 md:gap-x-12 gap-y-4 text-center ">
    //       <div
    //         className={
    //           Katalog.video === ""
    //             ? "hidden"
    //             : toggleState === 2
    //             ? active
    //             : inactive
    //         }
    //         onClick={() => toggleTab(2)}
    //       >
    //         Video Profil
    //       </div>
    //       <div
    //         className={
    //           Katalog.chant === ""
    //             ? "hidden"
    //             : toggleState === 3
    //             ? active
    //             : inactive
    //         }
    //         onClick={() => toggleTab(3)}
    //       >
    //         Chant
    //       </div>
    //       <div
    //         className={
    //           Katalog.infografis === ""
    //             ? "hidden"
    //             : toggleState === 4
    //             ? active
    //             : inactive
    //         }
    //         onClick={() => toggleTab(4)}
    //       >
    //         Infografis
    //       </div>
    //     </div>
    //     {/*End of button */}
    //     {/* Start of content  */}
    //     <div className="relative grid grid-cols-1 text-justify justify-items-center  mt-5 lg:mt-10 mx-10 lg:mx-20 pb-10">
    //       <div className={toggleState === 2 ? "w-11/12 md:w-1/2" : "hidden"}>
    //         {/* <video
    //             controls
    //             src={`${assetsKatalog}/video/${Katalog.video}`}
    //           ></video> */}
    //         <iframe
    //           width="560"
    //           height="315"
    //           src={Katalog.video}
    //           title="YouTube video player"
    //           frameBorder="0"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowFullScreen
    //         ></iframe>
    //       </div>
    //       <div className={toggleState === 3 ? "w-11/12 md:w-1/2" : "hidden"}>
    //         <iframe
    //           width="560"
    //           height="315"
    //           src={Katalog.chant}
    //           title="YouTube video player"
    //           frameBorder="0"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowFullScreen
    //         ></iframe>
    //       </div>
    //       <div className={toggleState === 4 ? "w-11/12 md:w-1/2 " : "hidden"}>
    //         <img
    //           className=" "
    //           src={`${assetsKatalog}/infografis/${Katalog.infografis}`}
    //           alt="Infografis"
    //         />
    //       </div>
    //     </div>
    //     {/* End of Content  */}
    //     <div className="relative">
    //       <img
    //         src={`${assetsKatalog}/yellow-rectangle.png`}
    //         alt="ornament kanan"
    //         className="hidden md:block absolute bottom-0 left-0"
    //         style={{ width: "2%" }}
    //       />
    //     </div>
    //   </div>
    // );
  } else {
    return <NotFound />;
  }
};

export { KatalogDetail };
