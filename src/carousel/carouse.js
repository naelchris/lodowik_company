import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { Typography, Button } from "@material-tailwind/react";

import { BsArrowRight, BsTelephone } from "react-icons/bs";

import Slider1 from "../images/product/bangunRumah/rumah 2.jpg";
import Slider2 from "../images/product/arsitektur/IMG-20250423-WA0016.jpg";
import Slider3 from "../images/product/interior/20240129_130412.jpg";
import Slider4 from "../images/product/aluminium/20250422_111804.jpg";
import Slider5 from "../images/product/kanopi/20250306_121557.jpg";
import Slider6 from "../images/product/renovasiRumah/20250422_111027.jpg"




export function CarouselHome() {
    return (
        <Carousel className="rounded-xl shadow-lg h-96 md:h-[500px]">
            <div className="relative h-full w-full">
                <img
                src={Slider1}
                alt="image 1"
                className="h-full w-full object-cover"
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
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                src={Slider2}
                alt="image 2"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                        Design Arsitek
                        </Typography>
                        <div className="flex gap-2">
                        <Button size="lg" color="white">
                            Explore
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                src={Slider3}
                alt="image 3"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                        Pekerjaan Interior
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                src={Slider4}
                alt="image 3"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                        Pembuatan Aluminium
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                src={Slider5}
                alt="image 3"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                        Pembuatan Kanopi
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                src={Slider6}
                alt="image 3"
                className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                        Renovasi Rumah
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
  }