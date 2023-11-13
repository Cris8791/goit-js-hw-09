let t;// adaug evenimente pentru butoane
document.querySelector("[data-start]").addEventListener("click",function(){// dezactivez butonul "Start"
document.querySelector("[data-start]").disabled=!0,// activez butonul "Stop"
document.querySelector("[data-stop]").disabled=!1,// Schimb culoarea o data pe secunda
t=setInterval(()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`},1e3)}),document.querySelector("[data-stop]").addEventListener("click",function(){// activez butonul "Start"
document.querySelector("[data-start]").disabled=!1,// dezactivez butonul "Stop"
document.querySelector("[data-stop]").disabled=!0,// opresc schimbarea culorii de fundal
clearInterval(t)});//# sourceMappingURL=01-color-switcher.a5eb7e7c.js.map

//# sourceMappingURL=01-color-switcher.a5eb7e7c.js.map
