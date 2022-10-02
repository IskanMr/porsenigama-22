import { useState } from "react";

import { HtmlHead } from "../Components/HtmlHead";
import { FAQ } from "../Components/Faq/Faq";

import { ReactComponent as Search } from "../assets/icons/search.svg";
import Title from "../assets/images/faq/faqTitle.png";

import Questions from "../resources/questions.json";
import { openInNewTab } from "../utils/openInNewTab";

const Faq = () => {
  const [list, setList] = useState(Questions);
  const [clicked, setClicked] = useState("semua");

  const buttonStyle = "bg-white ";
  const clickedButtonStyles = "bg-purple text-white";

  const onFilterChange = (e) => {
    if (e.tab != null) {
      setClicked(e.tab);
      var x =
        e.tab === "semua" ? Questions : Questions.filter((a) => a.id == e.tab);
      x = x.filter((a) =>
        a.question.toLowerCase().includes(e.input == null ? "" : e.input)
      );
    } else {
      var x =
        clicked === "semua"
          ? Questions
          : Questions.filter((a) => a.id == clicked);
      x = x.filter((a) =>
        a.question.toLowerCase().includes(e.input == null ? "" : e.input)
      );
    }
    setList(x);
  };

  const categories = [
    { id: "semua", name: "Semua" },
    { id: "umum", name: "Umum" },
    { id: "cabang-olahraga", name: "Olahraga" },
    { id: "tangkai-seni", name: "Seni" },
  ];

  return (
    <>
      <HtmlHead title="Faq" decription="[insert page description]" />
      <div className="min-h-screen bg-blue font-body px-6 md:px-0 pb-9">
        <div className="flex flex-col w-full justify-items-center items-center">
          <span>
            <img src={Title} alt="title" />
          </span>

          <div className="flex w-full mt-6 justify-items-center place-content-center">
            <label className="flex w-full md:w-2/5 p-3 bg-white items-center text-sm md:text-base border-2 border-black">
              <span>
                <Search className="h-4 md:h-5" />
              </span>
              <input
                className="flex flex-grow ml-1 md:ml-2 border-none outline-none"
                placeholder="Ketik pertanyaanmu..."
                type="text"
                onChange={(e) => {
                  onFilterChange({ input: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="flex w-full md:w-3/12 justify-items-center items-center place-content-center mt-3 gap-1 md:gap-3">
            {categories.map((category) => (
              <button
                type="button"
                onClick={() => onFilterChange({ tab: category.id })}
                className={`${
                  clicked === category.id ? clickedButtonStyles : buttonStyle
                } flex flex-1 px-2 py-1 md:px-4 md:py-2 transition ease-in-out duration-300 border-2 border-purple text-sm md:text-base`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex flex-col w-100 md:w-3/4">
            {list.map((item) => (
              <FAQ item={item} />
            ))}
          </div>
        </div>
        {/* <div className="flex justify-center mt-4 md:mt-8">
          Pertanyaan kamu tidak ada di laman ini? Silahkan hubungi
          <button
            type="button"
            onClick={() => openInNewTab("https://line.me/R/ti/p/@NRB2565A")}
            className="ml-1 text-white hover:text-yellow transition ease-in-out duration-300"
          >
            {" "}
            sini
          </button>
        </div> */}
      </div>
    </>
  );
};

export { Faq };
