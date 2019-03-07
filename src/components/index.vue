<template>
    <div>
        <div class="block">
            <el-carousel :height="height">
                <el-carousel-item v-for="item in list" :key="item.id">
                    <el-row>
                        <el-col :span="24"><img :src="item.src"></el-col>
                    </el-row>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="home_Page">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content">
                        <router-link to="/works"><img src="../assets/index_pic_1.png" alt=""></router-link>
                        <router-link to="/works" class="do_text">作品图集</router-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content ">
                        <router-link to="/customized"><img src="../assets/index_pic_2.png" alt=""></router-link>
                        <router-link to="/customized" class="do_text">高级定制</router-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content ">
                        <router-link to="/college"><img src="../assets/index_pic_3.png" alt=""></router-link>
                        <router-link to="/college" class="do_text">蛋糕学院</router-link>
                    </div>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                height: '',
                list: [
                    {id: 1, src: require('../assets/part1.jpg')},
                    {id: 2, src: require('../assets/part2.jpg')},
                    {id: 3, src: require('../assets/part3.jpg')},
                    {id: 4, src: require('../assets/part4.jpg')}
                ],
            };
        },
        mounted() {
            this.height = document.body.clientWidth * 664 / 1400 + 'px';
            window.addEventListener('resize', () => {
                this.height = document.body.clientWidth * 664 / 1400 + 'px';
            }, false)
        },
    }
</script>
<style scoped>
    .el-carousel__item div {
        color: #475669;
        height: 500px;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .block img {
        width: 100%;
    }

    .home_Page {
        width: 1300px;
        margin: 50px auto 100px;
    }

    .grid-content img {
        width: 100%;
        height: 100%;
    }

    .do_text {

        display: block;
        width: 100%;
        line-height: 1.4;
        color: #545454;
        margin: 10px auto 0;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
    }

</style>