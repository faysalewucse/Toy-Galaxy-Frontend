import React from "react";

export default function Button({ loading, text, style }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className={`w-full bg-gradient-to-tr from-yellow-400 to-yellow-500 md:p-2 p-1 rounded-lg ${style}`}
    >
      <div className="flex items-center justify-center text-xl">
        {loading ? (
          <span className="border h-6 w-6 border-black animate-spin rounded-full"></span>
        ) : (
          <span>{text}</span>
        )}
      </div>
    </button>
  );
}
