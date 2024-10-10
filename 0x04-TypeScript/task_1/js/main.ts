interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    yearsOfExperience?: number;
    fullTimeEmployee: boolean;
    location: string;
    [index: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const T1: Teacher = {
    firstName: 'James',
    lastName: 'Arnold',
    fullTimeEmployee: true,
    location: 'Darmstadt',
    contract: false,
}

console.log(T1); // printout teacher's details

const D1: Directors = {
    firstName: 'Kunle',
    lastName: 'Ajayi',
    location: 'Nigerian',
    fullTimeEmployee: true,
    numberOfReports: 21,
  };

console.log(D1); // printout director details

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher('john', 'doe'));

interface StudentClassInterface {
    firstName: string;
    lastName: string;
}

interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface; 
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

function createStudent(
  dStudent: StudentClassConstructorInterface,
  firstName: string,
  lastName: string
): 
  StudentClassInterface {
  // creating a new instance of class passed as dstudent
  const studInstance = new dStudent(firstName, lastName)
  return studInstance;
}

const std = createStudent(StudentClass, 'mike', 'tyson');
console.log(std);
