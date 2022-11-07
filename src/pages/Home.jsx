import { HtmlHead } from "../Components/HtmlHead";
import Logo from "../Components/Homepage/Logo";
import Tentang from "../Components/Homepage/Tentang";
import Inporse from "../Components/Homepage/Inporse";
import Peta from "../Components/Homepage/Peta";
import Lomba from "../Components/Homepage/Lomba";
import Sponsor from "../Components/Homepage/Sponsor";

const Home = () => {
  return (
    <>
      {" "}
      <HtmlHead title="Beranda" decription="[insert page description]" />
      <main className="overflow-hidden">
        <Logo />
        <Tentang id="tentang" />
        <Inporse />
        <Lomba />
        <Peta />
        <Sponsor />
      </main>
    </>
  );
};

export { Home };
