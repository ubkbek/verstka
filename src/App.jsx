import React from "react";
import { About, Courses, Footer, Header, Hero, Teachers } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Teachers />
      </main>

      <Footer />
    </div>
  );
};

export default App;
