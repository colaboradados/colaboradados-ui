export function isExternalLink(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
