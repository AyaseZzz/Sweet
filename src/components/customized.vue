<template>
    <div class="w">
        <div class="c_title">
            <p>高级定制</p>
            <p>CUSTOM</p>
        </div>
        <div class="w_p1">
            <p>制作蛋糕，本身是享受一个创造的过程，希望能把这份美好传递下去。让越来越多的人看到这些有故事的蛋糕，找到共鸣，享受生活中一个个小小的精彩和感动。</p>
            <p>纯手制作，严格选用最上等的原料和最精致用心的设计，为每一位顾客献上最特别的甜点。</p>
            <p>用丰富的灵感赋予甜点更多味蕾以外的升华，给每一个动情时刻带来更多温馨甜美的回忆。</p>
        </div>

        <p class="s_title">1.定制流程</p>
        <div class="w_p1">
            <p>生日、婚礼、企业推广等各种各样的场合，一款体现着特殊意义独一无二的蛋糕将会给宾客留下非常难忘的记忆。</p>
            <p>我们会根据您的要求为您推荐经典的款式，或者也欢迎您加入我们一起设计独一无二的蛋糕作品。</p>
            <p>我们会与您详细讨论所有细节，包括您的活动场地、鲜花设计、场景布置、配色方案、道具摆设和整体风格等。</p>
            <p>这些元素都将纳入到我们的设计过程之中。</p>
        </div>
        <p class="s_title">2.预订周期</p>
        <div class="w_p1">
            <p>由于高级定制款蛋糕制作过程较为复杂，需要耗费更多的时间，建议您提前7个工作日预定。</p>
            <p>如果您需要定制或宴会甜品桌系列，或数量较大的伴手礼，建议提前至少一个月预定。</p>
            <p>在节日和婚礼密集的季节，我们通常非常忙碌，建议您尽最大可能提早预定，我们也将尽全力满足您的订购要求。</p>
        </div>


        <p class="s_title">3.蛋糕口味</p>
        <div class="w_p1">
            <p>我们秉承“蛋糕必须好看，也要好吃”的理念，选用最好品质的进口原料，从国外引进大师级技术和配方，为您带来最精致的体验。</p>
            <p>为保证成品外观质量及口感，本店采用食品原料均为同类产品中最优级，绝无任何防腐或化学添加。翻糖工具及模具均为进口品牌产品，敬请放心食用。</p>
            <p>蛋糕上装饰的翻糖花和3D翻糖造型均可为您量身定制独一无二的纯手工作品。</p>
            <p>如果您对食材过敏情况，请在预定时务必与我们的客服联系。</p>
        </div>
        <p class="l_title">我们的经典口味有：</p>
        <div class="w_p1">
            <p>特浓巧克力口味</p>
            <p>马达加斯加香草口味</p>
            <p>榛子香蕉口味</p>
            <p>宇治抹茶口味</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "customized",
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .w {
        width: 1300px;
        margin: 0 auto 100px;
    }

    .c_title {
        text-align: center;
    }

    .c_title > p:nth-child(1) {
        font-weight: 700;
        font-size: 22px;
        margin-top: 20px;
        color: #4d4d4d;
    }

    .c_title > p:nth-child(2) {
        font-size: 12px;
        /*font-family: 'times new roman', times;*/
        margin-top: 5px;
    }

    .s_title {
        font-size: 18px;

        /*font-size: 16px;*/
        font-weight: 700;
        color: #808080;
        margin: 30px 0;
    }

    .l_title {
        font-size: 16px;

        /*font-size: 16px;*/
        font-weight: 700;
        color: #808080;
        margin: 30px 0;
    }

    .w_p1 > p {
        color: #999999;
        font-size: 16px;
        text-align: left;
        margin-top: 25px;
    }
</style>