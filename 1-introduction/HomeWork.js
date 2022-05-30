import axios from "axios"
async function getData(number) {
    const userId = number
    const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const { data: post1 } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    console.log(users)
    console.log(post1)
}

export default getData




