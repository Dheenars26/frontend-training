//variables
{
  var x = 10
  let y = 20
}
console.log(x) //10
console.log(y) // y not defined

console.log(a) // undefined
var a = 5
console.log(a) // 5

// comparison
const a = { x: 1 }
const b = { x: 1 }
const c = a
console.log(a === b)  // false
console.log(a === c)  // true

//function hoisting
console.log(greet("Priya"))
function greet(name) {
  return `Hello, ${name}`
}

greet2("Priya")  // cannot access before initilization
const greet2 = function(name) {
  return `Hello, ${name}`
}

//default parameters
const createEmployee = (name, role = "Employee", dept = "General") => ({
  name, role, dept
})
const emp1=createEmployee("Dheena")
console.log(emp1)

//rest parameters
//reduce combine all array values in one value
const sum = (...nums) => nums.reduce((a, b) => a + b, 0)
console.log(sum(1, 2, 3, 4)) //10

document.getElementById("app")// get element using id

// querySelector — CSS selector, first match, returns element or null
document.querySelector(".employee-table tbody")
document.querySelector("input[type='email']")

// querySelectorAll — CSS selector, aLL matches, returns nodelist
const rows = document.querySelectorAll("tr")
rows.forEach(r => console.log(r))    // forEach works on nodeList
[...rows].map(r => r.textContent)      // spread to array first for map

//read and write DOM properties
const el = document.querySelector("h1")
el.textContent = "EMS Dashboard"    
el.innerHTML   = "<b>EMS</b>"     
el.classList.add("active") //it add 
el.classList.remove("active") // it remove
el.classList.toggle("active") // its do both add and remove

//create element
const row2 = document.createElement("tr")
const td1  = document.createElement("td")
td1.textContent = "Priya" 
const td2  = document.createElement("td")
td2.textContent = "Engineering"
row2.appendChild(td1)
row2.appendChild(td2)

//object deep dive
const emp = { name: "Dheena", department: "Eng", "join-date": "2026" }
console.log(emp.name)// Dheena
console.log(emp["department"])//Eng 
console.log(emp["join-date"])//2026
//object utility methodes
console.log(Object.keys(emp))//[name,department]
console.log(Object.values(emp))
console.log(Object.entries(emp))

// Shallow copy 
const original = { name: "Priya", address: { city: "Chennai" } }
const copy = { ...original }
copy.name         = "Raj"        
copy.address.city = "Mumbai"     
console.log(original.address.city) //Mumbai
//deep copy
const deepCopy = structuredClone(original)
deepCopy.address.city = "Delhi"
console.log(original.address.city)

//Loops
//for Loops
const employees = [
  { id:1, name:"Priya", dept:"Eng" },
  { id:2, name:"Raj",   dept:"HR"  },
]
for (let i = 0; i < employees.length; i++) {
  if (employees[i].dept === "HR") break 
  console.log(employees[i].name)
}
//for of
for (const emp of employees) {
  if (emp.dept === "HR") break
  console.log(emp.name)
}
//for in - object keys only
const config = { theme: "dark", lang: "en" }
for (const key in config) {
  console.log(key, config[key])
}
// forEach — for arrays, no break, returns undefined
employees.forEach((emp, index) => {
  console.log(index, emp.name)
  
})

// Array mutation vs non-mutation methods
// MUTATING methods — change the original array
arr.push(9)       // adds to end, returns new length
arr.pop()         // removes from end, returns removed item
arr.unshift(0)   // adds to start
arr.shift()       // removes from start
arr.splice(1,1)   // removes/inserts at index
arr.sort()        // sorts IN PLACE — mutates!
arr.reverse()    // reverses IN PLACE — mutates!

// NON-MUTATING — return new array, original unchanged
arr.slice(1, 3)  // returns portion, original safe
arr.concat([6])  // returns combined, original safe

const arr = [3, 1, 4, 1, 5]
arr.push(9)
console.log(arr)//[3,1,4,1,5,9]
arr.pop()
console.log(arr)//[3,1,4,1,5]
arr.unshift(0)
console.log(arr)//[0,3,1,4,1,5]
arr.shift()
console.log(arr)//[3,1,4,1,5]
arr.splice(1,2)
console.log(arr)//[3,1,5]
arr.splice(1,0,6,7)
console.log(arr)//[3,6,7,1,5]
arr.sort()
console.log(arr)//[1,3,5,6,7]
arr.reverse()
console.log(arr)//[7,6,5,3,1]
const arr1=arr.slice(0,3)
console.log(arr1)//[7,6,5]
const arr2=arr.concat(6)
console.log(arr2)//[7,6,5,3,1,6]

//array destructuring
const employees = ["Priya", "Raj", "Sam", "Dev"]
const [first, second] = employees
console.log(first,second)
// Skip elements with comma
const [, , third] = employees
console.log(third)
// Rest — collect remainder
const [head, ...tail] = employees
console.log(head,tail)

//object destructuring
const emp = { name:"Priya", department:"Eng", salary:80000, address:{ city:"Chennai" } }
const { name, department } = emp
console.log(name,department)
// Rename on destructure
const { department: dept, name: empName } = emp
console.log(emp.department)
// Nested destructuring
const { address: { city } } = emp
console.log(emp.address.city)



//class 
class Employee{
    employeeName='Dheena'
    print(){
        console.log(this.employeeName)
    }
}
const employee=new Employee()
console.log(employee.employeeName)//Dheena
//change value 
employee.employeeName='Dheena R S'
console.log(employee.employeeName)//Dheena R S
emp.print()

//set method - means compalsary give parameter 
class Employee{
    set employeeName(name){
        this.namee=name
    }
    print(){
        console.log("Hello "+this.namee)
    }
}
let employee=new Employee();
employee.employeeName='Dheena'
employee.print()

// get method - its return values

class Employee{
    set employeeName(name){
        this.namee=name  //pass the value and assign 
    }
    get employeeName(){ //access here then return value
        return this.namee
    }
    print(){
        console.log(this.namee)
    }
}
let employee=new Employee();
employee.employeeName='Dheena'
employee.print()

//error handling
try{
console.log(test)
}catch{
console.log("error")
}finally{// compalary run one time
console.log("finally")
}
//promise
const data =new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const demo="Dheena";
    if(demo){
      resolve(demo);
    }else{
      reject(new Error('no data'));
    }
  },1000)
});
//how to access promise
data.then((name)=>{
  console.log(name)
}).catch((error)=>{
  console.log(error)
}).finally(()=>{
  console.log('Test')
});

//await
const data =new Promise((res,rej)=>{
  setTimeout(()=>{
    const demo="Dheena";
    if(demo){
      res(demo);
    }else{
      rej(new Error('no data'));
    }
  },1000)
});
function getUserDetails(inputName){
    const userDetails=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("start")
            let userDetails=[{name:"Dheena",age:22}];
            const user=userDetails.find(user=>user.name===inputName)
            if(user){
                resolve(user);
            }else{
                reject("Error")
            }
        },1000)
    })
    return userDetails
}
try{
    const name=await data;
    const userDetails=await getUserDetails(name);
    console.log(userDetails);
    console.log('test')
}catch(error){
    console.log(error.message)
}finally{
    console.log('From Finally')
}
console.log("last")

