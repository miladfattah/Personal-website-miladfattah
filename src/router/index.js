import { createRouter  , createWebHistory } from 'vue-router' 

// route pages 
import Home from '../views/Home/index.vue'
import Articles from '../views/Articles/index.vue'
import Contact from '../views/ContactUs/index.vue'
import Cv from '../views/Cv/index.vue'


const routes = [
    {path: '/' , component :  Home},
    {path: '/article' , component : Articles },
    {path: '/cv' , component : Cv },
    {path: '/contact-us' , component : Contact }
];

const router = createRouter({
    history : createWebHistory() , 
    routes , 
})

export default router ;