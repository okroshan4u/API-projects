const input = document.getElementById("input")
const img = document.getElementById("img")
const btn = document.getElementById("btn")

const token = 'API_SECRET_KEY'



async function query() {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": input.value}),
		}
	);
	const result = await response.blob();
	return result;
}

btn.addEventListener("click", async function() {
    query().then((response) => {
        const objectURL = URL.createObjectURL(response)
        img.src = objectURL
    });
})

