export function recursiveChangeValueToKey(obj: any, prefix = "") {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      recursiveChangeValueToKey(obj[key], `${prefix}${key}.`);
    } else {
      obj[key] = `${prefix}${key}`;
    }
  }
}
