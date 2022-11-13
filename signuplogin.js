import popup from "./components/popup.js";
console.log(popup())

let div_vc=document.getElementById("ps_popup")
div_vc.innerHTML=popup()

// signup code start here 
// const api ="https://server-tripguru.onrender.com/api/user";
// document.getElementById("v_sign_up").onclick = async(e)=>{
//     e.preventDefault();
//     let status = document.getElementById("s_status");
//     let name = document.getElementById("s_name").value;
//     let email = document.getElementById("s_email").value;
//     let password = document.getElementById("s_password").value;
//     let code = document.getElementById("v_num").value;
//     let num = document.getElementById("s_number").value;

//     let Pnumber = +code+num;
//     let id = email;

//     let users ={
//         name,
//         email,
//         password,
//         Pnumber,
//         id,
//     }
//     await fetch(api, {
//         method: "POST",
//         body: JSON.stringify(users),
//         headers:{
//             "Content-Type": "application/json",
//         },
//     });
//     status.style.display="block";
//     status.innerText="Signup Sucessful!";
//     document.getElementById("s_name").value = null;
//     document.getElementById("s_email").value =null;
//     document.getElementById("s_password").value = null;
//     document.getElementById("s_number").value = null;
//     setTimeout(window.location.replace("/index.html"), 3000);
// };

// document.getElementById("v_signup").onclick=async()=>{
//     document.getElementById("v_signup_main").style.display="none";
//     document.getElementById("v_login_main").style.display="block";
// }
// // signup code end here 

// // login code start here 
// document.getElementById("v_log").onclick=async()=>{
//     document.getElementById("v_signup_main").style.display="block";
//     document.getElementById("v_login_main").style.display="none";
// }

// let login_user = async()=>{
// let res = await fetch(api);
// res = await res.json();
// userCheck(res)
// };
// // user detials checking
// let userCheck= async(data)=>{
//     let email= document.getElementById("email").value;
//     let pass = document.getElementById("password").value;
//     let status = document.getElementById("v_status");
//     for(let i =0;i<data.length;i++){
//         if(data[i].email == email && data[i].password ==pass){
//             status.style.display="block";
//             status.innerText="Login Sucessful!";
//             setTimeout(window.location.replace("/index.html"), 1000);
//         }
//     }

// document.getElementById("email").value=null;
// document.getElementById("password").value=null;
// }

// login code end here 