import { useState, useRef } from "react";
import { HtmlHead } from "../Components/HtmlHead";
import { caborList, casenList } from "../resources/dataCabang";

const assetsCabang = `${process.env.PUBLIC_URL}/images/Cabang`;

const Cabang = () => {
  const [list, setList] = useState(caborList);
  const content = useRef(null);
  const width = window.innerWidth;

  return (
    <>
      <HtmlHead title="Cabang" decription="[insert page description]" />
      <div className="min-h-screen">Cabang</div>
    </>
  );
};

export { Cabang };
