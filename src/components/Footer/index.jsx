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
          </div>
          <div className="flex w-[14%] justify-between gap-5 self-end sm:w-full">
            <Img src="images/img_footers_social_icon.svg" alt="Footerssocial" className="h-[24px]" />
            <Img src="images/img_footers_social_icon.svg" alt="Footerssocial" className="h-[24px]" />
            <Img src="images/img_footers_social_icon.svg" alt="Footerssocial" className="h-[24px]" />
            <Img src="images/img_footers_social_icon.svg" alt="Footerssocial" className="h-[24px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
