//get width and height of window
var oldWidth = window.innerWidth;
var oldHeight = window.innerHeight;

//variable to count window
var windowCounter=1;

//call this function everytime page size changes (will get called a lot)
$(window).ready(function () {
    
    //measure width and height after page change
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    
    //update numbers on page
    $("#var1").html(newWidth);
    $("#var2").html(newHeight);
    
    //if new width is more than 300 pixels larger/smaller than initial...open new window
    //change 300 to change interval
    //Math.abs= absolute value: ex Math.abs(-3)=3
    // if (Math.abs(newWidth-oldWidth) > 900) {
        
        //open window code
        var myWindow2 =window.open("sky/img01.html","_blank","width=1400,height=800");
       myWindow2.focus();
       
        // var myWindow5 =window.open("img08.html","_blank","width=1200,height=800");
        // myWindow5.focus();
    
      
       
        var myWindow3 =window.open("sky/img04.html","_blank","width=1000,height=600");
        myWindow3.focus();
      
        // var myWindow4 =window.open("img05.html","_blank","width=1400,height=400");
        // myWindow4.focus();
     
     
        // var myWindow4 =window.open("img07.html","_blank","width=1400,height=200");
        // myWindow4.focus();

        
      
     
        //  var myWindow6 =window.open("img09.html","_blank","width=500,height=400");
        // myWindow6.focus();
           var myWindow7 =window.open("sky/img06.html","_blank","width=800,height=800");
        myWindow7.focus();
     var myWindow4 =window.open("sky/img10.html","_blank","width=1400,height=300");
        myWindow4.focus();
       // var myWindow3 =window.open("img03.html","_blank","width=600,height=550");
       //  myWindow3.focus();
     var myWindow7 =window.open("sky/img13.html","_blank","width=300,height=800");
        myWindow7.focus();
           var myWindow2 =window.open("sky/img02.html","_blank","width=100,height=800");
       myWindow2.focus();
      
        // var myWindow7 =window.open("img11.html","_blank","width=1300,height=150");
        // myWindow7.focus();
        //   var myWindow7 =window.open("img12.html","_blank","width=200,height=500");
        // myWindow7.focus();
        //update number of windows open
        $("#var3").html(windowCounter);
        windowCounter++;
        
        //update comparison width...important!
        oldWidth=newWidth;
    
    
    //same thing with height
    //opens window every 200 pixels
    // if (Math.abs(newHeight-oldHeight) > 200) {
        
      
        
        
       
    
      
        
        
    //     $("#var3").html(windowCounter);
    //     windowCounter++;
        
    //     oldHeight=newHeight;
        
    // }


    
    
    
});
