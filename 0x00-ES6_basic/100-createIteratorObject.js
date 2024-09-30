/* export default function createIteratorObject(report) {
  let result = [];
  for (const value of Object.values(report.allEmployees)) {
    result = [...result, ...value];
  }
  return result;
} */
export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).reduce((acc, curr) => acc.concat(curr), []);
}
