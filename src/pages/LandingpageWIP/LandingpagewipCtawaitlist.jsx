import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function LandingpagewipCtawaitlist() {
  return (
    <div className="relative z-[2] flex h-[432px] items-end justify-center bg-[url(/public/images/img_cta_waitlist.svg)] bg-cover bg-no-repeat py-[90px] md:h-auto md:py-5">
      <div className="container-xs mt-[38px] flex justify-center px-14 md:px-5">
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex flex-col items-center self-stretch px-[46px] md:px-5">
            <Heading
              size="headingmd"
              as="h2"
              className="text-[48px] font-bold !text-white md:text-[44px] sm:text-[38px]"
            >
              Not ready to buy? Get early access instead!
            </Heading>
            <Text as="p" className="self-stretch text-center text-[20px] font-normal italic leading-[25px] !text-white">
              Curious but not ready to commit? Be the first to access Lifetoon and turn your moments into unforgettable
              comics. Get exclusive perks & early-bird discounts!
            </Text>
          </div>
          <Button
            size="lg"
            rightIcon={
              <Img
                src="images/img_arrowright.svg"
                alt="Arrow Right"
                className="mb-1 mt-0.5 h-[32px] w-[32px] object-contain"
              />
            }
            className="min-w-[394px] gap-2 rounded-[30px] border-2 border-solid border-dark_blue_secondary px-[30px] font-medium italic shadow-md sm:px-5"
          >
            Join the waitlist today
          </Button>
        </div>
      </div>
    </div>
  );
}
