
type("desc", "Upper Second-Class Bachelor of Science in Computing",50, 500);
type("t1", "Projects", 100, 1000);
type("t2", "Skills", 100, 1500);
type("t3", "Contact", 100, 2000);

//Fade on scroll logic

var div = [
    "#projects",
    "#skills",
    "#contact"
    ];

var reveal = [
       //'.projects-reveal',
       '.skills-reveal',
       '.contact-reveal'
      ];

$(document).scroll(function(){

/*Could be more efficient. The minus 200 assures the menu
will reveal slightly before it's completely visible*/

if($("#projects").offset().top - 200 < $(window).scrollTop()){
    $("#secondary-title-links").stop();

    $("#secondary-title-links").css({"width":"105px"});
}else{
    $(".title-links").stop();
    $(".title-links").fadeIn();
    $("#secondary-title-links").stop();

    $("#secondary-title-links").css({"width":"0px"});
}

    /* Once 'looked' less efficient before the for-loop.
    Unsure of it's performance, but it looks fairly neat */

    for(i=0;i<div.length;i++){

        if(isVisible(div[i])){
            $(reveal[i]).css({"opacity":"1"});
         } 

    }

});

if($("#projects").offset().top - 200 < $(window).scrollTop()){
    $("#secondary-title-links").stop();
    $("#secondary-title-links").css({"width":"105px"});
}else{
    $(".title-links").stop();
    $(".title-links").fadeIn();
    $("#secondary-title-links").stop();
    $("#secondary-title-links").css({"width":"0px"});
}

    for(i=0;i<div.length;i++){

        if(isVisible(div[i])){
            
            $(reveal[i]).css({"opacity":"1"});
        } 

    }


// Below code inspired / stolen from SO
// Credit: https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling


function isVisible(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    //The addition of the 200/-200 is for the offset
    return ((elemBottom <= docViewBottom + 200) && (elemTop  >= docViewTop - 200));
}


//handle logic for projects

function mouse(e){

    var x = e.pageX - 140;
    $(window).css({"cursor":"w-resize"});
    $(".left-panel").css({"width":x+"px"});

                //If handle is scrolled too far
            if($(".left-panel").width() > $("#projects").width() - 100){
                $(".left-panel").width($("#projects").width() - 100);
            }

   }
   
       $(".handle").mousedown(function(e){
             $(document).css({"cursor":"w-resize"});
             //Activates the mouse function on mousedown + mousemove
             $(document).mousemove(mouse);
       });
   
        $(document).mouseup(function() {
            //Cancels the mousemove function
            $(document).off("mousemove");
        });
    



//Ajax loading projects
$("#mesn").click(function(e){
    e.preventDefault();

    $('#load-content').load("mesn.html");

  });
  $("#ropa").click(function(e){
    e.preventDefault();

    $('#load-content').load("ropa.html");


  
  });
  $("#fear").click(function(e){
    e.preventDefault();

    $('#load-content').load("fear.html");

  });
  $("#typist").click(function(e){
    e.preventDefault();

    $('#load-content').load("typist.html");
    

  });