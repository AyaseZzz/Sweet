<template>
    <div class="w">
        <div class="c_title">
            <p>常见问题解答</p>
            <p>FREQUENTLY ASKED QUESTIONS</p>
        </div>
        <p class="s_title">1.翻糖蛋糕非常漂亮，但口味怎样？食用安全性如何？</p>
        <div class="w_p1">
            <p>我们对原料及制作过程中的食品卫生安全有充分的保证和信心，是通过国家食品药品监督管理局餐饮服务许可认证的合法企业，尽请您放心品尝。</p>
            <p>我们的所有甜点均为纯手工的制作，精致度毋庸置疑，并且口味也很棒。我们选用最好品质的进口原料，绝无任何防腐或化学添加，并不断改进和创新的工艺及配方，为您带来最精致的体验。</p>
                    </div>

        <p class="s_title">2.翻糖蛋糕有那些口味？</p>
        <div class="w_p1">
            <p>特浓巧克力口味</p>
            <p>马达加斯加香草口味</p>
            <p>榛子香蕉口味</p>
            <p>宇治抹茶口味</p>
        </div>
        <div class="w_p1">
            <p>我们秉承“蛋糕必须好看，也要好吃”的理念，选用最好品质的进口原料，从国外引进大师级技术和配方，为您带来最精致的体验。</p>
            <p>为保证成品外观质量及口感，本店采用食品原料均为同类产品中最优级，绝无任何防腐或化学添加。翻糖工具及模具均为进口品牌产品，敬请放心食用。</p>
            <p>如果您对食材过敏情况，请在预定时务必与我们的客服联系。</p>
        </div>





        <p class="s_title">3. 我应该如何保存蛋糕？</p>
        <div class="w_p1">
            <p>翻糖蛋糕类请勿冷藏，请置放于阴凉干燥处，注意避光保存。</p>
            <p>鲜奶油及奶油蛋糕类产品请于0-5℃冷藏，并在收货当天内食用。</p>
            <p>饼干类产品需常温密封保存，保质期：夏季1个月，冬季2个月。</p>
        </div>


        <p class="s_title">4. 我想要订购蛋糕或宴会甜点，需要提前多久呢？</p>
        <div class="w_p1">
            <p>由于我们的产品全部按照订单制作，没有现货，所以建议您尽可能的提早下单。</p>

        </div>
        <p class="l_title">固有款式：</p>
        <div class="w_p1">
            <p>如果您需要预定我们固有款式类蛋糕（官网及淘宝店中款式），建议您提前至少5个工作日预定。在线订购蛋糕，请仔细阅读订购须知。</p>

        </div>
        <p class="l_title">高级定制：</p>
        <div class="w_p1">
            <p>由于高级定制款蛋糕制作过程较为复杂，需要耗费更多的时间，所以如果您需要定制高级定制款蛋糕，建议您提前7个工作日预定。</p>
            <p>如果您需要定制或宴会甜品桌系列，或数量较大的伴手礼，建议提前至少一个月预定。</p>
            <p>在节日和婚礼密集的季节，我们通常非常忙碌，建议您尽最大可能提早预定，我们也将尽全力满足您的订购要求。</p>

        </div>
        <p class="s_title">5.怎样查看你们更多的设计款式？</p>
        <div class="w_p1">
            <p>您可以在我们的官网上找到过往的一些作品图，更多新鲜资讯和最新的蛋糕美图也请关注我们的官方微信公众号</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "FAQ",
        data() {
            return {
                time:70
            }
        },
        methods: {

        },

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
        font-family: 'Microsoft Yahei';
        /*font-size: 16px;*/
        font-weight: 700;
        color: #808080;
        margin: 30px 0;
    }

    .l_title {
        font-size: 16px;
        font-family: 'Microsoft Yahei';
        /*font-size: 16px;*/
        font-weight: 700;
        color: #808080;
        margin: 30px 0;
    }

    .w_p1 > p {
        color: #999999;
        font-family: 'Microsoft Yahei';
        font-size: 16px;
        text-align: left;
        margin-top: 25px;
    }
</style>