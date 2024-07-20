import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { Meteors } from "@/components/ui/meteors";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FlipWords } from "./ui/flip-words";

const words = ["Explore", "Discover", "Search", "Find"];
const testimonials = [
  "Superb job matching service",
  "Found my perfect role fast",
  "Helped me find work quickly",
];

export function Hero() {
  return (
    <div className="relative min-h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-background antialiased bg-grid-white/[0.02] overflow-hidden">
      <div className="relative z-10 p-4 max-w-7xl mx-auto w-full pt-20 md:pt-20">
        <div className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center text-white justify-center my-8 mt-20">
          {testimonials.map((text, index) => (
            <div
              key={index}
              className="bg-foreground p-4 justify-center items-center flex flex-col space-y-2 rounded-md"
            >
              <Image
                src="/stars.png"
                alt="Five star rating"
                width={100}
                height={50}
              />
              <p className="text-secondary text-sm">{`"${text}"`}</p>
            </div>
          ))}
        </div>
        <h1 className="text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <span className="text-primary">
            <FlipWords words={words} />
          </span>{" "}
          job vacancies
          <br /> all over the world
        </h1>
        <p className="mt-4 font-normal text-base text-secondary max-w-lg text-center mx-auto mb-8">
          Our platform features more than 1.2 million job vacancies worldwide,
          connecting you with employers who value your skills and experience.
        </p>
        <div className="flex items-center justify-center text-center">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full max-w-md">
            <Input
              placeholder="Search ..."
              className="bg-foreground border-none w-full sm:w-72"
            />
            <Button className="bg-primary text-white w-full sm:w-auto">
              Search
            </Button>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          {["Post a job", "Find talent", "Career advice", "Salary info"].map(
            (text, index) => (
              <a
                href="#"
                key={index}
                className="bg-foreground text-xs text-primary rounded-md px-4 py-2 hover:bg-primary hover:text-foreground transition-all duration-300"
              >
                {text}
              </a>
            )
          )}
        </div>
      </div>
      <Spotlight
        className="absolute -top-40 left-0 md:left-60 md:-top-20 z-0"
        fill="white"
      />
      <Meteors number={50} className="absolute inset-0 z-0" />
    </div>
  );
}
