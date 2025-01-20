/* START */

//How can you represent real-world objects in code?
//They have associated attributes = object PROPERTIES
//They have associated actions = object METHODS
//They have associated context = "this"


//First:
//Let's define a simple object (with no properties or methods)
const blank = {}; // ประกาศตัวแปร `blank` เป็นออบเจ็กต์ที่ว่างเปล่า (ไม่มี property หรือ value)

console.log("Blank type:",typeof blank);
// ใช้ `typeof` เพื่อตรวจสอบประเภทของตัวแปร `blank`
// จะคืนค่าเป็น "object" เพราะออบเจ็กต์ใน JavaScript จะถูกจัดประเภทเป็น "object"

console.log("Blank value",blank);
// แสดงค่าของตัวแปร `blank` ซึ่งจะเป็น `{}` เพราะมันเป็นออบเจ็กต์ที่ว่างเปล่า

/*
//Next:
//Let's define an object with PROPERTIES (attributes)
//Objects are just a collection of name-value pairs
//separated by commas
const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false
};
*/