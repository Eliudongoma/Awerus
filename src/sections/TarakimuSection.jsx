import React from "react";

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
  return (
    <section className="tarakimu">
      <h2>Tarakimu</h2>
      <Table data={getNumbersToTen()} heading="0 - 10" />
      <Table data={getNumbersToTwenty()} heading="11 - 20" />
      <Table data={getNumbersToThirty()} heading="21 - 30" />
      <Table data={getNumbersToForty()} heading="31 - 40" />
      <Table data={getNumbersToFifty()} heading="41 - 50" />
      <Table data={getNumbersToSixty()} heading="51 - 60" />
      <Table data={getNumbersToSeventy()} heading="61 - 70" />
      <Table data={getNumbersToEighty()} heading="71 - 80" />
      <Table data={getNumbersToNinety()} heading="81 - 90" />
      <Table data={getNumbersToOneHundred()} heading="91 - 100" />
      <PageNavigators
        nextSectionName="Greetings in Swahili"
        onPreviousNavigation={() => console.log("previuos")}
        onNextNavigation={() => console.log("next")}
        previousSectionName="Handy Words"
      />
    </section>
  );
}
