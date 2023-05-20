import { Loading } from "@nextui-org/react";
import React from "react";

export default function Button({ loading, text, style }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className={`w-full bg-gradient-to-tr from-yellow-400 to-yellow-500 md:p-2 p-1 rounded-lg ${style}`}
    >
      <div className="flex items-center justify-center text-xl">
        {loading ? <Loading size="sm" /> : <span>{text}</span>}
      </div>
    </button>
  );
}
