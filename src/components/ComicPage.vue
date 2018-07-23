<template>
    <div class="comicpage-wrapper">
        <div class="img">
            <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension " alt="">
        </div>
        <div class="doc">
            <div class="title">
                <p>{{ comic.title }}</p>
                <p>{{ comic.description }}</p>
            </div>
            <div class="creators">
                <p>Creators</p>
                <p>{{ comic.creators.items[0].name }}</p>
                <p>{{ comic.creators.items[1].name }}</p>
            </div>
            <div class="stories">
                <p>Stories</p>
                <p>{{ comic.stories.items[0].name }}</p>
                <p>{{ comic.stories.items[1].name }}</p>
            </div>
        </div>

        <p @click="goBack()">back</p>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name:'ComicPage',

    data() {
        return {
            id:'',
            comic: '',
        }
    },
    methods: {
        loadComic() {
            const url = this.getUrl();
            console.log(url);
            axios.get(url).then(response => {
               this.comic = response.data.data.results[0]; 
               console.log(JSON.parse(JSON.stringify(this.comic)));
            })
        },
        getUrl(){
            const url="http://gateway.marvel.com/v1/public/comics/" + this.id;
            const apikey="&apikey=da7f3f703cbefdfdeca23571aec71d2e";
            const hash = "&hash=0e534e4d6ad3d742c272eff3fa4f4692"
            const ts="?ts=1";
            return url + ts + apikey + hash;
            
        },
        goBack(){
            this.$router.go(-1);
        }
    },
    watch : {
        '$route' () {
            this.id = this.$route.params.id;
            this.loadComic();
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.loadComic();
    }
}
</script>

<style>

    body {
        padding: 0px;
        margin: 0px;
    }

    .comicpage-wrapper {
        margin: 0;
        padding: 0;
    }

    .img {
        float: left;
        background-color:darkgoldenrod;
        width: auto;
        height: auto;

    }
    .doc {
        background-color: #333;
        color: white;
        height: 900px;
        margin: 0px;
        padding: 0px;
    }

    .creators {
        background-color: #585655;
    }

    .stories {
        background-color: #ededed;
        color: black;
    }

    .title p:first-child {
        font-size: 50px;
        margin: 0;
        padding-top: 60px;

    }

    .title {
        text-align: center;
    }

</style>
