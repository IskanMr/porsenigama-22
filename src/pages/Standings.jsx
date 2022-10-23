/** 
 * Komponen ini compatible dengan react-router-dom v5. 
 * Jika ingin menggunakan react-router-dom v6, ubah useHistory() menjadi useNavigate()
 **/
import { db } from "../resources/db";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HtmlHead } from "../Components/HtmlHead";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";

import Transisi from "../assets/images/klasemen/transisi.png";
import TransisiMobile from "../assets/images/klasemen/transition-mobile.png";
import TeksKlasemen from "../assets/images/klasemen/teks-klasemen.png";
import TeksKlasemenMobile from "../assets/images/klasemen/teks-klasemen-mobile.png";
import Printilan from "../assets/images/klasemen/printilan.png";
import MedaliEmas from "../assets/images/klasemen/medali-gold.png";
import MedaliSilver from "../assets/images/klasemen/medali-silver.png";
import MedaliBronze from "../assets/images/klasemen/medali-bronze.png";
import Karate from "../assets/images/klasemen/Karate.png";
import Keroncong from "../assets/images/klasemen/Keroncong.png";


const Standings = () => {
  const navigate = useHistory();
  const [standingsData, setStandingsData] = useState([]);
  const [filter, setFilter] = useState("0");
  
  /**
  * Extra value atletik hanya untuk 'dummy', fungsinya ngambil data tp ttp yang dimap keseluruhan
  * Tujuannya biar value paling bawah ngga undefined 
  */
  const filterlib = [
    "atletik",
    "atletik",
    "badminton",
    "basket",
    "berkuda",
    "bridge",
    "catur",
    "esport",
    "futsal",
    "hockey",   
    "judo",    
    "karate",  
    "kempo",
    "orienteering",
    "panahan",
    "pencak-silat",
    "renang",
    "sepak-bola",
    "softball",
    "taekwondo",
    "tenis-meja",
    "voli",
    //Cabang Seni
    "tari",
    "band",
    "fotografi",
    "keroncong",
    "monolog",
    "lukis",
    "vokal-grup",
    "lakon",
    "z-fest"
  ];

  const filtercabdetaillib = [
    "Atletik",
    "Atletik",
    "Badminton",
    "Basket",
    "Berkuda",
    "Bridge",
    "Catur",
    "E-sport",
    "Futsal",
    "Hockey",   
    "Judo",    
    "Karate",  
    "Kempo",
    "Orienteering",
    "Panahan",
    "Pencak Silat",
    "Renang",
    "Sepak Bola",
    "Softball",
    "Taekwondo",
    "Tenis Meja",
    "Voli",
    //Cabang Seni
    "Tari",
    "Band",
    "Fotografi",
    "Vokal Keroncong",
    "Monolog",
    "Lukis",
    "Vokal Grup",
    "Naskah Lakon",
    "Z-Fest"
  ];

  

  /**
  * Fungsi ini untuk mengambil data dari firestore
  */
  const getAllMedals = async () => {
    const snap = await getDocs(query(collection(db, "standings"), orderBy("name")));
    //console.log(snap.docs);
    let data = snap.docs.map((doc) => doc.data());
    //console.log(data);
    data = data.sort((a, b) => {
      if (a.gold < b.gold) {
        return 1;
      } else if (a.gold > b.gold) {
        return -1;
      } else {
        if (a.silver < b.silver) {
          return 1;
        } else if (a.silver > b.silver) {
          return -1;
        } else {
          if (a.bronze < b.bronze) {
            return 1;
          } else if (a.bronze > b.bronze) {
            return -1;
          } else {
            return 0;
          }
        }
      }
    });
    //console.log(data);
    setStandingsData(data);
  };

  const getEachCategory = async () => {
    //console.log("data");
    const categoryRef = query(
      collection(db, "standings"),
      where(
        filterlib[
          Number(filter)
        ] /*proses filtering dari filter, nanti filter valuenya 0,1,2,3,4,5 dst*/,
        "!=",
        null
      )
    );
    const snap = await getDocs(categoryRef);
    //console.log(snap.docs);
    let data = snap.docs.map((doc) => doc.data());
    //console.log(data);
    data = data.sort((a, b) => {
      if (
        a[filterlib[Number(filter)]].gold !== null &&
        b[filterlib[Number(filter)]].gold !== null
      ) {
        if (
          a[filterlib[Number(filter)]].gold < b[filterlib[Number(filter)]].gold
        ) {
          return 1;
        } else if (
          a[filterlib[Number(filter)]].gold > b[filterlib[Number(filter)]].gold
        ) {
          return -1;
        } else {
          if (
            a[filterlib[Number(filter)]].silver <
            b[filterlib[Number(filter)]].silver
          ) {
            return 1;
          } else if (
            a[filterlib[Number(filter)]].silver >
            b[filterlib[Number(filter)]].silver
          ) {
            return -1;
          } else {
            if (
              a[filterlib[Number(filter)]].bronze <
              b[filterlib[Number(filter)]].bronze
            ) {
              return 1;
            } else if (
              a[filterlib[Number(filter)]].bronze >
              b[filterlib[Number(filter)]].bronze
            ) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      }
    });
    //console.log(data);
    setStandingsData(data);
  };
  

  useEffect(() => {
    if (filter === "0") {
      getAllMedals();
    } else {
      getEachCategory();
    }
  }, [filter]);
  const goBack = () => {
    navigate(`${process.env.PUBLIC_URL}/`);
  };

  const optionClick = () => {
    setFilter(document.getElementById("filterli").value);
  };


    return (
    
    <>
      <HtmlHead title="Standings" decription="[insert page description]" />
      <div className="min-h-screen font-display tracking-widest relative overflow-hidden">  

        <div>
        
          <div className="relative w-full justify-center items-center bg-blue flex flex-col p-5 pb-14 md:pb-32 lg:py-58">
            <img
              src={TeksKlasemen}
              className="items-center justify-center hidden lg:block lg:pl-40 lg:pt-20 lg:pb-40 md-max:pl-60 xl:pl-48"
              alt=""
            />

            <img
              src={TeksKlasemenMobile}
              className="items-center justify-center lg:hidden sm:mt-20 md:my-72 md:mt-5 ml-10 mb-48 scale-200 sm:w-5/6"
              alt=""
            />

            <div
              className="hidden max-sm:flex"
              style={{
                height: "10vh", 
              }}
            ></div>

            <div className="absolute hidden z-20 xs:-bottom-14 sm:-bottom-20 md:-bottom-28 lg:-bottom-50 xl:-bottom-56 lg:block">
              <img 
                src={Transisi} 
              />
            </div>

            <div className="absolute z-20 lg:hidden md:-bottom-20 md:h-auto sm:-bottom-20 max-sm:-bottom-20 -bottom-10">
              <img 
                src={TransisiMobile}
                className="items-center justify-center md:max-w-full transform lg:hidden"
              />
            </div>
            
            {/* <div
              className="sm:hidden"
              style={{
                height: "20vh", 
            }}
            >

            </div> */}

            <div className="absolute flex transform z-10 lg:hidden sm:-bottom-24 md:-bottom-32 md:h-auto -bottom-2">
              <img 
                src={Karate}
                className="items-center justify-center transform md:pb-40 sm:pr-40 sm:pb-24 sm:pt-20 pr-20 sm:scale-125 md:scale-200"
              />

              <img 
                src={Keroncong}
                className="items-center justify-center transform md:pb-40 sm:pl-10 sm:pb-28 sm:pt-20 left-10 sm:scale-125 md:scale-200"
              />
            </div>

          </div>
        </div>
        <div className="bg-pattern-klasemen">
          <div className="flex justify-start mx-12">
              <select
                id="filterli"
                className="dropdown absolute justify-end max-w-xs mt-16 w-1/2 text-md xl:m-52 lg:m-40 lg:text-2xl xl:h-12 lg:h-10 sm:mt-20 md:ml-24 sm:text-md md:w-1/4 sm:w-1/4 sm:m-10 bg-gray-300 font-sansPro font-semibold md:text-threevh z-40"
                onClick={optionClick}
              >
                <option value="0" selected="selected">
                  Keseluruhan
                </option>
                <option value="1">Atletik</option>
                <option value="2">Badminton</option>
                <option value="3">Basket</option>
                <option value="4">Berkuda</option>
                <option value="5">Bridge</option>
                <option value="6">Catur</option>
                <option value="7">E-Sport</option>
                <option value="8">Futsal</option>
                <option value="9">Hockey</option>
                <option value="10">Judo</option>
                <option value="11">Karate</option>
                <option value="12">Kempo</option>
                <option value="13">Orienteering</option>
                <option value="14">Panahan</option>
                <option value="15">Pencak Silat</option>
                <option value="16">Renang</option>
                <option value="17">Sepak Bola</option>
                <option value="18">Softball</option>
                <option value="19">Taekwondo</option>
                <option value="20">Tenis Meja</option>
                <option value="21">Voli</option>
                <option value="22">Tari</option>
                <option value="23">Band</option>
                <option value="24">Fotografi</option>
                <option value="25">Vokal Keroncong</option>
                <option value="26">Monolog</option>
                <option value="27">Lukis</option>
                <option value="28">Vokal Grup</option>
                <option value="29">Naskah Lakon</option>
                <option value="30">Z-fest</option>
              </select>
            </div>

          <div className="absolute">
            <img 
              src={Printilan}
              className="z-40 xl:-bottom-16 py-16 mt-20 ml-12 hidden lg:flex md:ml-0" // problem di display type absolute & relative, kalo dituker jadi absolute kepotong
            />
          </div>

          <div className="flex justify-center xl:my-44 lg:my-32 text-center relative text-white px-8 py-24 table-auto lg:px-24 md:px-1 md:py-1">

            <table className="text-xs lg:text-sm md:text-base xl:text-xl z-30 md:text-fivevh xl:mx-60 m-auto md:table-fixed md:w-full mt-4 md:mx-20 md:my-32 sm:mt-20">
              
              <thead>
                <tr>
                  <th
                    className="lg:mx-5 lg:py-2 border-4 border-black xl:w-3/5 mx-2"
                    style={{ borderTop: "solid", borderLeft: "solid", borderRight: "solid"}}
                  >
                    Fakultas
                  </th>
                  <th
                    className="lg:mx-5 lg:py-2 md:w-20 border-4 border-black"
                    align="center"
                    style={{ borderTop: "solid", borderRight: "solid" }}
                  >
                    <img
                      src={MedaliEmas}
                      alt="Tabel perolehan medali emas"
                      className="transform scale-150 sm:scale-75 md:scale-100 md:w-1/2 md:h-1/2 xl:w-1/3 w-1/2"
                      />
                  </th>
                  <th
                    className="lg:mx-5 lg:py-2 md:w-20 border-4 border-black"
                    align="center"
                    style={{ borderTop: "solid", borderRight: "solid"}}
                    >
                    <img
                      src={MedaliSilver}
                      alt="Tabel perolehan medali emas"
                      className="transform scale-150 sm:scale-75 md:scale-100 md:w-1/2 md:h-1/2 xl:w-1/3 w-1/2"
                      />
                  </th>
                  <th
                    className="lg:mx-5 lg:py-2 border-4 md:w-20 border-black"
                    align="center"
                    style={{ 
                      borderTop: "solid", 
                      borderRight: "solid", }}
                      >
                    <img
                      src={MedaliBronze}
                      alt="Tabel perolehan medali emas"
                      className="transform scale-150 sm:scale-75 md:scale-100 md:w-1/2 md:h-1/2 xl:w-1/3 w-1/2 m-2"
                      />
                  </th>
                  <th
                    className="lg:px-45 lg:py-2 lg:mx-10 border-4 border-black text-xs lg:text-fivevh xl:text-lg lg:text-xs md:w-1/6 md:text-base p-1"
                    style={{ borderTop: "solid", borderRight: "solid" }}
                    >
                    total
                  </th>
                </tr>
              </thead>
              {(() => {
                if (filter === "0") {
                  return (
                    <tbody>
                      {standingsData.map((faculty, index) => (
                        
                        <tr key={faculty.name} style={{border:"solid"}} className="hover:bg-black">
                            <td
                              className="px-2 py-4 border-4 text-left border-black font-sansPro font-medium"
                              // style={{ border: "solid" }}
                              >
                              {faculty.name}
                            </td>
                            <td
                              className="px-2 py-2 border-4 border-black"
                              // style={{ border: "solid" }}
                              >
                              {faculty.gold}
                            </td>
                            <td
                              className="px-2 py-2 border-4 border-black"
                              // style={{ border: "solid" }}
                            >
                              {faculty.silver}
                            </td>
                            <td
                              className="px-2 py-2 border-4 border-black"
                              // style={{ border: "solid" }}
                              >
                              {faculty.bronze}
                            </td>
                            <td
                              className="px-3 py-2 border-4 border-black"
                              // style={{ border: "solid" }}
                              >{`${
                                faculty.silver + faculty.gold + faculty.bronze
                            }`}</td>
                          </tr>

                      ))}
                    </tbody>
                  );
                } else {
                  return (
                    <tbody>
                      {standingsData.map((faculty, index) => (
                        <tr key={faculty.name} className="hover:bg-black">
                          <td
                            className="px-2 py-4 border-4 text-left border-black font-sansPro font-medium"
                            style={{border: "solid"}}
                            >
                            {faculty.name}
                          </td>
                          <td
                            className="px-5 py-2 border-4 border-black"
                            style={{ border: "solid" }}
                            >
                            {faculty[filterlib[Number(filter)]] !== undefined &&
                            faculty[filterlib[Number(filter)]].gold !== undefined
                              ? faculty[filterlib[Number(filter)]].gold
                              : 0}
                          </td>
                          <td
                            className="px-5 py-2 border-4 border-black"
                            style={{ border: "solid" }}
                          >
                            {faculty[filterlib[Number(filter)]] !== undefined &&
                            faculty[filterlib[Number(filter)]].silver !== undefined
                              ? faculty[filterlib[Number(filter)]].silver
                              : 0}
                          </td>
                          <td
                            className="px-5 py-2 border-4 border-black"
                            style={{ border: "solid" }}
                          >
                            {faculty[filterlib[Number(filter)]] !== undefined &&
                            faculty[filterlib[Number(filter)]].bronze !== undefined
                            ? faculty[filterlib[Number(filter)]].bronze
                            : 0}
                          </td>
                          <td
                            className="px-5 py-2 border-4 border-black"
                            style={{ border: "solid" }}
                            >
                            {faculty[filterlib[Number(filter)]] !== undefined &&
                            faculty[filterlib[Number(filter)]].total !== undefined
                            ? faculty[filterlib[Number(filter)]].total
                              : 0}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  );
                }
              })()}
            </table>
          </div>
          
          <div className="flex justify-between mx-4 md:mx-20">
            <button
              className="cursor-pointer transform scale-50 md:scale-100 transition duration-300 md:hover:scale-105"
              onClick={goBack}
              >
              {/* <img src={`${process.env.PUBLIC_URL}/images/News/Back.png`} alt="" /> */}
            </button>
            {filter !== "0" ? (
              <a
              className="cursor-pointer transform scale-50 md:scale-100 transition duration-300 md:hover:scale-105"
              key={filtercabdetaillib[Number(filter)]}
              href={`${process.env.PUBLIC_URL}/cabang/${
                filtercabdetaillib[Number(filter)]
              }`}
              >
              <img
                src={`${process.env.PUBLIC_URL}/images/Standings/Detail.png`}
                alt=""
                />
              </a>
            ) : (
              ""
              )}
          </div>
          <div className="h-4 md:h-20"></div>
        </div>
      </div>

    
        
      
    </>
  );
};

export { Standings };