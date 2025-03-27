import { Img, Heading, Button, SelectBox, TextArea, Input } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function LandingpagewipRowOne() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex justify-center px-14 md:px-5">
        <div className="flex w-full items-center gap-4 md:flex-col">
          <div className="flex w-[46%] flex-col items-end gap-2 md:w-full">
            <div className="mr-8 flex h-[168px] w-[56%] items-center justify-center bg-[url(/public/images/img_dialog_baloon.svg)] bg-cover bg-no-repeat px-2 md:mr-0 md:h-auto md:w-full">
              <Heading
                size="text2xl"
                as="h2"
                className="mb-2 flex-1 overflow-hidden overflow-ellipsis text-center !font-grandstander text-[24px] font-normal uppercase leading-[23px] md:text-[22px]"
              >
                <span className="font-bold">Lifetoon</span>
                <span>&nbsp;in Action!(Preview</span>
                <span>&nbsp;👀</span>
                <span>&nbsp;Only)</span>
              </Heading>
            </div>
            <div className="flex flex-col gap-[30px] self-stretch rounded-[24px] border-r border-solid border-avatar-__-_-50 bg-white p-6 shadow-lg sm:p-5">
              <div className="flex items-center justify-between gap-5">
                <Img src="images/img_vector.svg" alt="Vector" className="h-[30px] w-[12%] object-contain" />
                <Img src="images/img_brush.svg" alt="Brush" className="h-[22px]" />
              </div>
              <div className="flex flex-col gap-[46px]">
                <div className="flex flex-col gap-[22px]">
                  <div className="flex flex-col items-start gap-1.5">
                    <Heading as="h3" className="text-[16px] font-medium">
                      Upload a photo
                    </Heading>
                    <Input
                      color="deep_purple_50"
                      size="xs"
                      name="weburl"
                      placeholder={`image_01.jpg`}
                      suffix={
                        <div className="flex h-[18px] w-[18px] items-center justify-center">
                          <Img
                            src="images/img_close_deep_purple_a200.svg"
                            alt="Close"
                            className="h-[20px] w-[18px] object-contain"
                          />
                        </div>
                      }
                      className="gap-4 rounded-[20px] border-[0.93px] border-gray-300_01 px-2.5 font-lora italic"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-start justify-between gap-5">
                      <Heading as="h4" className="self-center text-[16px] font-medium">
                        Describe your story
                      </Heading>
                      <Heading size="textxs" as="h5" className="text-[12.98px] font-normal !text-blue_gray-20201">
                        393/500
                      </Heading>
                    </div>
                    <TextArea
                      shape="round"
                      name="prompttwo_one"
                      placeholder={`He was nervous. I could tell by the way he kept fiddling with his jacket pocket. It wasn’t a grand setup. No flash mob, no photographer hiding in the bushes. Just us. A quiet bench. The sound of leaves crunching under our feet. He forgot half the words he wanted to say. I said yes before he even finished the sentence. And somehow, that made it perfect. Because it felt real. It felt like us.`}
                      className="rounded-lg !border-[0.93px] !border-deep_purple-a200 px-2.5 font-lora italic leading-[22px] text-black-900"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Heading as="h6" className="text-[16px] font-medium">
                      Choose your comic look
                    </Heading>
                    <SelectBox
                      shape="round"
                      indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[20px] w-[22px]" />}
                      name="styledropdown"
                      placeholder={`American Comic Book`}
                      options={dropDownOptions}
                      className="gap-4 self-stretch rounded-lg border-[0.93px] border-solid border-gray-30301 px-2.5 font-lora italic"
                    />
                  </div>
                </div>
                <Button
                  color="deep_purple_A200"
                  size="sm"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_ai_essentials_icon_set.svg"
                      alt="Ai Essentials Icon Set"
                      className="mb-0.5 h-[22px] w-[22px] object-contain"
                    />
                  }
                  className="gap-2 self-stretch rounded-[18px] px-[34px] sm:px-5"
                >
                  Creating your comic...
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-[732px] flex-1 content-center md:h-auto md:w-full md:flex-none md:self-stretch">
            <div className="flex flex-1 flex-col items-start">
              <div className="relative z-[1] ml-14 flex h-[220px] w-[52%] items-start justify-center bg-[url(/public/images/img_dialog_baloon_white.svg)] bg-cover bg-no-repeat p-1 md:ml-0 md:h-auto md:w-full">
                <Heading
                  size="text2xl"
                  as="p"
                  className="mb-[54px] flex-1 overflow-hidden overflow-ellipsis text-center !font-grandstander text-[24px] font-normal uppercase leading-[23px] md:text-[22px]"
                >
                  <span>tHIS COULD BE YOUR COMIC&nbsp;</span>
                  <span className="font-bold">BOOK</span>
                  <span>!😱</span>
                </Heading>
              </div>
              <div className="relative mr-2.5 mt-[-14px] flex items-center self-stretch md:mr-0 sm:flex-col">
                <Img
                  src="images/img_vector_9.svg"
                  alt="Vectornine"
                  className="mb-2.5 h-[382px] w-[24%] self-end object-contain sm:w-full"
                />
                <div className="relative ml-[-16px] h-[528px] flex-1 rotate-[8deg] bg-white py-7 sm:ml-0 sm:w-full sm:flex-none sm:self-stretch sm:py-5">
                  <div className="absolute left-0 right-0 top-[7%] mx-auto h-[392px] w-[90%] border-2 border-solid border-black-900" />
                  <Heading
                    size="text2xl"
                    as="p"
                    className="absolute bottom-[10%] left-[7.73px] m-auto flex-1 text-center !font-chewy text-[24px] font-normal leading-[31px] !text-black-900 md:text-[22px]"
                  >
                    The proposal
                  </Heading>
                  <Heading
                    size="textxs"
                    as="p"
                    className="absolute bottom-[28.48px] left-[3.69px] m-auto flex-1 text-center !font-lora text-[12px] font-normal leading-[15px] !text-black-900"
                  >
                    10/10/2010
                  </Heading>
                </div>
              </div>
            </div>
            <Img
              src="images/img_settings.svg"
              alt="Settings"
              className="absolute bottom-0 left-[21%] top-0 my-auto h-[18px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
