const btn = document.getElementById("btn")
const btn1 = document.getElementById("btn1")
const container = document.querySelector(".container")

btn.addEventListener("click", async () => {
    try {
        const response = await fetch("https://catfact.ninja/facts");

        const data = await response.json();
        console.log(data)

        container.innerHTML = "";

        data.data.forEach(fact => {
            const p = document.createElement("p")
            p.textContent = fact.fact;

            container.appendChild(p)
        })

    } catch (error) {
        console.log("Error :",error)
    }
})

btn1.addEventListener("click", async () => {
    try {
        const response = await fetch("https://catfact.ninja/fact");

        const data = await response.json();
        console.log(data)

        container.innerHTML = `<p> ${data.fact} </p>`;

    } catch (error) {
        console.log("Error :",error)
    }
})