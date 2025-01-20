const names = ['Justin', 'Sarah', 'Christopher'];
// ประกาศตัวแปร `names` เป็นอาร์เรย์ที่เก็บชื่อบุคคล

// while loop
console.log('-- while --');
// แสดงข้อความ "-- while --" เพื่อบอกว่าเริ่มต้นลูปแบบ `while`
let index = 0; // กำหนดตัวแปร `index` เริ่มต้นที่ 0

while (index < names.length) { // ลูป while ทำงานจนกว่า `index` จะไม่ต่ำกว่าความยาวของอาร์เรย์
    const name = names[index]; // ดึงค่าชื่อจาก `names` ที่ตำแหน่ง `index`
    console.log(name); // แสดงชื่อ 
    index++;  // เพิ่มค่า `index` ทีละ 1
};

//for loop
console.log(' - for --'); // แสดงข้อความ "- for --" เพื่อบอกว่าเริ่มต้นลูปแบบ `for` 
for (let index = 0; index < names.length; index++) { // ใช้ลูป `for` เพื่อลูปผ่านทุกตำแหน่งของอาร์เรย์ `names`
    const name = names[index]; // ดึงค่าชื่อจาก `names` ที่ตำแหน่ง `index`
    console.log(name); // แสดงชื่อ
}

// for of
console.log('-- for of --'); // แสดงข้อความ "-- for of --" เพื่อบอกว่าเริ่มต้นลูปแบบ `for...of`
for (let name of names) { // ลูป `for...of` ใช้ในการวนผ่านค่าทุกตัวในอาร์เรย์ `names`
    console.log(name);  // แสดงชื่อ
}

// do while loop **sniplet