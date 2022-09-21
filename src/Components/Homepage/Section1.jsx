import Stadium from "../../assets/images/homepage/stadion-section-1.svg";
import TeksPorsenigama from "../../assets/images/homepage/text-porsenigama-section-1.png";
import ScrollDown from "../../assets/images/homepage/scroll-down-section-1.svg";
import RipPaper from "../../assets/images/homepage/rip-paper-section-1.png";

const Section1 = () => {
  return (
    <>
      <div
        className="w-full items-center bg-blue pt-10 z-10"
        style={{ height: "100vh" }}
      >
        <div className="relative">
          <img src={RipPaper} className="absolute pt-rem32" alt="" />
          <div className="grid-cols-2 grid m-auto">
            <div className="col-span-1 mx-auto pt-16 px-10 items-center justify-center z-10">
              <img src={Stadium} className="" style={{ scale: "95%" }} alt="" />
            </div>
            <div className="col-span-1 m-auto mx-1 z-10">
              <img src={TeksPorsenigama} className="mb-8" alt="" />
              <img
                src={ScrollDown}
                className="items-center justify-center mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
