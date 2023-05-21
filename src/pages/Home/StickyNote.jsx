import React from "react";
import { SlClose } from "react-icons/sl";
import RenderString from "./RenderString";

export default function StickyNote({ currentUser, setVisible, blogs }) {
  return (
    <div className="sticky ml-auto w-1/6 h-48 scroll-pin -mt-48 top-36 right-10 rounded-lg z-50">
      <div className="bg-white p-1 flex items-center justify-between rounded-t-lg">
        <p className="hidden md:block font-bold text-primary">Pinned Blogs</p>
        <SlClose onClick={() => setVisible(false)} className="text-2xl" />
      </div>
      <div className="bg-yellow-400 h-24 rounded-b-lg">
        {blogs?.map((blog) => {
          return <RenderString htmlString={blog.div} />;
        })}
      </div>
    </div>
  );
}
