<template>
    <div class="college_body ">
        <div v-for="item in c_list">
            <router-link :key="item.id" :src="item.src" alt="" :width="width" tag="img" :to="item.href"></router-link>
            <br/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "college",
        data() {
            return {
                width: '',
                c_list: [
                    {id: 1, src: require('../assets/part3.jpg'), href: ''},
                    {id: 2, src: require('../assets/c1.jpeg'), href: ''},
                    {id: 3, src: require('../assets/c2.png'), href: '/'},
                    {id: 4, src: require('../assets/c3.png'), href: '/'},
                    {id: 5, src: require('../assets/c4.png'), href: '/'},
                    {id: 6, src: require('../assets/c5.png'), href: '/'}
                ],
            }
        },
        mounted() {
            this.width = document.body.clientWidth * 0.7 + 'px';
            window.addEventListener('resize', () => {
                this.width = document.body.clientWidth * 0.7+ 'px';
            }, false)
        },
        methods: {}
    }
</script>

<style>
    .college_body {
        text-align: center;
    }

    .college_body img {
        height: auto;
        margin: 0 auto;
    }

    .college_body div:nth-child(2) > img {
        vertical-align: middle;
        width: 160px;
        height: 72px;
        margin: 25px;
    }
</style>