//accordian day1 - day2 -day3 logic*************************************
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//******************************************************************************* */



let next_button = document.getElementById("next");
next_button.onclick = ()=>{
    Get_Data(event)
    window.location.href = "http://127.0.0.1:5500/wiry-measure-2833/Processed_to_pay_LC.html"
}

// let roomtype = document.getElementById("roomtype");
// let price = document.getElementById("price");
// let A =document.getElementById("mobile");
// A.addEventListener("onclick",()=>{
//   Ayushi()
// }) 

// let Ayushi = ()=>{
//   console.log("laxmi")
// }



const url = "https://server-tripguru.onrender.com/api/user";

let Get_Data = async(ev)=>{
    ev.preventDefault()
    let form = document.getElementById("bookform");

    let e = form.email.value;
    let n = form.name.value;
    let m = form.mobile.value;
    let c = form.city.value;
    let p = form.people.value;
    let r = form.roomtype.value;
    let d = form.checkdate.value;
    
    console.log(e,n,m,c,p,r,d)

    let data = {
        email : e,
        name : n,
        mobile: m,
        city : c,
        people : p,
        roomtype : r,
        date : d, 
    }
    
    console.log(data);

let res = await fetch(url,{
    method : "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type" : "application/json"
    }  
});

form.email.value = null;
form.name.value = null;
form.mobile.value = null;
form.city.value = null;
form.people.value = null;
form.roomtype.value = null;
form.checkdate.value = null;
};



