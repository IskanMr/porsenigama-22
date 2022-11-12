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
            <img 
              src={BorderSponsor} 
              className="mx-auto lg:block hidden" 
              alt="Dekorasi kertas" 
            />
            <img 
              src={BorderSponsorMobile} 
              className="mx-auto lg:hidden" 
              alt="Dekorasi kertas" 
            />
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
              <img 
                src={LogoTelkomsel} 
                alt="Logo Telkomsel" 
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src={TigaBintang} 
            className="hidden lg:block absolute w-44 xl:w-48 2xl:w-56 bottom-64 2xl:bottom-64 left-0 z-30" 
            alt="Dekorasi tiga bintang" 
          />
          <img 
            src={Kembang} 
            className="hidden lg:block absolute w-28 xl:w-32 2xl:w-36 -bottom-20 right-32 2xl:right- z-0" 
            alt="Dekorasi" 
          />
        </div>
      </div>
    </>
  );
};

export default Sponsor;
