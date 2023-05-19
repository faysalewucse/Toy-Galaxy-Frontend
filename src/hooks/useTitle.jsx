import { useEffect } from "react";

const useTitle = (title) => {
  document.title = `${title} | TOY GALAXY`;
};

export default useTitle;
