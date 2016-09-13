/**
 * Created by congcong on 9/7/16.
 */
import App from './components/App.vue';
import FastClick from 'fastclick';

//微信分享
var init = {};
//init.type='TXGAME'
init.type = 'SDK';
// init.sdk = '/wechat/?';
var share = new Smart.Share.WechatShare(init);

//=========微信分享 高级设置=========

// 脚本方式设置分享内容
// 重新设置分享相关内容，包括高级接口

//重新设置发送给好友的标题

share.set('appmessage', 'title', "使用 set 函数重新设置标题");

share.set('timeline', 'success', function () {
    alert("朋友圈分享成功")
});

share.set('timeline', 'cancel', function () {
    alert("取消分享到朋友圈")
});

share.set('appmessage', 'success', function () {
    alert("分享给好友成功")
});

share.set('appmessage', 'cancel', function () {
    alert("取消分享给好友")
});
share.update();

//FastClick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
//Vue
new Vue({
    el: 'body',
    components: {
        'app': App
    }
});
