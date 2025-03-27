import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";
import React from "react";

export default function ConfirmationatsubmitformPage() {
  return (
    <>
      <Helmet>
        <title>Lifetoon</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="relative h-[100vh] w-full bg-white overflow-hidden flex items-center justify-center">
        <Img
          src="images/img_rectangle_18_orange_100.png"
          alt="Image"
          className="absolute right-[-5%] top-0 m-auto h-[690px] w-[53%] object-cover"
        />
        <Img
          src="images/img_rectangle_15_orange_accent1.png"
          alt="Image"
          className="absolute bottom-0 left-[-5%] m-auto h-[302px] w-[53%] object-cover"
        />
        <Img
          src="images/img_vector_dark_blue_secondary.svg"
          alt="Vector"
          className="absolute top-4 left-4 h-[80px] w-auto object-contain z-20"
        />
        <div className="container-xs relative z-10 flex justify-center md:px-5">
          <div className="flex w-full justify-center">
            <div className="flex w-[74%] flex-col items-center justify-center gap-[30px] rounded-[24px] bg-white px-14 py-16 shadow-lg md:w-full md:p-5">
              <Heading size="headings" as="h1" className="text-[36px] font-bold md:text-[34px] sm:text-[32px] text-center">
                Thank you for your interest!
              </Heading>
              <Heading as="h2" className="!font-lora text-[16px] font-normal italic text-center">
                You're on the list! We'll notify you when we launch.
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
