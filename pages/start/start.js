let pScore = 0
let cScore = 0
let aScore = 0
let tScore = 0

let isChecked = document.getElementsByName('radio')

let programming = [
    "I am confident in my mathematical skills.",
    "I am intrigued by things such as technology or how games are made.",
    "I am confident in my problem-solving abilities and my logical thinking.",
    "I can easily understand and apply complex principles and concepts of anything at hand.",
    "I can explain my ideas and my thought process in a way that anyone can understand.",
    "The thought of creating products that would ease productivity interests me.",
    "I am open to learn new things outside of my current scope.",
    "I can easily implement and apply a broad concept, or a mechanic from an idea.",
    "I am patient and detail-oriented when it comes to my tasks or projects.",
    "",
    "",
    "",
    "",
    "",
    ""
]

let cookery = [
    "I want to improve my experience in preparing food.",
    "I want to learn the fundamentals of cooking, including hygiene standards.",
    "I am conscious of my cleanliness.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
]

let animation = [
    "I am interested in how drawings come to life.",
    "I want to improve my drawing skills.",
    "I want to learn how to create motion graphics for websites, video games, or visual effects.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
]

let tourism = [
    "I respect the cultural differences and beliefs of others.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
]

isChecked[0].checked = false;
isChecked[1].checked = false;
isChecked[2].checked = false;
isChecked[3].checked = false;
isChecked[4].checked = false;

document.getElementById('button').addEventListener('click', function() {
    alert("Hello");
    isChecked[0].checked = false;
    isChecked[1].checked = false;
    isChecked[2].checked = false;
    isChecked[3].checked = false;
    isChecked[4].checked = false;

    isChecked[0].addEventListener('click', function(){
        // switch-case detect if question is a programming question to increment to 0 on variables on lines 1-4
        // do so on [1-4]
        // maybe use a for loop
    })
});

// more questions needed, but all of the questions sent on messenger are ass.