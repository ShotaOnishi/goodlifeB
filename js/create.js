var details_pair = [
    ["tatemono_name","建物名",""],
    ["jusho_full_text","住所",""],
    ["chinryo","賃料","円"],
    ["kanrihi","管理費","円"],
    ["kyoekihi","共益費","円"],
    ["shikikin","敷金","ヶ月"],
    ["reikin","礼金","ヶ月"],
    ["kotsu_ensen_eki_1","最寄駅",""],
    ["tatemono_shubetsu","建物種別",""],
    ["heya_kukaku_number","部屋番号",""],
    ["senyu_menseki","専有面積","㎡"],
    ["madori","間取り",""],
    ["tintai_genkyo","現況",""],
    ["chushajo","駐車場",""],
    ["pet","ペット",""],
    ["kotsu_ekitoho_1","徒歩","分"],
    //["room_share","ルームシェア",""],
 ];

var createHTML = function(budata){
    var bukken = document.createElement("div");
    bukken.id = "bukken";
    bukken.classList.add("bukken");

    var image = document.createElement("img");
    image.classList.add("bukken-image");
    image.setAttribute("src", "./images/" + Math.floor(Math.random()*3+1) +".jpg");
    bukken.appendChild(image);

    // 詳細div
    var detail = document.createElement("div");
    detail.classList.add("detail1");
    for(var content of details_pair){
        if (budata[content[0]] == null){
            continue;
        }
        var div0 = document.createElement("div");
        div0.classList.add("detail");
        div0.innerText = content[1]+ ": "+ budata[content[0]] + content[2];
        detail.appendChild(div0);
    }
    bukken.appendChild(detail);

    return bukken.outerHTML;
}
