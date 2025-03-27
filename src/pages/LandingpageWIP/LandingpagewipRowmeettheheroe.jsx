import { Heading } from "../../components";
import LandingPageWIPRowclaudiacretu from "../../components/LandingPageWIPRowclaudiacretu";
import LandingPageWIPRowmarailie from "../../components/LandingPageWIPRowmarailie";
import React, { Suspense } from "react";

const data = [
  {
    marailie: "Mara Ilie",
    ceofounder: "CEO & Founder | The Visionary",
    craftingthe: "Crafting the vision, shaping the plot, and making this adventure legendary.",
  },
  {
    marailie: "Mara Ilie",
    ceofounder: "CEO & Founder | The Visionary",
    craftingthe: "Weaving tech magic into every panel, turning dreams into digital reality.",
  },
  {
    marailie: "Mara Ilie",
    ceofounder: "CEO & Founder | The Visionary",
    craftingthe: "Crafting the vision, shaping the plot, and making this adventure legendary.",
  },
];

export default function LandingpagewipRowmeettheheroe() {
  return (
    <div className="mt-16 flex h-[712px] items-end justify-center bg-[url(/public/images/img_group_78.svg)] bg-cover bg-no-repeat p-[30px] md:h-auto sm:p-5">
      <div className="mt-[52px] flex w-[96%] flex-col items-center gap-6 md:w-full">
        <div className="container-xs flex flex-col items-center px-14 md:px-5">
          <Heading size="headingmd" as="h2" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
            Meet the heroes behind Lifetoon
          </Heading>
        </div>
        <div className="flex flex-col items-center gap-6 self-stretch">
          <div className="mt-12 flex w-[94%] gap-6 md:w-full md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <LandingPageWIPRowmarailie {...d} key={"listmarailie" + index} />
              ))}
            </Suspense>
          </div>
          <div className="container-xs flex flex-col items-center px-14 md:px-5">
            <div className="flex w-[70%] gap-6 md:w-full md:flex-col">
              <LandingPageWIPRowclaudiacretu />
              <LandingPageWIPRowclaudiacretu
                claudiacretu="Avasiloaie Alexandra"
                frontendlead="UX Lead | The Experience Shaper"
                bringingour="Crafting intuitive journeys, because every hero deserves a great adventure."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
