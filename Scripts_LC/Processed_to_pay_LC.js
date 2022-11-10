// for going to playstore************************************************************
let playstore = document.getElementById("playstore")
playstore.onclick = ()=>{
    go_to_playstore()
}
let go_to_playstore = ()=>{
    window.location.href = "https://play.google.com/store/apps/details?id=com.tripoto&utm_source=web&utm_medium=footer&pli=1"
}
//************************************************************************** */




let url = "https://server-tripguru.onrender.com/api/user";

window.onload = () => {
    Get_Data()
  };

  let Get_Data = async()=>{
    // e.preventDefault();
    let res = await fetch(url)
    res = await res.json()
    // console.log(res);
    append_Data(res)
  }

  let append_Data = (data)=>{    
    for(i=0; i<data.length; i++){
        console.log(data[i]);
    // data.forEach(({email,name,mobile,city,people,roomtype,date,id}) => {
        
          document.getElementById("full_name").innerText = data[i].name;
          document.getElementById("email").innerText = data[i].email;
          document.getElementById("contact").innerText = data[i].mobile;
          document.getElementById("city").innerText = data[i].city;
          document.getElementById("check_date").innerText = data[i].date;
          document.getElementById("room_type").innerText = data[i].roomtype;
          document.getElementById("People").innerText = data[i].people
    // });
}
}