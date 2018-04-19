function CanvasLineChart() {
    var LineChart = function(args) {
        window.Luna.LunaCanvas.call(this, args);
        this.init(args);
    };

    LineChart.prototype = Object.create(window.Luna.LunaCanvas.prototype);
    LineChart.prototype.constructor = window.Luna.LunaCanvas;

    LineChart.prototype.init = function(args) {
        this.initChartProps(args);
        this.drawBackground();
    };

    LineChart.prototype.initChartProps = function(args) {
        if (!args.type) {
            args.type = 'line';
        } else {
            args.type = args.type.toLowerCase();
        }

        this.type = args.type;
        this.options = args.options;
    };

    /**
     *  Draw background and axes
     */
    LineChart.prototype.drawBackground = function() {
        var ix, ixLen, tickN, tickW, tickH, width, height;

        width  = this.getWidth();
        height = this.getHeight();

        this.ctxAxis.save();

        this.ctxAxis.fillStyle = "#FFFFFF";
        this.ctxAxis.strokeStyle = "#DADADA";

        this.ctxAxis.rect(0, 0, this.getWidth(), height);
        this.ctxAxis.fill();
        this.ctxAxis.stroke();

        if (this.options) {

            if (this.options.xAxis && this.options.xAxis.crossHair) {
                tickN = this.options.xAxis.tickN;
                tickW = width / tickN;

                for (ix = 1, ixLen = tickN; ix <= ixLen; ix++) {
                    this.ctxAxis.beginPath();
                    this.ctxAxis.moveTo(tickW * ix, 0);
                    this.ctxAxis.lineTo(tickW * ix, height);
                    this.ctxAxis.stroke();
                    this.ctxAxis.closePath();
                }
            }

            if (this.options.yAxis && this.options.yAxis.crossHair) {
                tickN = this.options.yAxis.tickN;
                tickH = height / tickN;

                for (ix = 1, ixLen = tickN; ix <= ixLen; ix++) {
                    this.ctxAxis.beginPath();
                    this.ctxAxis.moveTo(0, tickH * ix);
                    this.ctxAxis.lineTo(width, tickH * ix);
                    this.ctxAxis.stroke();
                    this.ctxAxis.closePath();
                }
            }

        }

        this.ctxAxis.restore();
    };

    return LineChart;
}

window.Luna.LunaChart = CanvasLineChart();