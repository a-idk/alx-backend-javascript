export default function updateUniqueItems(elements) {
  // handling when the argument is not a map
  if (!(elements instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of elements) {
    if (value === 1) {
      elements.set(key, 100);
    }
  }

  return elements;
}
