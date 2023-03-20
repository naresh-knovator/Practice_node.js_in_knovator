// 1
const arr = [];

// 2
const array = [2, 3, 4, 5, 6, 8, 9, 22, 67];

// 3
const result = arr.length;
const result2 = array.length;
// console.log("Empty Array", result)
// console.log("Array", result2)

// 4
const firstItem = array[0]
const middleItem = array[(array.length - 1) / 2]
const lastItem = array[array.length - 1]
// console.log("firstItem", firstItem)
// console.log("middleItem", middleItem)
// console.log("lastItem", lastItem)

// 5
const mixedDataTypes = ["Sandy", 5, "78", { dev: 56 }, 899, [5, 6]];

// 6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7
// console.log("Array of itCompanies : ", itCompanies);

// 8
// console.log("length of itCompanies : ", itCompanies.length);

// 9
// console.log("firstCompany : ", itCompanies[0])
// console.log("middleCompany : ", itCompanies[(itCompanies.length - 1) / 2])
// console.log("lastCompany : ", itCompanies[itCompanies.length - 1])

// 10
itCompanies.map((comp) => {
    // console.log("itCompanies in Normal : ", comp)
})

// 11
itCompanies.map((comp) => {
    // console.log("itCompanies in upperCase : ", comp.toUpperCase())
})

// 12
const companies = (comp) => {
    return `${comp[0]}, ${comp[1]}, ${comp[2]}, ${comp[3]}, ${comp[4]}, ${comp[5]} and ${comp[6]} are big IT companies.`
}
// console.log("itCompanies : ", companies(itCompanies));

// 13
const companyExist = (comp) => {
    if (itCompanies.includes(comp)) {
        console.log(comp + " exists in IT Companies");
      } else {
        console.log("A company is not found.");
      }
}
// companyExist("Facebook");

// 14
let companiesWhichHaveMoreThanOneO = [];

for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i];
  let count = 0;
  
  for (let j = 0; j < company.length; j++) {
    if (company[j] === 'o') {
      count++;
    }
  }
  
  if (count > 1) {
    companiesWhichHaveMoreThanOneO.push(company);
  }
}
// console.log(companiesWhichHaveMoreThanOneO);

// 15
// console.log(itCompanies.sort());

// 16
const reverse = (comp) => {
    return comp.map(comp.pop, [...comp])
}
// console.log(reverse(itCompanies))

// 17
// console.log(itCompanies.reverse());

// 18
// console.log(itCompanies.slice(0,3));

// 19
// console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));

// 20
// console.log(itCompanies.slice(itCompanies.length/2, (itCompanies.length+1)/2))

// 21
// console.log(itCompanies.shift());

// 22
// console.log(itCompanies.splice(itCompanies.length / 2, 1));

// 23
// console.log(itCompanies.pop());

// 24
// console.log(itCompanies.splice(0,itCompanies.length));

// console.log(itCompanies);