<template>
    <div>
        <!--header区域-->
        <div class="header">
            <div class="container">
                <el-row>
                    <el-col :span="4">
                        <router-link class="nav-logo" to="/index">
                            <img src="./assets/logo.png"
                                 alt="">
                        </router-link>
                    </el-col>
                    <el-col :span="14" class="nav">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                                 router>
                            <el-menu-item index="index">首页</el-menu-item>
                            <el-menu-item index="college">蛋糕学院</el-menu-item>
                            <el-menu-item index="customized">高级定制</el-menu-item>
                            <el-menu-item index="works">作品图集</el-menu-item>
                            <el-submenu index="about_us">
                                <template slot="title">关于我们</template>
                                <el-menu-item index="blog">数据接口</el-menu-item>
                                <el-menu-item index="FAQ">FAQ</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                    <el-col :span="4" class="nav-right">
                        <i class="el-icon-search"></i>
                        <i class="el-icon-news"></i>
                        <i class="el-icon-goods"></i>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!--banner&homePage区域-->
        <router-view></router-view>
        <!--底部footer区域-->
        <div class="footer">
            <div class="foot_inner">
                <ul class="foot_nav">
                    <li>
                        <div class="foot_nav_title">
                            <a href="#">关注我们</a>
                        </div>
                        <ul>
                            <li><a href="#">官方微博：2333</a></li>
                            <li><a href="#">官方微信公众号：2333</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="foot_nav_title"><a href="#">支付方式</a></div>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="foot_nav_title"><a href="#">隐私与条款</a></div>
                        <ul>
                            <li><a href="#">隐私政策</a></li>
                            <li><a href="#">条款与条件</a></li>

                        </ul>
                    </li>
                    <li>
                        <div class="foot_nav_title"><a href="#">购买须知</a></div>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </li>

                </ul>
            </div>
            <div class="foot_bar">
                <a href="#">XICP备2333号</a><span class="inner">|</span><a href="#">by AyaseZZZ</a>
            </div>
        </div>

        <div class="to_nav" ref="refNav" @click="backTop"><i class="el-icon-arrow-up"></i></div>


    </div>
</template>
<script>
    export default {

        data() {
            return {
                height: 0
            };
        },
        computed: {
            activeIndex() {
                return this.$route.path.replace('/', '')
            }
        },
        mounted() {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollToTop)
        },

        methods: {
            backTop() {
                var that = this
                var timer = setInterval(() => {
                    var ispeed = Math.floor(-that.scrollTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                    if (that.scrollTop === 0) {
                        clearInterval(timer)
                    }
                }, 16)
            },
            scrollToTop() {
                var that = this
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                that.scrollTop = scrollTop
                if (that.scrollTop > 0) {
                    this.$refs.refNav.style.display = 'block'
                } else {
                    this.$refs.refNav.style.display = 'none'
                }
            }


        },


    }
</script>
<style>

    * {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    body {
        font-family: Helvetica, sans-serif;
    }

    .header {
        box-shadow: 0 1px 3px #888888;
        margin-bottom: 1px;
    }

    .container {
        width: 1200px;
        margin: 0 auto;

    }

    .el-menu--horizontal > .el-menu-item {
        float: left;
        height: 120px;
        line-height: 120px;
        margin: 0;
        border-bottom: 2px solid transparent;
        color: #909399;
        font-size: 15px;
        font-weight: 200;

    }

    .el-menu--horizontal > .el-submenu .el-submenu__title {
        height: 120px;
        line-height: 120px;
        border-bottom: 2px solid transparent;
        color: #909399;
        font-size: 15px;
        font-weight: 200;
    }

    .nav {
        margin-left: 30px;
    }

    .nav-logo {
        display: inline-block;
        width: auto;
        float: left;
        height: 120px;
        line-height: 120px;
    }

    .nav-logo img {
        height: 56%;
        width: auto;
        display: inline-block;
        vertical-align: middle;
    }

    .el-menu--horizontal .el-submenu > .el-menu {
        position: absolute;
        top: 122px;
        left: 0;
        border: none;
        padding: 5px 0;
        background-color: #fff;
        z-index: 100;
        min-width: 100%;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        border-radius: 2px;
    }

    .nav-right {
        height: 120px;
        line-height: 120px;
        letter-spacing: 20px;
    }

    .footer {
        height: 300px;
        background-color: #FAFAFA;
        font-size: 12px;
        min-width: 1400px;
    }

    .foot_inner {
        width: 1300px;
        margin: 0 auto;
        padding: 60px 0 40px;
        height: 150px;
    }

    .foot_nav > li {
        padding: 0 17% 0 0;
        display: inline-block;
        vertical-align: top;
        font-size: 16px;
        color: #969696;
        font-weight: 400;
    }

    .foot_nav_title a {
        color: #969696;
    }

    .foot_nav_title > a:hover {

        color: #000;
    }

    .foot_nav ul {
        font-size: 14px;
        line-height: 20px;
        margin-top: 30px;
        letter-spacing: 1px;
    }

    .foot_nav ul > li {
        margin-top: 10px;

    }

    .foot_nav li > a {
        font-size: 13px;
        color: #000;
    }

    .foot_nav li > a:hover {
        color: #969696;
    }

    .foot_bar {
        border-top: 1px solid #ccc;
        height: 50px;
        line-height: 50px;
        text-align: center;

    }

    .foot_bar a {
        color: #969696;
        font-weight: 400;
        font-size: 12px;
    }

    .foot_bar a:hover {
        color: #EE3B3B;
    }

    .inner {
        color: #969696;
        margin: 0 3px;
    }

    .to_nav {
        position: fixed;
        right: 10px;
        bottom: 20px;
        z-index: 100;
        display: none;
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin-bottom: 14px;
        border: 1px solid #ccc;
        border-radius: 100px;
        text-align: center;
        font-size: 20px;
        color: #000000;
        background-color: #ffffff;

    }

    .to_nav:hover {
        box-shadow: 0 2px 5px #888888;
        transition: all 1s ease;
    }

</style>