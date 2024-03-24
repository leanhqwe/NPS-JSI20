// cho 1 dữ liệu sau 
let student = [{
    id: 1,
    name: "Le Anh",
    age: 1,
    major: "computer sience",
},
{
    id: 2,
    name: "Vu DUng",
    age: 12,
    major: "mathematics",
},
];

student.push({id:"3", name:"Quan", age:"11", major:"idk",
});
console.log(student);
console.log(student.find(Obj => Obj.id ==2));

student.splice(1,1)




/*
yêu cầu :
sử dụng push()để thêm một học sinh mới vào
sử dụng find() hoặc findindex() để tìm học sinh theo id,
sử dụng splice() để xóa một học sinh dựa trên id
tạo 1 function cho phép tìm kiếm học sinh dựa theo name hoặc chuyên ngành
*/
