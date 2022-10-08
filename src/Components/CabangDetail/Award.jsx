import { useState, useEffect } from "react";
import React from "react";
import { db } from "../../resources/db";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";

const Award = (props) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [standingsRef, setStandingsRef] = useState([]);
  let filter = props.id;

  useEffect(() => {
    // TODO: Ubah standings ke dataCabor, ubah cabang jadi Cabang
    const unsubscribe = onSnapshot(
      query(collection(db, "dataCabang", props.id, "award"), orderBy("name")),
      ({ docs }) => {
        setStandingsRef(
          docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }
    );

    return () => {
      unsubscribe();
    };
  }, [filter]);

  // useEffect(() => {
  // // let toprint = standingsData[0]
  //     console.log(standingsRef);
  // }, [standingsRef])

  return (
    <>
      {standingsRef.length > 0 && (
        <div className="grid z-20">
          <p className="text-center font-montserrat">
            <button
              onClick={() => setVisiblePopup(!visiblePopup)}
              className="rounded-xl py-2 lg:py-3 px-5 border-2 bg-orange text-white text-sm md:text-base lg:text-xl xl:text-2xl transform scale-90 md:scale-100 transition duration-300 md:hover:scale-105"
            >
              Award
            </button>
          </p>
          {visiblePopup ? (
            <div
              className="fixed top-0 left-0 flex items-center justify-center"
              style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
              onClick={() => setVisiblePopup(!visiblePopup)}
            >
              <div
                className="bg-krem border-2 border-black lg:min-h-24 font-montserrat rounded-3xl w-3/4 lg:w-5/6"
                style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL}/images/News/Group 51.png')`,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end">
                  <button
                    onClick={() => setVisiblePopup(!visiblePopup)}
                    className="md:mx-4 mt-3 xl:my-4 text-3xl md:text-2xl rounded-xl px-2 md:px-8 py-2 font-montserrat transform scale-50 md:scale-100 transition duration-300 md:hover:scale-105"
                  >
                    Tutup
                  </button>
                </div>
                {standingsRef.length > 0 && (
                  <div className="mx-4 my-4 h-96 lg:h-auto grid grid-flow-row lg:grid-flow-col auto-rows-max lg:auto-cols-max overflow-y-auto lg:overflow-x-auto font-montserrat text-black text-base md:text-2xl font-semibold">
                    
                    {standingsRef.map((cabang, index) => (
                      <>
                      {!cabang.peraih? <div/> : 
                      <div className="p-4 border-2 border-white bg-white m-2 rounded-xl">
                        <p
                          className="text-2xl md:text-fivevh uppercase font-bold text-kuning mb-3"
                        >
                          {cabang.name}
                        </p>
                        <p className="flex gap-x-3">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/Standings/Mendali gold.png`}
                            alt="Tabel perolehan medali emas"
                            className="transform w-5 h-6 md:w-10 md:h-11"
                          />
                          {cabang.peraih}
                        </p>
                      
                      </div>}
                      </>
                      
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export {Award };
