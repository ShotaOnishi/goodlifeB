var Pin = function(budata, map, click_callback, click_callback2) {
    var latlng = new google.maps.LatLng(budata.ido, budata.keido);
    var marker = null;
    var popup = null;

    var chinryo_data=
    {
    "東京都足立区":75681,
    "東京都荒川区":88609,
    "東京都板橋区":71655,
    "東京都江戸川区":70270,
    "東京都太田区":83760,
    "東京都葛飾区":81189,
    "東京都北区":81175,
    "東京都江東区":91716,
    "東京都品川区":107705,
    "東京都渋谷区":130368,
    "東京都新宿区":96428,
    "東京都杉並区":120595,
    "東京都墨田区":82525,
    "東京都世田谷区":157858,
    "東京都台東区":94071,
    "東京都中央区":107585,
    "東京都千代田区":119649,
    "東京都豊島区":82769,
    "東京都中野区":109880,
    "東京都練馬区":87983,
    "東京都文京区":98091,
    "東京都港区":146704,
    "東京都目黒区":147950
    };//23区の平均家賃

    var heikin =101487;
    for(var i in chinryo_data){
        if(budata.jusho_full_text.indexOf(i)!=-1){
            heikin=chinryo_data[i];
        }else{
        }
    }//検索結果から平均家賃の導出
    //console.log(heikin)
    var elem = document.getElementById("mean");
    elem.innerText=("平均賃金："+heikin);
    var button = document.getElementById("change-button");
    button.classList.remove("button-close");
    button.classList.add("button-open");

    var make_anime = function(chinryo){
      if(budata.chinryo+5000<=heikin){
      marker.setAnimation(google.maps.Animation.BOUNCE)
    }else{
      }
    }

    var make_marker = function(chinryo) {
        if(budata.chinryo+5000<=heikin){
          var data1=document.getElementById( "wari1" ).innerHTML;
          data1++;
          document.getElementById( "wari1" ).innerHTML = data1;
        marker = new google.maps.Marker({
            map: map.getMap(),
            position: latlng,
            icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|7FFF00|13|_|安',
            label:{fontSize:'0px',text:"安"},
            zIndex: 100

        });
      }else if(budata.chinryo-5000>=heikin){
        var data2=document.getElementById( "wari2" ).innerHTML;
        data2++;
        document.getElementById( "wari2" ).innerHTML = data2;
            marker = new google.maps.Marker({
            map: map.getMap(),
            position: latlng,
            icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|FF8AFF|13|_|高',
            label:{fontSize:'0px',text:"高"},
            zIndex: 100

        });
      }else{
        var data3=document.getElementById( "wari3" ).innerHTML;
        data3++;
        document.getElementById( "wari3" ).innerHTML = data3;
              marker = new google.maps.Marker({
              map: map.getMap(),
              position: latlng,
              icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|FFFF00|13|_|中',
              label:{fontSize:'0px',text:"中"},
              zIndex: 100
          });
        }


        google.maps.event.addListener(marker , 'mouseover' , function(){
          var bukken_html = createHTML(budata);
          click_callback(budata.guid, bukken_html);

            if (popup == null) {
                make_popup();
            }
            popup.open(map.getMap(), marker);
            var mark=marker.getLabel();
            if(mark.text=='高'){

            marker.setOptions({
              icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=1.5|0|FF8AFF|13|_|高',
            });
          }else if(mark.text=='安'){
            marker.setOptions({
              icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=1.5|0|7FFF00|13|_|安',
            });
          }else if(mark.text=="中"){
            marker.setOptions({
              icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=1.5|0|FFFF00|13|_|中',
            });
          }else {
            marker.setOptions({
              icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=1.5|0|00FFFF|13|_|済',
            });

          }

        });
        //var elem = document.getElementById("mean");
        //elem.innerText=("平均賃金："+heikin);
    }
    var make_popup = function () {
        var text = "";
        text += "賃料: " + budata.chinryo + "円<br>";
        if (budata.kotsu_ensen_eki_1!=null && budata.kotsu_ekitoho_1!=null) {
            text += "最寄り駅: " + budata.kotsu_ensen_eki_1;
            text += "(" + Math.floor(budata.kotsu_ekitoho_1) + "分)"+"<br>";
        };
        if(budata.heya_kukaku_number!=null)
        {
          text +="部屋番号：" + budata.heya_kukaku_number + "号室";
        }
        popup = new google.maps.InfoWindow( {
            content: text,
            position: latlng,
        });
        google.maps.event.addListener(marker , 'mouseout' , function(){
            popup.close();


            var mark=marker.getLabel();
            if(mark.text=='高'){

            marker.setOptions({
              icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|FF8AFF|13|_|高',
            });
          }else if(mark.text=='安'){
            marker.setOptions({
              icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|7FFF00|13|_|安',
            });
          }else if(mark.text=='中'){
            marker.setOptions({
              icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|FFFF00|13|_|中',
            });
          }else{
            marker.setOptions({
              icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.5|0|00FFFF|13|_|済',
            });
          }

        });

        google.maps.event.addListener(marker , 'click' , function(){
            var bukken_html = createHTML(budata);
            click_callback2(budata.guid, bukken_html);
            marker.setIcon('http://chart.apis.google.com/chart?chst=d_map_spin&chld=1.5|0|00FFFF|13|_|済');
            marker.setLabel({
              fontSize:'0px',text:"済"
            });
        });
        google.maps.event.addListener(marker,'rightclick',function(){
          //map.setCenter(event.latLng);
          //map.setZoom(15);
          var index = marker.getZIndex()
          //alert(index);
          marker.setZIndex(index-1);
          //var index2 = marker.getZIndex()
          //alert(index2);
        });

    }
    this.show = function() {
        if (marker == null) {
            make_marker();
            make_anime();
        }
　　　　　make_anime();
        marker.setVisible(true);
    };
    this.hide = function() {
        if (marker != null) {
            marker.setVisible(false);
        }
    };
    this.lat = function() {
        return latlng.lat();
    }
    this.lng = function() {
        return latlng.lng();
    }
    this.del = function() {
        if (marker) {
            marker.setMap(null);
            delete marker;
        }
        if (popup) {
            popup.setMap(null);
            delete popup;
        }
    }
    this.heikin = function(){
      return heikin;
    }


};
