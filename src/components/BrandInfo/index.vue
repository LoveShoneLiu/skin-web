<template>
    <div class="brand__com">
        <div class="brand__title">绿瘦品牌平台.LVSHOU BRANDS</div>
        <div class="brand__con">
            <div class="brand__con-item">
                <div class="item">
                    <div class="item__qr">
                        <img src="http://admin.lvshou.net/Uploads/adv/636779796140212032.jpg" />
                    </div>
                </div>
            </div>
            <div class="brand__con-item">
                <div class="item">
                    <div class="item__qr">
                        <img src="http://admin.lvshou.net/Uploads/adv/636779796140212032.jpg" />
                    </div>
                </div>
            </div>
            <div class="brand__con-item">
                <div class="item">
                    <div class="item__qr">
                        <img src="http://admin.lvshou.net/Uploads/adv/636779796140212032.jpg" />
                    </div>
                </div></div>
            <div class="brand__con-item">
                <div class="item">
                    <div class="item__qr">
                        <img src="http://admin.lvshou.net/Uploads/adv/636779796140212032.jpg" />
                    </div>
                </div></div>
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
.brand__com {
    width: $itemWidth;
    margin-bottom: 30px;
}
.brand__title {
    color: #3bae46;
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
}
.brand__con {
    display: flex;
    flex-direction: row;
}
.brand__con-item {
    /* border: 1px solid black; */
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .item {
        width: 187px;
        height: 153px;
        /* border: 1px solid black; */
        background-image: url('http://admin.lvshou.net/Uploads/adv/636779795394052859.jpg');
        background-size: 100% 100%;
        border-radius: 6px;
        .item__qr {
            border-radius: 6px;
            transition: .5s all ease;
            opacity: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            img {
                width: 120px;
                height: 120px;
            }
            background: rgba(0, 0, 0, 0.5);
        }
    }
    .item:hover {
        .item__qr {
            opacity: 1;
        }
    }
}
</style>
