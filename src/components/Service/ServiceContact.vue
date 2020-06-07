<template>
    <div class="product__com">
        <div class="qr">
            <img src="../../images/qr.png" />
        </div>
        <div class="info">
            <div class="con">温馨提示：</div>
            <div class="con">尊敬的客户，感谢您对塑美纤品牌的信任，在服务过程中您有任何问题，请通过以上两种方式与我们取得联系：</div>
            <div class="con"><span>①</span>通过电话方式与售后服务电话联系，售后热线：400-691-2223；</div>
            <div class="con"><span>②</span>如遇热线处于忙线中，请您通过微信公众号进行留言，我们将尽快与您取得联系。</div>
            <div class="con">祝您生活愉快！</div>
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
    },
    mounted() {
    }
}
</script>

<style scoped lang="postcss">
.product__com {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .qr {
        padding: 40px;
        img {
            width: 300px;
            height: 300px;
        }
    }
    .info {
        font-size: 22px;
        margin-bottom: 60px;
        .con {
            line-height: 40px;
            span {
                font-size: 26px;
            }
        }
    }
}
</style>
