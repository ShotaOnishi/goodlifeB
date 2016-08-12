var Controller = function(map) {
    var map = map;
    var budatum = null;
    var pins = null;
    var heatmap = null;
    var mode = "heatmap";
    var pin_zoom_min = 13;

    var bukken_buff = [null, null, null];
    var bukken_buff2 = [null, null, null];

    this.setParam = function() {};
    this.postDatum = function(datum) {
        del_all();
        budatum = datum;
        make_pins();
        make_heatmap();
        mode = "";
    };

    var del_all = function() {
        if (pins != null) {
            for (var pin of pins) {
                pin.del();
                delete pin;
            }
            pins = null;
        }
        if (heatmap != null) {
            heatmap.del();
            delete heatmap;
            heatmap = null;
        }
    }

    this.update = function() {
        if (heatmap == null || pins == null) return;
        if (map.getZoom() < pin_zoom_min) {
            update_heatmap();
        } else {
            update_pin();
        }
    };
    var update_heatmap = function() {
        if (mode != "heatmap") {
            heatmap.show();
            for (var pin of pins) {pin.hide();}
            mode = "heatmap";
        }
    }
    var update_pin = function() {
        if (mode != "pin") {
            heatmap.hide();
            for (var pin of pins) {
              pin.show();
            }
            mode = "pin";
        }
    }
    var make_pins = function() {
        pins = [];
        for (var data of budatum) {
            pins.push(new Pin(data, map, pin_click_callback, pin_click_callback2));
        };
    };
    var make_heatmap = function() {
        heatmap = new Heatmap(budatum, map);
    }

    var pin_click_callback = function(key, bukken_html) {
        var index = -1;
        for (var i in bukken_buff) {
            if (bukken_buff[i] != null && bukken_buff[i].key == key) {
                index = i;
            }
        }
        var lis = [];

        if (index == -1) {
            for (var i=1; i < bukken_buff.length; i++) {
                lis.push(bukken_buff[i]);
            }
            lis.push({"key":key, "html": bukken_html});
        } else {
            for (var i=0; i < bukken_buff.length; i++) {
                if (i != index) {
                    lis.push(bukken_buff[i]);
                }
            }
            lis.push(bukken_buff[index]);
        }
        bukken_buff = lis;
        set_bukken_html();
    }

    var pin_click_callback2 = function(key, bukken_html) {
        var index = -1;
        for (var i in bukken_buff2) {
            if (bukken_buff2[i] != null && bukken_buff2[i].key == key) {
                index = i;
            }
        }
        var lis = [];

        if (index == -1) {
            for (var i=1; i < bukken_buff2.length; i++) {
                lis.push(bukken_buff2[i]);
            }
            lis.push({"key":key, "html": bukken_html});
        } else {
            for (var i=0; i < bukken_buff2.length; i++) {
                if (i != index) {
                    lis.push(bukken_buff2[i]);
                }
            }
            lis.push(bukken_buff2[index]);
        }
        bukken_buff2 = lis;
        set_bukken_html2();
    }

    var set_bukken_html = function() {
        var html = "";
        for (var i=bukken_buff.length-1; i >= 0; i--) {
            if (bukken_buff[i] != null) {
                html += bukken_buff[i].html;
            }
        }

        var div = document.getElementById("details");

        var title = document.createElement("div");
        title.id="bukken";
        title.classList.add("bukken");
        div.appendChild(title);

        div.innerHTML = html;
    }

    var set_bukken_html2 = function() {
        var html = "";
        for (var i=bukken_buff2.length-1; i >= 0; i--) {
            if (bukken_buff2[i] != null) {
                html += bukken_buff2[i].html;
            }
        }

        var div = document.getElementById("details2");

        var title = document.createElement("div");
        title.id="bukken";
        title.classList.add("bukken");
        div.appendChild(title);

        div.innerHTML = html;
    }
};
