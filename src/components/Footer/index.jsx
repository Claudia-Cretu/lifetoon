import { Img, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex justify-center items-center py-[46px] md:py-5 bg-white`}>
      <div className="container-xs flex justify-center px-8 md:px-5">
        <div className="flex w-full items-center justify-between gap-5 sm:flex-col">
          <div className="flex flex-col items-start gap-[18px]">
            <Img src="images/img_vector.svg" alt="Footerlogo" className="h-[40px] w-[82px] object-contain" />
            <Heading as="p" className="!font-inter text-[16px] font-normal !text-blue_gray-300">
              © 2025 Lifetoon. All rights reserved.
            </Heading>
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/company/lifetoon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue_gray-300 hover:text-blue_gray-500"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/lifetoon.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue_gray-300 hover:text-blue_gray-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
