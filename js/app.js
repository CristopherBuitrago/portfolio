let visibleMenu = false;

// hide / show menu
function showHideMenu() {
    if(visibleMenu){
        document.getElementById("nav").classList="";
        visibleMenu = false;
    } else {
        document.getElementById("nav").classList="responsive";
        visibleMenu = true;
    }
}

function select(){
    // hide menu once selectioned an option
    document.getElementById("nav").classList="";
    visibleMenu = false;
}

// function htat aplies the animation to skills
function skillsEfect () {
    var skills = document.getElementById("skills");
    var skillDist = window.innerHeight - skills.getBoundingClientRect().top;
    if(skillDist >= 300) {
        let skill = document.getElementsByClassName("progress");
        skill[0].classList.add("java");
        skill[1].classList.add("mysql");
        skill[2].classList.add("postgres");
        skill[3].classList.add("figma");
        skill[4].classList.add("html");
        skill[5].classList.add("css");
        skill[6].classList.add("javascript");
        skill[7].classList.add("comunication");
        skill[8].classList.add("teamwork");
        skill[9].classList.add("creativity");
        skill[10].classList.add("attdetail");
        skill[11].classList.add("charisma");
        skill[12].classList.add("dedication");
        skill[13].classList.add("projmanag");
    }
}

// detect scroll to aply the animation
window.onscroll = function() {
    skillsEfect()
}