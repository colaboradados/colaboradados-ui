import { PEOPLE } from "@constants/constants";

export function getMetaContent(key, source) {
  if (!source) {
    console.warn(`getMetaContent needs a source, received ${source}`);
    return null;
  }

  const value = source.meta && source.meta.filter((item) => item.name === key);
  if (!value || value.length <= 0) {
    console.warn(`Couldn't find ${key} in metadata`);
    return null;
  }

  return value.map((val) => val.content);
}

export function getPerson(slug) {
  if (!slug) {
    console.warn(`getPerson needs a slug, received ${slug}`);
    return null;
  }

  const person = PEOPLE[slug];
  if (!person) {
    console.warn(`Couldn't find ${slug} in PEOPLE`);
    return null;
  }

  return PEOPLE[slug];
}
