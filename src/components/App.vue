<style>
    .app {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .stage {
        width: 1334px;
        height: 750px;
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

    .btn-1 {
        left: 544px;
        bottom: 50px;
        position: absolute;
        z-index: 10;
    }

    .text-1 {
        left: 387px;
        bottom: 154px;
        position: absolute;
        z-index: 10;
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

    .page7-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
    }

    .logo {
        left: 505px;
        bottom: 298px;
    }

</style>
<template>
    <div class="app">
        <div class="stage" v-auto-scale="{width:1334,height:750}">
            <!--page1-->
            <img src="/img/bj01.jpg" alt="" class="bg" v-if="currentPage==1">
            <img class="text-1 pa" src="/img/capy01.png" alt="" v-if="currentPage==1">
            <img class="btn-1 pa" src="/img/btn01.png" @click="nextPage" v-if="currentPage==1"/>
            <!--/page1-->

            <!--page2-->
            <img src="/img/bj05.png" alt="" class="bg" v-if="currentPage>1 && currentPage<6">
            <img class="light pa" src="/img/light.png" alt="" v-if="currentPage>1" v-anim="{animation:'bulb-blink 5s linear infinite',frames:[
                {},{},{opacity:1},{opacity:1,scaleX:1},{opacity:0.7,scaleX:0.95},{opacity:1,scaleX:1},{opacity:1},{},{},'%'] }">
            <img class="text-1 pa" src="/img/capy02.png" alt="" v-if="currentPage==2" transition="title-text" v-trans="{
            transition:{transition:'all .7s ease .2s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img class="btn-1 pa" src="/img/btn02.png" @click="nextPage" v-if="currentPage==2" transition="title-btn"
                 v-trans="{
            transition:{transition:'opacity .7s ease .7s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'opacity .1s ease'},
                 ext:'%'}"/>

            <!--/page2-->

            <!-- page3 -->
            <img class="sofa pa" src="/img/sofa.png" alt="" v-if="currentPage>2 && currentPage<6"
                 transition="sofa"
                 v-trans="{
            transition:{transition:'all .9s ease .1s',opacity:1},
            enter:{opacity:0,x:-50,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img class="text-1 pa" src="/img/capy03.png" alt="" v-if="currentPage==3" transition="title-text-3"
                 v-trans="{
            transition:{transition:'all .7s ease .7s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img class="btn-1 pa" src="/img/btn03.png" @click="nextPage" v-if="currentPage==3" transition="title-btn-3"
                 v-trans="{
            transition:{transition:'opacity .7s ease 1.4s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'opacity .1s ease'},
                 ext:'%'}"/>
            <!-- /page3-->

            <!--page4-->
            <!--page4 to 5-->
            <img src="/img/curtain.png" alt="" class="curtain pa" v-if="currentPage>3 && currentPage<6"
                 transition="curtain"
                 v-trans="{
            transition:{transition:'all .9s ease .5s',opacity:1},
            enter:{opacity:0,x:50,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="/img/curtain01.png" alt="" class="curtain01 pa" v-if="currentPage>3 && currentPage<6"
                 transition="curtain01" v-trans="{
            transition:{transition:'all .7s ease 1.1s',opacity:1},
            enter:{opacity:0,x:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="/img/draw.png" alt="" class="draw pa" v-if="currentPage>3 && currentPage<6" transition="sofa">
            <img src="/img/table.png" alt="" class="table pa" v-if="currentPage>3 && currentPage<6" transition="table"
                 v-trans="{
            transition:{transition:'all .9s ease 1.5s',opacity:1},
            enter:{opacity:0,x:-20,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <!--/page4 to 5-->
            <img class="text-1 pa" src="/img/capy04.png" alt="" v-if="currentPage==4" transition="title-text-4"
                 v-trans="{
            transition:{transition:'all .7s ease 2.3s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img class="btn-1 pa" src="/img/btn04.png" @click="nextPage" v-if="currentPage==4" transition="title-btn-4"
                 v-trans="{
            transition:{transition:'opacity .7s ease 2.9s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'opacity .1s ease'},
                 ext:'%'}"/>
            <!--/page4-->

            <!--page5-->
            <img src="/img/food.png" alt="" class="food pa" v-if="currentPage==5" transition="food" v-trans="{
            transition:{transition:'all .7s ease',opacity:1},
            enter:{opacity:0,rotate:20,scale:1.3},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img class="text-1 pa" src="/img/capy05.png" alt="" v-if="currentPage==5" transition="title-text-3">
            <img class="btn-1 pa" src="/img/btn05.png" @click="nextPage" v-if="currentPage==5"
                 transition="title-btn-3"/>
            <!--/page5-->

            <!--page6-->
            <img src="/img/bj06.png" alt="" class="bg" v-if="currentPage>5" transition="fade-in" v-trans="{
            transition:{transition:'opacity .7s ease',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'opacity .1s ease'},
                 ext:'%'}">
            <img class="text-1 pa" src="/img/capy06.png" alt="" v-if="currentPage==6" transition="title-text-3">
            <img class="btn-1 pa" src="/img/btn06.png" @click="nextPage" v-if="currentPage==6"
                 transition="title-btn-3"/>
            <!--/page6-->

            <!--page7-->
            <img src="/img/kongt.png" alt="" class="kongtiao pa" v-if="currentPage>6" transition="kongtiao" v-trans="{
            transition:{transition:'all .7s ease 0.2s',opacity:1},
            enter:{opacity:0,x:10,y:10},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <img src="/img/tv.png" alt="" class="tv pa" v-if="currentPage>6" transition="tv" v-trans="{
            transition:{transition:'all .7s ease 0.7s',opacity:1},
            enter:{opacity:0,y:30},
            leave:{opacity:0,transition:'all .1s ease'},
                 ext:'%'}">
            <div class="page7-mask pa" v-if="currentPage>6" transition="mask" v-trans="{
            transition:{transition:'opacity .7s ease 2.4s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'opacity .1s ease'},
                 ext:'%'}">
                <img src="/img/logo.png" alt="" class="logo pa">
            </div>
            <img src="/img/bj07.jpg" alt="" class="bg" style="z-index: 20" v-if="currentPage>6" transition="last-page"
                 v-trans="{
            transition:{transition:'opacity .7s ease 4.4s',opacity:1},
            enter:{opacity:0},
            leave:{opacity:0,transition:'opacity .1s ease'},
                 ext:'%'}"/>
            <!--/page7-->

        </div>
    </div>
</template>
<script>
    export default{
        components: {},
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
                        time = strArray[1] || '1s';
                        timeFn = strArray[2] || 'linear';
                        loop = strArray[3] || 'infinite';
                    } else {
                        name = val.name;    // string, can be null or undefined
                        time = val.time || '1s';
                        timeFn = val.timeFn || 'linear';
                        loop = val.loop || 'infinite';
                    }
                    var anim = Smart.Animations.create(name, frames);
                    this.el.style.animation = anim.name + ' ' + time + ' ' + timeFn + ' ' + loop;
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
                        if (ratio > winRatio) {
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
                        if (ratio > winRatio) {
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
                currentPage: 1
            }
        },
        ready(){
        },
        methods: {
            nextPage(){
                if (this.currentPage <= 9) {
                    this.currentPage++;
                }
            }
        }
    }
</script>
