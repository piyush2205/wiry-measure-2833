let api=`https://server-tripguru.onrender.com/api/package`


let numofpack=document.getElementById('numofpack')//to change number of packages
//fetching data from server
async function getdata(){
    try{
        let res=await fetch(api)
        let data=await res.json()
        numofpack.innerText=data.length;
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


//search pacakages
//in this fashion
{/* <li>
        <h4>Tripoto's Mindful Retreats</h4>
        <img src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660666126_image_covera.jpg" style="height: 50px;">
    </li>
<hr></hr> */}



async function searchpacakages(){

    let query=document.getElementById('query').value;

    response=await fetch(`${api}?location_like=${query}`)
    let data=await response.json();


    let main=document.getElementById('show_search_result')
    main.innerHTML=null;

    
    
    if(query){
        main.style.display="block";
        data.forEach(el=>{

            let ul=document.createElement('ul')

            let li=document.createElement('li')
    
            let h4=document.createElement('h4')
            h4.innerText=el.descTitle;
    
            let img=document.createElement('img')
            img.style.height="50px";
            img.src=el.banner;
    
            let hr=document.createElement('hr')
    
    
            li.append(h4,img,hr)
            ul.append(li)
            main.append(ul)
            
        })
    }
   
}
    // }else if(query==""){
    //     main.style.display="none"
    // }

        
    
      

    


