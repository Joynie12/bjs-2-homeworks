function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

  // let firstStudent = new Student(`James`, `Male`, 19, []);
  // let secondStudent = new Student(`Helen`, `Female`, 22, []);
  // let thirdStudent = new Student(`John`, `Male`, 20, []);
  
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks != undefined) {
    this.marks.push(...marks);
  } else {console.log(`Отчислен`)};
}

Student.prototype.getAverage = function () {
  let sum = 0;
  let avg = 0;

  if (this.marks !== undefined && this.marks.length > 0) {
    sum = this.marks.reduce((a, b) => a + b, 0);
    avg = parseFloat((sum/this.marks.length).toFixed(1))
  } else {console.log(0)};

  return avg;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}
