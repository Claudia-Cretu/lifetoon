import { Heading, Img } from "./..";
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-6 sm:py-5 bg-white`}>
      <div className="container-xs flex items-center gap-[81px] px-4 md:flex-col md:px-5">
        <Link to="/">
          <Img src="images/img_header_logo.svg" alt="Headerlogo" className="h-[56px] w-[114px] object-contain" />
        </Link>
        <ul className="flex flex-wrap gap-12">
          <li>
            {/* <Link to="LandingPageWIPPricingpages">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                Home
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="/how-it-works">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                How it works
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="/pricing">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                Pricing
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="/our-team">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                Our team
              </Heading>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <Heading size="headingxs" as="h5" className="!font-lora text-[20px] font-semibold">
                FAQ
              </Heading>
            </Link> */}
          </li>
        </ul>
      </div>
    </header>
  );
}
