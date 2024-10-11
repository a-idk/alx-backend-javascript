// creating a director interface with 3 expected methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// creating the teacher interface with 3 methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// creating director class that implements the director interface
class Director implements DirectorInterface {
    workFromHome = (): string => 'Working from home';
    getCoffeeBreak = (): string => 'Getting a coffee break';
    workDirectorTasks = (): string => 'Getting to director tasks';
}

// creating the teacher class that implements the teacher interface
class Teacher implements TeacherInterface {
    workFromHome = (): string => 'Cannot work from home';
    getCoffeeBreak = (): string => 'Cannot have a break';
    workTeacherTasks = (): string => 'Getting to work';
}

// creating a class createEmployee as requested
function createEmployee(salary: number | string): Teacher | Director {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director{
    return (employee as Director).workDirectorTasks !== undefined;
}

const executeWork = (employee: Teacher | Director): string => {
    let res;
    isDirector(employee) ? res = (employee as Director).workDirectorTasks() : res = (employee as Teacher).workTeacherTasks();
    return res;
};

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';

console.log(teachClass('Math'));
console.log(teachClass('History'));
