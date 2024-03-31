// /*spread cho phép bạn mở rộng một interable object  như arr, string, object
// thành các phần tử riêng lẻ trong một biểu thức Nó được biểu thị bằng dấu ...*/

// // let a =2;

// // let b =a;

// // let arr =[123, 2, 4];

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// // use spread syntax để kết hợp 2 arr
// const arr3 = [...arr1, ...arr2];

// //mở rộng string

// const str1 = "Hello";
// const str2 = "Worrld";
// const str3 = [...str1,"",...str2];
// console.log(str3)


// const obj1 = {name:"leanh", age: 26}
// const obj2 = {address: "đông anh"}

// const obj3 = {...obj1,...obj2}
// console.log("obj3", obj3)
// //ứng dụng: kết hợp các array, nối các trinh, sao chép obj, gửi các phần tử iterable trong một lop
// //lưu ý spread syntax chỉ hoạt động với iterable obj


//// tìm hiểu về map trong js
// bài toán
// let arr =[1,2,3,4,5,6,7,8];
//in ra mảng với các phần tử của arr được bình phương 
//c1
// let arr2 =[];
// for(let i =0;i<arr.length;i++){
//     arr2[i] = arr[i] * arr[1]
// }

// console.log(arr2);

//c2 sử dụng map

// let arr3 =arr.map(item => item*item);
// console.log("arr3", arr3);

// let arr4 =arr.map(item => item -1);
// console.log("arr4", arr4);

/*cú pháp của map gồm
let <tên biến> =<array>.map(<tên tham số> =>... thực hiện hành động sau mỗi lần lặp)

-map(): trả về kết quả là mội arr mới đã thực thi hành động với ô chứa mới không trùng lặp với mảng gốc*/


// let arr =[1,2,3,'Hello', 4,5,6, "hi", null,0];
// //lọc ra và trả về mảng chỉ chứa kiểu dữ liệu số.
// let arr1 = arr.filter(item => typeof item =='number');
// console.log("arr1",arr1)

// ////lọc ra và trả về mảng các số sẵn từ mảng arr
// let arr2 = arr1.filter(item=> item % 2 == 0 );
// console.log("arr2",arr2)

// //lọc ra và trả về mảng <4
// let arr3 = arr1.filter(item=> item <4 );
// console.log("arr3",arr3)

// let NPS_JSI20 = [
//     {
//         name: "leanh",
//         age: 15,
//         jobs: "student"
//     },

//     {
//         name: "quân",
//         age: 14,
//         jobs: "student"
//     },

//     {
//         name: "vũ dũng",
//         age: 16,
//         jobs: "student"
//     },

//     {
//         name: "trung hiếu",
//         age: 14,
//         jobs: "Dev"
//     },
// ];


// let age = Number(prompt("mời người dùng nhập vào số tuổi"));
// let agestudent = NPS_JSI20.filter(item => item.age == age );

// agestudent.forEach(element => {
//     console.log(element.name + " với số tuổi là " + element.age);
// })

// let student = NPS_JSI20.filter(item.job === "student" && iteam.age >15);
// .console.log("student",student);
// student.forEach(element =>{
//     console.log(element.name);
// })
//sắp xếp lại arr theo độ dài tăng dần
let arr =["abc", "abcd", "qwertyuiop"]

for(let i =0 ; i<arr.length; i++){
    for (let j = i+1; j<arr.length; j++) {
    if(arr[i].length>arr[j].length){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
        
    }
}
console.log(arr);


// tạo một obj mới từ  arr với key là tên của phần tử và value của phần tử trong arr


let arr2 =[1,2,3,1,2,4,5];
let newarray = [];
let uniqueObject = [];
for(let i in arr2) {
    
}