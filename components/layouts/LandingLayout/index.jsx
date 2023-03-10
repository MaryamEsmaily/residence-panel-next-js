import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function LandingLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default LandingLayout;
