const students = [
    { name: 'Aarav', marks: 78, passed: true, subject: 'Math' },
    { name: 'Diya', marks: 42, passed: false, subject: 'Science' },
    { name: 'Kabir', marks: 88, passed: true, subject: 'Math' },
    { name: 'Meera', marks: 65, passed: true, subject: 'English' },
    { name: 'Rohan', marks: 38, passed: false, subject: 'Science' },
    { name: 'Isha', marks: 92, passed: true, subject: 'Math' },
    { name: 'Vivaan', marks: 75, passed: true, subject: 'English' },
    { name: 'Anaya', marks: 70, passed: true, subject: 'Science' }
];

let filtered = [];
let totalPassedGT70 = 0;                        //variable naming is hard
let topperMath;
let topperEnglish;
let topperScience;

// Creating the filtered list of candidate students
for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 70) {              //no need to have multiple if statements as all students scoring 70 and up would have passed.
        filtered.push(students[i]);
        totalPassedGT70 += students[i].marks;
    }
}

// Simple subject specific maximum finding
for (let i = 0; i < filtered.length; i++) {
    let topperMathScore = 0;
    let topperEnglishScore = 0;
    let topperScienceScore = 0;

    if (filtered[i].subject === "Math") {
        if (filtered[i].marks > topperMathScore) {
            topperMath = filtered[i];
            topperMathScore = topperMath.marks;
        }
    }
    else if (filtered[i].subject === "English") {
        if (filtered[i].marks > topperEnglishScore) {
            topperEnglish = filtered[i];
            topperMathScore = topperEnglish.marks;
        }
    }
    else if (filtered[i].subject === "Science") {
        if (filtered[i].marks > topperScienceScore) {
            topperScience = filtered[i];
            topperScienceScore = topperScience.marks;
        }
    }
}

result = [
    topperMath,
    topperEnglish,
    topperScience
];

console.log(totalPassedGT70);
console.log(result);