import { useEffect } from "react";

type Handler = (event: MouseEvent) => void;

const useClickOutside = (ref: any, handler: Handler) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, handler]);
};

export default useClickOutside;
