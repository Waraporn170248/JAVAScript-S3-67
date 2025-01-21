
const obj1 = { // ประกาศตัวแปร `obj1` เป็นออบเจ็กต์ที่มีสอง property:
    person : 'Anirach', // person มีค่าเป็นสตริง 'Anirach'`
    weight : 85 // weight` มีค่าเป็นตัวเลข `85`
}

const obj2 = {... obj1};
// ใช้ Spread Operator `{ ...obj1 }` เพื่อสร้างสำเนาตื้น (shallow copy) ของ `obj1` และกำหนดให้ `obj2`
// ในที่นี้ `obj2` จะเป็นออบเจ็กต์ใหม่ที่มีค่าเหมือน `obj1`

obj2.weight = 75;
// เปลี่ยนค่าของ property `weight` ในออบเจ็กต์ `obj2` จาก `85` เป็น `75`
// การเปลี่ยนแปลงนี้ไม่กระทบกับ `obj1` เพราะ `obj2` เป็นสำเนาใหม่

console.log(obj1);
// แสดงค่า `obj1` ซึ่งยังคงเป็น `{ person: 'Anirach', weight: 85 }`

console.log(obj2);
// แสดงค่า `obj2` ซึ่งกลายเป็น `{ person: 'Anirach', weight: 75 }` 