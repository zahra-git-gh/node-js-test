// const names= require('./name')
// const sayHi= require('./utils')
// // console.log(names);
// // sayHi(names.peter)
// const data= require('./alternative-flavor')
// // console.log(data);
// require('./mine-generadek')

const os=require('os');
const user = os.userInfo()
// console.log(user);

// console.log(`the system uptime : ${os.uptime()} seconds`);

// const currentOS={
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);


const _ =require('lodash');
const items= [1, [2, [3, [4, [5]]]]]
const newItems= _.flattenDeep(items)
console.log(newItems);