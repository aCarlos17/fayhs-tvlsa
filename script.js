let start = [document.getElementById('start-top'), document.getElementById('start-bottom'), document.getElementById('start-tos')]
let tosPrompt = document.getElementById('tos')
let tosAgree = document.getElementsByName('tos-agree-choice')

start[0].onclick = function() {
    tosPrompt.style.display = "block"

    tosAgree[0].checked = false
    tosAgree[1].checked = false
}

start[1].onclick = function() {
    tosPrompt.style.display = "block"

    tosAgree[0].checked = false
    tosAgree[1].checked = false
}

document.getElementById('close').onclick = function() {
    tosPrompt.style.display = "none"
}

let agree = document.getElementById('tos-agree')
let disagree = document.getElementById('tos-disagree')
let n = 0

if (agree.checked === true) {
    n = 1
}

if (n == 1) {
    start[2].onclick = function() {
        alert('hello world')
    }
}
