/**
 * Created with JetBrains WebStorm.
 * User: zhangjk
 * Date: 14-3-18
 * Time: 下午8:24
 */

/**
 * @param birdImg bird的图片
 * @param birdSize bird的大小
 * @param x x坐标
 * @param y y坐标
 * @constructor
 */
FBC.Bird = function (birdImg, birdSize, x, y) {
    this.birdImg = birdImg;
    this.imgWidth = birdImg.width;
    this.imgHeight = birdImg.height;
    this.birdSize = birdSize || 32;
    this.fallSpeed = 0;
    this.x = x || 100;
    this.y = y || 1;
}

FBC.Bird.prototype = {
    constructor: FBC.Bird,

    fall: function (availHeight) {
        this.y += this.fallSpeed;
        if (this.y < 0) {
            this.y = 0;
            this.fallSpeed = 1;
        }

        if (this.y > availHeight - this.birdSize) {
            this.y = availHeight - this.birdSize;
        }
    },

    setFallSpeed: function (speed) {
        if (this.fallSpeed > 0)
            this.fallSpeed = speed;
        else
            //this.fallSpeed = this.fallSpeed / 3 + speed;
            this.fallSpeed = speed

    },

    alterFallSpeed: function (change) {
        this.fallSpeed += change;
    },

    draw: function (context) {
        context.drawImage(this.birdImg, 0, 0, this.imgWidth, this.imgHeight,
            this.x, this.y, this.birdSize, this.birdSize);
    }
}


