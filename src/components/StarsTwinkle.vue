<style>
.stars-twinkle{
}
    .cc-star-box{
        width: 7px;
        height:7px;
        overflow: hidden;
    }
</style>
<template>
    <div class="stars-twinkle">
        <div class="cc-star-box">
            <img src="../../img/stars.png" alt="" :style="'transform:translateX('+i*(-7)+'px)'">
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                i:0,
            }
        },
        ready(){
//            setInterval(()=>{
//                this.i++
//                if(this.i>6){
//                    this.i = 0;
//                }
//            },500);
        }
    }

</script>