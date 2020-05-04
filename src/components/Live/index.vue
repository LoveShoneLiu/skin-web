<template>
    <div class="live__com">
        <div class="live__com-title">
            <div class="line"></div>
            <div class="word">
                <div class="chiness">减肥生活</div>
                <div class="english">WEIGHT LOSS LIFE</div>
            </div>
            <div class="line"></div>
        </div>
        <div class="live__con-main">
            <div class="main-item-box">
                <div class="line line-top"></div>
                <div class="line line-bottom"></div>
                <div class="line line-left"></div>
                <div class="line line-right"></div>
                <div class="main-item main-item-1">
                    <div class="item-child icon icon1"></div>
                    <div class="item-child time">AM 08:00</div>
                    <div class="item-child title">早餐一碗清粥，唤醒身心</div>
                    <div class="item-child con">请给我们一个爱你的机会，倩魅为您奉上一碗清晨的粥，赤小豆薏米代餐粉冲泡的清粥，用心感受倩魅来自南国浓浓的爱意，感受38度6的温度。唤醒你的胃肠道，随着一碗清粥带走身体在睡眠期间沉睡的大量垃圾，健脾养胃又祛湿，刺激基础代谢率加快，加速体内脂肪代谢。美好的一天，让我们从爱开始~~</div>
                </div>
            </div>
            <div class="main-item-box">
                <div class="line line-top"></div>
                <div class="line line-bottom"></div>
                <div class="line line-left"></div>
                <div class="line line-right"></div>
                <div class="main-item main-item-1">
                    <div class="item-child icon icon2"></div>
                    <div class="item-child time">AM 08:00</div>
                    <div class="item-child title">早餐一碗清粥，唤醒身心</div>
                    <div class="item-child con">请给我们一个爱你的机会，倩魅为您奉上一碗清晨的粥，赤小豆薏米代餐粉冲泡的清粥，用心感受倩魅来自南国浓浓的爱意，感受38度6的温度。唤醒你的胃肠道，随着一碗清粥带走身体在睡眠期间沉睡的大量垃圾，健脾养胃又祛湿，刺激基础代谢率加快，加速体内脂肪代谢。美好的一天，让我们从爱开始~~</div>
                </div>
            </div>
            <div class="main-item-box">
                <div class="line line-top"></div>
                <div class="line line-bottom"></div>
                <div class="line line-left"></div>
                <div class="line line-right"></div>
                <div class="main-item main-item-1">
                    <div class="item-child icon icon3"></div>
                    <div class="item-child time">AM 08:00</div>
                    <div class="item-child title">早餐一碗清粥，唤醒身心</div>
                    <div class="item-child con">请给我们一个爱你的机会，倩魅为您奉上一碗清晨的粥，赤小豆薏米代餐粉冲泡的清粥，用心感受倩魅来自南国浓浓的爱意，感受38度6的温度。唤醒你的胃肠道，随着一碗清粥带走身体在睡眠期间沉睡的大量垃圾，健脾养胃又祛湿，刺激基础代谢率加快，加速体内脂肪代谢。美好的一天，让我们从爱开始~~</div>
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
.live__com {
    background-image: url('../../images/bg.png');
    background-repeat: no-repeat;
    width: 100%;
    margin-bottom: 80px;
}
.live__com-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    padding-top: 40px;
    .line {
        width: 60px;
        height: 2px;
        border: none;
        background: #fff;
        margin-top: -10px;
    }
    .word {
        color: #fff;
        text-align: center;
        margin: 0 10px;
        .chiness {
            font-size: 30px;
        }
        .english {
            font-size: 12px;
        }
    }
}
.live__con-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 40px;
    .main-item-box:hover {
        .line {
            &.line-bottom {
                left: 0;
                bottom: 0;
                right: 0;
                transform: translateX(0);
            }
            &.line-left {
                left: 0;
                bottom: 0;
                top: 0;
                transform: translateY(0);
            }
            &.line-top {
                left: 0;
                top: 0;
                right: 0;
                transform: translateX(0);
            }
            &.line-right {
                right: 0;
                bottom: 0;
                top: 0;
                transform: translateX(0);
            }
        }
    }
    .main-item-box {
        position: relative;
        color: #fff;
        padding: 40px 40px;
        margin-left: 10px;
        overflow: hidden;
        .line {
            transition: all .5s;
            position: absolute;
            &.line-bottom {
                border-top: 1px solid #fff;
                left: 0;
                bottom: 0;
                right: 0;
                transform: translateX(-100%);
            }
            &.line-left {
                border-left: 1px solid #fff;
                left: 0;
                bottom: 0;
                top: 0;
                transform: translateY(-100%);
            }
            &.line-top {
                border-top: 1px solid #fff;
                left: 0;
                top: 0;
                right: 0;
                transform: translateX(200%);
            }
            &.line-right {
                border-left: 1px solid #fff;
                right: 0;
                bottom: 0;
                top: 0;
                transform: translateY(200%);
            }
        }
        .main-item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .item-child {
                text-align: center;
            }
            .icon {
                width: 118px;
                height: 118px;
                background-repeat: no-repeat;
                margin-bottom: 20px;
            }
            .icon1 {
                background-image: url('../../images/3.png');
            }
            .icon2 {
                background-image: url('../../images/2.png');
            }
            .icon3 {
                background-image: url('../../images/1.png');
            }
            .time {
                font-size: 30px;
                margin-bottom: 15px;
            }
            .title {
                font-size: 20px;
                margin-bottom: 20px;
            }
            .con {
                font-size: 14px;
                width: 275px;
                margin-bottom: 40px;
            }

        }
    }
}
</style>
