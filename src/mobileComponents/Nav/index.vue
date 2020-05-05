<template>
    <div class="nav">
        <div class="nav-title">
            <div class="logo">
                <img src="../../images/logo4.png" />
            </div>
            <div @click="navBtnClick" class="btn" :class="[isShowNav ? 'nav-show' : 'nav-hide']">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
            </div>
        </div>
        <div class="nav-con" :style="{height: isShowNav ? '3.5rem' : '0'}">
            <router-link class="nav-item" active-class="active" to="">
                <div class="nav-item-child">首页</div>
            </router-link>
            <router-link class="nav-item" to="">
                <div class="nav-item-child">公司简介</div>
            </router-link>
            <router-link class="nav-item" to="">
                <div class="nav-item-child">服务</div>
            </router-link>
            <router-link class="nav-item" to="">
                <div class="nav-item-child">新闻</div>
            </router-link>
        </div>
    </div>
</template>
<script>
    import { mapState, mapMutations } from 'vuex';
    export default ({
        data() {
            return {
                isMobile: window.isMobile,
            }
        },
        components: {
        },
        computed: mapState({
            isShowNav: state => state.isShowNav
        }),
        methods: {
            ...mapMutations([
                'changeNavHandler',
            ]),
            navBtnClick() {
                this.changeNavHandler(!this.isShowNav);
            }
        }
    })
</script>
<style scoped lang="postcss">
    @import '../../css/common/variable.css';
    .nav {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        /* border: 1px solid black; */
        background: #fff;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.05);
        /* height: 1.6rem; */
        .nav-title {
            padding: 0 0.2rem;
            height: 1.6rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .logo {
                img {
                    width: 1.2rem;
                    heigth: 1.2rem;
                }
            }
            .btn {
                .line {
                    transition: all 0.5s;
                    width: 0.6rem;
                    height: 0.06rem;
                    border-radius: 0.2rem;
                    background: #3ba7c6;
                    margin-bottom: 0.15rem;
                    border: none;
                }
            }
            .nav-show {
                .line1 {
                    transform: rotate(45deg);
                }
                .line2 {
                    display: none;
                }
                .line3 {
                    transform: rotate(-45deg) translate(0.12rem, -0.12rem);
                }
            }
        }
        .nav-con {
            transition: all 0.2s;
            overflow: hidden;
            padding: 0 0.25rem;
            .nav-item {
                font-size: 0.4rem;
                color: #666;
                line-height: 0.8rem;
                &.active {
                    color: #3ba7c6;
                    .nav-item-child {
                        margin-bottom: 0.2rem;
                        border-bottom: 0.04rem solid #3ba7c6;
                    }
                }
            }
        }
    }
</style>