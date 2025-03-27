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
      <div className="relative h-[846px] w-full bg-white">
        <Img
          src="images/img_rectangle_18_orange_100.png"
          alt="Image"
          className="absolute right-[0.79px] top-0 m-auto h-[770px] w-[54%] object-contain"
        />
        <Img
          src="images/img_rectangle_15_orange_accent1.png"
          alt="Image"
          className="absolute bottom-0 left-0 m-auto h-[352px] w-[52%] object-contain"
        />
        <div className="container-xs absolute left-0 right-0 top-[9%] mx-20 flex flex-1 flex-col items-start gap-[118px] md:mx-0 md:gap-[88px] md:px-5 sm:gap-[59px]">
          <Img
            src="images/img_vector_dark_blue_secondary.svg"
            alt="Vector"
            className="h-[120px] w-[18%] object-contain"
          />
          <div className="mx-[292px] flex flex-col items-center justify-center gap-1 self-stretch rounded-[24px] bg-white px-14 py-[62px] shadow-lg md:mx-0 md:p-5">
            <Heading size="headings" as="h1" className="text-[36px] font-bold md:text-[34px] sm:text-[32px]">
              Thank you for your interest!
            </Heading>
            <Heading as="h2" className="!font-lora text-[16px] font-normal italic">
              You’re on the list! We’ll notify you when we launch.
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
