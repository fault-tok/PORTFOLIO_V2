import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
		// index
		path: "/",
		redirect: {
			name: "welcome",
		},
	},
    {
        // welcome
        path: "/welcome",
        name: "welcome",
		redirect:{
			name: "welcome-information",
		},
        component: () => import("../views/welcome/index.vue"),
		children:[
			{
				path: "welcome-information",
				name: "welcome-information",
				component: () => import ("../views/welcome/welcome.vue")
			}
		]
    },
]

const router = createRouter({
	history: createWebHistory(),
	mode: "history",
	routes: routes,
	scrollBehavior() {
		return {
			top: 0,
			behavior: "smooth",
		};
	},
});

export default router;