<template>
    <div class="blog">
        <el-row :gutter="20">
            <el-col :span="20">
                <div>歌曲列表</div>
            </el-col>

        </el-row>
        <el-row :gutter="20">
            <el-col :span="4">
                <div>&nbsp</div>
            </el-col>
            <el-col :span="9">
                <div>歌曲标题</div>
            </el-col>
            <el-col :span="4">
                <div>时长</div>
            </el-col>
            <el-col :span="7">
                <div>歌手</div>
            </el-col>
        </el-row>
        <el-row :gutter="20" v-for="(item,index) in list" :key="item.id">
            <el-col :span="4">
                <div>{{index+1}}</div>
                <audio :src="item.src">aaa</audio>
            </el-col>
            <el-col :span="9">
                <div>{{item.name}}</div>
            </el-col>
            <el-col :span="4">
                <div>{{item.time|dateFormat}}</div>
            </el-col>
            <el-col :span="7">
                <div>{{item.singer}}</div>
            </el-col>
        </el-row>


    </div>

</template>

<script>
    export default {
        name: "blogs",
        data() {
            return {
                count: 10,
                start: 0,
                height: '',
                list: []
            }
        },
        mounted() {
            this.$http.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=307084749&limit=10&offset=0').then(res => {
                if (res.body.code === 200) {
                    localStorage.setItem('data', JSON.stringify(res.body.data.songs));
                }
            })
            this.list = JSON.parse(localStorage.getItem('data') || '[]');
            console.log(this.list)
        },
        methods: {},
        filters: {
            dateFormat: function (dataStr) {
                var m = parseInt(dataStr / 60).toString().padStart(2, '0');
                var s = parseInt(dataStr % 60).toString().padStart(2, '0');
                return `${m}:${s}`;
            }

        }
    }
</script>

<style scoped>
    .blog {
        width: 900px;
        margin: 0 auto;
        font-size: 18px;

    }

    .blog el-col {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

</style>