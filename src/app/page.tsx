"use client"

import React, { useEffect } from 'react';
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Portfolio from './Portflio';

const useFadeIn = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.remove("opacity-0");
      body.classList.add("opacity-100");
    }
    const photos = document.querySelectorAll("img");
    let delay = 0;
    photos.forEach((photo) => {
      setTimeout(() => {
        photo.classList.remove("opacity-0");
        photo.classList.add("opacity-100");
      }, delay);
      delay += 100;
    });
  }, []);
};

export default function Home() {
  useFadeIn();
  return (
    <div className="dark:bg-black bg-white h-screen text-black dark:text-white px-5 md:px-20 animate-fade-in transition duration-500 opacity-100">
      <Header />
      <Portfolio />
      <Footer />
  </div>
  );
}
