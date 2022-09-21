import { HtmlHead } from "../Components/HtmlHead";
import Section1 from "../Components/Homepage/Section1";
import Section2 from "../Components/Homepage/Section2";

const Home = () => {
  return (
    <>
      {" "}
      <HtmlHead title="Beranda" decription="[insert page description]" />
      <main className="overflow-hidden">
        <Section1 />
        <Section2 />
      </main>
    </>
  );
};

export { Home };
