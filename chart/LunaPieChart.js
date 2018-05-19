var LunaPieChart = (function PieChart() {

    function LunaPieChart(args) {
        LunaChart.call(this, args);

        this.canvasBG;
        this.canvasData;

        this.ctxBG;
        this.ctxData;

        // this.iniCanvas();
    }
    LunaPieChart.prototype = new LunaChart();
    LunaPieChart.prototype.constructor = LunaChart;

    LunaPieChart.prototype.initCanvas = function() {
        this.canvasBG = document.createElement("canvas");
        this.canvasBG.setAttribute("style", this.getAttribute(this.getWidth(), this.getHeight()));

        this.ctxBG = this.canvasBG.getContext("2d");
    }

    LunaPieChart.prototype.draw = function() {
        this.ctxBG.fillStyle = "red";
        this.ctxBG.fillRect(20, 20, 100, 100);
    };

    /**
     * Getter / Setter
     */
    LunaChart.prototype.getStyle = function(w, h) {
        return "position: absolute; top: 0; left: 0; width: " + w + "px; height: " + h + "px";
    }
    
    return LunaPieChart;

})();