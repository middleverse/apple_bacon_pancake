import "tailwindcss/tailwind.css";
import { GlobalStyles } from "twin.macro";
import { Head } from "next/document";

const App = ({ Component, pageProps }) => (
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
