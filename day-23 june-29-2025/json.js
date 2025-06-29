const myJson = {
    className: "MyClass",
    batchName: "Batch 2",
    totalStudents: 24,
    isClassActive: true,
    disabledStudents: null,
    studentNames: ["Arafat", "Sagar", "Apurba"],
    classOthersInfos: {
        firstBoy: "Sazid",
        classRoom: "Room 509",
    },
    apurbaFunc: function() {
        return this.studentNames[2] + " is a student of " + this.className;
    },
    arafatFunc: () => {
        return myJson.studentNames[0] + " is a student of " + myJson.className;
    }
}


console.log(myJson.className);
console.log(myJson['batchName']);
console.log(myJson['totalStudents']);
console.log(myJson['isClassActive']);
console.log(myJson.disabledStudents);
console.log(myJson.studentNames[0]);
console.log(myJson.classOthersInfos.classRoom);
console.log(myJson.apurbaFunc());
console.log(myJson.arafatFunc());
myJson.sarapu = "Sagar, Arafat and Apurba";
console.log(myJson.sarapu);

// Stringify the JSON object
const jsonString = JSON.stringify(myJson);
console.log(jsonString);

// Parse the JSON string back to an object
const parsedJson = JSON.parse(jsonString);
console.log(parsedJson);