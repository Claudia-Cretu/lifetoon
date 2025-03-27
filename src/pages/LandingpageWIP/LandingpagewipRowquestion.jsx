import { Heading } from "../../components";
import LandingPageWIPFaqitem from "../../components/LandingPageWIPFaqitem";
import React, { Suspense } from "react";

const data = [
  {
    question: "What is Lifetoon?",
    description:
      "Lifetoon is a platform that transforms real-life stories into personalized comic books. Whether it’s a love story, a fun memory, or an epic journey, we help you turn it into a story that looks and feels like you. Perfect for gifts, team bonding, or content creators for capturing memories in a way words can&#39;t.",
  },
  {
    question: "How can I generate my own comic book with Lifetoon?",
    description:
      "Lifetoon is a platform that transforms real-life stories into personalized comic books. Whether it’s a love story, a fun memory, or an epic journey, we help you turn it into a story that looks and feels like you. Perfect for gifts, team bonding, or content creators for capturing memories in a way words can&#39;t.",
  },
  {
    question: "Does Lifetoon have a community? How can I join?",
    description:
      "Lifetoon is a platform that transforms real-life stories into personalized comic books. Whether it’s a love story, a fun memory, or an epic journey, we help you turn it into a story that looks and feels like you. Perfect for gifts, team bonding, or content creators for capturing memories in a way words can&#39;t.",
  },
];

export default function LandingpagewipRowquestion() {
  return (
    <div className="mt-[42px]">
      <div className="flex flex-col items-center justify-center bg-white py-20 md:py-5">
        <div className="container-xs flex flex-col gap-16 md:px-5 sm:gap-8">
          <div className="flex justify-center px-14 md:px-5">
            <Heading size="headingmd" as="h2" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
              Still curious? Let&#39;s clear things up!
            </Heading>
          </div>
          <div className="flex flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <LandingPageWIPFaqitem {...d} key={"listquestion" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
