import TeksTentangPorsenigama from "../../assets/images/homepage/bg-text-tentang-porsenigama.png";
import TigaBintang from "../../assets/images/homepage/3-bintang-section-2.png";
import BintangKuning from "../../assets/images/homepage/bintang-kuning-section-2.png";
import Explode from "../../assets/images/homepage/explode-section-2.png";
import BgTeksTentangPorsenigamaMobile from "../../assets/images/homepage/bg-text-tentang-mobile.png";
import TigaBintangMobile from "../../assets/images/homepage/3-bintang-mobile.png";
import BintangKuningMobile from "../../assets/images/homepage/bintang-kuning-mobile.png";

const Section2 = () => {
  return (
    <>
      <div className="z-10 relative mb-24">
        <div className="relative mb-10">
          <img
            src={BgTeksTentangPorsenigamaMobile}
            className="mx-auto pt-24 md:hidden"
            alt=""
          />
          <img
            src={TeksTentangPorsenigama}
            className="mx-auto z-10 hidden md:block pt-32"
            alt=""
          />
          <h1
            className="font-universalserif text-xl absolute text-center text-purple md:hidden"
            style={{
              top: "75%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            TENTANG PORSENIGAMA
          </h1>
          <h1
            className="font-universalserif text-3xl absolute text-purple hidden md:block"
            style={{
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            TENTANG PORSENIGAMA
          </h1>
        </div>
        <div
          className="z-10 rounded-large w-3/4 items-center justify-center mx-auto py-80 md:py-56"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          {/* <h2 className="font-montserrat font-bold text-2xl align-middle justify-center items-center flex leading-tes">
            MENGENAL PORSENIGAMA
          </h2> */}
          <h2 className="font-montserrat font-bold text-xl flex items-center justify-center text-center">
            MENGENAL PORSENIGAMA
          </h2>
        </div>
        <img
          src={BintangKuning}
          className="top-0 pt-32 left-0 xl:px-10 px-5 absolute hidden md:block"
          alt=""
        />
        <img
          src={TigaBintang}
          className="absolute right-0 px-1 xl:px-10 top-0 py-32 hidden md:block"
          alt=""
        />
        <img
          src={Explode}
          className="right-0 xl:pr-20 -bottom-24 absolute hidden md:block"
          alt=""
        />
        <img
          src={TigaBintangMobile}
          className="absolute right-0 top-44 md:hidden"
          alt=""
        />
        <img
          src={BintangKuningMobile}
          className="absolute left-4 top-48 md:hidden"
          alt=""
        />
      </div>
    </>
  );
};

export default Section2;
