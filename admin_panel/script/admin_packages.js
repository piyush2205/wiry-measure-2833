let also_api_send=`https://server-tripguru.onrender.com/api/Package_admin_added`
let api=`https://server-tripguru.onrender.com/api/package`

document.getElementById('submit').addEventListener('click',async function getformdata(event){
    event.preventDefault();

    let cirDesc=document.getElementById('pack').value;
    let price=document.getElementById('price').value;
    let category=document.getElementById('category').value;
    let location=document.getElementById('location').value;
    let days=document.getElementById('duration').value;
    let banner=document.getElementById('image').value;
    let id=Date.now();

    let package={cirDesc,price,category,location,days,banner,id}
        await fetch(api,{
            method:"POST",
            body:JSON.stringify(package),
            headers:{
                "content-Type":"application/json",
            }
        })
        await fetch(also_api_send,{
            method:"POST",
            body:JSON.stringify(package),
            headers:{
                "content-Type":"application/json",
            }
        })
        

    cirDesc.value=null;
    price.value=null;
    category.value=null;
    location.value=null;
    days.value=null;
    banner.value=null;

    window.location.reload();

    
})


let id;

// to show data in table from database
async function getdata(){
    let res=await fetch(also_api_send)
    let data=await res.json()

    let res1=await fetch(api)
    let data1=await res1.json()
    data1.forEach=(el)=>{
        renderDom(el.id)
    }

    renderDom(data);
    
}
getdata();






let pacakagedata=({cirDesc,price,location,banner,days,id})=>{

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

    let dlt=document.createElement('td')
    dlt.innerText="Delete"
    dlt.style.background="red"
    dlt.style.cursor="pointer"
    dlt.style.fontWeight="bold";

   
    dlt.onclick=()=>{
        deletepackage(id);
        delete_another_package_function(id)
    }
    
    
    n.innerText=cirDesc;
    p.innerText=`₹${price}`
    l.innerText=location;
    d.innerText=days;
    pro.innerText="Live"

    tr.append(n,p,l,b,d,pro,dlt)
    return tr;

}

let renderDom=(data)=>{
    let cont=document.getElementById('container')
    cont.innerHTML=null;
    data.forEach((el)=>{
        let card=pacakagedata(el);
        cont.append(card);
    })
}

//delete function
let deletepackage=async(id)=>{
    console.log(id)
    await fetch(`${also_api_send}/${id}`,{
        method:"DELETE",
    });
    
    getdata();
    window.location.reload();

    
}

let delete_another_package_function=async(id)=>{
    console.log(id)
    await fetch(`${api}/${id}`,{
        method:"DELETE",
    });
    getdata();
}


function opendashboard(){
    window.location.href="./admin.html"
}
function accountopen(){
    window.location.href="./account_edit.html"
}
function logout(){
    window.location.href="./authetication.html"
}
