import styles from "../Components/Home/Cabang.module.css";
import { useRef } from "react";
import { supporterList } from "../resources/dataKatalog";
import { HtmlHead } from "../Components/HtmlHead";

const Katalog = () => {
  const list = supporterList;
  const content = useRef(null);
  const width = window.innerWidth;

  const assetsCabang = `${process.env.PUBLIC_URL}/images/Cabang`;
  const assetsKatalog = `${process.env.PUBLIC_URL}/images/Katalog`;
  return (
    <>
      <HtmlHead title="Katalog" decription="[insert page description]" />
      <div className="min-h-screen">Katalog</div>
    </>
  );
};

export { Katalog };
