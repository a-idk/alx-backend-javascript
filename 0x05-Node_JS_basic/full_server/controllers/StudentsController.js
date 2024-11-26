const readDatabase = require('../utils');

const arrToStr = (arr) => arr.join(', ');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const { cs, swe } = await readDatabase(process.argv[2]);
      const output = `This is the list of our students\n` +
        `Number of students in CS: ${cs.length}. List: ${arrToStr(cs)}\n` +
        `Number of students in SWE: ${swe.length}. List: ${arrToStr(swe)}\n`;
      response.status(200).send(output);
    } catch (err) {
      console.error(err);
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const { cs, swe } = await readDatabase(process.argv[2]);
      response.status(200).send(`List: ${arrToStr(major === 'CS' ? cs : swe)}`);
    } catch (err) {
      console.error(err);
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

