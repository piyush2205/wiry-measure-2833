let api=`https://server-tripguru.onrender.com/api/package`


//fetching data from server
async function getdata(){
    try{
        let res=await fetch(api)
        let data=await res.json()
        renderDom(data);
    }catch(error){
        console.log(error);
    }
}
getdata();

//need to append data in this way---->                                 
// {/* 
// <tr>
//     <td>Tripoto's Mindful Retreats</td>
//     <td>₹11k</td>
//     <td>Kolkata</td>
//     <td>
//         <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660807613_2z1a3900_1.jpg" alt="" width="30px" height="30px">
//         <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660807613_2z1a3900_1.jpg" alt="" width="30px" height="30px">
//         <img src="https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1660807613_2z1a3900_1.jpg" alt="" width="30px" height="30px">
//     </td>
//     <td>2Days and 3Nights</td>
//     <td>Family</td>
//     <td>
//         <span class="status green"></span>
//         Progress
//     </td>
// </tr> 
// */}

let pacakagedata=({id,cirDesc,price,location,banner,days})=>{
    let tr=document.createElement('tr');
    tr.setAttribute('class','card_row');

    let n=document.createElement("td");
    let p=document.createElement("td");
    let l=document.createElement("td");

    let b=document.createElement("td");
    let img=document.createElement('img')
    img.setAttribute('class','card_img')
    img.src=banner;
    b.append(img)

    let d=document.createElement("td");

    let pro=document.createElement('td')
    
    n.innerText=cirDesc;
    p.innerText=`₹${price}`
    l.innerText=location;
    d.innerText=days;
    pro.innerText="Live"

    tr.append(n,p,l,b,d,pro)
    return tr;

}

//get the container and append all the data
let renderDom=(data)=>{
    let cont=document.getElementById('container')
    cont.innerHTML=null;
    data.forEach((el)=>{
        let card=pacakagedata(el);
        cont.append(card);
    })
}


