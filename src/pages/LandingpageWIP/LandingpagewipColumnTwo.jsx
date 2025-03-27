import { Heading } from "../../components";
import LandingPageWIPPricingpages from "../../components/LandingPageWIPPricingpages";
import React, { Suspense } from "react";

const data = [
  {
    heading: "Starter Edition",
    badge: "Digital only",
    perfectforquick: "Perfect for quick, shareable digital memories!",
    price: "$35",
    frequency: "/order",
    getMyDigital: "Get My Digital Comic",
    headingOne: "What’s included",
    p10beautifullyil: "10 beautifully illustrated pages – A short and engaging comic tailored to your story.",
    upto2characters: "Up to 2 characters – Bring yourself and a loved one to life in comic form.",
    highresolutiond: "High-resolution digital comic (PDF & JPEG) – Share it online or print it anytime.",
  },
  {
    heading: "Hero Edition",
    badge: "Digital and print",
    perfectforquick: "A digital keepsake of your story, perfect for sharing online.",
    price: "$80",
    frequency: "/order",
    getMyDigital: "Get My Printed Comic",
    headingOne: "What’s included",
    p10beautifullyil: "15 fully illustrated pages – A deeper, more immersive storytelling experience.",
    upto2characters: "Up to 4 characters – Include family, friends, or even a pet in your adventure!",
    highresolutiond: "High-resolution digital comic (PDF & JPEG) – Keep a copy for digital sharing.",
    premium: "Premium-quality printed comic book – A keepsake you can hold in your hands.",
  },
  {
    heading: "Epic Edition",
    badge: "Deluxe digital & print",
    perfectforquick: "The ultimate collector’s edition. Your story deserves the VIP treatment!",
    price: "$100",
    frequency: "/order",
    getMyDigital: "Get My Deluxe Comic",
    headingOne: "What’s included",
    p10beautifullyil: "20+ detailed pages – Your most legendary story, told in its fullest form.",
    upto2characters: "5+ characters – Capture your entire cast of heroes, villains, or loved ones.",
    highresolutiond: "High-quality printed comic book & digital version – The best of both worlds.",
    free: "Free express shipping – Get your comic book delivered fast at no extra cost.",
  },
];

export default function LandingpagewipColumnTwo() {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="container-xs flex flex-col gap-[46px] px-14 md:px-5">
        <div className="mx-[232px] flex flex-col items-center gap-1 md:mx-0">
          <Heading size="headingmd" as="h2" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
            Choose your comic package
          </Heading>
          <Heading as="h3" className="!font-lora text-[16px] font-normal italic">
            Find the right price for your one-of-a-kind story!
          </Heading>
        </div>
        <div className="flex gap-[70px] md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <LandingPageWIPPricingpages
                {...d}
                key={"listheading" + index}
                className="my-10 hover:border-2 hover:border-solid hover:border-dark_blue_secondary hover:shadow-bs md:my-0"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
