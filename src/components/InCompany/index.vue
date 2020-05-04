<template>
    <div class="in__com">
        <div class="top__pic">
            <p>董事长寄语</p>
        </div>
        <div class="article">
            <div class="article__con-box">
                <div class="article__con">
                    <p class="title">董事长寄语</p>
                    <p class="con">
                        &nbsp&nbsp&nbsp&nbsp
                        您可能是第一次接触巢会，也有可能是巢会的老朋友，但我们终其一生，都必须与“健康”为友。我和几位志同道合的朋友一起创立了巢会品牌，希望可以为改善国民的健康情况尽一份力。
                    </p>
                    <p class="con">
                        &nbsp&nbsp&nbsp&nbsp
                        在巢会服务公众的时间里，我和我的团队夜以继日帮助她们摆脱肥胖带来的各种困扰，我们谨慎地研发优质的产品，勤勉地提供科学的服务，以日常饮食、营养补充、肠道健康、运动指导、线下减肥训练，甚至心理咨询，在大家的努力下，巢会已经成功帮助千万肥胖者重新回到健康快乐的生活中。但这还远远不够。
                    </p>
                    <p class="con">
                        &nbsp&nbsp&nbsp&nbsp
                        现在，巢会探索国际前沿的技术提高运营的效率，比如基因检测与靶向治疗，建立肥胖基因特征数据库，从蛋白层级揭示肥胖的本质原因。巢会也计划在全国范围内开设实体连锁经营，把我们的产品、服务与理念带给更多的社区，并且一部分产品已经进入各大连锁商超、药店、便利店。巢会的慈善基金组织会将我们的经营成果回馈给社会大众，为孩子们建设美丽的校园，为青少年肥胖建立帮扶机制。
                    </p>
                    <p class="con">
                        &nbsp&nbsp&nbsp&nbsp
                        未来，巢会希望成为每一个人终身信赖的朋友，巢会将倾尽全力维护您的健康，我代表我的伙伴们感谢您的来访，让我们一同建立一个美好的世界。
                    </p>
                </div>
            </div>
            <div class="article__con-pen"></div>
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
.in__com {
    background: #fff;
}
.top__pic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 344px;
    background: url('http://admin.lvshou.net/Uploads/nav/636451511009796013.jpg') center center;
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
    }
}
.article__con-pen {
    position: absolute;
    right: 0;
    bottom: 200px;
    width: 590px;
    height: 630px;
    background: url('../../images/pen.png') no-repeat;
    background-position: -162px center;
}
</style>
