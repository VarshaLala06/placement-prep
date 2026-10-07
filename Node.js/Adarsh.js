// map
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((num) => num * 2);
console.log(double);

// filter
const even = [1, 2, 3, 4, 5];
const evennumbers=even.filter((num)=> num%2==0)
console.log(evennumbers);

// includes
const students=["John", "Jack", "Mike", "Lucas"]
const hash=students.includes("Mike");
console.log(hash)

// foreach   
const string1 = "hello world"
const result=string1.foreach((str)=>console.log(str))

// find
const numbers1 = [1, 2, 3, 4, 5];
const fndnumber=numbers1.find((num)=>num<3)
console.log(fndnumber)

// reduce
const numbers2 = [1, 2, 3, 4]
const sum = numbers2.reduce((total, num) => total + sum, 0)
console.log(sum)
