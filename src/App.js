import React from "react";
import Global from "./theme/global";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

function App() {
  return (
    <div>
      <>
        <Global />
        <Header />
        <Content />
        <Footer />
      </>
    </div>
  );
}

export default App;
