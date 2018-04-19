var main = document.createElement("div");
document.body.appendChild(main);

var chart = new Luna.LunaChart({
    width  : 300,
    height : 150,
    target : main,
    type   : 'Line',
    options: {
        xAxis  : {
            tickN : 5,
            type  : "Number",
            start : 10,
            end   : 50,
            crossHair : true
        },
        yAxis  : {
            tickN : 5,
            type  : "Number",
            start : 1,
            end   : 5,
            crossHair : true
        }
    }
});