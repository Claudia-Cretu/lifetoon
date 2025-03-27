import React from "react";

const sizes = {
  textxs: "text-[12px] font-medium",
  textmd: "text-[16px] font-medium",
  text2xl: "text-[24px] font-medium md:text-[22px]",
  headingxs: "text-[20px] font-semibold",
  headings: "text-[36px] font-bold md:text-[34px] sm:text-[32px]",
  headingmd: "text-[48px] font-bold md:text-[44px] sm:text-[38px]",
  headinglg: "text-[80px] font-extrabold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "textmd", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-dark_blue_secondary font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
