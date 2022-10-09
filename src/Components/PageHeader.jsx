import { useState } from "react";
import { NavLink as NavLinkStock } from "react-router-dom";

import styles from "../styles/PageHeader.module.css";

import { ReactComponent as HamburgerIcon } from "../assets/icons/list.svg";
import { ReactComponent as RetractUpIcon } from "../assets/icons/chevron-up.svg";

const footLinks = [
  { name: "Beranda", url: "/" },
  { name: "Klasemen", url: "/klasemen" },
  { name: "Cabang", url: "/cabang" },
  { name: "Galeri", url: "/galeri" },
  { name: "Faq", url: "/faq" },
  { name: "Katalog", url: "/katalog" },
];

const assets = `${process.env.PUBLIC_URL}/images/`;

export function PageHeader({ className }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MobileIcon = isMobileMenuOpen ? RetractUpIcon : HamburgerIcon;

  const NavLink = ({ to, external, children }) => {
    const LinkComponent = external ? "a" : NavLinkStock;
    return (
      <LinkComponent
        {...{
          [external ? "href" : "to"]: to,
        }}
        className={` text-white hover:text-yellow block p-4`}
        onClick={() => {
          setMobileMenuOpen(false);
        }}
      >
        {children}
      </LinkComponent>
    );
  };

  return (
    <header
      className={`
             z-50 sticky top-0 w-full flex shadow-lg items-start text-white font-medium bg-red md:px-12 md:py-1 ${
               className ? ` ${className}` : ""
             }`}
    >
      <NavLinkStock
        to={"/2022/porsenigama/"}
        className="flex flex-shrink-0 pl-2 md:pl-6 pb-2 pt-2 md:pr-8 items-center align-middle justify-items-center uppercase group"
      >
        <img
          src={assets + "logo-psg.png"}
          alt="logo"
          className="h-10 w-auto md:h-14"
        />
        <div className="text-white ml-2 text-xl md:text-2xl group-hover:text-oranges-default transition ease-in-out duration-300">
          Porsenigama UGM 2022
        </div>
      </NavLinkStock>
      <div className={`${styles.navContainer} flex-grow text-base md:text-lg`}>
        <nav
          className={`fixed w-full md:w-auto left-0 top-0 md:static bg-red md:bg-transparent flex flex-col md:flex-row md:h-full justify-center md:justify-end text-center py-3 pt-16 md:p-0 -z-1 ${
            !isMobileMenuOpen ? "transform -translate-y-full" : " shadow-lg"
          } transition-transform duration-300 md:transform-none md:transition-none`}
        >
          {footLinks.map((footLink) => (
            <>
              <NavLink to={`${process.env.PUBLIC_URL}${footLink.url}`}>
                {footLink.name}
              </NavLink>
            </>
          ))}
        </nav>
        <button
          type="button"
          className="block md:hidden p-4 hover:bg-opacity-10 active:bg-opacity-20 transition-colors mr-0 ml-auto"
          onClick={() => {
            setMobileMenuOpen((prevVal) => !prevVal);
          }}
        >
          <MobileIcon
            className={`${styles.mobileIcon} text-white block h-6 w-auto`}
          />
        </button>
      </div>
    </header>
  );
}
