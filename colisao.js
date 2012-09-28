function get(id){
    return parseFloat(document.getElementById(id).value);
}

function drawRec(context, x, color){
    context.beginPath();
    context.rect(x, 43, 20, 20);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.stroke();
}

function drawBackground(context){
    for(var i = 1; i<6; i++ ){
        context.beginPath();
        context.moveTo(i * 100, 65);
        context.lineTo(i * 100, 75);
        context.stroke();
        context.font="10px";
        context.fillText(i * 100, i * 100 - 10, 85);
    }
    context.beginPath();
    context.moveTo(0, 65);
    context.lineTo(600, 65);
    context.stroke();
}
interval = 0
function execute(){
    m1 = get("m1");
    m2 = get("m2");
    v1 = get("v1");
    v2 = get("v2");
    p1 = get("p1");
    p2 = get("p2");
    e = get("e");

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');

    if(interval!=0){
        clearInterval(interval);
    }else{
        drawBackground(context);
    }

    drawRec(context, p1, 'yellow');
    drawRec(context, p2, 'blue');

    var colision = 0;
    interval = setInterval(function(){
        p1 = p1 + v1;
        p2 = p2 + v2;
        context.clearRect(0, 0, 600, 65);
        drawRec(context, p1, 'yellow');
        drawRec(context, p2, 'blue');

        if(p1 + 21 >= p2 && colision == 0){
            colision = 1;
            var newV2 = (1 + e) * m1 * v1 /(m1 + m2) + v2 * (m2 - m1 * e)/(m2 + m1);
            v1 = (1 + e) * m2 * v2 /(m1 + m2) + v1 * (m1 - m2 * e)/(m1 + m2);
            v2 = newV2;
        }
    }, 20);

}

