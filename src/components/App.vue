<style>
    .app {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .stage {
        width: 1334px;
        height: 750px;
        left:0;
        top:0;
        position: absolute;
    }

    .page{
        width:100%;
        height: 100%;
        left:0;
        top:0;
        position: absolute;
    }

    .bg {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        z-index: -10;
    }

    .p0-capy1{
        left: 455px;
        bottom: 70px;
        opacity:0;
    }

    .p0-capy2{
        left: 315px;
        bottom: 70px;
        opacity:0;
    }

    .p0-capy3{
        left: 274px;
        bottom: 70px;
        opacity:0;
    }

    .p0-capy4{
        left: 212px;
        bottom: 70px;
        opacity:0;
    }

    .p0-door{
        left:768px;
        top:115px;
    }

    .p1-capy1{
        left:440px;
        bottom:70px;
    }

    .p3-capy2{
        left:368px;
        bottom:70px;
    }
    .p4-capy2{
        left:365px;
        bottom:70px;
    }

    .p6-capy2{
        left:312px;
        bottom:70px;
    }

    .p1-lamp{
        left:648px;
        top:36px;
    }

    .light {
        left: 9px;
        top: 186px;
    }

    .sofa {
        left: 160px;
        bottom: 75px;
    }

    .curtain {
        right: 56px;
        bottom: 105px;
    }

    .curtain01 {
        left: 540px;
        bottom: 344px;
    }

    .draw {
        left: 282px;
        top: 81px;
    }

    .table {
        left: 186px;
        bottom: 23px;
    }

    .food {
        left: 753px;
        bottom: 245px;
    }

    .kongtiao {
        left: 64px;
        bottom: 0;
    }

    .tv {
        right: 90px;
        bottom: 371px;
    }

    @-webkit-keyframes p2Prompt2 {
        0%{
            width: 20px;
            height:20px;
            opacity:0.9;
        }
        75%{
            width: 60px;
            height:60px;
            opacity:0.1;
        }
        100%{
            opacity:0;
        }
    }
    @keyframes p2Prompt2 {
        0%{
            width: 20px;
            height:20px;
            opacity:0.9;
        }
        75%{
            width: 60px;
            height:60px;
            opacity:0.1;
        }
        100%{
            opacity:0;

        }
    }
    .p0-prompt-box{
        width:80px;
        height:80px;
        right:-4px;
        top:196px;
    }

    .p0-prompt-1{
        width:20px;
        height:20px;
        left:50%;
        top:50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        background: #cccdd0;
        opacity:0.9;
    }

    .p0-prompt-2{
        width:20px;
        height:20px;
        left:50%;
        top:50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        background: #cccdd0;
        -webkit-animation:p2Prompt2 1.2s  linear infinite;
        animation:p2Prompt2 1.2s linear infinite;
    }

    .p1-prompt-box{
        width:80px;
        height:80px;
        left:644px;
        top:100px;
    }

    .p2-capy1-box{
        opacity:0;
        width: 1334px;
        height:86px;
        left:0;
        bottom:42px;
        background: url(../../img/02_capy02.png) 0 0 no-repeat;
    }

    .p2-capy1{
        left:218px;
        top: 32px;
    }

    .p4-capy1{
        left:170px;
        top: 32px;
    }

    .p5-capy1{
        left:176px;
        top: 32px;
    }
    .p6-capy1{
        left:224px;
        top: 32px;
    }

    .p7-capy1{
        left:192px;
        top: 32px;
    }

    .p2-prompt-box{
        width:80px;
        height:80px;
        left:428px;
        top:437px;
    }

    .p3-prompt-box{
        width:80px;
        height:80px;
        right:123px;
        bottom:306px;
    }

    .p4-prompt-box{
        width:80px;
        height:80px;
        right:461px;
        bottom:220px;
    }

    .p5-prompt-box{
        width:80px;
        height:80px;
        left:164px;
        top:145px;
    }
    .p6-prompt-box-1{
        width:80px;
        height:80px;
        left:138px;
        top:272px;
    }
    .p6-prompt-box-2{
        width:80px;
        height:80px;
        right:113px;
        top:208px;
    }
</style>
<template>
    <div class="app">
        <div class="stage" v-auto-scale="{width:1334,height:750}">
            <!--page0-->
           <div id="page0" class="page"
                v-show="currentPage==0">
               <img src="../../img/00_bj.jpg" alt="" class="bg"
                    v-show="currentPage==0">
               <img src="../../img/00_capy1.png" alt="" class="p0-capy1 pa" width="421"
                    v-show="currentPage==0"
                    v-anim="{animation:'p0-capy1 1.3s ease .2s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
               <img src="../../img/00_capy2.png" alt="" class="p0-capy2 pa" width="698"
                    v-show="currentPage==0"
                    v-anim="{animation:'p0-capy2 1.9s ease 1.2s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
               <img src="../../img/00_capy3.png" alt="" class="p0-capy3 pa" width="786"
                    v-show="currentPage==0"
                    v-anim="{animation:'p0-capy3 2.1s ease 2.6s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
               <img src="../../img/00_capy4.png" alt="" class="p0-capy4 pa" width="907"
                    v-show="currentPage==0"
                    v-anim="{animation:'p0-capy4 2.1s ease 4.1s normal forwards',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:1,y:0},'%'] }"
                    @animationstart="isP0Capy4AnimStart=true">
               <div class="p0-door pa">
                   <img src="../../img/00_door.png" alt="" width="231"
                        v-show="isP0Capy4AnimStart==true"
                        transition="p0-door"
                        v-trans="{
                transition:{transition:'all .9s cubic-bezier(.22,.81,.58,.96) .2s',opacity:1,scale:1,y:0},
                enter:{opacity:0,scale:0,y:-10,'transition-origin':'0 0'},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                   <div class="p0-prompt-box pa"
                        @click="nextPage"
                        v-show="isP0Capy4AnimStart==true"
                        transition="p0-prompt"
                        v-trans="{
                    transition:{transition:'opacity .7s ease 1.1s',opacity:1},
                    enter:{opacity:0},
                    leave:{opacity:0,transition:'all .1s ease'},
                     ext:'%'}">
                       <div class="p0-prompt-1 pa"></div>
                       <div class="p0-prompt-2 pa"></div>
                   </div>
               </div>
           </div>
            <!--/page0-->


            <!--page1-->
            <div id="page1" class="page"
                 v-show="currentPage==1">
                <img src="../../img/bj01.jpg" alt="" class="bg" >
                <img src="../../img/01_capy01.png" alt="" class="p1-capy1 pa"
                     v-show="currentPage==1"
                     transition="title-text"
                     v-trans="{
                    transition:{transition:'all .7s ease .2s',opacity:1},
                    enter:{opacity:0,y:50},
                    leave:{opacity:0,transition:'all .1s ease'},
                         ext:'%'}">
                <img class="p1-lamp pa" src="../../img/01_lamp.png" />
                <div class="p1-prompt-box pa"
                     @click="nextPage"
                     v-show="currentPage==1"
                     transition="p1-prompt"
                     v-trans="{
                transition:{transition:'opacity .7s ease .6s',opacity:1},
                enter:{opacity:0},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                    <div class="p0-prompt-1 pa"></div>
                    <div class="p0-prompt-2 pa"></div>
                </div>
            </div>
            <!--/page1-->

            <!--page2-->
            <img src="../../img/bj05.png" alt="" class="bg" v-show="currentPage>1 && currentPage<6">
            <img class="light pa" src="../../img/light.png" alt="" v-show="currentPage>1" v-anim="{animation:'bulb-blink 5s linear infinite',frames:[
                {},{},{opacity:1},{opacity:1,scaleX:1},{opacity:0.7,scaleX:0.95},{opacity:1,scaleX:1},{opacity:1},{},{},'%'] }">
            <div class="p2-capy1-box pa"
                 v-show="currentPage==2"
                 v-anim="{animation:'p2-capy1 2.5s ease .2s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/02_capy01.png" alt="" class="p2-capy1 pa">
            </div>
            <img src="../../img/02_capy03.png" alt="" class="p1-capy1 pa"
                 v-show="currentPage==2"
                 transition="p2-capy3"
                 v-trans="{
                    transition:{transition:'all .7s ease 2.5s',opacity:1},
                    enter:{opacity:0,y:50},
                    leave:{opacity:0,transition:'all .1s ease'},
                         ext:'%'}">
            <div class="p2-prompt-box pa"
                 @click="nextPage"
                 v-show="currentPage==2"
                 transition="p2-prompt"
                 v-trans="{
                transition:{transition:'opacity .7s ease 2.9s',opacity:1},
                enter:{opacity:0},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                <div class="p0-prompt-1 pa" style="background: #fc3030"></div>
                <div class="p0-prompt-2 pa" style="background: #fc3030"></div>
            </div>
            <!--/page2-->

            <!-- page3 -->
            <img class="sofa pa" src="../../img/sofa.png" alt=""
                 v-show="currentPage>2 && currentPage<6"
                 transition="sofa"
                 v-trans="{
            transition:{transition:'all .9s ease .1s',opacity:1},
            enter:{opacity:0,x:-50,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="p2-capy1-box pa"
                 v-show="currentPage==3"
                 v-anim="{animation:'p3-capy1 2.5s ease .5s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/03_capy01.png" alt="" class="p2-capy1 pa">
            </div>
            <img src="../../img/03_capy02.png" alt="" class="p3-capy2 pa"
                 v-show="currentPage==3"
                 transition="p3-capy2"
                 v-trans="{
            transition:{transition:'all .7s ease 2.9s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="p3-prompt-box pa"
                 @click="nextPage"
                 v-show="currentPage==3"
                 transition="p3-prompt"
                 v-trans="{
                transition:{transition:'opacity .7s ease 3.3s',opacity:1},
                enter:{opacity:0},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                <div class="p0-prompt-1 pa" style="background: #fc3030"></div>
                <div class="p0-prompt-2 pa" style="background: #fc3030"></div>
            </div>
            <!-- /page3-->

            <!--page4-->
            <!--page4 to 5-->
            <img src="../../img/curtain.png" alt="" class="curtain pa" v-show="currentPage>3 && currentPage<6"
                 transition="curtain"
                 v-trans="{
            transition:{transition:'all .9s ease .5s',opacity:1},
            enter:{opacity:0,x:50,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="../../img/curtain01.png" alt="" class="curtain01 pa" v-show="currentPage>3 && currentPage<6"
                 transition="curtain01" v-trans="{
            transition:{transition:'all .7s ease 1.1s',opacity:1},
            enter:{opacity:0,x:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="../../img/draw.png" alt="" class="draw pa" v-show="currentPage>3 && currentPage<6" transition="sofa">
            <img src="../../img/table.png" alt="" class="table pa" v-show="currentPage>3 && currentPage<6" transition="table"
                 v-trans="{
            transition:{transition:'all .9s ease 1.5s',opacity:1},
            enter:{opacity:0,x:-20,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <!--/page4 to 5-->
            <!--page4-->
            <div class="p2-capy1-box pa"
                 v-show="currentPage==4"
                 v-anim="{animation:'p4-capy1 2.7s ease 2.1s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/04_capy01.png" alt="" class="p4-capy1 pa">
            </div>
            <img src="../../img/04_capy02.png" alt="" class="p4-capy2 pa"
                 v-show="currentPage==4"
                 transition="p4-capy2"
                 v-trans="{
            transition:{transition:'all .7s ease 4.3s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="p4-prompt-box pa"
                 @click="nextPage"
                 v-show="currentPage==4"
                 transition="p4-prompt"
                 v-trans="{
                transition:{transition:'opacity .7s ease 5.4s',opacity:1},
                enter:{opacity:0},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                <div class="p0-prompt-1 pa" style="background: #fc3030"></div>
                <div class="p0-prompt-2 pa" style="background: #fc3030"></div>
            </div>
            <!--/page4-->

            <!--page5-->
            <img src="../../img/food.png" alt="" class="food pa" v-show="currentPage==5" transition="food" v-trans="{
            transition:{transition:'all .7s ease',opacity:1},
            enter:{opacity:0,rotate:20,scale:1.3},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="p2-capy1-box pa"
                 v-show="currentPage==5"
                 v-anim="{animation:'p5-capy1 2.5s ease .3s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/05_capy01.png" alt="" class="p5-capy1 pa">
            </div>
            <img src="../../img/05_capy02.png" alt="" class="p4-capy2 pa"
                 v-show="currentPage==5"
                 transition="p5-capy2"
                 v-trans="{
            transition:{transition:'all .7s ease 2.7s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="p5-prompt-box pa"
                 @click="nextPage"
                 v-show="currentPage==5"
                 transition="p5-prompt"
                 v-trans="{
                transition:{transition:'opacity .7s ease 3.1s',opacity:1},
                enter:{opacity:0},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                <div class="p0-prompt-1 pa" style="background: #fc3030"></div>
                <div class="p0-prompt-2 pa" style="background: #fc3030"></div>
            </div>
            <!--/page5-->

            <!--page6-->
            <img src="../../img/bj06.png" alt="" class="bg" v-show="currentPage>5" transition="fade-in" v-trans="{
            transition:{transition:'opacity .7s ease',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'opacity .1s ease'},
                 ext:'%'}">
            <div class="p2-capy1-box pa"
                 v-show="currentPage==6"
                 v-anim="{animation:'p5-capy1 2.5s ease .3s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/06_capy01.png" alt="" class="p6-capy1 pa">
            </div>
            <img src="../../img/06_capy02.png" alt="" class="p6-capy2 pa"
                 v-show="currentPage==6"
                 transition="p6-capy2"
                 v-trans="{
            transition:{transition:'all .7s ease 2.7s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="p6-prompt-box-1 pa"
                 @click="onKongtiaoClick"
                 v-show="currentPage==6&&!isShowKongtiao"
                 transition="p6-prompt-1"
                 v-trans="{
                transition:{transition:'opacity .7s ease 3.1s',opacity:1},
                enter:{opacity:0},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                <div class="p0-prompt-1 pa" style="background: #fc3030"></div>
                <div class="p0-prompt-2 pa" style="background: #fc3030"></div>
            </div>
            <div class="p6-prompt-box-2 pa"
                 @click="onTVClick"
                 v-show="currentPage==6&&!isShowTV"
                 transition="p6-prompt-2"
                 v-trans="{
                transition:{transition:'opacity .7s ease 3.1s',opacity:1},
                enter:{opacity:0},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                <div class="p0-prompt-1 pa" style="background: #fc3030"></div>
                <div class="p0-prompt-2 pa" style="background: #fc3030"></div>
            </div>
            <!--/page6-->

            <!--page7-->
            <img src="../../img/kongt.png" alt="" class="kongtiao pa"
                 v-show="isShowKongtiao"
                 transition="kongtiao"
                 v-trans="{
            transition:{transition:'all .7s ease 0.2s',opacity:1},
            enter:{opacity:0,x:10,y:10},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="../../img/tv.png" alt="" class="tv pa"
                 v-show="isShowTV"
                 transition="tv"
                 v-trans="{
            transition:{transition:'all .7s ease 0.2s',opacity:1},
            enter:{opacity:0,y:30},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="p2-capy1-box pa"
                 v-show="currentPage==7"
                 v-anim="{animation:'p8-capy1 2.5s ease .6s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/07_capy01.png" alt="" class="p7-capy1 pa">
            </div>
            <!--/page7-->

        </div>
    </div>
</template>
<script>
    import StarsTwinkle from './StarsTwinkle.vue'
    export default{
        components: {
            'stars-twinkle': StarsTwinkle
        },
        directives: {
            'trans': {
                update: function (val) {
                    var className = this.el.className;
                    var str = className.match(/\b([0-9A-Za-z-]+)-transition\b/g);
                    var transName = RegExp.$1;
                    var cssObj = val;
                    var ext = cssObj.ext || '%';     //默认单位是px
                    delete cssObj.ext;
                    Smart._.each(cssObj, function (v, k) {
                        Smart.Css.createSmartCssStyle('.' + transName + '-' + k, v, ext);
                    });
                }
            },
            'anim': {
                update: function (val) {
                    var name = '';
                    var time = '';
                    var timeFn = '';
                    var loop = '';
                    var ext = 'px';     //默认单位是px
                    var frames = {};    //obj, required!
                    //取得frames对象
                    if (val.frames instanceof Array) {  // val.frames is [Object Array]
                        var length = val.frames.length;
                        var lastArg = val.frames[length - 1];
                        var key = '';
                        if (typeof lastArg === 'string') {
                            ext = lastArg;
                            val.frames.splice(length - 1, 1);
                            length -= 1;
                        }
                        for (var i = 0; i < length; i++) {
                            key = (i / (length - 1) * 100).toFixed(1) + '%';
                            frames[key] = val.frames[i];
                        }
                        frames['ext'] = ext;
                    } else {     // val.frames is [Object Object]
                        frames = val.frames;
                    }
                    //取得animation的css字符串
                    if (val.animation != undefined) {
                        var str = val.animation;
                        var strArray = str.split(' ');
                        name = strArray[0];
                    } else {
                        name = val.name;    // string, can be null or undefined
                        time = val.time || '1s';
                        timeFn = val.timeFn || 'linear';
                        loop = val.loop || 'infinite';
                    }
                    var anim = Smart.Animations.create(name, frames);
                    this.el.style.animation = val.animation;
                }
            },
            'auto-scale': {
                update: function (val) {
                    var el = this.el;
                    var width = val.width;
                    var height = val.height;
                    var ratio = width / height;
                    var newWidth, newHeight, newX, newY, newScale;
                    var resize = function () {
                        var winWidth = window.innerWidth;
                        var winHeight = window.innerHeight;
                        var winRatio = winWidth / winHeight;
                        if (ratio < winRatio) {
                            newWidth = winWidth;
                            newHeight = newWidth / ratio;
                        } else {
                            newHeight = winHeight;
                            newWidth = newHeight * ratio;
                        }
                        newX = (winWidth - newWidth ) / 2;     //translateX
                        newY = (winHeight - newHeight ) / 2;   //translateY
                        newScale = newWidth / width;            //scaleX,scaleY
                        var cssSmartObj = {x: newX, y: newY, scale: newScale, 'transform-origin': '0 0'};
                        Smart.Css.smartCss(el, cssSmartObj, 'px');
                    };
                    //portrait
                    var portraitResize = function () {
                        var winWidth = window.innerHeight;
                        var winHeight = window.innerWidth;
                        var winRatio = winWidth / winHeight;
                        if (ratio < winRatio) {
                            newWidth = winWidth;
                            newHeight = newWidth / ratio;
                        } else {
                            newHeight = winHeight;
                            newWidth = newHeight * ratio;
                        }
                        newX = (winWidth - newWidth ) / 2;     //translateX
                        newY = (winHeight - newHeight ) / 2;   //translateY
                        newScale = newWidth / width;            //scaleX,scaleY
                        var cssSmartObj = {rotate:90, x: newX, y: -newY-newHeight, scale: newScale, 'transform-origin': '0 0'};
                        Smart.Css.smartCss(el, cssSmartObj, 'px');
                    };

                    //PC端
                    if (typeof window.orientation === 'undefined') {
                        resize();
                    }
                    //移动端
                    //竖屏
                    if (window.orientation == 180 || window.orientation == 0) {
                        portraitResize();
                    }
                    //横屏
                    if (window.orientation == 90 || window.orientation == -90 ) {
                        resize();
                    }
                    window.onresize = function(){
                        //PC端
                        if (typeof window.orientation === 'undefined') {
                            resize();
                        }
                        //移动端
                        //竖屏
                        if (window.orientation == 180 || window.orientation == 0) {
                            portraitResize();
                        }
                        //横屏
                        if (window.orientation == 90 || window.orientation == -90) {
                            resize();
                        }
                    };
                }
            }
        },
        data(){
            return {
                currentPage: -1,
                isP0Capy4AnimStart:false,
                isShowKongtiao:false,
                isShowTV:false
            }
        },
        ready(){
            this.currentPage = 0;
        },
        methods: {
            nextPage(){
                this.currentPage++;
                if (this.currentPage > 9) {
                    this.currentPage = 9;
                }
            },
            onP0Capy4AnimationEnd(e){
                e.target.style.opacity = 1;
            },
            onKongtiaoClick(){
                this.isShowKongtiao=true;
                if(this.isShowTV){
                    this.nextPage();
                }
            },
            onTVClick(){
                this.isShowTV=true;
                if(this.isShowKongtiao){
                    this.nextPage();
                }
            },
        }
    }
</script>
