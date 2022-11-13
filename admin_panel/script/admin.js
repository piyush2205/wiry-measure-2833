let api=`https://server-tripguru.onrender.com/api/package`
let custdata=`https://server-tripguru.onrender.com/api/user`


let numofpack=document.getElementById('numofpack')//to change number of packages
//fetching data from server
let numofcust=document.getElementById('numofcust')//to change number of customers
//fetching data from server
let income=document.getElementById('income')

async function getdata(){
    try{
        let res1=await fetch(api)
        let res2=await fetch(custdata)
        let data1=await res1.json()
        let data2=await res2.json()
        numofpack.innerText=data1.length;
        numofcust.innerText=data2.length;
        renderDom(data1);
        renderDom2(data2);
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


//append customer data in this way
{/* <div id="info">
        <img src="https://www.pngitem.com/pimgs/m/62-625606_computer-icons-suit-image-avatar-clip-art-customer.png" alt="" height="40px" width="40px">
        <div>
            <h4>Chunnu</h4>
            <small>Varanasi</small>
        </div>
    </div>
 */}

let customerdata=({name,city,final_amount})=>{
    
    income.innerText=`₹${final_amount}`

    let div=document.createElement('div')
    div.setAttribute('id','info')

    let image=document.createElement('img')
    image.src='https://www.pngitem.com/pimgs/m/62-625606_computer-icons-suit-image-avatar-clip-art-customer.png'
    image.style.height="40px";
    image.style.width="40px";

    let div2=document.createElement('div')

    let h4=document.createElement("h4");
    h4.innerText=name;

    let small=document.createElement('small');
    small.innerText=city;

    div2.append(h4,small)
    div.append(image,div2)

    return div;


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
//get the conatiner2 and append all the data for customer

let renderDom2=(data)=>{
    let cont2=document.getElementById('container2')
    cont2.innerHTML=null;
    data.forEach((el)=>{
        let card2=customerdata(el);
        cont2.append(card2)
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
    }else{
        main.style.display="none"
    }
   
}
    // }else if(query==""){
    //     main.style.display="none"
    // }

   
 
    
function openpackages(){
    window.location.href="./admin_packages.html"
}
      
function opencustomers(){
    window.location.href="./customers.html"
}
    


