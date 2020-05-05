<template>
    <div class="page-index" @click="conClick">
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
    export default ({
        data() {
            return {
                isMobile: window.isMobile
            }
        },
        components: {
            Product,
            Introduce,
            Live
        },
        methods: {
            ...mapMutations([
                'changeNavHandler',
            ]),
            conClick() {
                this.changeNavHandler(false);
            }
        }
    })
</script>
<style scoped lang="postcss">
    @import '../../css/common/variable.css';
    .page-index {
        padding-top: 1.6rem;
    }
</style>