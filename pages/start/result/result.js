//bars
let prog = document.getElementById('one')
let cook = document.getElementById('two')
let tour = document.getElementById('three')
let anme = document.getElementById('four')

//to be changed
let desc = document.getElementById('strand-description')
let strand = document.getElementById('strand-title')
let img = document.getElementById('strand-img')

//strand img
let prog_img = '../../../images/programming.png'
let cook_img = '../../../images/cookery.png'
let tour_img = '../../../images/tourism-promotion-services.png'
let anme_img = '../../../images/animation.png'

// img.src = prog_img <--- an example on how to change img using js

img.src = prog_img

//strand title
let prog_title = "<h2>Programming</h2><h3>Information Communications Technology (ICT)</h3>"
let cook_title = "<h2>Cookery</h2><h3>Home Economics (HE)</h3>"
let tour_title = "<h2>Tourism Promotion Services</h2><h3>Home Economics (HE)</h3>"
let anme_title = "<h2>Animation</h2><h3>Information Communications Technology (ICT)</h3>"

// strand.innerHTML = prog_title <--- an example of how to change text using js

strand.innerHTML = prog_title

//strand description
let prog_desc = "This strand teaches an introduction to HTML5, CSS3, and JavaScript. This will help gain basic HTML5/CSS3/JavaScript programming skills, and is an entry point into both the Web application and Windows Store apps training paths. The course focuses on using HTML5/CSS3/JavaScript to implement programming logic, define and use variables, perform looping and branching, develop user interfaces, capture and validate user input, store data, and create well-structured application. Further, this unit covers the skills, knowledge, and attitude required in developing HTML5 Websites. Students will also learn to develop Windows forms using VB.NET and .NET Framework 4.5 tools and technologies. The focus will be on coding activities that enhance the performance and scalability of the Web site application. ASP.NET MVC will be introduced and compared with Web Forms so that students know when each should/could be used."
let cook_desc = ""
let tour_desc = ""
let anme_desc = ""

desc.innerHTML = prog_desc