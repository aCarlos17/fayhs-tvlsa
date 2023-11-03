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

document.getElementById('close').onclick = function() {
    document.getElementById('tos').style.display = "none"
}

var agree = document.getElementById('tos-agree')
var disagree = document.getElementById('tos-disagree')

document.getElementById('start-tos').onclick = function() {
    alert('to pages/start ' +  'you go.')
}