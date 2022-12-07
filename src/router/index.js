import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import AdminHomeView from "@/views/AdminHomeView";
import CustomerHomeView from "@/views/CustomerHomeView";
import OrderView from "@/views/OrderView";
import RepairView from "@/views/RepairView";
import MaintenanceView from "@/views/MaintenanceView";
import StorageView from "@/views/StorageView";
import CustomerProfileView from "@/views/CustomerProfileView";
import PricelistView from "@/views/PricelistView";
import AdminFurtherDetailView from "@/views/AdminDetailView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'adminHomeRoute',
    component: AdminHomeView
  },
  {
    path: '/admin/detail',
    name: 'adminDetailRoute',
    component: AdminFurtherDetailView
  },
  {
    path: '/customer',
    name: 'customerHomeRoute',
    component: CustomerHomeView
  },
  {
    path: '/customer/profile',
    name: 'customerProfileRoute',
    component: CustomerProfileView
  },

  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/register',
    name: 'registerRoute',
    component: RegisterView
  },
  {
    path: '/order',
    name: 'orderRoute',
    component: OrderView
  },
  {
    path: '/repair',
    name: 'repairRoute',
    component: RepairView
  },
  {
    path: '/maintenance',
    name: 'maintenanceRoute',
    component: MaintenanceView
  },
  {
    path: '/storage',
    name: 'storageRoute',
    component: StorageView
  },
  {
    path: '/pricelist',
    name: 'pricelistRoute',
    component: PricelistView
  },

]

const router = new VueRouter({
  routes
})

export default router
