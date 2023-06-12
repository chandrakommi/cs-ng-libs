export const keysIn = (object: any) => {
  const keys: string[] = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
};

export const omit = <T extends Record<string, unknown>>(
  object: T,
  excludeList: string[]
) => {
  const newObject: Partial<T> = {};
  for (const key in object) {
    excludeList.includes(key) ? '' : (newObject[key] = object[key]);
  }
  return newObject;
};
