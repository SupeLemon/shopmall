import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ("../views/home/Home")
const Category = () =>
    import ("../views/category/Category")
const Cart = () =>
    import ("../views/cart/Cart")
const Profile = () =>
    import ("../views/profile/Profile")
const Detail = () =>
    import ("views/detail/Detail")
const Login = () =>
    import ("views/login/Login")
const Register = () =>
    import ("views/register/Register")

Vue.use(VueRouter)

const routes = [{
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home,
        meta: {
            showTab: true
        }
    },
    {
        path: "/category",
        component: Category,
        meta: {
            showTab: true
        }
    }, {
        path: "/cart",
        component: Cart,
        meta: {
            showTab: true
        }
    }, {
        path: "/profile",
        component: Profile,
        meta: {
            showTab: true
        }
    }, {
        path: "/detail/:iid",
        component: Detail,
        meta: {
            showTab: false
        }
    },
    {
        path: "/login",
        component: Login,
        meta: {
            showTab: false
        }
    },
    {
        path: "/register",
        component: Register,
        meta: {
            showTab: false
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router