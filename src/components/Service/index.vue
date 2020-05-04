<template>
    <div class="product__com">
        <ArticleZero
            v-if="!articleId"
        ></ArticleZero>
        <ArticleOne
            v-if="articleId == 1"
        ></ArticleOne>
        <ArticleTwo
            v-if="articleId == 2"
        ></ArticleTwo>
        <ArticleThree
            v-if="articleId == 3"
        ></ArticleThree>
        <ArticleFour
            v-if="articleId == 4"
        ></ArticleFour>
    </div>
</template>

<script>
import ArticleZero from './ArticleZero.vue';
import ArticleOne from './ArticleOne.vue';
import ArticleTwo from './ArticleTwo.vue';
import ArticleThree from './ArticleThree.vue';
import ArticleFour from './ArticleFour.vue';
export default {
    data() {
        return {
            articleId: 0,
        }
    },
    components: {
        ArticleZero,
        ArticleOne,
        ArticleTwo,
        ArticleThree,
        ArticleFour
    },
    mounted() {
        this.articleId = this.$route.query.articleId || null;
        console.log('this.$route', this.$route.query);
        console.log('this.articleId', this.articleId);
    }
}
</script>

<style scoped lang="postcss">
.product1 {
    padding-top: 80px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .product1-item {
        display: flex;
        flex-direction: row;
        width: 80%;
        border-bottom: 1px solid #e8e8e8;
        margin-bottom: 30px;
        &:last-child {
            border-bottom: none;
        }
        .item {
            flex: 1;
        }
        .item-pic {
            img {
                width: 100%;
            }
        }
        .item-info {
            padding-left: 40px;
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
