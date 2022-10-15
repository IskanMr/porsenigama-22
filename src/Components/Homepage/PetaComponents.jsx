import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import pinpoint from "../../assets/images/homepage/pinpoint.png";

const Map = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 768;
  const icon = isMobile
    ? new Leaflet.Icon({
        iconUrl: pinpoint,
        iconSize: [20, 20],
        iconAnchor: [15, 15], // [left/right, top/bottom]
        popupAnchor: [0, 20],
        tooltipAnchor: [0, 0],
      })
    : new Leaflet.Icon({
        iconUrl: pinpoint,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, 34],
        tooltipAnchor: [0, 0],
      });
  return (
    <>
      <MapContainer
        className="rounded-3rem z-0"
        center={[-7.770614660306203, 110.38070545396639]}
        zoom={16}
        scrollWheelZoom
        style={{ height: "75vh", width: "75vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[-7.7712441881997645, 110.37916765767226]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Gedung Poerbatjaraka Fakultas Ilmu Budaya UGM <br /> Jl. Sosio
            Humaniora No.1, Sagan, Caturtunggal, Kec. Depok, Kabupaten Sleman,
            Daerah Istimewa Yogyakarta 55281 <br /> <br />
            Tangkai Seni Tari
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Gedung Poerbatjaraka <br /> Fakultas Ilmu Budaya UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.766856213451043, 110.38098074232775]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Auditorium Fakultas Kehutanan <br /> Jl. Agro Bulaksumur No.1,
            Caturtunggal, Yogyakarta, Kabupaten Sleman, Daerah Istimewa
            Yogyakarta 55281 <br /> <br />
            Tangkai Vokal Keroncong
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Auditorium <br /> Fakultas Kehutanan UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.770614660306203, 110.38070545396639]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Selasar Fakultas Filsafat Universitas Gadjah Mada <br /> Jl.
            Olahraga, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman,
            Daerah Istimewa Yogyakarta 55281 <br /> <br />
            Tangkai Lukis
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Selasar <br /> Fakultas Filsafat UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.772014936648914, 110.37851084232773]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Auditorium Soegondo FIB UGM <br /> Universitas Gadjah Mada, Sagan,
            Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa
            Yogyakarta 55281 <br /> <br />
            Vokal Grup, Monolog
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Auditorium Soegondo <br /> Fakultas Ilmu Budaya UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.770203972236078, 110.38197504232772]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Kantong Parkir Kopi Lembah UGM <br /> Jl. Lembah UGM, Karang Gayam,
            Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa
            Yogyakarta 55281
            <br /> <br />
            Band
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Kantong Parkir <br /> Kopi Lembah UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.771783297874965, 110.382113052955]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Gor Lembah UGM <br /> Universitas Gadjah Mada, Caturtunggal, Kec.
            Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            <br /> <br />
            Bulutangkis, Karate, Silat, Taekwondo, Kempo, Tenis Meja
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Gedung Olahraga <br /> Lembah UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.769065287343478, 110.38481202597193]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Gor Pancasila UGM <br /> Karang Gayam, Caturtunggal, Kec. Depok,
            Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            <br /> <br />
            Bola Basket, Bola Voli, Futsal, Sepakbola, Atletik, Panahan
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Gedung Olahraga <br /> Stadion Pancasila UGM
            </p>
          </Tooltip>
        </Marker>

        <Marker
          position={[-7.770754093799728, 110.38281020793278]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Lapangan Softball UGM <br /> Karang Gayam, Caturtunggal, Kec. Depok,
            Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
            <br /> <br />
            Softball
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Lapangan Softball <br /> UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.767394370529252, 110.37731784232771]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Ruang Kelas Fakultas Matematika dan Ilmu Pengetahuan UGM (Ruangan
            101-105 dan 201-205) <br /> Sekip Utara Bulaksumur Kotak Pos 21, Jl.
            Geografi, Sendowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah
            Istimewa Yogyakarta 55281
            <br /> <br />
            Catur
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Ruang Kelas (Ruang 101-105 dan 201-205) <br /> Fakultas Matematika
              dan Ilmu Pengetahuan UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.767093231144884, 110.37764498071837]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Auditorium Fakultas Matematika dan Ilmu Pengetahuan UGM <br />{" "}
            Sendowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa
            Yogyakarta 55281
            <br /> <br />
            Bridge
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Auditorium <br /> Fakultas Matematika dan Ilmu Pengetahuan UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.757387978973203, 110.2920439]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Araya Stable Yogyakarta Horse Riding Club <br /> Klaci II,
            Margoluwih, Kec. Seyegan, Kabupaten Sleman, Daerah Istimewa
            Yogyakarta 55561
            <br /> <br />
            Berkuda
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Araya Stable <br /> Yogyakarta Horse Riding Club
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.775068775192918, 110.3822397]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Kolam Renang Fakultas Ilmu Keolahragaan UNY <br /> Jl. Kuningan
            No.1, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman,
            Daerah Istimewa Yogyakarta 55281
            <br /> <br />
            Renang
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Kolam Renang <br /> Fakultas Ilmu Keolahragaan UNY
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.7931888538708405, 110.3992110423277]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Padepokan Judo PJSI DIY <br /> Komplek BPKB BPO Dikpora DIY,
            Sorowajan, Banguntapan, Jomblangan, Banguntapan, Kec. Banguntapan,
            Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198
            <br /> <br />
            Judo
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Padepokan Judo <br /> PJSI DIY
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.7931888538708405, 110.3992110423277]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Gedung Olahraga Tridadi <br /> Jl. Dr. Radjimin, Paten, Tridadi,
            Kec. Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55511
            <br /> <br />
            Hockey
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Gedung Olahraga <br /> Tridadi
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.77570060012527, 110.37965426574996]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Lapangan Pos Pemadam Kebakaran UGM <br /> Jl. Colombo Yogyakarta
            No.3, RW.02, Sagan, Caturtunggal, Kec. Depok, Kabupaten Sleman,
            Daerah Istimewa Yogyakarta 55281
            <br /> <br />
            Orienteering Kota
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Lapangan <br /> Pos Pemadam Kebakaran UGM
            </p>
          </Tooltip>
        </Marker>
        <Marker
          position={[-7.767926053124619, 110.38606599717743]}
          icon={icon}
          riseOnHover
        >
          <Popup>
            Selasar Animal Science Learning Center Fakultas Peternakan <br />{" "}
            Jl. Fauna No.03, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55281
            <br /> <br />
            E-Sports
          </Popup>
          <Tooltip className="text-md font-montserrat">
            <p>
              Selasar Animal Science Learning Center <br /> Fakultas Peternakan
              UGM
            </p>
          </Tooltip>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
