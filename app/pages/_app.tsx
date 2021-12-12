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
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
