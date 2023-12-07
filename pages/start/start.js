

class Variables {
    constructor() {
        this.isChecked = document.getElementsByName('radio')
        this.x = "SUCCESS"
    }
} let declareVariable = new Variables

let questions =  {
    "programming" : 
        [
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
        ],

    "tourism" :
        [
            "I respect cultural differences and beliefs of others.",
            "I can effectively persuade others with information that is provided to me.",
            "I have a basic knowledge on how to use phones, computers, and such.",
            "I know how to look for good legitimate information on the web and on other sources.",
            "I feel confident navigating digital tools.",
            "I am able to provide useful advice about directions and the like.",
            "I understand what other people want other than my own.",
            "I find it easy to connect to other people on a personal level.",
            "I can create a sense of trust when conversing with other people.",
            "I am good when it comes to persuading people on different topics."
        ],

    "animation" :
        [
            "I can perform basic calculations and basic measuring.",
            "I want to improve my drawing skills.",
            "I can implement my ideas and imaginations on paper.",
            "I have times where I sketch on my notebook whenever I'm bored.",
            "I am comfortable working over time.",
            "I have a good sense of timing and spacing.",
            "I am good at expressing when it comes to illustrating or drawing.",
            "I have a good understanding of human and animal movement."
        ],

        "cookery" :
        [
            "I want to improve my experience in preparing food.",
            "I want to learn the fundamentals of cooking, including hygiene standards.",
        ]    
}

class Checkmarks {

    check_select() {

        let x;

        for ( x = 0; x < 5; x++)
        {
            if (declareVariable.isChecked[x].checked == true)
            {
                break;
            }
        }

        switch (x) {
            
            case 0: alert(x); break; // SA
            case 1: alert(x); break; // A
            case 2: alert(x); break; // N
            case 3: alert(x); break; // D
            case 4: alert(x); break; // SD
        }
    }

    clean_select() {
        for (let x = 0; x < 5; x++)
        {
            declareVariable.isChecked[x].checked = false;
        }
    }
    
}  let Myclass = new Checkmarks; 

Myclass.clean_select();



// document.getElementById('button').addEventListener('click', function() {

//     declareVariable.Variables();
//     Myclass.check_select();
//     Myclass.clean_select();
    
// });

document.getElementById('button').onclick = function() {
    Myclass.check_select();
    Myclass.clean_select();
}


/* 
 detect if question is a programming question or what to increment to 0 or what's checked on variables on lines 1-4
 replace Next to Result if all questions are checked
 redirect to the respected result
 idk, do whatever
*/

// ----------------------------- result.html ----------------------------- //

let prog = document.getElementById('one')
let cook = document.getElementById('two')
let tour = document.getElementById('three')
let antn = document.getElementById('four')

prog.style.width = '5rem'