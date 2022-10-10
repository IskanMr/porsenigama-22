/** 
 * Komponen ini compatible dengan react-router-dom v5. 
 * Jika ingin menggunakan react-router-dom v6, ubah useHistory() menjadi useNavigate()
**/
import { db } from "../resources/db";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";

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
    <div className="min-h-screen font-nuku tracking-wide bg-krem relative overflow-hidden">
      <img
        src={`${process.env.PUBLIC_URL}/images/Standings/Bg.png`}
        alt=""
        className="absolute"
      />
      <div className="h-4 md:hidden"></div>
      <div
        className="hidden lg:flex"
        style={{
          height: "50vh",
        }}
      ></div>
      <h1
        className="font-bold pt-24 text-center text-5xl md:text-7xl lg:text-fourteenvh tracking-wider relative text-biru"
        style={{
          textShadow: [
            "-1px -1px 0 #FBE5D2",
            "-0.5px -1px 0 #FBE5D2",
            "0px -1px 0 #FBE5D2",
            "0.5px -1px 0 #FBE5D2",
            "1px -1px 0 #FBE5D2",
            "1.5px -0.5px 0 #FBE5D2",
            "2px 0px 0 #FBE5D2",
            "2.5px 0.5px 0 #FBE5D2",
            "3px 1px 0 #FBE5D2",
            "3.5px 1.5px 0 #FBE5D2",
            "4px 2px 0 #FBE5D2",
            "4.5px 3.5px 0 #FBE5D2",
            "5px 3px 0 #FBE5D2",
            "-1px 0px 0 #FBE5D2",
            "-1px 1px 0 #FBE5D2",
            "-0.5px 1.5px 0 #FBE5D2",
            "0px 2px 0 #FBE5D2",
            "0.5px 2.5px 0 #FBE5D2",
            "1px 1px 0 #FBE5D2",
            "1.5px 1.5px 0 #FBE5D2",
            "2px 2px 0 #FBE5D2",
            "2.5px 2.5px 0 #FBE5D2",
            "3px 3px 0 #FBE5D2",
            "3.5px 3.5px 0 #FBE5D2",
            "4px 4px 0 #FBE5D2",
            "4.5px 4.5px 0 #FBE5D2",
            "5px 5px 0 #FBE5D2",
            "1px 3px 0 #FBE5D2",
            "1.5px 3.5px 0 #FBE5D2",
            "2px 4px 0 #FBE5D2",
            "2.5px 4.5px 0 #FBE5D2",
            "3px 5px 0 #FBE5D2",
          ],
        }}
      >
        Klasemen
      </h1>
      <div className="h-4 md:hidden"></div>
      <div
        className="hidden md:flex"
        style={{
          height: "50vh",
        }}
      ></div>
      {/* <Hasil filter={filter}/> */}
      <div className="flex justify-end mx-12">
        <select
          id="filterli"
          className="dropdown relative font-sansPro font-semibold text-xs md:text-threevh"
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
          <option value="30">Z-Fest</option>
        </select>
      </div>
      <div className="w-full flex justify-center my-12 text-center relative">
        <table className="text-sm md:text-fivevh mx-12 md:table-fixed md:w-full">
          <thead>
            <tr>
              <th
                className="px-6 border-3 border-ungugaje md:w-3/5"
                style={{ borderTop: "none", borderLeft: "none" }}
              ></th>
              <th
                className="px-6 border-3 border-ungugaje"
                align="center"
                style={{ borderTop: "none" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/Standings/Mendali gold.png`}
                  alt="Tabel perolehan medali emas"
                  className="transform scale-150 md:scale-100 md:w-1/2 md:h-1/2"
                />
              </th>
              <th
                className="px-6 border-3 border-ungugaje"
                align="center"
                style={{ borderTop: "none" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/Standings/Mendali silver.png`}
                  alt="Tabel perolehan medali emas"
                  className="transform scale-150 md:scale-100 md:w-1/2 md:h-1/2"
                />
              </th>
              <th
                className="px-6 border-3 border-ungugaje"
                align="center"
                style={{ borderTop: "none" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/Standings/Mendali bronze.png`}
                  alt="Tabel perolehan medali emas"
                  className="transform scale-150 md:scale-100 md:w-1/2 md:h-1/2"
                />
              </th>
              <th
                className="lg:px-6 border-3 border-ungugaje text-lg lg:text-fivevh"
                style={{ borderTop: "none" }}
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
                    <tr key={faculty.name}>
                      <td
                        className="px-6 border-3 text-left border-ungugaje font-sansPro font-bold"
                        style={{ borderLeft: "none", borderBottom: "none" }}
                      >
                        {faculty.name}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ borderBottom: "none" }}
                      >
                        {faculty.gold}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ borderBottom: "none" }}
                      >
                        {faculty.silver}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ borderBottom: "none" }}
                      >
                        {faculty.bronze}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ borderBottom: "none" }}
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
                    <tr key={faculty.name}>
                      <td
                        className="px-6 border-3 text-left border-ungugaje font-sansPro font-bold"
                        style={{ borderLeft: "none", borderBottom: "none" }}
                      >
                        {faculty.name}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ borderBottom: "none" }}
                      >
                        {faculty[filterlib[Number(filter)]] !== undefined &&
                        faculty[filterlib[Number(filter)]].gold !== undefined
                          ? faculty[filterlib[Number(filter)]].gold
                          : 0}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ borderBottom: "none" }}
                      >
                        {faculty[filterlib[Number(filter)]] !== undefined &&
                        faculty[filterlib[Number(filter)]].silver !== undefined
                          ? faculty[filterlib[Number(filter)]].silver
                          : 0}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ borderBottom: "none" }}
                      >
                        {faculty[filterlib[Number(filter)]] !== undefined &&
                        faculty[filterlib[Number(filter)]].bronze !== undefined
                          ? faculty[filterlib[Number(filter)]].bronze
                          : 0}
                      </td>
                      <td
                        className="px-6 border-3 border-ungugaje"
                        style={{ borderBottom: "none" }}
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
          <img src={`${process.env.PUBLIC_URL}/images/News/Back.png`} alt="" />
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
  );
};

export { Standings };