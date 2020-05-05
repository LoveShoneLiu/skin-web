<template>
    <div class="company__info-box">
        <div class="company__info-title">走进巢会</div>
        <div class="company__info">
            <div class="info__item">
                <div class="info__item-con info__item-con-top">
                    <div class="info__item-con-top-border">
                        <img src="../../images/info1.png" />
                    </div>
                </div>
                <div class="info__item-con info__item-con-center">
                    我们是谁
                </div>
                <div class="info__item-con info__item-con-bottom">
                    巢会健康是一家集健康产品研发、生产、销售、服务于一体的多元化产业集团。集团旗下拥有电子商务、健康咨询、纤体连锁、地面零售、生物科技、培训学校、物流等关联企业。
                </div>
            </div>
            <div class="info__item info__item-center">
                <div class="info__item-con info__item-con-top">
                    <div class="info__item-con-top-border">
                        <img src="../../images/info2.png" />
                    </div>
                </div>
                <div class="info__item-con info__item-con-center">
                    巢会理念
                </div>
                <div class="info__item-con info__item-con-bottom">
                    巢会，作为国内健康体重管理方面的先行者之一，经过多年积累，巢会建立HEDS全维度科学体重管理体系，提出以Health（健康）、Experience（用户体验）、Data（大数据）、Science（科学）为核心的价值观。
                </div>
            </div>
            <div class="info__item">
                <div class="info__item-con info__item-con-top">
                    <div class="info__item-con-top-border">
                        <img src="../../images/info3.png" />
                    </div>
                </div>
                <div class="info__item-con info__item-con-center">
                    研发实力
                </div>
                <div class="info__item-con info__item-con-bottom">
                    巢会不断夯实研发实力，响应“健康中国”的国家战略，在构建大健康体系及其管理体系中，致力提升国民体质，护航国民健康。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    components: {
    }
}
</script>

<style scoped>
@import '../../css/common/variable.css';
.company__info-box {
    margin-bottom: 80px;
}
.company__info-title {
    font-size: 22px;
    color: #3bae46;
    text-align: center;
    padding: 50px 0;
}
.company__info {
    width: $itemWidth;
    display: flex;
    flex-direction: row;
}
.info__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    flex-shrink: 0;
    /* height: 400px; */
    cursor: pointer;
    transition: .5s all ease;
    .info__item-con-top {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 210px;
        transition: .5s all ease;
    }
    .info__item-con-top-border {
        transition: .5s all ease;
        width: 168px;
        height: 168px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        border: 1px solid #929292;
        img {
            transition: .5s all ease;
            width: 150px;
            height: 150px;
            border-radius: 100%;
        }
    }
    .info__item-con-center {
        font-size: 18px;
        padding: 10px 0 16px 0;
    }
    .info__item-con-bottom {
        opacity: 0;
        font-size: 12px;
        padding: 0 20px;
    }
}
.info__item:hover {
    color: #3bae46;
    .info__item-con-top-border {
        width: 198px;
        height: 198px;
        /* margin-left: -15px;
        margin-right: -15px; */
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        img {
            width: 180px;
            height: 180px;
            border-radius: 100%;
        }
    }
    .info__item-con-center {
        font-size: 18px;
        padding: 10px 0 16px 0;
    }
    .info__item-con-bottom {
        opacity: 1;
        padding: 0 20px;
    }
}
.info__item-center {
    border-left: 1px solid #c8c8c8;
    border-right: 1px solid #c8c8c8;
}
</style>
