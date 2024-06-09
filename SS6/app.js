import{
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

//nhúng firebase config vào dự án kết nối 
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

 const firebaseConfig = {
   apiKey: "AIzaSyDXQnbIgcYhOLa5XzWd1Gmw_P4eM02Fzvs",
   authDomain: "nps-jsi20-pj.firebaseapp.com",
   projectId: "nps-jsi20-pj",
   storageBucket: "nps-jsi20-pj.appspot.com",
   messagingSenderId: "534345171628",
   appId: "1:534345171628:web:064335d6bb52ca81349509",
   measurementId: "G-MJHVNKKH37"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);

const db = getFirestore(app)
//lấy ra 3 thẻ bên html và lưu trữ lại vào biến dể dễ dàng gọi
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const renderTasks = (tasks)=>{
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${task.description}</span>
        <div></div>
        <button class="doneBtn" data-di="${task,id}">Done</button>
        <button class="deleteBtn" data-di="${task.id}">Delete</button>`;


        taskList.appendChild(li);

        const deleteBtn = li.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click",() =>{
            deleteTask(task.id);
        });


    });


};

const getTasks= async() =>{
const querySnapshot = await getDocs(collection(db, "tasks"));
console.log("querySnapshot",querySnapshot);

const tasks = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    description: doc.data().description,
}));

console.log("tasks",tasks);

renderTasks(tasks);


};

const addTask =  async (description)=>{
    await addDoc(collection(db,"tasks"), {description});
    getTasks();
};

const deleteTask = (id) => {
  const docRef = doc(db, "tasks", id);
  console.log("docRef", docRef);

  deleteDoc(docRef)
  .then(()=>{
    console.log("Entire Document has been detele successfully");

    getTasks();
  })
  .catch((error)=>{
    console.log(error);
  });
};

addTaskBtn.addEventListener("click", ()=>{
    const description = taskInput.value.toLocaleLowerCase().trim();
    console.log("description:", description)
    if(description !== ""){
        addTask(description);
        taskInput.value = ""
    }
    else{
        alert("task rỗng!!!");
    }
});

