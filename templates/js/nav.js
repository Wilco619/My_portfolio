function openTop(){
    document.getElementById("top-nav").style.height = "350px";
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

  function getTop(){
    document.getElementById("main1").style.scrollBehavior = "smooth";
  }

  function lightMode(){

    setTimeout(function(){
    document.getElementById("main1").style.backgroundColor = "aliceblue"
    document.getElementById("main2").style.backgroundColor = "aliceblue"
    document.getElementById("main3").style.backgroundColor = "aliceblue"
    document.getElementById("main4").style.backgroundColor = "aliceblue"
    document.getElementById("main5").style.backgroundColor = "aliceblue"
    document.getElementById("main6").style.backgroundColor = "aliceblue"

    document.getElementById("togglebtn2").style.visibility = "hidden"
    document.getElementById("togglebtn").style.visibility = "visible"
    

    },400)
  }

  function  darkMode(){
    
    setTimeout(function(){
    document.getElementById("main1").style.backgroundColor = "darkslategrey"
    document.getElementById("main2").style.backgroundColor = "darkslategrey"
    document.getElementById("main3").style.backgroundColor = "darkslategrey"
    document.getElementById("main4").style.backgroundColor = "darkslategrey"
    document.getElementById("main5").style.backgroundColor = "darkslategrey"
    document.getElementById("main6").style.backgroundColor = "darkslategrey"

    
    document.getElementById("togglebtn").style.visibility = "hidden"
    document.getElementById("togglebtn2").style.visibility = "visible"
    
    },400)
  }
