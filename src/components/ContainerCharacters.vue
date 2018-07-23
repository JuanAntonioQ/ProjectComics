<template>
    <div class="comics-wrapper">
        <Search @searchItem="savedValue"/>
        <CharacterList :charactersResult="charactersResult" />
    </div>
</template>
<script>

import Search from "./Search";
import CharacterList from './CharacterList';
import axios from "axios";

export default {
    name: 'container-characters',
    components: {
        Search,
        CharacterList
    },
    data() {
        return {
            value: '',
            charactersResult:'',
        }
    },
    methods: {
        savedValue(inputValue) {
            this.value = inputValue;
            this.loadCharacters();
            console.log(this.value);
        },
        loadCharacters() {
            const url = this.getUrl();
            
            axios.get(url).then(response => {
               this.charactersResult = response.data.data.results; 
               console.log(JSON.parse(JSON.stringify(this.charactersResult)));
            })
        },
        getUrl(){
            const url="http://gateway.marvel.com/v1/public/characters";
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
        this.loadCharacters();
    },
    watch: {
        '$route' () {
            this.loadCharacters();
        }
    }
}
</script>
<style>

</style>
