var Heatmap = function(budatum, map) {
    var budatum = budatum;
    var map = map;

    var heatmap = null;
    
    var getPoints = function() {
        var points = [];
        for (var data of budatum) {
            points.push(new google.maps.LatLng(data.ido, data.keido));
        }
        return points;
    }
    this.show = function() {
        heatmap.setMap(map.getMap());
    }
    this.hide = function() {
        heatmap.setMap(null);
    }

    function changeRadius(radius) {
        heatmap.set('radius', radius);
    }

    function changeOpacity(opacity) {
        heatmap.set('opacity', opacity);
    }
    this.del = function() {
        if (heatmap) {
            heatmap.setMap(null);
        }
    }

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map.getMap(),
    });
    changeRadius(20);
    changeOpacity(0.5);
}