import React from "react";

import MaamkiziSection from "./sections/MaamkiziGreetingsSection";
import TableOfContents from "./components/TableOfContents";

export default function App() {
  return (
    <section className="container">
      <h1>BASIC Swahili</h1>
      <TableOfContents />
      <MaamkiziSection />
    </section>
  );
}
