import { createRouter, createWebHistory } from "vue-router";
import Projects from '../components/sections/Projects.vue';
import Home from '../Home.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
