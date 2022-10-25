var div = document.querySelector('.banner');
var ul = document.getElementById('myView');
var ol = document.querySelector('ol');
var left = document.querySelector('a.left');
var right = document.querySelector('a.right');
// 设置一个变量index 作为下标的使用
var index = 1;
// 遍历ul下面的li
for(var i=0;i<ul.children.length;i++){
    // 一个ul下面的li要对应一个下面的小圆点按钮
    // 创建同等数量的小圆点
    var li = document.createElement('li');
    setStyle(li,{
        width: "10px",
        height: "10px",
        "border-radius":"50%",
        "background-color": "skyblue"
    })
    // 把创建好的li 全部放到ol 这个大盒子里
    ol.appendChild(li);
}
// ol这个大盒子本身是没有宽度的 我们要根据里面的小圆点数量 设置ol大盒子的宽度
ol.style.width = ol.firstElementChild.offsetWidth*ul.children.length*2 + 'px';
// 设置一个变量 这个变量是代表有样式的那个小圆点
var that = ol.children[index-1];
//给ol第一个儿子设置红色
that.style.background = 'red';
// 实现滑动轮播更好的衔接，前后给ul各补一个li。
var lastLi = ul.lastElementChild.cloneNode(true);
var firstLi = ul.firstElementChild.cloneNode(true);
// 把复制好的标签分别放在ul大盒子的前面和后面
ul.appendChild(firstLi);
ul.insertBefore(lastLi,ul.firstElementChild);
// 因为ul下面的子元素发生了变化 我们要给ul 设置相应的宽度
ul.style.width = ul.children.length*lastLi.offsetWidth + 'px';
// 因为我们滑动是从右往左滑动的 所以要给ul 的left值取负
ul.style.left = -ul.firstElementChild.offsetWidth + 'px';
// 设置变量 后面赋值给定时器
var timeId;
// 定义一个开关
var flag = true;
//右键点击
right.onclick = function(){
    // 如果开关没打开 就返回一个false
    if(!flag){
        return false;
    }
    // 并把返回值赋值给 开关 说明开关关闭 再次点击就没有效果
    flag = false;
    // 前面我们定义了一个index 每当我们点击一下就index++
    index++;
    // 调用 move 函数
    move(ul,{left:-index*ul.children[0].offsetWidth},function(){
        // 把需要做的事情放在运动结束后的函数里面
        // 首先我们要给index 进行判断 ul总共七个子元素 index对应的是ul子元素的下标 所以 index是不能超过 ul.children.length-1;
        if(index ==ul.children.length-1){
            // 如果index等于ul.children.length-1
            // 就重新给index赋值为1
            index = 1;
            // 并且也要给ul 的left值重新赋值
            ul.style.left = -index*ul.children[0].offsetWidth + 'px';
        }
        // 小圆点也要跟着图片一起动才行
        // 我们给图片对应的那个小圆点设置成变量that 因为小圆点本身会有样式 先给它设置样式为默认的
        that.style.backgroundColor = 'skyblue';
        // 对应的这个小圆点的样式就发生了变化
        ol.children[index-1].style.backgroundColor = 'red';
        // 样式转换成功后 在把含有样式的小圆点赋值为变量that
        that = ol.children[index-1];
        // 运动的最后面要把 开关打开 可以让右击再次打开
        flag = true;
    })
}
//左键点击
left.onclick = function(){
    if(!flag){
        return false;
    }
    flag = false;
    // 左点击是从左往右滑动的就变成了index--
    index--;
    move(ul,{left:-index*ul.children[0].offsetWidth},function(){
        if(index ==ul.children.length-1){
            index = 1;
            ul.style.left = -index*ul.children[0].offsetWidth + 'px';
        }
        // 进入事件后首先判断 index的 值
        if(index==0){
            // 如果index的值变成0就重新给index赋值
            index = ul.children.length-2;
            // 并且重新给ul的left赋值为第二张图片的值
            ul.style.left = -index * firstLi.offsetWidth + "px"
        }
        that.style.backgroundColor = 'skyblue';
        ol.children[index-1].style.backgroundColor = 'red';
        that = ol.children[index-1];
        flag = true;
    })
}
// 遍历ol下面的所有li
for(let i=0;i<ol.children.length;i++){
    // 点击小圆点事件
    ol.children[i].onclick = function(){
        if(!flag){
            return false;
        }
        flag = false;
        // 因为小圆点的下边比 图片的下标少1 在小圆点点击事件中就要给index重新赋值
        // 让小圆点和图片能对应上
        index = i+1;
        move(ul,{left:-index*firstLi.offsetWidth},function(){
            // if(index == 0){
            //     index = ul.children.length-2
            //     ul.style.left = -index.ul.children[0].offsetWidth + 'px'
            // }
            that.style.backgroundColor = 'skyblue';
            ol.children[index-1].style.backgroundColor = 'red';
            that = ol.children[index-1];
            flag = true;
        })
    }
}
// 自动轮播
timeId = setInterval(function(){
    if(!flag){
        return false;
    }
    flag = false;
    index++;
    move(ul,{left:-index*firstLi.offsetWidth},function(){
        if(index == ul.children.length-1){
            index = 1
            ul.style.left = -index*ul.children[0].offsetWidth + 'px'
        }
        that.style.backgroundColor = 'skyblue';
        ol.children[index-1].style.backgroundColor = 'red';
        that = ol.children[index-1];
        flag = true;
    })
},2000);

// 鼠标划过轮播停止
div.onmouseover = function(){
    clearInterval(timeId);
}

//鼠标离开后 在进行自动轮播
div.onmouseout = function(){
    timeId = setInterval(function(){
        if(!flag){
            return false;
        }
        flag = false;
        index++;
        move(ul,{left:-index*firstLi.offsetWidth},function(){
            if(index == ul.children.length-1){
                index = 1
                ul.style.left = -index*ul.children[0].offsetWidth + 'px'
            }
            that.style.backgroundColor = 'skyblue';
            ol.children[index-1].style.backgroundColor = 'red';
            that = ol.children[index-1];
            flag = true;
        })
    },1000);
};
//封装好的多运动函数
function move(ele,obj,fn){
    let timeObj = {};
    for(let attr in obj){
        timeObj[attr] = setInterval(function(){
            var target = parseFloat(obj[attr]);
            if(attr === 'opacity'){
                target*=100
            }
            var t = parseFloat(getStyle(ele,attr));
            if(attr === 'opacity'){
                t *=100
            }
            console.log(t)
            var percent = 0;
            if((target-t)/100>0){
                percent = Math.ceil((target-t)/100);
            }else{
                percent = Math.floor((target-t)/100);
            }
            t += percent;
            if(attr === 'opacity'){
                ele.style[attr] = t/100
            }else{
                ele.style[attr] = t + 'px';
            }
            if(t == target){
                clearInterval(timeObj[attr])
                delete timeObj[attr]
                let k = 0;
                for(let i in timeObj){
                    k++;
                }
                if( k==0){
                    fn();
                    console.log(123)
                }
            }
        },10)
    }
}

// 封装好的获取样式的函数
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}
// 封装设置样式的函数
function setStyle(ele,styleObj){
    for(var attr in styleObj){
        ele.style[attr] = styleObj[attr];
    }
}