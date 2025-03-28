import { Heading } from "../../components";
// import LandingPageWIPRowclaudiacretu from "../../components/LandingPageWIPRowclaudiacretu";
import LandingPageWIPRowmarailie from "../../components/LandingPageWIPRowmarailie";
import React, { Suspense } from "react";

const data = [
  {
    marailie: "Mara Ilie",
    ceofounder: "CEO & Founder | The Visionary",
    craftingthe: "Crafting the vision, shaping the plot, and making this adventure legendary.",
    image: "/images/mara-ilie.png",
    linkedinUrl: "https://www.linkedin.com/in/mara-ilie"
  },
  {
    marailie: "Alexandru Stanica",
    ceofounder: "CTO | The Code Sorcerer",
    craftingthe: "Weaving tech magic into every panel, turning dreams into digital reality.",
    image: "/images/alexandru-stanica.png",
    linkedinUrl: "https://www.linkedin.com/in/alexandru-stanica-14723428b/"
  },
  {
    marailie: "Ruxandra Mazilu",
    ceofounder: "CMO | The Story Amplifier",
    craftingthe: "Spreading the word faster than a superhero on caffeine (or matcha).",
    image: "/images/ruxandra-mazilu.png",
    linkedinUrl: "https://www.linkedin.com/in/ruxandramazilu/"
  },
  {
    marailie: "Avasiloaie Alexandra",
    ceofounder: "UX Lead | The Experience Shaper",
    craftingthe: "Crafting intuitive journeys, because every hero deserves a great adventure.",
    image: "/images/avasiloaie-alexandra.png",
    linkedinUrl: "https://www.linkedin.com/in/alexandra-avasiloaie-848600177/"
  },
  {
    marailie: "Cretu Claudia",
    ceofounder: "Frontend Lead | The Pixel Crafter",
    craftingthe: "Bringing our comic world to life, one crisp UI element at a time.",
    image: "/images/cretu-claudia.png",
    linkedinUrl: "https://www.linkedin.com/in/claudia-cretu-746093271/"
  },
];

export default function LandingpagewipRowmeettheheroe() {
  return (
    <div className="mt-16 flex h-auto items-end justify-center bg-[url(/public/images/img_group_78.svg)] bg-cover bg-no-repeat p-[30px] md:h-auto sm:p-5">
      <div className="mt-[52px] flex w-[96%] flex-col items-center gap-6 md:w-full">
        <div className="container-xs flex flex-col items-center px-14 md:px-5">
          <Heading size="headingmd" as="h2" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
            Meet the heroes behind Lifetoon
          </Heading>
        </div>
        <div className="flex flex-col items-center gap-6 self-stretch">
          <div className="mt-12 flex w-full flex-wrap justify-center gap-6">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.slice(0, 3).map((d, index) => (
                <LandingPageWIPRowmarailie {...d} key={"listmarailie" + index} className="w-[30%] md:w-full" />
              ))}
            </Suspense>
          </div>
          <div className="mt-6 flex w-full flex-wrap justify-center gap-6">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.slice(3).map((d, index) => (
                <LandingPageWIPRowmarailie {...d} key={"listmarailie" + (index + 3)} className="w-[30%] md:w-full" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
