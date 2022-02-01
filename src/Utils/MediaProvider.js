import { createMedia } from "@artsy/fresnel";

const MediaStyles = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
});

export const mediaStyle = MediaStyles.createMediaStyle();
export const { Media, MediaContextProvider } = MediaStyles;
