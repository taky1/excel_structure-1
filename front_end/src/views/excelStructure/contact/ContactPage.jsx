import React, { useEffect, useState } from "react";
import "./contact.css";
import MALLEMORT from "../../../images/MALLEMORT.PNG";
import image20 from "../../../images/image20.jpg";
import Linkedin from "../../../assets/Linkedin";
import Phone from "../../../assets/Phone";
import Mobile from "../../../assets/Mobile";
import Mail from "../../../assets/Mail";
import Itinerary from "../../../assets/Itinerary";
import Footer from "../footer/Footer";
import CarteFrance from "./../../../assets/carteFrance.svg";

const ContactPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const handleClickOpenMaps = () => {
  //     const destinationAddress = "Excel Structure, France";
  //     const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(destinationAddress)}`;
  //     window.open(googleMapsUrl, "_blank");
  // };

  const handleClickOpenMaps = () => {
    window.open("/google-map?width=96%&height=650px&margin=2%", "_blank");
  };

  const handleClickOpenItinerary = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const destinationAddress = "Excel Structure, France";
        const googleMapsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${encodeURIComponent(
          destinationAddress
        )}`;
        window.open(googleMapsUrl, "_blank");
      },
      (error) => {
        console.error("Erreur de géolocalisation :", error);
      }
    );
  };

  return (
    <div>
      <div className="image-background-main">
        <img src={MALLEMORT} alt="villa" />
        {/* <div className="btn-contact">
          <div className="title-btn-contact">Contacter nous</div>
          <div className="sub-title-btn-contact">Accueil / Contact</div>
        </div> */}
      </div>

      <div>
        <div className="title-contact-header">Contacter nous</div>
        <div className="sub-title-contact-header">Accueil / Contact</div>
      </div>

      <div className="title-contact">
        Nous sommes toujours à votre disposition
      </div>

      <div className="sub-title-contact">
        Pour bénéficier de la formule qui vous correspond le mieux,
        <b>contactez nous par Téléphone</b> ,
        <br />
        ou de vous rendre à <b>nos locaux</b>.
      </div>

      <div className="main-contact">
        <div className="carte-france-container">
          <img
            src={CarteFrance}
            alt="CarteFrance"
            style={{
              width: "85%",
              height: "85%",
            }}
          />
        </div>

        <div className="group-card-contact">
          <div className="card-contact">
            <div className="item-card-contact">
              <div className="circle-contact">
                <Mail />
              </div>
              <div className="text-item-contact">
                excelstructureingenierie@gmail.com
                <br />
                contact@excelstructure.fr
              </div>
            </div>

            <div className="item-card-contact">
              <div className="circle-contact">
                <Phone />
              </div>
              <div className="text-item-contact">33 4 94 49 62 18</div>
            </div>

            <div className="item-card-contact">
              <div className="circle-contact">
                <Mobile />
              </div>
              <div className="text-item-contact">33 6 67 90 01 84</div>
            </div>

            <div className="item-card-contact">
              <div className="circle-contact">
                <Linkedin />
              </div>
              <div className="text-item-contact">
                <a
                  href="https://www.linkedin.com/company/excel-structure-ingenierie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "gray" }}
                >
                  EXCEL STRUCTURE INGENIERIE
                </a>
              </div>
            </div>
          </div>

          <div className="group-btn-contact">
            <button
              className="btn-contact-itinerary"
              onClick={handleClickOpenItinerary}
            >
              {windowWidth > 1024 && <Itinerary />}
              ITINÉRAIRE
            </button>

            <button className="btn-contact-map" onClick={handleClickOpenMaps}>
              Ouvrir Google Maps
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
