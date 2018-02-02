# SocailShare

想要在web上做个分享？不想去引入别人的js？想自己设计样式？那就自己写吧，自己调用方法分享就OK！

这是一个简易版的web社会化分享小代码，无需链接，拷过去用就是啦~
在你的代码里模块化，全局化，就随你了。

## 介绍

其实你都不需要去看这个js，你需要关心的就是怎样可以做到分享。
分享到别人的平台也就是调别人的链接，刚好这些分享平台也提供了这样的链接，那就没有其他难点了。

只需要在自己的页面设计出点击分享的按钮，点击按钮调用相应的分享链接就阔以了。

有个特别的“微信分享”，当然是需要手机扫一扫，所以需要自己生成你要分享的二维码，这里建议（也是我这么坐的），就是自己做样式，做弹窗，在调用weixin方法里传回调弹窗即可。

## 代码

    var SocilaShare = function (opts) {
        opts = opts || {};
        // 缺省参数 - 初始化的时候阔以指定四个参数，设置多了也麻烦，简单就好。
        var url = encodeURIComponent(opts.url || location.href),
            title = encodeURIComponent(opts.title || document.title),
            content = encodeURIComponent(opts.content || ''),
            pic = encodeURIComponent(opts.pic || '');
    
        // 分享平台链接
        var qzone = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={pic}&summary={content}',
            weibo = 'https://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&searchPic=false',
            weixin = 'http://qr.liantu.com/api.php?text={url}',
            douban = 'http://shuo.douban.com/!service/share?href={url}&name={title}&text={content}&image={pic}&starid=0&aid=0&style=11&qq-pf-to=pcqq.c2c',
            twitter = 'https://twitter.com/intent/tweet?text={content}&url={url}&related=' + document.domain,
            facebook = 'https://www.facebook.com/sharer/sharer.php?u={url}&t={title}',
            linkedin = 'https://www.linkedin.com/cws/share?url={url}&token=&isFramed=false&lang=en_US',
            qq = 'https://connect.qq.com/widget/shareqq/index.html?url={url}&desc={title}&pics={pic}',
            google = 'https://plus.google.com/share?url={url}';
    
        // 组装分享链接
        function openSahre (api) {
            var ourl = api.replace('{url}', url).replace('{title}', title).replace('{content}', content).replace('{pic}', pic);
            window.open(ourl, 'newwindow', 'height=600,width=900,top=60,left=40');
        }
    
        // 分享调用方法
        this.qzone = function() {
            openSahre(qzone);
        };
        this.weibo = function() {
            openSahre(weibo);
        };
        this.twitter = function() {
            openSahre(twitter);
        };
        this.facebook = function() {
            openSahre(facebook);
        };
        this.linkedin = function() {
            openSahre(linkedin);
        };
        this.google = function() {
            openSahre(google);
        };
        this.douban = function() {
            openSahre(douban);
        };
        this.qq = function() {
            openSahre(qq);
        };
        this.weixin = function(cb) {
            if (typeof cb === 'function') {
                cb(parseUrl(weixin));
            } else {
                openSahre(weixin);
            }
        };
    };

## 使用

    var weShare = new SocilaShare({
        url: 'https://xiaohuazheng.github.io',
        title: '分享标题',
        content: '分享内容',
        pic: '分享图片'
    });

四个参数都是缺省参数，且并不是四个参数所有的分享链接都能用到。

调用：

    <div class="share-bar">
        <a href="javascript:void(0);" stype="weibo">weibo</a>
        <a href="javascript:void(0);" stype="qzone">qzone</a>
        <a href="javascript:void(0);" stype="qq">qq</a>
        <a href="javascript:void(0);" stype="weixin">weixin</a>
        <a href="javascript:void(0);" stype="twitter">twitter</a>
        <a href="javascript:void(0);" stype="facebook">facebook</a>
        <a href="javascript:void(0);" stype="linkedin">linkedin</a>
        <a href="javascript:void(0);" stype="google">google</a>
        <a href="javascript:void(0);" stype="douban">douban</a>
    </div>
    $(document).on('click', '.share-bar a', function() {
        var type = $(this).attr('stype') || 'weibo';
        weShare[type]();
    });

## DEMO

[点击查看demo][1]

  [1]: https://xiaohuazheng.github.io/demos/2016-08-16-share-demo.html
