const kvArray = [
    { key: 1, value: 10},
    { key: 2, value: 20},
    { key: 3, value: 30},
];
// ประกาศอาร์เรย์ `kvArray` ที่ประกอบด้วยออบเจ็กต์ที่มี `key` และ `value`

const reformattedArray = kvArray.map(({key,value}) => ({[key]: value}));
// ใช้ฟังก์ชัน `map` เพื่อวนผ่านแต่ละออบเจ็กต์ใน `kvArray`
// สำหรับแต่ละออบเจ็กต์, เราจะแยก `key` และ `value` ออกมาและสร้างออบเจ็กต์ใหม่ที่มี `key` เป็นชื่อของ property และ `value` เป็นค่าของ property
// ผลลัพธ์จะเป็นอาร์เรย์ใหม่ที่ประกอบด้วยออบเจ็กต์ที่มี `key` เป็นชื่อ property และ `value` เป็นค่าของ property

console.log(reformattedArray);//[{1:10},{2:20},{3:3}]
// แสดงผลลัพธ์ของ `reformattedArray`, ซึ่งจะเป็นอาร์เรย์ที่ประกอบด้วยออบเจ็กต์ในรูปแบบที่ `key` เป็น property และ `value` เป็นค่าของ property

console.log(kvArray);
// แสดงผลลัพธ์ของ `kvArray` ซึ่งยังคงไม่เปลี่ยนแปลงจากค่าต้นฉบับ