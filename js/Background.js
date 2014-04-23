/**
 * Created with JetBrains WebStorm.
 * User: zhangjk
 * Date: 14-3-19
 * Time: 下午9:18
 */

FBC.Background = function (backImg, canvasWidth, canvasHeight, moveSpeed) {
    this.backImg = backImg;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.cycleWidth = backImg.width - canvasWidth;
    this.moveSpeed = moveSpeed || 3;
    this.sX = 0;
}

FBC.Background.prototype = {
    constructor: FBC.Background,
    move: function () {
        this.sX += this.moveSpeed;
        if (this.sX > this.cycleWidth) {
            this.sX = 5;
        }
    },

    draw: function (context) {
        context.drawImage(this.backImg, this.sX, 0, this.canvasWidth, this.canvasHeight,
            0, 0, this.canvasWidth, this.canvasHeight);
    }
}