<template>
    <div style="width: 100%;background: #fff;">
        <div class="page__parent-mob" v-if="isLogin">
            <MobileNav></MobileNav>
            <div class="main__box-mob" @touchstart="conTouchStart">
                <router-view>
                </router-view>
            </div>
            <PageBottom></PageBottom>
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
    import PageBottom from 'mobileComponentsPath/PageBottom';
    import MobileNav from 'mobileComponentsPath/Nav';
    import store from 'rootPath/store/';
    import { mapState, mapMutations } from 'vuex';
    
    export default ({
        data() {
            return {
                isMobile: window.isMobile
            }
        },
        computed: mapState({
            isLogin: state => state.isLogin,
            isShowNav: state => state.isShowNav
        }),
        components: {
            Login,
            PageBottom,
            MobileNav
        },
        methods: {
            ...mapMutations([
                'changeNavHandler',
            ]),
            conTouchStart() {
                this.changeNavHandler(false);
            }
        }
    })
</script>
<style scoped lang="postcss">
    @import '../css/common/variable.css';
    @import './index.css';
    .main__box-mob {
        padding-top: 1.6rem;
    }
</style>