var body= document.querySelector("body");
body.style.background= "black";


const obj=
{
    username0: "adilcn",
    username1: "anshi",
    username2: "farhan",
    username3: "faizan",
}

const objArray= Object.keys(obj)

objArray.forEach((elements, index)=>{

    // console.log(elements, obj[elements])

    if(obj[elements].includes("ansh"))
    {
        console.log("yes", elements)
        // obj[elements]= "Anshida"
    }
})

const fruits= ["apple", "Banana", "Mango", "Tomato", "Grapes"]

const numbers= [1,2,3,4,5,6,7,8,9,10]

for (let i=0; i<numbers.length; i++)
{
    
    if(numbers.length<100)
    {
       numbers.push(numbers.length+1) 
    }
    

}


let fruitsSpread=[...fruits]

