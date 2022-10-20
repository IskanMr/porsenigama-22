const dataVenue = [
  {
    id: 1,
    coordinate: [-7.7712441881997645, 110.37916765767226],
    gmaps: "https://goo.gl/maps/XFXKyXTh7RX2hhqL9",
    namagedung: "Gedung Poerbatjaraka Fakultas Ilmu Budaya UGM",
    alamatgedung:
      "Jl. Sosio Humaniora No.1, Sagan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Tari",
  },
  {
    id: 2,
    coordinate: [-7.766856213451043, 110.38098074232775],
    gmaps: "https://goo.gl/maps/sjrrWrFjBNcJQg7V7",
    namagedung: "Auditorium Fakultas Kehutanan UGM",
    alamatgedung:
      "Jl. Agro Bulaksumur No.1, Caturtunggal, Yogyakarta, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Vokal Keroncong",
  },
  {
    id: 3,
    coordinate: [-7.770614660306203, 110.38070545396639],
    gmaps: "https://goo.gl/maps/WR8PQqLxCvsa1K4w5",
    namagedung: "Selasar Fakultas Filsafat UGM",
    alamatgedung:
      "Jl. Olahraga, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Lukis",
  },
  {
    id: 4,
    coordinate: [-7.772014936648914, 110.37851084232773],
    gmaps: "https://goo.gl/maps/hvH8SmihpBEj8igW8",
    namagedung: "Auditorium Soegondo Fakultas Ilmu Budaya UGM",
    alamatgedung:
      "Universitas Gadjah Mada, Sagan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Vokal Grup, Monolog",
  },
  {
    id: 5,
    coordinate: [-7.770203972236078, 110.38197504232772],
    gmaps: "https://goo.gl/maps/wjD4pnnkYYjKfXNt5",
    namagedung: "Kantong Parkir Kopi Lembah UGM",
    alamatgedung:
      "Jl. Lembah UGM, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Band",
  },
  {
    id: 6,
    coordinate: [-7.771783297874965, 110.382113052955],
    gmaps: "https://goo.gl/maps/mm5QaB6gzveeknyf8",
    namagedung: "Gedung Olahraga Lembah UGM",
    alamatgedung:
      "Universitas Gadjah Mada, Caturtunggal, Kec.Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Bulutangkis, Karate, Silat, Taekwondo, Kempo, Tenis Meja",
  },
  {
    id: 7,
    coordinate: [-7.769065287343478, 110.38481202597193],
    gmaps: "https://goo.gl/maps/vv8L8vBkMEGJSv86A",
    namagedung: "Gedung Olahraga Pancasila UGM",
    alamatgedung:
      "Karang Gayam, Caturtunggal, Kec. Depok Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Bola Basket, Bola Voli, Futsal, Sepakbola, Atletik, Panahan",
  },
  {
    id: 8,
    coordinate: [-7.770754093799728, 110.38281020793278],
    gmaps: "https://goo.gl/maps/sJxAdhzfpebp4BNWA",
    namagedung: "Lapangan Softball UGM",
    alamatgedung:
      "Karang Gayam, Caturtunggal, Kec. Depok Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Softball",
  },
  {
    id: 9,
    coordinate: [-7.767394370529252, 110.37731784232771],
    gmaps: "https://goo.gl/maps/hoxMMPDbkcYg1y936",
    namagedung:
      "Ruang Kelas Fakultas Matematika dan Ilmu Pengetahuan UGM (Ruangan 101-105 dan 201-205)",
    alamatgedung:
      "Sekip Utara Bulaksumur Kotak Pos 21, Jl. Geografi, Sendowo, Sinduadi, Kec. Mlati Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Catur",
  },
  {
    id: 10,
    coordinate: [-7.767093231144884, 110.37764498071837],
    gmaps: "https://goo.gl/maps/hoxMMPDbkcYg1y936",
    namagedung: "Auditorium Fakultas Matematika dan Ilmu Pengetahuan UGM",
    alamatgedung:
      "Sendowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "Bridge",
  },
  {
    id: 11,
    coordinate: [-7.757387978973203, 110.2920439],
    gmaps: "https://goo.gl/maps/DNQcTJiyxJLpxeYDA",
    namagedung: "Araya Stable Yogyakarta Horse Riding Club",
    alamatgedung:
      "Klaci II, Margoluwih, Kec. Seyegan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55561",
    lomba: "Berkuda",
  },
  {
    id: 12,
    coordinate: [-7.775068775192918, 110.3822397],
    gmaps: "https://g.page/kolamrenangfikuny?share",
    namagedung: "Kolam Renang Fakultas Ilmu Keolahragaan UNY",
    alamatgedung:
      "Jl. Kuningan No.1, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman,Daerah Istimewa Yogyakarta 55281",
    lomba: "Renang",
  },
  {
    id: 13,
    coordinate: [-7.7931888538708405, 110.3992110423277],
    gmaps: "https://goo.gl/maps/gkspasfCh9yMihWt7",
    namagedung: "Padepokan Judo PJSI DIY",
    alamatgedung:
      "Komplek BPKB BPO Dikpora DIY, Sorowajan, Banguntapan, Jomblangan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198",
    lomba: "Judo",
  },
  {
    id: 14,
    coordinate: [-7.7931888538708405, 110.3992110423277],
    gmaps: "https://goo.gl/maps/z6aJ8f5hypPiS1oQ9",
    namagedung: "Gedung Olahraga Tridadi",
    alamatgedung:
      "Jl. Dr. Radjimin, Paten, Tridadi, Kec. Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55511",
    lomba: "Hoki",
  },
  {
    id: 15,
    coordinate: [-7.77570060012527, 110.37965426574996],
    gmaps: "https://goo.gl/maps/M3Xxa9Avfht1Bfxw8",
    namagedung: "Lapangan Pos Pemadam Kebakaran UGM",
    alamatgedung:
      "Jl. Colombo Yogyakarta No.3, RW.02, Sagan, Caturtunggal, Kec. Depok, Kabupaten Sleman,Daerah Istimewa Yogyakarta 55281",
    lomba: "Orienteering Kota",
  },
  {
    id: 16,
    coordinate: [-7.767926053124619, 110.38606599717743],
    gmaps: "https://goo.gl/maps/2ZMez724oDHjd9zMA",
    namagedung:
      "Selasar Animal Science Learning Center Fakultas Peternakan UGM",
    alamatgedung:
      "Jl. Fauna No.03, Karang Gayam, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    lomba: "E-Sports",
  },
];

export { dataVenue };
