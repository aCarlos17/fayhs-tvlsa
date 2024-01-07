

let prog = 0
let tour = 0
let cook = 0 
let anim = 0

let questions =  {
    "programming" : 
        [
            "<h1>I am skilled in conveying complex ideas and information clearly to others.</h1><p>(Mahusay ako sa paghahatid ng mga kumplikadong ideya at impormasyon nang malinaw sa iba.)</p>",
            "<h1>I am adept at analyzing problems and identifying root causes.</h1><p>(Mahusay ako sa pagsusuri ng mga problema at pagtukoy sa mga pangunahing sanhi.)</p>",
            "<h1>I consistently come up with creative and effective solutions to given challenges.</h1><p>(Palagi akong nakakaisip ng mga malikhain at epektibong solusyon sa mga ibinibigay na mga hamon.)</p>",
            "<h1>I actively seek out opportunities to improve work processes and procedures.</h1><p>(Aktibo akong naghahanap ng mga oportunidad upang mapabuti ang mga proseso at pamamaraan sa trabaho.)</p>",
            "<h1>I can handle unexpected challenges and solve problems efficiently.</h1><p>(Kaya kong harapin ang mga hindi inaasahang hamon at malutas ang mga problema nang mahusay.)</p>",
            "<h1>I am confident in my problem-solving abilities and my logical thinking.</h1><p>(Tiwala ako sa aking mga kakayahan sa paglutas ng problema at sa aking lohikal na pag iisip.)</p>",
            "<h1>I am confident in my ability to apply mathematical principles to solve problems.</h1><p>(Tiwala ako sa kakayahan kong gamitin ang mga prinsipyo sa matematika para malutas ang mga problema.)</p>",
            "<h1>I actively seek to stay updated on new, emerging technologies today and tomorrow.</h1><p>(Nananatili akong updated sa mga bago, umuusbong na teknolohiya ngayon at magpakailanman.)</p>",
            "<h1>I am proficient in using the latest technologies.</h1><p>(Kaya kong gumamit ng mga pinakabagong teknolohiya.)</p>",
            "<h1>I am patient and detail-oriented when it comes to my tasks or projects.</h1><p>(Matiyaga ako at detalyado pagdating sa aking mga gawain o proyekto.)</p>",
            "<h1>I am proficient in identifying and addressing quality issues in my tasks.</h1><p>(Ako ay bihasa sa pagtukoy at pagtugon sa mga isyu sa kalidad sa aking mga gawain.)</p>",
            "<h1>I take pride in delivering work that consistently meets high-quality standards.</h1><p>(Ipinagmamalaki ko ang paghahatid ng mga resulta na palaging nakakatugon sa matataas na pamantayan sa kalidad.)</p>",
            "<h1>I am intrigued by things such as technology or how games are made.</h1><p>(Naiintriga ako sa mga bagay tulad ng teknolohiya o kung paano ginagawa ang mga video games.)</p>",
            "<h1>The thought of creating products that would ease productivity interests me.</h1><p>(Ang pag iisip ng paglikha ng mga produkto na magpapagaan sa produktibidad ay nakakainteresado sa akin.)</p>",
            "<h1>I keep my composure when faced with unfamiliar buttons or options on my device.</h1><p>(Kalmado ako kapag mayroong mga hindi pamilyar na buttons o options sa aking device.)</p>"
        ],

    "tourism" :
        [
            "<h1>I am comfortable operating a computer that handles and manages data.</h1><p>(Komportable ako sa paggamit ng isang computer na humahawak at namamahala ng data.)</p>",
            "<h1>I can easily find and share information about different places.</h1><p>(Madali akong makahanap at makapagbahagi ng impormasyon tungkol sa iba't ibang lugar.)</p>",
            "<h1>I am capable of understanding and interpreting information about various topics.</h1><p>(May kakayahan akong umunawa at magpakahulugan ng impormasyon tungkol sa iba't ibang paksa.)</p>",
            "<h1>I am able to effectively communicate either through written or through verbal.</h1><p>(Kaya kong makipag-usap o makipag-halubilo sa pamamagitan ng pasulat o sa pamamagitan ng pagsasalita.)</p>",
            "<h1>I can perform routine school tasks following simple instructions.</h1><p>(Kaya kong gawin ang mga karaniwang gawain sa paaralan na sumusunod sa mga simpleng tagubilin.)</p>",
            "<h1>I have a basic understanding of mathematical processes such as addition, subtraction, multiplication, and division.</h1><p>(Mayroon akong pangunahing pag-unawa sa mga prosesong matematika tulad ng pagdaragdag, pagbabawas, pagpaparami, at paghahati.)</p>",
            "<h1>I am able to relate to a diverse group of people in school.</h1><p>(Nagagawa kong makipag-ugnayan sa mga iba't ibang grupo ng tao sa eskwelahan.)</p>",
            "<h1>I am good when it comes to persuading people on different topics.</h1><p>(Magaling ako pagdating sa paghihikayat sa mga tao tungkol sa iba't ibang paksa.)</p>",
            "<h1>I can create a sense of trust when conversing with other people.</h1><p>(Kaya kong makapagunlad ng tiwala sa aking pakikipag-ugnayan sa iba.)</p>",
            "<h1>I respect and acknowledge the cultural differences and beliefs of others.</h1><p>(Iginagalang at kinikilala ko ang mga pagkakaiba sa kultura at paniniwala ng iba.)</p>",
            "<h1>I find it easy to connect to other people on a personal level.</h1><p>(Madali akong kumonekta sa ibang tao sa isang personal na antas.)</p>",
            "<h1>I understand what other people want other than my own.</h1><p>(Naiintindihan ko kung anong gusto ng ibang tao maliban lang sa sarili ko.)</p>",
            "<h1>I can complete school-related documents or assignments on time or before the deadline.</h1><p>(Makukumpleto ko ang mga gawaing pang-eskwelahan sa itinakdang oras o bago pa doon.)</p>",
            "<h1>I have dreams about going to different places or different countries.</h1><p>(May mga pangarap akong pakapunta sa iba't ibang lugar o sa iba't ibang bansa.)</p>",
            "<h1>I have a basic knowledge on how to use smartphones, computers, and such.</h1><p>(Mayroon akong pangunahing kaalaman sa paggamit ng mga smartphone, computer, at iba pa.)</p>"
        ],

    "animation" :
        [
            "<h1>I can perform basic calculations and basic measuring.</h1><p>(Kaya kong magsagawa ng mga pangunahing kalkukasyon at pagsukat.)</p>",
            "<h1>I can implement my ideas and imagination on paper.</h1><p>(Kaya kong ilipat yung mga ideya at imahinasyon ko sa papel.)</p>",
            "<h1>I am comfortable working over time.</h1><p>(Komportable akong gumawa ng mga gawain kahit lipas oras na.)</p>",
            "<h1>I have a good sense of timing and spacing.</h1><p>(Mayroon akong ideya patungkol sa timing at distansiya.)</p>",
            "<h1>I am good at expressing when it comes to illustration or drawing.</h1><p>(Magaling akong mag-pahayag pagdating sa pagguhit.)</p>",
            "<h1>I have a good understanding of human and animal movement.</h1><p>(Mayroon akong pang-unawa sa galaw ng mga tao o hayop.)</p>",
            "<h1>I can create visual representations of ideas or concepts.</h1><p>(Kaya kong lumikha ng mga visual na representasyon mg mga ideya o konsepto.)</p>",
            "<h1>I have a keen eye for detail and can easily spot inconsistencies.</h1><p>(Matalas ang mata ko pagdating sa mga detalye at madali kong makikita ang mga hindi pagkakapare-pareho.)</p>",
            "<h1>I can easily visualize movements and transitions in my mind.</h1><p>(Madali kong na-visualize ang mga galaw at transisyon sa aking isipan.)</p>",
            "<h1>I am patient and can spend a lot of time perfecting a piece of work.</h1><p>(Matiyaga ako at naglalaan ako ng maraming oras sa pag-perpekto ng isang piraso.)</p>",
            "<h1>I am able to maintain focus and concentration over long periods of time.</h1><p>(Nagagawa kong mapanatili ang konsentrasyon ko sa mahabang oras.)</p>",
            "<h1>I am comfortable with repetitive tasks and do not easily get bored.</h1><p>(Komportable ako sa mga paulit-ulit na gawain at hindi ako madaling magsawa.)</p>",
            "<h1>I am able to take constructive criticism and use it to improve my work.</h1><p>(Tumatanggap ako ng kritisismo sa aking gawain at nagagamit ko ito upang mapabuti pa ang mga gagawin ko sa hinaharap.)</p>",
            "<h1>I am interested in exploring different styles and techniques in visual representation.</h1><p>(Interesado ako sa mga iba't ibang pamamaraan sa visual na representasyon.)</p>",
            "<h1>I am able to stay motivated and committed to a project until it is completed.</h1><p>(Nakakaya ko na manatiling motivated at nakatuon sa isang proyekto hanggang sa matapos iyon.)</p>"
        ],

    "cookery" :
        [
            "<h1>I enjoy experimenting with diverse processes and techniques.</h1><p>(Nasisiyahan akong mag-eksperimento sa magkakaibang proseso at pamamaraan.)</p>",
            "<h1>I am comfortable using a variety of tools and equipment.</h1><p>(Komportable akong gumamit ng iba't ibang kagamitan.)</p>",
            "<h1>I am wary about the nutritional content of the food I eat.</h1><p>(Maingat ako pagdating sa nutritional content ng mga kinakain ko.)</p>",
            "<h1>I find the process of preparing dishes enjoyable and fulfilling.</h1><p>(Kasiya-siya saakin ang proseso ng paghahanda ng pagkain.)</p>",
            "<h1>I am skilled at assembling various components to create a complete product.</h1><p>(Bihasa ako sa pagsasama-sama ng iba't ibang mga bagay-bagay upang lumikha ng isang kumpletong produkto.)</p>",
            "<h1>I am comfortable following precise instructions.</h1><p>(Komportable ako na sumunod sa mga tumpak na tagubilin.)</p>",
            "<h1>I am willing to invest time in practicing and perfecting my skills.</h1><p>(Handa akong maglaan ng oras sa pagsasanay at pagperpekto ng aking mga kasanayan.)</p>",
            "<h1>I am comfortable working under pressure.</h1><p>(Komportable akong magtrabaho sa mga nakababahalang kondisyon.)</p>",
            "<h1>I am comfortable working in a team.</h1><p>(Komportable akong magtrabaho sa isang pangkat.)</p>",
            "<h1>I am comfortable working in a fast-paced environment.</h1><p>(Komportable akong magtrabaho sa isang kapaligiran na mabilisan yung mga gawain.)</p>",
            "<h1>I am familiar with safety and sanitation techniques.</h1><p>(Pamilyar ako sa mga pamamaraan ng kaligtasan at kalinisan.)</p>",
            "<h1>I am confident in my ability to adapt instructions based on available resources.</h1><p>(May tiwala ako sa aking kakayahang umangkop ang mga tagubilin batay sa anong mayroon na mga mapagkukunan ang magagamit.)</p>",
            "<h1>I want to improve my experience in preparing dishes.</h1><p>(Gusto kong pagbutihin ang aking karanasan sa paghahanda ng mga pagkain.)</p>",
            "<h1>I can work in a hot environment with little to no stress.</h1><p>(Kaya kong magtrabaho sa isang mainit na kapaligiran na hindi na-stress ng mabilisan.)</p>",
            "<h1>I am efficient in going back and forth between different tasks.</h1><p>(Mahusay ako pagdating sa multitasking.)</p>"
        ]    
}


// This is a class that gatheres all the values and turn in 
// into a variable
 
class Variables {
    constructor() {
        this.checkbox = document.getElementsByName('radio');
        this.nextbutton = document.getElementById('button');
    }
} let myvariables = new Variables()

class EventJanitor {
    constructor() {
        this.flag = 0;
        this.number_of_boxes = 5;
        this.radioValue = 0;
        this.strand = Object.keys(questions);
    }

    check_select() {
        for (this.flag; this.flag < this.number_of_boxes; this.flag++) {
            if (myvariables.checkbox[this.flag].checked == true) {
                this.radioValue = this.flag;

                switch (this.radioValue) {
                    case 4:
                        switch (this.strand[this.flag]) {
                            case "programming":
                                prog += 4;
                                break;
                            case "tourism":
                                tour += 4;
                                break;
                            case "animation":
                                anim += 4;
                                break;
                            case "cookery":
                                cook += 4;
                                break;
                        }
                        break;
                    case 3:
                        switch (this.strand[this.flag]) {
                            case "programming":
                                prog += 3;
                                break;
                            case "tourism":
                                tour += 3;
                                break;
                            case "animation":
                                anim += 3;
                                break;
                            case "cookery":
                                cook += 3;
                                break;
                        }
                        break;
                    case 2:
                        switch (this.strand[this.flag]) {
                            case "programming":
                                prog += 2;
                                break;
                            case "tourism":
                                tour += 2;
                                break;
                            case "animation":
                                anim += 2;
                                break;
                            case "cookery":
                                cook += 2;
                                break;
                        }
                        break;
                    case 1:
                        switch (this.strand[this.flag]) {
                            case "programming":
                                prog += 1;
                                break;
                            case "tourism":
                                tour += 1;
                                break;
                            case "animation":
                                anim += 1;
                                break;
                            case "cookery":
                                cook += 1;
                                break;
                        }
                        break;
                }
            }
        }

        this.flag = 0;
    }

    clean_select() {
        for (this.flag; this.flag < this.number_of_boxes; this.flag++) {
            myvariables.checkbox[this.flag].checked = false;
        }

        this.flag = 0;
    }
}

let eventjanitor = new EventJanitor();


class questionEvent {
    constructor() {
        // this.current_question = questions[random_tag][random_index]
        this.question_is = document.getElementById('question');
    }
} let question_event = new questionEvent()

function random_pick() {

    // Code generated from Bing AI

    // Get an array of the keys in the object
    let strand = Object.keys(questions);
    // Check if the object is empty
    if (strand.length == 0) {
      // If so, print a message and return
      myvariables.nextbutton.innerHTML = "See Results";
      return;
    }
    // Otherwise, pick a random key from the array
    let randomKey = Math.floor(Math.random() * strand.length);
    // Get the array of values corresponding to the key
    let values = questions[strand[randomKey]];
    // Pick a random index from the array
    let randomIndex = Math.floor(Math.random() * values.length);
    // Get the value at the random index
    let randomValue = values[randomIndex];
    
    // Remove the value from the array using splice
    values.splice(randomIndex, 1);
    // Check if the array is empty
    if (values.length == 0) {
        // If so, delete the key from the object
        delete questions[strand[randomKey]];
    }

    return randomValue;
}

eventjanitor.clean_select()

question_event.question_is.innerHTML = random_pick(questions)

myvariables.nextbutton.onclick = function() {
    if (myvariables.nextbutton.innerHTML == "See Results") {
        
    }
    else {
        eventjanitor.check_select();
        eventjanitor.clean_select();
        
        question_event.question_is.innerHTML = random_pick(questions)
    }

    
}


// Call this function when needed, such as after checking the selections
// and before updating the next question.
