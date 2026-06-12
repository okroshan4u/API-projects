export const getPost = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"GET"
    })
    const data = await response.json()

    return data
}
export const getUser = async() =>{
    const response = await fetch("https://randomuser.me/api/",{
        method:"GET"
    })
    const user = await response.json()
    console.log(user.results[0].name.title,user.results[0].name.first, user.results[0].name.last)

    return user
}