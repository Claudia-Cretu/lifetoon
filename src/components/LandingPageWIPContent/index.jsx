import { Text, Heading, Img } from "./..";
import React from "react";

export default function LandingPageWIPContent({
  image = "images/img_favorite.svg",
  title = "You don’t need to be a storyteller",
  description = "Bringing stories to life isn’t easy, but it doesn’t have to be. You don’t need to be a writer or an illustrator to turn your memories into something special. We make it effortless.",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex md:flex-col items-start self-stretch gap-2 flex-1`}>
      <Img src={image} alt="Image" className="h-[64px] w-[6%] object-contain" />
      <div className="flex flex-1 flex-col items-start gap-2 self-center md:self-stretch sm:gap-2">
        <Heading size="text2xl" as="p" className="text-[24px] font-medium !text-deep_purple-a200 sm:text-[20px]">
          {title}
        </Heading>
        <Text as="p" className="w-full text-[20px] font-normal italic leading-7 sm:w-full sm:text-[17px]">
          {description}
        </Text>
      </div>
    </div>
  );
}
