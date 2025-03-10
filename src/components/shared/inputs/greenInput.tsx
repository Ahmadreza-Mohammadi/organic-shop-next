"use client";
import React, { useState } from "react";
import EyeIcon from "../buttons/eye/eyeButton";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  height?: string;
}

const GreenInput: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  height = "49px",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-[6px] border border-gray-300 focus:border-green-500 focus:outline-none pr-10"
        style={{ height }}
      />
      {type === "password" && (
        <EyeIcon
          onClick={togglePasswordVisibility}
          isPasswordVisible={showPassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      )}
    </div>
  );
};

export default GreenInput;
