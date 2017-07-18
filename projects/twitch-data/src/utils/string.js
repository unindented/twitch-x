export function supplant (str, obj) {
  return str.replace(/\{\s*([^{}]+?)\s*\}/g, (str, key) => obj[key])
}
