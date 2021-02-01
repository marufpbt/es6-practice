class Student {
	constructor(studentId, studentName) {
		this.id = studentId;
		this.name = studentName;
		this.univesity = "University of Chittagong";
	}
}

const student1 = new Student(1, "Maruf");
const student2 = new Student(2, "Zihad");
const student3 = new Student(3, "Ibrahim");
console.log(student1, student2, student3);
