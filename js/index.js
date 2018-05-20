var main = document.createElement("div");
main.id = "myDiv";
document.body.appendChild(main);

var chart = new LunaPieChart({
    width: 300,
    height: 300,
    id: main.id
});

chart.initCanvas();
chart.draw();