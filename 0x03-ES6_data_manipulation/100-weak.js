export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // if endpoint is already in the weakMap
  const c = weakMap.get(endpoint) || 0;

  // c = c + 1;

  // updating
  weakMap.set(endpoint, c + 1);

  // when the endpoint load is high
  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }

  // return c;
}
