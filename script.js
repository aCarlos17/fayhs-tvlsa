document.getElementById('start-top').onclick = function() {
    document.getElementById('tos').style.display = "block"

    document.getElementsByName('tos-agree-choice')[0].checked = false
    document.getElementsByName('tos-agree-choice')[1].checked = false
}

document.getElementById('start-bottom').onclick = function() {
    document.getElementById('tos').style.display = "block"

    document.getElementsByName('tos-agree-choice')[0].checked = false
    document.getElementsByName('tos-agree-choice')[1].checked = false
}

var agree = document.getElementById('tos-agree')
var disagree = document.getElementById('tos-disagree')