function CanvasChart() {
    var Chart = function() {};

    Chart.prototype.init = function() {
        console.debug('init');
        this.initProperty();
    };

    Chart.prototype.initProperty = function() {
        console.debug('initProperty');
        this.minWidth  = 600;
        this.minHeight = 300;

        this.background = document.createElement("div");
        this.canvasAxis = document.createElement("canvas");
        this.ctxAxis    = this.canvasAxis.getContext("2d");

        this.background.appendChild(this.canvasAxis);
    };

    Chart.prototype.setWidth = function(w) {

    };

    return Chart;
}

window.LunaChart = CanvasChart();