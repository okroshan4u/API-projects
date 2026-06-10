const gallary = document.querySelector(".gallary")
const loader = document.querySelector(".loader")
const perPage = 3;
// const loading = false;
let page = 1;
const accessKey = 'qXGELz2sbWKLSrF1QTZKzcO6BIkDuvZ26UczsqSDzm8'

async function fetchImage() {

    // if (loading) return;

    // loading = true;
    // loader.style.display = "block";

    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?count=${perPage}&client_id=${accessKey}`);

        if(!response.ok){
            const errortxt = await response.text();
            throw new Error(`Error ${response.status}: ${errortxt}`)
        }

        const data = await response.json()
        console.log(data)

        data.forEach(image => {
            const img = document.createElement("img")
            img.src = image.urls.small;
            img.atl = image.alt_description || 'Unspalsh image';

            gallary.appendChild(img)
        });
    } catch (error) {
        console.log(error)
    } 
    // finally {
    //     loading = false;
    //     loader.style.display = "none";
    // }

}

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        fetchImage()
    }
})

fetchImage()