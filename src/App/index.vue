<template>
    <div style="width: 100%;background: #fff;">
        <div class="page__parent" v-if="isLogin && !isMobile">
            <Nav></Nav>
            <div class="main__box">
                <router-view>
                </router-view>
            </div>
            <PageBottom></PageBottom>
        </div>
        <div class="page__parent-mob" v-if="isLogin && isMobile">
            <MobileNav></MobileNav>
            <div class="main__box-mob">
                <router-view>
                </router-view>
            </div>
        </div>
        <div v-if="!isLogin" style="width: 100%;height: 100%;">
            <Login></Login>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';
    import Login from 'componentsPath/Login';
    import Nav from 'componentsPath/Nav';
    import PageBottom from 'componentsPath/PageBottom';

    import MobileNav from 'mobileComponentsPath/Nav';
    import store from 'rootPath/store/';
    import { mapState, mapMutations } from 'vuex';
    console.log('MobileNav', MobileNav);
    export default ({
        data() {
            return {
                isMobile: window.isMobile
            }
        },
        computed: mapState({
            isLogin: state => state.isLogin
        }),
        components: {
            Login,
            Nav,
            PageBottom,
            MobileNav
        }
    })
</script>
<style scoped lang="postcss">
    @import '../css/common/variable.css';
    @import './index.css';
</style>