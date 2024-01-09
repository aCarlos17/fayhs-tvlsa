// Retrieve URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get values
const prog = parseInt(urlParams.get('prog'))
const anme = parseInt(urlParams.get('anim'))
const tour = parseInt(urlParams.get('tour'))
const cook = parseInt(urlParams.get('cook'))

//bars
let prog_bar = document.getElementById('one')
let cook_bar = document.getElementById('two')
let tour_bar = document.getElementById('three')
let anme_bar = document.getElementById('four')

prog_bar.style.width = (((prog / 60) * 100) / 10) + "rem"
cook_bar.style.width = (((cook / 60) * 100) / 10) + "rem"
tour_bar.style.width = (((tour / 60) * 100) / 10) + "rem"
anme_bar.style.width = (((anme / 60) * 100) / 10) + "rem"

//strand img
let prog_img = '../../images/programming.png'
let cook_img = '../../images/cookery.png'
let tour_img = '../../images/tourism-promotion-services.png'
let anme_img = '../../images/animation.png'

//strand title
let prog_title = "<h2>Programming</h2><h3>Information Communications Technology (ICT)</h3>"
let cook_title = "<h2>Cookery</h2><h3>Home Economics (HE)</h3>"
let tour_title = "<h2>Tourism Promotion Services</h2><h3>Home Economics (HE)</h3>"
let anme_title = "<h2>Animation</h2><h3>Information Communications Technology (ICT)</h3>"

//strand description
let prog_desc = "The Programming strand of Flora A. Ylagan High School will equip the learners with the competencies to create and evaluate programs created from programming languages, concepts, and technologies. This strand will provide an introduction to HTML5 to create simple websites. On Grade 11, this strand will teach the basic fundamentals of programming with Visual Basic (VB.NET) to create simple Windows Forms applications. On Grade 12, the learners will expand on the fundamentals of programming with Oracle's Java Programming Language, branching onto the concepts of object-oriented programming."
let cook_desc = "The Cookery strand of Flora A. Ylagan High School will develop the knowledge, skills, and attitudes of the learner to perform basic tasks that is required in Cookery. The students that will be taking this course are expected to learn the proper usage and maintenance of tools, equipment, and paraphernelia that is specified within the specialized field, and learn the practice of Occupational Health and Safety Procedures (OHSP) to ensure proper food hygiene and to ensure the safety of the learner while they prepare dishes in the kitchen environment."
let tour_desc = "The Tourism Promotion Services strand of Flora A. Ylagan High School is designed to provide students with a comprehensive understanding of the tourism industry. Learners are expected to learn how to operate an Automated Information System (AIS) to. The course will also provide lessons to source and provide destination and information advice. This involves learning about various tourist destinations, their attractions, and how to effectively communicate this information to clients. Students will also be trained to access and interpret product information. Lastly, one of the key aspects of the course is teaching students how to effectively promote tourism products and services. This involves learning marketing and sales techniques specific to the tourism industry."
let anme_desc = "The Animation strand of Flora A. Ylagan High School will equip the learners with the competencies in preparation for careers in computer animation, multimedia, and special effects for film, television, and video production. The topics in this strand ranges from the proper usage and maintenance of tools, equipment, and paraphernelia that is specified within the specialized field, basic drawing to digital illustration and animation, and producing cleaned-up and in-between drawings in both production and post-production stages."

//to be changed
let desc = document.getElementById('strand-description')
let strand = document.getElementById('strand-title')
let img = document.getElementById('strand-img')

const values = [prog, anme, cook, tour]
const greatestValue = values.indexOf(Math.max(...values));

switch (greatestValue){
    case 0:
        desc.innerHTML = prog_desc
        strand.innerHTML = prog_title
        img.src = prog_img
        break
    case 1:
        desc.innerHTML = anme_desc
        strand.innerHTML = anme_title
        img.src = anme_img
        break
    case 2:
        desc.innerHTML = cook_desc
        strand.innerHTML = cook_title
        img.src = cook_img
        break
    case 3:
        desc.innerHTML = tour_desc
        strand.innerHTML = tour_title
        img.src = tour_img
        break
}