export default function Array_Functions() {
    //const users = ["Mehmet", "Ahmet", "Murat"]
    /* const users =
        [
            {
                name: "Mehmet",
                age: 24,
            },
            {
                name: "Mehmet",
                age: 45,
            },
            {
                name: "Murat",
                age: 50,
            },
        ] */
    /*
    push
    map
    find
    filter
    some
    every
    includes
    */

    //push
    /* users.push("Ayşe") //adding element end of the array
    console.log(users) */

    //map typical for 
    //users.map((item) => { console.log( item ) })

    //find
    //const result = users.find((item) => item.name === "Mehmet")
    //const result = users.find((item) => item.name === "Mehmet" && item.age>20) //firstly founding
    //console.log(result)

    //filter
    //const filtered = users.filter((item)=>item.name==="Mehmet")
    //const filtered = users.filter(({name,age}) => name === "Mehmet" && age > 10)

    //console.log(filtered)

    //some return bool
    //const some = users.some(({ name, age }) => age > 4 && name === "Mehmet")
    //console.log(some)

    //every 
   //const every = users.every((item) => item.age > 20) //everything same for condition

    //console.log(every)

    //includes
    const  meyveler = ["elma","armut","muz"]
    const isIncluded = meyveler.includes("portakal")
    console.log(isIncluded)
   
}
