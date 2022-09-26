import { useState } from "react";

import { HtmlHead } from "../Components/HtmlHead";
import { FAQ } from "../Components/Faq/Faq";

import { ReactComponent as Search } from "../assets/icons/search.svg";
import Title from "../assets/images/faq/faqTitle.png";

import Questions from "../resources/questions.json";
import { openInNewTab } from "../utils/openInNewTab";

const Faq = () => {
  const [list, setList] = useState(Questions);
  const onInputChange = (e) => {
    setList(Questions.filter((a) => a.question.toLowerCase().includes(e)));
  };
  const onTabCategoryChange = (e) => {
    setList(Questions.filter((a) => a.id === e));
  };

  const categories = [
    { id: "umum", name: "Umum" },
    { id: "cabang-olahraga", name: "Olahraga" },
    { id: "tangkai-seni", name: "Seni" },
  ];

  return (
    <>
      <HtmlHead title="Faq" decription="[insert page description]" />
      <div className="min-h-screen bg-blue">
        <div className="flex flex-col w-full justify-items-center items-center">
          <span>
            <img src={Title} className="" alt="title" />
          </span>

          <div className="flex w-full mt-6 justify-items-center place-content-center">
            <label className="flex w-full md:w-2/4 p-3 bg-white rounded-xl items-center text-sm md:text-base">
              <span>
                <Search className="h-4 md:h-5" />
              </span>
              <input
                className="flex flex-grow ml-1 md:ml-2 border-none outline-none"
                placeholder="Ketik pertanyaanmu..."
                type="text"
                onChange={(e) => {
                  onInputChange(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="flex w-full justify-items-center items-center">
            {categories.map((category) => (
              <button onClick={() => onTabCategoryChange(category.id)}>
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
        <div className="flex justify-center mt-4 md:mt-8">
          Pertanyaan kamu tidak ada di laman ini? Silahkan hubungi
          <button
            type="button"
            onClick={() => openInNewTab("https://line.me/R/ti/p/@NRB2565A")}
            className="ml-1 text-oranges-default hover:text-oranges-light transition ease-in-out duration-300"
          >
            {" "}
            sini
          </button>
        </div>
      </div>
    </>
  );
};

export { Faq };
