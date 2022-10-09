import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TeksTentangPorsenigama from "../../assets/images/homepage/bg-text-tentang-porsenigama.png";
import TigaBintang from "../../assets/images/homepage/3-bintang-section-2.png";
import BintangKuning from "../../assets/images/homepage/bintang-kuning-section-2.png";
import Explode from "../../assets/images/homepage/explode-section-2.png";
import BgTeksTentangPorsenigamaMobile from "../../assets/images/homepage/bg-text-tentang-mobile.png";
import TigaBintangMobile from "../../assets/images/homepage/3-bintang-mobile.png";
import BintangKuningMobile from "../../assets/images/homepage/bintang-kuning-mobile.png";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 550) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide text-hyperlink cursor-pointer p-1 m-2 bg-white"
      >
        {isReadMore ? "... selengkapnya" : "tampilkan lebih sedikit"}
      </span>
    </p>
  );
};

const ReadMoreMobile = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 400) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide text-hyperlink cursor-pointer p-1 m-2 bg-white"
      >
        {isReadMore ? "... selengkapnya" : "tampilkan lebih sedikit"}
      </span>
    </p>
  );
};

const Tentang = () => {
  AOS.init({});
  AOS.refresh();
  return (
    <>
      <div className="z-30 relative mb-0 md:mb-12">
        <div className="relative md:mb-10 mb-0">
          <img
            src={BgTeksTentangPorsenigamaMobile}
            className="mx-auto pt-16 md:hidden"
            alt=""
          />
          <img
            src={TeksTentangPorsenigama}
            className="mx-auto z-10 hidden md:block pt-10"
            alt=""
          />
          <h1
            className="font-universalserif text-xl absolute text-center text-purple md:hidden"
            style={{
              top: "72%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            TENTANG PORSENIGAMA
          </h1>
          <h1
            className="font-universalserif md:text-3xl lg:text-3xl absolute text-purple hidden md:block"
            style={{
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            TENTANG PORSENIGAMA
          </h1>
        </div>
        <div
          className="z-20 rounded-large w-4/5 md:w-3/4 mx-auto pb-5 mt-5 md:mt-0 md:pb-12"
          data-aos="fade-down"
          data-aos-offset="586"
          data-aos-duration="1600"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          {/* <h2 className="font-montserrat font-bold text-2xl align-middle justify-center items-center flex leading-tes">
            MENGENAL PORSENIGAMA
          </h2> */}
          <h2 className="font-montserrat font-bold text-md md:text-2xl flex items-center justify-center text-center pb-5 pt-5">
            MENGENAL PORSENIGAMA
          </h2>
          <p className="text-justify md:px-12 px-5 text-sm md:text-lg font-montserrat hidden md:block z-20">
            <ReadMore>
              Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama)
              merupakan satu diantara kegiatan besar di Universitas Gadjah Mada.
              Penyelenggaraan kegiatan ini, sebagai ajang mempertemukan seluruh
              kontingen dari Fakultas dan Sekolah yang ada di UGM untuk berlaga
              pada cabang olahraga dan tangkai seni yang diperlombakan.
              Porsenigama bertujuan untuk menumbuhkan karakter kreativitas dan
              sportivitas dalam perlombaan yang adil di kalangan mahasiswa
              Universitas Gadjah Mada. Porsenigama dilaksanakan atas dasar
              Rancangan Kegiatan Awal Tahun (RKAT) atau program kerja Forum
              Komunikasi (FORKOM) UKM Universitas Gadjah Mada. Pada tahun ini,
              Porsenigama kembali hadir dengan mengusung konsep yang berbeda
              dengan mengembalikan euforia sebelum pandemi. Porsenigama
              dilakukan secara luring dengan tetap menerapkan protokol
              kesehatan. Seluruh atlet dan seniman yang berlaga, akan merebutkan
              gelar juara umum Porsenigama dan membawa Piala Gadjah Mada. Gelar
              ini direpresentasikan dengan Piala Gadjah Mada yang diberikan
              secara estafet dari pemenang tahun-tahun sebelumnya. Porsenigama
              dari tahun ke tahun telah berhasil mencuri perhatian civitas
              akademika UGM. Meskipun tidak semua menjadi peserta lomba, mereka
              tetap berantusias menyambut Porsenigama dan mendukung penuh
              kontingen. Porsenigama 2022 mengusung tema “Bahtera Abhipraya”
              dengan slogan “Pijar Laskar Gadjah Mada, Cipta Gemilang
              Porsenigama” menjadi harapan baru untuk seluruh lapisan
              masyarakat. Bahtera Abhipraya, tersirat makna besar bagi
              Porsenigama 2022. Dengan terbentangnya layar bahtera Porsenigama
              dalam mengarungi lautan samudera harapan, menjadi awal lahirnya
              cahaya baru bersatunya Laskar Gadjah Mada”. Bahtera Abhipraya juga
              menjadi manifestasi bagi para atlet dan seniman untuk memulai
              sebuah perjalanan bergerak dan berpadu untuk maju dengan membawa
              harapan besar dan bersama menerobos terpaan badai yang sedang
              dihadapi menuju tujuan akhir, tercapainya harapan dan kekuatan
              dalam kebersamaan. Dengan tema yang baru ini, Porsenigama
              diharapkan dapat berjalan dengan lancar dan suportif, serta mampu
              membawa energi positif untuk para mahasiswa UGM.
            </ReadMore>
          </p>
          <p className="text-justify px-8 text-sm md:text-xl font-montserrat md:hidden">
            <ReadMoreMobile>
              Pekan Olahraga dan Seni Universitas Gadjah Mada (Porsenigama)
              merupakan satu diantara kegiatan besar di Universitas Gadjah Mada.
              Penyelenggaraan kegiatan ini, sebagai ajang mempertemukan seluruh
              kontingen dari Fakultas dan Sekolah yang ada di UGM untuk berlaga
              pada cabang olahraga dan tangkai seni yang diperlombakan.
              Porsenigama bertujuan untuk menumbuhkan karakter kreativitas dan
              sportivitas dalam perlombaan yang adil di kalangan mahasiswa
              Universitas Gadjah Mada. Porsenigama dilaksanakan atas dasar
              Rancangan Kegiatan Awal Tahun (RKAT) atau program kerja Forum
              Komunikasi (FORKOM) UKM Universitas Gadjah Mada. Pada tahun ini,
              Porsenigama kembali hadir dengan mengusung konsep yang berbeda
              dengan mengembalikan euforia sebelum pandemi. Porsenigama
              dilakukan secara luring dengan tetap menerapkan protokol
              kesehatan. Seluruh atlet dan seniman yang berlaga, akan merebutkan
              gelar juara umum Porsenigama dan membawa Piala Gadjah Mada. Gelar
              ini direpresentasikan dengan Piala Gadjah Mada yang diberikan
              secara estafet dari pemenang tahun-tahun sebelumnya. Porsenigama
              dari tahun ke tahun telah berhasil mencuri perhatian civitas
              akademika UGM. Meskipun tidak semua menjadi peserta lomba, mereka
              tetap berantusias menyambut Porsenigama dan mendukung penuh
              kontingen. Porsenigama 2022 mengusung tema “Bahtera Abhipraya”
              dengan slogan “Pijar Laskar Gadjah Mada, Cipta Gemilang
              Porsenigama” menjadi harapan baru untuk seluruh lapisan
              masyarakat. Bahtera Abhipraya, tersirat makna besar bagi
              Porsenigama 2022. Dengan terbentangnya layar bahtera Porsenigama
              dalam mengarungi lautan samudera harapan, menjadi awal lahirnya
              cahaya baru bersatunya Laskar Gadjah Mada”. Bahtera Abhipraya juga
              menjadi manifestasi bagi para atlet dan seniman untuk memulai
              sebuah perjalanan bergerak dan berpadu untuk maju dengan membawa
              harapan besar dan bersama menerobos terpaan badai yang sedang
              dihadapi menuju tujuan akhir, tercapainya harapan dan kekuatan
              dalam kebersamaan. Dengan tema yang baru ini, Porsenigama
              diharapkan dapat berjalan dengan lancar dan suportif, serta mampu
              membawa energi positif untuk para mahasiswa UGM.
            </ReadMoreMobile>
          </p>
        </div>
        <img
          src={BintangKuning}
          className="top-0 pt-12 left-0 xl:px-10 px-5 absolute hidden md:block"
          alt=""
        />
        <img
          src={TigaBintang}
          className="absolute right-0 px-1 xl:px-10 top-0 py-20 hidden md:block"
          alt=""
        />
        <img
          src={Explode}
          className="right-0 xl:pr-20 -bottom-48 absolute hidden md:block z-0 transform scale-90"
          alt=""
        />
        <img
          src={TigaBintangMobile}
          className="absolute right-0 top-44 md:hidden"
          alt=""
        />
        <img
          src={BintangKuningMobile}
          className="absolute left-4 top-48 md:hidden"
          alt=""
        />
      </div>
    </>
  );
};

export default Tentang;
