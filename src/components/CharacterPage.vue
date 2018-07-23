<template>
    <div class="characterpage-wrapper">
        <div class="img">
            <img :src="character.thumbnail.path + '.' + character.thumbnail.extension " alt="">
        </div>
        <div class="doc">
            <div class="title">
                <p>{{ character.name }}</p>
                <p>{{ character.description }}</p>
            </div>
            
        </div>
        <p @click="goBack()">back</p>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name:'CharacterPage',

    data() {
        return {
            id:'',
            character: '',
        }
    },
    methods: {
        loadCharacter() {
            const url = this.getUrl();
            console.log(url);
            axios.get(url).then(response => {
               this.character = response.data.data.results[0]; 
               console.log(JSON.parse(JSON.stringify(this.character)));
            })
        },
        getUrl(){
            const url="http://gateway.marvel.com/v1/public/characters/" + this.id;
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
            this.loadCharacter();
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.loadCharacter();
    }
}
</script>

<style>

    body {
        padding: 0px;
        margin: 0px;
    }

    .characterpage-wrapper {
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
