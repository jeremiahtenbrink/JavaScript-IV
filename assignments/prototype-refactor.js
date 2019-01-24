/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing
  several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

class GameObject {
	constructor( createdAt, dimensions ) {
		
		this.dimensions = dimensions;
		this.createdAt = createdAt;
	}
	
	destroy() {
		return "Object was removed from the game.";
	}
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
	constructor( createdAt, dimensions, healthPoints, name ) {
		super( createdAt, dimensions );
		this.name = name;
		this.healthPoints = healthPoints;
	}
	
	takeDamage() {
		console.log( `${ this.name } took damage.` );
	}
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
	constructor( { createdAt, dimensions, healthPoints, name, team, weapons, language} ) {
		
		super( createdAt, dimensions, healthPoints, name );
		this.team = team;
		this.weapons = weapons;
		this.language = language;
	}
	
	greet() {
		return `${ this.name } offers a greeting in ${ this.language }.`;
	}
	
	usesWeapon(weaponNumber, damageDelt) {
		console.log(`${this.name} uses ${this.weapons[weaponNumber -1]} and deals ${damageDelt} damage.`);
	}
	
	
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid( {
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1,
	},
	healthPoints: 5,
	name: 'Bruce',
	team: 'Mage Guild',
	weapons: [
		'Staff of Shamalama',
	],
	language: 'Common Tongue',
} );

const swordsman = new Humanoid( {
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2,
	},
	healthPoints: 15,
	name: 'Sir Mustachio',
	team: 'The Round Table',
	weapons: [
		'Giant Sword',
		'Shield',
	],
	language: 'Common Tongue',
} );

const archer = new Humanoid( {
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4,
	},
	healthPoints: 10,
	name: 'Lilith',
	team: 'Forest Kingdom',
	weapons: [
		'Bow',
		'Dagger',
	],
	language: 'Elvish',
} );

console.log( mage.createdAt ); // Today's date
console.log( archer.dimensions ); // { length: 1, width: 2, height: 4 }
console.log( swordsman.healthPoints ); // 15
console.log( mage.name ); // Bruce
console.log( swordsman.team ); // The Round Table
console.log( mage.weapons ); // Staff of Shamalama
console.log( archer.language ); // Elvish
console.log( archer.greet() ); // Lilith offers a greeting in Elvish.
console.log( mage.takeDamage() ); // Bruce took damage.
console.log( swordsman.destroy() ); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could
// result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Hero extends Humanoid {
	constructor(object){
		super( object );
	}
	removeHealthPoints(amount) {
		this.healthPoints = this.healthPoints - (amount/2);
		console.log(this.takeDamage());
		console.log(`${this.name} has ${this.healthPoints} remaining.`);
		if (this.healthPoints <= 0){
			console.log(hero.destroy());
			console.log("Villain has won the battle.")
		}
	}
	
}

class Villain extends Humanoid {
	constructor(object){
		super( object );
	}
	removeHealthPoints(amount) {
		this.healthPoints = this.healthPoints - amount;
		console.log(this.takeDamage());
		console.log(`${this.name} has ${this.healthPoints} remaining.`);
		if (this.healthPoints <= 0){
			console.log(villain.destroy());
			console.log("Hero has won the battle.");
		}
	}
	
}

const hero = new Hero( {
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2,
	},
	healthPoints: 15,
	name: 'Sir Mustachio',
	team: 'The Round Table',
	weapons: [
		'Giant Sword',
		'Shield',
	],
	language: 'Common Tongue',
});

const villain = new Villain({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4,
	},
	healthPoints: 10,
	name: 'Lilith',
	team: 'Forest Kingdom',
	weapons: [
		'Bow',
		'Dagger',
	],
	language: 'Elvish',
});

hero.usesWeapon(1, 5);
villain.removeHealthPoints(5);
villain.usesWeapon(1, 5);
hero.removeHealthPoints(5);
hero.usesWeapon(2, 5);
villain.removeHealthPoints(5);