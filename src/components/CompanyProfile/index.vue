<template>
    <div class="company">
        <div class="company-resume">
            <div class="resume-con"> &nbsp;&nbsp;&nbsp;&nbsp;巢会营养健康成立于2020年1月，总部设立在陕西西安，现有服务人员超百人，售后质量监督人员超十人。是一家专注于亚健康咨询、健康管理、瘦身服务全方位方案研究的的健康管理服务公司。</div>
        </div>
        <div class="item-box">
            <div class="item">    
                <div class="copy-writer">
                    
                    <p class="title">公司战略目标</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;公司立足于健康中国战略，推动国内健康产业发展，顺应民众关切，关注有特殊健康需求的人群，从健康管理服务着手，倾力打造的瘦身品牌，依托于互联网新经济环境，向广大具有瘦身需求和与肥胖相关亚健康问题咨询的顾客朋友们提供优质的瘦身和咨询服务。</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;2016年，健康中国战略提出，《健康中国2030规划纲要》印发，积极响应国家“健康中国三步走“政策，以为广大用户提供最优质的服务为己任，为中国健康事业增砖添瓦。 </p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;为此公司创始人认真研究相关政策，以高瞻远瞩的目光和强烈的社会责任心，跻身大健康产业，历经两年多的准备，参与市场调研，认真研究具有特殊健康服务需求的人群健康数据和市场产品数据，奠定良好的发展基础。</p>
                </div>
                <img class="pic" src="../../images/16.png" />
            </div>
        </div>
        <div class="item-box">
            <div class="item">    
                <img class="pic" src="../../images/50.png" />
                <div class="copy-writer">
                    <p class="title">公司的服务理念</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;为推动公司健康发展，将最好的服务体验带给每一位客户，公司一经成立，便立下“尽善尽美，精诚服务”的服务理念，始终将每一位客户的体验和评价放在第一位。公司负责人深知作为一个企业，发展必须要依托于国家政策，必须具有并且担负起相应的社会责任。长久以来，公司对产品安全、客户权益保障严格把关，打造售后服务团队和法务团队，严守产品质量安全，规范每一个服务人员的服务行为，禁止出现任何服务态度和违法违规的行为。</p>
                     <p class="title">公司的未来发展</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;目前为止，公司面向全国各地，针对每一位有瘦身需求，或者肥胖亚健康咨询需求的朋友，提供一对一专业服务指导，探索出合理膳食+适量运动+产品方案+个性定制化瘦身方案，努力帮助每一位需要瘦身的客户成功瘦身，帮助每一位有肥胖相关亚健康疑问咨询的客户得到解决方案，已经取得了不错的成绩和口碑。</p>
                </div>
            </div>
        </div>
        <div class="item-box">
            <div class="item">    
                <div class="copy-writer">
                    <p class="title">公司的社会责任</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;我们倡导每个人都是自己健康的第一责任人，强化自身作为一个社会企业应当肩负起来的责任，立志于在瘦身的过程中顺应健康中国发展战略的要求，普及健康知识，引起每个人对自己健康的重视，从而强化个人健康责任，引导形成自主自律、符合自身特点的健康生活方式，有效控制影响健康的生活行为因素，从而为健康中国行动增添自己的一份助力。</p>
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;未来，公司将站立在健康瘦身、健康管理的舞台上，成为越来越多有需求的人的选择，紧跟国家战略脚步，引领大家追求健康，热爱健康！</p>
                </div>
                <img class="pic" src="../../images/17.png" />
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
.company {
    padding-top: 80px;
    padding-bottom: 80px;
    .company-resume {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        .resume-con {
            text-align: center;
            width: 80%;
            text-align: left;
        }
    }
    .item-box {
        margin-bottom: 80px;
        &.item-1 {
        }
        display: flex;
        justify-content: center;
        align-items: center;
        .item {
            display: flex;
            flex-direction: row;
            width: 80%;
            .pic {
                flex: 1;
                height: 350px;
                &:first-child {
                    padding-right: 20px;
                }
            }
            .copy-writer {
                flex: 1;
                font-size: 18px;
                line-height: 30px;
                .title {
                    font-size: 22px;
                    font-weight: bold;
                    padding: 10px 0 10px 0;
                }
                &:first-child {
                    padding-right: 20px;
                }
            }
        }
    }
}
</style>
