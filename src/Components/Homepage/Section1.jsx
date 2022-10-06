import Stadium from "../../assets/images/homepage/stadion-section-1.svg";
import TeksPorsenigama from "../../assets/images/homepage/text-porsenigama-section-1.png";
import ScrollDown from "../../assets/images/homepage/scroll-down.png";
import RipPaper from "../../assets/images/homepage/rip-paper-section-1.png";
import TeksPorsenigamaMobile from "../../assets/images/homepage/text-porsenigama-mobile.png";
import ScrollDownMobile from "../../assets/images/homepage/scroll-down-mobile.png";
import RipPaperMobile from "../../assets/images/homepage/rip-paper-mobile.png";

const Section1 = () => {
  return (
    <>
      <div className="w-full items-center bg-blue pt-10 md:pb-24 z-20">
        <div className="relative">
          <img
            src={RipPaper}
            className="absolute hidden md:block z-10"
            style={{ paddingTop: "32rem" }}
            alt=""
          />
          <img
            src={RipPaper}
            className="absolute hidden 768px:block z-10"
            style={{ paddingTop: "60rem" }}
            alt=""
          />
          <img
            src={RipPaper}
            className="absolute hidden 768px:block z-10"
            style={{ paddingTop: "90rem" }}
            alt=""
          />
          <div className="absolute scale-x-150 scale-y-150 transform md:hidden z-10">
            <img
              src={RipPaperMobile}
              className
              alt=""
              style={{ paddingTop: "38rem" }}
            />
          </div>
          <div className="absolute scale-x-150 scale-y-150 transform hidden 450px:block md:hidden z-0">
            <img
              src={RipPaperMobile}
              className
              alt=""
              style={{ paddingTop: "38rem", paddingLeft: "15rem" }}
            />
          </div>
          <div className="md:grid-cols-2 md:grid m-auto flex flex-col">
            <div className="col-span-1 mx-auto md:pt-16 items-center justify-center z-10">
              <img
                src={TeksPorsenigamaMobile}
                className="-translate-x-2 transform md:hidden"
                alt=""
              />
              <img
                src={ScrollDownMobile}
                className="mx-auto pt-2 md:hidden"
                alt=""
              />
              <img
                src={Stadium}
                className="hidden md:block"
                style={{ scale: "95%" }}
                alt=""
              />
            </div>
            <div className="col-span-1 m-auto px-10 pt-8 rounded-lg z-10">
              <img src={Stadium} className="pb-24 md:hidden" alt="" />
              <img
                src={TeksPorsenigama}
                className="mb-8 hidden md:block transform -translate-x-8"
                alt=""
              />
              <img
                src={ScrollDown}
                className="items-center justify-center mx-auto hidden md:block"
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
