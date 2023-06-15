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
function openTop(){
  document.getElementById("top-nav").style.height = "300px";
  document.getElementById("open-top-nav").style.visibility = "hidden";
  setTimeout(function(){
    document.getElementById("close-top-nav").style.visibility = "visible";
  },400)
}
function closeTop(){
  document.getElementById("top-nav").style.height = "0";
  document.getElementById("close-top-nav").style.visibility = "hidden";
  setTimeout(function(){
    document.getElementById("open-top-nav").style.visibility = "visible";
  },400);
}
function getLink() {
  document.getElementById("top-nav").style.height = "0";
  setTimeout(function(){
    document.getElementById("open-top-nav").style.visibility = "visible";
  },400);
  setTimeout(function(){
    document.getElementById("close-top-nav").style.visibility = "visible";
  },400)
}

var nav_btn = document.getElementsByClassName("nav_btn")

var xValues = ["C", "Java", "Python", "HTML/CSS", "Javascript",""];
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



const click = (x,index)=>{
    for(var i = 0; i <nav_btn.length; i++){
        nav_btn[i].style.color = "#2e3333"
    }
    window.scrollTo(x, 0)
    nav_btn[index].style.color = "#dc143c"
  };


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