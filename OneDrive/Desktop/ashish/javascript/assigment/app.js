// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class =${avg}`);

// 10% off on every item price
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer =${items[i]}`);
//     i++;
// }


// 
// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);


// 
// let name = ["ashu", "shilpa", "ashish", "kanya"];
// console.log(name.toString   );



// next question answer

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBX", "Netflix"];

companies.shift();

companies.splice(2,1, "Ola");
companies.push("Amazon  ")
console.log(companies);