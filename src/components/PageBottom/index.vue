<template>
    <div class="page__bottom">
        <div class="page__bottom-item page__bottom-rolling">
            <div class="rolling">
                <div class="rolling__title">全面响应“扫黑除恶”专项斗争宣传：</div>
                <div class="rolling__con">
                    <div class="rolling__con-text">
                        扫黑除恶，共建平安郑州
                    </div>
                </div>
            </div>
        </div>
        <div class="page__bottom-item page__bottom-info">
            <div class="info-wrapper">
                <div class="info-top">
                    <div class="info-top-item info-top-beian">公安备案号：豫ICP备20015699号-1</div>
                    <!-- <div class="info-top-item info-top-right">COPYRIGHT © 2007-2016 ***集团</div> -->
                    <div class="info-top-item info-top-name">河南巢会营养健康咨询有限公司</div>
                    <!-- <div class="info-top-item info-top-icp">ICP备案号：****************</div> -->
                </div>
                    <!-- 营业执照、食品经营许可证、药品经营许可证、二类医疗器械备案（含体外试剂）、开户许可证 -->
                <div class="info-bottom">
                    <span>售后: 400-691-2223</span>
                    <span>质检电话: 0371-63332181</span>
                    <span>地址: 河南省郑州市郑东新区升龙广场3号楼B座1123号</span>
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
.page__bottom-rolling {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 40px;
    border: 4px solid #43a848;
    margin-bottom: 4px;
}
.rolling {
    /* border: 1px solid black; */
    /* width: $itemWidth; */
    display: flex;
    flex-direction: row;
    width: 100%;
}
.rolling__title {
    /* border: 1px solid black; */
    height: 100%;
    font-size: 14px;
    font-weight: bold;
    width: 230px;
    padding-left: 120px;
}
@keyframes move{
	/* 原理 left值的变化 移动一个容器的宽度 */
	0%{
	  left: -160px;
	}
	100%{
	  left: 110%;
	}
}
.rolling__con {
    position: relative;
    flex: 1;
    height: 100%;
    /* border: 1px solid black; */
    overflow: hidden;
    color: #3bae46;
    .rolling__con-text {
        position: relative;
        height: 100%;
        animation: 14s move infinite linear;
        width: fit-content;
    }
}
.info-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
    margin-bottom: 20px;;
}
.info-top-item {
    margin-right: 15px;
}
.page__bottom-info {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #43a848;
    padding: 10px 0;
}
.info-bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
    span {
        margin-right: 20px;
    }
}
</style>
