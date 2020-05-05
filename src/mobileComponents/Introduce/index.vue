<template>
    <div class="product__com">
        <div class="title">
            健康与美好身材并存
        </div>
        <div class="main">
            <div class="main_item" @click="itemClick({name: 'Service', params: {articleId: 1}})">
                <div class="item pic">
                    <img src="../../images/21.png" />
                </div>
                <div class="item con">
                    <div class="con-title">
                        <div class="title-text">应当如何注意饮食</div>
                        <div class="line"></div>
                    </div>
                    <div class="con-text">
                        有高血脂还有高尿酸，这可怎么办？其实，高血脂和高尿酸问题，都是属于慢性代谢性的疾病，因此，同时出现并不奇怪，特别是对于某些长期体重超标，特别是腹部型肥胖的朋友来...
                    </div>
                </div>
            </div>
            <div class="main_item" @click="itemClick({name: 'Service', params: {articleId: 2}})">
                <div class="item pic">
                    <img src="../../images/23.png" />
                </div>
                <div class="item con">
                    <div class="con-title">
                        <div class="title-text">肚子大暗示内脏脂肪过...</div>
                        <div class="line"></div>
                    </div>
                    <div class="con-text">
                        我们很多人之所以会肥胖，是由于体内脂肪堆积过多所呈现出来的一种症状。我们知道身体的内脏一般在腹腔部位，如果内脏脂肪堆积过多，就容易呈现出肚子大的现象。腹部脂肪多...
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="main_item" @click="itemClick({name: 'Service', params: {articleId: 3}})">
                <div class="item pic">
                    <img src="../../images/22.png" />
                </div>
                <div class="item con">
                    <div class="con-title">
                        <div class="title-text">健康管理包括哪些方面...</div>
                        <div class="line"></div>
                    </div>
                    <div class="con-text">
                        健康管理分为档案管理、亚健康管理、体检管理、疾病管理、知识管理五部分。
                    </div>
                </div>
            </div>
            <div class="main_item" @click="itemClick({name: 'Service', params: {articleId: 4}})">
                <div class="item pic">
                    <img src="../../images/24.png" />
                </div>
                <div class="item con">
                    <div class="con-title">
                        <div class="title-text">减肥节食最终会暴饮暴...</div>
                        <div class="line"></div>
                    </div>
                    <div class="con-text">
                        很多人一有减肥的念头，脑海里往往会蹦出“节食”这个词，比如不吃晚饭，或者干脆就连续几天不吃。
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
    methods: {
        itemClick(data) {
            const { name, params } = data;
            this.$router.push({
                name,
                query: params
            })
        }
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
    margin-bottom: 0.6rem;
    font-size: 0.4rem;
    span {
        color: #3ba7c6;
    }
}
.main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 0.6rem;
    padding: 0 0.3rem;
    .main_item {
        /* border: 1px solid black; */
        width: 100%;
        /* height: 400px; */
        display: flex;
        flex-direction: row;
        /* margin-right: 30px; */
        cursor: pointer;
        margin-bottom: 0.6rem;
    }
    .item {
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        img {
            width: 100%;
        }
    }
    .con {
        padding: 0 0.2rem 0 0.2rem;
        transition: 0.3s;
        /* box-shadow: 2px 2px 2px #EEE; */
        .con-title {
            font-size: 16px;
            color: #4a4a4a;
            margin-bottom: 20px;
            .title-text {
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: break-word;
                word-break: break-all;
                
            }
            .line {
                display: block;
                width: 50px;
                height: 2px;
                background: #2cb6a1;
                margin-bottom: 23px;
            }
        }
        .con-text {
            color: #adadad;
            line-height: 32px;
        }
    }
    .con:hover {
        box-shadow: 8px 8px 5px #EEE;
        .con-title {
            color: #adadad;
        }
    }
}
</style>
