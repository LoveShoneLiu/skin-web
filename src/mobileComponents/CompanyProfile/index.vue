<template>
    <div class="company">
        <div class="item-box">
            <div class="item">    
                <img class="pic" src="../../images/16.png" />
                <div class="copy-writer">
                    河南巢会营养健康咨询有限公司是一家集研发 生产 销售于一体的集团公司。总部设于陕西西安，公司电子商务平台，一对一用户咨询服务 同时也是一家专注于为客户提供全方位体重管理改善：产品方案+饮食+运动 为一体实力服务提供商。企业自创建以来：始终秉持着“服务 诚信 互相成就，科技创新”的发展理念 会成长为我国体重管理的领头企业。

                </div>
            </div>
        </div>
        <div class="item-box">
            <div class="item">    
                <img class="pic" src="../../images/17.png" />
                <div class="copy-writer">
                    塑美纤品牌已先后推出 ：果蔬植物酵素肽 多种以植物水果 等一系列健康饮食产品。产品厂商原材料均源自天然种植，配方严秉水果和植物搭配，采用物理加工，以避免破坏原料中的纯天然纤维 和健康微量元素，在确保产品营养性、功效性的同时，产品优越的口感。“打造专属个人定制方案”与改善亚健康体质”愿不断完善企业自身，以成为更多大众追求青春美丽、愿和您身边的瘦身管家从而真正为选择开启健康瘦身新时代的潮流。
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
.company {
    /* padding-top: 80px;
    padding-bottom: 80px; */
    .item-box {
        margin-bottom: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .item {
            display: flex;
            flex-direction: column;
            width: 100%;
            img {
                width: 100%;
            }
            .pic {
                flex: 1;
            }
            .copy-writer {
                padding: 0.2rem;
                flex: 1;
                font-size: 0.35rem;
                line-height: 0.4rem;
            }
        }
    }
}
</style>
