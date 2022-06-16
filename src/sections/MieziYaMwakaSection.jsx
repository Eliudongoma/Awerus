import React, { useEffect, useState } from "react";

import {
  getNotes,
  getMieziYaMwaka,
  getMazoezi,
} from "../services/fakeMieziYaMwakaService";
import EnglishSwahiliInline from "../components/EnglishSwahiliInline";
import PageNavigators from "../navigation/PageNavigators";
import SwahiliEnglish from "../components/SwahiliEnglish";

export default function MieziYaMwakaSection() {
  const [miezi, setMiezi] = useState([]);
  const [notes, setNotes] = useState([]);
  const [mazoezi, setMazoezi] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
    setMiezi(getMieziYaMwaka());
    setMazoezi(getMazoezi());
  }, []);

  return (
    <section className="miezi-ya-mwaka">
      <h2>Miezi Ya Mwaka</h2>
      {miezi.map(({ english, swahili }) => (
        <SwahiliEnglish english={english} swahili={swahili} />
      ))}
      <h3>Note</h3>
      {notes.map(({ english, swahili }) => (
        <EnglishSwahiliInline english={english} swahili={swahili} />
      ))}
      <h3 className="zoezi">Zoezi</h3>
      {mazoezi.map(({ mfano, swali }) => (
        <>
          <p className="zoezi__kichwa">{mfano}</p>
          <p>{swali}</p>
        </>
      ))}
      <PageNavigators
        nextSectionName="Greetings in Swahili"
        onPreviousNavigation={() => console.log("previuos")}
        onNextNavigation={() => console.log("next")}
        previousSectionName="Handy Words"
      />
    </section>
  );
}
