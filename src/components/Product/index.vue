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
                    <div class="item-child info">
                        查看更多产品
                        <span>></span>
                    </div>
                </div>
            </div>
            <div class="main_item">
                <div class="item-con">
                    <div class="item-child icon icon2"></div>
                    <div class="item-child con-title">为健康而生</div>
                    <div class="item-child con">致力于让健康和美好身材并存。以专心专业专注的精神服务好每一个客户，焕发出最美好的形态。</div>
                    <div class="item-child info">
                        查看更多产品
                        <span>></span>
                    </div>
                </div>
            </div>
            <div class="main_item">
                <div class="item-con">
                    <div class="item-child icon icon3"></div>
                    <div class="item-child con-title">为专业而生</div>
                    <div class="item-child con">致力于让健康和美好身材并存。以专心专业专注的精神服务好每一个客户，焕发出最美好的形态。</div>
                    <div class="item-child info">
                        查看更多产品
                        <span>></span>
                    </div>
                </div>
            </div>
            <div class="main_item">
                <div class="item-con">
                    <div class="item-child icon icon4"></div>
                    <div class="item-child con-title">为安全而生</div>
                    <div class="item-child con">致力于让健康和美好身材并存。以专心专业专注的精神服务好每一个客户，焕发出最美好的形态。</div>
                    <div class="item-child info">
                        查看更多产品
                        <span>></span>
                    </div>
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
    .main_item {
        width: 281px;
        /* height: 200px; */
        margin-right: 25px;
        border: 1px solid #DEDEDE;
        &:hover {
            box-shadow: 0 0 3px 3px #EEE;
            transition: 0.3s;
            .icon {
                transform: rotateY(180deg);
            }
        }
        .item-con {
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
