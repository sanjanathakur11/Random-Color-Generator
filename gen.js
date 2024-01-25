const getColor=()=>{
    const randomNum= Math.floor(Math.random()*1677215);
    const randomCode="#"+randomNum.toString(16).padStart(6,'0');
    // console.log(randomNum,randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText  =randomCode;
    navigator.clipboard.writeText(randomCode)
}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();