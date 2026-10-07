// let data = {
//     name: "Priya",
//     age: 30,
//     isvalid: function (a) {
//         return a > 18
//     }
// }

// // console.log(this);
// console.log(data.isvalid(20));

// function context(name) {
//     console.log(this.name)
//     this.name = name
//     console.log(this.name)
// }

// let variable = context.bind(data, "ram")
// variable();
// console.log(data);



function a() {
    console.log("alert")
}
const v = {
    a
}
console.log(v.a());
 