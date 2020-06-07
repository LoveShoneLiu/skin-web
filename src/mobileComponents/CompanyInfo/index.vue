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
                    巢会营养健康成立于2020年1月，总部设立在陕西西安，现有服务人员超百人，售后质量监督人员超十人。是一家专注于亚健康咨询、健康管理、瘦身服务全方位方案研究的的健康管理服务公司。
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
                    为推动公司健康发展，将最好的服务体验带给每一位客户，公司一经成立，便立下“尽善尽美，精诚服务”的服务理念，始终将每一位客户的体验和评价放在第一位。公司负责人深知作为一个企业，发展必须要依托于国家政策，必须具有并且担负起相应的社会责任。长久以来，公司对产品安全、客户权益保障严格把关，打造售后服务团队和法务团队，严守产品质量安全，规范每一个服务人员的服务行为，禁止出现任何服务态度和违法违规的行为。
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

<style scoped lang="postcss">
@import '../../css/common/variable.css';
.company__info-box {
    margin-bottom: 80px;
}
.company__info-title {
    font-size: 0.4rem;
    color: #939393;
    text-align: center;
    padding: 1rem 0 0.5rem 0;
}
.company__info {
    display: flex;
    flex-direction: column;
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
    margin-bottom: 0.4rem;
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
        font-size: 0.3rem;
        padding: 0 20px;
        color: #ababab;
    }

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
        color: #666;
    }
    .info__item-con-bottom {
        opacity: 1;
        padding: 0 20px;
    }
}
.info__item-center {
    /* border-left: 1px solid #c8c8c8;
    border-right: 1px solid #c8c8c8; */
}
</style>
