<template>
    <div class="search-wrapper">
    <input @keyup.enter="sendValue()" type="text" v-model="inputValue" placeholder="Name or title starts with...">
    <div @click="ButtonIsClicked" class="select-button">
      <p>{{ selected }}</p>
      <ul :class="{ 'visible' : this.listOfButtons }">
        <li @click="changeRoute()">
          <p>{{nameOfOtherSearch}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Search',
  data(){
    return {
      title : '',
      inputValue : '',
      selected : this.getSelected(),
      nameOfOtherSearch : '',
      listOfButtons : false,
    }
  },
  methods : {
    sendValue(){
      if(this.inputValue !== '' && this.inputValue !== ' '){
        this.$emit('searchItem', this.inputValue);
      }
    },
    changeRoute(){
      if(this.selected === 'comics'){
        this.$router.push({name: 'ContainerCharacters'});
      }else{
        this.$router.push({name: 'ContainerComics'});
      }
    },
    getSelected(){
      const currentUrl = this.$route.path;
      if(currentUrl.includes('comics')){
        return 'comics'
      }else{
        return 'characters'
      }
    },
    ButtonIsClicked(){
      this.listOfButtons = !this.listOfButtons;
    },
    getNameOfOtherSearch(){
      if(this.selected === 'comics'){
        this.nameOfOtherSearch = 'characters';
      }else{
        this.nameOfOtherSearch = 'comics';
      }
    }
  },
  watch : {
    selected(){
      this.changeRoute();
    }
  },
  created(){
    this.getNameOfOtherSearch();
  }
}

</script>
<style >
    


.search-wrapper{
  width: 100%;
  height: 40px;
}

.search-wrapper input{
  vertical-align: top;
  display: inline-block;
  height: 100%;
  border: 0px solid transparent;
  margin-right: -4px;
  box-sizing: border-box;
  width: calc(100% - 200.5px);
  outline: none;
  padding: 0 10px;
}

.search-wrapper .select-button{
  position: relative;
  background-color: #e01f1f;
  width: 200px;
  display: inline-block;
  height: 100%;
  z-index: 2;
  font-weight: bold;
}

.search-wrapper .select-button p{
  font-weight: bold;
  box-sizing: border-box;
  transform: translateY(-50%);
  text-align: center;
  position: relative;
  padding: 0 10px;
}
.search-wrapper .select-button ul{
  display: none;
  bottom: -45.5px;
  position: absolute;
  z-index: 2;
  width: 100%;
}

.search-wrapper .select-button ul.visible{
  display: block;
}

.search-wrapper .select-button ul li{
  background-color: #e01f1f;
  position: relative;
  height: 30px;
  border-top: .5px solid black;
  width: 100%;
  box-sizing: border-box;
}

.search-wrapper .select-button ul li p, .search-wrapper .select-button p{
  user-select: none;
}

</style>
