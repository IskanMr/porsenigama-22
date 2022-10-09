import { LazyLoadImage } from "react-lazy-load-image-component";
import { datafoto } from "../resources/datafoto";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { HtmlHead } from "../Components/HtmlHead";
import TeksGaleriMobile from "../assets/images/galeri/teks-galeri-mobile.png";
import TeksGaleri from "../assets/images/galeri/teks-galeri.png";
import GaleriMobile from "../assets/images/galeri/gambar-galeri-mobile.png";
import TransitionSection from "../assets/images/galeri/transition-section.png";
import KontenGaleri from "../assets/images/galeri/gambar-galeri.png";

const Galeri = () => {
  const [isTampil, setIsTampil] = useState(false);
  const [fotoTampil, setFotoTampil] = useState();

  function closeFoto() {
    setIsTampil(false);
    setFotoTampil();
  }

  function openFoto(foto) {
    setFotoTampil(foto);
    setIsTampil(true);
    console.log(isTampil, fotoTampil);
  }
  return (
    <>
      <HtmlHead title="Galeri" decription="[insert page description]" />
      <div className="relative overflow-hidden">
        <div className="relative w-full justify-center items-center bg-orange flex flex-col p-5 pb-14 md:pb-32 lg:py-60 -z-1">
          <img
            src={TeksGaleri}
            className="items-center justify-center hidden md:block"
            alt=""
          />
          <img
            src={TeksGaleriMobile}
            className="items-center justify-center md:hidden"
            alt=""
          />
          <img
            src={GaleriMobile}
            className="items-center justify-center md:scale-150 transform lg:hidden"
            alt=""
          />

          <img
            src={KontenGaleri}
            className="absolute mt-0 top-24 xl:mt-5 xl:top-0 hidden lg:block"
            alt=""
          />
        </div>

        <div className="relative flex flex-wrap justify-center px-7 xl:px-10 md:gap-10 gap-4 py-20 md:py-28 xl:py-56 -mb-4 bg-galeri-mobile">
          <img
            src={TransitionSection}
            className="transform absolute top-0 -translate-y-16 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-40 xl:-translate-y-56 z-0 scale-x-125 scale-y-75"
            alt=""
          />
          {datafoto.map((data) => (
            <button
              className="transition ease-in-out duration-500 filter hover:grayscale transform md:hover:scale-110"
              onClick={() => openFoto(data)}
            >
              <LazyLoadImage
                effect="blur"
                className="relative md:w-auto md:h-72 h-auto w-64 md:rounded rounded-3xl"
                src={`${process.env.PUBLIC_URL}/images/galeri/${data.foto}`}
              />
            </button>
          ))}
        </div>
        <Dialog open={isTampil} onClose={closeFoto}>
          <Dialog.Overlay />
          <div className="fixed px-2 py-4 mt-10 md:top-0 top-32 inset-0 rounded-3xl overflow-scroll">
            <div
              className="fixed top-0 left-0 bg-gray-900 bg-opacity-70 w-full h-full"
              onClick={closeFoto}
            />
            <div className="relative md:w-1/2 w-9/10 h-full md:mt-14 mt-4 m-auto">
              {fotoTampil && (
                <div
                  className={`m-auto p-1 relative rounded-xl shadow green-900`}
                >
                  <button
                    className="md:text-4xl text-6xl text-white bg-merah absolute md:-top-8 -top-8 md:-right-4 -right-2 px-2 rounded-full overflow-hidden z-40"
                    onClick={closeFoto}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <img
                    className="rounded-3xl mx-auto w-full h-120"
                    src={`${process.env.PUBLIC_URL}/images/galeri/${fotoTampil.foto}`}
                    alt="Galeri"
                  />
                </div>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export { Galeri };
