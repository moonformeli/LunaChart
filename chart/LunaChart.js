if (!window.Luna) {
    window.Luna = {};
}

function CanvasChart() {
    var Chart = function(args) {
        this.param = {};

        this.initParam(args);
        this.initComponent();
    };

    /**
     *  Initiate arguments needed to draw a canvas on the target element, where the user wants to draw onto.
     *  The parameter, args, basically needs these information below.
     *
     *  width
     *  height
     *  target - the element that the user wants to draw a chart onto
     */
    Chart.prototype.initParam = function(args) {
        var minWidth  = 600;
        var minHeight = 300;

        this.width  = args.width  || minWidth;
        this.height = args.height || minHeight;
        this.target = args.target || window;
    };

    Chart.prototype.initComponent = function() {
        this.background = document.createElement("div");
        this.canvasAxis = document.createElement("canvas");
        this.ctxAxis    = this.canvasAxis.getContext("2d");

        this.setWidth(this.param.width);
        this.setHeight(this.param.height);

        this.background.appendChild(this.canvasAxis);
        this.target.appendChild(this.background);
    };

    Chart.prototype.setWidth = function(w) {
        this.background.style.width = w;
        this.canvasAxis.style.width = w;
    };

    Chart.prototype.setHeight = function(h) {
        this.background.style.height = h;
        this.canvasAxis.style.height = h;
    };

    Chart.prototype.getWidth = function() {
        return this.width;
    };

    Chart.prototype.getHeight = function() {
        return this.height;
    };

    return Chart;
}

window.Luna.LunaCanvas = CanvasChart();