import { Text, Heading } from "../../components";
import LandingPageWIPFeature from "../../components/LandingPageWIPFeature";
import React, { Suspense } from "react";

const data = [
  {
    image: "images/img_user.svg",
    title: "You share your story",
    description:
      "Start with your imagination. Upload a photo, describe your characters, and tell us what makes this story special to you.",
  },
  {
    image: "images/img_frame_14450.svg",
    title: "We illustrate it for you",
    description:
      "Our smart tools turn your words and images into stunning illustrations, crafted to match your vision.",
  },
  {
    image: "images/img_close.svg",
    title: "Your comic, your way!",
    description:
      "Review your comic, make final tweaks, and it’s ready to WOW! Print it, share it, or keep it as a treasured memory.",
  },
];

export default function LandingpagewipColumn() {
  return (
    <div className="relative mt-[-38px] flex flex-col items-center self-stretch">
      <div className="container-xs flex flex-col gap-12 px-14 md:px-5">
        <div className="mx-[212px] flex flex-col items-center md:mx-0">
          <Heading size="headingmd" as="h1" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
            How your comic comes to life?
          </Heading>
          <Text as="p" className="text-[20px] font-normal italic">
            You tell the story, we bring it to life with a touch of AI magic!
          </Text>
        </div>
        <div className="flex gap-8 md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <LandingPageWIPFeature {...d} key={"listtitle" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
