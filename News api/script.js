const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const input = document.getElementById("news")
// const API_KEY = 'pub_33d43cde194f4efcab2f18b56a747db2'

btn.addEventListener("click", async () => {
    try {
        const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_33d43cde194f4efcab2f18b56a747db2&q=${input.value}`, {
            // headers:{
            //     X-API-
            // }
        })
        const data = await response.json()
        console.log(data)
        console.log(data.results)

        container.innerHTML = "";

        data.results.forEach(news => {

            const newsDiv = document.createElement("div")
            newsDiv.classList.add("new-div")
            const contentLength = news.description?.length || 0;

            if (contentLength >= 500) {
                newsDiv.classList.add("wide");
            }

            const h3 = document.createElement("h3")
            const p = document.createElement("p")

            h3.textContent = news.title;
            p.textContent = news.description;

            newsDiv.append(h3, p);

            container.append(newsDiv);
        })
    } catch (error) {
        console.log(error)
    }
})