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

import home1 from "../images/project/pembangunanRumah/20240911_140300.jpg";
import hPoject1 from "../images/product/interior/20240129_130412.jpg";
import hhProject2 from "../images/product/bangunRumah/rumah 2.jpg";
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
  const aboutSectionRef = React.useRef(null);
  const projectsSectionRef = React.useRef(null); // New ref for the projects section

  const canSnapToAboutRef = React.useRef(true); // Flag to control if snapping is allowed
  const canSnapToProjectsRef = React.useRef(false); // Flag for projects section, starts false
  const isSnappingRef = React.useRef(false);   // Flag to prevent re-triggering during a snap

  React.useEffect(() => {
    // Initialize flags based on initial scroll position
    const initialScrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollThresholdForInitialAboutCheck = viewportHeight * 0.20; // A bit less for initial check

    if (initialScrollY > scrollThresholdForInitialAboutCheck) {
      canSnapToAboutRef.current = false;
      // If loaded past 'About' trigger, check if we should be ready for 'Projects'
      // This logic will be more robustly handled by the first call to handleScroll
      // For now, keep canSnapToProjectsRef.current as false; handleScroll will adjust it.
      canSnapToProjectsRef.current = false; 
    } else {
      canSnapToAboutRef.current = true;
      canSnapToProjectsRef.current = false;
    }

    const handleScroll = () => {
      if (isSnappingRef.current) {
        return; // Do nothing if a snap animation is in progress
      }

      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // --- Try to snap to About Us section ---
      if (aboutSectionRef.current && canSnapToAboutRef.current) {
        const scrollDownThresholdForAbout = viewportHeight * 0.25;
        if (currentScrollY > scrollDownThresholdForAbout) {
          isSnappingRef.current = true;
          aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          canSnapToAboutRef.current = false;    // Disable this snap
          canSnapToProjectsRef.current = true;  // Enable next snap to Projects
          setTimeout(() => { isSnappingRef.current = false; }, 1000);
          return; // Exit after initiating snap
        }
      }

      // --- If past AboutUs, try to snap to Projects section ---
      // This block also handles the case where the page loads scrolled past AboutUs.
      // If canSnapToAboutRef is false (already snapped or loaded past)
      // AND canSnapToProjectsRef is false (Projects snap hasn't been enabled by AboutUs snap yet, or it's been reset)
      // THEN, we might need to enable canSnapToProjectsRef if we are in the right scroll zone.
      if (aboutSectionRef.current && projectsSectionRef.current && !canSnapToAboutRef.current && !canSnapToProjectsRef.current) {
        const aboutSectionTop = aboutSectionRef.current.offsetTop;
        const projectsSnapTriggerPoint = aboutSectionTop + (viewportHeight * 0.25);
        // If current scroll is past AboutUs top but not yet past where Projects would snap
        if (currentScrollY > aboutSectionTop && currentScrollY < projectsSnapTriggerPoint) {
            canSnapToProjectsRef.current = true; // Make eligible for projects snap
        }
      }
      
      if (projectsSectionRef.current && canSnapToProjectsRef.current && !canSnapToAboutRef.current) {
        const aboutSectionTop = aboutSectionRef.current ? aboutSectionRef.current.offsetTop : currentScrollY;
        // Threshold: scroll 25% of viewport height *past the top of the About Us section*
        const scrollDownThresholdForProjects = aboutSectionTop + (viewportHeight * 0.25);
        if (currentScrollY > scrollDownThresholdForProjects) {
          isSnappingRef.current = true;
          projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          canSnapToProjectsRef.current = false; // Disable this snap
          setTimeout(() => { isSnappingRef.current = false; }, 1000);
          return; // Exit after initiating snap
        }
      }

      // --- Reset flags if user scrolls back to the very top ---
      if (currentScrollY < viewportHeight * 0.1) { // Use a small percentage of viewport height
        canSnapToAboutRef.current = true; // Allow snapping again
        canSnapToProjectsRef.current = false; // Reset projects snap eligibility
        // isSnappingRef.current = false; // Should be handled by timeouts
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Refs are stable, so empty dependency array is fine.

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
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-4 md:p-8">

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
        
        <div className="md:w-1/2 lg:w-2/3 max-w-screen-lg mx-auto">
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
        
        <div className="homeAboutUs" ref={aboutSectionRef}>
            <div className="hp-img">
                  <img src={home1} alt="concept"></img>
            </div>
            <div className="hp-subtext">
              <h1>About PT. Holan Bangun Cipta</h1>
              <p>
              PT. Holan Bangun Cipta merupakan perusahaan yang bergerak di bidang konstruksi baik jasa konstruksi maupun pengadaan material yang meliputi pembangunan maupun renovasi : Gedung, Perumahan, Ruko, Real Estate, dll.
Kami memiliki banyak pengalaman dalam Pembangunan Gedung, Rumah, dan Ruko baik bersama Developer ataupun Perorangan.
Pengalaman kami mewujudkan impian banyak orang dalam proyek-proyek terdahulu bersama klien kami menjadi modal kami untuk terus membangun dan mengembangkan bisnis kami dengan mengedepankan kualitas dan dengan harga yang kompetitif.
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
        {/* <div className="people-thoughts">
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
        </div> */}
        {/* <div className="home-brands">
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
        </div> */}

        <div className="homeProjects" ref={projectsSectionRef}>
          <h1>Follow Our Products</h1>
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
                  <p className="hp-prj-title">Interior Desgin</p>
                  <p className="hp-prj-path">"Customize your home’s interior design with us."</p>
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
                  <p className="hp-prj-title">Bangun Rumah</p>
                  <p className="hp-prj-path">PEMBANGUNAN RUMAH 1 LANTAI S.D 3 LANTAI, DARI RUMAH SEDERHANA SAMPAI MODERN &  ELITE, BERBAGAI TIPE.</p>
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

      {/* <div className="h-interno">
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
      </div> */}
    </div>
  );
}
