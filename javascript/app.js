import { HTML }  from "./constant.js"
import { choice, equal, deleteScreen} from './function.js'



HTML.btns.forEach(el => el.addEventListener("click",() => choice(el.innerHTML)))
HTML.delete.addEventListener("click", deleteScreen)
HTML.equal.addEventListener("click", equal)


