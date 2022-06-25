import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../App'

const routes = [
	{
		path: '/home',
		name: 'home',
		component: HomeView,
		alias: '/',
		meta: {
			view: 'home'
		}
	},
	{
		path: '/booking',
		name: 'booking',
		component: () => import('../views/BookingView.vue'),
		// meta: {
		// 	view: 'booking'
		// }
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
