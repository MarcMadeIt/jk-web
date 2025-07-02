"use client";

import Hero from "@/components/client/home/Hero";
import Locations from "@/components/client/home/Locations";
import News from "@/components/client/home/News";
import Products from "@/components/client/home/Products";
import Reviews from "@/components/client/home/Reviews";
import Teachers from "@/components/client/home/Teachers";

const HomePage = () => {
  return (
    <>
      <section className="h-full">
        <Hero />
      </section>
      <section className="h-60 md:h-96">
        <Locations />
      </section>
      <section className="h-96">
        <Reviews />
      </section>
      <section className="h-96">
        <Products />
      </section>
      <section className="h-96">
        <News />
      </section>
      <section className="h-96">
        <Teachers />
      </section>
    </>
  );
};

export default HomePage;
