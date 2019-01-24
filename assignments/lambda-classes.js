// CODE here for your Lambda Classes
class Person {
	constructor({ name, age, location, gender }){
		this.name = name;
		this.age = age;
		this.location = location;
		this.gender = gender;
	}
	
	speak (){
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
	
	demo ( subject) {
		console.log(`Today we are learning about ${subject}`);
	};
	
	grade (student, subject) {
			console.log(`${student.name} receives a perfect score on ${subject}.`)
	};
	
	adjustStudentGrade(student) {
		const points = Math.random() * 20;
		const add = Math.random() < .5;
		if(add) {
			student.grade += points;
			return;
		}
		
		student.grade -= Math.random() * 20;
		
	}
}

class Student extends Person {
	constructor(attributes) {
		super(attributes);
		this.previousBackground = attributes.previousBackground;
		this.className = attributes.className;
		this.favSubjects = attributes.favSubjects;
		this.grade = Math.random() * 100;
	}
	
	listSubjects () {
		this.favSubjects.forEach((subject)=> console.log(subject));
	}
	
	PRAssignment (subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}
}

class ProjectMananger extends Instructor {
	constructor(attributes) {
		super(attributes);
		this.gradClassName = attributes.gradClassName;
		this.favInstructor = attributes.favInstructor;
	}
	
	standUp(slackChannel) {
		console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`)
	}
	
	debugCode (student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
	}
}

const person = new Person("John Doe", "unknown", "unknown", "male");
const femalePerson = new Person('Jane Doe', "unknown", "unknown", "female");

person.speak();
console.log(person.gender);
femalePerson.speak();
console.log(femalePerson.gender);

const spongBob = new Instructor({
	name: "Mr. Square Pants",
	age: "terrible twos",
	location: "under the sea",
	gender: "Sponge",
	specialty: "making crabby patties",
	favLanguage: "gibberish",
	catchPhrase: "Well, it’s no secret that the best thing about a secret is secretly telling someone your secret, " +
	"thereby, secretly adding another secret to their secret collection of secret, secretly."
	
});

const patrick = new Instructor({
	name: "patrick",
	age: "star 4",
	location: "under a rock",
	gender: "star fish",
	specialty: "rock",
	favLanguage: "stupid",
	catchPhrase: " Maybe a story will cheer you up...Once upon a time there was an ugly barnacle. It was so ugly that everyone died. The end."
});

spongBob.speak();
spongBob.demo("crabby patties");
patrick.demo("sleeping under a rock");

console.log(spongBob.age);
console.log(patrick.gender);

const me = new Student({
	name: "Jeremiah",
	age: "32",
	location: "Colorado Springs, CO",
	gender: "male",
	previousBackground: "code ninja",
	className: "web17",
	favSubjects: ['javascript', 'react', 'node.js'],
	
});

me.speak();
me.listSubjects();
me.PRAssignment("javascript IV");

const ethan = new Student({
	name: "Ethan",
	age: "29",
	location: "USA",
	gender: "male",
	previousBackground: "painter",
	className: "web17",
	favSubjects: ['html', 'css', 'python'],
});

ethan.speak();
console.log(ethan.age);
ethan.listSubjects();

const yanrong = new ProjectMananger({
	name: "Yanrong",
	age: "16",
	location: 'home',
	gender: 'male',
	specialty: "code ninja level gold",
	favLanguage: "not english",
	catchPhrase: "call me if you can't get ahold of me on slack",
	gradClassName: "web14",
	favInstructor: "himself",
});

patrick.grade(me, "napping");
spongBob.grade(ethan, "debugging");

yanrong.speak();
yanrong.debugCode(me, "react");
yanrong.grade(me, "javascript");
console.log(yanrong.favInstructor);
console.log(yanrong.gradClassName);
yanrong.standUp("after hours");

console.log(me.grade);
yanrong.adjustStudentGrade(me);
console.log(me.grade);
console.log(ethan.grade);
spongBob.adjustStudentGrade(ethan);
console.log(ethan.grade);