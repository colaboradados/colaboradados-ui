import { PEOPLE } from "./constants";

export function getMetaContent(key, source) {
  if (!source) {
    console.error(`getMetaContent needs a source, received ${source}`);
    return null;
  }

  const value = source.meta && source.meta.filter((item) => item.name === key);
  if (!value || value.length <= 0) {
    console.error(`Couldn't find ${key} in metadata`);
    return null;
  }

  return value[0].content;
}

export function getPerson(slug) {
  if (!slug) {
    console.error(`getPerson needs a slug, received ${slug}`);
    return null;
  }

  const person = PEOPLE[slug];
  if (!person) {
    console.error(`Couldn't find ${slug} in PEOPLE`);
    return null;
  }

  return PEOPLE[slug];
}
