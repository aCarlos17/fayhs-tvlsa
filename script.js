let start = [document.getElementById('start-top'), document.getElementById('start-bottom'), document.getElementById('start-tos')]
let tosPrompt = document.getElementById('tos')
let tosAgree = document.getElementsByName('tos-agree-choice')

start[0].onclick = function() {
    tosPrompt.style.display = "flex"

    tosAgree[0].checked = false
    tosAgree[1].checked = false
}

start[1].onclick = function() {
    tosPrompt.style.display = "flex"

    tosAgree[0].checked = false
    tosAgree[1].checked = false
}

document.getElementById('close').onclick = function() {
    tosPrompt.style.display = "none"
}

let n

tosAgree[0].onclick = function() { n = 1 }
tosAgree[1].onclick = function() { n = 0 }

start[2].addEventListener('click', function(){
    if (n == 1) {
        window.location.href = "pages/start/start.html"
    }
    else if (n == 0) {
        tosPrompt.style.display = "none"
    }
})