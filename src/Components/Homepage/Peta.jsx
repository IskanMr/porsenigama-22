import BgTextInporse from "../../assets/images/homepage/bg-text-peta.png";
import ExplodePetaKiri from "../../assets/images/homepage/explode-peta-kiri.png";
import ExplodePetaKanan from "../../assets/images/homepage/explode-section-2.png";
import TigaBintangPeta from "../../assets/images/homepage/3-bintang-peta.png";
import RipPaperPetaKiri from "../../assets/images/homepage/rip-paper-peta-kiri.png";
import RipPaperPetaKanan from "../../assets/images/homepage/rip-paper-peta-kanan.png";

const Peta = () => {
  return (
    <>
      <div className="relative bg-purple py-10 pb-80">
        <img
          src={BgTextInporse}
          className="mx-auto pb-5 transform -translate-x-2"
          alt=""
        />
        <p
          className="font-universalserif text-3xl text-textpeta absolute text-center"
          style={{
            top: "9%",
            left: "50%",
            transform: "translate(-50%, -9%)",
          }}
        >
          PETA
        </p>
        <div className="bg-borderpeta mx-auto w-2/3 h-24rem"></div>
        <img
          src={ExplodePetaKiri}
          className="absolute left-10 hidden md:block top-0 pt-96"
          alt=""
        />
        <img
          src={ExplodePetaKanan}
          className="absolute right-9 top-0 pt-80 hidden md:block"
          alt=""
        />
        <img
          src={TigaBintangPeta}
          className="absolute right-56 top-16 hidden md:block"
          alt=""
        />
        <img
          src={RipPaperPetaKiri}
          className="left-0 absolute hidden md:block"
          alt=""
        />
        <img
          src={RipPaperPetaKanan}
          className="right-0 absolute hidden md:block"
          alt=""
        />
      </div>
    </>
  );
};

export default Peta;
