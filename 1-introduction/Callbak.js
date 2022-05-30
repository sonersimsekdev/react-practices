import axios from "axios"
export default function Callback_async_await() {

  /* setTimeout(()=>{ //built-in function
    console.log("setTimeout function")
  },2000) */

  /* setInterval(()=>{
    console.log("setInterval function")
  },5000) */

  /* const sayHi = (callback) => {
    //console.log("Hello")
    callback();
  } */

  //sayHi(() => { console.log("callback hello") })

  /* fetch("https://jsonplaceholder.typicode.com/users")
  .then(data => data.json())
  .then(users => console.log(users)) */

  /* fetch("https://jsonplaceholder.typicode.com/users/1	")
    .then(data => data.json())
    .then(users => {
      console.log("Users yüklendi!", users)

    })

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => data.json())
    .then(posts => console.log("Post yüklendi!", posts)) */


  /* fetch("https://jsonplaceholder.typicode.com/users/1	")
    .then(data => data.json())
    .then(users => {
      console.log("Users yüklendi!", users)
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(data => data.json())
        .then(posts => {
          console.log("Post yüklendi!", posts)
          fetch("https://jsonplaceholder.typicode.com/albums/1")
            .then(data => data.json())
            .then(posts => console.log("Album yüklendi!", posts))
        })
    }) */

  /*  fetch("https://jsonplaceholder.typicode.com/users/1	")
     .then(data => data.json())
     .then(users => { console.log("Users yüklendi!", users) })
 
   fetch("https://jsonplaceholder.typicode.com/posts/1")
     .then(data => data.json())
     .then(posts => { console.log("Post yüklendi!", posts) })
 
   fetch("https://jsonplaceholder.typicode.com/albums/1")
     .then(data => data.json())
     .then(posts => console.log("Album yüklendi!", posts)) */

  /* async function getData() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then(users => users.json())

    const post1 = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(post => post.json())

    const post2 = await fetch("https://jsonplaceholder.typicode.com/posts/2").then(post => post.json())

    console.log("Users",users)
    console.log("Post1",post1)
    console.log("Post2",post2)
  }

  getData() */

  /*  (()=>{
     console.log("I'm an anonymus function")
   })() */

  //--------------------AXIOS--------------------//

  /* async function getData() {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users")

    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1")

    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2")

    console.log("Users", users)
    console.log("Post1", post1)
    console.log("Post2", post2)
  }

  getData() */


  //--------------------PROMISE--------------------//

  /* const getComments = (number) => {
    return new Promise((resolve,reject)=>{
      if(number === 1){
        resolve({text:"Selam"})
      }
      reject("Bir problem oluştu.")
      
    })
  }

  getComments(1).then((data)=>console.log(data)).catch(e => console.log(e)) */

  /* const getUsers = (number) => {
    return new Promise(async (resolve, reject) => {
      const { data } = await axios("https://jsonplaceholder.typicode.com/users")

      resolve(data)
      //reject("hata oldu")
    })
  }

  const getPost = (postId) => {
    return new Promise(async (resolve, reject) => {
      const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${postId}`)

      resolve(data)
    })
  } */

  /* (async () => {
    try{
    await getPost(5)
      .then((data) => console.log(data))
      .catch(e => console.log(e))

    const users = await getUsers(1).json()
    }
    catch(e){
      console.log(e)
    }
    //console.log("users" + users)
  })() */

 /*  Promise.all([getUsers(1),getPost(1)])
  .then(console.log)
  .catch(console.log) */
}
