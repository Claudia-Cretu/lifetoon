import { Button, Img, Text } from "./..";
import React from "react";

export default function LandingPageWIPRowmarailie({
  marailie = "Mara Ilie",
  ceofounder = "CEO & Founder | The Visionary",
  craftingthe = "Crafting the vision, shaping the plot, and making this adventure legendary.",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-start w-[32%] md:w-full`}>
      <div className="flex flex-1 flex-col items-center gap-3 self-center rounded-[44px] border border-solid border-dark_blue_secondary bg-white p-[22px] shadow-sm sm:p-5">
        <div className="mt-4 self-stretch">
          <div className="flex flex-col items-start">
            <Text as="p" className="text-[20px] font-medium">
              {marailie}
            </Text>
            <Text size="textlg" as="p" className="text-[18px] font-normal">
              {ceofounder}
            </Text>
          </div>
        </div>
        <div className="h-px self-stretch bg-dark_blue_secondary" />
        <Text size="textlg" as="p" className="w-[92%] text-[18px] font-normal italic leading-[23px]">
          {craftingthe}
        </Text>
      </div>
      <Button
        color="orange_accent1"
        shape="round"
        className="relative ml-[-20px] mt-[38px] w-[34px] rounded-[16px] px-2"
      >
        <Img src="images/img_link.svg" />
      </Button>
    </div>
  );
}
