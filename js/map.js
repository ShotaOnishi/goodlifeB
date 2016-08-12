var Map = function() {
    var canvas = document.getElementById('map-canvas');
    var map = null;
    var bounds = null;
    var circles=null;
    var laln=0;
    var getIdoSW=0;
    var getIdoNE=0;
    var getKeidoSW=0;
    var getKeidoNE=0;

    var init_map = function() {
        map = new google.maps.Map(
            canvas,
            {
                zoom: 10,
                center: new google.maps.LatLng(35.7, 139.7),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                minZoom: 5,
                zoomControl:true,
                zoomControlOptions:{
                  position: google.maps.ControlPosition.LEFT_TOP ,
                  style: google.maps.ZoomControlStyle.LARGE ,
                }
            });
            map.addListener('click', function(e) {
            //if(circles[0]!=null)deleteCircle();
            //laln=e.latLng;
            if(circles==null)getLatLng(e.latLng, map);
        });
        
        
    }
    
    
    
    var getLatLng=function(lat_lng, map){
        var latlng = new google.maps.LatLng( lat_lng.lat() , lat_lng.lng() ) ;
        
        var circleOption={
            center:latlng,
            radius:2500,
            map:map,
            clickable: true ,
            draggable: false ,		// ドラッグ操作
            editable: true ,
        };
        circles = new google.maps.Circle( circleOption ) ;
        
        getIdoSW=circles.getBounds().getSouthWest().lat();
    getKeidoSW=circles.getBounds().getSouthWest().lng();
    getIdoNE=circles.getBounds().getNorthEast().lat();
     getKeidoNE=circles.getBounds().getNorthEast().lng();
        
        google.maps.event.addListener(circles,'center_changed', function() {
            getIdoSW=circles.getBounds().getSouthWest().lat();
    getKeidoSW=circles.getBounds().getSouthWest().lng();
    getIdoNE=circles.getBounds().getNorthEast().lat();
     getKeidoNE=circles.getBounds().getNorthEast().lng();
            console.log(circles.getBounds().getSouthWest().lat()+","+circles.getBounds().getSouthWest().lng());
        });
        
        google.maps.event.addListener(circles,'radius_changed', function() {
            getIdoSW=circles.getBounds().getSouthWest().lat();
    getKeidoSW=circles.getBounds().getSouthWest().lng();
    getIdoNE=circles.getBounds().getNorthEast().lat();
     getKeidoNE=circles.getBounds().getNorthEast().lng();
            console.log(getKeidoNE);
        });
        //getC=circles[0].getBounds();
        google.maps.event.addListener(circles,'rightclick', function()
	{
		circles.setMap(null) ;
        circles=null;
        getIdoSW=0;
        getIdoNE=0;
        getKeidoSW=0;
        getKeidoNE=0;
	});
        
    }
    
    
    
    this.IdoSW = function() {return getIdoSW;};
    this.IdoNE = function() {return getIdoNE;};
    this.KeidoSW=function() {return getKeidoSW;};
    this.KeidoNE=function() {return getKeidoNE;};
    
    /*this.getCircle=function(){
        return circles[0].getBounds();
    };*/
    
    this.getMap = function() {return map;};
    this.getBounds = function() {return bounds;};
    this.getZoom = function() {return map.getZoom();};
    this.setZoom = function(i) {return map.setZoom(i);};
    this.setCenter = function(i){return map.setCenter(i);};

    init_map();
};
