let furniture = ['Table','Chairs','Couch'];
// ประกาศอาร์เรย์ `furniture` ที่ประกอบด้วยค่าชื่อเฟอร์นิเจอร์ "Table", "Chairs", และ "Couch"

for (let test of furniture){
    console.log(test)
    // ลูปผ่านแต่ละสมาชิกในอาร์เรย์ `furniture` โดยตัวแปร `test` จะเก็บค่าของแต่ละเฟอร์นิเจอร์
    // แสดงชื่อของเฟอร์นิเจอร์แต่ละตัว

    for (let char of test) {
        console.log( char ); 
        // ลูปผ่านตัวอักษรแต่ละตัวในชื่อเฟอร์นิเจอร์ โดย `char` จะเก็บแต่ละตัวอักษรใน `test`
        // แสดงตัวอักษรแต่ละตัว
    }
}