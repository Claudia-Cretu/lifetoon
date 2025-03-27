import { Text, Heading, Img } from "./..";
import React from "react";

export default function LandingPageWIPFeature({
  image = "images/img_user.svg",
  title = "You share your story",
  description = "Start with your imagination. Upload a photo, describe your characters, and tell us what makes this story special to you.",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[32%] md:w-full gap-3.5`}>
      <Img src={image} alt="Image" className="h-[64px] w-[16%] object-contain" />
      <div className="flex flex-col items-start self-stretch">
        <Heading size="text2xl" as="p" className="text-[24px] font-medium !text-orange_accent1">
          {title}
        </Heading>
        <Text as="p" className="w-full text-[20px] font-normal italic leading-7">
          {description}
        </Text>
      </div>
    </div>
  );
}
