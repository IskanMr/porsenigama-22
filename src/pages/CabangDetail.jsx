import { useState, useEffect } from "react";
import { HtmlHead } from "../Components/HtmlHead";
import { dataFotografi } from "../data/dataFotografi";
import { dataVocalGroup } from "../data/dataVocalGroup";

import { cabangList } from "../data/dataCabangs";
import { Hasil } from "../Components/CabangDetail";
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
        className="relative w-full min-h-full flex flex-row md:gap-x-10 xl:gap-x-20 items-center justify-center bg-yellow pt-14 lg:pt-0 pointer-events-none m-auto"
        style={{
          height: "100vh"
        }}
      >
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
        <div className="z-20 relative w-full h-full flex flex-col w-1/3 sm:w-1/2 -ml-20 2xl:-ml-28 items-center justify-center m-auto" style={{ width: "45%" }}>
          <img src={paperTitle} style={{ width: "762px" }} alt="" className="absolute w-7/12 sm:w-full -mt-44 mr-14 m-auto" />
          <h1 className="font-bold sm:text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl uppercase text-white font-universalserif z-40 -mt-56 ">
            {id} 
          </h1>
            {/* <div className="">
                  <img src={paperDesc} alt="Robekan kertas" className="absolute m-auto" />
                  <p className="hidden lg:block lg:text-xl z-40">
                    {cabangHeader} 
                  </p>
            </div> */}
        </div>
        <img
          src={rippedPaper}
          alt="Robekan kertas"
          className="w-screen absolute -bottom-14 xs:-bottom-14 sm:-bottom-20 md:-bottom-28 lg:-bottom-36 xl:-bottom-48"
          style={{
            filter:
              "drop-shadow(12px -3px 4px rgba(0, 0, 0, 0.25))"
          }}
        />
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

      <div className="relative min-w-full overflow-hidden">
        {cabangList.map((dataCabang)=>{
          if(dataCabang.title === id){
            return(
              <>
                <Header id={id} cabangHeader={dataCabang.description} />
                  {id !== "Fotografi" && id !== "Vocal Group" && (
                    <>
                      {dataCabang.casen == true && (
                          <div className="pb-64">
                            <Hasil id={id} />
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
