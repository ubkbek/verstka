import React from "react";
import { About, Courses, Header, Hero, Teachers } from "./components";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Teachers />
      </main>
    </div>
  );
};

export default App;
