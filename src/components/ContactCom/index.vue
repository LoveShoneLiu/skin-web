<template>
    <div class="in__com">
        <div class="top__pic">
            <p>人才战略</p>
        </div>
        <div class="article">
            <div class="article__con-box">
                <div class="article__con">
                    <p class="title">人才战略</p>
                    <p class="con">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        人力资源战略是集团战略发展的重要组成部分。"以人为本"是实现集团人才战略的基本原则，"吸纳人才，留住人才，发展人才"是人力资源战略的核心。
                    </p>
                    <p class="con">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>1.吸纳人才</span>：在全国范围内，不拘一格纳人才，我公司集团青睐富有创造激情的年轻复合型人才。我公司秉持---“诚信 健康 尽职尽责 纪律严明 拥抱变化”的企业价值观和“幸福工作、幸福生活、幸福传递”的文化意识。
                    </p>
                    <p class="con">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>2. 留住人才：</span>建立跟随市场变化的职位价值薪酬福利体系，为每位员工提供符合市场及岗位价值的薪酬及福利。我公司承诺——永不抛弃每一位愿为企业付出的员工。
                    </p>
                    <p class="con">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>3.发展人才：</span>我公司支持员工不断学习，提供与集团发展目标一致的各种培训与发展机会，全力提升员工竞争能力，实现企业与员工的"双赢"。
                    </p>
                    <div class="contact">
                        <p>
                            地址: 河南省郑州市郑东新区升龙广场3号楼B座1123号
                        </p>
                        <p>
                            售后: 400-691-2223
                        </p>
                        <p>
                            邮编: 450000
                        </p>
                        <p>
                            质检: 0371-63332181
                        </p>
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
@import '../../css/common/variable.css';
.in__com {
    background: #fff;
}
.top__pic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 344px;
    background: url('http://admin.lvshou.net/Uploads/nav/20160929175854.jpg') center center;
    p {
        /* position: absolute; */
        width: 100%;
        font-size: 34px;
        color: #fff;
        height: 40px;
        line-height: 40px;
        text-align: center;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
    }
}
.article {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1100px;
    background: url('../../images/leaf1.png') top right no-repeat, url('../../images/leaf1.png') center left no-repeat, url('../../images/leaf3.png') left bottom no-repeat;
}
.article__con-box {
    /* position: absolute;
    left: 50%;
    margin-left: -600px; */
    display: flex;
    justify-content: center;
    /* width: 1200px; */
    height: 1100px;
    /* height: 1083px; */
    /* border: 1px solid black; */
    background: url('../../images/bg2.jpg') no-repeat;
    background-position: center center;
}
.article__con {
    /* border: 1px solid black; */
    padding-top: 180px;
    width: 700px;
    .title {
        text-align: center;
        color: #262626;
        font-size: 23px;
        margin-bottom: 10px;
    }
    .con {
        font-size: 16px;
        color: rgb(127, 127, 127);
        line-height: 30px;
        margin-bottom: 10px;
        span {
            font-weight: bold;
        }
    }
    .contact {
        padding-top: 40px;
        p {
            color: rgb(127, 127, 127);
            font-size: 16px;
            margin-bottom: 10px;
        }
    }
}
</style>
