
const btn = document.querySelector(".btn")
const input = document.querySelector("#input")
const img = document.querySelector("#img")



btn.addEventListener("click", async () => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${input.value}`, {
            method: 'GET',
            headers: { 'X-Api-Key': 'VV0RRTSGRu8Y7SRUMfzMQQ==5qnQSU5dt4oA2pSv' },
        });

        const data = await response.json();
        console.log(data)
        img.src = `${data[0].image_link}`;
    } catch (error) {
        console.log(error)
    }

})


