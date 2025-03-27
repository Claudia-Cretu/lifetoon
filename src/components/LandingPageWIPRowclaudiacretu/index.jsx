import { Button, Img, Text } from "./..";
import React from "react";

export default function LandingPageWIPRowclaudiacretu({
  claudiacretu = "Claudia Cretu",
  frontendlead = "Frontend Lead | The Pixel Crafter",
  bringingour = "Bringing our comic world to life, one crisp UI element at a time.",
  image = "/images/claudia-cretu.jpg", // Imaginea membrului echipei
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-start w-[50%] md:w-full mt-12 md:mt-0`}>
      <div className="flex flex-1 flex-col items-center gap-3 self-center rounded-[44px] border border-solid border-dark_blue_secondary bg-white p-[22px] shadow-sm sm:p-5">
        <div className="mt-4 flex flex-col items-start self-stretch">
          <Text as="p" className="text-[20px] font-medium">
            {claudiacretu}
          </Text>
          <Text size="textlg" as="p" className="text-[18px] font-normal">
            {frontendlead}
          </Text>
        </div>
        <div className="h-px self-stretch bg-dark_blue_secondary" />
        <Text size="textlg" as="p" className="w-[92%] text-[18px] font-normal italic leading-[23px]">
          {bringingour}
        </Text>
      </div>
      <div className="relative ml-[-20px] mt-[38px] flex items-center gap-2">
        <img src={image} alt={claudiacretu} className="w-10 h-10 rounded-full object-cover" />
        <Button
          color="orange_accent1"
          shape="round"
          className="w-[34px] rounded-[16px] px-2"
        >
          <Img src="images/img_link.svg" />
        </Button>
      </div>
    </div>
  );
}
