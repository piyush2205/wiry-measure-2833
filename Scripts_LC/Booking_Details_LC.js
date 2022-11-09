//accordian day1 - day2 -day3 logic
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





const url = "https://server-tripguru.onrender.com/api/user";

let next_button = document.getElementById("next");
next_button.onclick = ()=>{
    Get_Data(event)
}

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

    // let a = form.roomtype.pr;
    // let a = document.getElementById("price").innerText = r;
    
    // console.log(e,n,m,c,p,r,d)
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
    
})

}



