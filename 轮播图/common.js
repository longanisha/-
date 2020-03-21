/*
 *    获取元素样式的函数
 *   el: 元素
 *    attr:样式字符串
 */
function getStyle(el, attr) {
    // ie浏览器
    if (el.currentStyle) {
        return el.currentStyle[attr];
    } else {
        // 现代浏览器
        return getComputedStyle(el)[attr];
    }
}
/*
    move:使任意函数的任意带px 单位的属性发生动画效果的函数
    el:元素
    attr:属性字符串
    v:速度
    end最终目标值

*/
var timer;
function move(el, attr, v, end) {
    // 清除上一次运动的定时器
    clearInterval(timer);

    // 开始运动前的初始位置
    var now = parseInt(getStyle(el, attr));

    // 初始值比目标值大，需要变为负速度
    if (now > end) {
        v = -v;
    }
    // 开启本次运动的定时器
    timer = setInterval(function () {
        // 获取当前left
        var cur = parseInt(getStyle(el, attr));

        // 获取本次运动的目标值
        var target = cur + v;

        // 在超过目标值要停止定时器
        // if(v>0&&target>=end){
        //     target = end;
        //     clearInterval(timer);
        // }

        // if(v<0&&target<end){
        //     target = end;
        //     clearInterval(timer);
        // }

        // 正速度，超过目标停止运动
        // 负速度，小于目标停止运动
        if ((v > 0 && target >= end) || (v < 0 && target < end)) {
            target = end;
            clearInterval(timer);
        }
        // 目标值 称为新的left
        el.style[attr] = target + "px";
    }, 20);
}