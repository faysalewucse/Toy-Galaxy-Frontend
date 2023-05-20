import { useEffect } from "react";

const useTitle = (title) => {
  document.title = `TOY GALAXY | ${title}`;
};

export default useTitle;
