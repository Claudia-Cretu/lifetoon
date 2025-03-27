import { Heading, Text } from "../../components";
import LandingPageWIPContent from "../../components/LandingPageWIPContent";
import React, { Suspense } from "react";

const data = [
  {
    image: "images/img_favorite.svg",
    title: "You don’t need to be a storyteller",
    description:
      "Bringing stories to life isn’t easy, but it doesn’t have to be. You don’t need to be a writer or an illustrator to turn your memories into something special. We make it effortless.",
  },
  {
    image: "images/img_checkmark.svg",
    title: "From instant to timeless",
    description:
      "Photos capture seconds. A Lifetoon comic turns them into stories that last forever. Keep your most cherished moments alive in a way that words and pictures alone never could.",
  },
  {
    image: "images/img_frame_14450_deep_purple_50_01.svg",
    title: "A gift like no other",
    description:
      "Whether for a loved one or yourself, this isn’t just another generic present. It’s personal, heartfelt, and impossible to forget.",
  },
];

export default function LandingpagewipStackwhylifetoo() {
  return (
    <div className="relative h-[670px] px-[62px] md:px-5">
      <div className="absolute bottom-[-1px] left-0 right-0 mx-auto flex flex-1 flex-col items-center gap-12 px-14 md:px-5">
        <div className="flex flex-col items-center">
          <Heading size="headingmd" as="h1" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
            Why Lifetoon?{" "}
          </Heading>
          <Text as="p" className="text-[20px] font-normal italic">
            Because some stories deserve more than just a memory.
          </Text>
        </div>
        <div className="flex w-[74%] flex-col gap-[22px] md:w-full">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <LandingPageWIPContent {...d} key={"listtitle" + index} />
            ))}
          </Suspense>
        </div>
      </div>
      <div className="absolute right-[6%] top-[-14] m-auto flex h-[298px] w-[28%] rotate-[-360deg] items-start justify-center bg-[url(/public/images/img_frame_14478.png)] bg-cover bg-no-repeat px-[30px] py-[84px] md:h-auto md:py-5 sm:p-7">
        <Heading
          size="text2xl"
          as="p"
          className="mb-2.5 flex-1 rotate-[-360deg] text-center !font-grandstander text-[24px] font-normal uppercase leading-[23px] md:text-[12px]"
          style={{ marginTop: '32px' }}
       >
          <span>I never imagined my proposal story could look like a&nbsp;</span>
          <span className="font-bold">real comic book. It’s now framed in our home! ✨</span>
        </Heading>
      </div>
    </div>
  );
}
