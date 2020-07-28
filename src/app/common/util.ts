// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-unsafe-return
export const log = <T>(t: string, x: T): T => (console.log(t, x), x);

// todo clean this up
const zipObject = (keys = [], values = []) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment
  keys.reduce((accumulator, key, index) => ({ ...accumulator,[key]: values[index] }),{});

// todo clean this shit up
export const allKeys = (obj: Record<string, unknown>): Promise<unknown> => {
  const keys = Object.keys(obj);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Promise.all(keys.map(key => {
    const value = obj[key];
    // @ts-ignore
    if (typeof value === 'object' && !value.then) {
      // @ts-ignore
      return allKeys(value);
    }
    return value;
  }))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .then(result => zipObject(keys, result));
};
