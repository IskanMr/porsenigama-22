import BorderLomba from "../../assets/images/homepage/border-lomba.png";
import PatternLomba from "../../assets/images/homepage/pattern-lomba.png";
import TigaBintangLomba from "../../assets/images/homepage/3-bintang-lomba.png";
import ExplodeLombaKanan from "../../assets/images/homepage/explode-lomba-kanan.png";
import ExplodeLombaKiri from "../../assets/images/homepage/explode-lomba-kiri.png";
import ExplodeLombaKecil from "../../assets/images/homepage/explode-kecil-lomba.png";

const Lomba = () => {
  return (
    <>
      <div className="relative bg-blue pt-10 pb-48 md:pb-40 z-10">
        <img src={BorderLomba} className="mx-auto" alt="" />
        <p
          className="font-universalserif text-4xl text-yellow absolute text-center"
          style={{
            left: "49.5%",
            transform: "translate(-50%, -190%)",
          }}
        >
          LOMBA
        </p>
        <div className="pt-10 rounded-3rem flex flex-row w-3/4 xl:w-1/2 gap-8 lg mx-auto z-10">
          <div className="bg-pattern-lomba bg-no-repeat h-full w-full pb-96 z-10">
            {/* <img src={PatternLomba} className="mx-auto z-10" alt="" /> */}
            <p className="text-center">SENI</p>
          </div>
          <div className="bg-pattern-lomba bg-no-repeat h-full w-full pb-96 z-10">
            <p>OLAHRAGA</p>
          </div>
        </div>
        <img src={TigaBintangLomba} className="absolute top-0" alt="" />
        <img
          src={ExplodeLombaKanan}
          className="absolute right-96 top-12"
          alt=""
        />
        <img
          src={ExplodeLombaKiri}
          className="absolute top-96 left-96 z-0"
          alt=""
        />
        <img
          src={ExplodeLombaKecil}
          className="absolute top-96 right-48 z-0"
          alt=""
        />
      </div>
    </>
  );
};

export default Lomba;
