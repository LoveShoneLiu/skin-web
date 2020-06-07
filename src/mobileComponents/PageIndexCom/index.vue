<template>
    <div class="page-index">
        <div class="main-bg">
            <img src="../../images/100.jpg" />
        </div>
        <CompanyInfo></CompanyInfo>
        <Product></Product>
        <Live></Live>
        <Introduce></Introduce>
    </div>
</template>
<script>
    import { mapState, mapMutations } from 'vuex';
    import Product from '../Product';
    import Introduce from '../Introduce';
    import Live from '../Live';
    import CompanyInfo from '../CompanyInfo';
    export default ({
        data() {
            return {
                isMobile: window.isMobile
            }
        },
        components: {
            Product,
            Introduce,
            Live,
            CompanyInfo
        },
        methods: {
            ...mapMutations([
                'changeNavHandler',
            ])
        }
    })
</script>
<style scoped lang="postcss">
    @import '../../css/common/variable.css';
    .page-index {
        /* padding-top: 1.6rem; */
    }
    .main-bg {
        width: 100%;
        img {
            width: 100%;
        }
    }
</style>