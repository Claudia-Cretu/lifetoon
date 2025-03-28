import { Heading } from "../../components";
import LandingPageWIPFaqitem from "../../components/LandingPageWIPFaqitem";
import React, { useState } from "react";

const data = [
  {
    question: "What is Lifetoon?",
    description:
      "Lifetoon is a platform that transforms real-life stories into personalized comic books. Whether it’s a love story, a fun memory, or an epic journey, we help you turn it into a story that looks and feels like you. Perfect for gifts, team bonding, or content creators for capturing memories in a way words can not.",
  },
  {
    question: "How can I generate my own comic book with Lifetoon?",
    description:
      "We're currently in our building phase (yay, exciting times!) Here's how it works:\n\n" +
      "1. You fill in a simple form with your story, characters, and vibe.\n" +
      "2. Our AI + creative team work together to design your comic, panel by panel.\n" +
      "3. You receive a digital comic (and even a printed one if you choose the premium option!).\n\n" +
      "Join the waitlist or follow us for updates, we're launching very soon!",
  },

  {
    question: "Does Lifetoon have a community? How can I join?",
    description:
      "We’re all about stories and the people behind them. That’s why we’re building a space where creators, parents, fans, and gifters can share ideas, behind-the-scenes, and early features. Until our community platform is ready, join the waitlist and become an early co-creator in shaping the platform from day one!.",
  },
];

export default function LandingpagewipRowquestion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-[42px]">
      <div className="flex flex-col items-center justify-center bg-white py-20 md:py-5">
        <div className="container-xs flex flex-col gap-16 md:px-5 sm:gap-8">
          <div className="flex justify-center px-14 md:px-5">
            <Heading
              size="headingmd"
              as="h2"
              className="text-[48px] font-bold md:text-[44px] sm:text-[38px]"
            >
              Still curious? Let&#39;s clear things up!
            </Heading>
          </div>
          <div className="flex flex-col">
            {data.map((d, index) => (
              <LandingPageWIPFaqitem
                key={"listquestion" + index}
                question={d.question}
                description={d.description}
                isActive={activeIndex === index}
                onToggle={() => toggleQuestion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
