import "./contact.css";
import { GiWorld } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>
          Contact Us<p>Home / Contact</p>
        </h1>
      </div>
      <div className="contact-content">
        <h2>Kirimkan Kami Pesan        </h2>
        <div className="contact-form">
          <div className="contact-form-info">
            <div className="icons">
              <p>
                <span className="icon">
                  <HiOutlineMail />
                </span>
                <a href="mailto: info@yourdomain.com">Email HolanBangunCipta</a>
              </p>
              <p>
                <span className="icon">
                  <BsTelephone />
                </span>
                <a href="https://wa.me/08118743635">WA +62 8118983634</a>
              </p>
              <p>
                <span className="icon">
                  <GiWorld />
                </span>
                <a href="www.yourdomain.com">www.yourdomain.com</a>
              </p>
            </div>
            
          </div>
          <div className="contact-form-fill">
            <div className="nameEmail">
              <input name="fullname" placeholder="Name" />
              <input name="mail" placeholder="Email" />
            </div>
            <div className="subjectPhone">
              <input name="subject" placeholder="Subject" />
              <input name="phone" placeholder="Phone" />
            </div>
            <div className="interested">
              <textarea name="interested" placeholder="Hello, I am interested in.." />
            </div>
            <div className="send">
              <button>
                Send Now
                <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8816.592862389463!2d84.9503004!3d56.4652076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x432694a9e00718cd%3A0xc86903a0f950f17e!2sMuzey%20Istorii%20Tpu!5e0!3m2!1sid!2sid!4v1747637981157!5m2!1sid!2sid"
          title="map"
          style={{
            frameborder: "0",
            allowfullscreen: "",
            ariaHidden: "false",
            tabindex: "0",
            width: "800px",
            height: "350px",
          }}
        ></iframe>
      </div>
    </div>
  );
}
