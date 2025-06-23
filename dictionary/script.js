const btn = document.getElementById("btn")
const input = document.getElementById("input")
const container = document.querySelector(".container")

btn.addEventListener("click",async()=>{
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)

    const data = await response.json();

   
   
    console.log(data[0].meanings[0].definitions)
    console.log(data[0].meanings[0].definitions[0].definition)

    container.innerHTML = data[0].meanings[0].definitions[0].definition
})
