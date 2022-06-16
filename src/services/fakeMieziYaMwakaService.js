const mieziYaMwaka = [
  { swahili: "Januari ", english: "January " },
  { swahili: "Februari", english: "February" },
  { swahili: "Machi", english: "March" },
  { swahili: "Aprili ", english: "April " },
  { swahili: "Mei", english: "May" },
  { swahili: "Juni ", english: "June" },
  { swahili: "Juli ", english: "July" },
  { swahili: "Agosti  ", english: "August" },
  { swahili: "Septemba", english: "September" },
  { swahili: "Oktoba", english: "October" },
  { swahili: "Novemba", english: "November" },
  { swahili: "Disemba", english: "December" },
];

const notes = [
  { swahili: "Mwaka", english: "Date" },
  { swahili: "Tarehe", english: "Year" },
  { swahili: "mwezi / miezi", english: "Year(s)" },
  { swahili: "Zaliwa", english: "to be born" },
  { swahili: "Lini", english: "When" },
];

const mazoezi = [{ swali: "Ulizaliwa lini?" }];

const getMieziYaMwaka = () => mieziYaMwaka;

const getNotes = () => notes;

const getMazoezi = () => mazoezi;

export { getMazoezi, getNotes, getMieziYaMwaka };
