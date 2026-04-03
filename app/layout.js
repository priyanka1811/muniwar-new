import "swiper/css";
import "swiper/css/navigation";
import "../public/assets/css/style.css";
import "react-modal-video/css/modal-video.css";
import RootLayoutClient from "./root-layout-client";

export const metadata = {
  title: "Get Affordable eCommerce web development services in Delhi NCR",
  description: "Website Development Company in Delhi. Muniwar Is a Team of 15+ Experts Developers, Get Ecommerce Responsive Website, We Comes in Best Website Designing Company.",
};

export default function RootLayout({ children }) {
  return (
    <html data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.bunny.net/css?family=chivo:700|manrope:400,500,700,800|shippori-mincho:700,800"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
