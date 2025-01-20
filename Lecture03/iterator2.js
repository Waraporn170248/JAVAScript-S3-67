let str = "Hello";
// ประกาศตัวแปร `str` และกำหนดค่าเป็นสตริง `"Hello"`

let iterator = str[Symbol.iterator]();
// ใช้ `Symbol.iterator` เพื่อสร้างตัววนซ้ำ (iterator) สำหรับสตริง `str`

while (true) {
    let result = iterator.next();
    // เรียกใช้เมธอด `.next()` เพื่อดึงค่าถัดไปจาก iterator
    // ผลลัพธ์ (`result`) เป็นออบเจ็กต์ในรูปแบบ { value: <ค่า>, done: <สถานะ> }

    if (result.done) break;
    // หาก `done` เป็น `true` แสดงว่าไม่มีค่าถัดไปใน iterator แล้ว ให้จบการวนลูป

    console.log(result.value); 
     // แสดงค่าของ `value` ซึ่งคือค่าปัจจุบันใน iterator (ตัวอักษรในสตริง)
}