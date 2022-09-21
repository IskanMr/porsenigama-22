import { HtmlHead } from "../Components/HtmlHead";
import Section1 from "../Components/Homepage/Section1";

const Home = () => {
  return (
    <>
      {" "}
      <HtmlHead title="Beranda" decription="[insert page description]" />
      <main className="overflow-hidden">
        <Section1 />
      </main>
    </>
  );
};

export { Home };
