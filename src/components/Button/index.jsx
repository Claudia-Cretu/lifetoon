import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[18px]",
};
const variants = {
  fill: {
    deep_purple_A200: "bg-deep_purple-a200 text-white",
    yellow_main: "bg-yellow_main text-dark_blue_secondary",
    orange_accent1: "bg-orange_accent1",
  },
};
const sizes = {
  md: "h-[44px] px-[34px] text-[17px]",
  lg: "h-[70px] px-8 text-[24px]",
  sm: "h-[38px] px-[34px] text-[14px]",
  xs: "h-[34px] px-2",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "yellow_main",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "lg", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_purple_A200", "yellow_main", "orange_accent1"]),
};

export { Button };
