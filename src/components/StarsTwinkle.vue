<style>
    .stars-twinkle {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0
    }

    .cc-star-box {
        width: 7px;
        height: 7px;
        overflow: hidden;
        position: absolute;
    }

    .cc-star{
        width:49px;
        height:7px;
        position: absolute;
        left:0;
        top:0;
    }
</style>
<template>
    <div class="stars-twinkle">
        <div class="cc-star-box"
             :style="{transform:'scale('+(1+Math.random())+')',left:Math.random()*100+'%', top:Math.random()*100+'%' }"
             v-for="i in sum">
            <img src="../../img/stars.png" alt="" class="cc-star" :style="{transform:'translateX('+(-1)*((i+ii)%7*7)+'px)'}">
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            enable: {
                type: Boolean,
                default: true
            },
            sum: {
                type: Number,
                default: 7
            }

        },
        data(){
            return {
                ii: 0
            }
        },
        watch:{
            'enable':function(val){
                if(val){
                    this.initTimer();
                }
            }
        },
        ready(){
            this.initTimer();
        },
        methods: {
            initTimer(){
                if (!this.enable) {
                    return;
                }
                //do something
                this.ii++;
                if (this.ii >= 7) {
                    this.ii = 0;
                }
                setTimeout(()=> {
                    this.initTimer();
                }, 200);
            }
        }
    }

</script>