export const HTML = {
    btns : [...document.querySelectorAll(".btn")],
    resultat : document.querySelector(".display p"),
    equal : document.querySelector(".special"),
    delete : document.querySelector(".delete")
}

export const REGEX = {
    numb : new RegExp(/\d/),
    operator : new RegExp(/[-+*/]/),
    allDelete : new RegExp(/[C]/i)
}

