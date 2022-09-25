import { HtmlHead } from "../Components/HtmlHead";
import Section1 from "../Components/Homepage/Section1";
import Section2 from "../Components/Homepage/Section2";
import Section3 from "../Components/Homepage/Section3"

const Home = () => {
  return (
    <>
      {" "}
      <HtmlHead title="Beranda" decription="[insert page description]" />
      <main className="overflow-hidden">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </>
  );
};

export { Home };
