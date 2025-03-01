// const add =(a,b)=>{
//     return (a+b);
// }

// const sub = (a,b)=>{
//     return (a-b)
// }

// module.exports = {add, sub}; // exporting more than one module

//************************************************************************************************************* */

// module.exports = (a,b)=> {  // directly exporting module
//     return (a+b)
// }


//************************************************************************************************************* */

module.exports.add=(a,b)=>{  // exporting more than one module
    return (a+b)
}

module.exports.sub=(a,b)=>{
return (a-b)
}

//************************************************************************************************************* */