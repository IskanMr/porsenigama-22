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

  const assetsKatalog = `${process.env.PUBLIC_URL}/images/Katalog`;
  return (
    <>
      <HtmlHead title="Katalog" decription="[insert page description]" />
      <section
        style={{ marginTop: "-76px" }}
        className="relative w-full h-96 sm:h-screen bg-blue flex flex-col justify-center items-center"
      >
        <img
          src={vektor}
          alt=""
          style={{
            filter: "drop-shadow( 0px 10px 4px #00000050)",
          }}
          className="absolute md:w-16 sm:left-16 left-10 sm:bottom-32 lg:bottom-40 bottom-20 w-12 xl:left-24 xl:bottom-72 xl:w-24"
        />
        <img
          src={vektor2}
          alt=""
          className="absolute w-24 md:w-44 sm:top-20 sm:right-11 top-16 right-4 xl:right-24 xl:top-24  xl:w-56"
        />
        <div className="mt-16 sm:mt-0 relative flex text-center items-center justify-center text-5xl text-yellow font-universalserif w-2/3 sm:w-1/2 2xl:w-1/3  h-1/4">
          <img src={katalog} alt="" />
        </div>
        <img
          src={triangle}
          className="w-12 md:w-20 xl:w-24  mt-8 sm:mt-10  lg:mt-16 animate-bounce cursor-pointer"
          style={{
            filter: "drop-shadow( 0px 10px 4px #00000025)",
          }}
          onClick={() => {
            content.current.scrollIntoView({ behavior: "smooth" });
          }}
          alt=""
        />

        <img
          style={{
            filter:
              "drop-shadow( 0px -10px 4px #00000025) drop-shadow( 0px 10px 4px #00000025)",
          }}
          src={kertas}
          alt=""
          className="w-full absolute -bottom-1/7 sm:-bottom-1/6 md:-bottom-1/7 lg:-bottom-1/5 2xl:-bottom-1/3"
        />
      </section>
      <section
        ref={content}
        style={{ paddingBottom: "72px" }}
        className="w-full flex flex-wrap justify-center items-center pt-48 2xl:pt-72 gap-10 bg-purple"
      >
        {list.map(({ id, title, logo }, i) => (
          <div
            key={i}
            className="z-20 w-1/3 sm:w-1/4 lg:w-1/5 flex items-center justify-center"
          >
            <a href={`katalog/${id}`}>
              <img
                src={`${assetsKatalog}/supporter/${logo}`}
                alt={title}
                className="2xl:w-56 2xl:h-56 rounded-full"
              />
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export { Katalog };
