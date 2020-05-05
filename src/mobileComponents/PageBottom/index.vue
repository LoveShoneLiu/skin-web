<template>
    <div class="page-bottom">
        <div class="qr">
            <img src="../../images/qr.png" />
        </div>
        <div class="con-text">
            <div class="con-text-item">
                电话：17391795701   (9:00-18:00)
            </div>
            <div class="con-text-item">
                售后： 029-87597463
            </div>
            <div class="con-text-item">
                地址：河南省郑州市郑东新区升龙广场B座1123
            </div>
        </div>
        <div class="con-copy">
            <div class="con-copy-item">Copyright © **********</div>
            <div>版权所有：巢会-专业健康管理方案提供商</div>
            <div>**************</div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapMutations } from 'vuex';
    
    export default ({
        data() {
            return {
            }
        },
        components: {
        }
    })
</script>
<style scoped lang="postcss">
.page-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #3ba7c6;
    color: #fff;
    padding-top: 0.8rem;
}
.qr {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.4rem;
    img {
        width: 5rem;
        height: 5rem;
    }
}
.con-text {
    font-size: 0.4rem;
    padding: 0.4rem;
    .con-text-item {
        margin-bottom: 0.2rem;
    }
}
.con-copy {
    font-size: 0.4rem;
    padding: 0.4rem;
    .con-copy-item {
        margin-bottom: 0.2rem;
    }
}
</style>