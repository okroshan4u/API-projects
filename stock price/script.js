const input = document.querySelector("#input")
const container = document.querySelector(" .container")
const btn = document.querySelector(" .btn")

const select = document.getElementById("stocks")

select.addEventListener("change", () => {
    const ticker = select.value;
    console.log(ticker)
    btn.addEventListener("click", async () => {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/stockprice?ticker=${ticker}`, {
                method: "GET",
                headers: {
                    "X-Api-Key": 'VV0RRTSGRu8Y7SRUMfzMQQ==5qnQSU5dt4oA2pSv'
                },
            })

            const data = await response.json()
            console.log(data)
            console.log(data.ticker, data.name, data.price, data.exchange, data.currency)

            container.innerHTML = `<p>ticker-name:${data.ticker}</p><p>company-name:${data.name}</p><p>price:${data.price}</p><p>Exchange-rate:${data.exchange}</p><p>Currency:${data.currency}</p>`

        } catch (error) {
            console.log(error)
        }

    })
})

