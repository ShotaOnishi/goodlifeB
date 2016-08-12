var filters = {
     //建物種別で該当物件を絞る
    "tatemono_shubetsu": function eq_tatemono_shubetsu(budata, cond) {
        return (budata.tatemono_shubetsu == cond.tatemono_shubetsu);
    },
    //賃料の最小値で該当物件を絞る
    "chinryo_min" : function ge_chinryo_min(budata, cond) {
        return cond.chinryo_min <= budata.chinryo;
    },
    //賃料の最大値で該当物件を絞る
    "chinryo_max" : function le_chinryo_max(budata, cond) {
        return budata.chinryo <= cond.chinryo_max;
    },
    //間取りで該当物件を絞る
    "madori_number" : function eq_madori_number(budata, cond) {
        return cond.madori_number == budata.madori_number;
    },
    "madori_type" : function eq_madori_type(budata, cond) {
        return cond.madori_type == budata.madori_type;
    },
    //駐車場の有り無しで絞る
    "chushajo" : function eq_chushajo(budata, cond) {
        return budata.chushajo_code == cond.chushajo_code;
    },
    //賃貸物件の現況で絞る
    "tintai_genkyo" : function eq_tintai_genkyo(budata, cond) {
        return budata.tintai_genkyo == cond.tintai_genkyo;
    },
    //最寄駅で絞る
    "jusho_full_text" : function eq_tintai_genkyo(budata, cond) {
        if (budata.kotsu_ensen_eki_1 == null || budata.kotsu_ensen_eki_1 == undefined) {
            return false
        } else {
            return budata.jusho_full_text.indexOf(cond.jusho_full_text) >= 0;
        }
    },
    //ペット可で絞る
    "pet" : function eq_pet(budata, cond) {
        return budata.pet == cond.pet;
    },
    //楽器使用可で絞る
    "gakki_shiyo": function eq_gakki_shiyo(budata, cond){
      return budata.gakki_shiyo == cond.gakki_shiyo;
    },
    //ルームシェア可で絞る
    "room_share": function eq_room_share(budata, cond){
      return budata.room_share == cond.room_share;
    },
    //徒歩時間で絞る
    "toho_min" : function ge_toho_min(budata, cond) {
        return cond.toho_min <= budata.kotsu_ekitoho_1;
    },
    "toho_max" : function le_toho_high(budata, cond) {
        return budata.kotsu_ekitoho_1 <= cond.toho_max;
    },

    //階の最小値で該当物件を絞る
    "kai_min" : function ge_kai_min(budata, cond) {
        return cond.kai_min <= budata.shozaikai;
    },
    //階の最大値で該当物件を絞る
    "kai_max" : function le_kai_max(budata, cond) {
        return budata.shozaikai <= cond.kai_max;
    },

    "idoSW" : function ido_sw(budata, cond){
        return cond.idoSW <= budata.ido;
    },
    "idoNE" : function ido_ne(budata, cond){
        return budata.ido <= cond.idoNE;
    },

    "keidoSW" : function keido_sw(budata, cond){
        return cond.keidoSW <= budata.keido;
    },
    "keidoNE" : function keido_ne(budata, cond){
        return budata.keido <= cond.keidoNE;
    }

};

//検索結果を抽出する機能
var getFilteredResult = function(budatum, input_conditions){
    var ret = [];
    var filter_functions = [];
    for (var filter_name in filters) {
        if (input_conditions[filter_name] != null) {
            filter_functions.push(filters[filter_name]);
            console.log(input_conditions[filter_name]);
        }
    }
    for (var budata of budatum) {
        var passed = filter_functions.every(function(element, index, array) {
            console.log(input_conditions);
            return element(budata, input_conditions);
        });
        console.log(passed);
        if (passed) ret.push(budata);
    }
    console.log(ret);
    return ret;
};
