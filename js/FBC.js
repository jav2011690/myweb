/**
 * Created with JetBrains WebStorm.
 * User: zhangjk
 * Date: 14-3-18
 * Time: 下午8:30
 */

/**
 * 创建一个空对象，作用类似于命名空间
 */
var FBC = {};

/**
 * 专门用于动画循环的一个函数，由于各浏览器的实现可能有所不同，
 * 因此采用下面的写法，屏蔽各浏览器之间的差异
 */
window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
