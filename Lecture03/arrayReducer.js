const array = [15, 16, 17, 18, 19]; // ประกาศตัวแปร `array` และกำหนดค่าให้เป็นอาร์เรย์ที่ประกอบด้วยตัวเลข [15, 16, 17, 18, 19]

function reduce(accumulator,currentValue,index) {
    const returns = accumulator + currentValue;
    console.log(
        `accmulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}
// ประกาศฟังก์ชัน `reduce` ที่รับพารามิเตอร์ 3 ตัว:
// 1. `accumulator` (ตัวเก็บสะสมผลลัพธ์จากการคำนวณครั้งก่อนหน้า)
// 2. `currentValue` (ค่าขององค์ประกอบปัจจุบันในอาร์เรย์)
// 3. `index` (ตำแหน่งปัจจุบันในอาร์เรย์)
//
// ในฟังก์ชัน:
// - คำนวณผลรวมของ `accumulator` และ `currentValue` แล้วเก็บไว้ใน `returns`
// - แสดงผล `accumulator`, `currentValue`, `index`, และ `returns` ผ่าน `console.log`
// - ส่งคืนค่า `returns` เพื่อใช้เป็น `accumulator` ในรอบถัดไป

array.reduce(reduce);
// ใช้เมธอด `reduce()` ของอาร์เรย์ โดยกำหนดให้ฟังก์ชัน `reduce` เป็นตัวประมวลผล
// ค่าเริ่มต้นของ `accumulator` คือค่าขององค์ประกอบแรกในอาร์เรย์ (15)
// `currentValue` จะเริ่มต้นจากองค์ประกอบถัดไป (16)