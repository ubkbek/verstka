import React from "react";
import { About, Header, Hero } from "./components";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
