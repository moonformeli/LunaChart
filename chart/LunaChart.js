(function CanvasChart() {
    
    function LunaChart(args) {
        this.width     = 500;
        this.height    = 300;
        this.minWidth  = 500;
        this.minHeight = 300;
        this.dom       = document.getElementsByName("body");

        this.init(args);
    }

    LunaChart.prototype.init = function(args) {
        var prop;

        for (prop in args) {
            this[prop] = args[prop];
        }
    }

    /**
     * Getter / Setter
     */
    LunaChart.prototype.getWidth = function() {
        return this.width;
    }

    LunaChart.prototype.getHeight = function() {
        return this.height;
    }

    LunaChart.prototype.getMinWidth = function() {
        return this.minWidth;
    }

    LunaChart.prototype.getMinHeight = function() {
        return this.minHeight;
    }
    
    LunaChart.prototype.getDom = function() {
        return this.dom;
    }

    LunaChart.prototype.setWidth = function(w) {
        this.width = w;
        return LunaChart;
    }

    LunaChart.prototype.setHeight = function(h) {
        this.height = h;
        return LunaChart;
    }

    LunaChart.prototype.setMinWidth = function(w) {
        this.minWidth = w;
        return LunaChart;
    }

    LunaChart.prototype.setMinHeight = function(h) {
        this.minHeight = h;
        return LunaChart;
    }

    LunaChart.prototype.setDom = function(id) {
        var dom = document.getElementById(id);

        if (dom) {
            this.dom = dom;
        }

        return LunaChart;
    }

    return LunaChart;

})();