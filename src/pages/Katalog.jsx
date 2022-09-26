import { useRef } from "react";
import { supporterList } from "../resources/dataKatalog";
import { HtmlHead } from "../Components/HtmlHead";
import kertas from "../assets/images/katalog/kertas2.png";
import triangle from "../assets/images/katalog/triangle.png";
import katalog from "../assets/images/katalog/katalog.png";
import vektor from "../assets/images/katalog/vektor.png";
import vektor2 from "../assets/images/katalog/vektor2.png";

const Katalog = () => {
  const list = supporterList;
  const content = useRef(null);
  const width = window.innerWidth;

  const assetsCabang = `${process.env.PUBLIC_URL}/images/Cabang`;
  const assetsKatalog = `${process.env.PUBLIC_URL}/images/Katalog`;
  return (
    <>
      <HtmlHead title="Katalog" decription="[insert page description]" />
      <section
        style={{ marginTop: "-76px" }}
        className="relative w-full h-screen bg-blue flex flex-col justify-center items-center"
      >
        <img
          src={vektor}
          alt=""
          style={{
            filter: "drop-shadow( 0px 10px 4px #00000050)",
          }}
          className="absolute left-24 bottom-72 w-24"
        />
        <img src={vektor2} alt="" className="absolute right-24 top-24  w-56" />
        <div className="relative flex text-center items-center justify-center text-5xl text-yellow font-universalserif w-1/3  h-1/4">
          {/* <span className="absolute -skew-x-12 w-full h-full bg-[#E85126]"></span> */}
          <img src={katalog} alt="" />
          {/* <img src={koran} alt="" className="absolute w-full h-full" />
          <img
            src={pattern}
            style={{
              filter: "drop-shadow( 10px 13px 4px #00000025)",
            }}
            className="absolute w-full h-full z-10"
            alt=""
          />

          <h1 className="z-20 drop-shadow-xl">KATALOG SUPORTER</h1> */}
        </div>
        <img
          src={triangle}
          className="w-24 mt-16 animate-bounce cursor-pointer"
          style={{
            filter: "drop-shadow( 0px 10px 4px #00000025)",
          }}
          onClick={() => {
            content.current.scrollIntoView({ behavior: "smooth" });
          }}
          alt=""
        />
        {/* <div
          className="w-16 h-16 relative animate-bounce cursor-pointer"
        > */}
        {/* <svg
          onClick={() => content.current.scrollIntoView({ behavior: "smooth" })}
          xmlns="http://www.w3.org/2000/svg"
          fill="#E41D21"
          className="w-24 h-24 flex justify-center items-center animate-bounce"
          viewBox="0 100 320 512"
        >
          <path
            className="cursor-pointer"
            onClick={() =>
              content.current.scrollIntoView({ behavior: "smooth" })
            }
            d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
          />
        </svg> */}
        {/* </div> */}
        <img
          style={{
            filter:
              "drop-shadow( 0px -10px 4px #00000025) drop-shadow( 0px 10px 4px #00000025)",
          }}
          src={kertas}
          alt=""
          className="absolute -bottom-60"
        />
      </section>
      <section
        ref={content}
        style={{ paddingBottom: "72px" }}
        className="w-full flex flex-wrap justify-center items-center pt-44                                                  gap-10 bg-purple"
      >
        {[...Array(20)].map((_, i) => (
          <a style={{ width: "224px", height: "224px" }} href="#">
            <div
              style={{ backgroundColor: "#D9D9D9" }}
              className="w-56 h-56 flex justify-center items-center"
            >
              Logo Suporter
            </div>
          </a>
        ))}
      </section>
    </>
  );
};

export { Katalog };
