
import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()


const routes=[
    //这里和vue2一样
    {
        path:'/',
        name:'Home',
        component:()=>import('../components/HelloWorld.vue')
    },
    {
        path:'/course',
        name:'course',
        component:()=>import('../components/course.vue')
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('../components/home.vue')
    },
    {
        path:'/class',
        name:'class',
        component:()=>import('../components/class.vue')
    },
    {
        path:'/tag',
        name:'tag',
        component:()=>import('../components/tag.vue')
    },
    {
        path:'/person',
        name:'person',
        component:()=>import('../components/person.vue')
    },
    {
        path:'/classDone',
        name:'classDone',
        component:()=>import('../components/classDone.vue')
    },
    {
        path:'/other',
        name:'other',
        component:()=>import('../components/other.vue')
    }
]
const router = createRouter({
    history: routerHistory,
    routes
})

export default router