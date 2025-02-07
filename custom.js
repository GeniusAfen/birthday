// 霸都丶傲天 2019.10.10
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的小可爱 - 杨喜宝",  // 同上...
        "今天是你的生日",
        "这是我们认识的",
        "第一个生日哦~",
        "泰戈尔说过",
        "鸟儿愿为一朵云，云儿愿为一只鸟",
        "是啊，每个人都有每个人的向往",
        "愿你在往后的余生里",
        "无忧无惧亦无悔",
        "所思所念，皆能得偿所愿",
        "YAMI~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/70022AE2-46CC-4823-B2FE-592545E2E5D9.jpeg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱 - 杨喜宝": "./imgs/70022AE2-46CC-4823-B2FE-592545E2E5D9.jpeg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点这里开始",
        play: "来点音乐吧",
        bannar_coming: "灯光打开",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};

$(function () {
    let dom = document.createElement("span");
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        console.log(k,config.desc[k])
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});
