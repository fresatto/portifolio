export const theme = {
  colors: {
    text: "#868a9b",
    textBold: "#000",
    border: "#eee",
  },
  fonts: {
    body: '"Syne", serif',
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
    largeDesktop: "1200px",
  },

  media: {
    mobile: `@media (min-width: 576px)`,
    tablet: `@media (min-width: 768px)`,
    desktop: `@media (min-width: 992px)`,
    largeDesktop: `@media (min-width: 1200px)`,
  },
};

export type Theme = typeof theme;
