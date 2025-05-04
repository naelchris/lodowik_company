import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { Typography, Button } from "@material-tailwind/react";

import { BsArrowRight, BsTelephone } from "react-icons/bs";

import Slider1 from "../images/slider/SLIDE 1.jpg";
import Slider2 from "../images/slider/SLIDE 2.jpg";
import Slider3 from "../images/slider/SLIDE 3.jpg";
import Slider4 from "../images/slider/SLIDE 4.jpg";
import Slider5 from "../images/slider/SLIDE 5.jpg";



export function CarouselHome() {
    return (
    //     <Carousel className="rounded-xl shadow-lg h-96 md:h-[500px]"> {/* Added height here */}
    //     {/* Individual Carousel Slides */}
    //     {/* Removed redundant wrapper div inside Carousel */}
    //     <div className="h-full w-full"> {/* Use h-full w-full to fill parent Carousel height */}
    //       <img
    //         src={Slider1}
    //         alt="Stylish living room" // Improved alt text
    //         className="h-full w-full object-cover rounded-xl" // Added rounded corners to the image
    //       />
    //     </div>
    //     {/* Added other slides from your original code */}
        // <div className=" h-full w-full">
        //   <img
        //     src={Slider3}
        //     alt="Another interior design"
        //     className="h-full w-full object-cover rounded-xl"
        //   />
        // </div>
        // <div className=" h-full w-full">
        //   <img
        //     src={Slider4}
        //     alt="Living space"
        //     className="h-full w-full object-cover rounded-xl"
        //   />
        // </div>
        // <div className=" h-full w-full">
        //   <img
        //     src={Slider5}
        //     alt="Bedroom design"
        //     className="h-full w-full object-cover rounded-xl"
        //   />
        // </div>
    //   </Carousel>

        <Carousel className="rounded-xl shadow-lg h-96 md:h-[500px]">
            <div className=" h-full w-full">
                <img
                    src={Slider1}
                    alt="Another interior design"
                    className="h-full w-full object-cover rounded-xl"
                />
               <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                        Bangun Rumah
                        </Typography>
                        <Button size="lg" color="white">
                                Explore
                        </Button>
                    </div>
                 </div>
            </div>
            <div className=" h-full w-full">
                <img
                    src={Slider2}
                    alt="Another interior design"
                    className="h-full w-full object-cover rounded-xl"
                />
            </div>
            <div className=" h-full w-full">
                <img
                    src={Slider3}
                    alt="Another interior design"
                    className="h-full w-full object-cover rounded-xl"
                />
            </div>
            <div className=" h-full w-full">
                <img
                    src={Slider4}
                    alt="Living space"
                    className="h-full w-full object-cover rounded-xl"
                />
            </div>
            <div className=" h-full w-full">
                <img
                    src={Slider5}
                    alt="Bedroom design"
                    className="h-full w-full object-cover rounded-xl"
                />
            </div>
        </Carousel>
    );
  }