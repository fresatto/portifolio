import { useEffect, useState } from "react";
import { theme } from "../theme";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
}

export const mobileMediaQuery = `(min-width: ${theme.breakpoints.mobile})`;

export const desktopMediaQuery = `(min-width: ${theme.breakpoints.desktop})`;

export const largeDesktopMediaQuery = `(min-width: ${theme.breakpoints.largeDesktop})`;
