<template>
    <div class="page__index">
        <el-carousel height="500px" class="carousel">
            <el-carousel-item v-for="item in 4" :key="item">
                <img :src="bgPic[item - 1]" />
                <!-- <h3 class="small">{{ item }}</h3> -->
            </el-carousel-item>
        </el-carousel>
        <div class="index__com-box">
            <CompanyInfo></CompanyInfo>
        </div>
        <PageBottom></PageBottom>
    </div>
</template>

<script>
import CompanyInfo from '../CompanyInfo';
import PageBottom from '../PageBottom';
export default {
    data() {
        return {
            bgPic: [
                'http://admin.lvshou.net/Uploads/adv/637054343110058821.jpg',
                'http://admin.lvshou.net/Uploads/adv/636674470839413064.jpg',
                'http://admin.lvshou.net/Uploads/adv/636982040691797587.jpg',
                'http://admin.lvshou.net/Uploads/adv/637031301120448135.jpg'
            ]
        }
    },
    components: {
        CompanyInfo,
        PageBottom
    }
}
</script>

<style scoped>
.index__com-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.carousel {
    height: 100%;
}
</style>
