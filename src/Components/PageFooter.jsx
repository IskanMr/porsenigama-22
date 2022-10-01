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
  "transition hover:text-yellow rounded-xl w-10 h-10 text-3xl text-center py-1 mx-2";

export const PageFooter = (props) => {
  const assets = `${process.env.PUBLIC_URL}/images/`;

  return (
    <footer
      className={
        "bg-orange text-white" + (props.isNotNonCover ? "" : " non-cover")
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
