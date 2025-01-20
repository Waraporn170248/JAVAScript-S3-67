let str = "test";
// ประกาศตัวแปร `str` และกำหนดค่าเป็นสตริง `"test"`
// does the same as
// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();
// เรียกใช้ `Symbol.iterator` บนสตริง `str` เพื่อสร้างตัววนซ้ำ (iterator) ที่ช่วยให้เราวนผ่านสตริงได้ทีละตัวอักษร

while (true) {
    let result = iterator.next();
     // ใช้เมธอด `.next()` เพื่อดึงค่าถัดไปจาก iterator
    // `result` จะเป็นออบเจ็กต์ในรูปแบบ { value: <ค่า>, done: <สถานะ> }

    if (result.done) break;
    // เช็ค property `done`:
    // - หาก `done` เป็น `true` แสดงว่าไม่มีค่าถัดไปใน iterator แล้ว (จบการวนลูป)

    console.log(result.value); 
    // แสดงค่า `value` ซึ่งคือค่าปัจจุบันใน iterator (ตัวอักษรในสตริง)
}