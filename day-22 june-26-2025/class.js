class myClass {
    // properties
    className = "Byets MERN Batch 2";
    students = ["Arafat", "Sagar", "Apurba", "Nisho", "Nobel"];
    apurba;

    // methods
    organization = () => {
        return "DIPTI";
    } 

    // method with parameter
    bestStudent = (std = 'Arafat') => {
        return std + ", " + this.students[2] + " and " + this.students[3] + " are best friend";
    } 

    // construct
    constructor(data = "Byets MERN Batch 2") {
        console.log(data);
    }
}

const obj = new myClass("obj created successfully");
console.log(obj.className);
console.log(obj.organization());
console.log(obj.bestStudent("Sagar"));
console.log(obj.bestStudent("Group of Huzur"));

const obj2 = new myClass;
obj2.apurba = "Apurba is a good student";
console.log(obj2.apurba);
console.log(obj.apurba);
obj2.nisha = "Nisha is a good student";
console.log(obj2.nisha);

class myChildClass extends myClass {
    topStudent = () => {
        return this.students[2] + " is the top student of this class";
    }

    constructor() {
        super();
        console.log("Child class created successfully");
    }
} 

const childObj = new myChildClass;
console.log(childObj.topStudent());