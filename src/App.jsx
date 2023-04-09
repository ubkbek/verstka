import React from "react";
import { About, Courses, Header, Hero } from "./components";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
      </main>
    </div>
  );
};

export default App;
