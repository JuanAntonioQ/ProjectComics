<template>
    <div class="comic-wrapper">
        <div class="title-container">
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
    .comic-wrapper{
        position: relative;
        width: 180px;
        height: 270px;
        overflow: hidden;
        border: 0px solid transparent;
    }

    .comic-wrapper .title-container{
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

    .comic-wrapper .image-container{
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .comic-wrapper .image-container img{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        transition: all .3s;
    }
</style>
