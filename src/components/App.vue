<style>
    .app {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .bg {
        width: 1334px;
        height: 750px;
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
        <!--page1-->
        <div class="page1" v-if="currentPage==1">
            <img src="/img/bj01.jpg" alt="" class="bg">
            <img class="text-1 pa" src="/img/capy01.png" alt="">
            <img class="btn-1 pa" src="/img/btn01.png" @click="nextPage"/>
        </div>
        <!--/page1-->

        <!--page2-->
        <img src="/img/bj05.png" alt="" class="bg" v-if="currentPage>1 && currentPage<6">
        <img class="light pa" src="/img/light.png" alt="" v-if="currentPage>1" v-anim="{animation:'bulb-blink 4s steps(7,start) infinite',frames:[
                {},{opacity:1},{opacity:0.9},{opacity:0.7},{opacity:0.9},{opacity:1},{},'%'] }">
        <img class="text-1 pa" src="/img/capy02.png" alt="" v-if="currentPage==2" transition="title-text" v-trans="{
            transition:{transition:'all 1.2s ease .2s',opacity:1},
            enter:{opacity:0,y:50},
            leave:{opacity:0,'transition-duration':'.2s'},
                 ext:'%'}">
        <img class="btn-1 pa" src="/img/btn02.png" @click="nextPage" v-if="currentPage==2"/>

        <!--/page2-->

        <!-- page3 -->
        <img class="sofa pa" src="/img/sofa.png" alt="" v-if="currentPage>2 && currentPage<6">
        <div class="page3" v-if="currentPage==3">
            <img class="text-1 pa" src="/img/capy03.png" alt=""  v-if="currentPage==3" transition="title-text">
            <img class="btn-1 pa" src="/img/btn03.png" @click="nextPage"/>
        </div>
        <!-- /page3-->

        <!--page4-->
        <div class="page4To5" v-if="currentPage>3 && currentPage<6">
            <img src="/img/curtain.png" alt="" class="curtain pa">
            <img src="/img/curtain01.png" alt="" class="curtain01 pa">
            <img src="/img/draw.png" alt="" class="draw pa">
            <img src="/img/table.png" alt="" class="table pa">
        </div>
        <div class="page4" v-if="currentPage==4">
            <img class="text-1 pa" src="/img/capy04.png" alt="">
            <img class="btn-1 pa" src="/img/btn04.png" @click="nextPage"/>
        </div>
        <!--/page4-->

        <!--page5-->
        <div class="page5" v-if="currentPage==5">
            <img src="/img/food.png" alt="" class="food pa">
            <img class="text-1 pa" src="/img/capy05.png" alt="">
            <img class="btn-1 pa" src="/img/btn05.png" @click="nextPage"/>
        </div>
        <!--/page5-->

        <!--page6-->
        <img src="/img/bj06.png" alt="" class="bg" v-if="currentPage>5">
        <div class="page6" v-if="currentPage==6">
            <img class="text-1 pa" src="/img/capy06.png" alt="">
            <img class="btn-1 pa" src="/img/btn06.png" @click="nextPage"/>
        </div>
        <!--/page6-->

        <!--page7-->
        <div class="page7" v-if="currentPage>6">
            <!-- 延时后给背景加滤镜 -->
            <img src="/img/kongt.png" alt="" class="kongtiao pa">
            <img src="/img/tv.png" alt="" class="tv pa">
            <!-- 加延时-->
            <div class="page7-mask pa">
                <img src="/img/logo.png" alt="" class="logo pa">
            </div>
        </div>
        <!--/page7-->

        <!--page8-->
        <img src="/img/bj06.png" alt="" class="bg" v-if="currentPage==8">
        <!--/page8-->
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
                        console.log('frame is array = ' + val.frames);
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
                    console.log('frames = ' + JSON.stringify(frames));

                    var anim = Smart.Animations.create(name, frames);
                    this.el.style.animation = anim.name + ' ' + time + ' ' + timeFn + ' ' + loop;
                }
            }
        },
        data(){
            return {
                appStyle: {},
                currentPage: 1
            }
        },
        ready(){
            this.autoScale(750, 1334);
        },
        methods: {
            nextPage(){
                //total: 9 pages
                if (this.currentPage <= 9) {
                    this.currentPage++;
                }
            },
            toPage(page){
                this.currentPage = page;
            },
            autoScale(width, height) {
                //设计稿的长宽
                var ratio = width / height;
                var newWidth, newHeight, newX, newY, newScale;
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
                console.log('scale = ' + newScale);
                this.appStyle = {transform: 'scale(' + newScale + ',' + newScale + ')' + ' translate3d(' + newX + 'px,' + newY + 'px,' + '0)'};
                window.addEventListener('resize', function () {
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
                    console.log('scale = ' + newScale);
                    this.appStyle = {transform: 'scale(' + newScale + ',' + newScale + ')' + ' translate3d(' + newX + 'px,' + newY + 'px,' + '0)'};
                }.bind(this));

            }

        }
    }
</script>
