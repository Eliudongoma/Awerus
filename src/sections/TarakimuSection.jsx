import React, { useEffect, useState } from "react";

import {
  getNumbersToEighty,
  getNumbersToFifty,
  getNumbersToForty,
  getNumbersToNinety,
  getNumbersToOneHundred,
  getNumbersToSeventy,
  getNumbersToSixty,
  getNumbersToTen,
  getNumbersToThirty,
  getNumbersToTwenty,
} from "../services/fakeNumbersService";
import Table from "../components/Table";
import PageNavigators from "../navigation/PageNavigators";

export default function TarakimuSection() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers([
      getNumbersToTen(),
      getNumbersToTwenty(),
      getNumbersToThirty(),
      getNumbersToForty(),
      getNumbersToFifty(),
      getNumbersToSixty(),
      getNumbersToSeventy(),
      getNumbersToEighty(),
      getNumbersToNinety(),
      getNumbersToOneHundred(),
    ]);
  }, []);

  return (
    <section className="tarakimu">
      <h2>Tarakimu</h2>
      {numbers.map(({ numbers, heading }) => (
        <Table key={heading} data={numbers} heading={heading} />
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
