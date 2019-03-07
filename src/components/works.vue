<template>
    <div class="works">
        <div class="w">
            <div class="w_container">
                <router-link v-for="item in w_list" :to="item.path" :key="item.id"><img :src="item.src" ></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "works",
        data() {
            return {
                w_list:[
                    {id:1,src: require('../assets/w1.png'),path:'/'},
                    {id:2,src: require('../assets/w2.png'),path:'/'},
                    {id:3,src: require('../assets/w3.png'),path:'/'}
                ]
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .works{
        margin: 70px 0;
    }
    .w {
        width: 1200px;
        margin: 0 auto;

    }
    .works .w_container{

        display: flex;
        flex-direction: row  ;
        justify-content: space-between;

    }
    .works .w_container a{
        width: 30%;
        height: auto;


    }
    .works .w_container img{
        width: 100%;
    }
    /*.works .w_container a:nth-child(2){*/
        /*margin: 0 5%;*/
    /*}*/
</style>