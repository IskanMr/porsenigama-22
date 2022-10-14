import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export function FAQ({ item }) {
  const disclosureContainerCSS = "my-2 bg-yellow items-center";
  const disclosureButtonCSSClose =
    "flex justify-between items-center w-full p-3 md:px-6 md:py-4 text-md md:text-lg text-left focus:outline-none ";
  const disclosureButtonCSSOpen =
    "flex justify-between items-center w-full p-3 md:px-6 md:py-4 text-md md:text-lg text-left focus:outline-none shadow-md";

  const disclosurePanelCSS =
    "p-3 md:px-6 md:py-4 pb-2 items-center text-sm md:text-base";
  const openPanelChevronIconCSS = "transform rotate-180";
  const ChevronIconCSS = "w-5 h-5 md:w-7 md:h-7 text-cstmdarkergreen";

  return (
    <>
      <Disclosure as="div" className={disclosureContainerCSS}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={
                open ? disclosureButtonCSSOpen : disclosureButtonCSSClose
              }
            >
              <div className="flex items-center text">
                <span className="flex-grow">{item.question}</span>
              </div>

              <ChevronDownIcon
                className={`hidden md:flex ${
                  open ? openPanelChevronIconCSS : ""
                } ${ChevronIconCSS}`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              {open && (
                <Disclosure.Panel static className={disclosurePanelCSS}>
                  <div className="flex flex-col">
                    {item.answer !== "null" ? item.answer : null}
                    <ul className={`list-disc ml-4`}>
                      {item.lists !== "null"
                        ? item.lists.map((list, id) => <li key={id}>{list}</li>)
                        : null}
                    </ul>
                  </div>
                </Disclosure.Panel>
              )}
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
}
