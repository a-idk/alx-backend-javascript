export default function getListStudentIds(stud) {
  if (stud instanceof Array) {
    return stud.map((std) => std.id);
  }
  return [];
}
