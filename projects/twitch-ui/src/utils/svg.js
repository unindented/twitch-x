export function rectangle ({width, height, fill}) {
  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><rect fill="${fill}" width="100%" height="100%" /></svg>`
}
