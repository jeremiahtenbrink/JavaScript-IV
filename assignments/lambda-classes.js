// CODE here for your Lambda Classes
class Person {
	constructor({ name, age, location, gender }){
		this.name = name;
		this.age = age;
		this.location = location;
		this.gender = gender;
	}
	
	speak = function () {
		console.log(`Hello, my name is ${this.name}, I am from ${this.location}`)
	}
}

class Instructor extends Person {
	constructor( attributes ) {
		super(attributes);
		this.specialty = attributes.specialty;
		this.favLanguage = attributes.favLanguage;
		this.catchPhrase = attributes.catchPhrase;
	}
	
	deamo = function (subject) {
		console.log(`Today we are learning about ${subject}`);
	};
	
	grade = function (student, subject) {
			console.log(`${student.name} receives a perfect score on ${subject}.`)
	};
}

class Student extends Person {
	constructor(attributes) {
		super(attributes);
		
	}
}