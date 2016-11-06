<style>
    .app {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .stage {
        width: 1334px;
        height: 750px;
        left: 0;
        top: 0;
        position: absolute;
    }

    .page {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
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

    .loading {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        z-index: 50;
    }

    .loading-bar {
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        color: #fff;
        font-size: 32px;

    }

    .loading-text{
        left: 50%;
        top: 80%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        color: #fff;
        font-size: 32px;
        -webkit-transition: opacity .7s;
        transition: opacity .7s;
    }

    .p0-capy1 {
        left: 455px;
        bottom: 70px;
        opacity: 0;
    }

    .p0-capy2 {
        left: 315px;
        bottom: 70px;
        opacity: 0;
    }

    .p0-capy3 {
        left: 274px;
        bottom: 70px;
        opacity: 0;
    }

    .p0-capy4 {
        left: 212px;
        bottom: 70px;
        opacity: 0;
    }

    .p0-door {
        left: 768px;
        top: 115px;
    }

    .p1-capy1 {
        left: 440px;
        bottom: 70px;
    }

    .p3-capy2 {
        left: 368px;
        bottom: 70px;
    }

    .p4-capy2 {
        left: 365px;
        bottom: 70px;
    }

    .p6-capy2 {
        left: 312px;
        bottom: 70px;
    }

    .p1-lamp {
        left: 648px;
        top: 36px;
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
        0% {
            width: 20px;
            height: 20px;
            opacity: 0.9;
        }
        75% {
            width: 60px;
            height: 60px;
            opacity: 0.1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes p2Prompt2 {
        0% {
            width: 20px;
            height: 20px;
            opacity: 0.9;
        }
        75% {
            width: 60px;
            height: 60px;
            opacity: 0.1;
        }
        100% {
            opacity: 0;

        }
    }

    .p0-prompt-box {
        width: 80px;
        height: 80px;
        right: -4px;
        top: 196px;
    }

    .p0-prompt-1 {
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        background: #cccdd0;
        opacity: 0.9;
    }

    .p0-prompt-2 {
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;
        background: #cccdd0;
        -webkit-animation: p2Prompt2 1.2s linear infinite;
        animation: p2Prompt2 1.2s linear infinite;
    }

    .p1-prompt-box {
        width: 80px;
        height: 80px;
        left: 644px;
        top: 100px;
    }

    .slogan-box {
        opacity: 0;
        width: 100%;
        height: 86px;
        left: 0;
        bottom: 42px;
        background: url(../../img/02_capy02.png) 0 0 no-repeat;
    }

    .slogan {
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .p2-prompt-box {
        width: 80px;
        height: 80px;
        left: 428px;
        top: 437px;
    }

    .p3-prompt-box {
        width: 80px;
        height: 80px;
        right: 123px;
        bottom: 306px;
    }

    .p4-prompt-box {
        width: 80px;
        height: 80px;
        right: 461px;
        bottom: 220px;
    }

    .p5-prompt-box {
        width: 80px;
        height: 80px;
        left: 164px;
        top: 145px;
    }

    .p6-prompt-box-1 {
        width: 80px;
        height: 80px;
        left: 138px;
        top: 272px;
    }

    .p6-prompt-box-2 {
        width: 80px;
        height: 80px;
        right: 113px;
        top: 208px;
    }

    .p8-logo {
        left: 100px;
        top: 100px;
    }

    .p8-photo {
        left: 66px;
        top: 172px;
    }

    #page8 {
        z-index: 8;
    }

    #page9 {
        z-index: 9;
    }
</style>
<template>
    <div class="app">
        <div class="stage" v-auto-scale="{width:1334,height:750}">
            <!-- page-1 loading -->
            <div class="loading" v-if="currentPage==-1" @click="onClickLoadingPage">
                <div id="indicatorContainer" class="loading-bar pa"></div>
                <div class="loading-text pa" :style="{opacity:isLoadComplete? 1:0}">点击屏幕开始DuPont探索之旅</div>
            </div>
            <img src="../../img/00_bj.jpg" alt="" class="bg"
                 v-show="currentPage==-1||currentPage==0">
            <stars-twinkle :enable="currentPage==-1||currentPage==0" :sum="12"
                           v-show="currentPage==-1||currentPage==0"></stars-twinkle>
            <!-- /page-1 loading -->
            <!--page0-->
            <div id="page0" class="page" @click="onImg1load"
                 v-show="currentPage==0">
                <audio id="audioa">
                    <source src="./audio/footsteps.mp3" type="audio/mpeg">
                    Your browser does not support HTML5 audio.
                </audio>
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
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:1,y:0},'%'] }">
                <div class="p0-door pa">
                    <img src="../../img/00_door.png" alt="" width="231"
                         v-show="currentPage==0"
                         transition="p0-door"
                         v-trans="{
                transition:{transition:'all 1.5s cubic-bezier(.22,.81,.58,.96) 3.3s',opacity:1,scale:1,y:0},
                enter:{opacity:0,scale:0.5,y:-10,'transition-origin':'0 0'},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                    <div class="p0-prompt-box pa"
                         @click="nextPage"
                         v-show="currentPage==0"
                         transition="p0-prompt"
                         v-trans="{
                    transition:{transition:'opacity .7s ease 4.7s',opacity:1},
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
                <img src="../../img/bj01.jpg" alt="" class="bg">
                <img src="../../img/01_capy01.png" alt="" class="p1-capy1 pa"
                     v-show="currentPage==1"
                     transition="title-text"
                     v-trans="{
                    transition:{transition:'all .7s ease .2s',opacity:1},
                    enter:{opacity:0,y:50},
                    leave:{opacity:0,transition:'all .1s ease'},
                         ext:'%'}">
                <img class="p1-lamp pa" src="../../img/01_lamp.png"/>
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
            <div class="slogan-box pa"
                 v-show="currentPage==2"
                 v-anim="{animation:'p2-capy1 3s ease .2s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/02_capy01.png" alt="" class="slogan pa">
            </div>
            <img src="../../img/02_capy03.png" alt="" class="p1-capy1 pa"
                 v-show="currentPage==2"
                 transition="p2-capy3"
                 v-trans="{
                    transition:{transition:'all .7s ease 2.7s',opacity:1},
                    enter:{opacity:0,y:50},
                    leave:{opacity:0,transition:'all .1s ease'},
                         ext:'%'}">
            <div class="p2-prompt-box pa"
                 @click="nextPage"
                 v-show="currentPage==2"
                 transition="p2-prompt"
                 v-trans="{
                transition:{transition:'opacity .7s ease 3s',opacity:1},
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
            transition:{transition:'all .7s ease .1s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="slogan-box pa"
                 v-show="currentPage==3"
                 v-anim="{animation:'p3-capy1 3s ease .5s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/03_capy01.png" alt="" class="slogan pa">
            </div>
            <img src="../../img/03_capy02.png" alt="" class="p3-capy2 pa"
                 v-show="currentPage==3"
                 transition="p3-capy2"
                 v-trans="{
            transition:{transition:'all .7s ease 3.4s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="p3-prompt-box pa"
                 @click="nextPage"
                 v-show="currentPage==3"
                 transition="p3-prompt"
                 v-trans="{
                transition:{transition:'opacity .7s ease 3.8s',opacity:1},
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
            transition:{transition:'all .7s ease .2s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="../../img/curtain01.png" alt="" class="curtain01 pa" v-show="currentPage>3 && currentPage<6"
                 transition="curtain01" v-trans="{
            transition:{transition:'all .7s ease .7s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="../../img/draw.png" alt="" class="draw pa"
                 v-show="currentPage>3 && currentPage<6"
                 transition="draw"
                 v-trans="{
            transition:{transition:'all .7s ease 1.2s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="../../img/table.png" alt="" class="table pa" v-show="currentPage>3 && currentPage<6"
                 transition="table"
                 v-trans="{
            transition:{transition:'all .7s ease 1.7s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <!--/page4 to 5-->
            <!--page4-->
            <div class="slogan-box pa"
                 v-show="currentPage==4"
                 v-anim="{animation:'p4-capy1 3s ease 2.3s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/05_capy01.png" alt="" class="slogan pa">
            </div>
            <img src="../../img/04_capy02.png" alt="" class="p4-capy2 pa"
                 v-show="currentPage==4"
                 transition="p4-capy2"
                 v-trans="{
            transition:{transition:'all .7s ease 5.1s',opacity:1},
            enter:{opacity:0},
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
            enter:{opacity:0},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="slogan-box pa"
                 v-show="currentPage==5"
                 v-anim="{animation:'p5-capy1 2.7s ease .3s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/04_capy01.png" alt="" class="slogan pa">
            </div>
            <img src="../../img/05_capy02.png" alt="" class="p4-capy2 pa"
                 v-show="currentPage==5"
                 transition="p5-capy2"
                 v-trans="{
            transition:{transition:'all .7s ease 2.9s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="p5-prompt-box pa"
                 @click="nextPage"
                 v-show="currentPage==5"
                 transition="p5-prompt"
                 v-trans="{
                transition:{transition:'opacity .7s ease 3.2s',opacity:1},
                enter:{opacity:0},
                leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
                <div class="p0-prompt-1 pa" style="background: #fc3030"></div>
                <div class="p0-prompt-2 pa" style="background: #fc3030"></div>
            </div>
            <!--/page5-->

            <!--page6-->
            <img src="../../img/06_bj.jpg" alt="" class="bg"
                 v-show="currentPage>5"
                 transition="fade-in"
                 v-trans="{
            transition:{transition:'opacity .7s ease',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'opacity .1s ease'},
                 ext:'%'}">
            <div class="slogan-box pa"
                 v-show="currentPage==6"
                 v-anim="{animation:'p5-capy1 2.5s ease .3s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/06_capy01.png" alt="" class="slogan pa">
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
                transition:{transition:'opacity .7s ease 3.2s',opacity:1},
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
                transition:{transition:'opacity .7s ease 3.4s',opacity:1},
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
            enter:{opacity:0},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="../../img/tv.png" alt="" class="tv pa"
                 v-show="isShowTV"
                 transition="tv"
                 v-trans="{
            transition:{transition:'all .7s ease 0.2s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="slogan-box pa"
                 v-show="currentPage==7"
                 v-anim="{animation:'p8-capy1 2.5s ease .6s',frames:[
                {opacity:0,y:50},{opacity:1,y:0},{opacity:1,y:0},{opacity:0,y:-50},'%'] }">
                <img src="../../img/07_capy01.png" alt="" class="slogan pa">
            </div>
            <!--/page7-->

            <!--page8-->
            <div id="page8" class="page" v-show="currentPage>=8">
                <audio id="audiob">
                    <source src="./audio/camera.mp3" type="audio/mpeg">
                    Your browser does not support HTML5 audio.
                </audio>
                <img src="../../img/08_bj.jpg" alt="" class="bg">
                <img src="../../img/08_logo.png" alt="" class="p8-logo pa">
                <img src="../../img/08_photo.png" alt="" class="p8-photo pa"
                     :style="{left:photoX+'px',top:photoY+'px',transform:'scale('+photoScale+') rotate('+photoRotate+'deg)'}">
            </div>
            <!--/page8-->

            <!--page9-->
            <img src="../../img/09_bj.jpg" alt="" id="page9" class="page" v-show="currentPage==9" transition="fade-in">
            <!--/page9-->
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
                    Smart.Animations.createSmartAnimation(name, val.frames);
                    var animationObj = {'animation':val.animation};
                    Smart.Css.smartCss(this.el, animationObj);
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
                        var cssSmartObj = {
                            rotate: 90,
                            x: newX,
                            y: -newY - newHeight,
                            scale: newScale,
                            'transform-origin': '0 0'
                        };
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
                    if (window.orientation == 90 || window.orientation == -90) {
                        resize();
                    }
                    window.onresize = function () {
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
                isLoadComplete:false,
                currentPage: -1,
                isShowKongtiao: false,
                isShowTV: false,
                photoX: 66,
                photoY: 172,
                photoScale: 3.05,
                photoRotate: 4
            }
        },
        ready(){
            this.loading();
            this.initAudio();
        },
        methods: {
            loading(){
                //init radialIndicator
                var radialObj = radialIndicator('#indicatorContainer', {
                    radius:50,
                    barColor: 'rgba(255,255,255,1)',
                    barBgColor:'rgba(255,255,255,0.7)',
                    barWidth: 10,
                    initValue: 10,
                    roundCorner: true,
                    percentage: true
                });
                //init Loader
                var Loader = Smart.Loader;
                var loader = new Loader();
                loader.addImages(document.querySelector('body'));
                var startTime = new Date().getTime();
                var setLoadedPercent = (p)=> {
                    var pp = Math.ceil(Math.min((new Date().getTime() - startTime) / 25 + 10, p));
                    radialObj.animate(pp);
                    if (p >= 100) {
                        if (pp >= 100) {
                            loadedCompelte();
                        } else {
                            //必须异步线程执行自调用,否则容易函数栈堆积而卡死
                            setTimeout(()=> {
                                setLoadedPercent(100);
                            });
                        }
                    }
                };
                var loadedCompelte = ()=> {
                    setTimeout(()=> {
                        this.isLoadComplete = true;
                    }, 1200)
                };
                //监听资源加载进度事件
                loader.addProgressListener(function (p) {
                    setLoadedPercent(Math.max(10,p.completedCount / p.totalCount * 100));
                }.bind(this));
                loader.start();
            },
            onClickLoadingPage(){
                if(this.isLoadComplete){
                    setTimeout(()=>{
                        this.nextPage();
                    },500);
                }
            },
            initAudio(){
                var loadAudio = ()=>{
                    document.getElementById('audioa').load();
                    document.getElementById('audiob').load();
                };
                window.addEventListener('click', loadAudio, false);
                document.getElementById('audioa').oncanplay = ()=>{
                    window.removeEventListener('click', loadAudio, false);
                }
            },
            //只能用 nextPage() 函数来改变页码！！！！！ 因为在此函数中进行页码检测 触发动画
            //nextPage()唯一改变index的函数
            nextPage(){
                this.currentPage++;
                //限幅
                if (this.currentPage > 9) {
                    this.currentPage = 9;
                }
                if(this.currentPage == 0){
                    document.getElementById('audioa').play();
                }
                if(this.currentPage == 1){
                    if(!document.getElementById('audioa').paused){
                        document.getElementById('audioa').pause();
                    }
                }
                if(this.currentPage == 7){
                    setTimeout(()=>{
                        this.nextPage();
                    },4000);
                }
                if (this.currentPage == 8) {
                    document.getElementById('audiob').play();
                    document.getElementById('audiob').onplaying = this.photoJump(1344 / 2, 750 / 2, 56, 273, 3.05, 1, 4, 0, 700);
                }
            },
            onKongtiaoClick(){
                this.isShowKongtiao = true;
                if (this.isShowTV) {
                    this.nextPage();
                }
            },
            onTVClick(){
                this.isShowTV = true;
                if (this.isShowKongtiao) {
                    this.nextPage();
                }
            },
            photoJump(x0, y0, x1, y1, scale0, scale1, rotate0, rotate1, duration){
                duration = Math.ceil(duration / 20);
                var t = 0;
                var iId = setInterval(function () {
                    if (t < duration) {
                        t++;
                        this.photoX = this.linear(t, x0, x1 - x0, duration);
                        this.photoY = this.backEaseOut(t, y0, y1 - y0, duration);
                        this.photoScale = this.linear(t, scale0, scale1 - scale0, duration);
                        this.photoRotate = this.backEaseOut(t, rotate0, rotate1 - rotate0, duration);
                    } else {
                        clearInterval(iId);
                        setTimeout(()=> {
                            this.nextPage();
                        }, 2000)
                    }
                }.bind(this), 20)
            },
            //Tween
            //t:currenttime, b:begin, c:change, d:duration
            linear(t, b, c, d){
                return c * t / d + b;
            },
            backEaseOut(t, b, c, d, s){
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            }
        }
    }
</script>
