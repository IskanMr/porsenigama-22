import Slider from "react-slick";
import React from "react";
import VectorKiri from "../../assets/images/homepage/vektor-kiri-section-3.png";
import VectorKanan from "../../assets/images/homepage/vektor-kanan-section-3.png";
import BorderInporse from "../../assets/images/homepage/border-inporse-section-3.png";
import PaperKiri from "../../assets/images/homepage/paper-kiri-section-3.png";
import PaperKanan from "../../assets/images/homepage/paper-kanan-section-3.png";
import BorderInporseMobile from "../../assets/images/homepage/border-inporse-mobile.png";
import GambarLogoInporse from "../../assets/images/homepage/gambar-inporse-3.png";
import GambarPorsenigamaInporse from "../../assets/images/homepage/gambar-inporse-1.png";
import GambarKontinenInporse from "../../assets/images/homepage/gambar-inporse-2.png";

const Section3 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="z-10 relative bg-homepage-section-3 pt-80 pb-80">
        <img
          src={BorderInporseMobile}
          className="mx-auto transform translate-x-2"
          alt=""
        />
        <h2
          className="font-universalserif text-3xl text-yellow absolute text-center"
          style={{
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          INPORSE
        </h2>
        <div className="mx-auto items-center justify-center w-2/3 rounded-3xl max-h-1/2 bg-opacity-20 bg-inporse font-montserrat font-medium">
          <Slider {...settings}>
            <div className="">
              <img
                className="mx-auto items-center justify-center"
                src={GambarLogoInporse}
                alt=""
              />
              <div className="overflow-y-scroll max-h-1/2">
                <p className="">
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
            <div className="">
              <img
                className="mx-auto items-center justify-center"
                src={GambarPorsenigamaInporse}
                alt=""
              />
              <p>
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
            <div className="">
              <img
                className="mx-auto items-center justify-center"
                src={GambarKontinenInporse}
                alt=""
              />
              <p>
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
          className="absolute top-96 left-10 hidden"
          alt=""
        />
        <img
          src={VectorKanan}
          className="absolute right-9 top-32rem hidden"
          alt=""
        />
        <img src={BorderInporse} className="mx-auto hidden" alt="" />
        {/* <h2
          className="font-universalserif text-3xl text-yellow z-10 mx-auto absolute"  style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          INPORSE
        </h2> */}
        <img
          src={PaperKiri}
          className="left-0 bottom-0 absolute hidden"
          alt=""
        />
        <img
          src={PaperKanan}
          className="right-0 bottom-0 absolute hidden"
          alt=""
        />
      </div>
    </>
  );
};

export default Section3;
