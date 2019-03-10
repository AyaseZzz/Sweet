<template>
    <div class="blog">
        <el-row>
            <el-col :span="24"><div class="title">歌曲列表</div></el-col>
        </el-row>

        <!--<el-row :gutter="20" class="title">-->
        <!--<el-col :span="2">-->
        <!--<div class="">&nbsp</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
        <!--<div class="">歌曲标题</div>-->
        <!--</el-col>-->
        <!--<el-col :span="3">-->
        <!--<div class="">时长</div>-->
        <!--</el-col>-->
        <!--<el-col :span="7">-->
        <!--<div class="">歌手</div>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :gutter="20" v-for="(item,index) in list" :key="index">-->
        <!--<el-col :span="2">-->
        <!--<div class="">{{index+1}}</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
        <!--<div class="">{{item.name}}</div>-->
        <!--</el-col>-->
        <!--<el-col :span="3">-->
        <!--<div class="">{{item.time|dateFormat}}</div>-->
        <!--</el-col>-->
        <!--<el-col :span="7">-->
        <!--<div class="">{{item.singer}}</div>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <el-table
                :data="list"
                height="800"
                border
                stripe
                style="width: 100%">
            <el-table-column
                    width="80"
                    type="index"
                    :index="indexMethod">
            </el-table-column>
            <el-table-column
                    :show-overflow-tooltip="true"
                    prop="name"
                    label="歌曲标题"
                    width="280">
            </el-table-column>
            <el-table-column
                    :formatter="dateFormat"
                    prop="time"
                    label="时长"
                    width="180"
            >
            </el-table-column>
            <el-table-column
                    :show-overflow-tooltip="true"
                    prop="singer"
                    label="歌手">
            </el-table-column>
            <el-table-column label="操作"  width="80">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)" :key="scope.$index">播放
                    </el-button>

                </template>
            </el-table-column>
        </el-table>

        <!-- 上面是加入js部分的 -->
        <audio src=""preload id="music" hidden></audio>


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
                list: [],
                index:0,
                flag:true
            }
        },
        mounted() {
            this.list = JSON.parse(localStorage.getItem('data') || '[]');
            this.$http.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=2520739691&limit=10&offset=0').then(res => {
                if (res.body.code === 200) {
                    localStorage.setItem('data', JSON.stringify(res.body.data.songs));
                    this.list = JSON.parse(localStorage.getItem('data'));
                }
            })
        },
        methods: {
            indexMethod(index) {
                return (index + 1);
            },
            dateFormat: function (row, column) {
                var date = row[column.property];
                if (date == undefined) {
                    return "";
                }
                var m = parseInt(date / 60).toString().padStart(2, '0');
                var s = parseInt(date % 60).toString().padStart(2, '0');
                return `${m}:${s}`;
            },
            handleEdit(index, row) {
                var audio = document.getElementById('music');
                audio.src = row.url;
                if(this.flag){
                    audio.play();
                    this.index=index;
                    this.flag=false;
                }else{
                    audio.pause();
                    this.flag=true;
                    if(this.index!=index){
                        audio.play();
                    }


                }

                console.log(this.index)

            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
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
        width: 1000px;
        margin: 0 auto;
        font-size: 18px;

    }

    .blog .title {
        color: #333;
        font-weight: 500;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
    }

    /*.blog el-col {*/
    /*white-space: nowrap;*/
    /*text-overflow: ellipsis;*/
    /*overflow: hidden;*/

    /*}*/


</style>