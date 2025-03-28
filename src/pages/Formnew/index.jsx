import { Helmet } from "react-helmet";
import { Button, Img, CheckBox, Input, Text, Heading } from "../../components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormnewPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://fakebackend-lrpu.onrender.com/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        navigate("/confirmationatsubmitform");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Lifetoon</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="relative h-[100vh] w-full bg-white overflow-hidden flex items-center justify-center">
        <Img
          src="images/img_rectangle_18_orange_100.png"
          alt="Image"
          className="absolute right-[-5%] top-0 m-auto h-[690px] w-[53%] object-cover"
        />
        <Img
          src="images/img_rectangle_15_orange_accent1.png"
          alt="Image"
          className="absolute bottom-0 left-[-5%] m-auto h-[302px] w-[53%] object-cover"
        />
        <Img
          src="images/img_vector_dark_blue_secondary.svg"
          alt="Vector"
          className="absolute top-4 left-4 h-[80px] w-auto object-contain z-20"
        />
        <div className="container-xs relative z-10 flex justify-center md:px-5">
          <div className="flex w-full justify-center">
            <div className="flex w-[74%] flex-col items-center justify-center gap-[30px] rounded-[24px] bg-white px-14 py-16 shadow-lg md:w-full md:p-5">
              <div className="mx-1 flex flex-col items-center gap-1 md:mx-0">
                <Heading
                  size="headings"
                  as="h1"
                  className="text-[36px] font-bold md:text-[34px] sm:text-[32px]"
                >
                  Join the Lifetoon Waitlist
                </Heading>
                <Heading
                  as="h2"
                  className="!font-lora text-[16px] font-normal italic"
                >
                  Be the first to know when we launch & get exclusive early
                  access!
                </Heading>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex w-[82%] flex-col items-start gap-6 md:w-full"
              >
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text
                    size="texts"
                    as="p"
                    className="!font-ibmplexsans text-[14px] font-medium !text-gray-700"
                  >
                    Your name
                  </Text>
                  <Input
                    shape="round"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-md border border-gray-300 px-3"
                  />
                  {errors.name && (
                    <Text className="text-red-500 text-sm">{errors.name}</Text>
                  )}
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Text
                    size="texts"
                    as="p"
                    className="!font-ibmplexsans text-[14px] font-medium !text-gray-700"
                  >
                    <span className="text-gray-700">Your email&nbsp;</span>
                    <span className="text-orange_accent1">*</span>
                  </Text>
                  <Input
                    shape="round"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-md border border-gray-300 px-3"
                  />
                  {errors.email && (
                    <Text className="text-red-500 text-sm">{errors.email}</Text>
                  )}
                </div>
                <CheckBox
                  name="check"
                  label="I want to receive early access perks & updates."
                  id="check"
                  className="gap-3 font-inter text-[16px] text-dark_blue_secondary"
                />
                <Button
                  type="submit"
                  size="md"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      alt="Arrow Right"
                      className="mb-0.5 mt-1 h-[22px] w-[22px] object-contain"
                    />
                  }
                  className="w-full gap-1 rounded-[22px] border-[1.43px] border-solid border-dark_blue_secondary border-b-8 px-[32.57px] font-medium italic shadow-xl sm:px-5
                    bg-orange_accent1 text-dark_blue_secondary
                    hover:bg-yellow-200 hover:border-transparent
                    transition-all duration-300 ease-in-out"
                >
                  Join the Waitlist
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
