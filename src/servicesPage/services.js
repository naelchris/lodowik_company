import "./services.css";
import services from "./services.json";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import photo1 from "../images/services1.jpg";
import icon1 from "../images/Icon1.svg";
import photo2 from "../images/services2.jpg";
import icon2 from "../images/Icon2.svg";
import photo3 from "../images/services3.jpg";
import icon3 from "../images/Icon3.svg";
import photo4 from "../images/services4.jpg";
import icon4 from "../images/Icon4.svg";

//picture
import BangunRumahPic from "../images/product/bangunRumah/rumah 2.jpg"
import JasaDesignArsitek from "../images/product/arsitektur/IMG-20250423-WA0016.jpg"
import BangunInterior from "../images/product/interior/20240129_130412.jpg"
import JasaAluminium from "../images/product/aluminium/20250422_111804.jpg"
import Kanopi from "../images/product/kanopi/20250306_143028.jpg"
import JasaRovasiRumah from "../images/product/renovasiRumah/20250422_111027.jpg"

export function Services() {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log("pClass1", pClass);
    if (e.target.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.classList.add("selected-type");
    } else if (e.target.className === "service-type selected-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };

  const handleChangeTwo = (e) => {
    const pClass = e.target.parentElement.parentElement;
    console.log("pClass2", pClass);
    if (e.target.parentElement.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.parentElement.classList.add("selected-type");
    } else if (e.target.parentElement.className === "service-type selected-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };

  return (
    <div className="services">
      <div className="services-header">
        <h1>
          Services<p>Home / Services</p>
        </h1>
      </div>
      <div className="service-types">
          <div className="service-type" onClick={handleChange} key="1">
              <div className="service-card-image-container">
                <img 
                  src={BangunRumahPic} // Use actual image URL or a placeholder
                  alt="bangunRumah"
                  className="service-card-image" 
                />
              </div>
              <h2 onClick={handleChangeTwo}>Bangun Rumah</h2>
              <p onClick={handleChangeTwo}>Rumah adalah bangunan impian setiap keluarga, mari bangun rumah impian anda.</p>
              <Link to={`/bangun-rumah`}>
                <button>
                  Read More{" "}
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </Link>
          </div>
          <div className="service-type" onClick={handleChange} key="2">
              <div className="service-card-image-container">
                <img 
                  src={JasaDesignArsitek} // Use actual image URL or a placeholder
                  alt="DesingArsitektur"
                  className="service-card-image" 
                />
              </div>
              <h2 onClick={handleChangeTwo}>Jasa Design Arsitektur</h2>
              <p onClick={handleChangeTwo}>Bersama Dengan para arsitek Holan Bangun Cipta, kami siap mendesign rumah anda.</p>
              <Link to={`/jasa-arsitek`}>
                <button>
                  Read More{" "}
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </Link>
          </div>
          <div className="service-type" onClick={handleChange} key="3">
              <div className="service-card-image-container">
                <img 
                  src={BangunInterior} // Use actual image URL or a placeholder
                  alt="interiorWorks"
                  className="service-card-image" 
                />
              </div>
              <h2 onClick={handleChangeTwo}>Pekerjaan Interior</h2>
              <p onClick={handleChangeTwo}>Your home should tell the story of who you are, and be a collection of what you love. Kami siap membangun Interior Rumah anda.</p>
              <Link to={`/jasa-interior`}>
                <button>
                  Read More{" "}
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </Link>
          </div>
          <div className="service-type" onClick={handleChange} key="4">
              <div className="service-card-image-container">
                <img 
                  src={JasaAluminium} // Use actual image URL or a placeholder
                  alt="JasaAluminium"
                  className="service-card-image" 
                />
              </div>
              <h2 onClick={handleChangeTwo}>Pembuatan Aluminium, Jendela dan Pintu</h2>
              <p onClick={handleChangeTwo}>Kami mampu dan siap membuat bentuk Aluminium, Jendela dan Pintu anda.</p>
              <Link to={`/jasa-aluminium`}>
                <button>
                  Read More{" "}
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </Link>
          </div>
          <div className="service-type" onClick={handleChange} key="5">
              <div className="service-card-image-container">
                <img 
                  src={Kanopi} // Use actual image URL or a placeholder
                  alt="Kanopi"
                  className="service-card-image" 
                />
              </div>
              <h2 onClick={handleChangeTwo}>Pembuatan Kanopi, Railing dan Kisi Kisi</h2>
                <p onClick={handleChangeTwo}>Taking in the skyline from a whole new angle. Kami siap membangun Kanopi, Railing dan Kisi Kisi rumah anda.</p>
              <Link to={`/jasa-kanopi`}>
                <button>
                  Read More{" "}
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </Link>
          </div>
          <div className="service-type" onClick={handleChange} key="5">
              <div className="service-card-image-container">
                <img 
                  src={JasaRovasiRumah} // Use actual image URL or a placeholder
                  alt="Kanopi"
                  className="service-card-image" 
                />
              </div>
              <h2 onClick={handleChangeTwo}>Ronovasi Rumah</h2>
                <p onClick={handleChangeTwo}>Kami sigap dan handal untuk merenovasi rumah anda.</p>
              <Link to={`/jasa-renovasi`}>
                <button>
                  Read More{" "}
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </Link>
          </div>

        {/* {services.services.map((type, index) => {
          return (
            <div className="service-type" onClick={handleChange} key={index}>
              <div className="service-card-image-container">
                <img 
                  src={type.service_image_url} // Use actual image URL or a placeholder
                  alt={type.service_name} 
                  className="service-card-image" 
                />
              </div>
              <h2 onClick={handleChangeTwo}>{type.service_name}</h2>
              <p onClick={handleChangeTwo}>{type.service_content}</p>
              <Link to={`/servicesingle`}>
                <button>
                  Read More{" "}
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </Link>
            </div>
          );
        })} */}
      </div>
      <div className="howWeWork">
        <div className="how-title">
          <h1>How We Work</h1>
          <p>
            It is a long established fact will be distracted.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="how-content">
            <div className="hc-img">
                <img src={photo1} alt='concept'></img>
            </div>
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon1} alt="icon"></img>
                    <p>01</p>
                </div>
                <div className="hc-subtext">
                    <h2>Concept & Details</h2>
                    <p>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
                </div>
            </div>
        </div>
            
        <div className="how-content">
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon2} alt="icon"></img>
                    <p>02</p>
                </div>
                <div className="hc-subtext">
                    <h2>Idea for work</h2>
                    <p>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
                </div>
            </div>
            <div className="hc-img">
                <img src={photo2} alt='concept'></img>
            </div>
        </div>
        
        <div className="how-content">
            <div className="hc-img">
                <img src={photo3} alt='concept'></img>
            </div>
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon3} alt="icon"></img>
                    <p>03</p>
                </div>
                <div className="hc-subtext">
                    <h2>Design</h2>
                    <p>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
                </div>
            </div>
        </div>
        
        <div className="how-content">
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon4} alt="icon"></img>
                    <p>04</p>
                </div>
                <div className="hc-subtext">
                    <h2>Perfection</h2>
                    <p>It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry. </p>
                </div>
            </div>
            <div className="hc-img">
                <img src={photo4} alt='concept'></img>
            </div>
        </div>
      </div>

    </div>
  );
}
