<template>
    <div class="product__com">
        <div class="title">
            专为美丽而研制的
            <span>核心产品</span>
        </div>
        <div class="main">
            <div class="main_item">
                <div class="item-con">
                    <div class="item-child icon icon1"></div>
                    <div class="item-child con-title">为美丽而生</div>
                    <div class="item-child con">致力于让健康和美好身材并存。以专心专业专注的精神服务好每一个客户，焕发出最美好的形态。</div>
                    <router-link to="/Service" class="item-child info">
                        查看更多产品
                        <span>></span>
                    </router-link>
                </div>
            </div>
            <div class="main_item">
                <div class="item-con">
                    <div class="item-child icon icon2"></div>
                    <div class="item-child con-title">为健康而生</div>
                    <div class="item-child con">健康减肥不是梦，健康和减肥都是我们的第一目标，让我们来帮助你实现健康美丽的身材，从此走向人生巅峰。</div>
                    <router-link to="/Service" class="item-child info">
                        查看更多产品
                        <span>></span>
                    </router-link>
                </div>
            </div>
            <div class="main_item">
                <div class="item-con">
                    <div class="item-child icon icon3"></div>
                    <div class="item-child con-title">为专业而生</div>
                    <div class="item-child con">减肥我们是专业的，我们为专业而生，我们为减肥而生，选择我们不会错，因为我们会帮你实现完美身材。</div>
                    <router-link to="/Service" class="item-child info">
                        查看更多产品
                        <span>></span>
                    </router-link>
                </div>
            </div>
            <div class="main_item">
                <div class="item-con">
                    <div class="item-child icon icon4"></div>
                    <div class="item-child con-title">为安全而生</div>
                    <div class="item-child con">生命是宝贵的，我们有健全的质检机构，保证产品质量安全健康。</div>
                    <router-link to="/Service" class="item-child info">
                        查看更多产品
                        <span>></span>
                    </router-link>
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
.product__com {
    margin-bottom: 80px;
}
.title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    font-size: 36px;
    span {
        color: #3ba7c6;
    }
}
.main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .main_item {
        display: flex;
        flex: 1;
        width: 281px;
        /* height: 200px; */
        margin-right: 12px;
        margin-left: 12px;
        border: 1px solid #DEDEDE;
        &:hover {
            box-shadow: 0 0 3px 3px #EEE;
            transition: 0.3s;
            .icon {
                transform: rotateY(180deg);
            }
        }
        .item-con {
            flex: 1;
            display: flex;
            flex-direction: column;
            /* justify-content: center; */
            align-items: center;
            padding: 30px 30px;
            .item-child {
                margin-bottom: 14px;
            }
            .icon {
                transition: all .5s;
                width: 64px;
                height: 64px;
                background-repeat: no-repeat;
            }
            .icon1 {
                background-image: url('../../images/4.png');
            }
            .icon2 {
                background-image: url('../../images/5.png');
            }
            .icon3 {
                background-image: url('../../images/6.png');
            }
            .icon4 {
                background-image: url('../../images/7.png');
            }
            .con-title {
                font-size: 18px;
                color: #939393;
            }
            .con {
                font-size: 16px;
                margin-bottom: 20px;
                text-align: center;
                color: #ababab;
            }
            .info {
                font-size: 18px;
                color: #a1d8cb;
            }
        }
    }
}
</style>
