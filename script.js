const btn =document.querySelector('.btn')
btn.addEventListener("click",()=>
{
    let toggle=document.querySelector('.toggle');
    toggle.classList.toggle('active');
    let btn=document.querySelector('.btn');
    btn.classList.toggle('active');
})
