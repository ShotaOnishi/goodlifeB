var form_data = {
    "syubetsu": {
        "type": ["pull_down","selectedIndex"],
        "keys":["tatemono_shubetsu"],
        "data": [
            {"text": "", "values": [null]},
            {"text": "マンション", "values": ["マンション"]},
            {"text": "リゾートマンション","values": ["リゾートマンション"]},
            {"text": "アパート","values": ["アパート"]},
            {"text": "テラスハウス","values": ["テラスハウス"]},
            {"text": "タウンハウス","values": ["タウンハウス"]},
            {"text": "戸建","values": ["戸建"]},
            {"text": "土地","values": ["土地"]},
            {"text": "店舗","values": ["店舗"]},
            {"text": "事務所","values": ["事務所"]},
            {"text": "ビル","values": ["ビル"]},
            {"text": "倉庫","values": ["倉庫"]},
            {"text": "工場","values": ["工場"]},
            {"text": "トランクルーム","values": ["トランクルーム"]},
            {"text": "駐車場","values": ["駐車場"]},
            {"text": "バイク置き場","values": ["バイク置き場"]},
            {"text": "その他","values": ["その他"]}
        ]
    },

    "chinryou": {
        "type": ["pull_down","selectedIndex"],
        "keys": ["chinryo_min", "chinryo_max"],
        "data": [
            {"text": "",          "values": [null, null]},
            {"text": "50000円以下", "values": [null, 50000]},
            {"text": "50000~70000円", "values": [50000,70000]},
            {"text": "70000~90000円", "values": [70000,90000]},
            {"text": "90000~110000円", "values": [90000,110000]},
            {"text": "110000~130000円", "values": [110000,130000]},
            {"text": "130000円以上", "values": [130000,null]}
        ]
    },

    "kotsu_ekitoho_1": {
        "type": ["pull_down","selectedIndex"],
        "keys": ["toho_min", "toho_max"],
        "data": [
            {"text": "",          "values": [null, null]},
            {"text": "1分以内", "values": [null, 1]},
            {"text": "2〜5分", "values": [2, 5]},
            {"text": "6〜10分", "values": [6, 10]},
            {"text": "11〜15分", "values": [11, 15]},
            {"text": "16分以上", "values": [16, null]},

        ]
    },
    "shozaikai":{
      "type":["pull_down","selectedIndex"],
      "keys":["kai_min","kai_max"],
      "data":[
        {"text": "",          "values": [null, null]},
        {"text": "1階", "values": [null, 1]},
        {"text": "2階", "values": [2, 2]},
        {"text": "3階", "values": [3, 3]},
        {"text": "4〜6階", "values": [4, 6]},
        {"text": "7階以上", "values": [7, null]},
      ]
    },

    "parking": {
    	"type": ["pull_down","selectedIndex"],
    	"keys": ["chushajo_code"],
    	"data": [
    		{"text": "", "values": [null]},
    		{"text": "無", "values": ["1"]},
    		{"text": "有（敷地内）", "values": ["2"]},
    		{"text": "付", "values": ["3"]},
    		{"text": "近隣駐車場", "values": ["4"]},
    		{"text": "空無", "values": ["5"]},
    		{"text": "要お問合せ", "values": ["6"]},
    	]
    },

    "genkyo":{
    	"type": ["pull_down","selectedIndex"],
    	"keys": ["tintai_genkyo"],
    	"data": [
    		{"text": "", "values": [null]},
    		{"text": "居住中", "values": ["居住中"]},
    		{"text": "空", "values": ["空"]},
    		{"text": "賃貸中", "values": ["賃貸中"]},
    		{"text": "未完成", "values": ["未完成"]},
    		{"text": "一部賃貸", "values": ["一部賃貸"]},
    		{"text": "全部賃貸", "values": ["全部賃貸"]},
    		{"text": "新築", "values": ["新築"]}
    	]
    },

    "pet":{
    	"type": ["pull_down","selectedIndex"],
    	"keys": ["pet"],
    	"data":[
    		{"text": "", "values": [null]},
    		{"text": "不可", "values": ["不可"]},
    		{"text": "可", "values": ["可"]},
    		{"text": "相談", "values": ["相談"]},
    	]
    },
    "gakki_shiyo":{
      "type": ["pull_down","selectedIndex"],
      "keys": ["gakki_shiyo"],
      "data": [
        {"text":"","values":[null]},
        {"text":"不可","values":["不可"]},
        {"text":"可","values":["可"]},
        {"text":"相談","values":["相談"]}
      ]
    },
    "room_share":{
      "type": ["pull_down","selectedIndex"],
      "keys": ["room_share"],
      "data": [
        {"text":"","values":[null]},
        {"text":"不可","values":["不可"]},
        {"text":"可","values":["可"]},
        {"text":"相談","values":["相談"]}
      ]
    },

    "madori_number":{
    	"type": ["pull_down","selectedIndex"],
    	"keys": ["madori_number"],
    	"data": [
    		{"text": "", "values": [null]},
    		{"text": "1", "values": ["1"]},
    		{"text": "2", "values": ["2"]},
    		{"text": "3", "values": ["3"]},
    		{"text": "4", "values": ["4"]},
    		{"text": "5", "values": ["5"]},
    	]
    },

    "madori_type":{
    	"type": ["pull_down","selectedIndex"],
    	"keys": ["madori_type"],
    	"data": [
    		{"text": "", "values":[null]},
    		{"text": "R", "values":["R"]},
    		{"text": "K", "values":["K"]},
    		{"text": "DK", "values":["DK"]},
    		{"text": "SDK", "values":["SDK"]},
    		{"text": "LDK", "values":["LDK"]},
    		{"text": "SLDK", "values":["SLDK"]},
    		{"text": "LK", "values":["LK"]},
    		{"text": "SK", "values":["SK"]},
    		{"text": "SLK", "values":["SLK"]}
    	]
    },

    "station":{
    	"type": ["free_text","value"],
    	"keys": ["jusho_full_text"],
    	"data": [
    		{"text": "","values":[null]}
    	]
    },

    "ido":{
        "type": ["ido","value"],
    	"keys": ["idoSW","idoNE"],
    	"data": [
    		{"values":[null,null]}
    	]
    },

    "keido":{
        "type": ["keido","value"],
    	"keys": ["keidoSW","keidoNE"],
    	"data": [
    		{"values":[null,null]}
    	]
    }
}



var FormManager = function(map) {
    this.search_button = document.getElementById('search-button');

    var make_form = function() {
        for (var elem_id in form_data) {
            var form = form_data[elem_id];
            if (form.type[0] == "pull_down") {
                var options = "";
                for (var dat of form.data) {
                    options += "<option>" + dat.text + "</option>";
                }
                document.getElementById(elem_id).innerHTML = options;
            } else if (form.type[0] == "free_text") {
                // pass;
            }
        }
    };

    this.setDisabled = function() {
        this.search_button.disabled = true;
    };
    this.setAbled = function() {
        this.search_button.disabled = false;
    };

    this.setSubmit = function(func) {
        this.search_button.onclick = func;
    };

    this.change_button = document.getElementById('change-button');
    this.setChange = function(func){
      this.change_button.onclick = func;
    };

    this.option_button = document.getElementById('option-button');
    this.setOption = function(func){
      this.option_button.onclick = func;
    };

    this.getCond = function() {

        var input_conditions = {};

        for (var elem_id in form_data) {
            var form = form_data[elem_id];
            if (form.type[0] == "pull_down") {
                var selected = document.getElementById(elem_id)[form.type[1]];
                for (var i in form.keys) {
                    input_conditions[form.keys[i]] = form.data[selected].values[i];
                }
            } else if (form.type[0] == "free_text") {
                var text_value = document.getElementById(elem_id)[form.type[1]];
                if (text_value == "") {
                    input_conditions[form.keys[0]] = null;
                } else {
                    input_conditions[form.keys[0]] = text_value;
                }
            }else if (form.type[0] == "ido"){

                if (map.IdoSW() == 0) {
                    input_conditions[form.keys[0]] = null;
                    input_conditions[form.keys[1]] = null;
                } else {
                    input_conditions[form.keys[0]] = map.IdoSW();
                    input_conditions[form.keys[1]] = map.IdoNE();
                    console.log(form.keys[0]);

                }
            }else if (form.type[0] == "keido"){
                if (map.KeidoSW() == 0) {
                    input_conditions[form.keys[0]] = null;
                    input_conditions[form.keys[1]] = null;
                } else {
                    input_conditions[form.keys[0]] = map.KeidoSW();
                    input_conditions[form.keys[1]] = map.KeidoNE();
                }
            }
        }
        return input_conditions;
    };

    make_form();
};
