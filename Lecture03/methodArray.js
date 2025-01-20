let arr1 = ["A", true, 2];
// ประกาศอาร์เรย์ `arr1` ที่ประกอบด้วยค่า "A", true, และ 2

// Push and pop
console.log("\n********Push and pop********\n");
// แสดงข้อความหัวข้อ "Push and pop"

console.log(arr1.push("new value"));
// ใช้ `push` เพื่อเพิ่ม "new value" ลงในอาร์เรย์ `arr1`
// ฟังก์ชัน `push` คืนค่าความยาวของอาร์เรย์หลังจากเพิ่มสมาชิกใหม่
console.log(arr1);
// แสดงผลลัพธ์ของ `arr1` หลังจากเพิ่ม "new value"

console.log(arr1.pop()); 
// ใช้ `pop` เพื่อลบสมาชิกตัวสุดท้ายจากอาร์เรย์ `arr1`
// ฟังก์ชัน `pop` คืนค่าของสมาชิกที่ถูกลบออก
console.log(arr1);
// แสดงผลลัพธ์ของ `arr1` หลังจากลบสมาชิกตัวสุดท้าย

// Shift and unshift
console.log("\n********Shift and unshift********\n");
// แสดงข้อความหัวข้อ "Shift and unshift"

console.log(arr1.unshift("new value"));
// ใช้ `unshift` เพื่อเพิ่ม "new value" ลงที่ตำแหน่งแรกของอาร์เรย์ `arr1`
// ฟังก์ชัน `unshift` คืนค่าความยาวของอาร์เรย์หลังจากเพิ่มสมาชิกใหม่
console.log(arr1);
// แสดงผลลัพธ์ของ `arr1` หลังจากเพิ่ม "new value" ที่ตำแหน่งแรก

console.log(arr1.shift()); 
// ใช้ `shift` เพื่อลบสมาชิกตัวแรกจากอาร์เรย์ `arr1`
// ฟังก์ชัน `shift` คืนค่าของสมาชิกที่ถูกลบออก
console.log(arr1);
// แสดงผลลัพธ์ของ `arr1` หลังจากลบสมาชิกตัวแรก

// Concat
console.log("\n********Concat********\n");
// แสดงข้อความหัวข้อ "Concat"

let arr2 = ["B", false, 3];
// ประกาศอาร์เรย์ `arr2` ที่ประกอบด้วยค่า "B", false, และ 3

let newArr = arr1.concat(arr2);
// ใช้ `concat` เพื่อนำอาร์เรย์ `arr1` มารวมกับ `arr2`
// ฟังก์ชัน `concat` คืนค่าอาร์เรย์ใหม่ที่รวมอาร์เรย์ทั้งสองเข้าด้วยกัน
let newArr2 = arr2.concat([1, 2, 3]);
// ใช้ `concat` รวมอาร์เรย์ `arr2` กับอาร์เรย์ใหม่ [1, 2, 3]

console.log(newArr);
// แสดงผลลัพธ์ของ `newArr` ซึ่งเป็นอาร์เรย์ที่รวม `arr1` และ `arr2`
console.log(newArr2);
// แสดงผลลัพธ์ของ `newArr2` ซึ่งเป็นอาร์เรย์ที่รวม `arr2` กับ [1, 2, 3]
