var DB = function() {
    var con = new Connector();
    var budatum = []
    var searched_datum = [];

    var read_datum = function() {
        var raw_datum = con.getDatum();
        console.log(raw_datum);
        budatum = [];
        for (var rdata of raw_datum) {
            var budata = modify(rdata);
            if (budata) {
                budatum.push(budata);
            }
        }
        
    }

    this.getDatum = function() {
        return searched_datum;
    };
    this.setQuery = function(cond){
        read_datum();
        searched_datum = getFilteredResult(budatum, cond);
    };
    
    this.avarage=function(){
        read_datum();
        var sumchinryo=0;
        for(var i in budatum.chinryo){
            sumchinryo+=i;
        }
        return sumchinryo/budatum.length;
    };
};
