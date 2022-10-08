import { useState, useRef } from "react";
import { caborList, casenList } from "../data/dataCabang";
import { HtmlHead } from "../Components/HtmlHead";
import styled from 'styled-components'
import Logo from "../assets/images/cabang/Group 138.svg";
import TeksCabang from "../assets/images/cabang/Group 169.png";
import ScrollDown from "../assets/images/cabang/Polygon 1.svg";
import RippedPaper from "../assets/images/cabang/Group 137.png";
import TeksOlahraga from "../assets/images/cabang/Group 170.png";
import TeksSeni from "../assets/images/cabang/Group 171.png";

const assetsCabang = `${process.env.PUBLIC_URL}/images/cabang`;

const Cabang = () => {
  const [list, setList] = useState(caborList);
  const content = useRef(null);
  const width = window.innerWidth;

  return (
    <>
      <HtmlHead title="Cabang" decription="[insert page description]" />
      <div 
        className="relative w-full bg-blue py-10"
        style={{
          height: "100vh"
        }}
      >
        <img 
          src={RippedPaper} 
          className="w-full absolute m-auto -bottom-14 xs:-bottom-14 sm:-bottom-20 md:-bottom-28 lg:-bottom-36 xl:-bottom-48 pointer-events-none"
        />
        <div className="grid grid-cols-2 justify-items-center content-center m-auto">
          <div className="w-full pt-5 md:pt-16 px-10 items-center justify-center z-10 pointer-events-none">
            <img 
              src={Logo} 
              className="" 
              style={{width:"600px"}} 
              alt="Logo Porsenigama"
            />
          </div>
          <div className="m-auto mr-6 lg:mr-14 z-10">
            <img 
              src={TeksCabang} 
              className="mb-8 pointer-events-none" 
              alt="Cabang Lomba" 
            />
            <img
              src={ScrollDown}
              className="m-auto w-7 sm:w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-28 -mt-8 2xl:-mt-16 animate-bounce cursor-pointer"
              onClick={() => {
                content.current.scrollIntoView({ behavior: "smooth" });
              }}
              alt="Scroll Down"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-pattern-cabang" style={{backgroundSize: "cover"}} ref={content}>
        <div className="flex justify-center w-1/2 sm:w-2/5 md:w-1/3 pt-8 md:pt-20 my-8 sm:my-14 lg:my-14 xl:my-20 2xl:my-28 space-x-8 lg:space-x-24">
          <button
            className="transform duration-200 transition-300 hover:scale-110"
            onClick={() => setList(caborList)}
          >
            <img
              className="pointer-events-none transform transition-transform transition-300 hover:scale-110"
              src={TeksOlahraga}
              alt="Cabang Olahraga"
            />
          </button>
          <button
            className="transform duration-200 transition-300 hover:scale-110"
            onClick={() => setList(casenList)}
          >
            <img
              className="pointer-events-none"
              src={TeksSeni}
              alt="Cabang Seni"
            />
          </button>
        </div>
        <div className="flex flex-wrap justify-center w-5/6 gap-y-10 lg:gap-y-14 xl:gap-y-20 pb-20">
          {list.map((item) => (
            <a
              className="w-1/3 transform duration-200 transition-transform transition-300 hover:scale-110"
              key={item.title}
              href={`${process.env.PUBLIC_URL}/cabang/${item.title}`}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  className="pointer-events-none"
                  src={`${assetsCabang}/ICON-${item.title}.png`}
                  alt="Icon cabang"
                />
                <p className="font-montserrat font-bold uppercase text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-center">
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export { Cabang };
