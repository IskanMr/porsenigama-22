import { Hasil } from "./Hasil";
import { dataFotografi } from "../../resources/dataFotografi";

const assetsCabangDetail = `${process.env.PUBLIC_URL}/images/CabangDetail`;

const Fotografi = ({ id, openModal }) => {
  return (
    <div className="flex flex-col justify-center bg-pattern-cabangDetail bg-cover">
      <h2 className="mx-auto font-nuku text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white hidden">
        Hasil Karya
      </h2>
      <div className="mt-10 mb-20 lg:mb-28 mt-28 2xl:mt-36">
        <Hasil id={id} />
      </div>
      <ul className="flex flex-wrap gap-2">
        {/* {dataFotografi.map((_, id) => (
          <li key={id + 1} className="flex-grow sm:h-64">
            <button className="w-full h-full" onClick={() => openModal(id)}>
              <img
                loading="lazy"
                className="min-w-full max-h-full object-cover"
                src={`${assetsCabangDetail}/fotografi/${id + 1}.jpg`}
                alt=""
              ></img>
            </button>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export { Fotografi };
