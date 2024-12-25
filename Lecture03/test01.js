let furniture = ['Table','Chairs','Couch'];

console.log('-- while --');
let index = 0;
while (index < furniture .length) {
    const name = furniture [index];
    console.log(name);
    index++;
};

console.log(' - for --');
for (let index = 0; index < furniture .length; index++) {
    const name = furniture [index];
    console.log(name);
};

console.log('-- for of --');
for (let name of furniture ) {
    console.log(name);
}