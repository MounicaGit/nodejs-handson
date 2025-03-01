// const SuperMan = require('./superman')

// console.log("hello")
// superman = require('./superman')

// const supermanData = new SuperMan("batman");
// console.log(supermanData.getName())
// supermanData.setName("spiderman")
// console.log(supermanData.getName())

// supermantemp = new SuperMan("batman")
// console.log(supermantemp.getName())

// const functions = require('./add')
// console.log(functions.add(3,5))
// console.log(functions.sub(4,2))

// const {add, sub} = functions; //object destructuring
// console.log(add(3,5))
// console.log(sub(4,2))


// import {add, sub} from './add.js'
// console.log(add(2,4))
// console.log(sub(4,4))


// import mod from './add.js'
// const {add, sub} = mod
// console.log(add(2,4))
// console.log(sub(4,4))


// //import json
// const data = require('./data.json');
// console.log(data.name)


// // path built-in module
// const path = require("node:path")
// console.log(path.basename(__dirname))
// console.log(path.extname(__dirname))
// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))
// console.log(path.isAbsolute(__filename))
// console.log(path.join('/f1', '//f2', '../data.json'))
// console.log(path.resolve('f1', '/f2', 'data.json'))



// // callback function
// const greet =(name)=>{
//     console.log(name)
// }
// const greetname = (greet)=>{
// greet("Venkateshwara")
// }
// greetname(greet)


// // events module
// const EventEmitter = require('node:events')
// const emitter = new EventEmitter();

// emitter.on('pass-exam', (className, grade)=>{
//     console.log(`${className} exam passed with ${grade} grade!`)
// })

// emitter.emit('pass-exam', '10th', 'A')



// //extending emitter
// const PizzaShop = require('./pizza-shop');

// const pizza = new PizzaShop()

// pizza.on('order', (size, topping) => {
//     console.log(`${size} sized pizza with ${topping}`)
// })

// pizza.displayOrder();
// pizza.order('large', 'paneer');
// pizza.displayOrder();
// pizza.order('small', 'mushroom'); pizza.displayOrder();
// pizza.order('large', 'paneer');
// pizza.displayOrder();
// pizza.order('small', 'mushroom');/


// const fs = require("node:fs")
// // read file synchronously
// console.log("1111")
// const fileContent = fs.readFileSync("./file.txt", "utf-8")
// console.log(fileContent)
// console.log("2222")

// //read file asynchronously
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if (error)
//         console.log(error)
//     else
//         console.log(data)
// })
// console.log("3333")


// // write file synchronously
// fs.writeFileSync("./newFile.txt", "Hi there")

// // write file asynchronously
// fs.writeFile("./newFile.txt", " Hi theasdfare", { flag: "a" }, (error) => {
//     if (error)
//         console.log(error)
//     else
//         console.log('data written')
// })

// // promises
// const fs = require("node:fs")
// const { isUpperCase } = require("text-is-upper-case")
// fs.readFile("./file.txt", "utf-8").then((data)=>console.log(data)).catch((e)=>console.log(e))

// async function readFile(){
//     const data = await fs.readFile("./file.txt", "utf-8");
//     console.log(data)
// }

// readFile()

// //streams
// const data = fs.createReadStream("./file.txt", {'encoding': 'utf-8'})
// const writeData = fs.createWriteStream("./file2.txt")
// data.on('data',(data)=>{console.log(data);
//     writeData.write(data)
// })
import { isUpperCase } from "text-is-upper-case"
console.log(isUpperCase('DHIYa'))