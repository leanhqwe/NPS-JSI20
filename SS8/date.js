// 4 cách khởi tạo đối tượng date
//C1

// let date = new Date();
// console.log(date);

// //C2
// let date2 = new Date(1)
// console.log("date2", date2);

// //C3 khởi tạo ngày giờ từ datestring : "tháng ngày, năm giờ: phút:giây"
// //VD: May 19,2024 16:22:..
// let date3 = new Date("May 19,2024 16:22:00")
// console.log("date3", date3);

//C4 khởi tạo ngày giờ từ 1 date string dạng atrribute:
//let date4 = new Date(year, month, day ,hour ,minutes , seconds, miliseconds);
// let date4 = new Date("2024,05,19,16,27,00,00");
///các phương thức của date.
//các phương thức get dữ liệu

/*
getDate(): trả về ngày trong tháng(1 - 31)
getDay(): trả về ngày trong tuần(0 - 6)
getMonth(): trả về tháng trong năm(0 - 11)
getFullYear(): trả về năm dạng đầy đủ (yyyy)
getHours(): trả về số giờ dạng 24h (0 - 23)
getMinutes(): trả về số giờ phút 60 (0 - 59)
getMilliseconds(): trả về số tik tak trong giây (0 - 999)
getTime(); trả về thời gian dạng mili giây.

ví dụ
*/

// function get() {
//  let date = new Date();
//  let data = "Ngày trong tháng: " + date.getDate() + "br /";
//  data += "ngày trong tuần: " + date.getDay() + "br /";
//  data += "tháng trong năm" + date.getMonth() + "br /";
//  data += "giờ" + date.getHours() + "br /";
//  data += "Phút" + date.getMinutes() + "br /";
//  data += "giây" + date.getMilliseconds() + "br /";


//  document.getElementById("result").innerHTML = Data;
// }

// get()

// /*

// */

// function set(){
//     let date = new Date();
//     date.setDate(19);
//     date.setMonth(4);
//     date.setFullYear(24);
//     date.setHours (16);
//     date.setMinutes (47);
//     date.getMilliseconds (999);

//     console.log(date);
// }

// set()


/*
toDateString(): chuyển đổi thời gian về dạng date string
to ISOString(): chuyển đổi thời gian về dạng ISO
toJSON(): Chuyển đổi thời gian về dạng JSON
toLOcalDateString(): Chuyển đổi về ngày theo chuyển địa phương.
toLocalTimeString(): Chuyển đổi về giờ theo chuyển địa phương
toString(): chuyển đổi thời gian về dạng String
valueOf(): Chuyển đổi thời gian về dạng nguyên thủy

*/

// function getOther(){
//   let date = new Date();
//   let data = 'toDateString():' + date.toDateString() + "<br />";
//   data += "toISOString():" + date.toISOString() + "<br />"
//   data += "toJSON():" + date.toJSON() + "<br />"
//   data += "toLocaleDateString():" + date.toLocaleDateString() + "<br />"
//   data += "toString():" + date.toString() + "<br />"
//   data += "valueOf():" + date.valueOf() + "<br />"

//   document.getElementById("result").innerHTML = data

//   console.log(date);
// }

// getOther()

const date = new Date(20,1,20,3,12);
console.log("date", date);

function Ago() {
 const dayOfweek = ["SU","MO","TU","WE","TH","FR","SA"]
 const targetDate = new Date(date);

  targetDate.setDate(targetDate.setDate() - days);

  return dayOfweek[targetDate.getDate()];

}

const today = new Date();
console.log(getDateAgo(today,1));



function DateAgo() {
const date = new Date(date);

}

