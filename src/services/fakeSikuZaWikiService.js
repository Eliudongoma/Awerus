const sikuSabaZaWiki = [
  { english: "Saturday", swahili: "Jumamosi" },
  { english: "Sunday", swahili: "Jumapili" },
  { english: "Monday", swahili: "Jumatatu" },
  { english: "Tuesday", swahili: "Jumanne" },
  { english: "Wednesday", swahili: "Jumatano" },
  { english: "Thursday", swahili: "Alhamisi" },
  { english: "Friday", swahili: "Ijumaa" },
];

const sikuZaWiki = [
  ...sikuSabaZaWiki,
  { english: "The day before yesterday", swahili: "Juzi" },
  { english: "Yesterday", swahili: "Jana" },
  { english: "Today", swahili: "Leo" },
  { english: "Tomorrow", swahili: "Kesho" },
  { english: "The day after tomorrow", swahili: "Kesho kutwa" },
  { english: "Week", swahili: "Juma / wiki" },
];

const getSikuZaWiki = () => sikuZaWiki;

const getSikuSabaZaWiki = () => sikuSabaZaWiki;

export { getSikuSabaZaWiki, getSikuZaWiki };
