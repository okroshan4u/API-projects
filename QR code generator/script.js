const inputfield = document.querySelector(".form")
const input = document.querySelector(".form input")
const btn = document.querySelector(".form btn")
const imgSrc = document.querySelector(".form img")

inputfield.addEventListener("click",()=>{
    const inputVal = input.value
    if(!inputVal) return;
    console.log(inputVal)
    imgSrc.src = `https://api.qrserver.com/v1/create-qr-code/?data=${inputVal}&amp;size=70x70`
})