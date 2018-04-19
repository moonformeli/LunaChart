function CanvasChart() {
    var Chart = function(args) {
        this.init(args);
    };

    /**
     *  Initiate arguments needed to draw a canvas on the target element, where the user wants to draw onto.
     *  The parameter, args, basically needs these information below.
     *
     *  width
     *  height
     *  target - the element that the user wants to draw a chart onto
     */
    function initParam(args) {
        var param = {};
        var minWidth  = 600;
        var minHeight = 300;

        param.width  = args.width  || minWidth;
        param.height = args.height || minHeight;
        param.target = args.target || window;

        return param;
    }

    Chart.prototype.init = function(args) {
        console.debug('init');

        this.initProperty(args);
        this.initComponent();
    };

    Chart.prototype.initProperty = function(args) {
        console.debug('initProperty');

        this.param = initParam(args);
    };

    Chart.prototype.initComponent = function() {
        this.background = document.createElement("div");
        this.canvasAxis = document.createElement("canvas");
        this.ctxAxis    = this.canvasAxis.getContext("2d");

        this.setWidth(this.param.width);
        this.setHeight(this.param.height);

        this.background.appendChild(this.canvasAxis);
        this.param.target.appendChild(this.background);
    };

    Chart.prototype.setWidth = function(w) {
        this.background.style.width = w;
        this.canvasAxis.style.width = w;
    };

    Chart.prototype.setHeight = function(h) {
        this.background.style.height = h;
        this.canvasAxis.style.height = h;
    };

    return Chart;
}

window.LunaChart = CanvasChart();