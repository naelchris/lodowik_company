import React from 'react';
import "./home.css"; // Keep your custom CSS if needed, but prioritize Tailwind
import "./homeResponsive.css"; // Keep your custom responsive CSS if needed
import photoBg from "../images/backgroung/homeBg.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import services from "../servicesPage/services.json";
import thoughts from "./peopleThoughts.json";
import CountUp from "react-countup";

import home1 from "../images/home/home1.jpg";
import hPoject1 from "../images/home/hProject1.jpg";
import hhProject2 from "../images/home/hProject2.jpg";
import hhProject3 from "../images/home/hProject3.jpg";
import hhProject4 from "../images/home/hProject4.jpg";
import hArticle1 from "../images/home/hArticle1.jpg";
import hArticle2 from "../images/home/hArticle2.jpg";
import hArticle3 from "../images/home/hArticle3.jpg";
import brand1 from "../images/brand1.svg";
import brand2 from "../images/brand2.svg";
import brand3 from "../images/brand3.svg";
import brand4 from "../images/brand4.svg";
import brand5 from "../images/brand5.svg";
import customer1 from "../images/home/customer.jpg";
import Slider1 from "../images/slider/SLIDE 1.jpg";
import Slider2 from "../images/slider/SLIDE 2.jpg";
import Slider3 from "../images/slider/SLIDE 3.jpg";
import Slider4 from "../images/slider/SLIDE 4.jpg";
import Slider5 from "../images/slider/SLIDE 5.jpg";

import { CarouselHome } from '../carousel/carouse';


import { Carousel, Typography, Button, slider } from "@material-tailwind/react";

export function Home() {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log(e.target);
    if (e.target.className === "article nochosen") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "article nochosen";
      }
      e.target.classList.remove("nochosen");
      e.target.classList.add("chosen");
    } else if (e.target.className === "article chosen") {
      e.target.className = "article nochosen";
    }
  };
  return (
    <div className="home"> {/* Consider replacing custom 'home' class with Tailwind padding/margin/layout */}

      {/* Section containing Home News and Carousel */}
      {/* flex-col by default (stacks vertically), md:flex-row (side-by-side on medium screens and up) */}
      {/* items-center (vertically centers in column), md:items-start (aligns to top in row) */}
      {/* gap-8 adds space between the two items, p-4 md:p-8 adds padding around this section */}
      <div className="w-screen flex flex-col md:flex-row items-center md:items-start gap-8 p-4 md:p-8">

        {/* Home News Section */}
        {/* w-full (full width on small), md:w-1/2 (half width on medium), lg:w-1/3 (one-third on large) */}
        <div className="w-screen md:w-1/2 lg:w-1/2">
          {/* Added Tailwind padding and text alignment for better appearance */}
          {/* Consider replacing custom 'homeNews' class with Tailwind styling */}
          <div className="homeNews p-4 md:p-0 text-center md:text-left">
            {/* Added Tailwind text styles for headings and paragraphs */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">PT. Holan Bangun Cipta</h1>
            <p className="text-gray-600 mb-6">
            Mulai proyek konstruksi Anda bersama mitra terpercaya, PT. Holan Bangun Cipta. Kami berpengalaman dalam membangun Gedung, Rumah, dan Ruko dengan mengedepankan kualitas dan profesionalisme.
            </p>
            <Link to="">
              {/* Added Tailwind button styles and responsive padding */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg inline-flex items-center transition duration-300 ease-in-out shadow-md hover:shadow-lg
                         py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8"> {/* Added responsive padding here */}
                Get Started
                {/* Adjusted margin and color for better contrast with button background */}
                <BsArrowRight style={{ marginLeft: "8px", color: "white" }} />
              </button>
            </Link>
          </div>
        </div>
        
        <div className="w-screen md:w-1/2 lg:w-2/3 max-w-screen-lg mx-auto">
          <CarouselHome />
        </div>
      </div>

      {/* Rest of your Home component code */}
      <div className="homeOther">
        <div className="homePlans">
          {/* {services.services
            .filter((services, index) => index < 3)
            .map((s, ind) => {
              return (
                <div className="homePlan" key={ind}>
                  <h2>{s.service_name}</h2>
                  <p>{s.service_content}</p>
                  <Link to={`/project-details`}>
                    <button>
                      Read More
                      <BsArrowRight
                        style={{ marginLeft: "4%", color: "#CDA274" }}
                      />
                    </button>
                  </Link>
                </div>
              );
            })} */}
        </div>
        <div className="homeAboutUs">
            <div className="hp-subtext">
              <h1>About PT. Holan Bagun Cipta</h1>
              <p>
              PT. Holan Bangun Cipta merupakan perusahaan yang bergerak di bidang konstruksi baik jasa konstruksi maupun pengadaan material yang meliputi pembangunan maupun renovasi : Gedung, Perumahan, Ruko, Real Estate, dll.
Kami memiliki banyak pengalaman dalam Pembangunan Gedung, Rumah, dan Ruko baik bersama Developer ataupun Perorangan.
Pengalaman kami mewujudkan impian banyak orang dalam proyek-proyek terdahulu bersama klien kami menjadi modal kami untuk terus membangun dan mengembangkan bisnis kami dengan mengedepankan kualitas dan dengan harga yang kompetitif.
Selaras dengan Program Pembangunan oleh pemerintah, PT. Holan Bangun Cipta bertekad berperan aktif di dalam melaksanakannya, dengan berlandaskan kepercayaan akan kemampuan diri secara profesional dan bertanggung jawab.
              </p>
              <div className="callUs">
          <div className="phoneNum">
            <p className="h-icon">
              <BsTelephone />
            </p>
            <a href="tel: +994 (070) 883-37-38">
              <p>
                +994 (070) 883-37-38
                <br />
                <span>Call Us Anytime</span>
              </p>
            </a>
            <br />
          </div>

          <Link to={`/contact`}>
            <button>
              Get Free Estimate
              <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
            </button>
          </Link>
        </div>
            </div>
            <div className="hp-img">
              <img src={home1} alt="concept"></img>
            </div>
        </div>
        {/* <div className="callUs">
          <div className="phoneNum">
            <p className="h-icon">
              <BsTelephone />
            </p>
            <a href="tel: +994 (070) 883-37-38">
              <p>
                +994 (070) 883-37-38
                <br />
                <span>Call Us Anytime</span>
              </p>
            </a>
            <br />
          </div>

          <Link to={`/contact`}>
            <button>
              Get Free Estimate
              <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
            </button>
          </Link>
        </div> */}
        <div className="people-thoughts">
          <h1>What People Think About Us</h1>
          <div className="people">
            {thoughts.people.map((req, ind) => {
              return (
                <div className="person" key={ind}>
                  <div className="person-title">
                    <div>
                      <img src={customer1} alt="customer"></img>
                    </div>
                    <p>
                      {req.fullname}
                      <br />
                      <span>{req.country}</span>
                    </p>
                  </div>
                  <p className="thought">{req.thoughts}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-brands">
          <ul>
            <ol>
              <img src={brand1} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand2} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand3} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand4} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand5} alt="brand"></img>
            </ol>
          </ul>
        </div>
        <div className="homeProjects">
          <h1>Follow Our Projects</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page lookings at its layouts.
          </p>
          <div className="hp-list">
            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hPoject1} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Kitchen</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject2} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Kitchen</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject3} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Kitchen</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject4} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Kitchen</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-experience">
        <div className="h-years">
        <CountUp className="h-year num" duration={4} end={12} />
          <p>Years Of Experience</p>
        </div>
        <div className="h-s-project">
        <CountUp duration={4} className="h-sp num" end={85} />
          <p>Success Project</p>
        </div>
        <div className="h-a-project">
        <CountUp duration={4} className="h-ap num" end={15} />
          <p>Active Project</p>
        </div>
        <div className="h-customers">
        <CountUp duration={4} className="h-cust num" end={95} />
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="articleNews">
        <h1>Articles & News</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts
        </p>
        <div className="articles">
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle1} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle2} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle3} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-interno">
        <h1>Wanna join the interno?</h1>
        <p>It is a long established fact will be distracted.</p>
        <Link to={`/contact`}>
          <button>
            Contact With Us
            <AiOutlineArrowRight
              style={{ marginLeft: "5px" }}
              color="#292F36"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
