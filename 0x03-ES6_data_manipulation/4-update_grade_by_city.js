export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const dGrade = { grade: 'N/A' }; // student doesnt have grade in newGrades
  if (studentList instanceof Array) {
    return studentList
      .filter((std) => std.location === city)
      .map((std) => ({
        id: std.id,
        firstName: std.firstName,
        location: std.location,
        grade: (newGrades.filter((grade) => grade.studentId === std.id).pop() || dGrade).grade,
      }));
  }
  return [];
}
