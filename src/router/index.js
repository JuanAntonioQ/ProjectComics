import Vue from 'vue';
import Router from 'vue-router';
import IndexComics from '@/components/IndexComics';
import ContainerComics from '@/components/ContainerComics';
import ContainerCharacters from '@/components/ContainerCharacters';
import ComicPage from '@/components/ComicPage';
import CharacterPage from '@/components/CharacterPage';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexComics',
      component: IndexComics,
    },
    {
      path: '/comics',
      name: 'ContainerComics',
      component: ContainerComics,
    },
    {
      path: '/comics/comic/:id',
      name: 'ComicPage',
      component: ComicPage,
    },
    {
      path: '/characters',
      name: 'ContainerCharacters',
      component: ContainerCharacters
    },
    {
      path: '/characters/character/:id',
      name: 'CharacterPage',
      component: CharacterPage
    }
  ],
});
