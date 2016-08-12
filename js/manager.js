var Manager = function() {
    var map = new Map();
    var db = new DB();
    var controller = new Controller(map);
    var form_manager = new FormManager(map);
    var budatum_buffer = null;


    form_manager.setChange(
      function(){
        var bukken = document.getElementById("details");
        var bukken2 = document.getElementById("details2");
        if(bukken.classList.contains("details-in")){
        bukken.classList.remove("details-in");
        bukken.classList.add("button-close");
        bukken2.classList.remove("button-close");
        bukken2.classList.add("details-in");
      }else{
        bukken.classList.add("details-in");
        bukken.classList.remove("button-close");
        bukken2.classList.add("button-close");
        bukken2.classList.remove("details-in");
      }
      }
    );

    form_manager.setOption(
      function(){
        var option = document.getElementById("details1");
        var option3 = document.getElementById("details3");
        var option4 = document.getElementById("details4");
        var option5 = document.getElementById("details5");
        var option6 = document.getElementById("details6");
        var option7 = document.getElementById("details7");
        var option8 = document.getElementById("details8");
        var option9 = document.getElementById("details9")

        if(option.classList.contains("details-in")){
          option.classList.remove("details-in");
          option.classList.add("button-close");
          option8.classList.remove("details-in");
          option8.classList.add("button-close");
          option3.classList.remove("details-in");
          option3.classList.add("button-close");
          option4.classList.remove("details-in");
          option4.classList.add("button-close");
          option5.classList.remove("details-in");
          option5.classList.add("button-close");
          option6.classList.remove("details-in");
          option6.classList.add("button-close");
          option7.classList.remove("details-in");
          option7.classList.add("button-close");
          option9.classList.remove("details-in");
          option9.classList.add("button-close");
        }else {
          option.classList.add("details-in");
          option.classList.remove("button-close");
          option8.classList.add("details-in");
          option8.classList.remove("button-close");
          option3.classList.add("details-in");
          option3.classList.remove("button-close");
          option4.classList.add("details-in");
          option4.classList.remove("button-close");
          option5.classList.add("details-in");
          option5.classList.remove("button-close");
          option6.classList.add("details-in");
          option6.classList.remove("button-close");
          option7.classList.add("details-in");
          option7.classList.remove("button-close");
          option9.classList.add("details-in");
          option9.classList.remove("button-close");
        }
      }
    );


    form_manager.setSubmit(
        function() {
          document.getElementById( "wari1" ).innerHTML = 0;
          document.getElementById( "wari2" ).innerHTML = 0;
          document.getElementById( "wari3" ).innerHTML = 0;
            form_manager.setDisabled();
            db.setQuery(form_manager.getCond());
            budatum_buffer = db.getDatum();
            controller.postDatum(budatum_buffer);
            controller.update();
            form_manager.setAbled();
        }
    );
    form_manager.setAbled();

    google.maps.event.addListener(
        map.getMap(),
        'bounds_changed',
        function() {
            controller.update();
        }
    );
    google.maps.event.addListener(
        map.getMap(),
        'zoom_changed',
        function() {
            controller.update();
        }
    );
};

var manager = new Manager();
