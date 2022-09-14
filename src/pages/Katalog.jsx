import styles from "../Components/Home/Cabang.module.css";
import { useRef } from "react";
import { supporterList } from "../resources/dataKatalog";

const Katalog = () => {
  const list = supporterList;
  const content = useRef(null);
  const width = window.innerWidth;

  const assetsCabang = `${process.env.PUBLIC_URL}/images/Cabang`;
  const assetsKatalog = `${process.env.PUBLIC_URL}/images/Katalog`;
  return <>Katalog</>;
};

export { Katalog };
