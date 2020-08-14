// -------- Question 1 ---------------

let firstName = 'string';
let lastName = 'string';
let email = 'string';
let username = 'string';
let dateOfBirth = 'string';
let numberOfFriends = 'number';
let numberOfFollowers = 'number';


// ------------- Question 2 -----------------

function highestScore(scores){
    let answer = scores[0];

    scores.forEach( score => {
        if (score > answer){
            answer = score;
        }
    });

    return answer;
}

let scores = [20, 51, 45, 102, 25, 57, 81, 44, 95, 12, 98, 47, 52, 58];
let highestValue = highestScore(scores);
console.log(highestValue);

// ------------ Question 3 ------------------

function sumOfHundred(){
    let x = 0;
    for(let i = 0; i < 101; i++){
        x += i;
    }
    return x;
}
console.log(sumOfHundred());

// -------------- Question 4 ----------------------

function sumOfOdds(startOfRange, endOfRange){
    let sum = 0;
    for(let i = startOfRange; i < (endOfRange + 1); i +=  2){
        if((i % 2) === 1){
            sum += i;
        }
    }
    return sum;
}

let startOfRange = 5;
let endOfRange = 55;

let ans = sumOfOdds(startOfRange, endOfRange);
console.log(ans);

// -------------- Question 5 ---------------------

function highestScorePupil(pupils) {
    array = [];
    pupils.forEach((pupil, index) => {
        scores = Object.values(pupil);
        array.push(scores[1]);
    });

    let first = array[0];

    array.forEach(value => {
        if(value > first){
            first = value
        }
    })

    let position = array.indexOf(first);

    return pupils[position];
}

let pupils = [
    { name: 'Jonah Jefta',  score:  63 },
    { name: 'Eze Edeth',  score:  96 },
    { name: 'Imo Favour',  score:  78 },
    { name: 'kimo Slavour',  score:  98 }
];

let highest = highestScorePupil(pupils)
console.log(highest);

// --------------- Question 6 -----------------------

function gradingSystem(score){
    if(score >= 0 && score <= 40){
        return 'Grade: F9';
    }else if(score > 40 && score <= 50){
        return 'Grade: D7';
    }else if(score > 50 && score <= 60){
        return 'Grade: C5';
    }else if(score > 60 && score <= 70){
        return 'Grade: C4';
    }else if(score > 70 && score <= 80){
        return 'Grade: B3';
    }else if(score > 80 && score <= 90){
        return 'Grade: B2';
    }else if(score > 90 && score <= 100){
        return 'Grade: A1';
    }else {
        return 'INVALID';
    }
}

let grade = gradingSystem(198);
console.log(grade);

// ----------------- Question 7 ----------------------

let schoolStudents = [
    {"firstname":"Debra","lastname":"Ingram","score":81,"age":42},
    {"firstname":"Chester","lastname":"Howell","score":73,"age":37},
    {"firstname":"Yuli","lastname":"Mcmillan","score":88,"age":43},
    {"firstname":"Jerry","lastname":"Zimmerman","score":62,"age":35},
    {"firstname":"Samson","lastname":"Blanchard","score":82,"age":33},
    {"firstname":"Karleigh","lastname":"Paul","score":61,"age":37},
    {"firstname":"Juliet","lastname":"Roy","score":79,"age":24},
    {"firstname":"Leila","lastname":"Waters","score":59,"age":17},
    {"firstname":"Hedda","lastname":"Chase","score":52,"age":19},
    {"firstname":"Ryan","lastname":"Talley","score":83,"age":39},
    {"firstname":"Fletcher","lastname":"Giles","score":60,"age":41},
    {"firstname":"Christine","lastname":"Hardy","score":56,"age":35},
    {"firstname":"Sade","lastname":"Harper","score":60,"age":22},
    {"firstname":"Brady","lastname":"Hewitt","score":53,"age":19},
    {"firstname":"Anne","lastname":"Wolfe","score":70,"age":26},
    {"firstname":"Wyatt","lastname":"Sweeney","score":93,"age":29},
    {"firstname":"Sybill","lastname":"Fischer","score":57,"age":44},
    {"firstname":"Donovan","lastname":"Miller","score":62,"age":24},
    {"firstname":"Tucker","lastname":"Frederick","score":89,"age":30},
    {"firstname":"Keane","lastname":"Barlow","score":99,"age":40},
    {"firstname":"Orlando","lastname":"Doyle","score":66,"age":16},
    {"firstname":"Murphy","lastname":"Short","score":51,"age":32},
    {"firstname":"Fay","lastname":"Norman","score":70,"age":23},
    {"firstname":"Leandra","lastname":"Ray","score":69,"age":33},
    {"firstname":"Yetta","lastname":"Marsh","score":83,"age":26},
    {"firstname":"Bruce","lastname":"Ware","score":97,"age":19},
    {"firstname":"Shay","lastname":"Shaw","score":57,"age":29},
    {"firstname":"Connor","lastname":"Wilkinson","score":59,"age":32},
    {"firstname":"Vladimir","lastname":"Ford","score":67,"age":44},
    {"firstname":"Beatrice","lastname":"Good","score":57,"age":39},
    {"firstname":"Buffy","lastname":"Wiggins","score":64,"age":20},
    {"firstname":"Vincent","lastname":"Hahn","score":67,"age":45},
    {"firstname":"Griffith","lastname":"Banks","score":77,"age":22},
    {"firstname":"Fallon","lastname":"Velez","score":91,"age":45},
    {"firstname":"Shay","lastname":"Moran","score":62,"age":42}
];

// ----------------- Question 7a -----------------

function oldestStudent(schoolStudents){
    let array = [];
    schoolStudents.forEach( student => {
        array.push(student.age);
    });
    firstAge = array[0];
    
    array.forEach( age => {
        if(age > firstAge){
            firstAge = age;
        }
    });

    return schoolStudents[array.indexOf(firstAge)];
}

console.log(oldestStudent(schoolStudents));

// ----------------- Question 7b ----------------------

function youngestStudent(schoolStudents){
    let array = [];
    schoolStudents.forEach( student => {
        array.push(student.age)
    });

    firstAge = array[0];
    array.forEach( age => {
        if (age < firstAge){
            firstAge = age;
        }
    });
    return schoolStudents[array.indexOf(firstAge)];
}

console.log(youngestStudent(schoolStudents));

// --------------- Question 7c -----------------

function functionObject(schoolStudents){
    let array = [];
    schoolStudents.forEach( student => {
        array.push(student.score)
    });

    let notPromoted = [];
    let promoted = [];
    let almostMissedPromotion = [];
    array.forEach( score => {
        if(score >= 50 && score <= 52){
            almostMissedPromotion.push(score);
        } 
        if(score >= 50){
            promoted.push(score);
        }
        if(score < 50){
            notPromoted.push(score);
        }
    });


    let newPromoted = [];
    promoted.forEach( score => {
        newPromoted.push(schoolStudents[array.indexOf(score)]);
    });


    let newAlmostMissedPromotion = [];
    almostMissedPromotion.forEach( score => {
        newAlmostMissedPromotion.push(schoolStudents[array.indexOf(score)]);
    });


    let newNotPromoted = [];
    notPromoted.forEach( score => {
        newNotPromoted.push(schoolStudents[array.indexOf(score)]);
    });


    object = {};
    object.promoted = newPromoted;
    object.notPromoted = newNotPromoted;
    object.almostMissedPromotion = newAlmostMissedPromotion;

    return object;
}

console.log(functionObject(schoolStudents));


// =====================================
// =====================================


function lowestScoreStudent(schoolStudents){
    let array = [];
    schoolStudents.forEach( student => {
        array.push(student.score);
    });

    firstScore = array[0];
    array.forEach( score => {
        if(score < firstScore){
            firstScore = score;
        }
    });

    let indexOfLowestScore = array.indexOf(firstScore);
    return schoolStudents[indexOfLowestScore];
}

console.log(lowestScoreStudent(schoolStudents));

// ------------------------------------

function highestScoreStudent(schoolStudents){
    scores = []
    schoolStudents.forEach(student => {
        scores.push(student.score);
    });
    firstScore = scores[0];
    scores.forEach(score => {
        if(score > firstScore){
            firstScore = score;
        }
    });
    return schoolStudents[scores.indexOf(firstScore)];
}

console.log(schoolStudents.indexOf(highestScoreStudent(schoolStudents)), highestScoreStudent(schoolStudents));
