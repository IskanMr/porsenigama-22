import { useState, useEffect } from "react";

import { dataFotografi } from "../data/dataFotografi";
import { dataVocalGroup } from "../data/dataVocalGroup";

import { cabangList } from "../data/dataCabangs";
import { Hasil } from "../Components/CabangDetail";
import vector1 from "../assets/images/cabang/cabangDetail/Group 108.png";
import vector2 from "../assets/images/cabang/cabangDetail/Vector (2).png";
import paperDesc from "../assets/images/cabang/cabangDetail/Vector 13.png";
import paperTitle from "../assets/images/cabang/cabangDetail/paper-title.png";
import rippedPaper from "../assets/images/cabang/cabangDetail/Group 182.png";

import {
  Common,
  Fotografi,
  Modal,
  VocalGroup,
} from "../Components/CabangDetail";

const assetsCabangDetail = `${process.env.PUBLIC_URL}/images/CabangDetail`;

const Header = ({ id, cabangHeader }) => {
  return (
    <div className="w-full h-full lg:min-h-screen flex flex-row md:gap-x-10 xl:gap-x-20 items-center justify-center bg-yellow pt-14 lg:pt-0 pointer-events-none">
      <div className="relative z-20" style={{ width: "10%" }}>
        <img
          className="absolute top-1 left-10"
          style={{ width: "137px"}}
          src={vector1}
          alt=""
        />
      </div>
      <div className="relative" style={{ width: "45%" }}>
        <img
          className="w-full"
          style={{ width: "858px" }}
          src={`${assetsCabangDetail}/icon-${id}.png`}
          alt=""
        />
      </div>
      <div className="relative" style={{ width: "5%" }}>
        <img
            className="absolute bottom-72 right-24"
            style={{ width: "70px" }}
            src={vector2}
            alt=""
          />
      </div>
      <div className="z-20 relative w-full h-full flex flex-col w-1/3 sm:w-1/2 -ml-20 2xl:-ml-28 items-center justify-center" style={{ width: "45%" }}>
        <img src={paperTitle} style={{ width: "762px" }} alt="" className="absolute w-7/12 sm:w-full -mt-44" />
        <h1 className="font-bold sm:text-2xl md:text-4xl lg:text-5xl uppercase text-white font-universalserif z-40 -mt-56">
          {id} 
        </h1>
          {/* <div className="">
                <img src={paperDesc} alt="" className="absolute m-auto" />
                <p className="hidden lg:block lg:text-xl z-40">
                  {cabangHeader} 
                </p>
          </div> */}
      </div>
      <img
        className="w-full absolute bottom-96 2xl:bottom-1/3"
        style={{ width: "2000px" }}
        src={rippedPaper}
        alt=""
      />
    </div>
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
