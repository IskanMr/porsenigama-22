import { useState,useEffect } from "react";
import { Hasil } from "./Hasil";
import { Award } from "./Award";
const assetsCabangDetail = `${process.env.PUBLIC_URL}/images/CabangDetail`;

// const Card = (props) => {  const data = props.data;
//   if (!data.faculty1) {
//     data.faculty1 = "Error";
//   }
//   if (!data.faculty2) {
//     data.faculty2 = "Error";
//   }

//   const LogoSupporter = (props) => {
//     const [logo, setLogo] = useState(props.logo.toLowerCase());
//     return (
//       <div className="hidden sm:block w-14 h-14 lg:w-20 lg:h-20 xl:w-28 xl:h-28 rounded-full">
//         <img
//           onError={() => setLogo("undefined")}
//           className="w-full h-full rounded-full"
//           src={`${assetsCabangDetail}/supporter/${logo}.png`}
//           alt=""
//         />
//       </div>
//     );
//   };

//   const Player = (props) => {
//     return (
//       <div className="w-full flex flex-col justify-center items-center">
//         {props.player && (
//           <p className="mb-1 text-xl lg:text-3xl xl:text-4xl font-semibold text-center">
//             {props.player}
//           </p>
//         )}
//         <p
//           className={`${
//             !props.player
//               ? "text-xl lg:text-3xl xl:text-4xl font-semibold text-center"
//               : "lg-text-xl xl:text-2xl"
//           }`}
//         >
//           {props.faculty}
//         </p>
//       </div>
//     );
//   };

//   return (
//     <li className="my-7 sm:my-10 lg:my-20">
//       <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-t-3xl">
//         <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-4 lg:text-xl xl:text-2xl">
//           <p className="py-2">{data.date}</p>
//           {data.isFinished && (
//             <p className="px-10 py-2 rounded-xl bg-birdong text-white">
//               Selesai
//             </p>
//           )}
//         </div>
//       </div>
//       <div className="flex flex-col sm:flex-row items-center px-2 sm:px-8 py-4 sm:py-12 mt-1 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-b-3xl">
//         <LogoSupporter logo={data.faculty1.split(" (")[0]} />
//         <div className="flex flex-col items-center w-full sm:flex-1 mx-3 lg:mx-8 xl:space-y-3">
//           <div className="flex flex-col sm:flex-row w-full mb-5 sm:mb-0 justify-center items-center">
//             <Player player={data.player1} faculty={data.faculty1} />
//             {(data.player2 || data.faculty2 !== "Error") && (
//               <>
//                 <p className="mx-8 my-3 text-xl lg:text-xl xl:text-3xl">VS</p>
//                 <Player player={data.player2} faculty={data.faculty2} />
//               </>
//             )}
//           </div>
//           <p className="opacity-50 lg:text-xl xl:text-2xl uppercase">
//             {data.phase}
//           </p>
//           <p className="lg-text-xl xl:text-2xl uppercase">{data.venue}</p>
//           {data.isFinished && data.winner && (
//             <p className="lg-text-xl xl:text-2xl">Pemenang: {data.winner}</p>
//           )}
//         </div>
//         {(data.player2 || data.faculty2 !== "Error") && (
//           <LogoSupporter logo={data.faculty2.split(" (")[0]} />
//         )}
//         {!(data.player2 || data.faculty2 !== "Error") && (
//           <div className="w-14 h-14 lg:w-20 lg:h-20 xl:w-28 xl:h-28">
//             {data.score1 && (
//               <div className="w-full h-full flex flex-col items-center justify-center">
//                 <p className="lg-text-xl xl:text-2xl">Score:</p>
//                 <p className="text-xl lg:text-3xl xl:text-4xl font-semibold">
//                   {data.score1}
//                 </p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </li>
//   );
// };

const Common = ({
  cabangDatas,
  categoryDatas,
  id,
  cabangData,
  showCategory,
  setShowCategory,
  selectedCategory,
  setSelectedCategory,
  schedule,
  setSchedule,
}) => {
  useEffect(() => {
    setSelectedCategory(categoryDatas[0]);
  },[]);


  const selectCategoryHandler = (category) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category);
      setSchedule([]);
    }
    setShowCategory(false);
  };

  return (
    <>
     
      <div className="flex flex-col h-screen justify-center bg-pattern-cabangDetail bg-cover px-7 md:px-20 pt-20 xl:pt-36 2xl:pt-56 pb-10">
        <div className="flex flex-col sm:flex-row items-start justify-between pb-5 sm:pb-10 md:pt-14 lg:pt-20 xl:pt-20 2xl:pt-0 font-montserrat">
          <div
            className={`relative bg-white w-full sm:min-w-max sm:w-1/3 ${
              showCategory
                ? "border-2 border-black"
                : "border-2 border-black"
            } py-1 lg:py-2 xl:py-3 text-sm md:text-base lg:text-xl xl:text-2xl`}
            style={{
              boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setShowCategory((prevState) => !prevState)}
            >
              <p className="px-4 md:px-6 py-2 text-black">{selectedCategory}</p>
              <div className="flex justify-center px-4 w-14 md:w-16 xl:w-20">
                <img
                  className={`py-3 ${
                    showCategory ? "transition transform rotate-180" : ""
                  }`}
                  style={{ width: "60%" }}
                  src={`${assetsCabangDetail}/dropdown.svg`}
                  alt=""
                />
              </div>
            </div>
            {showCategory && (
              <div
                className="absolute min-w-full sm:h-48 lg:h-64 xl:h-80 2xl:h-auto grid grid-flow-row auto-rows-max overflow-y-auto z-30 bg-white border-2 border-t-0 border-black py-1"
                style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                {/* <div>
                  {categoryDatas.map((data) =>(
                    <p>
                      {data}
                    </p>
                  ))}
                </div> */}
                
                {cabangDatas.length &&
                  categoryDatas.map((data) => (
                    <p
                      key={data}
                      className="px-4 md:px-6 py-3 text-black hover:bg-yellow hover:rounded-full cursor-pointer"
                      onClick={() => selectCategoryHandler(data)}
                    >
                      {data}
                    </p>
                  ))}
              </div>
            )}
          </div>
          <div className="grid content-start justify-items-start sm:justify-items-end place-self-start sm:place-self-center gap-y-3 sm:gap-y-5 pt-5 sm:pt-0">
            <Hasil id={id} />
            <Award id={id} />
          </div>
        </div>
        <div className="h-full">
          {cabangDatas.map((data) => {
            if(data.category === selectedCategory){
              return (
                <>
                
                  <iframe className="z-99 h-full" src={`${data.link}/module`} width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
                
                </>
              )
            }
           
          })}
        </div>
      </div>
    </>
  );
};

export { Common };
