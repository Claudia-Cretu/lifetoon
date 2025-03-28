import { Text, Img, Heading, Button } from "./..";
import React from "react";
import { Link } from 'react-router-dom';

export default function LandingPageWIPPricingpages({
  heading = "Starter Edition",
  badge = "Digital only",
  perfectforquick = "Perfect for quick, shareable digital memories!",
  price = "$35",
  frequency = "/order",
  getMyDigital = "Get My Digital Comic",
  headingOne = "What's included",
  p10beautifullyil = "10 beautifully illustrated pages – A short and engaging comic tailored to your story.",
  upto2characters = "Up to 2 characters – Bring yourself and a loved one to life in comic form.",
  highresolutiond = "High-resolution digital comic (PDF & JPEG) – Share it online or print it anytime.",
  premium = "",
  free = "",
  ...props
}) {
  return (
    <div {...props} className={`flex flex-col w-[32%] md:w-full border-2 border-solid border-[rgb(0,0,0)] bg-white shadow-xs rounded-[24px] ${
      heading === "Hero Edition" ? "border-b-8 border-b-[rgb(0,0,0)]" : ""
    }`}>
      <div className="flex flex-col gap-[22px] self-stretch">
        <div className="mx-6 mt-5 flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-2">
  {heading === "Hero Edition" && (
    <div className="bg-orange-500 text-white font-bold text-[12px] py-1 px-2 rounded-[5px] w-full text-center shadow-md">
      Most Popular
    </div>
  )}
  <div className="flex flex-wrap items-center gap-2 self-stretch">
    <Text 
      size="textlg" 
      as="p" 
      className={`text-[18px] font-medium ${
        heading === "Hero Edition" ? "text-orange-500" : 
        heading === "Epic Edition" ? "text-purple-600" : 
        "text-inherit"
      }`}
    >
      {heading}
    </Text>
    <Heading
      size="textxs"
      as="p"
      className={`flex items-center justify-center self-end rounded-[10px] bg-gray-100 px-2.5 text-[12px] font-medium ${
        heading === "Hero Edition" ? "!text-orange-500" : 
        heading === "Epic Edition" ? "!text-purple-600" : 
        "!text-blue_gray-900"
      }`}
    >
      {badge}
    </Heading>
  </div>
</div>
          <Text size="texts" as="p" className="text-[14px] font-normal italic !text-gray-600">
            {perfectforquick}
          </Text>
        </div>
        <div className="mx-6 flex flex-wrap items-center">
          <Heading size="headings" as="h1" className="text-[36px] font-bold">
            {price}
          </Heading>
          <Heading as="p" className="mb-2.5 self-end text-[16px] font-medium !text-gray-600">
            {frequency}
          </Heading>
        </div>
        <Link to="/Formnew">
        <Button
    size="sm"
    shape="round"
    rightIcon={
      <Img
        src="images/img_arrowright.svg"
        alt="Arrow Right"
        className="mb-0.5 h-[20px] w-[20px] object-contain"
      />
    }
    className="mx-6 gap-2 self-stretch rounded-[18px] border border-solid border-dark_blue_secondary px-[33px] font-medium italic sm:px-5 hover:bg-yellow-200 hover:bg-opacity-70 hover:border-transparent hover:text-dark_blue_secondary transition-all duration-300"
  >
    {getMyDigital}
  </Button>
</Link>
        <div className="h-px bg-gray-200" />
      </div>
      <div className="flex flex-col items-start gap-[22px] self-stretch px-6 py-5 sm:px-5">
        <Heading size="textxs" as="p" className="text-[12px] font-medium uppercase tracking-[0.30px]">
          {headingOne}
        </Heading>
        <div className="mb-2.5 flex flex-col gap-4 self-stretch">
          <div className="flex items-start justify-center gap-3">
            <Img src="images/img_component_3.svg" alt="Image" className="h-[20px]" />
            <Text
              size="texts"
              as="p"
              className="w-[92%] self-center text-[14px] font-normal italic leading-5 !text-gray-600"
            >
              {p10beautifullyil}
            </Text>
          </div>
          <div className="flex items-start justify-center gap-3">
            <Img src="images/img_component_3.svg" alt="Image" className="h-[20px]" />
            <Text
              size="texts"
              as="p"
              className="w-[92%] self-center text-[14px] font-normal italic leading-5 !text-gray-600"
            >
              {upto2characters}
            </Text>
          </div>
          <div className="flex items-start justify-center gap-3">
            <Img src="images/img_component_3.svg" alt="Image" className="h-[20px]" />
            <Text
              size="texts"
              as="p"
              className="w-[92%] self-center text-[14px] font-normal italic leading-5 !text-gray-600"
            >
              {highresolutiond}
            </Text>
          </div>
          {premium && (
            <div className="flex items-start justify-center gap-3">
              <Img src="images/img_component_3.svg" alt="Image" className="h-[20px]" />
              <Text
                size="texts"
                as="p"
                className="w-[92%] self-center text-[14px] font-normal italic leading-5 !text-gray-600"
              >
                {premium}
              </Text>
            </div>
          )}
          {free && (
            <div className="flex items-start justify-center gap-3">
              <Img src="images/img_component_3.svg" alt="Image" className="h-[20px]" />
              <Text
                size="texts"
                as="p"
                className="w-[92%] self-center text-[14px] font-normal italic leading-5 !text-gray-600"
              >
                {free}
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
