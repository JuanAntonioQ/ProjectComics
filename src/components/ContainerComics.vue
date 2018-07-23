<template>
    <div class="comics-wrapper">
        <Search @searchItem="savedValue"/>
        <ComicList :comicsResult="comicsResult" />
    </div>
</template>


<script>

import Search from "./Search";
import ComicList from './ComicList';

import axios from "axios";

export default {
    name: 'container-comics',
    components: {
        Search,
        ComicList
    },
    data() {
        return {
            value: '',
            comicsResult:'',

        }
    },
    methods: {
        savedValue(inputValue) {
            this.value = inputValue;
            this.loadComics();
            console.log(this.value);
        },
        loadComics() {
            const url = this.getUrl();
            
            axios.get(url).then(response => {
               this.comicsResult = response.data.data.results; 
               console.log(JSON.parse(JSON.stringify(this.comicsResult)));
            })
        },
        getUrl(){
            const url="http://gateway.marvel.com/v1/public/comics";
            const apikey="&apikey=da7f3f703cbefdfdeca23571aec71d2e";
            const hash = "&hash=0e534e4d6ad3d742c272eff3fa4f4692"

            if(this.value !== '') {
                console.log(this.value);
                const title = '?titleStartsWith=' + this.value;
                const ts="&ts=1";
                return url + title + ts + apikey + hash;
            } else {
                const ts="?ts=1";
                return url + ts + apikey + hash;
            }
            
        }
    },
    created(){
        this.loadComics();
    },
    watch: {
        '$route' () {
            this.loadComics();
        }
    }
}
</script>

<style>

</style>
