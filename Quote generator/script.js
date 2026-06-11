const btn = document.querySelector(".btn")
const container = document.querySelector(".container")

btn.addEventListener("click", async()=>{
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes",{
            method:"GET",
            headers:{
                "X-Api-Key":'VV0RRTSGRu8Y7SRUMfzMQQ==5qnQSU5dt4oA2pSv'
            },
        });

        const data = await response.json()
        console.log(data[0].quote)
        container.innerHTML = data[0].quote
    } catch (error) {
        console.log(error)
    }
})