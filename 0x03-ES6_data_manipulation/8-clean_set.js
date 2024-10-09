export default function cleanSet(Set, StartString) {
  if (!Set || !StartString || !(Set instanceof Set) || typeof StartString !== 'string') return '';

  return Array.from(Set)
    .filter((x) => x && x.startsWith(StartString))
    .map((x) => x.replace(StartString, ''))
    .join('-');
}
