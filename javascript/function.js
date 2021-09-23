import { HTML } from "./constant.js"


 let resu = null;

export const choice = (value) => resu = HTML.resultat.innerHTML+=value


export const equal = () => {
    const p = eval(resu)
    HTML.resultat.innerHTML = p
}

export const deleteScreen = () => HTML.resultat.innerHTML=""

window.addEventListener("keydown", (e) => {
    const trigger = e.key
    
    resu = HTML.resultat.innerHTML
    HTML.resultat.innerHTML+= trigger
   
    if(trigger === "=" || trigger === "Enter"){
        equal()
    }
    
})