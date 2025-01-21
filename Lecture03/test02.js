// กำหนดอาร์เรย์ 3 อันที่ต้องการเปรียบเทียบ
let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

// ใช้ฟังก์ชัน filter() เพื่อหาองค์ประกอบใน values1 
// ที่พบใน values2 หรือ values3 อย่างน้อยหนึ่งอัน
let commonInTwoArrays = values1.filter(value => 
    values2.includes(value) || values3.includes(value) // ตรวจสอบว่าค่า value อยู่ใน values2 หรือ values3 หรือไม่
);

// ตรวจสอบผลลัพธ์
if (commonInTwoArrays.length > 0) {
    // ถ้ามีค่าที่เหมือนกันในอย่างน้อย 2 อาร์เรย์ ให้แสดงค่าที่พบ
    console.log("Common elements in at least 2 arrays:", commonInTwoArrays);
} else {
    // ถ้าไม่มีค่าที่เหมือนกันเลย ให้แสดงข้อความแจ้งเตือน
    console.log("No common elements found.");
}
