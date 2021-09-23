import { HTML }  from "./constant.js"

let resu = null 
const choice = (value) => resu = HTML.resultat.innerHTML+=value


const res = () => {
    const p = eval(resu)
    HTML.resultat.innerHTML = p
}

const deleteScreen = () => HTML.resultat.innerHTML=""




HTML.btns.forEach(el => el.addEventListener("click",() => choice(el.innerHTML)))
HTML.delete.addEventListener("click", deleteScreen)
HTML.equal.addEventListener("click", res)

window.addEventListener("keydown", (e) => {
    const trigger = e.key
    
    resu = HTML.resultat.innerHTML
    HTML.resultat.innerHTML+= trigger
   
    if(trigger === "=" || trigger === "Enter"){
        res()
    }
    
})
