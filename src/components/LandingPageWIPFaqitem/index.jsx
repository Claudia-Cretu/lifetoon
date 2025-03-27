import { Text, Img, Heading } from "./..";
import React from "react";

export default function LandingPageWIPFaqitem({
  question = "What is Lifetoon?",
  description = "Lifetoon is a platform that transforms real-life stories into personalized comic books. Whether it’s a love story, a fun memory, or an epic journey, we help you turn it into a story that looks and feels like you. Perfect for gifts, team bonding, or content creators for capturing memories in a way words can&#39;t.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col self-stretch gap-6 py-8 sm:py-5 border-gray-300 border-t border-solid flex-1 container-xs`}
    >
      <div className="flex items-center justify-between gap-5 self-stretch">
        <Heading size="text2xl" as="p" className="!font-lora text-[24px] font-medium md:text-[22px]">
          {question}
        </Heading>
        <Img src="images/img_icon_jam_icons.svg" alt="What Is" className="h-[24px]" />
      </div>
      <Text size="textlg" as="p" className="w-full text-[18px] font-normal italic leading-[160%]">
        {description}
      </Text>
    </div>
  );
}
