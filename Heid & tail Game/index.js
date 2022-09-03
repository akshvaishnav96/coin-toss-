
let btn = document.getElementById("btn")
 btn.addEventListener("click",()=>{
    let area = document.getElementsByClassName("coin")[0]
        
    area.innerHTML = `<img src="./flip.gif" alt="">`

    let num = Math.floor(Math.random()*2);
    console.log(num)
    setTimeout(() => {
        
        if(num.valueOf() == 0){
            area.innerHTML = `<img src="./tail.png" alt="">
            <h1>Its a Tail</h1>`
        }
        else if(num.valueOf() == 1 ){
            area.innerHTML = `<img src="./head.png" alt="">
            <h1>Its a Head</h1>`
        }
    }, 4500);
 })