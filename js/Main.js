/**
 * Created with JetBrains WebStorm.
 * User: zhangjk
 * Date: 14-3-19
 * Time: 下午8:01
 */


window.onload = function () {
    FBC.manager.init();
    FBC.manager.addListenrter();
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    FBC.manager.animate();
}