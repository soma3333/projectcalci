

const   dis=document.getElementById("display");

document.getElementById("zero").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+0; 
});
document.getElementById("one").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+1; 
});
document.getElementById("two").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+2; 
});
document.getElementById("three").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+3; 
});
document.getElementById("four").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+4; 
});
document.getElementById("five").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+5; 
});
document.getElementById("six").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+6; 
});
document.getElementById("seven").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+7; 
});
document.getElementById("eight").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+8; 
});
document.getElementById("nine").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+9; 
});


document.getElementById("plus").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+'+';   
    });
document.getElementById("minus").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+'-';   
    });
document.getElementById("multiply").addEventListener("click",()=>{
    dis.textContent=dis.innerHTML+'*';   
    });
document.getElementById("division").addEventListener("click",()=>{
        dis.textContent=dis.innerHTML+'/';   
    });
document.getElementById("equal").addEventListener("click",()=>{
    let a=dis.textContent.toString();
    dis.textContent=eval(a);
     });  
document.getElementById("allclear").addEventListener("click",()=>{
    dis.textContent="";
     });
document.getElementById("delete").addEventListener("click",()=>{
    dis.textContent=dis.textContent.slice(0,-1);
     });


