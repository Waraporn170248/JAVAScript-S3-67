const array0FNumber = [1,2,3,4];
// ประกาศอาร์เรย์ `array0FNumber` ที่ประกอบด้วยค่าตัวเลข 1, 2, 3, 4

const sum = array0FNumber.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
// ใช้ฟังก์ชัน `reduce` เพื่อหาผลรวมของสมาชิกในอาร์เรย์
// - `accumulator`: ตัวสะสมค่าผลรวม
// - `currentValue`: ค่าปัจจุบันในอาร์เรย์ที่กำลังประมวลผล
// ฟังก์ชัน `reduce` จะวนลูปผ่านอาร์เรย์และคำนวณผลรวมจากทุกสมาชิก

console.log(sum);
// แสดงผลลัพธ์ของการคำนวณผลรวม ซึ่งในกรณีนี้คือ 10