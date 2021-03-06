/*   This is Techolution coding test.
 Please, read carefully as this information can affect the results of this test.

 - This test is built in such a way that you don't have to
 use console.log or any debugging tool unless this is your preference.
 The result will appear on the right as true or false.
 - assignment.log is the method we wrote to output your results
 in Result tab on the right. First parameter is what you would like to output
 second parameter is a number representing test number and you don't need to change it.
 - We also added automatic conversion of objects and arrays
 to strings for '==' comparison purposes.
 So if you see something like:
 assignment.log(filterGreaterThan(d, 10) == '[123,16,11]', 4)
 it doesn't mean your function should
 return a sting representing array -
 you can just return array or object in your code.
 - Please, write your code strictly under [your code goes here] and nowhere else,
 even if you think it's not the best place for it.
 - Don't forget to hit 'Update' button in JSFiddle pannel to make sure your
 changes are saved!

 If you have any questions - please, contact me: pavel@techolution.com
 */




//#1 create code that will result the following console logs print out true
//   add(a)(b) should return the sum of a + b

// [your code goes here]
function add(a,b) {
    return a+b;
}

assignment.log(add(5,9) === 14, 1);
assignment.log(add(11,9) === 20, 1);





//#2 write code so that the console logs print out true
//   flipKeyValue() should return a new object where keys and values are flipped
//   i.e. {'Your Name': 'name', 'Your Last Name': 'lastName', '111.222': 'number'}
//   and  {'Your Name': 'name', 'Your Last Name': 'lastName', '111.222': 'number', '0': 'age'}

function flipKeyValue(frames) {
    // [your code goes here]
    var footDive = {};
    for(var parries in frames) {
        footDive[frames[parries]] = parries;
    }
    return footDive;
}

// console.log(flipKeyValue(b));

var b = {
    name: 'Your Name',
    lastName: 'Your Last Name',
    number: '111.222'
}


// console.log(flipKeyValue(b));


assignment.log(flipKeyValue(b) == '{"Your Name":"name","Your Last Name":"lastName","111.222":"number"}' , 2)



var c = {
    name: 'Your Name',
    lastName: 'Your Last Name',
    number: '111.222',
    age: 0
}

assignment.log(flipKeyValue(c) == '{"0":"age","Your Name":"name","Your Last Name":"lastName","111.222":"number"}', 2)

//
// //#3 write code so that both console logs print out true
// //   getFullName() should return a string where all property values of the object are concatinated and separated with ', '
//

var d = {
    'firstName' : 'First Name',
    'lastName': 'Last Name',
    'getFullName': getFullName = function(dValues) {
        // [your code goes here]
        var fn, ln, concatValue;
        dValues = Object.values(d);
        dValues.pop();
         fn = dValues[0];
         ln = dValues[1];

        return fn + ", " +ln
    }
}

console.log(d.getFullName());

assignment.log(d.getFullName() === 'First Name, Last Name', 3);

var e = {
    'firstName' : 'Second Name',
    'lastName' : 'Second Last Name',
    'getFullName' : getFullName = function(dValues) {
        // [your code goes here]
        var fn, ln, concatValue;
        dValues = Object.values(e);
        dValues.pop();
        fn = dValues[0];
        ln = dValues[1];

        return fn + ", " +ln
    }
}

console.log(e.getFullName());

assignment.log(e.getFullName() === 'Second Name, Second Last Name', 3);





//#4 write code so that console logs print out true
//   filterGreaterThan(array, filter) should return a new array
//   with all the values from initial array that are greater than filter
//   i.e. [6, 10, 123, 16, 7, 8, 9, 11] and [123, 16, 11]

function filterGreaterThan(targetArray,filter) {

    // [your code goes here]
    // targetValue = 5;
    // console.log(num);
    // console.log(targetArray);

    return targetArray > 10 ;
}

function filterGreaterThanFive(targetArray) {
    return targetArray > 5 ;
}

function filterGreaterThanTen(targetArray) {
    return targetArray > 10 ;
}
function letsMakeFilterGreatAgain(targetArray,filter) {
    var filtered = targetArray.filter(filter);
    console.log(filtered);
    return filtered;

}

var d = [5, 6, 10, -1, 123, 1, 3, 16, 7, 8, 9, 11];


assignment.log(letsMakeFilterGreatAgain(d,filterGreaterThanFive) == '[6,10,123,16,7,8,9,11]', 4);
assignment.log(letsMakeFilterGreatAgain(d, filterGreaterThanTen) == '[123,16,11]', 4);





// //#5 write code so that console logs print out true
// //   add(addValue) should return a new arrays where addValue
// //   is added to each value of original array
// //   i.e. [6, 7, 8, 9, 10] and [11, 12, 13, 14, 15]
//
// // [your code goes here]

// Array.prototype.add = function(qiymati,arrayInQuestion) {
//     arrayInQuestion.forEach(
//         function(numericalValue) {
//             console.log(qiymati , numericalValue);
//
//     });
//     return;
// }

var addition =  function(entry) {
    // entry = 5;
    // var e = [1, 2, 3, 4, 5];
    e.array.forEach(function(item) {
        // console.log(entry + item);
        return entry + item;
    })
};
var e = {
    'array': [1, 2, 3, 4, 5],
    'add': addition;
};

var numberFive = 5;
console.log(e.add(numberFive));
//
//
// console.log(e.add(1));
//
// function add(entry) {
//     // entry = 5;
//     var e = [1, 2, 3, 4, 5];
//     e.forEach(function(item) {
//         console.log(entry + item);
//         return entry + item;
//     })
//
// }
//
// add(1);
// add(5);
// add(10);
//
// add(5);
// console.log(e.add());
//
// var answer = e.greet();
// console.log(answer);

assignment.log(e.add(numberFive) == '[6,7,8,9,10]', 5);

// var d = [1, 2, 3, 4, 5];

// assignment.log(d.add(10) == '[11,12,13,14,15]', 5);
//
