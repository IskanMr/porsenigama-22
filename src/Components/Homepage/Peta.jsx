import BgTextInporse from "../../assets/images/homepage/bg-text-peta.png";
import ExplodePetaKiri from "../../assets/images/homepage/explode-peta-kiri.png";
import ExplodePetaKanan from "../../assets/images/homepage/explode-section-2.png";
import TigaBintangPeta from "../../assets/images/homepage/3-bintang-peta.png";
import RipPaperPetaKiri from "../../assets/images/homepage/rip-paper-peta-kiri.png";
import RipPaperPetaKanan from "../../assets/images/homepage/rip-paper-peta-kanan.png";
import Map from "./PetaComponents";

const Peta = () => {
  return (
    <>
      <div className="relative bg-purple py-10 pb-32">
        <img
          src={BgTextInporse}
          className="mx-auto pb-5 transform -translate-x-2"
          alt=""
        />
        <p
          className="font-universalserif text-3xl text-textpeta absolute text-center"
          style={{
            left: "50%",
            transform: "translate(-50%, -250%)",
          }}
        >
          PETA
        </p>
        <div className="flex flex-col items-center justify-center mx-auto">
          <Map />
        </div>
        <img
          src={ExplodePetaKiri}
          className="absolute w-32 2xl:w-40 left-3 hidden lg:block top-72 z-0"
          alt=""
        />
        <img
          src={ExplodePetaKanan}
          className="absolute w-56 2xl:w-auto -right-10 bottom-32 hidden lg:block transform scale-50"
          alt=""
        />
        <img
          src={TigaBintangPeta}
          className="absolute w-36 2xl:w-auto right-24 top-16 hidden lg:block transform scale-75"
          alt=""
        />
        <img
          src={RipPaperPetaKiri}
          className="-left-16 -top-48 lg:-left-16 absolute scale-50 lg:scale-75 transform z-20"
          alt=""
        />
        <img
          src={RipPaperPetaKanan}
          className="-right-20 -top-48 lg:-right-16 absolute scale-50 lg:scale-75 transform z-20"
          alt=""
        />
      </div>
    </>
  );
};

export default Peta;
