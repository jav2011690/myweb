/**
 * Created with JetBrains WebStorm.
 * User: zhangjk
 * Date: 14-3-18
 * Time: 下午11:58
 */

FBC.manager = FBC.manager || {};


FBC.manager.availHeight = 405;

FBC.manager.obsPool = new Array();

FBC.manager.init = function () {
    this.images = {
        bird: document.getElementById('bird'),
        obstop: document.getElementById('obstop'),
        obsbottom: document.getElementById('obsbottom'),
        background: document.getElementById('background')
    }

    this.availHeight = 405;
    this.canvas = document.getElementById('canvas');
    this.context = FBC.manager.canvas.getContext('2d');
    this.delay = 0;
    this.birdFallSpeed = 1;
    this.obsIntervalCount = 0;
    this.score = 0;
    this.lose = false;
    this.bird = new FBC.Bird(this.images.bird);
    this.background = new FBC.Background(FBC.manager.images.background, this.canvas.width, this.canvas.height);
    this.obsPool = new Array();
}


FBC.manager.getObstacle = function (height) {
    var l = this.obsPool.length;
    while (l--) {
        if (!this.obsPool[l].isVisible()) {
            this.obsPool[l].setHeight(height);
            return this.obsPool[l];
        }
    }
    var obs = new FBC.Obstacle(this.images.obstop, this.images.obsbottom, 350, 0, 50, height, this.availHeight);
    this.obsPool.push(obs);
    return obs;
}

FBC.manager.restart = function () {
    this.lose = false;
    this.delay = 0;
    this.obsIntervalCount = 0;
    this.score = 0;
    this.bird.y = 0;
    this.bird.fallSpeed = 0;
    this.birdFallSpeed = 1;
    document.getElementById('number').innerHTML = this.score + "";
    var i = this.obsPool.length;
    while (i--) {
        this.obsPool[i].display(false);
        this.obsPool[i].canScore = false;
    }

}

FBC.manager.animate = function () {
    if (this.lose) {
        alert(this.score);
        this.restart();
        //return;
    }
    this.delay++;
    if (this.delay >= 5) {
        this.delay = 0;
        this.birdFallSpeed += 0.1;
        this.bird.alterFallSpeed(this.birdFallSpeed);
    }
    this.obsIntervalCount++;
    if (this.obsIntervalCount >= 80) {
        var obs = this.getObstacle(parseInt(Math.random() * 200 + 50));
        //var obs = this.getObstacle( 250);
        this.obsIntervalCount = 0;
        obs.display(true);
        //obs.setX(this.canvas.width);
        obs.setX(350);
        obs.canScore = true;
    }

    this.bird.fall(this.availHeight);
    this.background.move();

    this.context.clearRect(0, 0, 350, 500);

    this.background.draw(this.context);
    var i = this.obsPool.length;
    while (i--) {
        if (this.obsPool[i].isVisible()) {
            this.obsPool[i].move();
            if (this.obsPool[i].checkCollision(this.bird)) {
                this.lose = true;
            }
            if (this.obsPool[i].score(this.bird)) {
                this.score++;
                document.getElementById('number').innerHTML = this.score;
            }
            this.obsPool[i].draw(this.context);
        }
    }
    this.bird.draw(this.context);
}

FBC.manager.addListenrter = function () {
    document.onkeydown = function (event) {
        if (event.keyCode == FBC.Key.W) {
            FBC.manager.bird.setFallSpeed(-5);
            FBC.manager.birdFallSpeed = 1;
            console.log(FBC.manager.obsPool.length)
        }
    }

    document.addEventListener('touchstart', function (event) {
        event.preventDefault();
        FBC.manager.bird.setFallSpeed(-5);
        FBC.manager.birdFallSpeed = 1;
        console.log(FBC.manager.obsPool.length)
    });
}


