export default function getStudentsByLocation(studentList, city) {
  if (studentList instanceof Array) {
    return studentList.filter((std) => std.location === city);
  }
  return [];
}
