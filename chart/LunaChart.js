var LunaChart = (function CanvasChart() {
    
    function LunaChart(args) {
        var ix;

        for (ix in args) {
            this[ix] = args[ix];
        }
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

    LunaChart.prototype.getId = function() {
        return this.id;
    }
    
    LunaChart.prototype.getDom = function() {
        return document.getElementById(this.getId());
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