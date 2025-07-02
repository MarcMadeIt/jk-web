"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative min-h-[300px] md:min-h-[500px] flex items-center justify-center py-2">
      <div className="absolute inset-0 w-full h-full 2xl:rounded-b-lg overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hero baggrundsbillede"
          fill
          className="object-cover z-0"
          priority
          quality={60}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-zinc-800/70 via-zinc-800/30 to-transparent" />
      </div>
      <div className="relative z-10 text-neutral-content text-center max-w-xl lg:max-w-2xl flex flex-col justify-center items-center mx-auto">
        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold filter drop-shadow-[0_0_4px_rgba(150,150,150,0.7)]">
          Ribe, Billund & Grindsted
        </h1>
        <p className="mb-7 text-lg font-medium md:text-2xl lg:text-3xl filter drop-shadow-[0_0_4px_rgba(150,150,150,0.7)]">
          Med dig hele vejen! <br />
        </p>
        <div className="flex gap-5">
          <Link href="/tilmelding" className="btn btn-primary md:btn-lg">
            Se holdstart
          </Link>
          <Link href="tel:+4522771246" className="btn md:btn-lg">
            <FaPhone /> Kontakt os
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
