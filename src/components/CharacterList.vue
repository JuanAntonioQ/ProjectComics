<template>
    <div class="comiclist-wrapper">
        <ul class="list-wrapper">
            <li v-for="character in charactersResult" :key="character.id">
                <router-link :to="{ name: 'CharacterPage', params: { id : character.id } }" >
                    <Character :data="character"/>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import Character from "./Character"

export default {
    name: "character-list",
    props: ['charactersResult'],
    components: {
        Character,
    },
    data() {
        return {
            
        }
    }
}
</script>
<style>
    .comiclist-wrapper{
        padding: 40px;
        padding-bottom: 80px;
        background-color: #2a2a2b;
        min-height: calc(100vh - 60px);
        box-sizing: border-box;
    }

    .comiclist-wrapper .list-wrapper{
        position: relative;
        padding: 0;
        margin: 0;
    }

    .list-wrapper li{
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .list-wrapper li a{
        display: block;
        border: 0px solid transparent;
        border-radius: 10px;
        box-sizing: border-box;
    }
</style>


