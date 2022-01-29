/**
 * Class to create a Car instance
 * @example
 * const newProgrammer = new Programmer(user, "javascript");
 * newProgrammer.getInfo();
 * newProgrammer.setClassroom("2B");
 * 
 * @see https://google.com
 * 
 * @todo Finish setActive() method
 */
class Programmer {
    /**
     * @param {User} user User object
     * @param {string} language A programming language.
     */
    constructor(user, language) {
        this.user = user;
        this.language = language;
        this.fullName = `${user.firstName} ${user.lastName}`;
        this.classroom = "";
    }

    /**
     * Get programmer info
     * @returns {string}
     */
    getInfo() {
        return `I am "${this.fullName}" and my favorite language is "${this.language}".`;
    }

    /**
     * Change default classroom.
     * @param {string} classroom The new classroom.
     * @returns {void}
     */
    setClassroom(classroom) {
        this.classroom = classroom;
    }
}

/** @type {User} */
const user1 = {
    id: 123,
    firstName: "Daniel",
    lastName: "González",
    age: 22,
    active: true
};

/** @type {User} */
const user2 = {
    id: 456,
    firstName: "John",
    lastName: "Doe",
    age: 22,
    active: true
};

/**
 * Know more in {@link Programmer}
 */
const programmer1 = new Programmer(user1, "Javascript");
const programmer2 = new Programmer(user2, "Python");

console.log( programmer1.getInfo() );
console.log( programmer2.getInfo() );
programmer2.setClassroom("2B");
console.log( programmer2.getInfo() );
console.log( "Classroom:", programmer2.classroom );
