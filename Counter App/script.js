const dcrmnt=document.getElementById("dcrmnt");
const incrmnt=document.getElementById("incrmnt");
const rst=document.getElementById("rst");
const dis=document.getElementById("dis");

dcrmnt.addEventListener("click",() =>
{
    const value=Number(dis.innerText);
    if (value>0){
        dis.innerText=value-1;
    }
    else {
        alert("Negative values not allowed");
    }
});

incrmnt.addEventListener("click", () =>
{
    const value=Number(dis.innerText);
    if(value>=10){
        alert("Number above 10 is not allowed");
    }
    else{
        dis.innerText=value+1;
    }
});

rst.addEventListener("click", ()=> 
{
    dis.innerText=0;
});