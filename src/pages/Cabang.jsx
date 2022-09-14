import { useState, useRef } from "react";
import styles from "../Components/Home/Cabang.module.css";
import { caborList, casenList } from "../resources/dataCabang";

const assetsCabang = `${process.env.PUBLIC_URL}/images/Cabang`;

const Cabang = () => {
  const [list, setList] = useState(caborList);
  const content = useRef(null);
  const width = window.innerWidth;

  return <>Cabang</>;
};

export { Cabang };
