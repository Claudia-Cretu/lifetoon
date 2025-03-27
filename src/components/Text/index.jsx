import React from "react";

const sizes = {
  texts: "text-[14px] font-normal",
  textlg: "text-[18px] font-normal",
  textxl: "text-[20px] font-normal",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-dark_blue_secondary font-lora ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
