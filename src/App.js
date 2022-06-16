import React from "react";
import { Routes, Route } from "react-router-dom";

import TableOfContents from "./components/TableOfContents";
import BiddingGoodbyeSection from "./sections/BiddingGoodbyeSection";
import FamiliaSection from "./sections/FamiliaSection";
import GoodnightInSwahiliSection from "./sections/GoodnightInSwahiliSection";
import MaamkiziGreetingsSection from "./sections/MaamkiziGreetingsSection";
import MieziYaMwakaSection from "./sections/MieziYaMwakaSection";
import NotFound from "./components/NotFound";
import PhrasesSection from "./sections/PhrasesSection";
import SehemuZaMwiliSection from "./sections/SehemuZaMwiliSection";
import SikuZaWikiSection from "./sections/SikuZaWikiSection";
import TarakimuSection from "./sections/TarakimuSection";

export default function App() {
  return (
    <section className="container">
      <h1 className="heading">BASIC Swahili</h1>
      <TableOfContents />
      <Routes>
        <Route
          path="/maamkizi-greetings"
          element={<MaamkiziGreetingsSection />}
        />
        <Route path="/bidding-goodbye" element={<BiddingGoodbyeSection />} />
        <Route path="/goodnight" element={<GoodnightInSwahiliSection />} />
        <Route path="/useful-phrases" element={<PhrasesSection />} />
        <Route path="/tarakimu" element={<TarakimuSection />} />
        <Route path="/siku-za-wiki" element={<SikuZaWikiSection />} />
        <Route path="/miezi-ya-mwaka" element={<MieziYaMwakaSection />} />
        <Route path="/familia" element={<FamiliaSection />} />
        <Route path="/sehemu-za-mwili" element={<SehemuZaMwiliSection />} />
        <Route path="/" element={<MaamkiziGreetingsSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
