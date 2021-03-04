import hindi from "./hindi";
import english from "./english";
import french from "./french";
import german from "./german";

const localizations = {
  hindi,
  english,
  french,
  german,
};
const getTrans = (key, locale = "hindi") => {
  const currTranslation = localizations[locale] ? localizations[locale] : hindi;
  let transWord = currTranslation[key]
    ? currTranslation[key]
    : hindi[key]
    ? hindi[key]
    : key;

  return transWord;
};

export { getTrans };
