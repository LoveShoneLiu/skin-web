<template>
    <div class="product__com">
        <div class="product1">
            <div class="product1-item">
                <div class="item item-pic">
                    <img src="../../images/9.png" />
                </div>
                <div class="item item-info">
                    <div class="item-title">全方位多角度的健康管理</div>
                    <div class="item-btn">
                        <!-- <div class="btn">查看产品 ></div> -->
                    </div>
                </div>
            </div>
            <div class="product1-item">
                <div class="item item-pic">
                    <img src="../../images/10.png" />
                </div>
                <div class="item item-info">
                    <div class="item-title">健康测评</div>
                    <div class="item-btn">
                        <!-- <div class="btn">查看产品 ></div> -->
                    </div>
                </div>
            </div>
            <div class="product1-item">
                <div class="item item-pic">
                    <img src="../../images/11.png" />
                </div>
                <div class="item item-info">
                    <div class="item-title">合理膳食</div>
                    <div class="item-btn">
                        <!-- <div class="btn">查看产品 ></div> -->
                    </div>
                </div>
            </div>
            <div class="product1-item">
                <div class="item item-pic">
                    <img src="../../images/12.png" />
                </div>
                <div class="item item-info">
                    <div class="item-title">健康管理</div>
                    <div class="item-btn">
                        <!-- <div class="btn">查看产品 ></div> -->
                    </div>
                </div>
            </div>
            <div class="product1-item">
                <div class="item item-pic">
                    <img src="../../images/13.png" />
                </div>
                <div class="item item-info">
                    <div class="item-title">健康要多关注和重视</div>
                    <div class="item-btn">
                        <!-- <div class="btn">查看产品 ></div> -->
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
    },
    mounted() {
    }
}
</script>

<style scoped lang="postcss">
.product1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    .product1-item {
        display: flex;
        flex-direction: column;
        /* width: 80%; */
        border-bottom: 1px solid #e8e8e8;
        margin-bottom: 1rem;
        &:last-child {
            border-bottom: none;
        }
        .item {
            flex: 1;
        }
        .item-pic {
            margin-bottom: 0.5rem;
            img {
                width: 100%;
            }
        }
        .item-info {
            /* padding-left: 40px; */
            text-align: center;
            .item-title {
                color: #565656;
                font-size: 30px;
                margin-bottom: 30px;
            }
            .item-btn {
                .btn {
                    display: inline-block;
                    padding: 10px 15px;
                    border: 1px solid #a0d2cc;
                    border-radius: 3px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
