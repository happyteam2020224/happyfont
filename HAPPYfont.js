/*
 * @Author: sunzw 
 * @Date: 2020-02-23 23:08:51 
 * @Last Modified by: sunzw
 * @Last Modified time: 2020-02-24 10:13:12
 */
//h-gotext 类 字体逐个显示效果 默认60ms 显示一个字； 可设置自定义属性h-speed设置速度
(function () {
    let sa = [];
    let sp = [];
    (function gotext(i = 0) {
        let ix = 0
        let h = $(".h-gotxt");
        if (i == h.length) {
            return
        };
        if (!sa.length) {
            $(".h-gotxt").map((index, e) => {
                let hT = $(e).text();
                let spN = $(e).attr('h-speed') * 1;
                sa.push(hT.trim());
                (spN * 1 && spN != 0) ? sp.push(spN): (spN == 0) ? sp.push(600) : sp.push(60);
            });
            h.text('');
        };
        let html = h.eq(i);
        let T = setInterval(() => {
            html.text(sa[i].substring(0, ix));
            ix++;
            if (sa[i].length == html.text().length) {
                clearInterval(T);
                return gotext(i + 1)
            };
        }, sp[i]);
    })();
}());