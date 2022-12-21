import React from "react";

const Input = ({
  label,
  width,
  disabled,
  placeholder,
  name,
  value,
  onChange,
  type,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div className="relative flex flex-col gap-1 items">
      <label className="text-secondary font-semibold">{label}</label>
      {leftIcon && (
        <img
          className="absolute top-6 left-4 object-contain w-6"
          src={leftIcon}
          alt=""
        />
      )}
      {rightIcon && (
        <img
          className="absolute top-8 right-5 object-contain w-6"
          src={rightIcon}
          alt=""
        />
      )}
      <input
        className={` 
      ${width === "full" && "w-full"}
      ${width === "half" && "w-1/2"}
      ${disabled && "opacity-70"}
        text-white
      bg-dark border-2 border-tertitary rounded pr-4 py-4 outline-none ring-0 placeholder-white placeholder:font-medium placeholder:text-lg
        focus:border-2 focus:border-primary-dark focus:placeholder-primary-dark caret-white
        md:pr-6 md:py-6 transition-all duration-200
        ${leftIcon ? "pl-6 md:pl-14 md:pr-14" : "pl-4 md:pl-5"}
        ${leftIcon ? "pl-6 md:pl-14 md:pr-14" : "pl-4 md:pl-5"}
        `}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
