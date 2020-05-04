import Test from '../components/Test';
import { isMobile } from '../js/common/utils.js';
const ImageCom = () => import('componentsPath/ImageCom');
const AdminCom = () => import('componentsPath/AdminCom');
const PageIndexCom = () => import('componentsPath/PageIndexCom');
const ArticleCom = () => import('componentsPath/ArticleCom');
const WriteCom = () => import('componentsPath/WriteCom');
const ArticleCon = () => import('componentsPath/ArticleCon');
const InCompany = () => import('componentsPath/InCompany');
const ContactCom = () => import('componentsPath/ContactCom');
const Service = () => import('componentsPath/Service');
const CompanyProfile =() => import('componentsPath/CompanyProfile');

// console.log('isMobile', isMobile());

// const articleCom = {
//     render: h => h('div', '文章')
// };
const Login = {
    render: h => h('div', '登录页')
};
// const PageIndexCom = {
//     render: h => h('div', '首页')
// };


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
    {
        path: '/',
        redirect: '/pageIndex',
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/pageIndex',
        component: PageIndexCom,
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/imageNav',
        component: ImageCom,
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/articleNav',
        component: ArticleCom,
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/admin',
        component: AdminCom,
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/write',
        component: WriteCom,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/showArticle',
        component: ArticleCon,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/test',
        component: Test,
        meta: {
            requiresAuth: true
        }
    }, 
    {
        path: '/InCompany',
        component: InCompany,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/CompanyProfile',
        component: CompanyProfile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/ContactCom',
        component: ContactCom,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Service',
        name: 'Service',
        component: Service,
        meta: {
            requiresAuth: true
        }
    },
    // {
    //     path: '/login',
    //     component: Login
    // },

    // 如果未匹配到路由则跳转到pageIndex
    {
        path: '*',
        redirect: '/pageIndex',
        component: PageIndexCom,
        meta: {
            requiresAuth: true
        }
    }
]

const mobileRoutes = [];

export default routes;