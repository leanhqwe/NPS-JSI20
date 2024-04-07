// /* lập trình tìm đối tượng 00P
// - Khái niệm : là mô hình lặp trình dựa trên khái niệm các "đối tượng", có thể chứa dữ liệu , dưới dạng trường 
// (thuộc tính, phương thức). giúp tổ hức mã theo mô phỏng thế giới thực.

// - ứng dụng trong JS :
// +tạo ra các tương trình có cấu trúc rõ ràng dễ mở rộng và bảo trì 
// + build framework, xây dựng thư viện
// + sử dụng để tạo ra cấu trúc dữ liệu phức tạp.
// */
// //các kiểu dữ liệu: OBJ, string , Number, boolean

// //khởi tạo đối tượng người
// class Người{
//     //hàm khởi tạo thuộc tính cho class
//     constructor( id, name, age, address, hobbies, gender){
//     //tiến hành luuw trữ giá trị truyền vào class
//       this._id = id;
//       this._name = name;
//       this._age = age;
//       this._address = address;
//       this._hobbies = hobbies;
//       this._gender = gender;

//     }

// //khai báo phương thức cho class này
// introduct(){
//     return (`My name is ${this._name} and I ${this._age} year old`);
// }

// cry(){
//     alert("I am crying");
// }

// }

// //khởi tạo đối tượng có kiểu dữ liệu Người
// // let He = new Người("0123456789", "He" , 44, "World", ["đi","đứng"], "male")
// //in ra tên
// // console.log(He._name);
// //gọi ra phương thức giới thiêu bản thân


// // He.introduct();

// class student extends Người{
//     constructor( id, name, age, address, hobbies, gender, idStudent, classs, totalscore) {
//         super( id, name, age, address, hobbies, gender);
//         // từ khóa super giúp kế thừa hầu hết các thuộc tính từ class cha
//         this._idStudent = idStudent;
//         this._classs = classs;
//         this._totalscore = totalscore;
//     }

//     //kế thừa phương thức
//     //kế thừa hoàn toàn mà không thay đổi cái gì (không cần viết lại các phương thức)
    
//     //kế thừa và ghi đề hoặc phát triển tiếp từ người cha 
//     //khởi tạo một giáo viên
//     introduct(){
//         return super.introduct() + `. And now I am learning at ${this._classs} with student id is ${this._idStudent}. Finaly my totalscore is ${5}`
//     }
// }
// let He = new HocSinh("0123456789", "He" , 44, "World", ["đi","đứng"], "male","Heee","NPS-JSI20",5, );

// console.log(He);
// arlert(
//     He.introduct()
// )

/*tạo một hcn gồm 2 thuộc tính là width và height
yêu cầu:
-xây dựng phương thức tính diện tích HCN
-xây dựng ct tính chu vi HCN

bài 2 tạo 1 lớp vehicle với các thuộc tính cơ bản
thuộc tính: make, model, year*/
class Ts{
    constructor(width,height){
        this._width = width;
        this._height = height;
    }


}





class Vehicle{
    constructor(make, model, year){
        this._make = make;
        this._model = model;
        this._year = year;
    }
    displayDetail(){
        return `Make: ${this._make},Model: ${this._model}, Year ${this._year}`
    }
}
class Car extends Vehicle{
    constructor(make, model, year, numberOfDorrs){
        super(make,model,year);
        this._numberOfDoors;


    }

    displayDetail(){
        return super.displayDetail + `.Number of Doors: ${this._numberOfDoors}`
    }
}

let myCar= new Car('Toyota', 'Corolla',);
console.log(myCar.displayDetail());