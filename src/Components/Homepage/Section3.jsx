import VectorKiri from "../../assets/images/homepage/vektor-kiri-section-3.png";
import VectorKanan from "../../assets/images/homepage/vektor-kanan-section-3.png";
import BorderInporse from "../../assets/images/homepage/border-inporse-section-3.png";
import PaperKiri from "../../assets/images/homepage/paper-kiri-section-3.png";
import PaperKanan from "../../assets/images/homepage/paper-kanan-section-3.png";
import BorderInporseMobile from "../../assets/images/homepage/border-inporse-mobile.png";

const Section3 = () => {
  return (
    <>
      <div className="z-10 relative bg-homepage-section-3 pt-80">
        <img src={BorderInporseMobile} className="mx-auto transform translate-x-2" alt="" />
        <h2
          className="font-universalserif text-3xl text-yellow absolute text-center"
          style={{
            top: "90%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          INPORSE
        </h2>
        <img
          src={VectorKiri}
          className="absolute top-96 left-10 hidden"
          alt=""
        />
        <img
          src={VectorKanan}
          className="absolute right-9 top-32rem hidden"
          alt=""
        />
        <img src={BorderInporse} className="mx-auto hidden" alt="" />
        {/* <h2
          className="font-universalserif text-3xl text-yellow z-10 mx-auto absolute"  style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          INPORSE
        </h2> */}
        <img
          src={PaperKiri}
          className="left-0 bottom-0 absolute hidden"
          alt=""
        />
        <img
          src={PaperKanan}
          className="right-0 bottom-0 absolute hidden"
          alt=""
        />
      </div>
    </>
  );
};

export default Section3;
