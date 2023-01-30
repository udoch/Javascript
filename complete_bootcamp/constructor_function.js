// Constructor Funtion: firstname is always capitalized

function HouseKeeper (yearofExperience, name, cleaningRep) {
    this.yearsofexperience = yearofExperience;
    this.name = name;
    this.cleaningRep = cleaningRep
}

var housekeeper1 = new HouseKeeper(9, "Tome", ["lobby", "kitchen"])
console.log(housekeeper1.name)
console.log(housekeeper1.cleaningRep)




// function ClassOf2022(studentName, department, favSubject, career) {
//     this.studentName = studentName
//     this.department = department
//     this.favSubject = favSubject
//     this.careerpath = career

// }
// var student1 = new ClassOf2022 ("Joey", "Science", "Maths", "Scientist")
// console.log(student1.careerpath)


class ClassOf2022 {
    constructor(studentName, department, favSubject, career) {
        this.studentName = studentName;
        this.department = department;
        this.favSubject = favSubject;
        this.careerpath = career;

    }
}
var student1 = new ClassOf2022 ("Joey Barton", "Science", "Maths", "Scientist")
console.log(student1.studentName)



























