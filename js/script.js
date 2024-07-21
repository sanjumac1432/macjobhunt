// // this code for singup page
// const singup = ()=>{
   
//     const obj = {
//         email :  document.getElementById("email").value,
//         password : document.getElementById("password").value,
//         type: 'recruiter',
//         name :document.getElementById( "name" ).value ,
//         contactnumber : document.getElementById("contactnumber").value,
//         bio : document.getElementById("textarea").value
//     }

// fetch('http://localhost:4444/auth/signup',{
//     method :'POST', 
//     headers:{
//         'Content-Type':'application/json'

//     },
//   body : JSON.stringify(obj)  

// }).then((y)=>{
//     return y.json()

// }).then((y)=>{
//   if(y.type){
//     location.href ="login.html";
//   }
// })

// }

// this code for login page 

// const login = () => {
   
//     const obj = {
//         email :  document.getElementById("email").value,
//         password : document.getElementById("password").value
//     };

//     fetch("http://localhost:4444/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify(obj)
//     }).then((y) => {
//         return y.json()

//     }).then((y)=>{
//       if(y.type){
//       localStorage.setItem( "token" , JSON.stringify(y));
//       location.href= "index.html";
//       }
//     })

//   };



// this code for add job page and display data 

// const addjob = (e)=>{

// e.preventDefault();

// const obj = {
//   title : document.getElementById("title").value,
//   skill : document.getElementById("skillset").value,
//   jobType : document.getElementById("jobtype").value,
//   duration : document.getElementById("duration").value,
//   salary : document.getElementById("salary").value,
//   deadline : document.getElementById("deadline").value,
//   maxApplicants : document.getElementById("maxappliacants").value,
//   maxPositions : document.getElementById("maxpositions") .value

// }

// let data = JSON.parse(localStorage.getItem('token')).token;


// fetch("http://localhost:4444/api/jobs",{

// method:"POST",
// headers :{
//   'Content-Type' : 'application/json',
//  'Authorization' : `Bearer ${data}`,

// },
// body : JSON.stringify(obj),
// }).then((y)=>{
//   return y.json();
// }).then((y)=>{
//   console.log(y)
//   location.href= 'myjobs.html';
 
// });

// }




// display data in my job page

// let t = JSON.parse(localStorage.getItem("token")).token;
// const myJobs = () => {
  
//   fetch("http://localhost:4444/api/jobs?myjobs=1", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization : `Bearer ${t}`,
//     },
//   })
//     .then((y) => y.json())
//     .then((y) => {
//       console.log(y);
//       display(y);
//     });
// };


// const display = (jobs) => {
//   let p = jobs.map(function(value,index){

//     return `
//     <div class="col-xxl-5 col-md-6 col-sm-6 textpart">
          
//             <h2 class="secH">${value.title}</h2>
//             <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
//                 class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
//             <p>Role: ${value.jobType}</p>
//             <p>Salary: <strong>${value.salary}</strong> per month </p>
//             <p>Duration: ${value.duration} month</p>
//             <p>Date Of Posting: ${value.deadline}</p>
//             <p>Number of Applicants: ${value.maxApplicants}</p>
//             <p>Remaining Number of Positions: ${value.maxPositions}</p>
          
         
//         </div>
//         <div class="col-lg-3 col-md-4 col-sm-6 miniCard">
//           <div class="miniCardBtn">
//             <a  href="applications.html" class="btn btn-primary">VIEW APPLICATIONS</a>
//             <button type="button" class="btn btn-blue" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="UPDATE DETAILS" onclick="getData(${index})"  >UPDATE DETAILS</button>
//             <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="DELETEJOB" onclick="getData(${index})"   >DELETE JOB</button>
//           </div>
         
          
         
          
//           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h1 class="modal-title fs-5 secH text-center w-100" id="exampleModalLabel">Update Details</h1>
//                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
//                   <form >
//                     <div class="mb-3">
//                       <label for="ApplicationD" class="col-form-label">Application Deadline</label>
//                       <input type="date" class="form-control" id="ApplicationD">
//                     </div>
//                     <div class="mb-3">
//                       <label for="quantity" class="col-form-label">Maximum Number Of Applicants</label>
//                       <input class="form-control" type="number" id="quantity" name="quantity" min="1" max="100">
//                     </div>
//                     <div class="mb-3">
//                       <label for="Pquantity" class="col-form-label">Position Available</label>
//                       <input class="form-control" type="number" id="Pquantity" name="Pquantity">
//                     </div>
//                   </form>
//                 </div>
//                 <div class="modal-footer">
//                   <button type="button" class="btn btn-primary" onclick= "UpdateJob(event)" >UPDATE</button>
//                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
//                 </div>
//               </div>
//             </div>
//           </div>


//           <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h1 class="modal-title fs-5 secH text-center w-100" id="exampleModalLabel2">Are You Sure</h1>
//                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
                
//                 <div class="modal-footer">
//                   <button type="button" class="btn btn-primary">DELETE</button>
//                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>  `
   
//   })

//   document.getElementById("display").innerHTML = p.join("");
// }


// update profile code start hear 


// let user =[];


// const updateProfile = ()=>{
 
//   let d = JSON.parse(localStorage.getItem("token")).token;

//   fetch("http://localhost:4444/api/user",{
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization : `Bearer ${d}`,
//     },
//   })
//   .then(y=>y.json())
//   .then(y=>{
//     user=y;
//     console.log(user);
//     updatedisplaydata(user);
//   });

// };


// const  updatedisplaydata=(user)=>{
//    document.querySelector("#name").value = user.name,
//    document.querySelector("#bio").value = user.bio
// }




// const submitUpdateForm = (e)=>{

//   e.preventDefault()
//   let obj = {
//     name : document.querySelector("#name").value,
//     bio : document.querySelector("#bio").value,
//     _id :user._id
//   }


//   let d = JSON.parse(localStorage.getItem("token")).token;

//   fetch("http://localhost:4444/api/user",{
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization : `Bearer ${d}`,
//     },
//     body : JSON.stringify(obj),
//   })
//   .then(y=>y.json())
//   .then(y=>{
    
//     console.log(y);

//   });

// }




// update jobs data code start hear


// let d = JSON.parse(localStorage.getItem("token")).token;
// const dis = (y) => {
//   document.getElementById('ApplicationD').value = y.deadline;
//   document.getElementById('quantity').value = y.maxApplicants;
//   document.getElementById('Pquantity').value = y.maxPositions;
// }

// let obj = {}
// const getData = (index) => {
//   let a = user[index];
//   obj = a;
//   console.log(a);
//   dis(a)
// }


// const UpdateJob = (e) => {
//   e.preventDefault();

//   obj.deadline = document.getElementById('ApplicationD').value;
//   obj.maxApplicants = document.getElementById('quantity').value;
//   obj.maxPositions = document.getElementById('Pquantity').value;


//   fetch(`http://localhost:4444/api/jobs/${obj._id}`, {
//     method: "PUT",
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${d}`
//     },
//     body: JSON.stringify(obj),
//   }).then(y => y.json())
//     .then(y => {
//       console.log(y);
//     })
// }










