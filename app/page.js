"use client";
import Image from "next/image";
import { ImagesSliderDemo } from "../components/ImgSlider";
import React from "react";
import Navbar from "../components/navBar";
import ImageSliderCards from "../components/imageCarusel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <nav className="w-full ">
        <Navbar />
      </nav>{" "}
      <div className="w-[95vw] ">
        <ImagesSliderDemo />
      </div>
      <section>
        <ImageSliderCards />
      </section>
    </main>
  );
}
