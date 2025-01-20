const cat = {
    name: "Pipey", // กำหนดค่า `name` เป็น "Pipey"
    age: 8, // กำหนดค่า `age` เป็น 8

    whatName() { // เมธอดที่ชื่อว่า `whatName`
    return this.name; // คืนค่าของ `name` โดยใช้ `this` เพื่ออ้างอิงถึงออบเจ็กต์ `cat`
    },
};
console.log(cat.whatName());
// เรียกใช้เมธอด `whatName` จากออบเจ็กต์ `cat` ซึ่งคืนค่าค่า `name` ปัจจุบันที่เป็น "Pipey"
// จึงแสดงผลเป็น "Pipey"

cat.name = "Nezzar";
// เปลี่ยนค่า `name` ของออบเจ็กต์ `cat` เป็น "Nezzar"

console.log(cat.whatName());
// เรียกใช้เมธอด `whatName` อีกครั้ง ซึ่งจะคืนค่าของ `name` ที่ถูกปรับเป็น "Nezzar"
// จึงแสดงผลเป็น "Nezzar"