// Mode Sombre

$("#flexSwitchCheckDefault").click(function(){
    if ($("body").hasClass("dark")){
      $("body").removeClass("dark");
    }
    else{
      $("body").addClass("dark");
    }
  });
