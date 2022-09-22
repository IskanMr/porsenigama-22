import { useRef } from "react";
import { supporterList } from "../resources/dataKatalog";
import { HtmlHead } from "../Components/HtmlHead";
import pattern from "../assets/images/katalog/pattern/50863.svg";

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
        className="w-full h-screen bg-blue flex flex-col justify-center items-center"
      >
        <div className="relative flex text-center items-center justify-center text-5xl text-yellow font-universalserif w-1/3  h-1/4">
          {/* <span className="absolute -skew-x-12 w-full h-full bg-[#E85126]"></span> */}
          <img
            src={pattern}
            style={{
              filter: "drop-shadow( 10px 13px 4px #00000025)",
            }}
            className="absolute w-full h-full"
            alt=""
          />

          <h1 className="z-10 drop-shadow-xl">KATALOG SUPORTER</h1>
        </div>
        <button
          className="w-16 h-16 animate-bounce"
          onClick={() => content.current.scrollIntoView({ behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#E41D21"
            viewBox="0 0 320 512"
          >
            <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
          </svg>
        </button>
      </section>
      <section
        ref={content}
        style={{ paddingBottom: "72px" }}
        className="w-full -mt-14 flex flex-wrap justify-center items-center pt-32 gap-10"
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
