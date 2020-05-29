<template>
    <div class="page__index">
        <el-carousel height="600px" class="carousel">
            <el-carousel-item>
                <img class="top-pic" src="../../images/42.png" />
                <!-- <h3 class="small">{{ item }}</h3> -->
            </el-carousel-item>
            <el-carousel-item>
                <img class="top-pic" src="../../images/45.png" />
                <!-- <h3 class="small">{{ item }}</h3> -->
            </el-carousel-item>
            <el-carousel-item>
                <img class="top-pic" src="../../images/41.png" />
                <!-- <h3 class="small">{{ item }}</h3> -->
            </el-carousel-item>
            <el-carousel-item>
                <img class="top-pic" src="../../images/47.png" />
                <!-- <h3 class="small">{{ item }}</h3> -->
            </el-carousel-item>
        </el-carousel>
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
            bgPic: [
                '../../images/41.png',
                '../../images/42.png',
                '../../images/43.png',
                '../../images/44.png'
            ]
        }
    },
    components: {
        CompanyInfo,
        PageBottom,
        BrandInfo,
        Live,
        Product,
        Introduce
    }
}
</script>

<style scoped lang="postcss">
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
</style>
