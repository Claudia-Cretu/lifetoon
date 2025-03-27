import { Heading, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-6 sm:py-5 bg-white`}>
      <div className="container-xs flex items-center gap-[81px] px-4 md:flex-col md:px-5">
        <Img src="images/img_header_logo.svg" alt="Headerlogo" className="h-[56px] w-[114px] object-contain" />
        <ul className="flex flex-wrap gap-12">
          <li>
            <a href="#">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                Home
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                How it works
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                Pricing
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                Our team
              </Heading>
            </a>
          </li>
          <li>
            <a href="#">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                FAQ
              </Heading>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
