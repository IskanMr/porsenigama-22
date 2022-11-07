import BorderSponsor from "../../assets/images/homepage/border-sponsor.png";
import LogoTelkomsel from "../../assets/images/homepage/logo-telkomsel.png";
import TigaBintang from "../../assets/images/homepage/3-bintang-sponsor.png";
import Kembang from "../../assets/images/homepage/kembang-sponsor.png";
import BorderSponsorMobile from "../../assets/images/homepage/border-sponsor-mobile.png";

const Sponsor = () => {
  return (
    <>
      <div className="bg-homepage-sponsor relative py-20 lg:py-36 z-20">
        <div className="bg-sponsor w-3/4 mx-auto rounded-medium bg-opacity-50 filter shadow-sponsor z-20 relative">
          <div className="py-6">
            <img src={BorderSponsor} className="mx-auto lg:block hidden" alt="" />
            <img src={BorderSponsorMobile} className="mx-auto lg:hidden" alt="" />
            <p
              className="lg:text-3xl text-2xl text-red lg:text-inporse font-universalserif absolute"
              style={{
                left: "50%",
                transform: "translate(-50%, -180%)",
              }}
            >
              SPONSOR
            </p>
            <div className="lg:w-1/2 lg:h-1/2 lg:p-10 p-10 mx-auto">
              <img src={LogoTelkomsel} alt="" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={TigaBintang} className="lg:block absolute bottom-56 left-0 z-30 hidden" alt="" />
          <img src={Kembang} className="lg:block absolute -bottom-32 left-96 z-0 hidden" alt="" />
        </div>
      </div>
    </>
  );
};

export default Sponsor;
