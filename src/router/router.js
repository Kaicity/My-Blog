import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/view/Home.vue";
import TeamBlog from "@/view/TeamBlog.vue";
import Work from "@/view/Work.vue";
import Post from "@/view/Post.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/team-page',
            name: 'team',
            component: TeamBlog
        },
        {
            path: '/post-page',
            name: 'post',
            component: Post
        },
        {
            path: '/work-page',
            name: 'work',
            component: Work
        },
    ]
});

export default router;
