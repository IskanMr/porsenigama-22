import TeksTentangPorsenigama from "../../assets/images/homepage/teks-tentang-porseni-section-2.png";
import TigaBintang from "../../assets/images/homepage/3-bintang-section-2.png";
import BintangKuning from "../../assets/images/homepage/bintang-kuning-section-2.png";
import Explode from "../../assets/images/homepage/explode-section-2.png";

const Section2 = () => {
  return (
    <>
      <div className="z-10 relative" style={{ height: "100vh" }}>
        <div className="relative mb-10">
          <img src={TeksTentangPorsenigama} className="mx-auto z-10" alt="" />

          <h1
            className="font-universalserif text-3xl absolute text-purple"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            TENTANG PORSENIGAMA
          </h1>
        </div>
        <div
          className="z-10 rounded-large w-3/4 items-center justify-center mx-auto "
          style={{ backgroundColor: "#D9D9D9", height: "50vh" }}
        >
          <h2 className="font-montserrat font-bold text-2xl align-middle justify-center items-center flex leading-tes">
            MENGENAL PORSENIGAMA
          </h2>
        </div>
        <img src={BintangKuning} className="top-10 left-14 absolute" alt="" />
        <img src={TigaBintang} className="absolute right-0 top-10" alt="" />
        <img src={Explode} className="right-24 bottom-48 absolute" alt="" />
      </div>
    </>
  );
};

export default Section2;
