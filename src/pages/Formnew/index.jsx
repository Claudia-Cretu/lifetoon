import { Helmet } from "react-helmet";
import { Button, Img, CheckBox, Input, Text, Heading } from "../../components";
import React from "react";

export default function FormnewPage() {
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
        <div className="container-xs absolute left-0 right-0 top-[9%] mx-20 flex flex-1 items-start md:relative md:mx-0 md:flex-col md:px-5">
          <Img
            src="images/img_vector_dark_blue_secondary.svg"
            alt="Vector"
            className="h-[120px] w-[18%] object-contain md:w-full"
          />
          <div className="mt-[78px] flex flex-1 self-end px-11 md:self-stretch md:px-5">
            <div className="flex w-[74%] flex-col items-center justify-center gap-[30px] rounded-[24px] bg-white px-14 py-16 shadow-lg md:w-full md:p-5">
              <div className="mx-1 flex flex-col items-center gap-1 md:mx-0">
                <Heading size="headings" as="h1" className="text-[36px] font-bold md:text-[34px] sm:text-[32px]">
                  Join the Lifetoon Waitlist
                </Heading>
                <Heading as="h2" className="!font-lora text-[16px] font-normal italic">
                  Be the first to know when we launch & get exclusive early access!
                </Heading>
              </div>
              <div className="flex w-[82%] flex-col items-start gap-6 md:w-full">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="texts" as="p" className="!font-ibmplexsans text-[14px] font-medium !text-gray-700">
                    Your name{" "}
                  </Text>
                  <Input shape="round" name="name" className="rounded-md border border-gray-300 px-3" />
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text size="texts" as="p" className="!font-ibmplexsans text-[14px] font-medium !text-gray-700">
                    <span className="text-gray-700">Your email&nbsp;</span>
                    <span className="text-orange_accent1">*</span>
                  </Text>
                  <Input shape="round" name="email" className="rounded-md border border-gray-300 px-3" />
                </div>
                <CheckBox
                  name="check"
                  label="I want to receive early access perks & updates."
                  id="check"
                  className="gap-3 font-inter text-[16px] text-dark_blue_secondary"
                />
                <Button
                  size="md"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      alt="Arrow Right"
                      className="mb-0.5 mt-1 h-[22px] w-[22px] object-contain"
                    />
                  }
                  className="gap-1 self-stretch rounded-[22px] border-[1.43px] border-solid border-dark_blue_secondary px-[32.57px] font-medium italic shadow-xl sm:px-5"
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
