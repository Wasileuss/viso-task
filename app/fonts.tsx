import localFont from "next/font/local";

const causten = localFont({
  src: [
    {
      path: "./fonts/Causten-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Causten-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Causten-Medium.woff",  
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Causten-SemiBold.woff",    
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Causten-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--causten",
});

export default causten;
