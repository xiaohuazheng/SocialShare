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