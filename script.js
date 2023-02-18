function openSlide() {
    document.getElementById("profile-slide").style.width = "200px";
    document.getElementById("open-slide").style.visibility = "hidden";
    setTimeout(function(){
        document.getElementById("close-slide").style.display = "block";
    },500);
   
}
function closeSlide() {
    document.getElementById("profile-slide").style.width = "0";
    document.getElementById("close-slide").style.display = "none";
    setTimeout(function(){
        document.getElementById("open-slide").style.visibility = "visible";
    }, 500);
    document.getElementById("close-slide").style.visibility = "visible";
}
// var aboutme = document.getElementById("aboutme")
// var projects = document.getElementById("projects")
// var skills = document.getElementById("skills")
// var contacts = document.getElementById("contacts")
// var resume = document.getElementById("resume")
var nav_btn = document.getElementsByClassName("nav_btn")

var xValues = ["Php", "Java", "Python", "HTML/CSS", "Javascript",""];
var yValues = [50, 55, 70, 80, 50,0];
var barColors = ["#8D9EFF","#dc143c","#F5EA5A","#FC7300","#FFC93C"];

var xValues2 = ["Node.js", "Django",""];
var yValues2 = [50,60,0];
var barColors2 = ["yellow","#205E61"];

const navlink = document.getElementsByClassName("nav_btn");
console.log(navlink);

const navigation = document.getElementById("navigation");
document.addEventListener("scroll", ()=>{
  var scroll_position = window.scrollY;
  if(scroll_position > 200){
    navigation.style.backgroundColor = "rgba(0,0,0,0.7)";
    for(var i=0; i<navlink.length; i++){
        navlink[i].style.color = "#fff";
    }
  }else{
    navigation.style.backgroundColor = "transparent";
    for(var i=0; i<navlink.length; i++){
      navlink[i].style.color = "#635e5e";
  }
  }
});

nav_btn[0].style.color = "#dc143c"


// aboutme.addEventListener("click", (e)=> {
//     e.preventDefault()
//     click(0,0)
// })
// projects.addEventListener("click", (e) => {
//     e.preventDefault()
//     click(971,1)

// })
// skills.addEventListener("click", (e) => {
//     e.preventDefault()
//     click((971*2),2)


// })
// contacts.addEventListener("click", (e) => {
//     e.preventDefault()
//     click((971*3),3)

// })
// resume.addEventListener("click", (e) => {
//     e.preventDefault()
//     click((971*4),4)

// })


const click = (x,index)=>{
    for(var i = 0; i <nav_btn.length; i++){
        nav_btn[i].style.color = "#2e3333"
    }
    window.scrollTo(x, 0)
    nav_btn[index].style.color = "#dc143c"
  };

// }
// window.addEventListener("wheel", (e) =>{
//     e.preventDefault();
//     window.scrollBy({ left:e.deltaY < 0 ? -75*12.6 : 75*12.6, });
// });


new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "My Progress"
    }
  }
});

new Chart("myChart2", {
    type: "doughnut",
    data: {
      labels: xValues2,
      datasets: [{
        backgroundColor: barColors2,
        data: yValues2
      }]
    },
    options: {
      title: {
        display: true,
        text: "My Progress"
      }
    }
  });