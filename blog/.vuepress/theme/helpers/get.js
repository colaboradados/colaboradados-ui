import { PEOPLE } from "./constants";

export function getMetaContent(key, source) {
  const value = source.meta?.filter((item) => item.name === key);
  return value && value.length > 0 ? value[0].content : null;
}

export function getPerson(slug) {
  return PEOPLE[slug];
}
