/**
 * Created with JetBrains WebStorm.
 * User: zhangjk
 * Date: 14-3-19
 * Time: 上午12:12
 */

FBC.Pipe = function (pipeImg, isTop, x, y, width, height, moveSpeed) {
    this.pipeImg = pipeImg;
    this.imgWidth = pipeImg.width;
    this.imgHeight = pipeImg.height;
    this.isTop = isTop;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    //this.radix = height / width;
    this.availHeight = parseInt(this.imgWidth * height / width);
    this.availY = this.imgHeight - this.availHeight;
    this.moveSpeed = moveSpeed || -3;
    this.visible = false;
}

FBC.Pipe.prototype = {
    constructor: FBC.Pipe,

    move: function () {
        if (!this.visible)
            return;
        this.x += this.moveSpeed;
        if (this.x < -this.width) {
            this.visible = false;
        }
    },

    draw: function (context) {
        if (!this.visible)
            return;
        // var y;
        if (this.isTop) {
            //y = this.imgHeight - this.imgWidth * this.radix;
            context.drawImage(this.pipeImg, 0, this.availY, this.imgWidth, this.availHeight,
                this.x, this.y, this.width, this.height);
        }
        else {
            /*context.drawImage(this.pipeImg, 0, 0, this.imgWidth, this.imgWidth * this.radix,
             this.x, this.y, this.width, this.height);*/
            context.drawImage(this.pipeImg, 0, 0, this.imgWidth, this.availHeight,
                this.x, this.y, this.width, this.height);

        }

        /*console.log("availHeight" + this.availHeight);
        console.log("availYtop" + this.availY);
        console.log("x" + this.x);
        console.log("y" + this.y);
        console.log("height" + this.height);
        console.log("width" + this.width);*/

    },

    checkCollision: function (bird) {
        var x1 = bird.x + 2;
        var y1 = bird.y + 2;
        var w1 = bird.birdSize - 4;
        var h1 = bird.birdSize - 4;
        var x2 = this.x + 1;
        var y2 = this.y + 1;
        var w2 = this.width - 4;
        var h2 = this.height - 4;
        return x1 + w1 > x2 && x1 < x2 + w2 && y1 + h1 > y2 && y1 < y2 + h2;
    },

    setHeight: function (height) {
        this.height = height;
        //this.radix = this.height / this.width;
        this.availHeight = parseInt(this.imgWidth * this.height / this.width);
        this.availY = this.imgHeight - this.availHeight;
        // this.radix = this.height / this.width;

    },

    setX: function (x) {
        this.x = x;
    },

    setY: function (y) {
        this.y = y;
    },

    setOnShow: function (flag) {
        this.visible = flag;
    }

}
