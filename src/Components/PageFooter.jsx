// import { Link } from "react-router-dom";

// import { openInNewTab } from "../utils/openInNewTab";

// import { ReactComponent as FooterLogo } from "../assets/icons/kesatriaLogoW.svg";

// import { ReactComponent as TwitterIcon } from "../assets/icons/socials/twitter.svg";
// import { ReactComponent as InstagramIcon } from "../assets/icons/socials/instagram.svg";
// import { ReactComponent as TiktokIcon } from "../assets/icons/socials/tiktok.svg";
// import { ReactComponent as LineIcon } from "../assets/icons/socials/line.svg";
// import { ReactComponent as YoutubeIcon } from "../assets/icons/socials/youtube.svg";

// function SocialItem({
//   icon: IconComponent,
//   targetBaseUrl,
//   noSuffix,
//   children,
// }) {
//   return (
//     <button
//       type="button"
//       onClick={() => openInNewTab(targetBaseUrl + (!noSuffix ? children : ""))}
//       className="flex items-center font-semilight group my-2 max-w-max"
//     >
//       <div className="bg-white group-hover:bg-oranges-default text-black p-1 rounded-full transition ease-in-out duration-300">
//         <IconComponent className="block w-4 h-4 p-0.5 fill-current" />
//       </div>
//       <span className="block text-sm md:text-base group-hover:text-oranges-default ml-2 transition ease-in-out duration-300">
//         {children}
//       </span>
//     </button>
//   );
// }

// export function PageFooter({ className }) {
//   return (
//     <footer
//       className={` bg-black text-white flex flex-col md:flex-row font-semilight p-8 ${className}`}
//     >
//       {/* TODO: Group the latter text-containing parts (with <div>s) instead of the current approach, to allow similar/uniform left-aligning in mobile viewports */}
//       <div className="flex flex-row items-center w-auto md:w-2/5 mb-8 md:mb-0">
//         <FooterLogo className="block h-44 md:h-56 w-auto mr-4" />
//         <div>
//           <p className=" font-bold uppercase text-lg md:text-xl mb-2 md:mb-4">
//             PPSMB Kesatria 2022
//           </p>
//           <button
//             className="mb-2 md:mb-4 text-sm md:text-base hover:text-oranges-default text-left transition ease-in-out duration-300"
//             type="button"
//             onClick={() =>
//               openInNewTab(
//                 "https://www.google.com/maps/place/Jl.+Grafika,+Sendowo,+Caturtunggal,+Kec.+Depok,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55281/data=!4m2!3m1!1s0x2e7a584dc07272d7:0x900bfbf5ee983dc1?sa=X&ved=2ahUKEwiJiJiPpof5AhVDErcAHeJyAeQQ8gF6BAgWEAE"
//               )
//             }
//           >
//             <div>
//               Jalan Grafika
//               <br />
//               Mlati, Yogyakarta 55281, ID
//             </div>
//           </button>

//           <p>
//             <Link
//               to="/"
//               className="hover:text-oranges-default text-sm md:text-base transition ease-in-out duration-300"
//               title="Go to home page"
//             >
//               https://ppsmb.ft.ugm.ac.id
//             </Link>
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-col flex-grow md:items-center justify-center">
//         <div className="flex flex-col">
//           <p className=" font-bold text-lg md:text-xl mb-2 md:mb-4">
//             Official Account:
//           </p>{" "}
//           <div className="flex">
//             <div className="flex flex-col mr-12">
//               <SocialItem
//                 icon={TwitterIcon}
//                 targetBaseUrl="https://twitter.com/"
//               >
//                 ppsmb_kesatria
//               </SocialItem>
//               <SocialItem
//                 icon={TiktokIcon}
//                 targetBaseUrl="https://tiktok.com/@"
//               >
//                 ppsmb_kesatria
//               </SocialItem>
//               <SocialItem
//                 icon={LineIcon}
//                 targetBaseUrl="https://line.me/R/ti/p/"
//               >
//                 @NRB2565A
//               </SocialItem>
//             </div>
//             <div className="flex flex-col">
//               <SocialItem
//                 icon={InstagramIcon}
//                 targetBaseUrl="https://instagram.com/"
//               >
//                 ppsmb_kesatria
//               </SocialItem>
//               <SocialItem
//                 icon={YoutubeIcon}
//                 targetBaseUrl="https://www.youtube.com/channel/UCmv4fLH2lves3QtOS4V33PQ"
//                 noSuffix
//               >
//                 PPSMB KESATRIA
//               </SocialItem>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faTiktok,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const sosmedstyle =
  "transition hover:text-biru rounded-xl w-10 h-10 text-3xl text-center py-1 mx-2";

export const PageFooter = (props) => {
  const assets = `${process.env.PUBLIC_URL}/images/`;

  return (
    <footer
      className={
        "bg-gray-500 text-peach" + (props.isNotNonCover ? "" : " non-cover")
      }
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start">
        <div className="flex flex-col w-3/4 md:w-1/2 mt-8 mb-4 mx-4">
          <div className="text-lg">
            <p className="uppercase font-semibold">
              FORUM KOMUNIKASI UNIT KEGIATAN MAHASISWA
            </p>
            <p className="uppercase font-semibold">UNIVERSITAS GADJAH MADA</p>
            <p>
              Gelanggang Mahasiswa Universitas Gadjah Mada, Jalan Pancasila
              No.1, Bulaksumur, Caturtunggal, Sleman, Daerah Istimewa Yogyakarta
              55281
            </p>
          </div>
          <div className="flex flex-row pt-2">
            <a
              className={sosmedstyle}
              href="https://www.instagram.com/gelexugm/"
              target="__blank"
            >
              {" "}
              <FontAwesomeIcon icon={faInstagram} />{" "}
            </a>
            <a
              className={sosmedstyle}
              href="https://www.youtube.com/channel/UCm4N802KVS6QnqhhPvN8Olg/"
              target="__blank"
            >
              {" "}
              <FontAwesomeIcon icon={faYoutube} />{" "}
            </a>
            <a
              className={sosmedstyle}
              href="http://line.me/ti/p/~@gelexugm"
              target="__blank"
            >
              {" "}
              <FontAwesomeIcon icon={faLine} />{" "}
            </a>
            <a
              className={sosmedstyle}
              href="https://twitter.com/gelexugm"
              target="__blank"
            >
              {" "}
              <FontAwesomeIcon icon={faTwitter} />{" "}
            </a>
            <a
              className={sosmedstyle}
              href="https://vt.tiktok.com/ZGJkGY4mT/"
              target="__blank"
            >
              {" "}
              <FontAwesomeIcon icon={faTiktok} />{" "}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 justify-items-center mt-8 mb-4 w-1/2 lg:w-1/4 lg:self-start">
          <div className="col-span-2">
            <p className="font-semibold text-lg text-center">
              Diselenggarakan Oleh
            </p>
          </div>
          <img
            className="md:w-28 md:h-28 w-20 h-20 m-2 object-scale-down"
            src={assets + "lambang-ugm-putih.png"}
            alt="logo ugm"
          />
          <img
            className="md:w-28 md:h-28 w-20 h-20 m-2 object-scale-down"
            src={assets + "logo-psg.png"}
            alt="logo psg"
          />
        </div>
      </div>

      <div className="px-4 py-1 font-semibold text-xs text-center">
        <p>Gelex &copy; 2022</p>
      </div>
    </footer>
  );
};
