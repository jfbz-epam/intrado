process.stdout.write(`hello intrado\n`);

let myArr = [`BLUE` ,`YELLOW`, `BROWN`];



const newArr = myArr.map( (x) => {
    return {
        type : 'COLOR',
        value : x,
        initialIndex : myArr.findIndex( (y) => { return y === x})
    }
})

const myItem = newArr.find( (x) => {
  return x.value === `YELLOW`; 
})

const newItem = {
    type : 'COLOR',
    value : `RED`,
    initialIndex : undefined
}


console.log(...myArr); // prints values itselfs
console.log(myItem); // print searched item
console.log(...newArr); //print each index value
console.log(newArr); // prints whole array
myArr.pop();
console.log(...myArr);
myArr.shift();
console.log(...myArr);
newArr.push(newItem);
console.log(...newArr);
console.log(myArr.includes('GREEN'));
console.log(myArr.includes('YELLOW'));
myArr.unshift(`GREEN`);
console.log(myArr.includes('GREEN'));
console.log(myArr.includes('YELLOW'));

const newestArr = myArr.slice();
console.log(newestArr)
let disorder = newestArr.concat(newArr);
console.log(disorder);
console.log(disorder.indexOf(`YELLOW`));
console.log(newArr.forEach((x) => {console.log(x.value)}))


process.stdout.write('////////start test code///////////\n');

let a = { foo: 'bar' };
let b = { foo: 'bar' };
console.log(a.foo === b.foo);
console.log(Object.is(a,b));
function f(p) {
    p.foo = 'bar'
}
 
function g(p) {
    p = 100;
}
 
a = {};
b = 1;
 
f(a);
g(b);
 
console.log(a);
console.log(b);