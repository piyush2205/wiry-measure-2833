let custdata=`https://server-tripguru.onrender.com/api/user`

async function getdata(){
    try{
        let res=await fetch(custdata)
        let data=await res.json()
        renderDom(data);
    }catch(error){
        console.log(error);
    }
}
getdata();

let renderDom=(data)=>{
    let cont=document.getElementById('container')
    cont.innerHTML=null;
    data.forEach((el)=>{
        let card=customerdata(el);
        cont.append(card)
    })
}

let customerdata=({id,name,email,mobile,city,people,roomtype,date,final_amount})=>{
    let tr=document.createElement('tr');
    tr.setAttribute('class','card_row');

    let n=document.createElement("td");
    let e=document.createElement("td");
    let m=document.createElement("td");
    let c=document.createElement("td");
    let p=document.createElement("td");
    let r=document.createElement("td");
    let da=document.createElement("td");
    let a=document.createElement("td");
    let rej=document.createElement('td');

    n.innerText=name;
    e.innerText=email;
    m.innerText=mobile;
    c.innerText=city;
    p.innerText=people;
    r.innerText=roomtype;
    da.innerText=date;
    a.innerText=final_amount;
    rej.innerText="Reject"
    rej.style.backgroundColor="Red"
    rej.style.color="Black"
    rej.style.fontWeight="bold";
    rej.style.cursor="pointer";
    rej.onclick=()=>{
        deletecustomer(id)
    }

    tr.append(n,e,m,c,p,r,da,a,rej)

    return tr;


}
let deletecustomer=async(id)=>{
    await fetch(`${custdata}/${id}`,{
        method:"DELETE",
    });
    
    getdata();
    window.location.reload();

    
}

