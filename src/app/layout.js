import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"/>
        <title>SKCATERING App</title>
      </head>
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
