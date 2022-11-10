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

let Get_Data = (ev)=>{
    ev.preventDefault()
    let form = document.getElementById("bookform");

    let e = form.email.value;
    let n = form.name.value;
    let m = form.mobile.value;
    let c = form.city.value;
    let p = form.people.value;
    let r = form.roomtype.value;
    let d = form.checkdate.value;
    // let a = form.price.value;
    console.log(e,n,m,c,p,r,d)

}



