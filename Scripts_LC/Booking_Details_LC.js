//accordian day1 - day2 -day3 logic*************************************
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
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
// choose price from the select tag********
let data = {}
let x = document.getElementById("roomtype");
x.addEventListener("change", ()=>{
  Myfunction()
})

let a;
let Price = document.getElementById("Price")
let Myfunction = ()=>{
  var x = document.getElementById("roomtype").value;
  if(x=="Private Rooms x1 @13,400"){
   a =  Price.innerText = "13,400"
  }else if(x=="Private Rooms x2 @26,800"){
   a =  Price.innerText = "26,800"
  }else if(x=="Private Rooms x1, Dorm Bed x1 @19,400"){
   a =  Price.innerText = "19,400"
  }else if(x=="Dorm Bed x2 @12,000"){
    a = Price.innerText = "12,000"
  }
}
//******************************************************************** */
//post the form data to server******************************************************** */
let next_button = document.getElementById("next");
next_button.onclick = (event) => {
  Get_Data(event)
  
}

const url = "https://server-tripguru.onrender.com/api/user";
let Get_Data = async (ev) => {
  ev.preventDefault()
  let form = document.getElementById("bookform");

  let e = form.email.value;
  let n = form.name.value;
  let m = form.mobile.value;
  let c = form.city.value;
  let p = form.people.value;
  let r = form.roomtype.value;
  let d = form.checkdate.value;

  // console.log(e, n, m, c, p, r, d)

   data = {
    email: e,
    name: n,
    mobile: m,
    city: c,
    people: p,
    roomtype: r,
    date: d,
    final_amount : a,
  }
  console.log(data);

  form.email.value = null;
  form.name.value = null;
  form.mobile.value = null;
  form.city.value = null;
  form.people.value = null;
  form.roomtype.value = null;
  form.checkdate.value = null;

  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  window.location.href = "http://127.0.0.1:5500/wiry-measure-2833/Processed_to_pay_LC.html"
};
//********************************************************************************************** */