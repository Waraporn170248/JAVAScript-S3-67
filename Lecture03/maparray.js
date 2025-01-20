const finalPartipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];
// ประกาศอาร์เรย์ `finalPartipants` ที่ประกอบด้วยชื่อของผู้เข้าร่วมการแข่งขัน

const announcements = finalPartipants.map((member) => {
    return member + " joined the contest.";
}); 
// ใช้ฟังก์ชัน `map` เพื่อวนผ่านสมาชิกในอาร์เรย์ `finalPartipants`
// ในแต่ละรอบ, ตัวแปร `member` จะเก็บค่าของชื่อแต่ละชื่อในอาร์เรย์
// ผลลัพธ์จะเป็นการสร้างอาร์เรย์ใหม่ `announcements` ที่มีข้อความว่า "ชื่อ joined the contest."

console.log(announcements);
// แสดงผลลัพธ์ของอาร์เรย์ `announcements` ที่ประกอบด้วยข้อความที่แจ้งว่าแต่ละคนเข้าร่วมการแข่งขันแล้ว