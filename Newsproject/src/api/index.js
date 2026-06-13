const API_KEY = 'pub_33d43cde194f4efcab2f18b56a747db2'


export const getNews = async ()=>{
    const response = await fetch("https://newsdata.io/api/1/latest?apikey=pub_33d43cde194f4efcab2f18b56a747db2&q=Cricket",{
        method:"GET"
    })
    const data = response.json()
    console.log(data)
}