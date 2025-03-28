import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingpagewipColumn from "./LandingpagewipColumn";
import LandingpagewipColumnTwo from "./LandingpagewipColumnTwo";
import LandingpagewipCtawaitlist from "./LandingpagewipCtawaitlist";
import LandingpagewipRowOne from "./LandingpagewipRowOne";
import LandingpagewipRowmeettheheroe from "./LandingpagewipRowmeettheheroe";
import LandingpagewipRowquestion from "./LandingpagewipRowquestion";
import LandingpagewipStackwhylifetoo from "./LandingpagewipStackwhylifetoo";
import React from "react";
import { Link } from 'react-router-dom';

export default function LandingpageWIPPage() {
  return (
    <>
      <Helmet>
        <title>Lifetoon</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white">
        <div>
          <Header />
          <div className="relative h-[1152px] content-center md:h-auto">
            <div className="flex flex-1 flex-col items-end">
              <Img src="images/img_rectangle_18.png" alt="Image" className="h-[842px] w-[36%] object-contain" />
              <LandingpagewipColumn />
            </div>
            <div className="absolute left-0 right-0 top-[13%] mx-20 flex flex-1 flex-col items-start gap-8 md:mx-0">
              <div className="flex flex-col items-start gap-5 self-stretch">
                <Heading
                  size="headinglg"
                  as="h2"
                  className="w-[60%] !font-chewy text-[80px] font-normal leading-[80px] md:w-full md:px-5 md:text-[48px]"
                >
                  <span className="text-dark_blue_secondary">Turn Life’s Moments into&nbsp;</span>
                  <span className="text-orange_accent1">Legendary</span>
                  <span className="text-dark_blue_secondary">&nbsp;</span>
                  <span className="text-orange_accent1">Comics</span>
                </Heading>
                <Text as="p" className="w-[60%] text-[20px] font-normal italic leading-7 md:w-full md:px-5">
                  A photo captures a moment, but a story brings it to life. Lifetoon transforms your memories into
                  personalized comics, turning milestones, connections, and special moments into immersive,
                  one-of-a-kind narratives to treasure forever.
                </Text>
              </div>
              <Link to="formnew">
                <Button
                  size="lg"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      alt="Arrow Right"
                      className="mb-1 mt-0.5 h-[32px] w-[32px] object-contain"
                    />
                  }
                  className="min-w-[394px] gap-1.5 rounded-[30px] px-[30px] font-medium italic shadow-md sm:px-5 
                             bg-orange_accent1 text-dark_blue_secondary
                             border-2 border-solid border-dark_blue_secondary border-b-8
                             hover:bg-yellow-200 hover:border-0 hover:text-dark_blue_secondary
                             transition-all duration-300 ease-in-out"
                >
                  Create your comic now
                </Button>
              </Link>
            </div>
            {/* <Img
              src="images/img_rectangle_18.png"
              alt="Image"
              className="absolute right-px top-20 m-auto h-[842px] w-[36%] object-contain"
            /> */}
          </div>
          <div className="relative mt-[130px] h-[1544px] md:h-auto">
            <Img src="images/img_rectangle_15.png" alt="Image" className="mt-36 h-[1000px] w-[44%] object-contain" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-[106px] md:gap-[79px] sm:gap-[53px]">
              <LandingpagewipRowOne />
              <LandingpagewipStackwhylifetoo />
            </div>
          </div>
          <Img src="images/img_subtract.svg" alt="Subtract" className="mt-[92px] h-[154px] w-full md:h-auto" />
          <LandingpagewipColumnTwo />
          <LandingpagewipRowmeettheheroe />
          <LandingpagewipRowquestion />
          <LandingpagewipCtawaitlist />
          
          {/* Imaginea peste bula galbenă */}
          <Img
            src="images/heropicture.jpg" // Înlocuiește cu calea corectă a imaginii tale
            alt="Poza pe bula galbenă"
            className="absolute top-[60%] left-[80%] transform translate-x-[-50%] translate-y-[-50%] w-[25%] h-[65%] md:w-[30%] z-10" 
          />
          
          <Footer />
        </div>
      </div>
    </>
  );
}
