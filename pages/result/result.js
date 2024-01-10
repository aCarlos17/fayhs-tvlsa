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
let anme_desc = "The Animation strand of Flora A. Ylagan High School will equip the learners with the competencies they need in preparation for careers in computer animation, multimedia, and special effects for film, television, and video production. The topics in this strand range from the proper usage and maintenance of tools, equipment, and paraphernalia that are specified within the specialised field, basic drawing to digital illustration and animation, and producing cleaned-up and in-between drawings in both production and post-production stages."

//Why [strand]?
let why_prog = "Why Programming?"
let why_cook = "Why Cookery?"
let why_tour = "Why Tourism Promotion Services?"
let why_anme = "Why Animation?"

//Reasoning
let prog_cuz = "<p>Based on your survey responses, the Programming strand could be a promising path for you to explore due to the strand aligning to your competencies and interests. Your strong problem-solving abilities, demonstrated by your adeptness at analyzing problems and identifying root causes, as well as consistently coming up with creative and effective solutions, are crucial in programming. Your skill in conveying complex ideas and information clearly is invaluable in this field, especially when working in teams or explaining your solutions to others.</p><p>Your confidence in applying mathematical principles to solve problems is a significant asset in programming. Your interest and proficiency in using the latest technologies, along with your intrigue about how things like video games are made, suggest a passion for the tech field that will drive you to continuously learn and adapt.</p><p>Your focus on high-quality standards, identifying and addressing quality issues, and being detail-oriented and patient with your projects are traits that will help you excel in programming. Your composure when faced with unfamiliar options on your device shows your adaptability, a valuable trait in the ever-evolving tech world.</p><p>Your active seeking of opportunities to improve work processes and procedures aligns with the constant evolution and optimization in programming. Finally, your interest in creating products that enhance productivity resonates with the goals of programming. However, it’s important to remember that while these traits and interests align well with the field of programming, the final decision should be based on your passion and long-term career goals.</p><p>Exploring different fields and gaining a variety of experiences can also be beneficial. So, while Programming could be a great fit, it’s just one of many paths you might consider.</p>"
let cook_cuz = "<p>Based on your survey responses, the Cookery strand could be a promising path for you to explore due to the strand aligning to your competencies and interests. Your enjoyment in experimenting with diverse processes and techniques, comfort in using a variety of tools and equipment, and awareness about the nutritional content of food align well with the demands of cookery. You find joy and fulfillment in preparing dishes, and you’re skilled at assembling various components to create a complete product.</p><p>Your comfort in following precise instructions and willingness to invest time in practicing and perfecting your skills demonstrate your dedication to the craft. The ability to work under pressure and in a fast-paced environment, as well as your comfort in working in a team, are crucial in a busy kitchen setting.</p><p>Your familiarity with safety and sanitation techniques ensures a safe and hygienic cooking environment. Your confidence in adapting instructions based on available resources shows your flexibility and resourcefulness. Your desire to improve your experience in preparing dishes indicates your passion for continuous learning in the field of cookery.</p><p>Lastly, your ability to work in a hot environment with little to no stress and efficiency in managing multiple tasks simultaneously are vital in the dynamic environment of a kitchen. However, it’s important to remember that while these traits and interests align well with the field of cookery, the final decision should be based on your passion and long-term career goals.</p><p>Exploring different fields and gaining a variety of experiences can also be beneficial. So, while Cookery could be a great fit, it’s just one of many paths you might consider.</p>"
let tour_cuz = "<p>Based on your survey responses, the Tourism Promotion Services strand could be a promising path for you to explore due to the strand aligning to your competencies and interests. Your comfort with operating computers and managing data, coupled with your basic knowledge of using smartphones and computers, will be beneficial in researching and organizing information related to tourism. Your ability to find and share information about different places aligns with the nature of tourism promotion, which involves showcasing the best features of various destinations. Your understanding and interpretation of various topics will help you grasp the diverse aspects of tourism, from cultural nuances to logistical details.</p><p>Your effective communication skills, both written and verbal, are crucial in promoting tourism services and interacting with clients or colleagues. Your proficiency in performing routine tasks and completing assignments on time demonstrates your ability to handle the administrative aspects of tourism promotion. Your understanding of basic mathematical processes will come in handy when dealing with budgets, pricing, and other numerical aspects of tourism services.</p><p>Your ability to relate to a diverse group of people, respect cultural differences, and connect with others on a personal level are qualities that are highly valued in the tourism industry, which is all about people and experiences. Your persuasive skills and ability to create a sense of trust will be valuable in convincing potential tourists of the merits of different destinations. Lastly, your dreams of traveling to different places or countries show your passion for travel, which is the heart of a successful career in tourism. However, it’s important to remember that while these traits and interests align well with the field of tourism promotion, the final decision should be based on your passion and long-term career goals.</p><p>Exploring different fields and gaining a variety of experiences can also be beneficial. So, while Tourism Promotion Services could be a great fit, it’s just one of many paths you might consider.</p>"
let anme_cuz = "<p>Based on your survey responses, the Animation strand could be a promising path for you to explore due to the strand aligning to your competencies and interests. Your ability to perform basic calculations and measurements, coupled with your talent for implementing ideas and imagination on paper, are key aspects of animation, as it involves bringing creative ideas to life. Your comfort with working overtime demonstrates your dedication and commitment, which are essential in animation projects that often require long hours. Your good sense of timing and spacing, along with your skill in expressing through illustration or drawing, are fundamental to creating animated characters and scenes that move smoothly and naturaly.</p><p>Your understanding of human and animal movement will allow you to create more lifelike animations. Your ability to create visual representations of ideas or concepts is at the heart of animation, which is all about visual storytelling. Your keen eye for detail and the ability to spot inconsistencies will ensure the quality and consistency of your animations.</p><p>Being able to visualize movements and transitions in your mind will help you plan and execute complex animation sequences. Your patience and willingness to spend time perfecting your work, along with your ability to maintain focus and concentration over long periods, are crucial in the meticulous process of animating seconds of scenes. Your comfort with repetitive tasks and not getting easily bored are beneficial in animation, which often involves creating numerous frames for a single scene.</p><p>Your openness to constructive criticism and using it to improve your work is a valuable trait in the iterative process of animation. Your interest in exploring different styles and techniques in visual representation will allow you to create diverse and innovative animations. Lastly, your ability to stay motivated and committed to a project until it is completed is essential in animation, which often involves long-term projects. However, it’s important to remember that while these traits and interests align well with the field of animation, the final decision should be based on your passion and long-term career goals.</p><p>Exploring different fields and gaining a variety of experiences can also be beneficial. So, while Animation could be a great fit, it’s just one of many paths you might consider.</p>"

//to be changed
let desc = document.getElementById('strand-description')
let strand = document.getElementById('strand-title')
let img = document.getElementById('strand-img')
let why = document.getElementById('why-strand')
let reasoning = document.getElementById('reasoning')

const values = [prog, anme, cook, tour]
const greatestValue = values.indexOf(Math.max(...values));

switch (greatestValue){
    case 0:
        desc.innerHTML = prog_desc
        strand.innerHTML = prog_title
        img.src = prog_img
        why.innerHTML = why_prog
        reasoning.innerHTML = prog_cuz
        break
    case 1:
        desc.innerHTML = anme_desc
        strand.innerHTML = anme_title
        img.src = anme_img
        why.innerHTML = why_anme
        reasoning.innerHTML = anme_cuz
        break
    case 2:
        desc.innerHTML = cook_desc
        strand.innerHTML = cook_title
        img.src = cook_img
        why.innerHTML = why_cook
        reasoning.innerHTML = cook_cuz
        break
    case 3:
        desc.innerHTML = tour_desc
        strand.innerHTML = tour_title
        img.src = tour_img
        why.innerHTML = why_tour
        reasoning.innerHTML = tour_cuz
        break
}