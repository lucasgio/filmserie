import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/:id',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/top-rated',
    name: 'topRated',
    component: () => import(/* webpackChunkName: "top-rated-movies" */ '../views/MoviesTopRated.vue')
  },
  {
    path: '/upcoming',
    name: 'upcoming',
    component: () => import(/* webpackChunkName: "upcoming-movies" */ '../views/MoviesUpcoming.vue')
  },
  {
    path: '/tv-top-rated',
    name: 'showsRated',
    component: () => import(/* webpackChunkName: "tv-top-rated" */ '../views/PopularTvShow.vue')
  },
  {
    path: '/tv-upcoming',
    name: 'showsUpcoming',
    component: () => import(/* webpackChunkName: "tv-show-upcoming" */ '../views/TvShowsUpcoming.vue')
  },
  {
    path: '/info-series/:id',
    name: 'detailSeries',
    component: () => import(/* webpackChunkName: "tv-show-upcoming" */ '../views/AboutSeries.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
