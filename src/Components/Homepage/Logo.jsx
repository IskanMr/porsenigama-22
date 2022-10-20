import "./Logo.css";
import LogoSection1 from "../../assets/images/homepage/logo-section-1.gif";
import LogoSection1Mobile from "../../assets/images/homepage/logo-section-1-mobile.png";
import TeksPorsenigama from "../../assets/images/homepage/text-porsenigama-section-1.png";
import ScrollDown from "../../assets/images/homepage/scroll-down.png";
import RipPaper from "../../assets/images/homepage/rip-paper-section-1.png";
import TeksPorsenigamaMobile from "../../assets/images/homepage/text-porsenigama-mobile.png";
import ScrollDownMobile from "../../assets/images/homepage/scroll-down-mobile.png";
import RipPaperMobile from "../../assets/images/homepage/rip-paper-mobile.png";
import RipPaperAdd from "../../assets/images/homepage/rip-paper-add.png";

const Logo = () => {
  return (
    <>
      <div className="bg-blue py-14 pb-56 md:pb-60 z-20">
        <div className="relative">
          <img
            src={RipPaper}
            className="absolute hidden md:block z-0 md:mt-23rem xl:mt-28rem"
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-0"
            style={{ marginTop: "53rem" }}
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-0"
            style={{ marginTop: "72rem" }}
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-0"
            style={{ marginTop: "91rem" }}
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-0"
            style={{ marginTop: "110rem" }}
            alt=""
          />
          <img
            src={RipPaperAdd}
            className="absolute hidden md:block z-0"
            style={{ marginTop: "128rem" }}
            alt=""
          />
          <img
            src={RipPaperMobile}
            className="absolute md:hidden z-0 transform scale-y-150 sm:mt-62rem"
            alt=""
            style={{ marginTop: "53rem" }}
          />
          {/* <img
            src={RipPaperMobile}
            className="absolute hidden 405px:block md:hidden z-0 transform scale-y-150 scale-x-125 overflow-hidden sm:mt-58rem"
            alt=""
            style={{ marginTop: "53rem", marginLeft: "20rem" }}
          /> */}
        </div>
        <div className="md:grid-cols-2 md:grid m-auto flex flex-col">
          <div className="col-span-1 mx-auto md:pt-0 items-center justify-center z-10">
            <img
              src={TeksPorsenigamaMobile}
              className="-translate-x-2 transform md:hidden fadein"
              alt=""
            />
            <a href="#tentang">
              <img
                src={ScrollDownMobile}
                className="mx-auto py-2 md:hidden cursor-pointer animate-bounce fadein"
                alt=""
              />
            </a>
            <img
              src={LogoSection1}
              className="hidden md:block logo"
              style={{ scale: "150%", transform: 'translate(-5%,0%)' }}
              alt=""
            />
          </div>
          <div className="col-span-1 m-auto md:px-3 xl:px-5 pt-8 rounded-lg z-10">
            <img
              src={LogoSection1}
              className="md:hidden logo"
              style={{ scale: "150%" }}
              alt=""
            />
            <img
              src={TeksPorsenigama}
              className="mb-8 hidden md:block transform xl:-translate-x-8 -translate-x-6 fadein"
              alt=""
            />
            <a href="#tentang">
              <img
                src={ScrollDown}
                className="items-center justify-center mx-auto hidden md:block animate-bounce cursor-pointer fadein"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
