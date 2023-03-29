import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "font-normal text-[20px]",
  h3: "text-[16px]",
  h4: "font-normal text-[15px]",
  h5: "font-normal text-[14px]",
  h6: "text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
