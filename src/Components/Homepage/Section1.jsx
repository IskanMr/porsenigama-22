import LogoSection1 from "../../assets/images/homepage/logo-section-1.png";
import LogoSection1Mobile from "../../assets/images/homepage/logo-section-1-mobile.png";
import TeksPorsenigama from "../../assets/images/homepage/text-porsenigama-section-1.png";
import ScrollDown from "../../assets/images/homepage/scroll-down.png";
import RipPaper from "../../assets/images/homepage/rip-paper-section-1.png";
import TeksPorsenigamaMobile from "../../assets/images/homepage/text-porsenigama-mobile.png";
import ScrollDownMobile from "../../assets/images/homepage/scroll-down-mobile.png";
import RipPaperMobile from "../../assets/images/homepage/rip-paper-mobile.png";
import RipPaperAdd from "../../assets/images/homepage/rip-paper-add.png";

const Section1 = () => {
  return (
    <>
      <div className="w-full items-center bg-blue py-10 pb-24 md:pb-32 z-20">
        <div className="relative">
          <img
            src={RipPaper}
            className="absolute hidden md:block z-10 md:mt-23rem lg:mt-27rem xl:mt-32rem"
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-10"
            style={{ marginTop: "53rem" }}
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-10"
            style={{ marginTop: "72rem" }}
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-10"
            style={{ marginTop: "91rem" }}
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-10"
            style={{ marginTop: "110rem" }}
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-10"
            style={{ marginTop: "120rem" }}
            alt=""
          />
          <img
            src={RipPaperMobile}
            className="absolute md:hidden z-10 transform scale-y-125 scale-x-125"
            alt=""
            style={{ marginTop: "32rem" }}
          />
          <img
            src={RipPaperMobile}
            className="absolute hidden 405px:block md:hidden z-0 transform scale-y-125 scale-x-125"
            alt=""
            style={{ marginTop: "32rem", marginLeft: "20rem" }}
          />
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
                src={LogoSection1}
                className="hidden md:block"
                style={{ scale: "95%" }}
                alt=""
              />
            </div>
            <div className="col-span-1 m-auto md:px-10 pt-8 rounded-lg z-10">
              <img
                src={LogoSection1Mobile}
                className="md:hidden p-5"
                alt=""
              />
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
