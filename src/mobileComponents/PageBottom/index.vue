<template>
    <div class="page-bottom">
        <div class="qr">
            <img src="../../images/qr.png" />
        </div>
        <div class="con-text">
            <!-- <div class="con-text-item">
                电话：17391795701   (9:00-18:00)
            </div> -->
            <div class="con-text-item">
                <span class="tips">售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后:</span><span class="tips-info"> 400-691-2223</span>
            </div>
            <div class="con-text-item">
                <span class="tips">质检电话:</span><span class="tips-info"> 0371-63332181</span>
            </div>
            <div class="con-text-item">
                <span class="tips">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址:</span><span class="tips-info"> 河南省郑州市郑东新区升龙广场3号楼B座1123号</span>
            </div>
            <div class="con-text-item"><span class="tips">版权所有:</span><span class="tips-info"> 巢会-专业健康管理方案提供商</span></div>
            <div class="con-text-item"><span class="tips">技术支持:</span><span class="tips-info"> 2397667718@qq.com</span></div>
            <div class="con-text-item"><span class="tips">ICP备案:</span><span class="tips-info"> 豫ICP备20015699号-1</span></div>
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
    background: rgba(67,168,72, 0.8);
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
        display: flex;
        flex-direction: row;
        span {
            display: inline-block;
        }
        .tips {
            width: 1.9rem;
            flex-shrink: 0;
        }
    }
}
.con-copy {
    font-size: 0.4rem;
    padding: 0.4rem;
    .con-copy-item {
        margin-bottom: 0.2rem;
        display: flex;
        flex-direction: row;
        span {
            display: inline-block;
        }
        .tips {
            width: 1.9rem;
            flex-shrink: 0;
        }
    }
}
</style>