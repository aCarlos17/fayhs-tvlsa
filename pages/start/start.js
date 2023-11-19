let pScore = 0
let cScore = 0
let aScore = 0
let tScore = 0

let isChecked = document.getElementsByName('radio')

let programming = [
    "I am skilled in conveying complex ideas and information clearly to others.",
    "I am adept at analyzing problems and identifying root causes.",
    "I consistently come up with creative and effective solutions to given challenges.",
    "I actively seek out opportunities to improve work processes and procedures.",
    "I can handle unexpected challenges and solve problems efficiently.",
    "I am confident in my problem-solving abilities and my logical thinking.",
    "I am confident in my ability to apply mathematical principles to solve problems.",
    "I actively seek to stay updated on new, emerging technologies today and tommorow.",
    "I am proficient in using the latest technologies.",
    "I am patient and detail-oriented when it comes to my tasks or projects.",
    "I am proficient in identifying and addressing quality issues in my tasks.",
    "I take pride in delivering work that consistently meets high-quality standards.",
    "I am intrigued by things such as technology or how games are made.",
    "The thought of creating products that would ease productivity interests me.",
    "I keep my composure when faced with unfamiliar buttons or options on my device."
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
        
    })
    // detect if question is a programming question or what to increment to 0 or what's checked on variables on lines 1-4
    // replace Next to Result if all questions are checked
    // redirect to the respected result
    // idk, do whatever
});