import React from 'react';
import { Heading, Text } from "../../components";

export default function LandingPageWIPFaqitem({ question, description, isActive, onToggle }) {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button 
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left"
      >
        <Heading as="h3" className="text-[20px] font-medium">
          {question}
        </Heading>
        <span className="text-2xl">{isActive ? '-' : '+'}</span>
      </button>
      {isActive && (
        <Text 
          as="p" 
          className="mt-4 text-[16px] text-gray-600 whitespace-pre-line transition-all duration-300 ease-in-out"
        >
          {description}
        </Text>
      )}
    </div>
  );
}
