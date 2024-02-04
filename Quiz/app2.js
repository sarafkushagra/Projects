let yess = document.querySelector("#correct")
let noo = document.querySelector("#wrong1")
let nooo = document.querySelector("#wrong2")
let noooo = document.querySelector("#wrong3")
let don1 = document.querySelector("#two")
let next = document.querySelector(".next")

yess.addEventListener("click", function () {
    yess.style.backgroundColor = "green"
    don1.style.backgroundColor = "green"
    don1.innerHTML = "&#10003;"
    don1.style.fontSize = "30px"
    noo.disabled = "True"
    nooo.disabled = "True"
    noooo.disabled = "True"
    next.addEventListener("click", function () {
        next.style.backgroundColor = "green"
    })
})

noo.addEventListener("click", function () {
    noo.style.backgroundColor = "red"
    don1.style.backgroundColor = "red"
    don1.innerHTML = "X"
    don1.style.fontSize = "30px"
    yess.disabled = "True"
    nooo.disabled = "True"
    noooo.disabled = "True"
    next.addEventListener("click", function () {
        next.style.backgroundColor = "green"
    })
})

nooo.addEventListener("click", function () {
    nooo.style.backgroundColor = "red"
    don1.style.backgroundColor = "red"
    don1.innerHTML = "X"
    don1.style.fontSize = "30px"
    noo.disabled = "True"
    yess.disabled = "True"
    noooo.disabled = "True"
    next.addEventListener("click", function () {
        next.style.backgroundColor = "green"
    })
})

noooo.addEventListener("click", function () {
    noooo.style.backgroundColor = "red"
    don1.style.backgroundColor = "red"
    don1.innerHTML = "X"
    don1.style.fontSize = "30px"
    noo.disabled = "True"
    nooo.disabled = "True"
    yess.disabled = "True"
    next.addEventListener("click", function () {
        next.style.backgroundColor = "green"
    })
})


