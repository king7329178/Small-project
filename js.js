// /封装一个函数 用于查找id　document.getElementById()
function ById(id){
    return typeof (id)==="string"?document.getElementById(id):id;
}

var pics=ById("banner").getElementsByTagName("div"),//结果是一个数组
    len=pics.length,
    index= 0,
    dots=ById("dots").getElementsByTagName("span"),
    prev=ById("prev"),
    next=ById("next"),
    //全局变量
  timer=null;
//1、鼠标的滑过
function slideImg(){
    'use strict';
   var main=ById("main");
    //滑过清除定时器
    main.onmouseover=function(){
        //滑过清除定时器
        if(timer) clearInterval(timer);
    };
    main.onmouseout=function(){//调用onmouseout事件
        timer=setInterval(function(){
            index++;
            if(index>=len){
                index=0;
            }
           //图片切换
            changeImg();
        },3000)
			
    }
    //3、自动触发轮播事件
    main.onmouseout();//调用onmouseout方法

    //4、点击圆点切换图片
        //遍历所有圆点，且绑定单击事件，点击圆点切换图片
    for(let d=0;d<len;d++){
        dots[d].onclick=function(){
            //改变index为当前span的索引
           index=d;
            //调用图片切换函数
            changeImg();
        }
    }
    //5、点击上一张和下一张切换图片
    //下一张
    next.onclick=function(){
        index++;
        if(index>=len) index=0;
        changeImg();
    }
    //上一张
    prev.onclick= function () {
        index--;
        if(index<0) index=len-1;
        changeImg();
    }
}
//2、图片的切换 每隔三秒的切换
    //点击圆点和上下按钮也可以切换
function changeImg(){
    //遍历banner下的所有div及dots下所有的span,将div隐藏，将span清除
    for(var i=0;i<len;i++){
        pics[i].style.display="none";
        dots[i].className="";
    }
    //根据index索引找到当前div和span,将其显示出来和设为当前
    pics[index].style.display="block";
    dots[index].className="active";
    }

slideImg();





