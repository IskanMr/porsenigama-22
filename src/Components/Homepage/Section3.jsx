import Slider from "react-slick";
import React from "react";
import VectorKiri from "../../assets/images/homepage/vektor-kiri-inporse.png";
import VectorKanan from "../../assets/images/homepage/vektor-kanan-inporse.png";
import BorderInporse from "../../assets/images/homepage/border-inporse-section-3.png";
import BintangKuning from "../../assets/images/homepage/bintang-kuning-inporse.png";
import PaperKiri from "../../assets/images/homepage/paper-kiri-section-3.png";
import PaperKanan from "../../assets/images/homepage/paper-kanan-section-3.png";
import BorderInporseMobile from "../../assets/images/homepage/border-inporse-mobile.png";
import GambarLogoInporse from "../../assets/images/homepage/gambar-inporse-3.png";
import GambarPorsenigamaInporse from "../../assets/images/homepage/gambar-inporse-1.png";
import GambarKontinenInporse from "../../assets/images/homepage/gambar-inporse-2.png";

const Section3 = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="z-10 relative bg-homepage-section-3 pt-21rem pb-48 md:pb-40">
        <img
          src={BorderInporseMobile}
          className="mx-auto transform translate-x-2 md:hidden"
          alt=""
        />
        <img
          src={BorderInporse}
          className="mx-auto md:block hidden transform translate-x-2"
          alt=""
        />
        <p
          className="font-universalserif text-3xl xl:text-4xl text-yellow absolute text-center px-10 hidden md:block"
          style={{
            left: "50%",
            transform: "translate(-50%, -200%)",
          }}
        >
          INPORSE
        </p>
        <p
          className="font-universalserif text-3xl xl:text-4xl text-yellow absolute text-center px-10 md:hidden"
          style={{
            left: "50%",
            transform: "translate(-50%, -150%)",
          }}
        >
          INPORSE
        </p>
        <div className="mt-16 mx-auto items-center justify-center md:w-2/3 w-4/5 rounded-3rem bg-opacity-20 text-xl bg-inporse font-montserrat overflow-hidden font-medium py-8 shadow-xl">
          <Slider {...settings}>
            <div className="xl:px-20 xl:py-5 px-7 py-3">
              <img
                className="mx-auto items-center justify-center"
                src={GambarLogoInporse}
                alt=""
              />
              <div className="overflow-y-scroll">
                <p className="h-10rem md:h-18rem text-justify pt-1 text-sm md:text-base xl:text-lg">
                  Piala <br />
                  melambangkan sebuah kompetisi antar fakultas yang ada di
                  Universitas Gadjah Mada guna memperebutkan gelar juara dan
                  piala Gadjah Mada
                  <br />
                  <br />
                  Porsenigama <br />
                  Porsenigama (Pekan Olahraga dan Seni) merupakan wadah para
                  atlet, seniman, dan kontingen untuk wadah menumbuhkan
                  kreativitas dan sportivitas dalam perlombaan di kalangan
                  mahasiswa Universitas Gadjah Mada.
                  <br />
                  <br />
                  Api dan Obor <br />
                  melambangkan antusias, energi, harapan, dan semangat yang
                  membara tak pernah usai dari para atlet, seniman, dan
                  kontingen yang saling terhubung selama bertanding merebutkan
                  Piala Gadjah Mada.
                  <br />
                  <br />
                  2 sayap yang membawa obor <br />
                  melambangkan terdapat 2 jenis kompetisi yaitu cabang olahraga
                  dan tangkai seni
                  <br />
                  <br />
                  4 Lambang <br />
                  berupa 2 cabang olahraga dan 2 cabang seni yang menjadi
                  cerminan dari pertandingan pekan olahraga dan seni gadjah mada
                  <br />
                  <br />
                  Pusat lambang dilindungi oleh lima songkok dan di antara
                  songkok- songkok terdapat tombak. <br />
                  songkok dan tombak yang masing-masing berjumlah lima bermakna
                  yang selaras dengan makna lambang UGM yaitu melambangkan
                  Pancasila, sehingga UGM itu memiliki dasar, sifat dan tujuan,
                  hakikat pahlawan serta perjuangan nasional demi Pancasila.{" "}
                  <br />
                  <br />
                  Warna <br />
                  Piala: <br />
                  Warna putih pada piala melambangkan sifat kesucian pada piala.{" "}
                  <br />
                  Warna coklat muda pada … melambangkan sifat warna perjuangan
                  dari UGM yang merupakan kampus perjuangan. Warna tersebut juga
                  selaras dengan warna seragam pejuang Indonesia pada waktu UGM
                  berdiri setelah Agresi Militer Belanda II. <br />
                  Warna biru pada songkok melambangkan UGM sebagai kampus biru.
                  Warna tersebut juga menggambarkan langit yang mempunyai makna
                  ruang bebas dalam berkreasi dan menuangkan bakat para atlet
                  dan seniman di Porsenigama. <br />
                  Warna hijau pada tombak melambangkan UGM menuju kampus hijau.
                  Warna tersebut juga mempunyai makna terus tumbuh dan
                  berkembangnya prestasi para atlet, seniman dan UGM.
                </p>
              </div>
            </div>
            <div className="overflow-hidden xl:px-20 xl:py-5 px-7 py-3">
              <img
                className="mx-auto items-center justify-center rounded-3xl"
                src={GambarPorsenigamaInporse}
                alt=""
              />
              <p className="text-justify pt-5 text-sm md:text-base xl:text-lg">
                Porsenigama pertama kali diselenggarakan pada tahun 1983.
                Porsenigama lahir karena pada saat itu dinilai belum adanya
                kegiatan yang mewadahi interaksi bersama antar fakultas di UGM,
                sehingga muncullah gagasan untuk membentuk kompetisi yang dapat
                mewadahi interaksi antar fakultas tersebut. Porsenigama
                didirikan oleh Bapak Arudji. Beliau menjabat sebagai ketua
                Porsenigama untuk pertama kali. Pekan Olahraga dan Seni
                Universitas Gadjah Mada (Porsenigama) dengan nama awal “Pordies”
                atau Pekan Olahraga Dies kemudian pada tahun 2011 diganti nama
                menjadi “Porsenigama”.{" "}
              </p>
            </div>
            <div className="xl:px-20 xl:py-5 px-7 py-3">
              <img
                className="mx-auto items-center justify-center rounded-3xl"
                src={GambarKontinenInporse}
                alt=""
              />
              <p className="text-justify pt-5 text-sm md:text-base xl:text-lg">
                Kontingen Porsenigama = 20 yang terdiri dari 18 fakultas dan 2
                sekolah yang ada di Universitas Gadjah Mada.
                <br /> Lokasi Perlombaan Porsenigama = 19 tempat perlombaanya
                yang terdiri dari 13 tempat perlombaan olahraga dan 6 tempat
                perlombaan seni.
                <br /> Usia Porsenigama = 39 tahun dari tahun 1983.
                <br /> Medali yang diperebutkan : Cabang olahraga sebanyak 1027
                buah dan tangkai seni = 72 buah dengan total medali yaitu 1099
                buah.
              </p>
            </div>
          </Slider>
        </div>
        <img
          src={VectorKiri}
          className="absolute top-96 left-10 hidden md:block"
          alt=""
        />
        <img
          src={VectorKanan}
          className="absolute right-9 top-32rem hidden md:block"
          alt=""
        />
        <img
          src={BintangKuning}
          className="absolute left-96 pt-10 hidden md:block"
          alt=""
        />
        <img
          src={PaperKiri}
          className="left-0 absolute hidden md:block"
          alt=""
        />
        <img
          src={PaperKanan}
          className="right-0 absolute hidden md:block"
          alt=""
        />
      </div>
    </>
  );
};

export default Section3;
