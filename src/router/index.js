import { createRouter, createWebHistory } from 'vue-router'
import Administrator from '../pages/Administrator.vue'
import Index from '../pages/index.vue' 
import Student from '../pages/student.vue' 
import Branch from '../pages/branch.vue' 
import Official from '../pages/official.vue' 
import Government_employee from '../pages/government_employee.vue' 
import Special_teacher from '../pages/special_teacher.vue' 
import Officer from '../pages/officer.vue' 
import Janitor from '../pages/janitor.vue' 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Administrator',
      name: 'Administrator',
      component: Administrator,
      meta: {
        title: "วิทยาลัยเทคนิคปัว",
        sitemap: {
          changefreq: 'daily',
          priority: 1.0
        }
      }
    },
    {
      path: '/',
      name: 'home',
      component: Index,
      meta: {
        title: "วิทยาลัยเทคนิคปัว",
        sitemap: {
          changefreq: 'daily',
          priority: 1.0
        }
      }
    },
    {
      path: '/student', 
      name: 'student',
      component: Student,
      meta: {
        title: "วิทยาลัยเทคนิคปัว",
        sitemap: {
          changefreq: 'daily',
          priority: 1.0
        }
      }
    },
    {
      path: '/branch', 
      name: 'branch',
      component: Branch,
      meta: {
        title: "วิทยาลัยเทคนิคปัว",
        sitemap: {
          changefreq: 'daily',
          priority: 1.0
        }
      }
    },
    {
      path: '/official', 
      name: 'official',
      component: Official,
      meta: {
        title: "วิทยาลัยเทคนิคปัว",
        sitemap: {
          changefreq: 'daily',
          priority: 1.0
        }
      }
    },
    {
      path: '/government_employee', 
      name: 'government_employee',
      component: Government_employee,
      meta: {
        title: "วิทยาลัยเทคนิคปัว",
        sitemap: {
          changefreq: 'daily',
          priority: 1.0
        }
      }
    },
    {
      path: '/special_teacher', 
      name: 'special_teacher',
      component: Special_teacher,
      meta: {
        title: "วิทยาลัยเทคนิคปัว",
        sitemap: {
          changefreq: 'daily',
          priority: 1.0
        }
      }
    },
    {
      path: '/officer', 
      name: 'officer',
      component: Officer,
      meta: {
        title: "วิทยาลัยเทคนิคปัว",
        sitemap: {
          changefreq: 'daily',
          priority: 1.0
        }
      }
    },
    {
      path: '/janitor', 
      name: 'janitor',
      component: Janitor,
      meta: {
        title: "วิทยาลัยเทคนิคปัว",
        sitemap: {
          changefreq: 'daily',
          priority: 1.0
        }
      }
    },

  ]
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})
export default router
