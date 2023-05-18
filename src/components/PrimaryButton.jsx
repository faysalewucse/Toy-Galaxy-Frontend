import React from "react";

export default function PrimaryButton({ text, style, onClickHandler }) {
  return (
    <div
      onClick={onClickHandler}
      className={`text-center text-black bg-gradient-to-tr from-yellow-400 to-yellow-500 px-5 py-2 rounded cursor-pointer ${style} hover:shadow-xl transition-all duration-200`}
    >
      {text}
    </div>
  );
}
