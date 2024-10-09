export default function getStudentIdsSum(studentList) {
  return studentList.reduce((prev, std) => prev + std.id, 0);
}
