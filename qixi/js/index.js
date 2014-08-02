/**
 * Created with JetBrains WebStorm.
 * User: zhangjk
 * Date: 14-8-2
 * Time: 上午9:03
 */

var r = 18;
var radian;
var radian1;
var radianDecrement;
var radianDecrement1;
var startRadian = 0;
var num = 360;
var image = new Image();
image.src = "image/meigui.png";
var me = new Image();
me.src = "image/01.png";
var kang = new Image();
kang.src = "image/02.png";
var canvas;
var xin = new Image();
xin.src = "image/xin.png";
var index = 0;
var delay = 0;
var delay1 = 0;
var delay2 = 0;
var alpha = 0;
var context;
var requestId ;
window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    radian = startRadian;
    radian1 = -startRadian;
    radianDecrement = Math.PI / num * 12;
    radianDecrement1 = -Math.PI / num * 12;
    context.font = "30px 宋体";
    animate();
}

requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || window.oRequestAnimationFrame
    || function (callback) {
    setTimeout(callback, 1000 / 60);
};

function animate() {
    requestId =  requestAnimationFrame(animate);
    draw();
    draw1();
    draw2();
    //
}

function draw2() {
    if(alpha > 1) {
        delay2++;
    }
    if(delay2 > 10)
    context.strokeText("一",250,150,30);
    if(delay2 > 20)
        context.strokeText("生",290,150,30);
    if(delay2 > 30)
        context.strokeText("有",330,150,30);
    if(delay2 > 40)
        context.strokeText("你",370,150,30);
    if(delay2 > 50)
        context.strokeText("不",550,150,30);
    if(delay2 > 60)
        context.strokeText("离",590,150,30);
    if(delay2 > 70)
        context.strokeText("不",630,150,30);
    if(delay2 > 80)
        context.strokeText("弃",670,150,30);
    if(delay2 > 80) {
        cancelRequestAnimationFrame(requestId);
    }
}

function draw1() {
    if (delay1++ < 3)
        return;
    delay1 = 0;
    if (alpha < 1) {
        alpha += 0.05;
        context.globalAlpha = alpha;
    }
    context.drawImage(xin, 320, 170);
    context.drawImage(me, 382, 230);
    context.drawImage(kang, 475, 230);
    context.globalAlpha = 1;
}
function draw() {
    if (delay++ < 3)
        return;
    delay = 0;
    index++;
    if (index < 30) {
        radian += radianDecrement;
        context.drawImage(image, getX(radian), getY(radian));
        radian1 += radianDecrement1;
        context.drawImage(image, getX(radian1), getY(radian1));
    }
}

function getX(t) {//由弧度得到 X 坐标
    return 450 + r * (16 * Math.pow(Math.sin(t), 3));
}

function getY(t) {//由弧度得到 Y 坐标
    return 230 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
}


