<template>
    <div><p v-for="item in list">{{item.name}}</p></div>
</template>

<script>
    export default {
        name: "blogs",
        data() {
            return {
                count:10,
                start:0,
                height: '',
                list:[]
            }
        },
        mounted() {
            this.$http.get('https://api.bzqll.com/music/netease/songList?key=579621905&id=157298573&limit=10&offset=0').then(res => {
                res.body.data.songs.forEach((el)=>{
                   this.list.push(el);
                })
                // console.log(this.list)
                localStorage.setItem('data',JSON.stringify(this.list));

            })
            console.log(JSON.parse(localStorage.getItem('data')));
        },
        methods: {}
    }
</script>

<style scoped>

</style>