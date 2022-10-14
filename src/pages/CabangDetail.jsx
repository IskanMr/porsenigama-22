import { useState, useEffect } from "react";
import { HtmlHead } from "../Components/HtmlHead";
import { dataFotografi } from "../data/dataFotografi";
import { dataVocalGroup } from "../data/dataVocalGroup";

import { cabangList } from "../data/dataCabangs";
import { Hasil } from "../Components/CabangDetail";
import { Award } from "../Components/CabangDetail";

import vector1 from "../assets/images/cabang/cabangDetail/Group 108.png";
import vector2 from "../assets/images/cabang/cabangDetail/Vector (2).png";
import paperDesc from "../assets/images/cabang/cabangDetail/Vector 13.png";
import paperTitle from "../assets/images/cabang/cabangDetail/paper-title.png";
import rippedPaper from "../assets/images/cabang/cabangDetail/Group 141.png";

import {
  Common,
  Fotografi,
  Modal,
  VocalGroup,
} from "../Components/CabangDetail";

const assetsCabangDetail = `${process.env.PUBLIC_URL}/images/CabangDetail`;

const Header = ({ id, cabangHeader }) => {
  return (
    <>
      <HtmlHead title={`${id}`} decription="[insert page description]" />
      <div 
        className="relative w-full h-full md:h-screen sm:min-h-full bg-yellow pt-8 sm:pt-14 lg:pt-0 pointer-events-none m-auto"
        style={{
          height: "100vh"
        }}
      >
        <div className="hidden md:flex relative h-full flex-row md:gap-x-10 xl:gap-x-20 items-center justify-center">
          <div className="relative z-20 m-auto" style={{ width: "7%" }}>
            <img
              className="absolute top-1 lg:top-6 xl:top-10 2xl:top-4 left-10 xl:left-16"
              style={{ width: "137px"}}
              src={vector1}
              alt="Vector"
            />
          </div>
          <div className="relative" style={{ width: "30%" }}>
            <img
              className="w-full mt-10"
              style={{ width: "858px" }}
              src={`${assetsCabangDetail}/icon-${id}.png`}
              alt={`Cabang ${id}`}
            />
          </div>
          <div className="relative" style={{ width: "5%" }}>
            <img
                className="absolute -top-52 lg:-top-64 xl:-top-72 2xl:-top-80 right-20 lg:right-24 2xl:right-36"
                style={{ width: "70px" }}
                src={vector2}
                alt="Vector"
              />
          </div>
          <div className="z-20 relative w-full h-full flex flex-col sm:w-1/2 -ml-20 2xl:-ml-28 items-center justify-center my-auto" style={{ width: "45%" }}>
            <div className="flex relative w-full items-center justify-center pt-28">
              <img 
                src={paperTitle} 
                style={{ width: "762px" }} 
                alt={`Cabang ${id}`} 
                className="absolute w-7/12 sm:w-full md:-mt-48 lg:-mt-44 mr-14 m-auto" 
              />
              <h1 className="font-bold md:text-3xl lg:text-4xl 2xl:text-5xl uppercase text-white font-universalserif text-center z-40 -mt-56 2xl:-mt-60 mt mr-10">
                {id}
              </h1>
            </div>
            <div className="relative px-10 sm:px-14 pt-4 -translate-x-6 translate-y-6 md:-translate-y-6 lg:translate-y-4 xl:translate-y-10 2xl:translate-y-20 transform">
              <p className="px-7 py-3 text-justify text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white z-30 bg-orange rounded-3xl">
                {cabangHeader} 
              </p>
            </div>
              {/* <div className="">
                    <img src={paperDesc} alt="Robekan kertas" className="absolute m-auto" />
                    <p className="hidden lg:block lg:text-xl z-40">
                      {cabangHeader} 
                    {cabangHeader} 
                      {cabangHeader} 
                    </p>
              </div> */}
          </div>
        </div>
        <img
          src={rippedPaper}
          alt="Robekan kertas"
          className="w-screen absolute -bottom-14 425px:-bottom-20 sm:-bottom-20 md:-bottom-28 lg:-bottom-36 xl:-bottom-48 2xl:-bottom-60"
          style={{
            filter:
              "drop-shadow(12px -3px 4px rgba(0, 0, 0, 0.25))"
          }}
        />
        <div className="md:hidden relative w-full h-full flex flex-col gap-y-8 items-center justify-center 425px:pt-8 pb-28 sm:pb-48">
          <div className="z-20 relative w-full h-full flex flex-col items-center justify-center pt-20" style={{ width: "40%" }}>
            <img 
              src={paperTitle} 
              style={{ scale: "95%" }} 
              alt={`Cabang ${id}`} 
              className="absolute w-full sm:w-5/6 m-auto" 
            />
            <h1 className="font-bold 425px:text-2xl sm:text-2xl md:text-4xl uppercase text-white font-universalserif z-40 -translate-y-3 425px:-translate-y-4 sm:-translate-y-5 transform">
              {id}
            </h1>
          </div>
          <div className="relative z-20 m-auto" style={{ width: "13%"}}>
            <img
              className="absolute sm:w-3/4 top-10 left-28 425px:left-44 sm:left-40 425px:w-3/4"
              style={{ scale: "100%" }}
              src={vector1}
              alt="Vector"
            />
          </div>
          <div className="relative grid justify-items-center mx-auto w-1/2" style={{ width: "40%" }}>
            <img
              className="w-full sm:w-3/4 mt-10"
              style={{ 
                width: "858px", 
                filter: 
                  "drop-shadow(10px 13px 4px rgba(0, 0, 0, 0.25))" 
              }}
              src={`${assetsCabangDetail}/icon-${id}.png`}
              alt={`Cabang ${id}`}
            />
          </div>
          <div className="relative" style={{ width: "10%" }}>
            <img
                className="absolute 425px:w-5/6 sm:w-5/12 -top-7 right-28 425px:right-40 sm:right-56"
                style={{ scale: "100%" }}
                src={vector2}
                alt="Vector"
              />
          </div>
          <div className="relative px-10 sm:px-14 pt-4">
            <p className="px-5 py-3 text-justify text-sm sm:text-base text-white z-30 bg-orange rounded-3xl">
              {cabangHeader} 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const CabangDetail = (props) => {
  const id = props.match.params.id;
  console.log(id)
  const [cabangHeader, setCabangHeader] = useState({});
  const [cabangData, setCabangData] = useState([]);
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [modal, setModal] = useState(false);

 
   

  const openModal = (index) => {
    switch (id) {
      case "Fotografi":
        setModal({
          type: id,
          index: index,
          src: `${assetsCabangDetail}/fotografi/${index + 1}.jpg`,
          title: dataFotografi[index].title,
          name: dataFotografi[index].name,
          faculty: dataFotografi[index].faculty,
          description: dataFotografi[index].description,
        });
        break;
      case "Vocal Group":
        setModal({
          type: id,
          index: index,
          imgSrc: `${assetsCabangDetail}/vocal-group/${index}.jpg`,
          faculty: dataVocalGroup[index].faculty,
          vidSrc: dataVocalGroup[index].url,
        });
        break;
      default:
        return;
    }
  };

  return (
    <>
      {modal && (
        <Modal modal={modal} setModal={setModal} openModal={openModal} />
      )}

      <div className="relative min-w-full h-full overflow-hidden">
        {cabangList.map((dataCabang)=>{
          if(dataCabang.title === id){
            return(
              <>
                <Header id={id} cabangHeader={dataCabang.description} />
                  {id !== "Fotografi" && id !== "Vocal Group" && (
                    <>
                      {dataCabang.casen == true && (
                          <div className="bg-pattern-cabangDetail bg-cover pt-16 md:pt-28 lg:pt-36 xl:pt-48 pb-14 md:pb-20 lg:pb-28">
                            <Hasil className="" id={id} />
                            <Award  id={id} />
                          </div>
                        )}
                        
                          {!dataCabang.casen == true && (
                          <Common
                            id={id}
                            cabangDatas={dataCabang.categoryData}
                            categoryDatas={dataCabang.category}
                  
                            showCategory={showCategory}
                            setShowCategory={setShowCategory}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            schedule={schedule}
                            setSchedule={setSchedule}
                          />
                          )}
                      </>
                    )}
                {id === "Fotografi" && <Fotografi id={id} openModal={openModal} />}
                {id === "Vocal Group" && <VocalGroup id={id} openModal={openModal} />}
              </>)
          }
        })}
      </div>
    </>
  );
};

export { CabangDetail };
