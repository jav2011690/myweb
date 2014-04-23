/**
 * Created with JetBrains WebStorm.
 * User: zhangjk
 * Date: 14-3-19
 * Time: 上午11:31
 */

FBC.Obstacle = function (topImg, bottomImg, x, y, width, height, availHeight, moveSpeed) {
    this.availHeight = availHeight;
    this.topPipe = new FBC.Pipe(topImg, true, x, y, width, height, moveSpeed);
    var bHeight = availHeight - height - 110;
    this.bottomPipe = new FBC.Pipe(bottomImg, false, x, availHeight - bHeight, width, bHeight, moveSpeed);
    this.canScore = false;
}

FBC.Obstacle.prototype = {
    constructor: FBC.Obstacle,
    isVisible: function () {
        return this.topPipe.visible && this.bottomPipe.visible;
        //return true;
    },

    display: function (flag) {
        this.topPipe.setOnShow(flag);
        this.bottomPipe.setOnShow(flag);

    },

    setX: function (x) {
        this.topPipe.setX(x);
        this.bottomPipe.setX(x);
    },

    setHeight: function (height) {
        this.topPipe.setHeight(height);
        var bHeight = this.availHeight - height - 110;
        this.bottomPipe.setY(this.availHeight - bHeight);
        this.bottomPipe.setHeight(bHeight);

    },

    move: function () {
        this.topPipe.move();
        this.bottomPipe.move();
    },

    draw: function (context) {
        this.topPipe.draw(context);
        this.bottomPipe.draw(context);
    },

    checkCollision: function (bird) {
        return this.topPipe.checkCollision(bird) || this.bottomPipe.checkCollision(bird);
    },

    score: function (bird) {
        if (this.canScore && this.topPipe.visible && this.topPipe.x < bird.x - 10) {
            this.canScore = false;
            return true;
        }
        return false;
    }
}
