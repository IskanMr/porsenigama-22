import Stadium from "../../assets/images/homepage/stadion-section-1.svg";
import TeksPorsenigama from "../../assets/images/homepage/text-porsenigama-section-1.png";
import ScrollDown from "../../assets/images/homepage/scroll-down-section-1.svg";
import RipPaper from "../../assets/images/homepage/rip-paper-section-1.svg";

const Section1 = () => {
  return (
    <>
      <div className="w-full items-center bg-blue pt-10" style={{ height:'100vh' }}>
        <div className="relative">
          {/* <img src={RipPaper} className="absolute z-1" alt="" /> */}
          <div className="grid-cols-3 grid m-auto z-5">
            <div className="col-span-1">
              <img src={Stadium} className="" alt="" />
            </div>
            <div className="col-span-2 m-auto">
              <img src={TeksPorsenigama} className="mr-16" alt="" />
              <img src={ScrollDown} className="mx-auto items-center" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
