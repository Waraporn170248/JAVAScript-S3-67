/*************************************************
 * JavaScrit for Beginners
 * JS101 - JSON DEMO
 * 
 * BASICS    : JSON Format
 * STRINGIFY : Javascript to JSON
 * PARSE     : JSON to JavaScript
 *************************************************/


//Think of a simple JavaScript with data (property values)

const book = new Object({ title : "1984", author: "George Orwell"});
// ใช้ `new Object()` สร้างออบเจ็กต์ `book` โดยกำหนดค่าให้กับ property `title` และ `author`
// จริง ๆ แล้วการใช้ `new Object()` ในกรณีนี้เป็นการสร้างออบเจ็กต์เหมือนการใช้ `{}`
// ออบเจ็กต์ `book` จะมี properties:
// - `title` : `"1984"`
// - `author` : `"George Orwell"`

console.log("\n--------")
// แสดงข้อความ `--------` เพื่อทำให้ผลลัพธ์มีความชัดเจน

console.log(typeof book);
// ใช้ `typeof` เพื่อตรวจสอบชนิดของตัวแปร `book`
// ผลลัพธ์: "object" เพราะ `book` เป็นออบเจ็กต์

console.log(book);
// แสดงค่าของ `book` ซึ่งจะเป็นออบเจ็กต์:
// { title: "1984", author: "George Orwell" }


/*
// You can also have a collection of these objects
const myBooks = [
    new Object({ titlt : "1984", author: "George Orwell"}),
    new Object({ titlt : "Becoming", author: "Michelle Obama"}),
    new Object({ titlt : "Snow Crash", author: "Neal Stephenson"}),
    new Object({ titlt : "Predictably Irration", author: "Dan Arily"}),
];
*/