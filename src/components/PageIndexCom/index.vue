<template>
    <div class="page__index">
        <div class="main-bg">
            <img src="../../images/100.jpg" />
        </div>
        <div class="index__com-box">
            <CompanyInfo></CompanyInfo>
            <Product></Product>
            <Live></Live>
            <Introduce></Introduce>
            <!-- <BrandInfo></BrandInfo> -->
        </div>
    </div>
</template>

<script>
import CompanyInfo from '../CompanyInfo';
import PageBottom from '../PageBottom';
import BrandInfo from '../BrandInfo';
import Live from '../Live';
import Product from '../Product';
import Introduce from '../Introduce';

export default {
    data() {
        return {

        }
    },
    components: {
        CompanyInfo,
        PageBottom,
        BrandInfo,
        Live,
        Product,
        Introduce
    },
    directives: {
    },
    computed: {
    },
    mounted() {
    }
}
</script>

<style lang="postcss">
.main-bg {
    width: 100%;
    height: auto;
    img {
        width: 100%;
    }
}
.index__com-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.carousel {
    height: 100%;
    .top-pic {
        width: 100%;
        height: 100%;
    }
}
.swiper-pagination {
    .swiper-pagination-bullet {
        background: rgba(255, 255, 255, 0.7);
    }
    .swiper-pagination-bullet-active {
        background: rgba(255, 255, 255, 0.9);
    }
}
</style>
