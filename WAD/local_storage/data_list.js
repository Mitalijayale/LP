var userData=JSON.parse(localStorage.getItem("userData"))

if(userData && userData.length>0){
    const datalist=document.getElementById("datalist");

    // userData.forEach(function(user){
    //     var listitem=document.createElement("li");
    //     listitem.textContent="name"+user.name+ "email"+user.email;
    //     datalist.appendChild(listitem);
    // })
    var dataid=document.getElementById("datalist")
    let html=`
    <ul>${userData.map(e1=>`<li>Name:${e1.name};Email:${e1.email};Address:${e1.address};Birth Date:${e1.birth}</li>`).join("")}</ul>
    `
    dataid.innerHTML=html

    // let html="<table border=1 style='border-collapse:collapse'>"
    // html=`
    // <tr>
    // <th>Name</th>
    // <th>Email</th>
    // <th>Address</th>
    // <th>Birth Date></th>
    // </tr>
    // `
    // userData.map(s1=>{
    //     html=html+"<tr>"
    //     html=html+"<td>"+s1.name+"</td>"
    //     html=html+"<td>"+s1.email+"</td>"
    //     html=html+"<td>"+s1.address+"</td>"
    //     html=html+"<td>"+s1.birth+"</td>"
    //     html=html+"</tr>"
    // })
    // html=html+"</table>"
    // dataid.innerHTML=html;

}
else{
    document.getElementById("datalist").innerHTML="<li>No data</li>"
}