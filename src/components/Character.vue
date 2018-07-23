<template>
    <div class="character-wrapper">
        <div class="title-container mask">
            <p>{{ data.title }}</p>
        </div>
        <div class="image-container">
            <img :src="data.thumbnail.path + '.' + data.thumbnail.extension " alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'comic',
    props: [ 'data'],
    data(){
        return {

        }
    }
}
</script>

<style>
    .character-wrapper{
        position: relative;
        width: 180px;
        height: 270px;
        overflow: hidden;
        border: 0px solid transparent;
    }

    .character-wrapper .title-container{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .6);
        opacity: 0;
        transition: all .3s;
        z-index: 2;
    }

    .character-wrapper .image-container{
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .character-wrapper .image-container img{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        transition: all .3s;
    }
</style>
